import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://xentumbrandsolutions.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Xentum Brand Solutions Pvt. Ltd.",
    template: "%s | Xentum Brand Solutions",
  },

  description:
    "Premium Branding, Marketing, Corporate Events, Fabrication, Printing, Merchandising and Corporate Gifting Solutions.",

  keywords: [
    "Xentum",
    "Xentum Brand Solutions",
    "Branding Agency",
    "Brand Solutions",
    "Marketing",
    "Corporate Events",
    "Printing",
    "Fabrication",
    "Corporate Gifting",
    "Merchandising",
  ],

  authors: [
    {
      name: "Xentum Brand Solutions Pvt. Ltd.",
    },
  ],

  creator: "Xentum Brand Solutions Pvt. Ltd.",
  publisher: "Xentum Brand Solutions Pvt. Ltd.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "LKnpSpjD5yojdkZvh0Atza5P82QalbLLnFPm-D1pRSo",
  },

  openGraph: {
    title: "Xentum Brand Solutions Pvt. Ltd.",
    description:
      "Premium Branding, Marketing, Corporate Events, Fabrication, Printing, Merchandising and Corporate Gifting Solutions.",
    url: siteUrl,
    siteName: "Xentum Brand Solutions",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Xentum Brand Solutions Pvt. Ltd.",
    description:
      "Premium Branding, Marketing, Corporate Events, Fabrication, Printing, Merchandising and Corporate Gifting Solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}