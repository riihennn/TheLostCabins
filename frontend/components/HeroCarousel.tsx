"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  text: string;
}

const slides: Slide[] = [
  { src: "/images/IMG_7812.jpg", text: "Escape to Nature's embrace in Thusharagiri" },
  { src: "/images/Aframe1.jpg", text: "In the heart of jungle" },
  { src: "/images/RawNature.jpg", text: "Experience raw nature" },
  { src: "/images/Twinpines_image/IMG_7813.jpg", text: "Discover tranquility" },
  { src: "/images/Aframe1.jpg", text: "The unforgettable place" }
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`fixed inset-0 -z-10 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          style={{
            transform: `scale(${1 + scrollY * 0.0001})`,
            willChange: 'transform',
            // Hide the fixed image entirely after scrolling past the second hero section
            display: typeof window !== 'undefined' && scrollY > window.innerHeight * 1.5 ? 'none' : 'block'
          }}
        >
          <Image
            src={slide.src}
            alt={slide.text}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center mt-14 sm:mt-16 px-4 sm:px-6">
        <div className="relative w-full max-w-6xl flex items-center justify-center" style={{ minHeight: 'clamp(260px, 40vh, 400px)' }}>
          {slides.map((slide, index) => (
            <div
              key={`text-${index}`}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-in-out ${index === activeIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
                }`}
            >
              <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.4em] uppercase mb-4 sm:mb-6 md:mb-8 text-white/90">
                Lost Cabins
              </p>
              <h2 className="font-sans font-normal text-[2rem] sm:text-5xl md:text-6xl lg:text-[6rem] leading-[1.1] sm:leading-[1.05] tracking-tight mb-4 sm:mb-6 md:mb-10 text-white drop-shadow-2xl max-w-5xl mx-auto">
                {slide.text}
              </h2>
              <p className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/80">
                Discover Lost Cabins
              </p>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
