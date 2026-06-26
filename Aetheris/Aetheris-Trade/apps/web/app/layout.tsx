import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Aetheris Trade",
    template: "%s | Aetheris Trade",
  },
  description:
    "Institutional-grade AI powered trading platform built for modern investors.",
  applicationName: "Aetheris Trade",
  keywords: [
    "Aetheris",
    "Aetheris Trade",
    "Trading",
    "Finance",
    "Stocks",
    "AI",
    "Investing",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}