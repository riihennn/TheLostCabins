import Image from "next/image";
import Carousel from "../components/Carousel";
import HeroCarousel from "../components/HeroCarousel";
import AnimatedSecondHero from "../components/AnimatedSecondHero";

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
      <section className="px-6 md:px-16 lg:px-32 py-24 flex flex-col md:flex-row gap-12 lg:gap-24 items-center bg-[#fdfdfc]">
        <div className="w-full md:w-[55%] relative aspect-square">
          <Image
            src="/images/luxury_pool_villa_1779391481860.png"
            alt="Luxury Pool Villa"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col max-w-lg">
          <span className="font-serif text-[#d0a782] text-3xl mb-2">Rooms</span>
          <h2 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] mb-8 text-[#2a2a2a]">
            Catchup<br />with yourself
          </h2>
          <p className="text-[1.1rem] mb-10 text-[#4a4a4a] font-sans font-light">
            A view to suit every mood, every company<br />(Click to view)
          </p>
          
          <div className="flex flex-col mb-12">
            <div className="border-b border-[#2a2a2a]/40 pb-4 pt-2 flex justify-between items-center cursor-pointer transition-colors group">
              <span className="font-serif text-2xl md:text-[2rem] text-[#2a2a2a] group-hover:text-[#d0a782]">Luxury Pool Villa</span>
            </div>
            <div className="border-b border-[#2a2a2a]/40 pb-4 pt-4 flex justify-between items-center cursor-pointer transition-colors group">
              <span className="font-serif text-2xl md:text-[2rem] text-[#2a2a2a] group-hover:text-[#d0a782]">Forest View Room</span>
            </div>
            <div className="border-b border-[#2a2a2a]/40 pb-4 pt-4 flex justify-between items-center cursor-pointer transition-colors group">
              <span className="font-serif text-2xl md:text-[2rem] text-[#2a2a2a] group-hover:text-[#d0a782]">Mountain View Room</span>
            </div>
          </div>
          
          <button className="self-start border border-[#2a2a2a]/30 text-[#2a2a2a] px-8 py-3 text-sm hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans rounded-[2px]">
            View All Rooms
          </button>
        </div>
      </section>

      {/* Ayurveda Section */}
      <section className="px-6 md:px-16 lg:px-32 py-24 flex flex-col-reverse md:flex-row gap-12 lg:gap-24 items-center bg-background">
        <div className="w-full md:w-[45%] flex flex-col max-w-lg">
          <span className="font-serif text-[#d0a782] text-3xl mb-2">Ayurveda</span>
          <h2 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] mb-8 text-[#2a2a2a]">
            Reclaim your mind,<br />body & soul
          </h2>
          <p className="text-[#4a4a4a] font-sans font-light text-[1.1rem] leading-relaxed mb-6">
            It is the mind that dreams; it is the body that builds; it is the soul that chooses to persevere. Every modern advance has been a product of these, yet we have forgotten to rest, and rejuvenate. 
          </p>
          <p className="text-[#4a4a4a] font-sans font-light text-[1.1rem] leading-relaxed mb-8">
            Inside the contemporary setting of the Silent Creek, you can experience Ayurveda, a 3000-year-old holistic science that places health & wellness as a balance of mind, body & soul.
          </p>
          <p className="font-serif text-2xl md:text-3xl text-[#2a2a2a]">
            Rest, rejuvenate & reclaim yourself.
          </p>
        </div>
        <div className="w-full md:w-[55%] relative aspect-square">
          <Image
            src="/images/ayurveda_spa.png"
            alt="Ayurveda Spa"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Activities Section */}
      <section className="px-6 md:px-16 lg:px-32 py-24 flex flex-col md:flex-row gap-12 lg:gap-24 items-center bg-[#fdfdfc]">
        <div className="w-full md:w-[55%] relative aspect-square">
          <Image
            src="/images/waterfall_trek_1779391496756.png"
            alt="Activities"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col max-w-lg">
          <span className="font-serif text-[#d0a782] text-3xl mb-2">Activities</span>
          <h2 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] mb-8 text-[#2a2a2a]">
            Get Along.<br />Or Get Lost
          </h2>
          <p className="text-[1.1rem] mb-10 text-[#4a4a4a] font-sans font-light">
            Warm up to activities that suit your pace
          </p>
          
          <div className="flex flex-col mb-12">
            <div className="border-b border-[#2a2a2a]/40 pb-4 pt-2 flex justify-between items-center cursor-pointer transition-colors group">
              <span className="font-serif text-2xl md:text-[2rem] text-[#2a2a2a] group-hover:text-[#d0a782]">Trekking</span>
            </div>
            <div className="border-b border-[#2a2a2a]/40 pb-4 pt-4 flex justify-between items-center cursor-pointer transition-colors group">
              <span className="font-serif text-2xl md:text-[2rem] text-[#2a2a2a] group-hover:text-[#d0a782]">Plantation Tour</span>
            </div>
            <div className="border-b border-[#2a2a2a]/40 pb-4 pt-4 flex justify-between items-center cursor-pointer transition-colors group">
              <span className="font-serif text-2xl md:text-[2rem] text-[#2a2a2a] group-hover:text-[#d0a782]">Outdoor Games</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-24 overflow-hidden bg-background px-6 md:px-16 lg:px-32">
        <Carousel images={carouselImages} />
      </section>

      {/* Follow Our Flow / Instagram Section */}
      <section className="px-6 md:px-16 lg:px-32 py-16 text-center bg-[#fdfdfc]">
        <h2 className="font-serif text-5xl md:text-6xl mb-6 text-[#222]">Follow Our Flow</h2>
        <div className="flex items-center justify-center gap-3 mb-12 text-lg text-[#555]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          <a href="#" className="hover:text-accent transition-colors font-sans font-light">Follow Us On Instagram</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
