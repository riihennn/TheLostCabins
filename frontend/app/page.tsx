"use client";

import { useRef } from "react";
import HeroCarousel from "../components/HeroCarousel";
import AnimatedSecondHero from "../components/AnimatedSecondHero";
import SimpleCarousel from "../components/SimpleCarousel";
import InstagramFeed from "../components/InstagramFeed";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const activitiesRef = useRef(null);
  const isActivitiesInView = useInView(activitiesRef, { amount: 0.2 });

  return (
    <main className="w-full overflow-x-hidden relative text-foreground">

      {/* Top Hero Section */}
      <HeroCarousel />

      {/* Second Hero Section */}
      <AnimatedSecondHero />

      <motion.div 
        initial={{ backgroundColor: "#fcf9f2" }}
        animate={{ backgroundColor: isActivitiesInView ? "#fdfa99" : "#fcf9f2" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full relative z-10"
      >
        {/* Rooms Section */}
        <section className="px-6 md:px-16 lg:px-32 min-h-screen py-12 flex items-center justify-center w-full">
          <div className="w-full max-w-[1200px] flex flex-col-reverse md:flex-row gap-10 lg:gap-16 items-center justify-center">
            {/* Text Left */}
            <div className="w-full md:w-[45%] flex flex-col max-w-[420px] md:pr-4 mt-4 md:mt-0">
              <span className="font-serif text-[#34673f] text-[1.75rem] mb-2 tracking-wide">The Cabins</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-[#2a2a2a]">
                Catchup<br />with yourself
              </h2>
              <p className="text-[1.1rem] mb-10 text-[#2a2a2a] font-sans font-normal">
                A view to suit every mood, every company<br />(Click to view)
              </p>

              <div className="flex flex-col mb-12 w-full max-w-[420px]">
                <div className="border-b-[1.5px] border-gray-400 pb-3 pt-2 flex justify-between items-center cursor-pointer transition-colors group">
                  <span className="font-serif text-lg sm:text-xl md:text-[1.6rem] text-[#2a2a2a] group-hover:text-[#34673f]">Nature-Embraced Pool</span>
                </div>
                <div className="border-b-[1.5px] border-gray-400 pb-3 pt-5 flex justify-between items-center cursor-pointer transition-colors group">
                  <span className="font-serif text-lg sm:text-xl md:text-[1.6rem] text-[#2a2a2a] group-hover:text-[#34673f]">Forest View Room</span>
                </div>
                <div className="border-b-[1.5px] border-gray-400 pb-3 pt-5 flex justify-between items-center cursor-pointer transition-colors group">
                  <span className="font-serif text-lg sm:text-xl md:text-[1.6rem] text-[#2a2a2a] group-hover:text-[#34673f]">Mountain View Room</span>
                </div>
              </div>

              <Link href="/rooms" className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-6 py-2.5 text-[15px] hover:bg-[#2a2a2a] hover:text-[#fcf9f2] transition-colors font-sans rounded-[4px]">
                View All Rooms
              </Link>
            </div>

            {/* Carousel Right */}
            <div className="w-full md:w-[45%] relative aspect-[5.2/6] max-w-[500px]">
              <SimpleCarousel images={[
                "/images/IMG_7825.jpg",
                "/images/Hexa_image/IMG_7814.jpg",
                "/images/Hexa_image/IMG_7816.jpg",
                "/images/IMG_7821_3.jpg",
                "/images/IMG_7811.jpg",
                
              ]} />
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section 
          ref={activitiesRef}
          className="px-6 md:px-16 lg:px-32 min-h-screen py-12 flex items-center justify-center w-full"
        >
          <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-10 lg:gap-16 items-center justify-center">
            {/* Carousel Left */}
            <div className="w-full md:w-[45%] relative aspect-[5.2/6] max-w-[500px] mb-8 md:mb-0">
              <SimpleCarousel images={[
                "/images/Hexa_image/IMG_7864.jpg",
                "/images/Twinpines_image/IMG_7845.jpg",
                "/images/IMG_7842.jpg",
                "/images/IMG_7847.jpg",
              ]} />
            </div>

            {/* Text Right */}
            <div className="w-full md:w-[45%] flex flex-col justify-center max-w-[500px] md:pl-8">
              <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 text-[#34673f]/80">
                Activities & Adventures
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-8 text-[#34673f]">
                Curated nature experiences through the hidden beauty of Thusharagiri
              </h2>
              
              <div className="font-sans text-[0.95rem] leading-[1.8] text-[#34673f]/90 space-y-6 mb-10">
                <p>
                  Surrounded by dense forests, cascading waterfalls, and mist-covered trails, Lost Cabins offers a thoughtfully crafted escape into the wild heart of Thusharagiri. From peaceful nature walks and hidden stream explorations to thrilling adventures near the famous Thusharagiri Waterfalls, every experience is designed to reconnect you with nature.
                </p>
                <p>
                  Guided by the calm rhythm of the mountains and forest, your stay can be tailored to your pace — whether it’s scenic trekking, waterfall adventures, plantation trails, or quiet moments deep within the woods.
                </p>
              </div>

              <button className="self-start border border-[#34673f] text-[#34673f] px-8 py-3.5 text-[13px] hover:bg-[#34673f] hover:text-[#fdfa99] transition-colors font-sans tracking-wide">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Follow Our Flow / Instagram Section */}
        <section className="px-6 md:px-16 lg:px-32 min-h-screen py-12 flex flex-col justify-center text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-[#222]">Follow Our Flow</h2>
          <div className="flex items-center justify-center gap-3 mb-12 text-lg text-[#555]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <a
              href="https://www.instagram.com/the_lostcabins"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cca885] transition-colors font-sans font-light tracking-wide"
            >
              @the_lostcabins
            </a>
          </div>

          <InstagramFeed 
            username="@the_lostcabins"
            fallbackImages={[
              "/images/A-Frame_image/IMG_7843.jpg",
              "/images/Hexa_image/IMG_7816.jpg",
              "/images/Twinpines_image/IMG_7813.jpg"
            ]}
          />
        </section>
      </motion.div>
    </main>
  );
}
