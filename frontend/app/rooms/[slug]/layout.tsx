import type { Metadata } from "next";

const roomsMeta: Record<string, { title: string; description: string }> = {
  "a-frame-cabin": {
    title: "A-Frame Cabin | The Lost Cabins | Forest Stay in Thusharagiri",
    description: "Stay in our stunning A-Frame Cabin at The Lost Cabins — a luxury forest view room with a large glass wall, private balcony, and pool access in Thusharagiri, Kerala.",
  },
  "hexa-cabin": {
    title: "Hexa Cabin | Pool View Luxury Cabin | The Lost Cabins",
    description: "Experience the ultimate luxury in our Hexa Cabin — a nature-embraced pool view room at The Lost Cabins, Thusharagiri, Kerala.",
  },
  "twin-pines-cabin-1": {
    title: "Twin Pines Cabin 1 | Mountain View Stay | The Lost Cabins",
    description: "Wake up to mist-covered mountain views in Twin Pines Cabin 1 at The Lost Cabins. A luxury forest retreat in Thusharagiri, Kerala.",
  },
  "twin-pines-cabin-2": {
    title: "Twin Pines Cabin 2 | Pool View Stay | The Lost Cabins",
    description: "Experience Twin Pines Cabin 2 at The Lost Cabins — a luxury pool-view cabin nestled in the forests of Thusharagiri, Kerala.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = roomsMeta[slug];
  if (!meta) {
    return {
      title: "Room | The Lost Cabins",
      description: "Luxury cabin stays in Thusharagiri, Kerala.",
    };
  }
  return meta;
}

export default function RoomSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
