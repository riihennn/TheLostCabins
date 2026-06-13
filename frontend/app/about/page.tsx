import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Lost Cabins | Thusharagiri, Kerala",
  description: "Learn the story behind The Lost Cabins — a premium boutique forest retreat nestled near Thusharagiri Waterfalls in the heart of Kerala's Western Ghats.",
};

export default function About() {
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
          About Us
        </span>
        <h1 className="font-sans font-light text-[42px] sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.15] text-[#2a2a2a] mb-5 max-w-4xl tracking-tight">
          Why we do What we do
        </h1>
        <p className="font-sans font-medium text-[15px] md:text-lg text-[#333333]">
          Story so far
        </p>
      </section>

      {/* Image 1 - Boxed Width */}
      <section className="max-w-[1120px] mx-auto w-full px-4 sm:px-6 md:px-12 mb-12 sm:mb-16 md:mb-24 lg:mb-32">
        <div className="relative w-full aspect-[1120/595]">
          <Image
            src="/images/IMG_7825.jpg"
            alt="Two people relaxing on a balcony"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Text Block 1 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32">
        <p className="font-sans font-light text-lg md:text-xl lg:text-[1.35rem] leading-[1.8] text-[#2a2a2a]">
          At The Lost Cabin, we welcome you to experience the peaceful beauty of Thusharagiri. Surrounded by lush greenery, misty hills, and the soothing sounds of nature, we created this space as a quiet escape from busy city life. Located close to the breathtaking Thusharagiri Waterfalls, we offer a cozy and comfortable stay where you can relax, unwind, and reconnect with nature.

          Whether you are visiting for adventure, a romantic getaway, or a peaceful break with family and friends, we strive to make your stay warm, memorable, and truly refreshing.


        </p>
      </section>

      {/* Image 2 - Boxed Width */}
      <section className="max-w-[1120px] mx-auto w-full px-4 sm:px-6 md:px-12 mb-12 sm:mb-16 md:mb-24 lg:mb-32">
        <div className="relative w-full aspect-[1120/595]">
          <Image
            src="/images/Hexa_image/IMG_7824.jpg"
            alt="Waterfall stream over rocks"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Text Block 2 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32">
        <p className="font-sans font-light text-lg md:text-xl lg:text-[1.35rem] leading-[1.8] text-[#2a2a2a] mb-10">
          Our quest for excellence was not over yet and we kept on advancing, trying to
          better ourselves. That is how Lost Cabins Resort was born. Set beside a natural
          stream and surrounded by rubber, coco, coffee and tea plantations is our new boutique
          resort- Lost Cabins, yet another milestone in our journey.
        </p>
        <p className="font-sans font-light text-lg md:text-xl lg:text-[1.35rem] leading-[1.8] text-[#2a2a2a]">
          As the poet says – our path diverged in the woods, we took the road less
          travelled and that has made all the difference.
        </p>
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
