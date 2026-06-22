"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const TRANSITION_MS = 750;
const AUTO_PLAY_MS = 3500;

interface Item {
  src: string;
  href: string;
  alt: string;
}

// ─────────────────────────────────────────────
// Infinite sliding carousel (triple-clone trick)
// Responsive: 1 image on mobile, 2 on tablet, 4 on desktop
// ─────────────────────────────────────────────
function InfiniteCarousel({ items, username }: { items: Item[]; username: string }) {
  const total = items.length;
  const tripled = [...items, ...items, ...items];

  const [index, setIndex] = useState(total);
  const [animated, setAnimated] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const jumping = useRef(false);

  // Update visibleCount on resize
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimated(true);
      setIndex((prev) => prev + 1);
    }, AUTO_PLAY_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  // After transition, silently jump back to middle copy to keep infinite illusion
  const handleTransitionEnd = useCallback(() => {
    if (jumping.current) return;
    let next = index;
    if (index >= total * 2) next = index - total;
    else if (index < total) next = index + total;
    if (next !== index) {
      jumping.current = true;
      setAnimated(false);
      setIndex(next);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          jumping.current = false;
          setAnimated(true);
        })
      );
    }
  }, [index, total]);

  const goNext = () => { setAnimated(true); setIndex((p) => p + 1); resetTimer(); };
  const goPrev = () => { setAnimated(true); setIndex((p) => p - 1); resetTimer(); };

  const activeDot = ((index % total) + total) % total;

  // Each slide is (1/visibleCount) of the container width.
  // Track width = tripled.length slides, each 1/visibleCount of container.
  // So track width = (tripled.length / visibleCount) * 100% of container.
  // translateX moves in units of (1 slide = 100/visibleCount % of container),
  // but as % of the TRACK we need: (index / tripled.length) * 100%.
  const trackWidthPct = (tripled.length / visibleCount) * 100; // % relative to container
  const translatePct = (index / tripled.length) * 100; // % relative to track

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchEndEvent = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) goNext();
    else if (distance < -minSwipeDistance) goPrev();
  };

  return (
    <div 
      className="relative w-full overflow-hidden group/carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndEvent}
    >
      {/* Left Arrow */}
      <button
        onClick={goPrev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/90 hover:bg-white
                   text-black rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100
                   transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 hidden sm:flex"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/90 hover:bg-white
                   text-black rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100
                   transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 hidden sm:flex"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Sliding track */}
      <div
        className="flex"
        style={{
          width: `${trackWidthPct}%`,
          transform: `translateX(-${translatePct}%)`,
          transition: animated
            ? `transform ${TRANSITION_MS}ms cubic-bezier(0.77, 0, 0.18, 1)`
            : "none",
          willChange: "transform",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {tripled.map((item, i) => (
          <div
            key={i}
            style={{ width: `${100 / tripled.length}%`, flexShrink: 0 }}
            className="relative aspect-square overflow-hidden group cursor-grab active:cursor-grabbing"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              draggable={false}
            />
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (isDragging) e.preventDefault();
              }}
              className="absolute inset-0 bg-black/0 flex flex-col items-center justify-center gap-2 text-white
                         opacity-0 group-hover:opacity-100 group-hover:bg-black/60 
                         active:opacity-100 active:bg-black/60 sm:active:opacity-0
                         transition-all duration-300"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id={`ig-g-${i}`} x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke={`url(#ig-g-${i})`} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke={`url(#ig-g-${i})`} />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke={`url(#ig-g-${i})`} />
              </svg>
              <span className="font-sans text-sm font-light tracking-wide">View on Instagram</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────
export default function InstagramFeed({
  fallbackImages,
  username = "your_instagram_handle",
}: {
  fallbackImages: string[];
  username?: string;
}) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/instagram");
        if (!res.ok) { setError(true); setLoading(false); return; }
        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) { setError(true); setLoading(false); return; }
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

  if (loading) {
    return (
      <div className="flex w-full overflow-hidden">
        {/* Responsive skeleton placeholders */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="relative aspect-square flex-shrink-0 bg-gray-200/50 animate-pulse
                       w-full sm:w-1/2 lg:w-1/4"
          />
        ))}
      </div>
    );
  }

  const rawItems = error || posts.length === 0
    ? fallbackImages.map((src, idx) => ({
        src,
        href: `https://www.instagram.com/${username.replace("@", "")}`,
        alt: `Instagram post ${idx + 1}`,
      }))
    : posts.map((post) => ({
        src: post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url,
        href: post.permalink,
        alt: post.caption || "Instagram post",
      }));

  return <InfiniteCarousel items={rawItems} username={username} />;
}
