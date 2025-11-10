import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/layout/Navigation";
import { WhatsAppButtonWrapper } from '@/components/whatsapp-button-wrapper';
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuhaan Traders - Material Sourcing Specialist & Supplier",
  description: "Your trusted material sourcing specialist serving Hotels, Pharma, Manufacturing, and Corporate sectors. Get the best market quotes with our wide supplier network.",
  keywords: ["material sourcing", "supplier", "procurement", "hospitality", "pharma", "manufacturing", "corporate", "supply chain", "best quotes"],
  authors: [{ name: "Kuhaan Traders" }],
  openGraph: {
    title: "Kuhaan Traders - Material Sourcing Specialist",
    description: "Your trusted material sourcing specialist serving Hotels, Pharma, Manufacturing, and Corporate sectors. Get the best market quotes with our wide supplier network.",
    url: "https://kuhaantraders.com",
    siteName: "Kuhaan Traders",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuhaan Traders - Material Sourcing Specialist",
    description: "Your trusted material sourcing specialist serving Hotels, Pharma, Manufacturing, and Corporate sectors. Get the best market quotes with our wide supplier network.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButtonWrapper />
        <Toaster />
      </body>
    </html>
  );
}

