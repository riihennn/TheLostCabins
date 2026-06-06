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
  title: {
    default: "The Lost Cabins | Luxury Forest Cabins Near Thusharagiri Waterfalls, Kerala",
    template: "%s | The Lost Cabins",
  },
  description:
    "Book a stay at The Lost Cabins — Kerala's most unique forest cabin resort near Thusharagiri Waterfalls. Experience luxury A-Frame, Hexa, and Twin Pines cabins surrounded by lush jungle, private pools, and mountain views.",
  keywords: [
    "The Lost Cabins",
    "forest cabin stay Kerala",
    "Thusharagiri resort",
    "cabin resort Kerala",
    "luxury cabin Thusharagiri",
    "jungle stay Kerala",
    "nature resort Kozhikode",
    "A-Frame cabin Kerala",
    "Hexa cabin",
    "Twin Pines cabin",
    "best resort near Thusharagiri waterfalls",
    "couple resort Kerala",
    "forest retreat Calicut",
    "unique stays Kerala",
  ],
  metadataBase: new URL("https://www.thelostcabins.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.thelostcabins.in",
    siteName: "The Lost Cabins",
    title: "The Lost Cabins | Luxury Forest Cabins Near Thusharagiri, Kerala",
    description:
      "Escape to The Lost Cabins — a premium forest cabin resort nestled near Thusharagiri Waterfalls, Kerala. Book A-Frame, Hexa, or Twin Pines cabins for an unforgettable nature retreat.",
    images: [
      {
        url: "/images/areal.jpg",
        width: 1200,
        height: 630,
        alt: "The Lost Cabins — Aerial view of forest cabin resort near Thusharagiri, Kerala",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lost Cabins | Luxury Forest Cabins Near Thusharagiri, Kerala",
    description:
      "Stay at The Lost Cabins — Kerala's most immersive forest cabin resort near Thusharagiri Waterfalls. Book your escape today.",
    images: ["/images/areal.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
