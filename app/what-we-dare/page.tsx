import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Dare",
  description: "Fourteen dares. Software, websites, apps, AI, and the rest of the plot. Softsove occupies the briefs that still have a pulse.",
};

type Dare = {
  id: string;
  real: string;
  title: string;
  note: string;
  shot: string;
  lines: [string, string];
};

type Kitchen = {
  id: string;
  badge: string;
  title: string;
  lead: string;
  media: { kind: "gif" | "video"; src: string; poster?: string };
  dares: Dare[];
};

const KITCHENS: Kitchen[] = [
  {
    id: "dare-build",
    badge: "The Build",
    title: "Things that ship, not things that pose",
    lead: "Software, websites, apps, and carts. If it has to work on Monday, this is the desk.",
    media: {
      kind: "video",
      src: "/assets/vids/video-2/video-2.mp4",
      poster: "/assets/vids/video-2/video-2.jpg",
    },
    dares: [
      { id: "software", real: "Software Development", title: "The stack that argues back", note: "Custom software that does not nap in a boilerplate. If you can picture it, the desk starts arguing how.", shot: "/assets/img/dares/memes/deal.gif", lines: ["We write software that argues back", "until the dare has a spine."] },
      { id: "website", real: "Website Development", title: "Sites that refuse a theme", note: "Pages that ship with a pulse. Not a template with a new logo glued on.", shot: "/assets/img/dares/memes/sponge.gif", lines: ["We build websites that refuse a theme", "and still ship with a pulse."] },
      { id: "mobile", real: "Mobile Development", title: "Pockets with a plot", note: "Apps that live in a hand and still have manners. iOS, Android, both, neither — we occupy the tap.", shot: "/assets/img/dares/memes/lock.gif", lines: ["We put a plot in your pocket", "so the tap does not feel like a brochure."] },
      { id: "ecom", real: "E-commerce Solutions", title: "Carts that actually convert", note: "Shops that sell instead of decorate. Checkout without the beige maze.", shot: "/assets/img/dares/memes/cart.gif", lines: ["We build carts that actually convert", "not shops that only decorate."] },
    ],
  },
  {
    id: "dare-look",
    badge: "The Look",
    title: "Screens that do not apologize",
    lead: "UI, UX, brands. The part people feel before they read a single line.",
    media: { kind: "gif", src: "/assets/img/dares/memes/sponge.gif" },
    dares: [
      { id: "uiux", real: "UI/UX Design", title: "The tap that makes sense", note: "Flows a human would actually finish. Pretty is easy. Clear is the dare.", shot: "/assets/img/dares/memes/sponge.gif", lines: ["We design the tap that makes sense.", "Pretty is easy. Clear is the dare."] },
      { id: "brand", real: "Branding & Creative Services", title: "Looks that refuse beige", note: "Marks, decks, and mischief that do not look like the neighbor's startup.", shot: "/assets/img/dares/memes/cart.gif", lines: ["We make looks that refuse beige", "and marks that do not look like the neighbor."] },
    ],
  },
  {
    id: "dare-brain",
    badge: "The Brain",
    title: "The clipboard funeral",
    lead: "AI, automation, and numbers with a pulse. The desk that thinks so yours does not have to.",
    media: {
      kind: "video",
      src: "/assets/vids/video-1/video-1.mp4",
      poster: "/assets/vids/video-1/video-1.jpg",
    },
    dares: [
      { id: "ai", real: "AI Solutions", title: "The brain we taught manners", note: "Models that earn the room. Not a chatbot sticker slapped on a tired form.", shot: "/assets/img/dares/memes/deal.gif", lines: ["We teach the brain some manners.", "No chatbot sticker on a tired form."] },
      { id: "auto", real: "Business Process Automation", title: "The clipboard funeral", note: "Busywork gets a quiet burial. Humans keep the plot. Software keeps the grind.", shot: "/assets/img/dares/memes/lock.gif", lines: ["We hold the clipboard funeral.", "Humans keep the plot. Software keeps the grind."] },
      { id: "data", real: "Data Analytics & BI", title: "Numbers with a pulse", note: "Dashboards that tell the truth. If the chart cannot dare a decision, we rebuild it.", shot: "/assets/img/dares/memes/cart.gif", lines: ["We give numbers a pulse.", "If the chart cannot dare a decision, we rebuild it."] },
    ],
  },
  {
    id: "dare-loud",
    badge: "The Loud",
    title: "The feed has to notice you",
    lead: "SEO and digital marketing that occupies the search, not a graveyard of keywords.",
    media: { kind: "gif", src: "/assets/img/dares/memes/cart.gif" },
    dares: [
      { id: "seo", real: "SEO & Digital Marketing", title: "The loud desk", note: "Search, ads, content, and the mischief that makes a stranger become a brief.", shot: "/assets/img/dares/memes/cart.gif", lines: ["We occupy the search and the feed", "until a stranger becomes a brief."] },
    ],
  },
  {
    id: "dare-spine",
    badge: "The Spine",
    title: "Rooms that stay up",
    lead: "Cloud, locks, and the desk that does not ghost you after launch.",
    media: {
      kind: "video",
      src: "/assets/vids/video-misc/video-misc-1.mp4",
      poster: "/assets/vids/video-misc/video-misc-1.jpg",
    },
    dares: [
      { id: "cloud", real: "Cloud & DevOps", title: "Rooms that stay up", note: "Deploys that do not pray. Pipelines, clouds, and quiet heat.", shot: "/assets/img/dares/memes/deal.gif", lines: ["We keep the rooms up.", "Deploys that do not pray. Quiet heat."] },
      { id: "cyber", real: "Cybersecurity", title: "Locks that do not lecture", note: "Threats get weird. So do we. Security that holds without the scare pamphlet.", shot: "/assets/img/dares/memes/lock.gif", lines: ["We build locks that do not lecture.", "Threats get weird. So do we."] },
      { id: "support", real: "Maintenance & Support", title: "The desk that does not ghost", note: "After launch is still the plot. Fixes, watch, and a human on the line.", shot: "/assets/img/dares/memes/sponge.gif", lines: ["We are the desk that does not ghost.", "After launch is still the plot."] },
    ],
  },
  {
    id: "dare-plot",
    badge: "The Plot",
    title: "The brief before the build",
    lead: "IT consulting for people who want a map, not a 90-page nap.",
    media: { kind: "gif", src: "/assets/img/dares/memes/deal.gif" },
    dares: [
      { id: "consult", real: "IT Consulting", title: "The plot before the build", note: "We sit with the mess first. Then we dare a stack. No slide deck that dies in a drawer.", shot: "/assets/img/dares/memes/deal.gif", lines: ["We sit with the mess first.", "Then we dare a stack. No 90-page nap."] },
    ],
  },
];

const ROSTER = KITCHENS.flatMap((kitchen) => kitchen.dares);

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
    </svg>
  );
}

export default function WhatWeDarePage() {
  return (
    <>
      <div id="page-header" className="ph-full ph-full-m ph-cap-xlg ph-image-parallax ph-caption-parallax">
        <div className="ph-image-trail ph-itr-full">
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-1-600.png" alt="" />
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-2-600.png" alt="" />
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-3-600.png" alt="" />
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-4-600.png" alt="" />
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-5-600.png" alt="" />
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-6-600.png" alt="" />
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-7-600.png" alt="" />
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-8-600.png" alt="" />
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-9-600.png" alt="" />
          <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-10-600.png" alt="" />
        </div>

        <div className="page-header-inner">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <h2 className="ph-caption-subtitle">( No boring retainers )</h2>
              <h1 className="ph-caption-title">
                What We Dare is fourteen plots
                <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-1">
                  <img src="/assets/img/dares/memes/sponge.gif" alt="" />
                </span>
                <br />
                on one desk that still argues
                <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-2">
                  <img src="/assets/img/dares/memes/cart.gif" alt="" />
                </span>
              </h1>
              <div className="ph-caption-description max-width-700">
                Six kitchens. Zero beige menus.
                <br /> Pick a plot. The desk starts arguing how.
              </div>
            </div>
          </div>
        </div>

        <div className="ph-social">
          <div className="tt-social-buttons">
            <ul>
              <li><a href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="https://x.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-x-twitter"></i></a></li>
              <li><a href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-dribbble"></i></a></li>
              <li><a href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-behance"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="tt-scroll-down">
          <a href="#tt-page-content" className="tt-sd-inner tt-magnetic-item" data-offset="0">
            <div className="tt-sd-arrow">
              <ArrowIcon />
            </div>
          </a>
        </div>
      </div>

      <div id="tt-page-content">
        <div className="tt-section padding-top-xlg-20 no-padding-bottom">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-grid-filter tt-grf-center tt-anim-fadeinup">
              <a href="#dare-roster" className="tt-btn tt-btn-secondary tt-magnetic-item">
                <span data-hover="All 14">All 14</span>
              </a>
              {KITCHENS.map((kitchen) => (
                <a key={kitchen.id} href={`#${kitchen.id}`} className="tt-btn tt-btn-accent tt-magnetic-item">
                  <span data-hover={kitchen.badge}>{kitchen.badge}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div id="dare-roster" className="tt-section">
          <div className="tt-section-inner">
            <div className="tt-portfolio-scrolling tt-pscr-alter-hover tt-pscr-boxed tt-pscr-tilted tt-pscr-tilted-m tt-dare-pscr tt-testimonials-list" data-scroll-speed="60">
              {ROSTER.map((dare) => (
                <a key={dare.id} href={`/lets-get-weird?dare=${dare.id}`} className="tt-pscr-item tt-testimonials-list-item tt-anim-fadeinup" data-cursor="Take<br>This">
                  <div className="tt-pscr-item-inner">
                    <div className="tt-pscr-item-content">
                      <h2 className="tt-pscr-item-title">{dare.title}</h2>
                      <picture className="tt-pscr-item-image">
                        <img src={dare.shot} loading="lazy" alt="" />
                      </picture>
                    </div>
                  </div>
                  <div className="tt-pscr-item-categories">
                    <div className="tt-pscr-item-category">{dare.real}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="tt-section padding-top-20 padding-bottom-20">
          <div className="tt-section-inner">
            <div className="tt-moving-images tt-moi-boxed tt-moi-tilted-1 tt-terrain-moi">
              <div className="tt-moi-list">
                {[
                  "/assets/img/dares/memes/sponge.gif",
                  "/assets/img/dares/memes/deal.gif",
                  "/assets/img/dares/memes/lock.gif",
                  "/assets/img/dares/memes/cart.gif",
                ].map((src, i) => (
                  <div className="tt-moi-item" key={`${src}-${i}`}>
                    <div className="tt-moi-item-inner">
                      <img src={src} loading="lazy" alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="tt-section padding-top-20 padding-bottom-20">
          <div className="tt-section-inner">
            <div className="tt-scrolling-text scrt-dyn-separator tt-scrt-tilted-2 tt-scrt-bordered" data-scroll-speed="28" data-change-direction="true">
              <div className="tt-scrt-inner">
                <div className="tt-scrt-content">
                  <div className="tt-scrt-text">
                    Software · Websites · Apps · Carts · UI · Brands
                    <span className="tt-scrt-separator">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tt-scrolling-text scrt-dyn-separator tt-scrt-tilted-1 scrt-color-reverse" data-opposite-direction="true" data-scroll-speed="32" data-change-direction="true">
              <div className="tt-scrt-inner">
                <div className="tt-scrt-content">
                  <div className="tt-scrt-text">
                    AI · Automation · Data · SEO · Cloud · Locks · Support · Consulting
                    <span className="tt-scrt-separator">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {KITCHENS.map((kitchen, index) => (
          <div
            key={kitchen.id}
            id={kitchen.id}
            className={`tt-section padding-top-xlg-80 padding-bottom-xlg-80${index === 0 ? "" : " border-top"}`}
          >
            <div className="tt-section-inner tt-wrap">
              <div className={`tt-row${index % 2 ? " tt-lg-row-reverse" : ""}`}>
                <div className="tt-col-lg-5 tt-scroll-slide-col margin-bottom-40">
                  <div className={`tt-image tti-border-radius ${index % 2 ? "tti-tilted-2" : "tti-tilted-1"} tt-terrain-media`}>
                    <figure>
                      <span className="tt-job-badge">{kitchen.badge}</span>
                      {kitchen.media.kind === "gif" ? (
                        <img src={kitchen.media.src} loading="lazy" alt={kitchen.badge} />
                      ) : (
                        <video loop muted playsInline autoPlay preload="metadata" poster={kitchen.media.poster}>
                          <source src={kitchen.media.src} type="video/mp4" />
                        </video>
                      )}
                      <span className="tt-terrain-media-wash" aria-hidden="true"></span>
                    </figure>
                  </div>
                </div>

                <div className="tt-col-lg-1"></div>

                <div className="tt-col-lg-6 tt-scroll-slide-anchor">
                  <div className="tt-heading tt-heading-lg margin-bottom-20">
                    <h3 className="tt-heading-subtitle tt-anim-lines">( {kitchen.badge} )</h3>
                    <h2 className="tt-heading-title tt-anim-characters">{kitchen.title}</h2>
                  </div>
                  <p className="text-lg tt-anim-fadeinup margin-bottom-40">{kitchen.lead}</p>

                  <div className="tt-row">
                    {kitchen.dares.map((dare, dareIndex) => (
                      <div
                        key={dare.id}
                        className={`${kitchen.dares.length > 3 ? "tt-col-md-6" : kitchen.dares.length === 1 ? "tt-col-12" : "tt-col-md-6"} margin-bottom-20`}
                      >
                        <a
                          href={`/lets-get-weird?dare=${dare.id}`}
                          className={`tt-terrain-kid tt-anim-fadeinup${dareIndex % 2 ? " tt-terrain-kid-alt" : ""}`}
                          data-cursor="Take<br>This"
                        >
                          <span className="tt-job-badge tt-job-badge-inline">{dare.real}</span>
                          <span className="tt-terrain-kid-name">{dare.title}</span>
                          <span className="tt-terrain-kid-note">{dare.note}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="tt-section padding-bottom-xlg-120">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-heading tt-heading-xlg tt-heading-center">
              <h3 className="tt-heading-subtitle tt-anim-lines">( Your dare )</h3>
              <h2 className="tt-heading-title">
                <a href="/lets-get-weird" className="tt-anim-characters" data-cursor="Contact">
                  Bring the brief. We will dare it.
                </a>
              </h2>
              <p className="tt-anim-lines">Let&apos;s Get Weird is the contact desk. The phone icon already told you.</p>
              <a href="/lets-get-weird" className="tt-btn tt-btn-secondary tt-magnetic-item margin-top-40 tt-anim-fadeinup">
                <span className="tt-btn-icon">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span data-hover="Let's Get Weird">Let&apos;s Get Weird</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
