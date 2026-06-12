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
    default: "The Lost Cabins | Best Resort in Thusharagiri, Kerala — Nature Cabin Stay",
    template: "%s | The Lost Cabins, Thusharagiri",
  },
  description:
    "The Lost Cabins is a premium nature resort in Thusharagiri, Kerala — surrounded by dense forests, cascading waterfalls, and mist-covered trails. Book an A-Frame, Hexa, or Twin Pines cabin for an unforgettable stay near Thusharagiri Waterfalls, Kozhikode.",
  keywords: [
    // Primary location queries
    "resort in thusharagiri",
    "thusharagiri resort",
    "thusharagiri resort kerala",
    "best resort in thusharagiri",
    "resort near thusharagiri waterfalls",
    "resort thusharagiri kozhikode",
    "resort in thusharagiri calicut",
    // Rooms / cabin queries
    "rooms in thusharagiri",
    "rooms thusharagiri",
    "cabin rooms thusharagiri",
    "thusharagiri cabin stay",
    "thusharagiri rooms",
    "rooms near thusharagiri waterfalls",
    "hotel rooms thusharagiri",
    // Wayanad proximity queries
    "resort near wayanad thusharagiri",
    "resort in wayanad thusharagiri",
    "wayanad thusharagiri resort",
    "wayanad border resort kerala",
    // Kozhikode / Calicut
    "resort near kozhikode",
    "resort calicut wayanad",
    "nature resort kozhikode",
    "forest resort kozhikode",
    // Hotels / stay
    "hotels in thusharagiri",
    "places to stay in thusharagiri",
    "thusharagiri stay",
    "thusharagiri accommodation",
    "thusharagiri hotel",
    // Common misspellings
    "thasharagiri resort",
    "thusharagari resort",
    "thusaragiri resort",
    "thusharagiri reasort",
    // Long-tail high-intent
    "premium resort in thusharagiri",
    "nature resort in thusharagiri",
    "nearest resort to thusharagiri waterfalls",
    "luxury cabin stay thusharagiri",
    "couple resort thusharagiri",
    "forest cabin resort thusharagiri",
    "thusharagiri tourism resort",
    "thusharagiri waterfalls stay",
    // Brand
    "The Lost Cabins",
    "Lost Cabins thusharagiri",
    "A-Frame cabin Kerala",
    "Hexa cabin thusharagiri",
    "Twin Pines cabin Kerala",
    "jungle stay kerala",
    "forest retreat calicut",
  ],
  metadataBase: new URL("https://www.thelostcabins.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.thelostcabins.in",
    siteName: "The Lost Cabins",
    title: "The Lost Cabins | Best Resort in Thusharagiri, Kerala",
    description:
      "Premium nature resort in Thusharagiri, Kerala. Stay in A-Frame, Hexa, or Twin Pines forest cabins near Thusharagiri Waterfalls. Book your escape today.",
    images: [
      {
        url: "/images/Aframe1.jpg",
        width: 1200,
        height: 630,
        alt: "The Lost Cabins — Aerial view of forest cabin resort near Thusharagiri, Kerala",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lost Cabins | Best Resort in Thusharagiri, Kerala",
    description:
      "Premium nature resort in Thusharagiri, Kerala. Stay in A-Frame, Hexa, or Twin Pines forest cabins near Thusharagiri Waterfalls.",
    images: ["/images/Aframe1.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Resort", "LodgingBusiness"],
              "name": "The Lost Cabins",
              "alternateName": "Lost Cabins Thusharagiri",
              "image": [
                "https://www.thelostcabins.in/images/Aframe1.jpg",
                "https://www.thelostcabins.in/images/Aframe1.jpg",
                "https://www.thelostcabins.in/images/Hexa_image/IMG_7816.jpg"
              ],
              "description": "Surrounded by dense forests, cascading waterfalls, and mist-covered trails, The Lost Cabins offers a thoughtfully crafted escape into the wild heart of Thusharagiri, Kerala.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thusharagiri",
                "addressLocality": "Thusharagiri",
                "addressRegion": "Kerala",
                "postalCode": "673575",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.5285,
                "longitude": 75.8542
              },
              "telephone": "+91-8891863034",
              "url": "https://www.thelostcabins.in",
              "sameAs": [
                "https://www.instagram.com/the_lostcabins"
              ],
              "priceRange": "₹₹₹",
              "checkinTime": "14:00",
              "checkoutTime": "11:00",
              "starRating": {
                "@type": "Rating",
                "ratingValue": "4"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Private Pool", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Forest View", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Nature Trekking", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Waterfall Access", "value": true }
              ],
              "tourBookingPage": "https://www.thelostcabins.in/booking"
            })
          }}
        />
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
