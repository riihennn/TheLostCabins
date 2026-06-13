import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Tariffs | The Lost Cabins | Thusharagiri, Kerala",
  description: "Discover our A-Frame Cabin, Hexa Cabin, and Twin Pines Cabins at The Lost Cabins. Premium forest stay with pool views, forest views, and mountain views in Thusharagiri, Kerala.",
};

export default function Rooms() {
  return (
    <main className="min-h-screen bg-[#fcf9f2] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-20">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <div className="relative w-[70px] h-[70px] md:w-20 md:h-20 mb-4 md:mb-6">
          <Image
            src="/images/LostCabin-icon-green.png"
            alt="Lost Cabins Leaf Logo"
            fill
            className="object-contain mix-blend-multiply opacity-90"
          />
        </div>
        <span className="font-sans text-[#34673f] text-[22px] md:text-3xl mb-3 tracking-wide">
          Rooms
        </span>
        <h1 className="font-sans font-light text-[42px] sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.15] text-[#2a2a2a] mb-5 max-w-4xl tracking-tight">
          Catchup with yourself
        </h1>
        <p className="font-sans font-medium text-[15px] md:text-lg text-[#333333]">
          A place to slow down, to give yourself time.
        </p>
      </section>

      {/* Room 1 */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-16 md:mb-24">
        <div className="bg-white flex flex-col lg:flex-row w-full lg:min-h-[550px]">
          {/* Text Left */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16 lg:px-20 xl:px-24 order-2 lg:order-1">
            <span className="font-serif text-[#34673f] text-lg sm:text-xl md:text-2xl mb-2 tracking-wide">
              Forest View Room
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-[#2a2a2a] mb-6 sm:mb-8">
              A-Frame Cabin
            </h2>
            <p className="font-sans font-light text-base sm:text-lg md:text-xl text-[#565656] leading-relaxed mb-8 sm:mb-10">
              Overlooking a lush forest, these guestrooms offer an unparalleled view of the tropical greenery.
            </p>
            <Link href="/rooms/a-frame-cabin" className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-6 sm:px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans inline-block text-center">
              View More
            </Link>
          </div>
          {/* Image Right */}
          <div className="w-full lg:w-1/2 relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-0 order-1 lg:order-2">
            <Image
              src="/images/Aframe1.jpg"
              alt="A-frame cabin"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Room 2 */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-16 md:mb-24">
        <div className="bg-white flex flex-col lg:flex-row w-full lg:min-h-[550px]">
          {/* Text Right */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16 lg:px-20 xl:px-24 order-2 lg:order-2">
            <span className="font-serif text-[#34673f] text-lg sm:text-xl md:text-2xl mb-2 tracking-wide">
              Pool view
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-[#2a2a2a] mb-6 sm:mb-8">
              Hexa Cabin
            </h2>
            <p className="font-sans font-light text-base sm:text-lg md:text-xl text-[#565656] leading-relaxed mb-8 sm:mb-10">
              The ultimate premium escape, a room that extends to a pool, which blends into nature.
            </p>
            <Link href="/rooms/hexa-cabin" className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-6 sm:px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans inline-block text-center">
              View More
            </Link>
          </div>
          {/* Image Left */}
          <div className="w-full lg:w-1/2 relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-0 order-1 lg:order-1">
            <Image
              src="/images/Hexa_image/IMG_7816.jpg"
              alt="Hexa cabin"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Room 3 */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-16 md:mb-24 lg:mb-32">
        <div className="bg-white flex flex-col lg:flex-row w-full lg:min-h-[550px]">
          {/* Text Left */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16 lg:px-20 xl:px-24 order-2 lg:order-1">
            <span className="font-serif text-[#34673f] text-lg sm:text-xl md:text-2xl mb-2 tracking-wide">
              Mountain View
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-[#2a2a2a] mb-6 sm:mb-8">
              Twin Pines Cabin 1
            </h2>
            <p className="font-sans font-light text-base sm:text-lg md:text-xl text-[#565656] leading-relaxed mb-8 sm:mb-10">
              It is not every day that you wake up to a view of the mist-covered mountain from your bed.
            </p>
            <Link href="/rooms/twin-pines-cabin-1" className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-6 sm:px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans inline-block text-center">
              View More
            </Link>
          </div>
          {/* Image Right */}
          <div className="w-full lg:w-1/2 relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-0 order-1 lg:order-2">
            <Image
              src="/images/Twinpines_image/IMG_7813.jpg"
              alt="Mt. Forever Room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Room 4 */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-16 md:mb-24">
        <div className="bg-white flex flex-col lg:flex-row w-full lg:min-h-[550px]">
          {/* Text Right */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16 lg:px-20 xl:px-24 order-2 lg:order-2">
            <span className="font-serif text-[#34673f] text-lg sm:text-xl md:text-2xl mb-2 tracking-wide">
              Pool view
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-[#2a2a2a] mb-6 sm:mb-8">
              Twin Pines Cabin 2
            </h2>
            <p className="font-sans font-light text-base sm:text-lg md:text-xl text-[#565656] leading-relaxed mb-8 sm:mb-10">
              The ultimate premium escape, a room that extends to a pool, which blends into nature.
            </p>
            <Link href="/rooms/twin-pines-cabin-2" className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-6 sm:px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans inline-block text-center">
              View More
            </Link>
          </div>
          {/* Image Left */}
          <div className="w-full lg:w-1/2 relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-0 order-1 lg:order-1">
            <Image
              src="/images/Twinpines_image/IMG_7835.jpg"
              alt="Twin Pines Cabin 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="flex justify-center items-center pb-10">
        <Link href="/" className="flex items-center gap-3 font-sans text-[#2a2a2a] hover:text-[#34673f] transition-colors group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-2 transition-transform"><polyline points="15 18 9 12 15 6"></polyline></svg>
          <span className="text-lg">Back To Home</span>
        </Link>
      </section>
    </main>
  );
}
