import type { Metadata } from "next";

const roomsMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  "a-frame-cabin": {
    title: "A-Frame Cabin — Glass Wall Forest View Stay | The Lost Cabins, Thusharagiri",
    description:
      "Book the A-Frame Cabin at The Lost Cabins — featuring a stunning floor-to-ceiling glass wall overlooking lush forest, a private balcony, and pool access. The perfect romantic cabin escape near Thusharagiri Waterfalls, Kerala.",
    keywords: [
      "A-Frame cabin Kerala",
      "glass wall cabin Thusharagiri",
      "forest view cabin Kerala",
      "secluded cabin stay Kerala",
      "romantic cabin Thusharagiri",
      "cabin with pool Kerala",
      "The Lost Cabins A-Frame",
    ],
  },
  "hexa-cabin": {
    title: "Hexa Cabin — Pool View Nature Cabin | The Lost Cabins, Thusharagiri",
    description:
      "Stay in the Hexa Cabin at The Lost Cabins — a uniquely shaped cabin immersed in nature with breathtaking pool views in Thusharagiri, Kerala. Ideal for couples and nature lovers.",
    keywords: [
      "Hexa cabin Kerala",
      "pool view cabin Thusharagiri",
      "unique cabin stay Kerala",
      "hexagonal cabin Kerala",
      "nature cabin resort Kerala",
      "The Lost Cabins Hexa",
    ],
  },
  "twin-pines-cabin-1": {
    title: "Twin Pines Cabin 1 — Mountain & Mist View Retreat | The Lost Cabins",
    description:
      "Wake up to misty mountain views in Twin Pines Cabin 1 at The Lost Cabins, Thusharagiri, Kerala. A serene forest cabin experience with lush greenery and peaceful surroundings.",
    keywords: [
      "Twin Pines cabin Kerala",
      "mountain view cabin Thusharagiri",
      "mist cabin stay Kerala",
      "forest cabin Thusharagiri",
      "The Lost Cabins Twin Pines 1",
      "nature retreat Kerala",
    ],
  },
  "twin-pines-cabin-2": {
    title: "Twin Pines Cabin 2 — Pool View Forest Cabin | The Lost Cabins",
    description:
      "Experience Twin Pines Cabin 2 at The Lost Cabins — a peaceful pool-view cabin surrounded by forest in Thusharagiri, Kerala. Perfect for couples and small groups seeking a nature escape.",
    keywords: [
      "Twin Pines cabin 2 Kerala",
      "pool view cabin Kerala",
      "forest cabin stay Thusharagiri",
      "The Lost Cabins Twin Pines 2",
      "cabin resort Kerala",
      "nature stay Calicut",
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
