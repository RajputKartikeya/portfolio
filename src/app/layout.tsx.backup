import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartikeya Rajput | Software Engineer",
  description:
    "Full-stack Software Engineer with expertise in React.js, Next.js, Spring Boot, and Flutter. Passionate about creating scalable web applications and innovative solutions.",
  keywords:
    "Software Engineer, Full Stack Developer, React.js, Next.js, Spring Boot, Flutter, TypeScript, JavaScript, Java",
  authors: [{ name: "Kartikeya Rajput" }],
  creator: "Kartikeya Rajput",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartikeyarajput.dev",
    siteName: "Kartikeya Rajput Portfolio",
    title: "Kartikeya Rajput | Software Engineer",
    description:
      "Full-stack Software Engineer with expertise in React.js, Next.js, Spring Boot, and Flutter.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kartikeya Rajput - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartikeya Rajput | Software Engineer",
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
