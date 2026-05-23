"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);


  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1600&h=600&fit=crop", // Tech & Workspace
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&h=600&fit=crop", // Fashion & Lifestyle
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=600&fit=crop", // Gadgets
    },
  ];

  const changeSlide = (next: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(next);
    setTimeout(() => setIsAnimating(false), 700);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 5000); // 5 seconds por por slide change hobe
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative w-full overflow-hidden rounded-2xl">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        />
      ))}

      {/* Spacer for height (Image aspect ratio maintain korar jonno) */}
      <div className="w-full min-h-[400px] md:min-h-[550px]"></div>

      {/* Nav Arrows */}
      <button
        onClick={() => changeSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute z-20 left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/30 hover:scale-105 shadow-lg"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => changeSlide((currentSlide + 1) % slides.length)}
        className="absolute z-20 right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/30 hover:scale-105 shadow-lg"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            className={`rounded-full transition-all duration-300 shadow-md ${
              i === currentSlide
                ? "w-8 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default HeroCarousel;