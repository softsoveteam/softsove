import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strange Terrains",
  description: "Software, websites, apps, mobility, healthcare, industry, and India's government plot. Softsove occupies the ones that still have a pulse.",
};

type Kid = { name: string; note: string };
type TerrainMedia =
  | { kind: "gif"; src: string }
  | { kind: "video"; src: string; poster: string };
type Terrain = {
  id: string;
  filter: string;
  badge: string;
  title: string;
  lead: string;
  media: TerrainMedia;
  kids: Kid[];
};

const TERRAINS: Terrain[] = [
  {
    id: "terrain-mobility",
    filter: "mobility",
    badge: "Mobility",
    title: "Machines that refuse to sit still",
    lead: "Wheels, wings, and dirt. Software, apps, and screens that keep the machine from looking like a brochure.",
    media: {
      kind: "video",
      src: "/assets/vids/video-1/video-1.mp4",
      poster: "/assets/vids/video-1/video-1.jpg",
    },
    kids: [
      { name: "Aerospace", note: "Cabin doors, not cabin fever. Flight software that stays calm at altitude." },
      { name: "Automotive", note: "Roads that do not look like a press kit. Cars with a pulse, not a template." },
      { name: "Off Road", note: "Dirt first. Beige never. Machines that leave the tarmac and still behave." },
    ],
  },
  {
    id: "terrain-healthcare",
    filter: "healthcare",
    badge: "Healthcare",
    title: "Care that does not look like a waiting room",
    lead: "Devices, molecules, and pocket clinics. Health software a human would actually trust.",
    media: { kind: "gif", src: "/assets/img/terrains/healthcare.gif" },
    kids: [
      { name: "Medical Devices", note: "Hardware that does not scare the patient. Precision without the hospital beige." },
      { name: "Pharma & Life Sciences", note: "Molecules with a plot. Labs, data, and pipelines that refuse to nap." },
      { name: "Digital Health", note: "Clinics that live in a pocket. Care that shows up before the clipboard does." },
    ],
  },
  {
    id: "terrain-industrial",
    filter: "industrial",
    badge: "Industrial",
    title: "The factory that learned to think",
    lead: "Lines, walls, watts, tons, and robots. Heavy work with software as the nervous system.",
    media: {
      kind: "video",
      src: "/assets/vids/video-misc/video-misc-1.mp4",
      poster: "/assets/vids/video-misc/video-misc-1.jpg",
    },
    kids: [
      { name: "Industrial Automation", note: "Lines that do not wait for a clipboard. Sensors, PLCs, and zero yawns." },
      { name: "Building Technologies", note: "Walls with a nervous system. Buildings that notice you back." },
      { name: "Energy & Utilities", note: "Power without the beige bill. Grids, plants, and watts with manners." },
      { name: "Heavy Machinery", note: "Tons that still have taste. Big iron, sharp software." },
      { name: "Robotics and Autonomous Machines", note: "Hands we do not have to hold. Autonomy that earns the floor." },
    ],
  },
  {
    id: "terrain-hitech",
    filter: "hitech",
    badge: "Hi-Tech",
    title: "Circuits with a personality",
    lead: "Gadgets, locks, and sand that got ambitious. Tiny parts, loud software.",
    media: { kind: "gif", src: "/assets/img/terrains/hitech.gif" },
    kids: [
      { name: "Consumer Electronics", note: "Gadgets that do not look like last year. Pocket things with a pulse." },
      { name: "Security", note: "Locks that do not lecture. Threats get weird. So do we." },
      { name: "Semiconductor", note: "Sand that got ambitious. Yield, tape-out, and no tutorial-core leftovers." },
    ],
  },
  {
    id: "terrain-technology",
    filter: "technology",
    badge: "Technology",
    title: "The stack that does not apologize",
    lead: "Websites, apps, and any software dare. Compute, platforms, and the heavy stack behind them.",
    media: {
      kind: "video",
      src: "/assets/vids/video-2/video-2.mp4",
      poster: "/assets/vids/video-2/video-2.jpg",
    },
    kids: [
      { name: "Websites", note: "Sites that ship. Not a theme with a new logo glued on." },
      { name: "Apps", note: "Pockets, desks, and dashboards. If it taps, we build the plot." },
      { name: "Custom Software", note: "Any software challenge. If you can picture it, the desk starts arguing how." },
      { name: "Compute and Storage", note: "Rooms that remember everything. Racks, clouds, and quiet heat." },
      { name: "ISVs & Platforms", note: "Software other software hides behind. Platforms that refuse to be polite." },
    ],
  },
  {
    id: "terrain-civic",
    filter: "civic",
    badge: "The Public Plot",
    title: "India first. Beige never.",
    lead: "Indian government desks, Gujarat Police, Sansad, and the software that keeps a public brief honest. The state is one chapter. The country is the plot.",
    media: { kind: "gif", src: "/assets/img/terrains/civic.gif" },
    kids: [
      { name: "Indian Government", note: "National desks. Ministries, portals, and systems that serve the country, not a state slogan." },
      { name: "Government of Gujarat", note: "State work we already occupied. Portals, systems, and zero beige bureaucracy skins." },
      { name: "Gujarat Police", note: "Law-and-order software that does not look like a pamphlet. Desks that hold a beat." },
      { name: "Sansad", note: "Parliament desks. House work, constituent systems, and software that keeps the floor moving." },
      { name: "Politics Software", note: "Booths, lists, war rooms. Software that does not flinch on polling day." },
      { name: "Campaign Ads", note: "Spots that occupy the feed. Politics that looks like it meant it." },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
    </svg>
  );
}

export default function StrangeTerrainsPage() {
  return (
    <>
      <div id="page-header" className="ph-full ph-full-m ph-cap-xlg ph-image-parallax ph-caption-parallax">
        <div className="page-header-inner">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <h2 className="ph-caption-subtitle">( No boring industries )</h2>
              <h1 className="ph-caption-title">
                Strange
                <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-1">
                  <img src="/assets/img/terrains/memes/wizard.gif" alt="" />
                </span>
                Terrains<br />
                We Refuse to Leave<br />
                <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-2">
                  <img src="/assets/img/terrains/memes/dog.gif" alt="" />
                </span>
                Beige
              </h1>
              <div className="ph-caption-description max-width-700">
                Software, websites, apps. Mobility to molecules. India&apos;s government plot. If the brief still has a pulse, we occupy it.
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
              <a href="#tt-page-content" className="tt-btn tt-btn-secondary tt-magnetic-item">
                <span data-hover="Show All">Show All</span>
              </a>
              {TERRAINS.map((terrain) => (
                <a key={terrain.id} href={`#${terrain.id}`} className="tt-btn tt-btn-accent tt-magnetic-item">
                  <span data-hover={terrain.badge}>{terrain.badge}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="tt-section padding-top-40 padding-bottom-20">
          <div className="tt-section-inner">
            <div className="tt-moving-images tt-moi-boxed tt-moi-tilted-1 tt-terrain-moi">
              <div className="tt-moi-list">
                {[
                  "/assets/img/terrains/memes/evil.gif",
                  "/assets/img/terrains/memes/moss.gif",
                  "/assets/img/terrains/memes/math.gif",
                  "/assets/img/terrains/memes/office.gif",
                  "/assets/img/terrains/memes/pages.gif",
                  "/assets/img/terrains/memes/tyson.gif",
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
                    Software · Websites · Apps · Mobility · Healthcare · Industrial · Hi-Tech
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
                    India · Police · Sansad · Government · Robotics · Semiconductors · Platforms
                    <span className="tt-scrt-separator">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {TERRAINS.map((terrain, index) => (
          <div
            key={terrain.id}
            id={terrain.id}
            className={`tt-section padding-top-xlg-80 padding-bottom-xlg-80${index === 0 ? "" : " border-top"}`}
          >
            <div className="tt-section-inner tt-wrap">
              <div className={`tt-row${index % 2 ? " tt-lg-row-reverse" : ""}`}>
                <div className="tt-col-lg-5 tt-scroll-slide-col margin-bottom-40">
                  <div className={`tt-image tti-border-radius ${index % 2 ? "tti-tilted-2" : "tti-tilted-1"} tt-terrain-media`}>
                    <figure>
                      <span className="tt-job-badge">{terrain.badge}</span>
                      {terrain.media.kind === "gif" ? (
                        <img src={terrain.media.src} loading="lazy" alt={terrain.badge} />
                      ) : (
                        <video
                          loop
                          muted
                          playsInline
                          autoPlay
                          preload="metadata"
                          poster={terrain.media.poster}
                        >
                          <source src={terrain.media.src} type="video/mp4" />
                        </video>
                      )}
                      <span className="tt-terrain-media-wash" aria-hidden="true"></span>
                    </figure>
                  </div>
                </div>

                <div className="tt-col-lg-1"></div>

                <div className="tt-col-lg-6 tt-scroll-slide-anchor">
                  <div className="tt-heading tt-heading-lg margin-bottom-20">
                    <h3 className="tt-heading-subtitle tt-anim-lines">( {terrain.badge} )</h3>
                    <h2 className="tt-heading-title tt-anim-characters">{terrain.title}</h2>
                  </div>
                  <p className="text-lg tt-anim-fadeinup margin-bottom-40">{terrain.lead}</p>

                  <div className="tt-row">
                    {terrain.kids.map((kid, kidIndex) => (
                      <div
                        key={kid.name}
                        className={`${terrain.kids.length > 3 ? "tt-col-md-6" : "tt-col-md-4"} margin-bottom-20`}
                      >
                        <a
                          href="/lets-get-weird"
                          className={`tt-terrain-kid tt-anim-fadeinup${kidIndex % 2 ? " tt-terrain-kid-alt" : ""}`}
                          data-cursor="Occupy<br>This"
                        >
                          <span className="tt-terrain-kid-name">{kid.name}</span>
                          <span className="tt-terrain-kid-note">{kid.note}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="tt-section padding-top-xlg-80 padding-bottom-xlg-120 border-top">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-row">
              <div className="tt-col-xl-7">
                <div className="tt-heading tt-heading-xlg">
                  <h3 className="tt-heading-subtitle tt-anim-lines">( Your plot )</h3>
                  <h2 className="tt-heading-title tt-anim-characters">
                    If you can<br /> name the terrain,<br /> we can occupy it
                  </h2>
                </div>
              </div>
              <div className="tt-col-xl-5 tt-align-self-center">
                <p className="tt-anim-lines margin-bottom-30">
                  Missing from the list? Bring the dare anyway. SEO, AI, Python, Postgres, Next.js, Cassandra — the stack does not flinch.
                </p>
                <a href="/lets-get-weird" className="tt-btn tt-btn-secondary tt-magnetic-item tt-anim-fadeinup">
                  <span data-hover="Let's Get Weird">Let&apos;s Get Weird</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
