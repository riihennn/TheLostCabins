import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Cabin — The Lost Cabins | Thusharagiri, Kerala",
  description:
    "Book your stay at The Lost Cabins near Thusharagiri Waterfalls, Kerala. Check cabin availability and reserve your A-Frame, Hexa, or Twin Pines cabin for an unforgettable forest retreat.",
  keywords: [
    "book cabin Kerala",
    "The Lost Cabins booking",
    "Thusharagiri cabin reservation",
    "cabin booking Kerala",
    "forest resort booking Kerala",
    "book A-Frame cabin",
    "book Hexa cabin",
    "book Twin Pines cabin",
    "Kerala resort reservation",
  ],
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    type: "website",
    url: "https://www.thelostcabins.in/booking",
    siteName: "The Lost Cabins",
    title: "Book Your Cabin Stay | The Lost Cabins, Thusharagiri, Kerala",
    description:
      "Reserve your cabin at The Lost Cabins — A-Frame, Hexa, or Twin Pines. A forest retreat near Thusharagiri Waterfalls, Kerala. Book now for the best rates.",
    images: [
      {
        url: "/images/Aframe1.jpg",
        width: 1200,
        height: 630,
        alt: "The Lost Cabins — Book a Cabin Stay near Thusharagiri, Kerala",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Cabin | The Lost Cabins, Thusharagiri, Kerala",
    description:
      "Book your forest cabin stay at The Lost Cabins near Thusharagiri Waterfalls, Kerala. A-Frame, Hexa, and Twin Pines available.",
    images: ["/images/Aframe1.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
