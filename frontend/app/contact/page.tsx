"use client";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fcf9f2] pt-32 lg:pt-40 pb-0 flex flex-col items-center">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 mb-16 lg:mb-24">
        <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6">
          <Image
            src="/images/LostCabin-icon-Green.png"
            alt="Lost Cabins Leaf Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="font-serif text-[#34673f] text-xl md:text-3xl mb-4 tracking-wide">
          Contact Us
        </span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-[#2a2a2a]">
          Get in touch
        </h1>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-[1000px] mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Clean Form */}
        <div className="flex-1">
          <form className="flex flex-col gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
            <input type="text" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="Name" />
            <input type="email" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="Email" />
            <input type="tel" className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="Phone" />
            <textarea required rows={4} className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg resize-none focus:border-[#34673f] transition-colors" placeholder="Message"></textarea>
            <button type="submit" className="self-start text-[#34673f] font-sans tracking-widest uppercase text-sm mt-4 hover:opacity-70 transition-opacity border-b border-[#34673f] pb-1">
              Send Message
            </button>
          </form>
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
               <a href="tel:+919999999999" className="hover:text-[#34673f] transition-colors">+91 99999 99999</a>
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
      <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 mb-20">
        <div className="w-full h-[400px] bg-[#eaeaea] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.5283526131!2d76.0336214!3d11.4526615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66a8dbfc0f07b%3A0xc3f1c998782a20b0!2sThusharagiri%20Waterfalls!5e0!3m2!1sen!2sin!4v1689255655519!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) opacity(0.8)" }}
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
