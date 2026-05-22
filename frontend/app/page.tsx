import Image from "next/image";
import Carousel from "../components/Carousel";
import HeroCarousel from "../components/HeroCarousel";
import AnimatedSecondHero from "../components/AnimatedSecondHero";
import SimpleCarousel from "../components/SimpleCarousel";

export default function Home() {
  const carouselImages = [
    "/images/cozy_cabin_1779391511830.png",
    "/images/forest_stream_1779391528482.png",
    "/images/waterfall_trek_1779391496756.png",
    "/images/luxury_pool_villa_1779391481860.png",
    "/images/media__1779391175363.png" // from screenshot
  ];

  return (
    <main className="w-full overflow-x-hidden relative text-foreground">

      {/* Top Hero Section */}
      <HeroCarousel />

      {/* Second Hero Section */}
      <AnimatedSecondHero />

      {/* Rooms Section */}
      <section className="px-6 md:px-16 lg:px-32 min-h-screen py-12 bg-[#fcf9f2] flex items-center justify-center w-full">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-10 lg:gap-16 items-center justify-center">
          {/* Text Left */}
          <div className="w-full md:w-[45%] flex flex-col max-w-[420px] md:pr-4 mb-8 md:mb-0">
            <span className="font-serif text-[#cca885] text-[1.75rem] mb-2 tracking-wide">Rooms</span>
            <h2 className="font-serif  text-5xl md:text-6xl leading-[1.1] mb-8 text-[#2a2a2a]">
              Catchup<br />with yourself
            </h2>
            <p className="text-[1.1rem] mb-10 text-[#2a2a2a] font-sans font-normal">
              A view to suit every mood, every company<br />(Click to view)
            </p>

            <div className="flex flex-col mb-12 w-full max-w-[420px]">
              <div className="border-b-[1.5px] border-gray-400 pb-3 pt-2 flex justify-between items-center cursor-pointer transition-colors group">
                <span className="font-serif text-[1.6rem] text-[#2a2a2a] group-hover:text-[#cca885]">Nature-Embraced Pool</span>
              </div>
              <div className="border-b-[1.5px] border-gray-400 pb-3 pt-5 flex justify-between items-center cursor-pointer transition-colors group">
                <span className="font-serif text-[1.6rem] text-[#2a2a2a] group-hover:text-[#cca885]">Forest View Room</span>
              </div>
              <div className="border-b-[1.5px] border-gray-400 pb-3 pt-5 flex justify-between items-center cursor-pointer transition-colors group">
                <span className="font-serif text-[1.6rem] text-[#2a2a2a] group-hover:text-[#cca885]">Mountain View Room</span>
              </div>
            </div>

            <button className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-6 py-2.5 text-[15px] hover:bg-[#2a2a2a] hover:text-[#fcf9f2] transition-colors font-sans rounded-[4px]">
              View All Rooms
            </button>
          </div>

          {/* Carousel Right */}
          <div className="w-full md:w-[45%] relative aspect-[5.2/6] max-w-[500px]">
            <SimpleCarousel images={[
              "/images/IMG_7814.jpg",
              "/images/IMG_7816 (2).jpg",
              "/images/IMG_7821 3.jpg",
            ]} />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="px-6 md:px-16 lg:px-32 min-h-screen py-12 flex items-center justify-center w-full bg-[#565656]">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-10 lg:gap-16 items-center justify-center">
          {/* Carousel Left */}
          <div className="w-full md:w-[45%] relative aspect-[5.2/6] max-w-[500px] mb-8 md:mb-0">
            <SimpleCarousel images={[
              "/images/IMG-7822.jpg",
              "/images/forest_stream_1779391528482.png",
              "/images/media__1779391175363.png",
            ]} />
          </div>

          {/* Text Right */}
          <div className="w-full md:w-[45%] flex flex-col max-w-[420px] md:pl-4">
            <span className="font-serif text-[#d0a782] text-[1.75rem] mb-2 tracking-wide">Activities</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] mb-8 text-[#fcf9f2]">
              Get Along.<br />Or Get Lost
            </h2>
            <p className="text-[1.1rem] mb-10 text-[#fcf9f2] font-sans font-normal">
              Warm up to activities that suit your pace
            </p>

            <div className="flex flex-col mb-12 w-full max-w-[420px]">
              <div className="border-b-[1.5px] border-gray-400 pb-3 pt-2 flex justify-between items-center cursor-pointer transition-colors group">
                <span className="font-serif text-[1.6rem] text-[#fcf9f2] group-hover:text-[#d0a782]">Forest Trekking</span>
              </div>
              <div className="border-b-[1.5px] border-gray-400 pb-3 pt-5 flex justify-between items-center cursor-pointer transition-colors group">
                <span className="font-serif text-[1.6rem] text-[#fcf9f2] group-hover:text-[#d0a782]">Thusharagiri Waterfall Trails</span>
              </div>
              <div className="border-b-[1.5px] border-gray-400 pb-3 pt-5 flex justify-between items-center cursor-pointer transition-colors group">
                <span className="font-serif text-[1.6rem] text-[#fcf9f2] group-hover:text-[#d0a782]">Hidden Waterfall Exploration</span>
              </div>
            </div>

            <button className="self-start border border-[#fcf9f2] text-[#fcf9f2] px-6 py-2.5 text-[15px] hover:bg-[#fcf9f2] hover:text-[#565656] transition-colors font-sans rounded-[4px]">
              View All Activities
            </button>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="min-h-screen py-12 flex flex-col items-center justify-center overflow-hidden bg-[#fcf9f2] px-6 md:px-16 lg:px-32">
        <div className="mt-24 w-full">
          <Carousel images={carouselImages} />
        </div>
      </section>

      {/* Follow Our Flow / Instagram Section */}
      <section className="px-6 md:px-16 lg:px-32 min-h-screen py-12 flex flex-col justify-center text-center bg-[#fcf9f2]">
        <h2 className="font-serif text-5xl md:text-6xl mb-6 text-[#222]">Follow Our Flow</h2>
        <div className="flex items-center justify-center gap-3 mb-12 text-lg text-[#555]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          <a href="#" className="hover:text-accent transition-colors font-sans font-light">Follow Us On Instagram</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full max-w-[1200px] mx-auto">
          <div className="relative aspect-square">
            <Image src="/images/cozy_cabin_1779391511830.png" alt="Instagram 1" fill className="object-cover" />
          </div>
          <div className="relative aspect-square">
            <Image src="/images/forest_stream_1779391528482.png" alt="Instagram 2" fill className="object-cover" />
          </div>
          <div className="relative aspect-square">
            <Image src="/images/media__1779391175363.png" alt="Instagram 3" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
