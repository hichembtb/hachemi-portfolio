import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://dev-hechcode.pantheonsite.io"
  ),
  title: {
    default: `${siteConfig.name} (${siteConfig.handle}) — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "Hachemi Boutalbi",
    "hechcode",
    "hichembtb",
    "Mobile Developer",
    "Flutter Developer",
    "Dart Engineer",
    "Firebase",
    "GetX",
    "Android Developer",
    "POPO Grocery Delivery",
    "Software Engineer",
    "Cross-Platform Mobile Apps",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.links.linkedin }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.links.originalSite,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/images/projects/popo-portfolio.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio Showcase`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    images: ["/images/projects/popo-portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-[#080a0f] text-gray-100 antialiased selection:bg-sky-500/30 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
