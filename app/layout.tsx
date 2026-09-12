import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = "https://bryce-ilcan.netlify.app";
const description =
  "Electrical engineering portfolio focused on power electronics, PCB design, embedded hardware, and autonomous UAV systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bryce Ilcan | Electrical Engineering Portfolio",
    template: "%s | Bryce Ilcan",
  },
  description,
  openGraph: {
    title: "Bryce Ilcan | Electrical Engineering Portfolio",
    description,
    url: siteUrl,
    siteName: "Bryce Ilcan Engineering Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bryce Ilcan Electrical Engineering Portfolio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryce Ilcan | Electrical Engineering Portfolio",
    description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
