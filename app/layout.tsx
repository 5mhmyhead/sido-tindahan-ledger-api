import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavTabs } from "@/components/nav-tabs";

const inter = Inter({
  variable: "--font-sans",
  style: "normal",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  style: "italic",
});


export const metadata: Metadata = {
  title: "Portfolio Projects",
  description: "Enterprise Programming 2 Week 2 Activity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans min-h-full flex flex-col">
        <header className="border-b border-neutral-200 px-16">
          <NavTabs />
        </header>
        {children}
      </body>
    </html>
  );
}