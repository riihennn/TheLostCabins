export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 pt-20 pb-10 px-6 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1 */}
        <div>
           <h2 className="font-serif text-2xl font-bold mb-6 text-[#222]">Special Offers And Promotions</h2>
        </div>
        
        {/* Col 2 */}
        <div className="text-[#555] font-sans font-light leading-relaxed">
          <p>Opp: Convent, Charity Road,</p>
          <p>Vythiri (Way to Aysha Plantations),</p>
          <p>Wayanad - 673576, Kerala</p>
        </div>
        
        {/* Col 3 */}
        <div className="flex flex-col gap-3 text-[#555] font-sans font-light">
          <a href="#" className="hover:text-accent transition-colors">Contact Us</a>
          <a href="#" className="hover:text-accent transition-colors">About Us</a>
          <a href="#" className="hover:text-accent transition-colors">Rooms & Tariffs</a>
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
        </div>
        
        {/* Col 4 */}
        <div>
          <p className="text-[#555] font-sans font-light mb-4">Subscribe For Updates</p>
          <div className="flex">
            <input type="email" placeholder="Email" className="bg-[#f5f5f5] px-4 py-3 text-sm flex-1 outline-none font-sans" />
            <button className="bg-[#222] text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-black font-sans">
              Subscribe
            </button>
          </div>
        </div>
        
      </div>
      
      <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-black/10 text-xs text-[#888] font-sans tracking-wide">
        <p>© Silent Creek Resort 2021 - All Rights Reserved</p>
        <a href="#" className="hover:text-[#222] transition-colors mt-4 md:mt-0">Designed By TKOVR</a>
      </div>
    </footer>
  );
}
