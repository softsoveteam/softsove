"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    SOFTSOVE_API_URL?: string;
  }
}

const SCRIPTS = [
  "/assets/vendor/jquery/jquery.min.js",
  "/assets/vendor/gsap/gsap.min.js",
  "/assets/vendor/gsap/ScrollSmoother.min.js",
  "/assets/vendor/gsap/ScrollToPlugin.min.js",
  "/assets/vendor/gsap/ScrollTrigger.min.js",
  "/assets/vendor/gsap/Flip.min.js",
  "/assets/vendor/gsap/SplitText.min.js",
  "/assets/vendor/fancybox/js/fancybox.umd.js",
  "/assets/vendor/swiper/js/swiper-bundle.min.js",
  "/assets/js/elements.js",
  "/assets/js/theme.js",
];

let scriptsPromise: Promise<void> | null = null;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[data-theme-src="${src}"]`);
    if (existing) {
      if (existing.getAttribute("data-loaded") === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.themeSrc = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function loadAllScripts() {
  if (!scriptsPromise) {
    scriptsPromise = SCRIPTS.reduce(
      (chain, src) => chain.then(() => loadScript(src)),
      Promise.resolve(),
    );
  }
  return scriptsPromise;
}

export function ThemeScripts() {
  useEffect(() => {
    window.SOFTSOVE_API_URL = (process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000").replace(/\/+$/, "");
    void loadAllScripts();
  }, []);

  return null;
}
