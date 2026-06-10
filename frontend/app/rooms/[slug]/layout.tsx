import type { Metadata } from "next";

const roomsMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  "a-frame-cabin": {
    title: "A-Frame Cabin Room in Thusharagiri | Glass Forest View | The Lost Cabins",
    description:
      "Book the A-Frame Cabin at The Lost Cabins, Thusharagiri, Kerala — featuring a floor-to-ceiling glass wall overlooking lush forest, private balcony, and pool access. The perfect nature cabin room near Thusharagiri Waterfalls, Kozhikode.",
    keywords: [
      "A-Frame cabin thusharagiri",
      "A-Frame room thusharagiri",
      "glass wall cabin kerala",
      "forest view cabin thusharagiri",
      "cabin rooms thusharagiri",
      "rooms thusharagiri",
      "romantic cabin thusharagiri kerala",
      "cabin with pool thusharagiri",
      "resort room thusharagiri",
      "A-Frame cabin kozhikode",
      "forest cabin stay kerala",
      "best cabin room thusharagiri",
    ],
  },
  "hexa-cabin": {
    title: "Hexa Cabin Room in Thusharagiri | Pool View Nature Cabin | The Lost Cabins",
    description:
      "Stay in the Hexa Cabin at The Lost Cabins, Thusharagiri, Kerala — a uniquely shaped cabin with private pool views immersed in nature. Perfect room for couples near Thusharagiri Waterfalls, Kozhikode.",
    keywords: [
      "Hexa cabin thusharagiri",
      "pool view cabin thusharagiri",
      "hexa cabin rooms kerala",
      "unique cabin room thusharagiri",
      "nature cabin resort kerala",
      "resort rooms thusharagiri",
      "cabin room kozhikode",
      "wayanad thusharagiri cabin",
      "romantic room thusharagiri",
      "thusharagiri cabin booking",
    ],
  },
  "twin-pines-cabin-1": {
    title: "Twin Pines Cabin 1 | Mountain View Room in Thusharagiri | The Lost Cabins",
    description:
      "Wake up to misty mountain views in Twin Pines Cabin 1 at The Lost Cabins, Thusharagiri, Kerala. A serene forest cabin room experience with lush greenery — near Thusharagiri Waterfalls, Kozhikode.",
    keywords: [
      "Twin Pines cabin thusharagiri",
      "mountain view room thusharagiri",
      "mist cabin room kerala",
      "forest cabin thusharagiri",
      "cabin rooms thusharagiri",
      "thusharagiri nature room",
      "resort rooms kozhikode",
      "rooms near thusharagiri waterfalls",
      "nature retreat cabin kerala",
    ],
  },
  "twin-pines-cabin-2": {
    title: "Twin Pines Cabin 2 | Pool View Forest Room in Thusharagiri | The Lost Cabins",
    description:
      "Experience Twin Pines Cabin 2 at The Lost Cabins, Thusharagiri, Kerala — a peaceful pool-view cabin room surrounded by forest. Perfect for couples and small groups seeking a nature escape near Thusharagiri Waterfalls.",
    keywords: [
      "Twin Pines cabin 2 thusharagiri",
      "pool view room thusharagiri",
      "forest cabin room thusharagiri",
      "cabin rooms kerala",
      "resort room thusharagiri",
      "nature stay thusharagiri",
      "rooms near kozhikode",
      "wayanad thusharagiri room",
      "thusharagiri forest stay",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = roomsMeta[slug];
  if (!meta) {
    return {
      title: "Secluded Cabin | The Lost Cabins",
      description: "Explore secluded cabin stays at The Lost Cabins, Thusharagiri, Kerala.",
    };
  }
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `/rooms/${slug}`,
    },
    openGraph: {
      type: "website",
      url: `https://www.thelostcabins.in/rooms/${slug}`,
      siteName: "The Lost Cabins",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/images/areal.jpg",
          width: 1200,
          height: 630,
          alt: `${meta.title} — The Lost Cabins, Thusharagiri, Kerala`,
        },
      ],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/areal.jpg"],
    },
  };
}

export default function RoomSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
