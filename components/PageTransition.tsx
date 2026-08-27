export function PageTransition() {
  return (
    <div id="tt-page-transition">
      <div className="tt-ptr-overlay-top"></div>
      <div className="tt-ptr-overlay-bottom"></div>
      <div className="tt-ptr-preloader">
        <div className="tt-ptr-prel-content">
          <img
            src="/assets/img/logo-light.png"
            className="tt-ptr-prel-image"
            alt="Softsove"
          />
        </div>
      </div>
    </div>
  );
}
