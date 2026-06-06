import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Cabins — A-Frame, Hexa & Twin Pines | The Lost Cabins, Kerala",
  description:
    "Explore all cabin types at The Lost Cabins near Thusharagiri, Kerala — the A-Frame Cabin with glass forest walls, the Hexa Cabin with pool views, and the Twin Pines Cabins with misty mountain vistas. Book your ideal cabin stay today.",
  keywords: [
    "cabins The Lost Cabins",
    "A-Frame cabin Thusharagiri",
    "Hexa cabin Kerala",
    "Twin Pines cabin Kerala",
    "all cabins forest resort Kerala",
    "secluded cabin types Kerala",
    "best cabin stays Kerala",
    "cabin booking Thusharagiri",
  ],
  alternates: {
    canonical: "/rooms",
  },
  openGraph: {
    type: "website",
    url: "https://www.thelostcabins.in/rooms",
    siteName: "The Lost Cabins",
    title: "All Cabins — A-Frame, Hexa & Twin Pines | The Lost Cabins, Kerala",
    description:
      "Choose from A-Frame, Hexa, and Twin Pines cabins at The Lost Cabins near Thusharagiri Waterfalls, Kerala. Each cabin offers a unique nature-immersive experience.",
    images: [
      {
        url: "/images/areal.jpg",
        width: 1200,
        height: 630,
        alt: "The Lost Cabins — Forest Cabin Resort near Thusharagiri, Kerala",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Cabins | The Lost Cabins, Thusharagiri, Kerala",
    description:
      "Explore A-Frame, Hexa, and Twin Pines cabin options at The Lost Cabins near Thusharagiri Waterfalls, Kerala.",
    images: ["/images/areal.jpg"],
  },
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
