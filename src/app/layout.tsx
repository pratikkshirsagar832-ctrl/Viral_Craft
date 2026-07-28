import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Viral Craft | Video Content Creator Marketing Agency",
  description:
    "Boost Your Brand with High-Impact Short Videos from our expert content creators. Join over 100,000 happy creators using Viral Craft.",
  keywords: [
    "video marketing agency",
    "content creator",
    "short video ads",
    "UGC agency",
    "influencer marketing",
    "Viral Craft",
  ],
  openGraph: {
    title: "Viral Craft | Video Content Creator Marketing Agency",
    description:
      "Boost Your Brand with High-Impact Short Videos from our expert content creators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <div className="gradient-page">
          <div className="noise-overlay" />
          <div className="content-card relative z-10 flex flex-col min-h-[calc(100vh-48px)]">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}