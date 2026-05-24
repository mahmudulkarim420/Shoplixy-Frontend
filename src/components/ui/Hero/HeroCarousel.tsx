"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // 1. Add a ref to track animation state without triggering re-renders or stale closures
  const isAnimatingRef = useRef(false);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1600&h=800&fit=crop",
      badge: "Exclusive Launch",
      title: "Premium Tech & Workspace",
      subtitle: "Elevate your productivity with our curated collection of high-end gadgets and office essentials.",
      buttonText: "Explore Collection",
      accent: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&h=800&fit=crop",
      badge: "New Season",
      title: "Modern Lifestyle & Fashion",
      subtitle: "Discover the latest trends in tech-integrated fashion and daily essentials for the modern urbanite.",
      buttonText: "Shop New Arrivals",
      accent: "from-rose-600 to-pink-600"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=800&fit=crop",
      badge: "Limited Edition",
      title: "Superior Audio Experience",
      subtitle: "Immerse yourself in pure sound with our range of professional-grade headphones and audio gear.",
      buttonText: "View Audio Gear",
      accent: "from-amber-500 to-orange-600"
    },
  ];

  const changeSlide = (next: number) => {
    // 2. Check the ref instead of the state
    if (isAnimatingRef.current) return; 
    
    // 3. Lock the ref immediately
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setCurrentSlide(next);
    
    setTimeout(() => {
      // 4. Unlock the ref when animation finishes
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, 700);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl group">
        {/* Background Images & Content */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear"
              style={{
                backgroundImage: `url('${slide.image}')`,
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-20 max-w-2xl">
              <div className={`transition-all duration-700 delay-300 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <span className={`inline-block px-4 py-1.5 rounded-full bg-linear-to-r ${slide.accent} text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg`}>
                  {slide.badge}
                </span>
                <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-sm">
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i} className={i === slide.title.split(' ').length - 1 ? "text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/50" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </h2>
                <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-medium max-w-lg">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95">
                    {slide.buttonText}
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Progress Bar */}
        <div className="absolute z-30 bottom-0 left-0 w-full h-1.5 bg-white/10">
          <div 
            className="h-full bg-white/40 transition-all duration-[6000ms] ease-linear"
            style={{ 
              width: isAnimating ? '0%' : '100%',
              transition: isAnimating ? 'none' : 'width 6000ms linear'
            }}
          />
        </div>

        {/* Nav Arrows - Hidden on mobile, show on hover */}
        <button
          onClick={() => changeSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute z-30 left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:scale-110 shadow-2xl opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          <ChevronLeft size={32} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => changeSlide((currentSlide + 1) % slides.length)}
          className="absolute z-30 right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:scale-110 shadow-2xl opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          <ChevronRight size={32} strokeWidth={2.5} />
        </button>

        {/* Dots */}
        <div className="absolute z-30 bottom-10 left-8 md:left-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => changeSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide
                  ? "w-12 bg-white"
                  : "w-3 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;