import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zahoor Orchards — Premium Housing Society",
  description:
    "Zahoor Orchards is a premier housing society offering residential & commercial plots with modern amenities including parks, 24/7 security, wide roads, and more.",
  keywords: [
    "Zahoor Orchards",
    "housing society",
    "plots for sale",
    "residential plots",
    "commercial plots",
    "Madhrianwala",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-black">{children}</body>
    </html>
  );
}
