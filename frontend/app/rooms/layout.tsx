import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabins & Rooms in Thusharagiri | A-Frame, Hexa & Twin Pines | The Lost Cabins",
  description:
    "Browse all cabin rooms at The Lost Cabins, Thusharagiri, Kerala — A-Frame Cabin with glass forest walls, Hexa Cabin with private pool views, and Twin Pines Cabins with misty mountain vistas. Book your ideal room in Thusharagiri today.",
  keywords: [
    "rooms in thusharagiri",
    "rooms thusharagiri",
    "cabins thusharagiri",
    "thusharagiri rooms",
    "cabin rooms thusharagiri",
    "rooms near thusharagiri waterfalls",
    "hotel rooms thusharagiri kerala",
    "thusharagiri accommodation",
    "A-Frame cabin thusharagiri",
    "Hexa cabin thusharagiri",
    "Twin Pines cabin thusharagiri",
    "forest cabin rooms kerala",
    "secluded cabin stay kerala",
    "cabin booking thusharagiri",
    "rooms thasharagiri",
    "rooms thusharagari",
    "resort rooms kozhikode",
    "cabin types kerala resort",
    "best cabin stays thusharagiri",
  ],
  alternates: {
    canonical: "/rooms",
  },
  openGraph: {
    type: "website",
    url: "https://www.thelostcabins.in/rooms",
    siteName: "The Lost Cabins",
    title: "Cabins & Rooms in Thusharagiri | A-Frame, Hexa & Twin Pines | The Lost Cabins",
    description:
      "Choose from A-Frame, Hexa, and Twin Pines cabin rooms at The Lost Cabins near Thusharagiri Waterfalls, Kerala. Book your nature-immersive stay today.",
    images: [
      {
        url: "/images/Aframe1.jpg",
        width: 1200,
        height: 630,
        alt: "The Lost Cabins — Forest Cabin Rooms near Thusharagiri, Kerala",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabins & Rooms in Thusharagiri | The Lost Cabins, Kerala",
    description:
      "A-Frame, Hexa, and Twin Pines cabin rooms at The Lost Cabins near Thusharagiri Waterfalls, Kerala.",
    images: ["/images/Aframe1.jpg"],
  },
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
