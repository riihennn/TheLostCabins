import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HorizontalGallery from "@/components/HorizontalGallery";

// Data mapping for all rooms
const roomsData = {
  "a-frame-cabin": {
    name: "A-Frame Cabin",
    description: "Overlooking a lush forest, these guestrooms offer an unparalleled view of the tropical greenery. While the bedroom can be overwhelming, thanks to the extra-large glass wall, that opens up the indoor space into the outer, the balcony furniture is set up for you to slow down and take it all in.",
    features: { bed: "2 Luxury Bedrooms", capacity: "Accommodates 4 Adults", view: "Balcony/terrace", size: "670 Sq.ft", suitedFor: "Family Friendly" },
    mainImage: "/images/Aframe1.jpg",
    carouselImages: [
      { src: "/images/A-Frame_image/IMG_7839.jpg", section: "Exterior" },
      { src: "/images/A-Frame_image/IMG_7841.jpg", section: "Exterior" },
      { src: "/images/A-Frame_image/IMG_7840.jpg", section: "Exterior" },
      { src: "/images/A-Frame_image/IMG_7846.jpg", section: "Exterior" },
      { src: "/images/A-Frame_image/IMG_7832.jpg", section: "Living room" },
      { src: "/images/A-Frame_image/IMG_7834.jpg", section: "Living room" },
      { src: "/images/A-Frame_image/IMG_7833.jpg", section: "Living room" },
      { src: "/images/A-Frame_image/IMG_7836.jpg", section: "2 Bedroom" },
      { src: "/images/A-Frame_image/IMG_7838.jpg", section: "2 Bedroom" },
      { src: "/images/A-Frame_image/IMG_7835.jpg", section: "2 Bedroom" },
      { src: "/images/A-Frame_image/IMG_7844.jpg", section: "Pool" },
      { src: "/images/A-Frame_image/IMG_7843.jpg", section: "Pool" },
      { src: "/images/Aframe1.jpg", section: "Pool" }
    ]
  },
  "hexa-cabin": {
    name: "Hexa Cabin",
    description: "The ultimate luxury, a room that extends to a pool, which blends into nature. Enjoy the seamless transition between indoor comfort and outdoor serenity, complete with high-end furnishings and spectacular panoramic views.",
    features: { bed: "1 Luxury Double Bed", capacity: "Accommodates 2 Adults", view: "Private Pool View", size: "480 Sq.ft", suitedFor: "Couple Friendly" },
    mainImage: "/images/Hexa_image/IMG_7816.jpg",
    carouselImages: [
      { src: "/images/Hexa_image/IMG_7816.jpg", section: "Exterior" },
      { src: "/images/Hexa_image/IMG_7817.jpg", section: "Exterior" },
      { src: "/images/Hexa_image/IMG_7822.jpg", section: "Exterior" },
      { src: "/images/Hexa_image/IMG_7857.jpg", section: "Exterior" },
      { src: "/images/Hexa_image/IMG_7859.jpg", section: "Exterior" },
      { src: "/images/Hexa_image/IMG_7849.jpg", section: "Living room" },
      { src: "/images/Hexa_image/IMG_7850.jpg", section: "Living room" },
      { src: "/images/Hexa_image/IMG_7855.jpg", section: "Living room" },
      { src: "/images/Hexa_image/IMG_7851.jpg", section: "Bedroom" },
      { src: "/images/Hexa_image/IMG_7852.jpg", section: "Bedroom" },
      { src: "/images/Hexa_image/IMG_7854.jpg", section: "Bedroom" },
      { src: "/images/Hexa_image/IMG_7814.jpg", section: "Pool" },
      { src: "/images/Hexa_image/IMG_7864.jpg", section: "Pool" },
      { src: "/images/Hexa_image/IMG_7863.jpg", section: "Pool" }
    ]
  },
  "twin-pines-cabin-1": {
    name: "Twin Pines Cabin 1",
    description: "It is not every day that you wake up to a view of the mist-covered mountain from your bed. This cozy, wooden-finished cabin offers the perfect retreat for couples looking to reconnect with nature.",
    features: { bed: "1 Luxury Double Bed", capacity: "Accommodates 2 Adults", view: "Mountain View", size: "520 Sq.ft", suitedFor: "Couple Friendly" },
    mainImage: "/images/Twinpines_image/IMG_7813.jpg",
    carouselImages: [
      { src: "/images/Twinpines_image/IMG_7813.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7823.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7845.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7871.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7873.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7865.jpg", section: "Living room" },
      { src: "/images/Twinpines_image/IMG_7866.jpg", section: "Living room" },
      { src: "/images/Twinpines_image/IMG_7867.jpg", section: "Living room" },
      { src: "/images/Twinpines_image/IMG_7872.jpg", section: "Living room" },
      { src: "/images/Twinpines_image/IMG_7868.jpg", section: "Bedroom" },
      { src: "/images/Twinpines_image/IMG_7869.jpg", section: "Bedroom" },
      { src: "/images/Twinpines_image/IMG_7870.jpg", section: "Bedroom" },
      { src: "/images/Twinpines_image/IMG_7872.jpg", section: "Bedroom" },
      { src: "/images/Twinpines_image/IMG_7874.jpg", section: "Pool" },
      { src: "/images/Twinpines_image/IMG_7876.jpg", section: "Pool" },
      { src: "/images/Twinpines_image/IMG_7877.jpg", section: "Pool" },
      { src: "/images/Twinpines_image/IMG_7878.jpg", section: "Pool" }
    ]
  },
  "twin-pines-cabin-2": {
    name: "Twin Pines Cabin 2",
    description: "Experience the calming sound of the nearby stream from the comfort of your private deck. This cabin provides a serene, secluded atmosphere surrounded by towering pines.",
    features: { bed: "1 Luxury Double Bed", capacity: "Accommodates 2 Adults", view: "Forest & Stream View", size: "520 Sq.ft", suitedFor: "Couple Friendly" },
    mainImage: "/images/Twinpines_image/IMG_7835.jpg",
    carouselImages: [
      { src: "/images/Twinpines_image/IMG_7831.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7835.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7845.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7871.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7813.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7873.jpg", section: "Exterior" },
      { src: "/images/Twinpines_image/IMG_7865.jpg", section: "Living room" },
      { src: "/images/Twinpines_image/IMG_7866.jpg", section: "Living room" },
      { src: "/images/Twinpines_image/IMG_7867.jpg", section: "Living room" },
      { src: "/images/Twinpines_image/IMG_7872.jpg", section: "Living room" },
      { src: "/images/Twinpines_image/IMG_7868.jpg", section: "Bedroom" },
      { src: "/images/Twinpines_image/IMG_7869.jpg", section: "Bedroom" },
      { src: "/images/Twinpines_image/IMG_7870.jpg", section: "Bedroom" },
      { src: "/images/Twinpines_image/IMG_7872.jpg", section: "Bedroom" },
      { src: "/images/Twinpines_image/IMG_7874.jpg", section: "Pool" },
      { src: "/images/Twinpines_image/IMG_7876.jpg", section: "Pool" },
      { src: "/images/Twinpines_image/IMG_7877.jpg", section: "Pool" },
      { src: "/images/Twinpines_image/IMG_7878.jpg", section: "Pool" }
    ]
  }
};

const defaultAmenities = [
  { name: "Power Backup", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="18" height="12" rx="2" /><path d="M22 10v4" /><path d="M10 16l2-8 3 8" /></svg> },
  { name: "Air conditioning", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 6h7a2 2 0 0 1 0 4h-4M9 18h9a2 2 0 0 0 0-4h-5M3 12h18M4 6a2 2 0 0 0 0 4h3M4 18a2 2 0 0 1 0-4h4" /></svg> },
  { name: "Family rooms", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg> },
  { name: "Family-friendly", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
  { name: "Free Car Parking", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg> },
  { name: "Free Wifi", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" /></svg> },
  { name: "Housekeeping", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.8 3.2L5 17 2.2 21.8l4.8-2.8L20.8 5.2a2.8 2.8 0 0 0-4-4z" /><path d="M13 11l4-4" /><path d="M8 16l4-4" /></svg> },
  { name: "Local Experiences", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="16" height="14" rx="2" /><path d="M2 10h20" /><path d="M8 6v14" /><path d="M16 6v14" /><path d="M4 14h16" /></svg> },
  { name: "Pets Friendly", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21a9.9 9.9 0 0 1-4.8-1.2C5.4 18.7 4.5 16 4.5 14.5c0-1.8 1.5-3 3-3 .7 0 1.5.3 2 .8C10.5 13.3 11 14 12 14c1 0 1.5-.7 2.5-1.7.5-.5 1.3-.8 2-.8 1.5 0 3 1.2 3 3 0 1.5-.9 4.2-2.7 5.3A9.9 9.9 0 0 1 12 21z" /><circle cx="7.5" cy="8.5" r="1.5" /><circle cx="11.5" cy="5.5" r="1.5" /><circle cx="16.5" cy="8.5" r="1.5" /></svg> },
  { name: "Swimming Pool", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12h20M2 16h20M2 20h20" /><path d="M6 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" /><path d="M10 4v8M14 4v8" /></svg> }
];

export default function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const room = roomsData[resolvedParams.slug as keyof typeof roomsData];

  if (!room) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fcf9f2] pt-32 lg:pt-40 pb-20">

      {/* Header */}
      <section className="text-center mb-16 px-6">
        <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-6">
          <Image
            src="/images/LostCabin-icon-green.png"
            alt="Lost Cabins Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-[#2a2a2a]">{room.name}</h1>
      </section>

      {/* Room Overview (Image + Details) */}
      <section className="max-w-[1200px] mx-auto pb-30 px-6 md:px-12 mb-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] bg-[#2a2a2a]">
          <Image
            src={room.mainImage}
            alt={room.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="font-sans font-light text-[#565656] text-lg leading-relaxed mb-10">
            {room.description}
          </p>

          <div className="flex flex-col gap-5 mb-12">
            <div className="flex items-center gap-4 text-[#565656]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /></svg>
              <span className="font-sans font-light text-lg">{room.features.bed}</span>
            </div>
            <div className="flex items-center gap-4 text-[#565656]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <span className="font-sans font-light text-lg">{room.features.capacity}</span>
            </div>
            <div className="flex items-center gap-4 text-[#565656]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
              <span className="font-sans font-light text-lg">{room.features.view}</span>
            </div>
            <div className="flex items-center gap-4 text-[#565656]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              <span className="font-sans font-light text-lg">{room.features.size}</span>
            </div>
            <div className="flex items-center gap-4 text-[#565656]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              <span className="font-sans font-light text-lg">{room.features.suitedFor}</span>
            </div>
          </div>

          <Link href={`/booking?cabin=${encodeURIComponent(room.name)}`} className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans">
            Book Online
          </Link>
        </div>
      </section>

      {/* Scroll-Sticky Horizontal Gallery - Client Component */}
      <HorizontalGallery roomName={room.name} carouselImages={room.carouselImages} />

      {/* Amenities Section */}
      <section className="w-full pt-10 pb-20 mb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-5xl md:text-[4rem] text-[#2a2a2a] mb-4">
            Amenities
          </h2>
          <p className="font-sans text-lg text-[#565656] mb-16">
            Explore the most loved facilities offered by our property.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 text-left max-w-[1000px] mx-auto px-4 md:px-0">
            {defaultAmenities.map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-[#2a2a2a]">
                <div className="w-6 h-6 flex-shrink-0 opacity-90">{item.icon}</div>
                <span className="font-sans font-medium text-[15px]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Rooms */}
      <section className="flex justify-center items-center pb-10">
        <Link href="/rooms" className="flex items-center gap-3 font-sans text-[#2a2a2a] hover:text-[#34673f] transition-colors group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-2 transition-transform"><polyline points="15 18 9 12 15 6"></polyline></svg>
          <span className="text-lg">Back To Rooms</span>
        </Link>
      </section>
    </main>
  );
}
