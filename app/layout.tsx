import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Luxury Opulent Tech Portfolio",
  description:
    "A high-end, data-driven portfolio with a luxury tech aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased marble-bg`}>
        <Navbar />
        <div className="relative min-h-screen">
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
