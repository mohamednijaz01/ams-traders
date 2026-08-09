import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMS Traders | Fruits & Vegetables Wholesale Supplier",
  description:
    "AMS Traders — Coimbatore's premier wholesale supplier of farm-fresh fruits and vegetables for supermarkets, restaurants, hotels, and commercial buyers. 20+ years of trusted bulk supply.",
  keywords: [
    "AMS Traders",
    "Wholesale Fruits",
    "Wholesale Vegetables",
    "Bulk Produce Supplier",
    "Fresh Produce Wholesale",
    "Coimbatore Wholesale Market",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1a2e1f] selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
