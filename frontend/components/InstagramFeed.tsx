"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

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

  // Close modal with escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPost(null);
    };
    if (selectedPost) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedPost]);

  // Skeletons
  if (loading) {
    return (
      <div className="flex gap-3 w-full max-w-[1200px] mx-auto overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative aspect-square w-[85vw] sm:w-[calc(50%-6px)] md:w-[calc(33.333%-8px)] flex-shrink-0 snap-center bg-gray-200/50 animate-pulse rounded-sm overflow-hidden" />
        ))}
      </div>
    );
  }

  // Fallback if API fails or no token is provided
  if (error || posts.length === 0) {
    return (
      <div className="flex gap-3 w-full max-w-[1200px] mx-auto overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {fallbackImages.map((src, idx) => (
          <div key={idx} className="relative aspect-square w-[85vw] sm:w-[calc(50%-6px)] md:w-[calc(33.333%-8px)] flex-shrink-0 snap-center overflow-hidden group cursor-pointer">
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
              className="absolute inset-0 bg-black/0 flex flex-col items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 group-hover:bg-black/40 transition-all duration-300"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span className="font-sans text-lg font-light tracking-wide">View on Instagram</span>
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-3 w-full max-w-[1200px] mx-auto overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {posts.map((post) => {
          const imgUrl = post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url;
          
          return (
            <div 
              key={post.id} 
              className="relative aspect-square w-[85vw] sm:w-[calc(50%-6px)] md:w-[calc(33.333%-8px)] flex-shrink-0 snap-center overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <Image 
                src={imgUrl} 
                alt={post.caption || "Instagram post"} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    {post.like_count !== undefined && (
                      <span className="flex items-center gap-1.5 font-sans text-sm font-medium">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        {post.like_count}
                      </span>
                    )}
                    {post.media_type === "VIDEO" && (
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    )}
                    {post.media_type === "CAROUSEL_ALBUM" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                    )}
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl relative max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - visible on mobile overlaying image */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="md:hidden absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors backdrop-blur-md"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              {/* Image side */}
              <div className="w-full md:w-[55%] bg-[#111] relative aspect-square md:aspect-auto md:min-h-[500px]">
                <Image 
                  src={selectedPost.media_type === "VIDEO" ? selectedPost.thumbnail_url || selectedPost.media_url : selectedPost.media_url} 
                  alt={selectedPost.caption || "Instagram post"} 
                  fill 
                  className="object-contain" 
                />
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-[45%] p-6 md:p-8 flex flex-col overflow-y-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-[#cca885] flex items-center justify-center text-white font-serif text-lg flex-shrink-0">
                    {username.charAt(username.startsWith('@') ? 1 : 0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[#222] tracking-wide">{username}</h3>
                    <p className="font-sans text-xs text-gray-500 mt-0.5">{formatDate(selectedPost.timestamp)}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="hidden md:flex ml-auto p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>

                {/* Caption */}
                <div className="flex-1 font-sans text-[0.9rem] text-[#444] leading-relaxed whitespace-pre-wrap mb-8">
                  {selectedPost.caption}
                </div>

                {/* Footer / CTA */}
                <div className="pt-5 border-t border-gray-100 mt-auto">
                  {selectedPost.like_count !== undefined && (
                    <div className="flex items-center gap-2 mb-5 font-sans font-medium text-[#222]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-red-500"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      {selectedPost.like_count} likes
                    </div>
                  )}
                  <a 
                    href={selectedPost.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#34673f] hover:bg-[#285031] text-[#fcf9f2] py-3.5 rounded-[4px] font-sans text-[0.95rem] font-medium transition-colors tracking-wide"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    View on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
