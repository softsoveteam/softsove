import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typed Things",
  description: "Notes Softsove actually typed. No beige posts. Time to Make Boring Illegal.",
};

const POSTS = [
  {
    href: "/blog-post",
    title: "Beige Is a Crime",
    category: "Process",
    filter: "process",
    image: "/assets/img/blog/800/blog-4-800.jpg",
    portrait: true,
  },
  {
    href: "/blog-post",
    title: "Anand After Hours",
    category: "Culture",
    filter: "culture",
    image: "/assets/img/blog/800/blog-1-800.jpg",
    portrait: false,
  },
  {
    href: "/blog-post",
    title: "Nobody Asked For Another Hero",
    category: "Opinions",
    filter: "opinions",
    image: "/assets/img/blog/800/blog-2-800.jpg",
    portrait: true,
  },
  {
    href: "/blog-post",
    title: "Figma Is Not a Personality",
    category: "Process",
    filter: "process",
    image: "/assets/img/blog/800/blog-3-800.jpg",
    portrait: false,
  },
  {
    href: "/blog-post",
    title: "The Desk That Refuses Meetings",
    category: "Culture",
    filter: "culture",
    image: "/assets/img/blog/800/blog-5-800.jpg",
    portrait: true,
  },
  {
    href: "/blog-post",
    title: "Newsletters Are How Ideas Die",
    category: "Opinions",
    filter: "opinions",
    image: "/assets/img/blog/800/blog-1-800.jpg",
    portrait: true,
  },
  {
    href: "/blog-post",
    title: "Ship Ugly, Then Get Weird",
    category: "Process",
    filter: "process",
    image: "/assets/img/blog/800/blog-2-800.jpg",
    portrait: false,
  },
  {
    href: "/blog-post",
    title: "We Don't Do Thought Leadership",
    category: "Culture",
    filter: "culture",
    image: "/assets/img/blog/800/blog-3-800.jpg",
    portrait: false,
  },
] as const;

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
    </svg>
  );
}

export default function TypedThingsPage() {
  return (
    <>
      <div id="page-header" className="ph-full ph-full-m ph-cap-xlg ph-image-parallax ph-caption-parallax">
        <div className="page-header-inner">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <h2 className="ph-caption-subtitle">( No boring posts )</h2>
              <h1 className="ph-caption-title">
                Typed
                <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-1">
                  <img src="/assets/img/misc/text-img-3.gif" alt="" />
                </span>
                Things<br />
                We Refuse to Make<br />
                <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-2">
                  <img src="/assets/img/misc/text-img-2.jpg" alt="" />
                </span>
                Beige
              </h1>
              <div className="ph-caption-description max-width-700">
                A tilted pile of notes, takes, and studio mischief. If it reads like a newsletter, it did not leave this desk.
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
        <div className="tt-section padding-top-xlg-20">
          <div className="tt-section-inner">
            <div className="tt-portfolio-grid tt-pgi-boxed tt-pgi-tilted">
              <div className="tt-grid tt-grid-col-4 tt-grid-gap-3 tt-grid-appear">
                <div className="tt-grid-filter tt-grf-center tt-anim-fadeinup">
                  <button type="button" className="tt-btn tt-btn-secondary tt-magnetic-item">
                    <span data-hover="Show All">Show All</span>
                  </button>
                  <button type="button" className="tt-btn tt-btn-accent tt-magnetic-item" data-filter=".process">
                    <span data-hover="Process">Process</span>
                  </button>
                  <button type="button" className="tt-btn tt-btn-accent tt-magnetic-item" data-filter=".culture">
                    <span data-hover="Culture">Culture</span>
                  </button>
                  <button type="button" className="tt-btn tt-btn-accent tt-magnetic-item" data-filter=".opinions">
                    <span data-hover="Opinions">Opinions</span>
                  </button>
                </div>

                <div className="tt-grid-list">
                  {POSTS.map((post) => (
                    <div className={`tt-grid-item ${post.filter}`} key={post.title}>
                      <div className="tt-grid-item-inner">
                        <div className={`tt-portfolio-grid-item${post.portrait ? " tt-pgi-portrait" : ""}`}>
                          <a href={post.href} className="tt-pgi-image" data-cursor="Read<br>This">
                            <img src={post.image} loading="lazy" alt="" />
                          </a>
                          <div className="tt-pgi-info">
                            <h2 className="tt-pgi-title">
                              <a href={post.href}>{post.title}</a>
                            </h2>
                            <a href={post.href} className="tt-pgi-icon">
                              <ArrowIcon />
                            </a>
                            <div className="tt-pgi-categories">
                              <a href="/typed-things" className="tt-pgi-category">
                                {post.category}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
