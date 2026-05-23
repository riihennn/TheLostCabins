import Image from "next/image";
import Link from "next/link";

export default function Rooms() {
  return (
    <main className="min-h-screen bg-[#fcf9f2] pt-40 pb-20">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 mb-24 md:mb-32">
        <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6">
          <Image
            src="/images/LostCabin-icon-green.png"
            alt="Lost Cabins Leaf Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="font-serif text-[#34673f] text-xl md:text-3xl mb-4 tracking-wide">
          Rooms
        </span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-[#2a2a2a] mb-6 max-w-4xl">
          Catchup with yourself
        </h1>
        <p className="font-sans text-lg md:text-xl text-[#565656]">
          A place to slow down, to give yourself time.
        </p>
      </section>

      {/* Room 1 */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="bg-white flex flex-col lg:flex-row w-full lg:min-h-[550px]">
          {/* Text Left */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 order-2 lg:order-1">
            <span className="font-serif text-[#34673f] text-xl md:text-2xl mb-2 tracking-wide">
              Forest View Room
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] text-[#2a2a2a] mb-8">
              A-Frame Cabin
            </h2>
            <p className="font-sans font-light text-lg md:text-xl text-[#565656] leading-relaxed mb-10">
              Overlooking a lush forest, these guestrooms offer an unparalleled view of the tropical greenery.
            </p>
            <Link href="/rooms/a-frame-cabin" className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans inline-block text-center">
              View More
            </Link>
          </div>
          {/* Image Right */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0 order-1 lg:order-2">
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
      <section className="max-w-[1300px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="bg-white flex flex-col lg:flex-row w-full lg:min-h-[550px]">
          {/* Text Right */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 order-2 lg:order-2">
            <span className="font-serif text-[#34673f] text-xl md:text-2xl mb-2 tracking-wide">
              Pool view
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] text-[#2a2a2a] mb-8">
              Hexa Cabin
            </h2>
            <p className="font-sans font-light text-lg md:text-xl text-[#565656] leading-relaxed mb-10">
              The ultimate luxury, a room that extends to a pool, which blends into nature.
            </p>
            <Link href="/rooms/hexa-cabin" className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans inline-block text-center">
              View More
            </Link>
          </div>
          {/* Image Left */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0 order-1 lg:order-1">
            <Image
              src="/images/Hexa_image/IMG_7816.jpg"
              alt="A-frame cabin"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Room 3 */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="bg-white flex flex-col lg:flex-row w-full lg:min-h-[550px]">
          {/* Text Left */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 order-2 lg:order-1">
            <span className="font-serif text-[#34673f] text-xl md:text-2xl mb-2 tracking-wide">
              Mountain View
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] text-[#2a2a2a] mb-8">
              Twin Pines Cabin 1
            </h2>
            <p className="font-sans font-light text-lg md:text-xl text-[#565656] leading-relaxed mb-10">
              It is not every day that you wake up to a view of the mist-covered mountain from your bed.
            </p>
            <Link href="/rooms/twin-pines-cabin-1" className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans inline-block text-center">
              View More
            </Link>
          </div>
          {/* Image Right */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0 order-1 lg:order-2">
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
      <section className="max-w-[1300px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="bg-white flex flex-col lg:flex-row w-full lg:min-h-[550px]">
          {/* Text Right */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 order-2 lg:order-2">
            <span className="font-serif text-[#34673f] text-xl md:text-2xl mb-2 tracking-wide">
              Pool view
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] text-[#2a2a2a] mb-8">
              Twin Pines Cabin 2
            </h2>
            <p className="font-sans font-light text-lg md:text-xl text-[#565656] leading-relaxed mb-10">
              The ultimate luxury, a room that extends to a pool, which blends into nature.
            </p>
            <Link href="/rooms/twin-pines-cabin-2" className="self-start border border-[#2a2a2a] text-[#2a2a2a] px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors font-sans inline-block text-center">
              View More
            </Link>
          </div>
          {/* Image Left */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0 order-1 lg:order-1">
            <Image
              src="/images/Twinpines_image/IMG_7835.jpg"
              alt="A-frame cabin"
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
