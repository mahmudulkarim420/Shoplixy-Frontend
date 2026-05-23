"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface MiniSliderProps {
  title: string;
  images: string[];
}

const MiniSlider = ({ title, images }: MiniSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-[#f8f9fa] p-6 rounded-xl flex flex-col h-full min-h-[320px]">
      {/* Slider Header */}
      <div className="flex justify-between items-center text-xs font-bold tracking-widest text-slate-800 mb-8">
        <span className="uppercase">{title}</span>
        <button className="text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1">
          VIEW ALL <span>&rarr;</span>
        </button>
      </div>

      {/* Images Area */}
      <div className="relative flex-1 w-full flex items-center justify-center">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${title} slide ${index + 1}`}
            width={100}
            height={100}
            className={`absolute max-w-[80%] max-h-[180px] object-contain transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-1.5 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-4 h-1.5 bg-black"
                : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniSlider;
