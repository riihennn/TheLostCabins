"use client";
import React, { useState, useRef, useEffect } from "react";

interface ImageItem {
  src: string;
  section: string;
}

interface Props {
  roomName: string;
  carouselImages: ImageItem[];
}

export default function HorizontalGallery({ roomName, carouselImages }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [showSectionTitle, setShowSectionTitle] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState("");
  const activeSectionRef = useRef("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current || !containerRef.current || !stripRef.current) return;
      const rect = stickyRef.current.getBoundingClientRect();
      const sectionHeight = stickyRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const totalScrollable = sectionHeight - viewportHeight;
      if (scrolled >= 0 && scrolled <= totalScrollable) {
        const progress = scrolled / totalScrollable;
        const containerWidth = containerRef.current.offsetWidth;
        const stripWidth = stripRef.current.scrollWidth;
        const maxSlide = Math.max(0, stripWidth - containerWidth);
        
        setTranslateX(-progress * maxSlide);
        // Calculate active index by finding which image center is closest to container center
        const currentPos = progress * maxSlide;
        const stripChildren = stripRef.current.children;
        let newIndex = 0;
        let closestDistance = Infinity;
        
        for (let i = 0; i < stripChildren.length; i++) {
          const child = stripChildren[i] as HTMLElement;
          const childCenter = child.offsetLeft + child.offsetWidth / 2;
          const containerCenter = currentPos + containerWidth / 2;
          const distance = Math.abs(childCenter - containerCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            newIndex = i;
          }
        }
        
        setCurrentIndex(newIndex);
        
        // Trigger section transition when scrolling into a new section
        const newSection = carouselImages[newIndex]?.section;
        if (newSection && newSection !== activeSectionRef.current) {
          activeSectionRef.current = newSection;
          setActiveSection(newSection);
          setShowSectionTitle(true);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setShowSectionTitle(false), 3000);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [carouselImages]);

  return (
    <div
      ref={stickyRef}
      className="relative w-full"
      style={{ height: `${carouselImages.length * 100}vh` }}
    >
      {/* Sticky panel - vertically centered */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        {/* Viewport window */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden bg-[#f4f1ea] rounded-sm"
          style={{ height: '520px' }}
        >
          {/* Horizontal sliding strip */}
          <div
            ref={stripRef}
            className="flex h-full gap-4"
            style={{
              width: 'max-content',
              transform: `translateX(${translateX}px)`,
              willChange: 'transform'
            }}
          >
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`${roomName} ${image.section} view ${index + 1}`}
                className="shrink-0 h-full w-auto object-cover"
              />
            ))}
          </div>

          {/* Active Section Center Overlay (Drop-down & Fade) */}
          <div 
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ease-out ${
              showSectionTitle 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-4 scale-95'
            }`}
          >
            <span className="font-sans font-thin text-5xl md:text-7xl tracking-[0.2em] text-white uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
              {activeSection || "Gallery"}
            </span>
          </div>
        </div>

        {/* Dot indicators below the frame */}
        <div className="flex justify-center gap-3 mt-6">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-full h-[3px] ${
                index === currentIndex
                  ? 'bg-[#2a2a2a] w-8'
                  : 'bg-[#2a2a2a]/20 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
