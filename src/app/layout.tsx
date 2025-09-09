// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

// Bas-URL för OG/Twitter (lägg samma i Vercel env)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: { default: "Turesson Atelier", template: "%s – Turesson Atelier" },
  description: "Creative studio of code, words & images.",
  applicationName: "Turesson Atelier",
  metadataBase: new URL(siteUrl),
  themeColor: "#0b0b0c",
  icons: {
    icon: [
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "/",
    title: "Turesson Atelier",
    siteName: "Turesson Atelier",
    description: "Creative studio of code, words & images.",
    locale: "sv_SE",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turesson Atelier",
    description: "Creative studio of code, words & images.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} ${cinzel.variable} bg-ink-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
