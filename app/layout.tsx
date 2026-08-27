import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { ThemeScripts } from "@/components/ThemeScripts";

export const metadata: Metadata = {
  title: {
    default: "Softsove | Creative Agency and Portfolio",
    template: "%s | Softsove",
  },
  description:
    "Hektor - Creative Agency and Portfolio website template converted to Next.js.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const stylesheetHrefs = [
  "/assets/vendor/fontawesome/css/all.min.css",
  "/assets/vendor/fancybox/css/fancybox.css",
  "/assets/vendor/swiper/css/swiper-bundle.min.css",
  "/assets/css/helper.css",
  "/assets/css/elements.css",
  "/assets/css/theme.css",
  "/assets/css/blog.css",
  "/assets/css/theme-dark.css",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cascadia+Mono:wght@200..700&display=swap"
          rel="stylesheet"
        />
        {stylesheetHrefs.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body
        id="body"
        className="tt-transition tt-magic-cursor tt-smooth-scroll"
        style={{ ["--tt-bg-pattern" as string]: "url('/assets/img/bg-pattern.png')" }}
        suppressHydrationWarning
      >
        <SiteChrome>{children}</SiteChrome>
        <ThemeScripts />
      </body>
    </html>
  );
}
