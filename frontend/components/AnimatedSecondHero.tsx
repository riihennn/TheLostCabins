"use client";
import { useState, useEffect, useRef } from "react";

export default function AnimatedSecondHero() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Calculate how far we've scrolled into this section
      const scrolledIntoView = window.innerHeight - rect.top;

      if (scrolledIntoView > 0) {
        // Starts higher up (-60px) and moves down to (+60px)
        const startOffset = -60;
        const maxOffset = 60; 
        const speed = 0.15;   // Adjusted speed to cover the larger distance smoothly
        const calculatedOffset = Math.min(startOffset + (scrolledIntoView * speed), maxOffset);
        setOffset(calculatedOffset);
      } else {
        setOffset(-60); // Set to startOffset when not in view
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 md:px-12 bg-[#fdfa99] text-[#34673f] overflow-hidden">
      <div
        className="flex flex-col items-center w-full"
        style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}
      >
        <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase mb-6 font-semibold opacity-70">
          Lost Cabins
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.15] tracking-tight max-w-4xl mx-auto">
          A Forest Escape Wrapped in Nature&apos;s Embrace
        </h2>
      </div>

      <div className="h-16 md:h-24 w-full" />

      <p className="font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto opacity-90 relative z-10">
        Nestled deep within the misty landscapes of Thusharagiri, Kerala, Lost Cabins offers a peaceful retreat surrounded by untouched forests, mountain breeze, and the soothing sounds of nature. Hidden away from the rush of city life, the resort is a perfectly positioned haven for travelers seeking serenity, adventure, and an authentic connection with the wild beauty of the Western Ghats.
      </p>
    </section>
  );
}
