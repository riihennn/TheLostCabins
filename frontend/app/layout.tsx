import type { Metadata } from "next";
import { Playfair_Display, Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const stylishFont = Bodoni_Moda({
  variable: "--font-stylish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "The Lost Cabins | Official Resort Website | Thusharagiri, Kerala",
  description: "Escape to The Lost Cabins, a unique resort near Thusharagiri Waterfalls, Kerala. Enjoy comfortable cabin accommodations, natural surroundings, and unforgettable experiences for couples, families, and groups.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${stylishFont.variable}`}
    >
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppIcon />
        </SmoothScroll>
      </body>
    </html>
  );
}
