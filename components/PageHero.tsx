import type { ReactNode } from "react";

export function PageHero({
  subtitle,
  title,
  description,
}: {
  subtitle: string;
  title: string;
  description: ReactNode;
}) {
  return (
    <div id="page-header" className="ph-full ph-full-m ph-center ph-cap-xxxlg ph-image-parallax ph-caption-parallax">
      <div className="page-header-inner">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            <h2 className="ph-caption-subtitle">{subtitle}</h2>
            <h1 className="ph-caption-title">{title}</h1>
            <div className="ph-caption-description max-width-700">{description}</div>
          </div>
        </div>
      </div>
      <div className="ph-social">
        <div className="tt-social-buttons">
          <ul>
            <li>
              <a href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className="fa-brands fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className="fa-brands fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tt-scroll-down">
        <a href="#tt-page-content" className="tt-sd-inner tt-magnetic-item" data-offset="0">
          <div className="tt-sd-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
