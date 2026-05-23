"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#fcf9f2] pt-32 lg:pt-40 pb-0 flex flex-col items-center">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 mb-16 lg:mb-24">
        <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6">
          <Image
            src="/images/LostCabin-icon-green.png"
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
          <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
            <input type="text" name="name" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="Name" />
            <input type="email" name="email" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="Email" />
            <input type="tel" name="phone" className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="Phone" />
            <textarea name="message" required rows={4} className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg resize-none focus:border-[#34673f] transition-colors" placeholder="Message"></textarea>
            
            <div className="flex items-center gap-6 mt-4">
              <button 
                type="submit" 
                disabled={status === "sending"}
                className="text-[#34673f] font-sans tracking-widest uppercase text-sm hover:opacity-70 transition-opacity border-b border-[#34673f] pb-1 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              
              {status === "success" && (
                <span className="text-[#34673f] font-sans text-sm animate-pulse">
                  Message sent successfully!
                </span>
              )}
              {status === "error" && (
                <span className="text-red-500 font-sans text-sm">
                  Failed to send. Please try again.
                </span>
              )}
            </div>
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
