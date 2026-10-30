import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Sakinah — A Quiet Place for Difficult Days",
    template: "%s · Sakinah"
  },
  description: siteConfig.description,
  applicationName: "Sakinah",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    title: "Sakinah — A Quiet Place for Difficult Days",
    description: siteConfig.description,
    siteName: "Sakinah",
    images: [{ url: "/og-cover.svg", width: 1200, height: 630, alt: "Sakinah — a quiet place for difficult days" }]
  },
  twitter: { card: "summary_large_image", images: ["/og-cover.svg"] },
  icons: { icon: "/icon.svg" }
};

export const viewport: Viewport = {
  themeColor: "#07110f",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
