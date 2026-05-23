"use client";
import Image from "next/image";
import Link from "next/link";

type Experience = {
  title: string;
  distance: string;
  description: string;
  image: string;
  readmore?: string;
};

const experiences: Experience[] = [
  {
    title: "Thusharagiri Waterfalls",
    distance: "2 km",
    description: "A stunning set of cascading waterfalls nestled in the lush Western Ghats. The name 'Thusharagiri' translates to 'snow-capped mountain'.",
    image: "/images/Experience_image/IMG-7822.jpg",
    readmore: "https://www.google.com/search?q=Thusharagiri+Waterfalls&rlz=1C5CHFA_enIN1187IN1187&oq=Thusharagiri+Waterfalls&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzM5OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
  },
  {
    title: "Thusharagiri Bridge",
    distance: "1.5 km",
    description: "Scenic bridge in the Thusharagiri area offering picturesque views of the surrounding hills and valleys, perfect for a peaceful evening walk.",
    image: "/images/Experience_image/thusharagiri-bridge.jpg",
    readmore: "https://www.google.com/search?q=thusharagiri+bridge&rlz=1C5CHFA_enIN1187IN1187&oq=Thusharagiri+Bridge&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAAGJECGIAEGIoFMggIAhAAGBYYHjIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyDQgFEAAYhgMYgAQYigUyBwgGEAAY7wUyBwgHEAAY7wXSAQc5MTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    
  },
  {
    title: "Vattachira Water Falls",
    distance: "0.5 km",
    description: "A small yet beautiful waterfall along the Thusharagiri road that's less crowded and perfect for a quiet, relaxing dip.",
    image: "/images/Experience_image/vattachira.jpg",
    readmore: "https://www.google.com/search?q=vattachira+waterfalls&rlz=1C5CHFA_enIN1187IN1187&oq=Thusharagiri+Bridge&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAAGJECGIAEGIoFMggIAhAAGBYYHjIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyDQgFEAAYhgMYgAQYigUyBwgGEAAY7wUyBwgHEAAY7wXSAQc5MTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
  },
  {
    title: "Thamarassery Churam Viewpoint",
    distance: "10 km",
    description: "A scenic viewpoint on the Thamarassery Ghat, offering panoramic views of the winding hills, deep valleys, and lush green landscape.",
    image: "/images/Experience_image/viewpoint.jpg",
    readmore: "https://www.google.com/search?q=Thamarassery+Churam+Viewpoint&rlz=1C5CHFA_enIN1187IN1187&oq=Thamarassery+Churam+Viewpoint&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHNDY3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"

  },
  {
    title: "Arippara Waterfalls",
    distance: "8 km",
    description: "A scenic multi-level waterfall where the Iruvanji River cascades down rocky terrain, creating natural pools for swimming.",
    image: "/images/Experience_image/arippara.jpg",
    readmore: "https://www.google.com/search?q=arippara+waterfalls&rlz=1C5CHFA_enIN1187IN1187&oq=Thusharagiri+Bridge&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAAGJECGIAEGIoFMggIAhAAGBYYHjIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyDQgFEAAYhgMYgAQYigUyBwgGEAAY7wUyBwgHEAAY7wXSAQc5MTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"

  },
  {
    title: "Pookode Lake",
    distance: "16 km",
    description: "A natural freshwater lake set against forested hills and offering paddle boating, nature walks, and a freshwater aquarium.",
    image: "/images/Experience_image/Pookode-Lake.jpg",
    readmore: "https://www.google.com/search?q=Pookode+Lake&rlz=1C5CHFA_enIN1187IN1187&oq=Thusharagiri+Bridge&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAAGJECGIAEGIoFMggIAhAAGBYYHjIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyDQgFEAAYhgMYgAQYigUyBwgGEAAY7wUyBwgHEAAY7wXSAQc5MTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
  }
];

export default function Experiences() {
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
          Experiences
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-[#2a2a2a] max-w-4xl">
          Nearby Attractions <br className="hidden md:block" />& Travel Options
        </h1>
      </section>

      {/* Grid Section */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#2a2a2a]/5 group flex flex-col">
              
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image 
                  src={exp.image} 
                  alt={exp.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-serif text-2xl md:text-3xl text-[#2a2a2a] mb-4">
                  {exp.title}
                </h3>
                
                <span className="inline-block bg-[#fcf9f2] text-[#34673f] text-xs tracking-widest uppercase px-4 py-2 mb-6 border border-[#34673f]/20 self-start">
                  Distance: {exp.distance}
                </span>
                
                <p className="font-sans font-light text-[#565656] text-lg leading-relaxed mb-8 flex-1">
                  {exp.description}
                </p>
                
                {exp.readmore && (
                  <Link href={exp.readmore} target="_blank" rel="noopener noreferrer" className="font-sans text-[#34673f] text-sm tracking-widest uppercase hover:text-[#d0a782] transition-colors font-medium border-b border-transparent hover:border-[#d0a782] pb-1 self-start">
                    Read More &rarr;
                  </Link>
                )}
              </div>
            </div>
          ))}
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
