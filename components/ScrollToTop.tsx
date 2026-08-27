export function ScrollToTop() {
  return (
    <div className="tt-scroll-to-top" data-top-offset="800" data-bottom-offset="200">
      <a href="#" className="tt-stt-inner tt-magnetic-item">
        <div className="tt-stt-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
          </svg>
        </div>
      </a>
    </div>
  );
}
