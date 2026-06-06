"use client";

import { ArrowRight, Sparkles, Clock, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PromoBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  gradientFrom?: string;
  gradientTo?: string;
  badge?: string;
  showTimer?: boolean;
}

const PromoBanner = ({
  title = "Elevate Your Tech Game",
  subtitle = "Get up to 50% OFF on professional audio gear and high-performance peripherals.",
  buttonText = "Shop Now",
  badge = "Flash Sale",
  gradientFrom = "#4f46e5",
  gradientTo = "#6366f1",
  showTimer = false,
}: PromoBannerProps) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div
        className="relative overflow-hidden rounded-3xl shadow-xl"
        style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}
      >
        {/* Subtle noise/grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Decorative circles */}
        <div
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-10"
          style={{ background: "rgba(255,255,255,0.4)" }}
        />
        <div
          className="absolute -left-12 bottom-0 h-40 w-40 rounded-full opacity-10"
          style={{ background: "rgba(255,255,255,0.3)" }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between md:px-14 md:py-16 lg:px-20">
          <div className="max-w-lg text-center md:text-left">
            {/* Badges */}
            <div className="mb-4 flex flex-wrap justify-center gap-2.5 md:justify-start">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90"
                style={{ background: "rgba(255,255,255,0.15)", fontFamily: "var(--sl-font-sans)" }}
              >
                <Sparkles size={13} className="text-white/80" />
                {badge}
              </span>
              {showTimer && (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "var(--sl-font-sans)",
                  }}
                >
                  <Clock size={13} />
                  Limited Time
                </span>
              )}
            </div>

            <h2
              className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
            <p className="mb-7 text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
              {subtitle}
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row md:justify-start">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                {buttonText}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <div
                className="hidden items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/60 sm:flex"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                <Zap size={13} className="text-yellow-300" />
                Code: <span className="text-white font-bold">SHOP30</span>
              </div>
            </div>
          </div>

          {/* Promo Image */}
          <div className="relative h-44 w-full shrink-0 md:h-80 md:w-[42%] lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop"
              alt="Promo Product"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
