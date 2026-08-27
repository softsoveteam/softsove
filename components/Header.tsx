"use client";

import { usePathname } from "next/navigation";

const HOME_HREFS = ["/", "/landing-page-1", "/landing-page-2", "/landing-page-3"];
const WORK_HREFS = [
  "/portfolio-grid",
  "/portfolio-grid-2-col",
  "/portfolio-grid-boxed",
  "/portfolio-grid-no-gap",
  "/portfolio-masonry",
  "/portfolio-masonry-boxed",
  "/portfolio-list",
  "/portfolio-list-shifted",
  "/portfolio-list-boxed",
  "/portfolio-list-inline",
  "/portfolio-list-inline-shifted",
  "/portfolio-scrolling",
  "/portfolio-scrolling-tilted",
  "/portfolio-scrolling-boxed-tilted",
  "/portfolio-carousel",
  "/portfolio-carousel-boxed",
  "/portfolio-carousel-focused",
  "/portfolio-carousel-small",
  "/portfolio-slider-horizontal",
  "/portfolio-slider-vertical",
  "/single-project-1",
  "/single-project-2",
  "/single-project-3",
  "/single-project-4",
  "/single-project-5",
  "/single-project-6",
  "/single-project-7",
  "/single-project-8",
  "/single-project-9",
  "/portfolio-category",
];
const ABOUT_HREFS = ["/about-us", "/about-us-2", "/about-me", "/about-me-2"];
const BLOG_HREFS = [
  "/blog",
  "/blog-sidebar",
  "/blog-compact",
  "/blog-post",
  "/blog-post-sidebar",
  "/blog-archive",
];
const CONTACT_HREFS = ["/lets-get-weird", "/contact", "/contact-simple"];
const MORE_HREFS = [
  "/services",
  "/services-2",
  "/pricing",
  "/testimonials",
  "/dummy",
  "/dummy-2",
  "/dummy-3",
  "/faq",
  "/404",
  "/elements",
  "/elements-buttons",
  "/elements-forms",
  "/elements-media",
  "/elements-typography",
];

function normalizePath(pathname: string) {
  if (pathname === "/") return "/landing-page-1";
  return pathname;
}

function isCurrent(pathname: string, href: string) {
  return normalizePath(pathname) === normalizePath(href);
}

function isInSection(pathname: string, hrefs: string[]) {
  const current = normalizePath(pathname);
  return hrefs.some((href) => normalizePath(href) === current);
}

function itemClass(pathname: string, href: string) {
  return isCurrent(pathname, href) ? "active" : undefined;
}

function wrapClass(pathname: string, hrefs: string[], extra = "tt-submenu-wrap") {
  return [extra, isInSection(pathname, hrefs) ? "active" : undefined]
    .filter(Boolean)
    .join(" ");
}

type HeaderProps = {
  variant?: "default" | "fullscreen";
};

export function Header({ variant = "default" }: HeaderProps) {
  const pathname = usePathname() || "/";
  const headerClass =
    variant === "fullscreen"
      ? "tt-header-alter"
      : "tt-header-alter tt-header-scroll tt-header-filled";

  return (
    <header id="tt-header" className={headerClass}>
      <div className="tt-header-inner">
        <div className="tt-header-col tt-header-col-left">
          <div className="tt-logo">
            <a href="/" className="tt-magnetic-item">
              <img src="/assets/img/logo-light.png" className="tt-logo-light" alt="Softsove" />
              <img src="/assets/img/logo-dark.png" className="tt-logo-dark" alt="Softsove" />
            </a>
          </div>
        </div>

        <div className="tt-header-col tt-header-col-center">
          <nav className="tt-main-menu tt-m-menu-center">
            <div className="tt-main-menu-holder">
              <div className="tt-main-menu-inner">
                <div className="tt-main-menu-content">
                  <ul className="tt-main-menu-list">
                    <li className={wrapClass(pathname, HOME_HREFS, "tt-submenu-wrap tt-submenu-master")}>
                      <div className="tt-submenu-trigger">
                        <a href="#">Home</a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className={itemClass(pathname, "/landing-page-1")}>
                            <a href="/landing-page-1">Landing Page v.1</a>
                          </li>
                          <li className={itemClass(pathname, "/landing-page-2")}>
                            <a href="/landing-page-2">Landing Page v.2</a>
                          </li>
                          <li className={itemClass(pathname, "/landing-page-3")}>
                            <a href="/landing-page-3">Landing Page v.3</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className={wrapClass(pathname, WORK_HREFS, "tt-submenu-wrap tt-submenu-master")}>
                      <div className="tt-submenu-trigger">
                        <a href="#">Work</a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">Portfolio Grid</a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li className={itemClass(pathname, "/portfolio-grid")}>
                                  <a href="/portfolio-grid">Grid Default</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-grid-2-col")}>
                                  <a href="/portfolio-grid-2-col">Grid 2 Columns</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-grid-boxed")}>
                                  <a href="/portfolio-grid-boxed">Grid Boxed</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-grid-no-gap")}>
                                  <a href="/portfolio-grid-no-gap">Grid No Gap</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-masonry")}>
                                  <a href="/portfolio-masonry">Masonry Grid</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-masonry-boxed")}>
                                  <a href="/portfolio-masonry-boxed">Masonry Grid Boxed</a>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">Portfolio List</a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li className={itemClass(pathname, "/portfolio-list")}>
                                  <a href="/portfolio-list">List Default</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-list-shifted")}>
                                  <a href="/portfolio-list-shifted">List Shifted</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-list-boxed")}>
                                  <a href="/portfolio-list-boxed">List Boxed</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-list-inline")}>
                                  <a href="/portfolio-list-inline">List Inline</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-list-inline-shifted")}>
                                  <a href="/portfolio-list-inline-shifted">List Inline Shifted</a>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">Portfolio Scrolling</a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li className={itemClass(pathname, "/portfolio-scrolling")}>
                                  <a href="/portfolio-scrolling">Scrolling Default</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-scrolling-tilted")}>
                                  <a href="/portfolio-scrolling-tilted">Scrolling Tilted</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-scrolling-boxed-tilted")}>
                                  <a href="/portfolio-scrolling-boxed-tilted">Scrolling Boxed</a>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">Fullscreen Carousel</a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li className={itemClass(pathname, "/portfolio-carousel")}>
                                  <a href="/portfolio-carousel">Carousel Default</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-carousel-boxed")}>
                                  <a href="/portfolio-carousel-boxed">Carousel Boxed</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-carousel-focused")}>
                                  <a href="/portfolio-carousel-focused">Carousel Focused</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-carousel-small")}>
                                  <a href="/portfolio-carousel-small">Carousel Small</a>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">Fullscreen Slider</a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li className={itemClass(pathname, "/portfolio-slider-horizontal")}>
                                  <a href="/portfolio-slider-horizontal">Slider Horizontal</a>
                                </li>
                                <li className={itemClass(pathname, "/portfolio-slider-vertical")}>
                                  <a href="/portfolio-slider-vertical">Slider Vertical</a>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">Project Pages</a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li className={itemClass(pathname, "/single-project-1")}>
                                  <a href="/single-project-1">Project Page v.1</a>
                                </li>
                                <li className={itemClass(pathname, "/single-project-2")}>
                                  <a href="/single-project-2">Project Page v.2</a>
                                </li>
                                <li className={itemClass(pathname, "/single-project-3")}>
                                  <a href="/single-project-3">Project Page v.3</a>
                                </li>
                                <li className={itemClass(pathname, "/single-project-4")}>
                                  <a href="/single-project-4">Project Page v.4</a>
                                </li>
                                <li className={itemClass(pathname, "/single-project-5")}>
                                  <a href="/single-project-5">Project Page v.5</a>
                                </li>
                                <li className={itemClass(pathname, "/single-project-6")}>
                                  <a href="/single-project-6">Project Page v.6</a>
                                </li>
                                <li className={itemClass(pathname, "/single-project-7")}>
                                  <a href="/single-project-7">Project Page v.7</a>
                                </li>
                                <li className={itemClass(pathname, "/single-project-8")}>
                                  <a href="/single-project-8">Project Page v.8</a>
                                </li>
                                <li className={itemClass(pathname, "/single-project-9")}>
                                  <a href="/single-project-9">Project Page v.9</a>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className={itemClass(pathname, "/portfolio-category")}>
                            <a href="/portfolio-category">Portfolio Category</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className={wrapClass(pathname, ABOUT_HREFS, "tt-submenu-wrap tt-submenu-master")}>
                      <div className="tt-submenu-trigger">
                        <a href="#">About</a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className={itemClass(pathname, "/about-us")}>
                            <a href="/about-us">About Us v.1</a>
                          </li>
                          <li className={itemClass(pathname, "/about-us-2")}>
                            <a href="/about-us-2">About Us v.2</a>
                          </li>
                          <li className={itemClass(pathname, "/about-me")}>
                            <a href="/about-me">About Me v.1</a>
                          </li>
                          <li className={itemClass(pathname, "/about-me-2")}>
                            <a href="/about-me-2">About Me v.2</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className={wrapClass(pathname, BLOG_HREFS, "tt-submenu-wrap tt-submenu-master")}>
                      <div className="tt-submenu-trigger">
                        <a href="#">Blog</a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className={itemClass(pathname, "/blog")}>
                            <a href="/blog">Blog List</a>
                          </li>
                          <li className={itemClass(pathname, "/blog-sidebar")}>
                            <a href="/blog-sidebar">Blog Sidebar</a>
                          </li>
                          <li className={itemClass(pathname, "/blog-compact")}>
                            <a href="/blog-compact">Blog Compact</a>
                          </li>
                          <li className={itemClass(pathname, "/blog-post")}>
                            <a href="/blog-post">Blog Post</a>
                          </li>
                          <li className={itemClass(pathname, "/blog-post-sidebar")}>
                            <a href="/blog-post-sidebar">Blog Post Sidebar</a>
                          </li>
                          <li className={itemClass(pathname, "/blog-archive")}>
                            <a href="/blog-archive">Blog Archive</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className={wrapClass(pathname, CONTACT_HREFS, "tt-submenu-wrap tt-submenu-master")}>
                      <div className="tt-submenu-trigger">
                        <a href="#">Contact</a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className={itemClass(pathname, "/lets-get-weird")}>
                            <a href="/lets-get-weird">Contact Form</a>
                          </li>
                          <li className={itemClass(pathname, "/contact-simple")}>
                            <a href="/contact-simple">Contact Simple</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className={pathname === "/lets-get-hired" || pathname.startsWith("/lets-get-hired/") ? "active" : undefined}>
                      <a href="/lets-get-hired">Let's Get Hired</a>
                    </li>

                    <li className={wrapClass(pathname, MORE_HREFS, "tt-submenu-wrap tt-submenu-master")}>
                      <div className="tt-submenu-trigger">
                        <a href="#">More</a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">Extra Pages</a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li className={itemClass(pathname, "/services")}>
                                  <a href="/services">Services v.1</a>
                                </li>
                                <li className={itemClass(pathname, "/services-2")}>
                                  <a href="/services-2">Services v.2</a>
                                </li>
                                <li className={itemClass(pathname, "/pricing")}>
                                  <a href="/pricing">Pricing Plans</a>
                                </li>
                                <li className={itemClass(pathname, "/testimonials")}>
                                  <a href="/testimonials">Testimonials</a>
                                </li>
                                <li className={itemClass(pathname, "/dummy")}>
                                  <a href="/dummy">Dummy Page v.1</a>
                                </li>
                                <li className={itemClass(pathname, "/dummy-2")}>
                                  <a href="/dummy-2">Dummy Page v.2</a>
                                </li>
                                <li className={itemClass(pathname, "/dummy-3")}>
                                  <a href="/dummy-3">Dummy Page v.3</a>
                                </li>
                                <li className={itemClass(pathname, "/faq")}>
                                  <a href="/faq">FAQ</a>
                                </li>
                                <li className={itemClass(pathname, "/404")}>
                                  <a href="/404">404 Error</a>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">Elements</a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li className={itemClass(pathname, "/elements")}>
                                  <a href="/elements">Elements</a>
                                </li>
                                <li className={itemClass(pathname, "/elements-buttons")}>
                                  <a href="/elements-buttons">Buttons</a>
                                </li>
                                <li className={itemClass(pathname, "/elements-forms")}>
                                  <a href="/elements-forms">Forms</a>
                                </li>
                                <li className={itemClass(pathname, "/elements-media")}>
                                  <a href="/elements-media">Multimedia</a>
                                </li>
                                <li className={itemClass(pathname, "/elements-typography")}>
                                  <a href="/elements-typography">Typography</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="tt-header-col tt-header-col-right">
          <div id="tt-m-menu-toggle-btn-wrap">
            <div className="tt-m-menu-toggle-btn-text">
              <span className="tt-m-menu-text-menu">Menu</span>
              <span className="tt-m-menu-text-close">Close</span>
            </div>
            <div className="tt-m-menu-toggle-btn-holder">
              <a href="#" className="tt-m-menu-toggle-btn">
                <span></span>
              </a>
            </div>
          </div>

          <a href="/lets-get-weird" className="tt-btn tt-btn-secondary hide-from-xlg tt-magnetic-item">
            <span data-hover="Let's Talk">Let&apos;s Talk</span>
          </a>

          <div className="tt-style-switch">
            <div className="tt-style-switch-inner tt-magnetic-item">
              <div className="tt-stsw-light">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="tt-stsw-dark">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" strokeWidth="2"></circle>
                  <path d="M12 2V4" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M12 20V22" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M4 12L2 12" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M22 12L20 12" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M19.7778 4.22266L17.5558 6.25424" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M4.22217 4.22266L6.44418 6.25424" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M6.44434 17.5557L4.22211 19.7779" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M19.7778 19.7773L17.5558 17.5551" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
