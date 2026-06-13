import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fcf9f2] pt-36 sm:pt-40 lg:pt-48 pb-0 flex flex-col items-center">
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
          Contact Us
        </span>
        <h1 className="font-sans font-light text-[42px] sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.15] text-[#2a2a2a] mb-5 max-w-4xl tracking-tight">
          Get in touch
        </h1>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 md:px-12 mb-20 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
        
        {/* Left Side: Clean Form */}
        <div className="flex-1">
          <ContactForm />
        </div>

        {/* Right Side: Contact Details */}
        <div className="w-full md:w-[300px] flex flex-col gap-10 pt-4">
           <div>
             <span className="font-sans text-xs tracking-widest uppercase text-[#34673f] block mb-2">Location</span>
             <p className="font-sans font-light text-lg text-[#565656] leading-relaxed">
               The Lost Cabins,<br/>
               Thusaragiri, Kerala 673586,<br/>
               India
             </p>
           </div>
           <div>
             <span className="font-sans text-xs tracking-widest uppercase text-[#34673f] block mb-2">Phone</span>
             <p className="font-sans font-light text-lg text-[#565656]">
               <a href="tel:+918848620887" className="hover:text-[#34673f] transition-colors">+91 88486 20887</a>
             </p>
           </div>
           <div>
             <span className="font-sans text-xs tracking-widest uppercase text-[#34673f] block mb-2">Email</span>
             <p className="font-sans font-light text-lg text-[#565656]">
               <a href="mailto:hello@thelostcabins.com" className="hover:text-[#34673f] transition-colors">hello@thelostcabins.com</a>
             </p>
           </div>
        </div>
      </section>

      {/* Clean Map */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 mb-20">
        <div className="w-full h-[260px] sm:h-[320px] md:h-[400px] bg-[#eaeaea] relative">
          <iframe
            src="https://maps.google.com/maps?q=The%20Lost%20Cabins,%20Thusharagiri,%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(50%) opacity(0.8)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </div>
      </section>

      {/* Back to Home */}
      <section className="flex justify-center items-center pb-12">
        <Link href="/" className="flex items-center gap-3 font-sans text-[#2a2a2a] hover:text-[#34673f] transition-colors group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-2 transition-transform"><polyline points="15 18 9 12 15 6"></polyline></svg>
          <span className="text-lg">Back To Home</span>
        </Link>
      </section>
    </main>
  );
}
