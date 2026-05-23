"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function SimpleCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Append first image to the end to create a seamless infinite loop
  const extendedImages = [...images, images[0]];

  const next = () => {
    if (currentIndex >= images.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (currentIndex <= 0) {
      // Instantly jump to the end clone, then animate to actual last item
      setIsTransitioning(false);
      setCurrentIndex(images.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(images.length - 1);
        });
      });
      return;
    }
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const handleTransitionEnd = () => {
    // If we've reached the clone at the end, silently jump back to the start
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Sliding Images Container with gap */}
      <div 
        className={`flex w-full h-full gap-8 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}rem))` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="w-full h-full shrink-0 relative overflow-hidden">
            <Image
              src={src}
              alt={`Room ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0 || index === images.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
