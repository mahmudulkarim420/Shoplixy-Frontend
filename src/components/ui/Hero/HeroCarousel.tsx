"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1600&h=800&fit=crop",
      badge: "Exclusive Launch",
      title: "Premium Tech\nWorkspace",
      subtitle:
        "Elevate your productivity with hand-picked high-end gadgets and modern office essentials.",
      buttonText: "Explore Collection",
      buttonHref: "/category/computer-electronics",
      accentColor: "#4f46e5",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&h=800&fit=crop",
      badge: "New Season",
      title: "Modern Lifestyle\n& Fashion",
      subtitle: "Discover the latest trends in tech-integrated fashion and daily essentials.",
      buttonText: "Shop New Arrivals",
      buttonHref: "/category/fashion-lifestyle",
      accentColor: "#e11d48",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=800&fit=crop",
      badge: "Limited Edition",
      title: "Superior Audio\nExperience",
      subtitle: "Immerse yourself in pure sound with professional-grade headphones and speakers.",
      buttonText: "View Audio Gear",
      buttonHref: "/category/accessories",
      accentColor: "#d97706",
    },
  ];

  const promoCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      label: "Premium Audio",
      discount: "Up to 40% off",
      href: "/category/accessories",
      accentColor: "#6366f1",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
      label: "Luxury Watches",
      discount: "View Collection",
      href: "/category/fashion-lifestyle",
      accentColor: "#f59e0b",
    },
  ];

  const changeSlide = (next: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setCurrentSlide(next);
    setTimeout(() => {
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
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
        {/* ── Main Carousel ── */}
        <div className="lg:col-span-2">
          <div className="group relative h-[280px] overflow-hidden rounded-2xl shadow-lg sm:h-[420px] lg:h-[520px]">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 h-full w-full transition-all duration-900 ease-in-out ${
                  index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
              >
                {/* BG */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    transform: index === currentSlide ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(100deg, rgba(8,9,20,0.88) 0%, rgba(8,9,20,0.55) 45%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-8 sm:justify-center sm:pb-0 sm:px-10 md:px-14">
                  <div
                    className={`transition-all duration-700 delay-200 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    {/* Badge */}
                    <span
                      className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white sm:mb-4 sm:px-4"
                      style={{ background: slide.accentColor, fontFamily: "var(--sl-font-sans)" }}
                    >
                      {slide.badge}
                    </span>

                    {/* Title */}
                    <h2
                      className="mb-3 text-2xl font-bold leading-tight text-white sm:mb-4 sm:text-4xl md:text-5xl"
                      style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
                    >
                      {slide.title.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < slide.title.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </h2>

                    <p className="mb-5 max-w-sm text-xs leading-relaxed text-slate-300 sm:mb-7 sm:text-sm md:text-base lg:max-w-md">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      <Link
                        href={slide.buttonHref}
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
                        style={{ fontFamily: "var(--sl-font-sans)" }}
                      >
                        {slide.buttonText}
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Nav Arrows */}
            <button
              onClick={() => changeSlide((currentSlide - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 sm:flex lg:h-11 lg:w-11 lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              onClick={() => changeSlide((currentSlide + 1) % slides.length)}
              className="absolute right-4 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 sm:flex lg:h-11 lg:w-11 lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-6 z-30 flex gap-1.5 sm:bottom-8 sm:left-10 md:left-14">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => changeSlide(i)}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: i === currentSlide ? "28px" : "8px",
                    background: i === currentSlide ? "#fff" : "rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Promo Cards ── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {promoCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative h-36 overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg sm:h-44 lg:h-auto"
            >
              {/* BG */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.image}')` }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,9,20,0.8) 0%, rgba(8,9,20,0.3) 60%, transparent 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative flex h-full flex-col justify-between p-4 md:p-5 lg:p-6">
                <div />
                <div className="flex items-end justify-between">
                  <div>
                    <h3
                      className="text-sm font-bold text-white leading-snug sm:text-base"
                      style={{ fontFamily: "var(--sl-font-sans)" }}
                    >
                      {card.label}
                    </h3>
                    <span className="text-[11px] text-white/70">{card.discount}</span>
                  </div>
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-xl text-white transition-all group-hover:scale-110"
                    style={{ background: card.accentColor }}
                  >
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
