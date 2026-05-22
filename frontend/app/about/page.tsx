import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#fcf9f2] pt-40 pb-20">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 mb-20">
        <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6">
          <Image
            src="/images/LostCabin-icon-Green.png"
            alt="Lost Cabins Leaf Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="font-serif text-[#34673f] text-xl md:text-3xl mb-4 tracking-wide">
          About Us
        </span>
        <h1 className="font-serif text-5xl leading-[1.2] text-[#2a2a2a] mb-6 max-w-3xl">
          Why we do What we do
        </h1>
        <p className="font-sans text-sm md:text-base text-[#565656] tracking-widest uppercase">
          Story so far
        </p>
      </section>

      {/* Image 1 - Boxed Width */}
      <section className="max-w-[1120px] mx-auto w-full px-6 md:px-12 mb-20 md:mb-32">
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
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-20 md:mb-32">
        <p className="font-sans font-light text-lg md:text-xl lg:text-[1.35rem] leading-[1.8] text-[#2a2a2a]">
          At The Lost Cabin, we welcome you to experience the peaceful beauty of Thusharagiri. Surrounded by lush greenery, misty hills, and the soothing sounds of nature, we created this space as a quiet escape from busy city life. Located close to the breathtaking Thusharagiri Waterfalls, we offer a cozy and comfortable stay where you can relax, unwind, and reconnect with nature.

          Whether you are visiting for adventure, a romantic getaway, or a peaceful break with family and friends, we strive to make your stay warm, memorable, and truly refreshing.


        </p>
      </section>

      {/* Image 2 - Boxed Width */}
      <section className="max-w-[1120px] mx-auto w-full px-6 md:px-12 mb-20 md:mb-32">
        <div className="relative w-full aspect-[1120/595]">
          <Image
            src="/images/IMG_7824.jpg"
            alt="Waterfall stream over rocks"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Text Block 2 */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-20 md:mb-32">
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
