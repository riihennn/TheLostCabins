import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences — Waterfalls, Trekking & More | The Lost Cabins, Kerala",
  description:
    "Explore unique experiences near The Lost Cabins — trek to Thusharagiri Waterfalls, enjoy birdwatching in the Western Ghats forest, relax by the pool, and immerse yourself in Kerala's lush tropical nature.",
  keywords: [
    "Thusharagiri waterfall trekking",
    "experiences near Thusharagiri",
    "things to do Thusharagiri",
    "Kerala forest activities",
    "birdwatching Kerala",
    "nature experiences Kerala resort",
    "waterfall trek Kerala",
    "The Lost Cabins experiences",
    "jungle activities Calicut",
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
        url: "/images/areal.jpg",
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
    images: ["/images/areal.jpg"],
  },
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
