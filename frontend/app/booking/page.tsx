"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Book() {
  const [status, setStatus] = useState("");
  const [cabin, setCabin] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cabinParam = params.get("cabin");
    if (cabinParam) {
      setCabin(cabinParam);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/book", {
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
          Reservations
        </span>
        <h1 className="font-sans font-light text-[42px] sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.15] text-[#2a2a2a] mb-5 max-w-4xl tracking-tight">
          Book your stay
        </h1>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 md:px-12 mb-20 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
        
        {/* Left Side: Booking Form */}
        <div className="flex-1">
          <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" name="name" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="Full Name" />
              <input type="email" name="email" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="Email Address" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="tel" name="phone" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="Phone Number" />
              <div className="relative">
                <label htmlFor="cabin" className="absolute -top-3 left-0 text-[10px] text-[#2a2a2a]/50 uppercase tracking-widest font-sans">Select your cabin</label>
                <select id="cabin" name="cabin" required value={cabin} onChange={(e) => setCabin(e.target.value)} className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-2 pt-2 text-[#2a2a2a] outline-none font-sans text-lg focus:border-[#34673f] transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Choose a cabin...</option>
                  <option value="A-Frame Cabin">A-Frame Cabin</option>
                  <option value="Hexa Cabin">Hexa Cabin</option>
                  <option value="The Twin Pines">The Twin Pines</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#2a2a2a]/50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label htmlFor="arrivalDate" className="absolute -top-3 left-0 text-[10px] text-[#2a2a2a]/50 uppercase tracking-widest font-sans">Preferred Date of Arrival</label>
              <input type="date" id="arrivalDate" name="arrivalDate" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-2 pt-2 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <label htmlFor="nights" className="absolute -top-3 left-0 text-[10px] text-[#2a2a2a]/50 uppercase tracking-widest font-sans">Number of Nights</label>
                <input type="number" id="nights" name="nights" min="1" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-2 pt-2 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="1" defaultValue="1" />
              </div>
              <div className="relative">
                <label htmlFor="guests" className="absolute -top-3 left-0 text-[10px] text-[#2a2a2a]/50 uppercase tracking-widest font-sans">Adult Guests</label>
                <input type="number" id="guests" name="guests" min="1" required className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-2 pt-2 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="2" defaultValue="2" />
              </div>
              <div className="relative">
                <label htmlFor="children" className="absolute -top-3 left-0 text-[10px] text-[#2a2a2a]/50 uppercase tracking-widest font-sans">Children (if any)</label>
                <input type="number" id="children" name="children" min="0" className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-2 pt-2 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg focus:border-[#34673f] transition-colors" placeholder="0" defaultValue="0" />
              </div>
            </div>

            <textarea name="message" rows={4} className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 text-[#2a2a2a] placeholder-[#2a2a2a]/40 outline-none font-sans text-lg resize-none focus:border-[#34673f] transition-colors mt-4" placeholder="Questions or comments (optional)"></textarea>
            
            <div className="flex items-center gap-6 mt-4">
              <button 
                type="submit" 
                disabled={status === "sending"}
                className="text-[#34673f] font-sans tracking-widest uppercase text-sm hover:opacity-70 transition-opacity border-b border-[#34673f] pb-1 disabled:opacity-50"
              >
                {status === "sending" ? "Sending Request..." : "Submit Request"}
              </button>
              
              {status === "success" && (
                <span className="text-[#34673f] font-sans text-sm animate-pulse">
                  Request sent successfully! We will contact you soon.
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
               <a href="tel:+919999999999" className="hover:text-[#34673f] transition-colors">+91 9847 753486</a>
             </p>
           </div>
           <div>
             <span className="font-sans text-xs tracking-widest uppercase text-[#34673f] block mb-2">Email</span>
             <p className="font-sans font-light text-lg text-[#565656]">
               <a href="mailto:hello@thelostcabins.com" className="hover:text-[#34673f] transition-colors">thelostcabins@gmail.com</a>
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
      <section className="flex justify-center items-center pb-24">
        <Link href="/" className="flex items-center gap-3 font-sans text-[#2a2a2a] hover:text-[#34673f] transition-colors group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-2 transition-transform"><polyline points="15 18 9 12 15 6"></polyline></svg>
          <span className="text-lg">Back To Home</span>
        </Link>
      </section>
    </main>
  );
}
