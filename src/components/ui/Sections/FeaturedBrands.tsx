import React from "react";

const FeaturedBrands = () => {
  // Dummy brand data (Chhobir sathe mil rekhe kora hoyeche)
  const brands = [
    { id: 1, name: "Attack Shark", style: "font-black italic text-xl" },
    { id: 2, name: "E-YOOSO", style: "bg-yellow-400 text-black font-bold px-3 py-1 text-xs" },
    { id: 3, name: "GravaStar", style: "font-bold text-base flex items-center gap-1" },
    { id: 4, name: "logitech", style: "font-bold lowercase text-xl" },
    { id: 5, name: "AULA", style: "font-black tracking-widest text-lg" },
    { id: 6, name: "BAJEAL", style: "bg-black text-white font-bold px-3 py-1.5 text-sm tracking-wider" },
    { id: 7, name: "LANGSDOM", style: "bg-[#a3e635] text-black font-black px-2 py-1.5 text-[10px]" },
    { id: 8, name: "POKOBAND", style: "font-bold text-sm tracking-tighter" },
  ];

  // Infinite scroll er jonno array take double kora hoyeche
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-white overflow-hidden">
      {/* Container for Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a192f] mb-1 tracking-tight">
          FEATURED BRANDS
        </h2>
        <p className="text-slate-500 text-sm md:text-base">
          Discover our curated selection of premium partners
        </p>
      </div>

      {/* Marquee Wrapper - Contained to match alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex overflow-hidden group rounded-2xl">
          
          {/* Custom CSS for seamless infinite scroll */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
              width: max-content;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}} />

          <div className="flex animate-marquee gap-4 md:gap-5 py-4">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 w-[140px] h-[70px] md:w-[160px] md:h-[80px] bg-white border border-slate-100 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-sm hover:border-indigo-100 transition-all duration-300"
              >
                <div className={brand.style}>
                  {brand.name}
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fades on the edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;