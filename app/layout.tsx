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

export const metadata: Metadata = {
  title: "Xentum Brand Solutions Pvt. Ltd.",
  description:
    "Premium Branding, Marketing, Corporate Events, Fabrication, Printing, Merchandising and Corporate Gifting Solutions.",

  keywords: [
    "Xentum",
    "Xentum Brand Solutions",
    "Branding",
    "Marketing",
    "Corporate Events",
    "Printing",
    "Fabrication",
    "Corporate Gifting",
    "Merchandising",
    "Brand Solutions",
  ],

  verification: {
    google: "LKnpSpjD5yojdkZvh0Atza5P82QalbLLnFPm-D1pRSo",
  },

  openGraph: {
    title: "Xentum Brand Solutions Pvt. Ltd.",
    description:
      "Premium Branding, Marketing, Corporate Events, Fabrication, Printing, Merchandising and Corporate Gifting Solutions.",
    url: "https://xentumbrandsolutions.vercel.app",
    siteName: "Xentum Brand Solutions",
    locale: "en_US",
    type: "website",
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