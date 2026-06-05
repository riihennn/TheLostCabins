"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll past the hero section (100vh), switch to black text
      if (window.scrollY > window.innerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMenuOpen]);

  const isHomePage = pathname === '/';
  const isDark = !isHomePage || isScrolled;

  return (
    <>
      <nav className={`absolute md:fixed top-0 left-0 w-full px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center z-[40] transition-all duration-300 bg-transparent ${isDark && !isMenuOpen ? 'text-black' : 'text-white'}`}>
        <div className="flex items-center gap-3">
          <Link href="/" className="relative w-20 h-10 block cursor-pointer">
            <Image
              src={isDark ? "/images/LostCabins-Logo-Black.png" : "/images/LostCabins-Logo-White.png"}
              alt="Lost Cabins Logo"
              fill
              className={`object-contain object-left scale-[1.75] origin-left transition-all duration-300 ${isDark ? 'mix-blend-multiply' : 'mix-blend-screen'} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              priority
            />
          </Link>
        </div>
        <div className={`flex items-center gap-4 md:gap-8 text-sm font-sans tracking-wide transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Link href="/booking" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">

            <span className="hidden md:block">Book Online</span>
          </Link>
          <a href="tel:8891863034" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5 md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span className="hidden md:block">8891 863034</span>
          </a>
          <div className="p-2 md:p-3 -m-2 md:-m-3 cursor-pointer ml-1 md:ml-2 hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(true)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </div>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#fdfa99] z-[50] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-y-auto ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="min-h-[100dvh] flex flex-col px-4 sm:px-6 md:px-12 pt-10 pb-12">
          {/* Top Header of Overlay */}
          <div className="w-full flex justify-center items-center relative flex-shrink-0">
            {/* Centered Logo */}
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="relative w-32 h-16 block cursor-pointer">
              <Image
                src="/images/LostCabins-Logo-Green.png"
                alt="Lost Cabins Logo"
                fill
                className="object-contain object-center mix-blend-multiply scale-[1.5]"
              />
            </Link>
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-2 md:right-0 top-0 p-3 -m-3 text-[#2a2a2a] hover:opacity-60 transition-opacity"
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Links Center */}
          <div className="my-auto flex flex-col items-center gap-6 md:gap-8 py-12 flex-shrink-0">
            {['Home', 'About Us', 'Rooms', 'Experiences', 'Contact Us'].map((item, i) => {
              const linkPath = item === 'About Us' ? '/about' : item === 'Home' ? '/' : item === 'Rooms' ? '/rooms' : item === 'Experiences' ? '/experiences' : item === 'Contact Us' ? '/contact' : '#';
              return (
                <div
                  key={item}
                  className={`overflow-hidden transition-all duration-700 delay-[${100 + i * 100}ms] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <a
                    href={linkPath}
                    onClick={(e) => {
                      if (linkPath === '#') e.preventDefault();
                      setIsMenuOpen(false);
                    }}
                    className="font-serif text-3xl sm:text-4xl md:text-[3.5rem] text-[#2a2a2a] hover:text-[#34673f] transition-colors leading-tight"
                  >
                    {item}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Social Icons Bottom */}
          <div className={`flex justify-center gap-8 transition-all duration-700 delay-500 flex-shrink-0 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="https://www.instagram.com/the_lostcabins" className="text-[#2a2a2a] hover:text-[#34673f] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-[#2a2a2a] hover:text-[#34673f] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-[#2a2a2a] hover:text-[#34673f] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
