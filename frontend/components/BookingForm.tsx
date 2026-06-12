"use client";
import { useState, useEffect } from "react";

export default function BookingForm() {
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
  );
}
