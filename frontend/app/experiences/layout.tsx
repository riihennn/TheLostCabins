import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Things to Do in Thusharagiri | Trekking, Waterfalls & Experiences | The Lost Cabins",
  description:
    "Explore the best experiences near The Lost Cabins, Thusharagiri, Kerala — trek to Thusharagiri Waterfalls, enjoy birdwatching in the Western Ghats, relax by the pool, and immerse yourself in Kerala's lush nature near Kozhikode and Wayanad.",
  keywords: [
    "things to do in thusharagiri",
    "thusharagiri experiences",
    "thusharagiri trekking",
    "thusharagiri waterfall trekking",
    "experiences near thusharagiri",
    "activities near thusharagiri resort",
    "wayanad thusharagiri activities",
    "thusharagiri tourism",
    "things to do near thusharagiri waterfalls",
    "birdwatching thusharagiri",
    "nature activities kozhikode",
    "jungle activities calicut",
    "waterfall trek kerala",
    "forest activities thusharagiri",
    "nature experiences kerala resort",
    "thusharagiri adventure",
  ],
  alternates: {
    canonical: "/experiences",
  },
  openGraph: {
    type: "website",
    url: "https://www.thelostcabins.in/experiences",
    siteName: "The Lost Cabins",
    title: "Experiences Near The Lost Cabins | Thusharagiri, Kerala",
    description:
      "Discover trekking, waterfalls, wildlife, and nature activities near The Lost Cabins, a forest cabin resort in Thusharagiri, Kerala.",
    images: [
      {
        url: "/images/Aframe1.jpg",
        width: 1200,
        height: 630,
        alt: "The Lost Cabins — Experiences near Thusharagiri, Kerala",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences | The Lost Cabins, Thusharagiri, Kerala",
    description:
      "Trekking, waterfalls, birdwatching, and more — explore unforgettable experiences near The Lost Cabins in Thusharagiri, Kerala.",
    images: ["/images/Aframe1.jpg"],
  },
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
