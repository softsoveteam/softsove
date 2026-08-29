import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Human",
  description: "Dhruvik Patel started Softsove from a college desk in Anand in 2018. Still refusing beige.",
};

const PROJECTS = [
  { href: "/single-project-1", title: "Aero Dog", category: "Branding", image: "/assets/img/portfolio/1200/portfolio-1-1200.jpg" },
  { href: "/single-project-2", title: "Luxe Geometry", category: "Branding", image: "/assets/img/portfolio/1200/portfolio-2-1200.jpg" },
  { href: "/single-project-4", title: "Alfa Race", category: "Artistic", image: "/assets/img/portfolio/1200/portfolio-4-1200.jpg" },
  { href: "/single-project-5", title: "Modern Elegance", category: "Branding", image: "/assets/img/portfolio/1200/portfolio-5-1200.jpg" },
] as const;

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
    </svg>
  );
}

export default function TheHumanPage() {
  return (
    <>
      <div id="page-header" className="ph-full ph-full-m ph-center ph-cap-xxlg ph-image-parallax ph-caption-parallax">
        <div className="page-header-inner">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <h2 className="ph-caption-subtitle">( No boring bios )</h2>
              <h1 className="ph-caption-title">The Human</h1>
              <div className="ph-caption-description max-width-700">
                Dhruvik Patel. Anand, 2018. A college kid making posts who somehow ended up shipping work to forty countries.
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
        <div className="tt-section padding-top-40">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-sticker">
              <div className="tt-row">
                <div className="tt-col-lg-4 margin-bottom-40">
                  <div className="tt-sticker-sticky tt-sticky-element">
                    <div className="tt-image tti-border-radius tti-portrait tti-tilted-1">
                      <figure>
                        <img src="/assets/img/team/dhruvik-patel.jpg" className="tt-anim-zoomin" loading="lazy" alt="Dhruvik Patel" />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="tt-col-lg-1"></div>

                <div className="tt-col-lg-7">
                  <div className="tt-sticker-scroller">
                    <h2 className="tt-anim-fadeinup">Dhruvik Patel</h2>
                    <div className="text-lg tt-anim-fadeinup">
                      <p>
                        Softsove did not start in a glass office. It started in 2018 on a college desk at N.V.P.A.S. Science College, Anand, while I was still chasing a bachelor&apos;s and making social posts that looked less beige than the brief.
                      </p>
                      <p>
                        Graphics first. Then PHP. Then Python. Then WordPress so deep the dashboard started answering back. Websites left the hostel Wi-Fi. Some landed. Some face-planted. The ups and downs were the whole syllabus.
                      </p>
                      <p>
                        The desk got louder. I built an online crew, then an offline one, and Softsove stopped being a one-kid plot. In 2026 we are thirty-plus people, five hundred-plus clients across forty-plus countries, and more than a thousand projects out the door.
                      </p>
                      <p>
                        Next stop is not another polite bio. New Zealand, Australia, and the United Kingdom are next. The Anand plot stays. Beige still is not invited.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tt-section padding-top-40 padding-bottom-40">
          <div className="tt-section-inner">
            <div className="tt-scrolling-text scrt-dyn-separator tt-scrt-tilted-2 tt-scrt-bordered" data-scroll-speed="7" data-change-direction="true">
              <div className="tt-scrt-inner">
                <div className="tt-scrt-content">
                  <div className="tt-scrt-text">
                    College desk. Global mess.
                    <span className="tt-scrt-separator">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tt-scrolling-text scrt-dyn-separator tt-scrt-tilted-1 scrt-color-reverse" data-opposite-direction="true" data-scroll-speed="7" data-change-direction="true">
              <div className="tt-scrt-inner">
                <div className="tt-scrt-content">
                  <div className="tt-scrt-text">
                    Since 2018. Still not beige.
                    <span className="tt-scrt-separator">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-120">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-row">
              <div className="tt-col-lg-4 padding-right-md-5-p">
                <div className="tt-heading tt-heading-xlg margin-bottom-30">
                  <h3 className="tt-heading-subtitle tt-anim-lines">( The plot )</h3>
                  <h2 className="tt-heading-title tt-anim-characters">What<br /> I Built</h2>
                </div>
              </div>

              <div className="tt-col-lg-4">
                <ul className="tt-list">
                  <li className="tt-anim-fadeinup">
                    <h3 className="h4 no-margin-top margin-bottom-10">SEO that actually ranks</h3>
                    <p>Not a checklist. Search that shows up, stays up, and refuses to be polite about it.</p>
                  </li>
                  <li className="tt-anim-fadeinup">
                    <h3 className="h4 no-margin-top margin-bottom-10">AI that ships</h3>
                    <p>Agents, models, weird workflows. If it only lives in a demo, it did not leave this desk.</p>
                  </li>
                  <li className="tt-anim-fadeinup">
                    <h3 className="h4 no-margin-top margin-bottom-10">Any software dare</h3>
                    <p>You imagine it. The crew builds it. Soft challenges, hard ones, the ones other desks bounce.</p>
                  </li>
                </ul>
              </div>

              <div className="tt-col-lg-4">
                <ul className="tt-list">
                  <li className="tt-anim-fadeinup">
                    <h3 className="h4 no-margin-top margin-bottom-10">Python &amp; Postgres</h3>
                    <p>The quiet engines. FastAPI, data that behaves, databases that do not flinch.</p>
                  </li>
                  <li className="tt-anim-fadeinup">
                    <h3 className="h4 no-margin-top margin-bottom-10">Next.js &amp; Cassandra</h3>
                    <p>Heavy stack. Screens that move, stores that scale. No tutorial-core leftovers.</p>
                  </li>
                  <li className="tt-anim-fadeinup">
                    <h3 className="h4 no-margin-top margin-bottom-10">30+ humans who can</h3>
                    <p>Online and offline. Highly skilled. If you can picture it, this team has already started arguing about how.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="tt-section padding-top-xlg-120 no-padding-bottom border-top">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-row">
              <div className="tt-col-xl-6">
                <div className="tt-heading tt-heading-xlg">
                  <h3 className="tt-heading-subtitle tt-anim-lines">( Crafted things )</h3>
                  <h2 className="tt-heading-title tt-anim-characters">Recent<br /> Mischief</h2>
                </div>
              </div>

              <div className="tt-col-xl-6 tt-align-self-center">
                <div className="max-width-600">
                  <p className="tt-anim-lines">A tilted pile of brands and screens that left this desk. If it looks like everyone else, it did not ship.</p>
                </div>
                <a href="/crafted-things" className="tt-btn tt-btn-secondary tt-magnetic-item margin-top-20 tt-anim-fadeinup">
                  <span data-hover="See Crafted Things">See Crafted Things</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="tt-section padding-top-xlg-40">
          <div className="tt-section-inner">
            <div className="tt-portfolio-carousel tt-pci-inside tt-pci-tilted tt-anim-fadeinup" data-size-small="true" data-loop="true" data-speed="900" data-simulate-touch="true" data-pagination-type="bullets">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {PROJECTS.map((project) => (
                    <div className="swiper-slide" key={project.href}>
                      <div className="tt-portfolio-carousel-item">
                        <div className="tt-pci-item-inner">
                          <a href={project.href} className="tt-pci-image" data-cursor="View<br>Project">
                            <img src={project.image} loading="lazy" alt="" />
                            <div className="swiper-lazy-preloader"></div>
                          </a>
                          <div className="tt-pci-info">
                            <h2 className="tt-pci-title">
                              <a href={project.href}>{project.title}</a>
                            </h2>
                            <a href={project.href} className="tt-pci-icon">
                              <ArrowIcon />
                            </a>
                            <div className="tt-pci-categories">
                              <a href="/crafted-things" className="tt-pci-category">
                                {project.category}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tt-pci-nav-prev">
                <div className="tt-pci-nav-arrow tt-magnetic-item"></div>
              </div>
              <div className="tt-pci-nav-next">
                <div className="tt-pci-nav-arrow tt-magnetic-item"></div>
              </div>
              <div className="tt-pci-pagination tt-hide-cursor"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
