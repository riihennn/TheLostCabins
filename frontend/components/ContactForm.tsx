"use client";
import { useState } from "react";

export default function ContactForm() {
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
  );
}
