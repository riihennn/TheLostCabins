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
    default: "The Lost Cabins | Nature Resort in Thusharagiri - Premium resort in Thusharagiri",
    template: "%s | The Lost Cabins",
  },
  description:
    "Looking for a premium nature resort in Thusharagiri? Book your stay at The Lost Cabins. We offer cozy and comfortable rooms in Thusharagiri, featuring unique A-Frame, Hexa, and Twin Pines cabins surrounded by lush jungle and nature.",
  keywords: [
    "The Lost Cabins",
    "forest cabin stay Kerala",
    "resort in thusharagiri",
    "rooms in thusharagiri",
    "hotels in thusharagiri",
    "places to stay in thusharagiri",
    "thusharagiri stay",
    "premium resort in thusharagiri",
    "nature resort in thusharagiri",
    "best resort in thusharagiri",
    "thusharagiri waterfalls stay",
    "thusharagiri tourism",
    "nearest resort to thusharagiri waterfalls",
    "Thusharagiri resort",
    "cabin resort Kerala",
    "secluded cabin Thusharagiri",
    "jungle stay Kerala",
    "nature resort Kozhikode",
    "A-Frame cabin Kerala",
    "Hexa cabin",
    "Twin Pines cabin",
    "best resort near Thusharagiri waterfalls",
    "couple resort Kerala",
    "forest retreat Calicut",
  ],
  metadataBase: new URL("https://www.thelostcabins.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.thelostcabins.in",
    siteName: "The Lost Cabins",
    title: "The Lost Cabins | Nature Resort in Thusharagiri - Premium resort in Thusharagiri",
    description:
      "Looking for a premium nature resort in Thusharagiri? Book your stay at The Lost Cabins. We offer cozy rooms and cabins nestled in nature near Thusharagiri Waterfalls.",
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
    title: "The Lost Cabins | Nature Resort in Thusharagiri - Premium resort in Thusharagiri",
    description:
      "Book your stay at The Lost Cabins — a premium nature resort offering the best rooms in Thusharagiri, Kerala.",
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
