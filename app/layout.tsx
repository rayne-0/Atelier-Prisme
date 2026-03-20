import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter' 
});

export const metadata: Metadata = {
  title: "Atelier Prisme | High-End Creative Studio",
  description: "Studio-Grade Visuals. Without the Studio. High-end product and fashion visuals — digitally produced for modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-[#0D0D0D] text-white antialiased [&_h1]:font-serif [&_h2]:font-serif [&_h3]:font-serif [&_h4]:font-serif [&_h5]:font-serif [&_h6]:font-serif`}>
        <Nav />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
