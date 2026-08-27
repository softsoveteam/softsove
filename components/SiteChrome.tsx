"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";
import { MagicCursor } from "./MagicCursor";
import { ScrollToTop } from "./ScrollToTop";

const FULLSCREEN_PATHS = new Set([
  "/portfolio-carousel",
  "/portfolio-carousel-boxed",
  "/portfolio-carousel-focused",
  "/portfolio-carousel-small",
  "/portfolio-slider-horizontal",
  "/portfolio-slider-vertical",
]);

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const isFullscreen = FULLSCREEN_PATHS.has(pathname);

  return (
    <main id="body-inner">
      <PageTransition />
      <MagicCursor />
      <div id="tt-content-wrap">
        <Header variant={isFullscreen ? "fullscreen" : "default"} />
        {children}
        {!isFullscreen && <Footer />}
      </div>
      {!isFullscreen && <ScrollToTop />}
    </main>
  );
}
