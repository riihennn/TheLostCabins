import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Story | The Lost Cabins, Thusharagiri, Kerala",
  description:
    "Learn about The Lost Cabins — a unique forest cabin resort born from a love for nature and wilderness near Thusharagiri Waterfalls, Kerala. Discover our story, our cabins, and our commitment to sustainable, immersive stays.",
  keywords: [
    "about The Lost Cabins",
    "The Lost Cabins story",
    "forest resort Kerala",
    "Thusharagiri forest cabins",
    "nature retreat Kerala",
    "eco cabin stay Kerala",
    "cabin resort founders",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "https://www.thelostcabins.in/about",
    siteName: "The Lost Cabins",
    title: "About The Lost Cabins | Forest Cabin Resort, Thusharagiri, Kerala",
    description:
      "Discover the story behind The Lost Cabins — a forest cabin resort near Thusharagiri Waterfalls, Kerala, crafted for those who seek nature, solitude, and unforgettable experiences.",
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
    title: "About The Lost Cabins | Thusharagiri, Kerala",
    description:
      "Learn the story of The Lost Cabins — a nature-immersed forest cabin resort near Thusharagiri Waterfalls, Kerala.",
    images: ["/images/areal.jpg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
