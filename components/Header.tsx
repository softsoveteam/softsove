"use client";

import { HiredMega, useOpenJobs } from "@/components/HiredMega";
import { usePathname } from "next/navigation";

const HOME_HREFS = ["/", "/landing-page-1", "/landing-page-2", "/landing-page-3"];
const WORK_HREFS = ["/crafted-things", "/work", "/portfolio-masonry-boxed"];
const CONTACT_HREFS = ["/lets-get-weird", "/contact", "/contact-simple"];
const PLOT_HREFS = ["/how-we-got-weird", "/the-human", "/about", "/about-us", "/about-us-2", "/about-me"];

function normalizePath(pathname: string) {
  if (pathname === "/") return "/";
  return pathname;
}

function isInSection(pathname: string, hrefs: string[]) {
  const current = normalizePath(pathname);
  return hrefs.some((href) => normalizePath(href) === current);
}

function isCareerPath(pathname: string) {
  const current = normalizePath(pathname);
  return current === "/lets-get-hired" || current.startsWith("/lets-get-hired/");
}

function navClass(active: boolean) {
  return active ? "active" : undefined;
}

function wrapClass(pathname: string, hrefs: string[], extra = "tt-submenu-wrap") {
  return [extra, isInSection(pathname, hrefs) ? "active" : undefined]
    .filter(Boolean)
    .join(" ");
}

function itemClass(pathname: string, href: string) {
  return pathname === href ? "active" : undefined;
}

type HeaderProps = {
  variant?: "default" | "fullscreen";
};

export function Header({ variant = "default" }: HeaderProps) {
  const pathname = usePathname() || "/";
  const { jobs, loaded, refresh } = useOpenJobs();
  const headerClass =
    variant === "fullscreen"
      ? "tt-header-alter"
      : "tt-header-alter tt-header-fixed tt-header-filled";

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
                    <li className={navClass(isInSection(pathname, HOME_HREFS))}>
                      <a href="/">Home</a>
                    </li>
                    <li className={navClass(isInSection(pathname, WORK_HREFS))}>
                      <a href="/crafted-things">Crafted Things</a>
                    </li>
                    <li className={wrapClass(pathname, PLOT_HREFS, "tt-submenu-wrap tt-submenu-master")}>
                      <div className="tt-submenu-trigger">
                        <a href="#">The Plot</a>
                      </div>
                      <div className="tt-submenu tt-plot-mega">
                        <div className="tt-plot-mega-inner">
                          <div className="tt-plot-mega-shot">
                            <span className="tt-text-image tt-timg-boxed tt-timg-tilted-1">
                              <img src="/assets/img/misc/text-img-3.gif" alt="" />
                            </span>
                            <p className="tt-plot-mega-caught">Caught you looking.</p>
                          </div>
                          <div className="tt-plot-mega-copy">
                            <p className="tt-plot-mega-eyebrow">( No boring bios )</p>
                            <p className="tt-plot-mega-kicker">Two doors. Zero beige.</p>
                            <ul className="tt-plot-mega-list">
                              <li className={itemClass(pathname, "/how-we-got-weird")}>
                                <a href="/how-we-got-weird" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">The studio</span>
                                  <span className="tt-plot-mega-card-title">How We Got Weird</span>
                                  <span className="tt-plot-mega-card-note">Anand plot. Beige is illegal here.</span>
                                </a>
                              </li>
                              <li className={itemClass(pathname, "/the-human")}>
                                <a href="/the-human" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">The desk</span>
                                  <span className="tt-plot-mega-card-title">The Human</span>
                                  <span className="tt-plot-mega-card-note">Dhruvik Patel. Anand, 2018. Still not beige.</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={navClass(isInSection(pathname, CONTACT_HREFS))}>
                      <a href="/lets-get-weird">Let&apos;s Get Weird</a>
                    </li>
                    <li
                      className={[
                        "tt-submenu-wrap tt-submenu-master",
                        isCareerPath(pathname) ? "active" : undefined,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onMouseEnter={refresh}
                    >
                      <div className="tt-submenu-trigger">
                        <a href="#">
                          Let&apos;s Get Hired
                          <span className="tt-nav-label">{loaded ? `${jobs.length} open` : "Open seats"}</span>
                        </a>
                      </div>
                      <HiredMega pathname={pathname} jobs={jobs} loaded={loaded} />
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
