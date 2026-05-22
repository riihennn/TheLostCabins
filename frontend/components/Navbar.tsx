"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll past the hero section (100vh), switch to black text
      if (window.scrollY > window.innerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full px-6 md:px-12 py-4 flex justify-between items-center z-50 transition-all duration-300 bg-transparent ${isScrolled ? 'text-black' : 'text-white'}`}>
      <div className="flex items-center gap-3">
        <div className="relative w-20 h-10">
          <Image
            src={isScrolled ? "/images/LostCabins-Logo-Black.png" : "/images/LostCabins-Logo-White.png"}
            alt="Lost Cabins Logo"
            fill
            className={`object-contain object-left scale-[1.75] origin-left ${isScrolled ? 'mix-blend-multiply' : 'mix-blend-screen'}`}
            priority
          />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-sans tracking-wide">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <span>Book Online</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>9562 990099</span>
        </div>
        <div className="cursor-pointer ml-4 hover:opacity-80 transition-opacity">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
      </div>
    </nav>
  );
}
