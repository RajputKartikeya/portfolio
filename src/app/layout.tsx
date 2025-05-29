import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartikeya Rajput | Portfolio",
  description:
    "Full-stack Software Engineer with expertise in React.js, Next.js, Spring Boot, and Flutter. Passionate about creating scalable web applications and innovative solutions.",
  keywords:
    "Software Engineer, Full Stack Developer, React.js, Next.js, Spring Boot, Flutter, TypeScript, JavaScript, Java",
  authors: [{ name: "Kartikeya Rajput" }],
  creator: "Kartikeya Rajput",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0066ff",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartikeyarajput.tech",
    siteName: "Kartikeya Rajput Portfolio",
    title: "Kartikeya Rajput | Portfolio",
    description:
      "Full-stack Software Engineer with expertise in React.js, Next.js, Spring Boot, and Flutter.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kartikeya Rajput - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartikeya Rajput | Portfolio",
    description:
      "Full-stack Software Engineer with expertise in React.js, Next.js, Spring Boot, and Flutter.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
