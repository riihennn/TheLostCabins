import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#181511] border-t border-white/20 pt-10 pb-6 px-6 md:px-16 lg:px-32 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 text-sm">

        {/* Col 1 */}
        <div className="flex items-start">
          <div className="relative w-37 h-21">
            <Image
              src="/images/LostCabins-Logo-White.png"
              alt="The Lost Cabins Logo"
              fill
              className="object-contain object-left opacity-90"
            />
          </div>
        </div>

        {/* Col 2 */}
        <div className="font-sans font-light leading-relaxed">
          <p>The Lost Cabins,</p>
          <p>Thusaragiri, Kerala 673586, India,</p>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-3 font-sans font-light">
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact Us</Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">About Us</Link>
          <Link href="/rooms" className="hover:opacity-70 transition-opacity">Rooms & Tariffs</Link>
          <Link href="/experiences" className="hover:opacity-70 transition-opacity">Experiences</Link>
          <a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
        </div>

        {/* Col 4 */}
        <div>
          <p className="font-sans font-light mb-4">Subscribe For Updates</p>
          <div className="flex">
            <input type="email" placeholder="Email" className="bg-white/10 border border-white/20 placeholder-white/60 px-4 py-3 text-sm flex-1 outline-none font-sans text-white" />
            <button className="bg-white text-[#34673f] px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/80 font-sans transition-colors">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-white/20 text-xs opacity-80 font-sans tracking-wide">
        <p>© The Lost Cabins 2021 - All Rights Reserved</p>
      </div>
    </footer>
  );
}
