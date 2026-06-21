import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harbours360 | Join the waitlist, launching 1 August 2026",
  description:
    "Harbours360 is a verified marketplace for buying and selling maritime and industrial assets across Africa, with payments protected from offer to delivery. Join the waitlist for early access.",
  keywords: [
    "maritime marketplace Africa",
    "ship trading Africa",
    "marine assets",
    "Harbours360",
    "maritime industry Africa",
  ],
  openGraph: {
    title: "Harbours360, launching 1 August 2026",
    description:
      "A verified marketplace for maritime and industrial assets across Africa. Join the waitlist for early access.",
    siteName: "Harbours360",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harbours360, launching 1 August 2026",
    description:
      "A verified marketplace for maritime and industrial assets across Africa.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f2a44",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
