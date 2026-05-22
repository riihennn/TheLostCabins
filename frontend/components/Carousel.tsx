"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const visibleItems = isMobile ? 1 : 3;
      const scrollAmount = scrollRef.current.clientWidth / visibleItems;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const visibleItems = isMobile ? 1 : 3;
      const itemWidth = scrollRef.current.clientWidth / visibleItems;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto pb-12">
      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {images.map((src, i) => (
          <div key={i} className="min-w-full md:min-w-[33.333333%] aspect-[4/5] relative snap-start flex-shrink-0">
            <Image src={src} alt={`Gallery ${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => scroll("left")}
        className="absolute left-6 top-[calc(50%-24px)] -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white drop-shadow-md z-10"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button 
        onClick={() => scroll("right")}
        className="absolute right-6 top-[calc(50%-24px)] -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white drop-shadow-md z-10"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-3">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === activeIndex ? 'bg-[#333]' : 'bg-[#ccc]'}`}
          />
        ))}
      </div>
    </div>
  );
}
