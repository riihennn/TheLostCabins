"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Types for the Instagram API response
interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
}

export default function InstagramFeed({
  fallbackImages,
  username = "your_instagram_handle"
}: {
  fallbackImages: string[],
  username?: string
}) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      const container = scrollContainerRef.current;
      const itemWidth = (container.children[0] as HTMLElement).clientWidth;
      
      const startPosition = container.scrollLeft;
      let distance = direction === "left" ? -itemWidth : itemWidth;
      
      // If we reached the end, reset to start smoothly
      if (direction === "right" && startPosition + container.clientWidth >= container.scrollWidth) {
        distance = -startPosition; // scroll all the way back to 0
      }

      const duration = 800; // Smooth 800ms glide duration
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Smooth ease-in-out curve
        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
        
        container.scrollLeft = startPosition + distance * ease;

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  // Automated sliding every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/instagram");
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const data = await res.json();

        // If the API returns an empty array or an error object
        if (!Array.isArray(data) || data.length === 0) {
          setError(true);
          setLoading(false);
          return;
        }

        setPosts(data);
      } catch (err) {
        console.error("Instagram Feed Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };



  // Skeletons
  if (loading) {
    return (
      <div className="flex gap-0 w-full overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative aspect-square w-[85%] sm:w-[50%] md:w-[33.333%] lg:w-[25%] flex-shrink-0 snap-start bg-gray-200/50 animate-pulse overflow-hidden" />
        ))}
      </div>
    );
  }

  // Fallback if API fails or no token is provided
  if (error || posts.length === 0) {
    return (
      <div className="flex gap-0 w-full overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {fallbackImages.map((src, idx) => (
          <div key={idx} className="relative aspect-square w-[85%] sm:w-[50%] md:w-[33.333%] lg:w-[25%] flex-shrink-0 snap-start overflow-hidden group cursor-pointer">
            <Image
              src={src}
              alt={`Instagram fallback ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* View on Instagram overlay */}
            <a
              href={`https://www.instagram.com/${username.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/0 flex flex-row items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 group-hover:bg-black/60 transition-all duration-300"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="ig-grad-fallback" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad-fallback)"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#ig-grad-fallback)"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#ig-grad-fallback)"></line>
              </svg>
              <span className="font-sans text-[1.3rem] font-light tracking-wide">View on Instagram</span>
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full group/carousel">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white text-black rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hidden md:block hover:scale-105 active:scale-95"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white text-black rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hidden md:block hover:scale-105 active:scale-95"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <div ref={scrollContainerRef} className="flex gap-0 w-full overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {posts.map((post) => {
          const imgUrl = post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url;

          return (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square w-[85%] sm:w-[50%] md:w-[33.333%] lg:w-[25%] flex-shrink-0 snap-start overflow-hidden group cursor-pointer block"
            >
              <Image
                src={imgUrl}
                alt={post.caption || "Instagram post"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* View on Instagram overlay */}
              <div className="absolute inset-0 bg-black/0 flex flex-row items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 group-hover:bg-black/60 transition-all duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#ig-grad)"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#ig-grad)"></line>
                </svg>
                <span className="font-sans text-[1.3rem] font-light tracking-wide">View on Instagram</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
