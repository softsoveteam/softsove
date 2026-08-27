import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = path.join(ROOT, "softsove");
const APP_DIR = path.join(ROOT, "app");

const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  colspan: "colSpan",
  rowspan: "rowSpan",
  srcset: "srcSet",
  crossorigin: "crossOrigin",
  datetime: "dateTime",
  formaction: "formAction",
  formenctype: "formEncType",
  formmethod: "formMethod",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  hreflang: "hrefLang",
  novalidate: "noValidate",
  spellcheck: "spellCheck",
  usemap: "useMap",
  contenteditable: "contentEditable",
  inputmode: "inputMode",
  playsinline: "playsInline",
  allowfullscreen: "allowFullScreen",
  charset: "charSet",
  checked: "defaultChecked",
  referrerpolicy: "referrerPolicy",
  fetchpriority: "fetchPriority",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-miterlimit": "strokeMiterlimit",
  "fill-rule": "fillRule",
  "fill-opacity": "fillOpacity",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "font-size": "fontSize",
  "font-family": "fontFamily",
  "font-weight": "fontWeight",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "color-interpolation-filters": "colorInterpolationFilters",
  "text-anchor": "textAnchor",
  "alignment-baseline": "alignmentBaseline",
  viewbox: "viewBox",
  preserveaspectratio: "preserveAspectRatio",
  gradientunits: "gradientUnits",
  "xmlns:xlink": "xmlnsXlink",
  "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace",
  "xml:lang": "xmlLang",
};

const NUMERIC_ATTRS = new Set([
  "rows",
  "cols",
  "span",
  "colSpan",
  "rowSpan",
  "tabIndex",
  "maxLength",
  "minLength",
  "size",
]);

const BOOLEAN_ATTRS = new Set([
  "checked",
  "defaultchecked",
  "disabled",
  "selected",
  "required",
  "readonly",
  "readonly",
  "autoplay",
  "muted",
  "loop",
  "controls",
  "multiple",
  "autofocus",
  "playsinline",
  "allowfullscreen",
  "novalidate",
  "open",
  "reversed",
  "hidden",
  "inert",
  "formnovalidate",
]);

const URL_ATTRS = new Set(["href", "src", "data-src", "poster", "action"]);

function toCamel(prop) {
  if (prop.startsWith("--")) return prop;
  return prop.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

function rewriteHref(value) {
  if (!value) return value;
  if (/^(https?:|mailto:|tel:|#|javascript:|\/\/)/i.test(value)) return value;

  const match = value.match(/^([^?#]+)([?#].*)?$/);
  if (!match) return value;
  let pathname = match[1];
  const suffix = match[2] || "";

  if (pathname === "index.html") pathname = "/";
  else if (pathname.endsWith(".html")) pathname = `/${pathname.slice(0, -5)}`;
  else if (pathname.startsWith("assets/")) pathname = `/${pathname}`;

  if (pathname === "/") return `/${suffix.replace(/^\//, "")}`.replace(/^\/\/+/, "/");
  return `${pathname}${suffix}`;
}

function rewriteAssetPath(value) {
  if (!value) return value;
  return value.replace(/(^|[\s,])assets\//g, "$1/assets/");
}

function rewriteUrl(attrName, value) {
  if (attrName === "href" || attrName === "action") return rewriteHref(value);
  if (attrName === "srcset") return rewriteAssetPath(value);
  return rewriteAssetPath(value);
}

function styleToJsx(style) {
  const entries = [];
  for (const decl of style.split(";")) {
    const idx = decl.indexOf(":");
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim();
    const val = decl.slice(idx + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith("--") ? `"${prop}"` : toCamel(prop);
    entries.push(`${key}: ${JSON.stringify(val)}`);
  }
  return `{{ ${entries.join(", ")} }}`;
}

function escapeJsxText(text) {
  if (!text) return "";
  if (!/[{}]/.test(text)) return text;
  return text
    .split(/(\{|\})/g)
    .map((part) => {
      if (part === "{") return "{'{'}"
      if (part === "}") return "{'}'}";
      return part;
    })
    .join("");
}

function mapAttrName(tag, rawName) {
  const lower = rawName.toLowerCase();
  if ((tag === "input" || tag === "textarea") && lower === "value") {
    const type = "";
    if (!["submit", "button", "reset"].includes(type)) {
      return "defaultValue";
    }
  }
  return ATTR_MAP[rawName] || ATTR_MAP[lower] || rawName;
}

function serializeAttrs(tag, attrs) {
  const type = String(attrs.type || "").toLowerCase();
  const parts = [];

  for (const [rawName, rawValue] of Object.entries(attrs)) {
    const lower = rawName.toLowerCase();
    let name = ATTR_MAP[rawName] || ATTR_MAP[lower] || rawName;
    let value = rawValue;

    if ((tag === "input" || tag === "textarea") && lower === "value") {
      if (!["submit", "button", "reset"].includes(type)) {
        name = "defaultValue";
      }
    }

    if (URL_ATTRS.has(lower) || lower === "srcset") {
      value = rewriteUrl(lower, String(value));
    }

    if (lower === "style") {
      parts.push(`style=${styleToJsx(String(value))}`);
      continue;
    }

    if (BOOLEAN_ATTRS.has(lower) && (value === "" || value === rawName || value === "true")) {
      parts.push(name);
      continue;
    }

    if (NUMERIC_ATTRS.has(name) && /^\d+$/.test(String(value))) {
      parts.push(`${name}={${value}}`);
      continue;
    }

    parts.push(`${name}=${JSON.stringify(value)}`);
  }

  return parts.length ? ` ${parts.join(" ")}` : "";
}

function serializeNode(node) {
  if (node.nodeType === 3) {
    return escapeJsxText(node.rawText ?? node.text ?? "");
  }
  if (node.nodeType === 8) {
    return "";
  }
  if (node.nodeType !== 1) {
    return "";
  }

  const tag = node.rawTagName;
  if (!tag) {
    return (node.childNodes || []).map(serializeNode).join("");
  }

  const lower = tag.toLowerCase();
  const attrs = serializeAttrs(lower, node.attributes || {});

  if (VOID_TAGS.has(lower)) {
    return `<${lower}${attrs} />`;
  }

  const children = (node.childNodes || []).map(serializeNode).join("");
  return `<${lower}${attrs}>${children}</${lower}>`;
}

function htmlToJsx(html) {
  const root = parse(`<div id="__root">${html}</div>`, {
    comment: false,
    lowerCaseTagName: false,
  });
  const container = root.querySelector("#__root");
  if (!container) return "";
  return container.childNodes.map(serializeNode).join("");
}

function extractContent(html) {
  const headerEnd = html.indexOf("<!-- End header -->");
  if (headerEnd === -1) {
    throw new Error("Could not find header end");
  }
  const start = headerEnd + "<!-- End header -->".length;
  const footerMatch = html.match(/<footer\b[^>]*\bid=["']tt-footer["']/);
  if (footerMatch && footerMatch.index != null) {
    return html.slice(start, footerMatch.index);
  }

  const wrapEnd = html.indexOf("<!-- End content wrap -->");
  if (wrapEnd === -1) {
    throw new Error("Could not find content wrap end");
  }
  let chunk = html.slice(start, wrapEnd);
  const lastDiv = chunk.lastIndexOf("</div>");
  if (lastDiv !== -1) {
    chunk = chunk.slice(0, lastDiv);
  }
  return chunk;
}

function extractTitle(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!match) return "Softsove";
  return match[1].split("|")[0].trim();
}

function extractDescription(html) {
  const match = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  return match ? match[1] : "Creative agency and portfolio website.";
}

function toComponentName(slug) {
  if (slug === "index") return "HomePage";
  if (slug === "404") return "Error404Page";
  return (
    slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("") + "Page"
  );
}

function indentJsx(jsx, spaces) {
  const pad = " ".repeat(spaces);
  return jsx
    .split("\n")
    .map((line) => (line.trim().length ? pad + line : line))
    .join("\n");
}

function buildPageModule(slug, title, description, jsx) {
  const component = toComponentName(slug);
  const indented = indentJsx(jsx.trim(), 6);
  return `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default function ${component}() {
  return (
    <>
${indented}
    </>
  );
}
`;
}

function writePage(slug, contents) {
  const dest =
    slug === "index" ? path.join(APP_DIR, "page.tsx") : path.join(APP_DIR, slug, "page.tsx");
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, contents);
  return dest;
}

const files = fs
  .readdirSync(SOURCE_DIR)
  .filter((file) => file.endsWith(".html"))
  .sort();

let converted = 0;
for (const file of files) {
  const slug = file.replace(/\.html$/, "");
  const html = fs.readFileSync(path.join(SOURCE_DIR, file), "utf8");
  const content = extractContent(html);
  const jsx = htmlToJsx(content);
  const title = extractTitle(html);
  const description = extractDescription(html);
  const moduleSource = buildPageModule(slug, title, description, jsx);
  const dest = writePage(slug, moduleSource);
  converted += 1;
  console.log(`converted ${file} -> ${path.relative(ROOT, dest)}`);
}

const notFoundSrc = path.join(APP_DIR, "404", "page.tsx");
if (fs.existsSync(notFoundSrc)) {
  const source = fs.readFileSync(notFoundSrc, "utf8");
  fs.writeFileSync(
    path.join(APP_DIR, "not-found.tsx"),
    source.replace("export default function Error404Page", "export default function NotFound"),
  );
  console.log("converted 404.html -> app/not-found.tsx");
}

console.log(`Done. Converted ${converted} pages.`);
