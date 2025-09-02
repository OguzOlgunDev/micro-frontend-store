import type { Metadata } from "next";
import { Inter } from "next/font/google"; // ✅ Google font ekliyoruz
import "./globals.css";

import Navbar from "@/components/navbar/Navbar"; // ✅ Navbar import

// Inter font (600 ve 700 bold ağırlıklarıyla)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "MyStore",
  description: "Micro-Frontend E-commerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen container mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
