import React from "react";
import MiniSlider from "./MiniSlider";

// Main Section Component
const WhyChooseUs = () => {
  // Dummy images for the sliders (Tumi pore ashol product image link bosabe)
  const keyboardImages = [
    "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=400&fit=crop&bg=transparent", 
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=400&fit=crop&bg=transparent",
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&h=400&fit=crop&bg=transparent",
  ];

  const mouseImages = [
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop&bg=transparent", 
    "https://images.unsplash.com/photo-1615663245857-ac1eeb536624?w=600&h=400&fit=crop&bg=transparent",
    "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=600&h=400&fit=crop&bg=transparent",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-2">
            About Shoplixy
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            WHY SHOPlixY?
          </h2>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Row 1, Col 1 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-slate-800 leading-snug">
              BANGLADESH'S #1 TRUSTED GAMING STORE
            </h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">
              From mechanical keyboards and gaming mice to headsets and smart accessories — all
              genuine, all in one place. Reliable brands, authentic products, every time.
            </p>
          </div>

          {/* Row 1, Col 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-slate-800 leading-snug">
              BEST PRICE & FASTEST DELIVERY
            </h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">
              Covering all 64 districts. Distribution hubs in Dhaka, Chattogram, Khulna, Rangpur and
              more. 15+ service centers nationwide with dedicated after-sales support.
            </p>
          </div>

          {/* Row 1, Col 3 - SLIDER */}
          <div className="lg:row-span-1">
            <MiniSlider title="Keyboard" images={keyboardImages} />
          </div>

          {/* Row 2, Col 1 */}
          <div className="flex flex-col gap-3 lg:mt-6">
            <h3 className="text-xl font-bold text-slate-800 leading-snug">
              SMARTWATCHES & WEARABLES
            </h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">
              Track health, match your style, stay connected. We carry original wearables that work
              smoothly and last long, backed with proper support and quick delivery.
            </p>
          </div>

          {/* Row 2, Col 2 - SLIDER */}
          <div className="lg:row-span-1">
            <MiniSlider title="Mouse" images={mouseImages} />
          </div>

          {/* Row 2, Col 3 */}
          <div className="flex flex-col gap-3 lg:mt-6">
            <h3 className="text-xl font-bold text-slate-800 leading-snug">
              LARGEST GADGET SHOP IN BANGLADESH
            </h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">
              Drones, studio gear, DSLRs, power banks — from DJI, Corsair, Anker, Baseus and 20+ top
              brands, all under one roof with guaranteed authenticity.
            </p>
          </div>
        </div>

        {/* Bottom Centered Summary Text */}
        <div className="mt-20 pt-10 border-t border-slate-100 max-w-4xl mx-auto text-center">
          <p className="text-slate-600 font-medium leading-relaxed md:text-lg">
            Shoplixy is Bangladesh's trusted destination for gaming accessories — mechanical
            keyboards, gaming mice, headsets, earbuds, smartwatches and more. Authentic products,
            competitive pricing, and fast nationwide delivery across all 64 districts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
