"use client";

import { HiredMega, useOpenJobs } from "@/components/HiredMega";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const HOME_HREFS = ["/", "/landing-page-1", "/landing-page-2", "/landing-page-3"];
const WORK_HREFS = ["/crafted-things", "/work", "/portfolio-masonry-boxed"];
const TERRAIN_HREFS = ["/who-we-build-for", "/strange-terrains", "/industries"];
const DARE_HREFS = ["/what-we-dare", "/services", "/services-2"];
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

const NAV_OVERFLOW_KEYS = ["work", "dare", "terrains", "plot", "hired"] as const;

function useHeaderNavOverflow(remeasureKey: string) {
  const listRef = useRef<HTMLUListElement>(null);
  const [hiddenKeys, setHiddenKeys] = useState<string[]>([]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let frame = 0;

    const fit = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (window.matchMedia("(max-width: 1024px)").matches) {
          setHiddenKeys((prev) => (prev.length ? [] : prev));
          return;
        }

        const holder = list.closest(".tt-header-col-center") as HTMLElement | null;
        if (!holder) return;

        list.classList.add("is-nav-measuring");

        const widthOf = (el: HTMLElement | null) => {
          if (!el) return 0;
          const styles = window.getComputedStyle(el);
          return (
            el.getBoundingClientRect().width +
            parseFloat(styles.marginLeft) +
            parseFloat(styles.marginRight)
          );
        };

        const available = holder.clientWidth;
        const homeW = widthOf(list.querySelector<HTMLElement>('[data-nav-key="home"]'));
        const moreW = widthOf(list.querySelector<HTMLElement>("[data-nav-more]"));
        const itemWidths = NAV_OVERFLOW_KEYS.map((key) =>
          widthOf(list.querySelector<HTMLElement>(`[data-nav-key="${key}"]`)),
        );

        list.classList.remove("is-nav-measuring");

        const allW = homeW + itemWidths.reduce((sum, width) => sum + width, 0);
        let next: string[] = [];

        if (allW > available + 1) {
          let used = homeW + moreW;
          let keep = 0;
          for (let i = 0; i < NAV_OVERFLOW_KEYS.length; i += 1) {
            if (used + itemWidths[i] <= available + 1) {
              used += itemWidths[i];
              keep += 1;
            } else {
              break;
            }
          }
          next = [...NAV_OVERFLOW_KEYS.slice(keep)];
        }

        setHiddenKeys((prev) => (prev.join() === next.join() ? prev : next));
      });
    };

    const observer = new ResizeObserver(fit);
    const center = list.closest(".tt-header-col-center");
    if (center) observer.observe(center);
    window.addEventListener("resize", fit);
    fit();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [remeasureKey]);

  return { listRef, hiddenKeys };
}

type HeaderProps = {
  variant?: "default" | "fullscreen";
};

export function Header({ variant = "default" }: HeaderProps) {
  const pathname = usePathname() || "/";
  const { jobs, loaded, refresh } = useOpenJobs();
  const { listRef, hiddenKeys } = useHeaderNavOverflow(`${loaded ? jobs.length : "pending"}`);
  const headerClass =
    variant === "fullscreen"
      ? "tt-header-alter"
      : "tt-header-alter tt-header-fixed tt-header-filled";
  const moreActive =
    (hiddenKeys.includes("work") && isInSection(pathname, WORK_HREFS)) ||
    (hiddenKeys.includes("dare") && isInSection(pathname, DARE_HREFS)) ||
    (hiddenKeys.includes("terrains") && isInSection(pathname, TERRAIN_HREFS)) ||
    (hiddenKeys.includes("plot") && isInSection(pathname, PLOT_HREFS)) ||
    (hiddenKeys.includes("hired") && isCareerPath(pathname));

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
                  <ul ref={listRef} className="tt-main-menu-list">
                    <li data-nav-key="home" className={navClass(isInSection(pathname, HOME_HREFS))}>
                      <a href="/">Home</a>
                    </li>
                    <li
                      data-nav-key="work"
                      className={[
                        navClass(isInSection(pathname, WORK_HREFS)),
                        hiddenKeys.includes("work") ? "tt-nav-overflow-hide" : undefined,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <a href="/crafted-things">Crafted Things</a>
                    </li>
                    <li
                      data-nav-key="dare"
                      className={wrapClass(
                        pathname,
                        DARE_HREFS,
                        hiddenKeys.includes("dare")
                          ? "tt-submenu-wrap tt-submenu-master tt-nav-overflow-hide"
                          : "tt-submenu-wrap tt-submenu-master",
                      )}
                    >
                      <div className="tt-submenu-trigger">
                        <a href="/what-we-dare">
                          What We Dare
                        </a>
                      </div>
                      <div className="tt-submenu tt-plot-mega tt-dare-mega">
                        <div className="tt-plot-mega-inner">
                          <div className="tt-plot-mega-shot">
                            <span className="tt-text-image tt-timg-boxed tt-timg-tilted-1">
                              <img src="/assets/img/dares/memes/deal.gif" alt="" />
                            </span>
                            <p className="tt-plot-mega-caught">( No boring retainers )</p>
                          </div>
                          <div className="tt-plot-mega-copy">
                            <p className="tt-plot-mega-eyebrow">( No boring retainers )</p>
                            <p className="tt-plot-mega-kicker">Fourteen dares. Six kitchens. Zero beige.</p>
                            <ul className="tt-plot-mega-list">
                              <li>
                                <a href="/what-we-dare#dare-build" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">Things that ship</span>
                                  <span className="tt-plot-mega-card-title">The Build</span>
                                  <span className="tt-plot-mega-card-note">Software, websites, apps, carts.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/what-we-dare#dare-look" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">The tap that makes sense</span>
                                  <span className="tt-plot-mega-card-title">The Look</span>
                                  <span className="tt-plot-mega-card-note">UI, UX, brands that refuse beige.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/what-we-dare#dare-brain" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">The clipboard funeral</span>
                                  <span className="tt-plot-mega-card-title">The Brain</span>
                                  <span className="tt-plot-mega-card-note">AI, automation, numbers with a pulse.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/what-we-dare#dare-loud" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">The feed has to notice</span>
                                  <span className="tt-plot-mega-card-title">The Loud</span>
                                  <span className="tt-plot-mega-card-note">SEO and digital marketing.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/what-we-dare#dare-spine" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">Rooms that stay up</span>
                                  <span className="tt-plot-mega-card-title">The Spine</span>
                                  <span className="tt-plot-mega-card-note">Cloud, locks, the desk that stays.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/what-we-dare#dare-plot" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">The brief before the build</span>
                                  <span className="tt-plot-mega-card-title">The Plot</span>
                                  <span className="tt-plot-mega-card-note">IT consulting. No 90-page nap.</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      data-nav-key="terrains"
                      className={wrapClass(
                        pathname,
                        TERRAIN_HREFS,
                        hiddenKeys.includes("terrains")
                          ? "tt-submenu-wrap tt-submenu-master tt-nav-overflow-hide"
                          : "tt-submenu-wrap tt-submenu-master",
                      )}
                    >
                      <div className="tt-submenu-trigger">
                        <a href="/who-we-build-for">
                          Who We Build For
                        </a>
                      </div>
                      <div className="tt-submenu tt-plot-mega tt-terrain-mega">
                        <div className="tt-plot-mega-inner">
                          <div className="tt-plot-mega-shot">
                            <span className="tt-text-image tt-timg-boxed tt-timg-tilted-2">
                              <img src="/assets/img/terrains/memes/cat.gif" alt="" />
                            </span>
                            <p className="tt-plot-mega-caught">( No boring industries )</p>
                          </div>
                          <div className="tt-plot-mega-copy">
                            <p className="tt-plot-mega-eyebrow">( No boring industries )</p>
                            <p className="tt-plot-mega-kicker">Six terrains. Software to the republic.</p>
                            <ul className="tt-plot-mega-list">
                              <li>
                                <a href="/who-we-build-for#terrain-mobility" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">Wheels &amp; wings</span>
                                  <span className="tt-plot-mega-card-title">Mobility</span>
                                  <span className="tt-plot-mega-card-note">Aerospace, automotive, off road.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/who-we-build-for#terrain-healthcare" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">Care with a pulse</span>
                                  <span className="tt-plot-mega-card-title">Healthcare</span>
                                  <span className="tt-plot-mega-card-note">Devices, pharma, digital health.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/who-we-build-for#terrain-industrial" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">The thinking factory</span>
                                  <span className="tt-plot-mega-card-title">Industrial</span>
                                  <span className="tt-plot-mega-card-note">Automation, energy, robots, tons.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/who-we-build-for#terrain-hitech" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">Tiny parts. Loud ideas.</span>
                                  <span className="tt-plot-mega-card-title">Hi-Tech</span>
                                  <span className="tt-plot-mega-card-note">Electronics, security, silicon.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/who-we-build-for#terrain-technology" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">The unapologetic stack</span>
                                  <span className="tt-plot-mega-card-title">Technology</span>
                                  <span className="tt-plot-mega-card-note">Websites, apps, custom software, platforms.</span>
                                </a>
                              </li>
                              <li>
                                <a href="/who-we-build-for#terrain-civic" className="tt-plot-mega-card">
                                  <span className="tt-plot-mega-card-label">Worked with Indian Government</span>
                                  <span className="tt-plot-mega-card-title">The Public Plot</span>
                                  <span className="tt-plot-mega-card-note">Indian Government, police, Sansad, campaigns.</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      data-nav-key="plot"
                      className={wrapClass(
                        pathname,
                        PLOT_HREFS,
                        hiddenKeys.includes("plot")
                          ? "tt-submenu-wrap tt-submenu-master tt-nav-overflow-hide"
                          : "tt-submenu-wrap tt-submenu-master",
                      )}
                    >
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
                    <li className={[navClass(isInSection(pathname, CONTACT_HREFS)), "hide-to-xlg"].filter(Boolean).join(" ")}>
                      <a href="/lets-get-weird">Let&apos;s Get Weird</a>
                    </li>
                    <li
                      data-nav-key="hired"
                      className={[
                        "tt-submenu-wrap tt-submenu-master",
                        isCareerPath(pathname) ? "active" : undefined,
                        hiddenKeys.includes("hired") ? "tt-nav-overflow-hide" : undefined,
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
                    <li
                      data-nav-more
                      className={[
                        "tt-submenu-wrap tt-submenu-master tt-nav-more",
                        hiddenKeys.length ? undefined : "tt-nav-more-empty",
                        moreActive ? "active" : undefined,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onMouseEnter={hiddenKeys.includes("hired") ? refresh : undefined}
                    >
                      <div className="tt-submenu-trigger">
                        <a href="#">More</a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          {hiddenKeys.includes("work") ? (
                            <li className={navClass(isInSection(pathname, WORK_HREFS))}>
                              <a href="/crafted-things">Crafted Things</a>
                            </li>
                          ) : null}
                          {hiddenKeys.includes("dare") ? (
                            <li className={navClass(isInSection(pathname, DARE_HREFS))}>
                              <a href="/what-we-dare">What We Dare</a>
                            </li>
                          ) : null}
                          {hiddenKeys.includes("terrains") ? (
                            <li className={navClass(isInSection(pathname, TERRAIN_HREFS))}>
                              <a href="/who-we-build-for">Who We Build For</a>
                            </li>
                          ) : null}
                          {hiddenKeys.includes("plot") ? (
                            <>
                              <li className={itemClass(pathname, "/how-we-got-weird")}>
                                <a href="/how-we-got-weird">How We Got Weird</a>
                              </li>
                              <li className={itemClass(pathname, "/the-human")}>
                                <a href="/the-human">The Human</a>
                              </li>
                            </>
                          ) : null}
                          {hiddenKeys.includes("hired") ? (
                            <li className={navClass(isCareerPath(pathname))}>
                              <a href="/lets-get-hired">
                                Let&apos;s Get Hired
                                <span className="tt-nav-label">{loaded ? `${jobs.length} open` : "Open seats"}</span>
                              </a>
                            </li>
                          ) : null}
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
            <span className="tt-btn-icon">
              <i className="fa-solid fa-phone"></i>
            </span>
            <span data-hover="Let's Get Weird">Let&apos;s Get Weird</span>
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
