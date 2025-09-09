import type { Metadata } from "next";
import "./globals.css";
import { Inter, Cinzel } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "Turesson Atelier",
  description: "Creative studio of code, words & images.",
  applicationName: "Turesson Atelier",
  themeColor: "#0b0b0c",
  icons: {
    icon: [
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      // Apple brukar vilja ha 180x180, 192 funkar men 180 är “by the book”
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Turesson Atelier",
    description: "Creative studio of code, words & images.",
    url: "https://turessonatelier.vercel.app",
    siteName: "Turesson Atelier",
    locale: "sv_SE",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turesson Atelier",
    description: "Creative studio of code, words & images.",
    images: ["/og.png"],
  },
};
