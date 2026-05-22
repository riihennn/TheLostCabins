"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Data mapping for all rooms
const roomsData = {
  "a-frame-cabin": {
    name: "A-Frame Cabin",
    description: "Overlooking a lush forest, these guestrooms offer an unparalleled view of the tropical greenery. While the bedroom can be overwhelming, thanks to the extra-large glass wall, that opens up the indoor space into the outer, the balcony furniture is set up for you to slow down and take it all in.",
    features: { bed: "1 Luxury Double Bed", capacity: "Accommodates 2 Adults", view: "Balcony/terrace", size: "480 Sq.ft" },
    images: ["/images/Aframe1.jpg", "/images/IMG_7812.jpg", "/images/IMG_7822.jpg"]
  },
  "hexa-cabin": {
    name: "Hexa Cabin",
    description: "The ultimate luxury, a room that extends to a pool, which blends into nature. Enjoy the seamless transition between indoor comfort and outdoor serenity, complete with high-end furnishings and spectacular panoramic views.",
    features: { bed: "1 King Size Bed", capacity: "Accommodates 2 Adults", view: "Private Pool View", size: "650 Sq.ft" },
    images: ["/images/IMG_7816 (2).jpg", "/images/IMG_7824.jpg", "/images/IMG_7825.jpg"]
  },
  "twin-pines-cabin-1": {
    name: "Twin Pines Cabin 1",
    description: "It is not every day that you wake up to a view of the mist-covered mountain from your bed. This cozy, wooden-finished cabin offers the perfect retreat for couples looking to reconnect with nature.",
    features: { bed: "1 Luxury Double Bed", capacity: "Accommodates 2 Adults", view: "Mountain View", size: "520 Sq.ft" },
    images: ["/images/IMG_7813.jpg", "/images/IMG_7828.jpg", "/images/IMG_7831.jpg"]
  },
  "twin-pines-cabin-2": {
    name: "Twin Pines Cabin 2",
    description: "Experience the calming sound of the nearby stream from the comfort of your private deck. This cabin provides a serene, secluded atmosphere surrounded by towering pines.",
    features: { bed: "1 Luxury Double Bed", capacity: "Accommodates 2 Adults", view: "Forest & Stream View", size: "520 Sq.ft" },
    images: ["/images/IMG_7835.jpg", "/images/IMG_7823.jpg", "/images/IMG_7822.jpg"]
  }
};

const defaultAmenities = [
  "Luxury Bathroom", "Toiletries", "Towels", "Telephone", "Fan",
  "Private Entrance", "Linens", "Wake-Up Service", "Coffee/Tea Maker",
  "Free Bottled Water", "Desk", "Seating Area", "Closet", "Clothes Rack"
];

// Split amenities into roughly 3 columns
const col1 = defaultAmenities.slice(0, 5);
const col2 = defaultAmenities.slice(5, 10);
const col3 = defaultAmenities.slice(10);

export default function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const room = roomsData[resolvedParams.slug as keyof typeof roomsData];

  if (!room) {
    notFound();
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#fcf9f2] pt-32 lg:pt-40 pb-20 overflow-hidden">
      
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
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 mb-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] bg-[#2a2a2a]">
          <Image
            src={room.images[0]}
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/></svg>
              <span className="font-sans font-light text-lg">{room.features.bed}</span>
            </div>
            <div className="flex items-center gap-4 text-[#565656]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span className="font-sans font-light text-lg">{room.features.capacity}</span>
            </div>
            <div className="flex items-center gap-4 text-[#565656]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              <span className="font-sans font-light text-lg">{room.features.view}</span>
            </div>
            <div className="flex items-center gap-4 text-[#565656]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              <span className="font-sans font-light text-lg">{room.features.size}</span>
            </div>
          </div>

          <button className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans">
            Book Online
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="w-full relative max-w-[1600px] mx-auto px-0 md:px-6 mb-20">
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#2a2a2a] md:rounded-sm">
          <Image
            src={room.images[currentIndex]}
            alt={`${room.name} view ${currentIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-500 ease-in-out"
            priority
          />
        </div>

        {/* Dots below the image */}
        <div className="flex justify-center gap-3 mt-8">
          {room.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[#2a2a2a] scale-125" : "bg-[#2a2a2a]/20 hover:bg-[#2a2a2a]/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 mb-32 text-center">
        <h2 className="font-serif text-5xl md:text-[4rem] text-[#2a2a2a] mb-20">
          Amenities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 gap-x-8 text-left max-w-[900px] mx-auto px-4 md:px-0">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            {col1.map((item) => (
              <span key={item} className="font-sans font-light text-xl text-[#565656]">
                {item}
              </span>
            ))}
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-6">
            {col2.map((item) => (
              <span key={item} className="font-sans font-light text-xl text-[#565656]">
                {item}
              </span>
            ))}
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-6">
            {col3.map((item) => (
              <span key={item} className="font-sans font-light text-xl text-[#565656]">
                {item}
              </span>
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
