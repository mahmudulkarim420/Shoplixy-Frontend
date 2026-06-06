"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, Truck, Star, Package } from "lucide-react";

const MiniSlider = ({ title, images }: { title: string; images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 p-5 transition-all hover:shadow-md hover:border-slate-200">
      <h4
        className="mb-3 text-[11px] font-semibold uppercase tracking-widest"
        style={{ fontFamily: "var(--sl-font-sans)", color: "var(--sl-primary-600)" }}
      >
        {title}
      </h4>
      <div className="relative h-36 w-full sm:h-44">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="mt-3 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: i === index ? "20px" : "6px",
              background: i === index ? "var(--sl-primary-500)" : "#cbd5e1",
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Feature card data ── */
type FeatureItem = {
  icon: React.ElementType;
  title: string;
  desc: string;
  iconColor: string;
  iconBg: string;
};

const featureItems: FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: "100% Authentic Products",
    desc: "Every item is sourced directly from authorized distributors. Genuine brands, genuine peace of mind.",
    iconColor: "#10b981",
    iconBg: "#ecfdf5",
  },
  {
    icon: Truck,
    title: "Nationwide Fast Delivery",
    desc: "Best pricing with delivery covering all 64 districts. Major city hubs ensure same-day dispatch.",
    iconColor: "#6366f1",
    iconBg: "#eef2ff",
  },
  {
    icon: Star,
    title: "Wearables & Smart Accessories",
    desc: "Carry original wearables that work smoothly and last long — style meets smart tech.",
    iconColor: "#f59e0b",
    iconBg: "#fffbeb",
  },
  {
    icon: Package,
    title: "Largest Gadget Collection",
    desc: "Drones, studio gear, DSLRs, power banks — top-tier brands like DJI and Corsair, all under one roof.",
    iconColor: "#f43f5e",
    iconBg: "#fff1f2",
  },
];

const FeatureCard = ({ item }: { item: FeatureItem }) => {
  const Icon = item.icon;
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ background: item.iconBg }}
      >
        <Icon size={20} style={{ color: item.iconColor }} />
      </div>
      <h3
        className="mb-2 text-base font-bold text-slate-900"
        style={{ fontFamily: "var(--sl-font-sans)" }}
      >
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const keyboardImages = [
    "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&h=400&fit=crop",
  ];

  const mouseImages = [
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1615663245857-ac1eeb536624?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=600&h=400&fit=crop",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="sl-label sl-label-primary mb-3">Our Advantage</p>
          <h2
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.025em" }}
          >
            Why Shoplixy?
          </h2>
          <p className="mt-3 max-w-xl text-slate-500">
            Bangladesh's most trusted gadget and tech marketplace — built for quality, speed, and
            satisfaction.
          </p>
        </div>

        {/* Grid: Feature Cards + Sliders */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard item={featureItems[0]} />
          <FeatureCard item={featureItems[1]} />
          <MiniSlider title="Premium Keyboards" images={keyboardImages} />
          <FeatureCard item={featureItems[2]} />
          <MiniSlider title="Pro Gaming Mice" images={mouseImages} />
          <FeatureCard item={featureItems[3]} />
        </div>

        {/* Trust Statement */}
        <div className="mt-14 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-8 py-10 text-center md:mt-20 md:px-16">
          <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg md:text-xl">
            Shoplixy is Bangladesh&apos;s trusted destination for gaming accessories and gadgets.
            Authentic products, competitive pricing, and fast nationwide delivery across all{" "}
            <span className="font-semibold text-slate-900">64 districts.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
