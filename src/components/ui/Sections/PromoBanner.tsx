"use client";

import { ArrowRight, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface PromoBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundGradient?: string;
  gradientFrom?: string;
  gradientTo?: string;
  textColor?: string;
  badge?: string;
  showTimer?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
}

// Background presets for auto-rotation
const backgroundPresets = [
  { from: "#6366f1", to: "#a855f7" }, // Purple
  { from: "#f43f5e", to: "#fb923c" }, // Orange-Red
  { from: "#0ea5e9", to: "#06b6d4" }, // Blue-Cyan
  { from: "#10b981", to: "#14b8a6" }, // Green-Teal
  { from: "#ec4899", to: "#f43f5e" }, // Pink-Red
];

const PromoBanner = ({
  title,
  subtitle,
  buttonText,
  gradientFrom = "#6366f1",
  gradientTo = "#a855f7",
  badge,
  showTimer = false,
  autoRotate = true,
  rotationInterval = 5000,
}: PromoBannerProps) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentGradient, setCurrentGradient] = useState({
    from: gradientFrom,
    to: gradientTo,
  });

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundPresets.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval]);

  useEffect(() => {
    if (autoRotate) {
      setCurrentGradient(backgroundPresets[currentBgIndex]);
    }
  }, [currentBgIndex, autoRotate]);
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-10 md:px-14 md:py-14 text-white transition-all duration-1000 ease-in-out"
          style={{
            background: `linear-gradient(135deg, ${currentGradient.from} 0%, ${currentGradient.to} 100%)`,
          }}
        >
          {/* Decorative shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-8 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              {badge && (
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-bold mb-4 backdrop-blur-sm tracking-wide">
                  {badge}
                </span>
              )}

              {showTimer && (
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Clock size={16} className="opacity-80" />
                  <span className="text-sm font-medium opacity-80">Limited time offer</span>
                  <div className="flex gap-1.5">
                    {["08", "45", "22"].map((t, i) => (
                      <span
                        key={i}
                        className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1 font-mono font-bold text-sm border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-3">{title}</h2>
              <p className="text-base md:text-lg opacity-85 leading-relaxed">{subtitle}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button className="group flex items-center justify-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-2xl font-bold text-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 btn-press">
                {buttonText}
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
              <button className="flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
