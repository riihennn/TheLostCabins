"use client";

export default function JuicerFeed() {
  return (
    <div className="w-full max-w-[1200px] mx-auto min-h-[600px] px-4 md:px-8">
      <iframe 
        src="https://www.juicer.io/api/feeds/the_lostcabins/iframe" 
        frameBorder="0" 
        width="1000" 
        height="1000" 
        className="w-full mx-auto"
        style={{ display: "block", margin: "0 auto", width: "100%", height: "800px" }}
      />
    </div>
  );
}
