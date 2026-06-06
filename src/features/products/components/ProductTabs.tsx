"use client";

import React, { useState } from "react";
import { Check, Star, MessageSquare, Info, BarChart3 } from "lucide-react";
import { Product } from "@/types/product";

interface ProductTabsProps {
  product: Product;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");

  const tabs = [
    { id: "description", label: "Description", icon: Info },
    { id: "specs", label: "Technical Specs", icon: BarChart3 },
    { id: "reviews", label: "User Reviews", icon: MessageSquare },
  ] as const;

  return (
    <div className="w-full">
      <div className="flex border-b border-slate-50 px-4 md:px-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2.5 py-6 px-4 text-xs font-black uppercase tracking-widest transition-all ${
                isActive ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"
              }`}
              style={{ fontFamily: "var(--sl-font-sans)" }}
            >
              <Icon size={14} strokeWidth={isActive ? 2.5 : 2} />
              {tab.label}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-t-full shadow-[0_-2px_8px_rgba(79,70,229,0.3)]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-8 md:p-12 lg:p-16">
        {activeTab === "description" && (
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3
              className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight"
              style={{ fontFamily: "var(--sl-font-sans)" }}
            >
              Experience Next-Level Performance
            </h3>
            <p className="text-slate-500 leading-relaxed mb-10 text-lg">
              The <span className="text-slate-900 font-bold">{product.name}</span> is engineered for
              those who demand excellence. Whether you&apos;re a pro-level gamer or a tech
              enthusiast, every detail has been meticulously crafted to provide a seamless,
              high-performance experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4
                  className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Core Advantages
                </h4>
                <ul className="space-y-4">
                  {[
                    "Premium Grade Construction",
                    "Optimized Response Times",
                    "Ergonomic Precision Mesh",
                    "Global Standards Certified",
                  ].map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-emerald-500" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4
                  className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  In the Box
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {product.name}, Premium Braided Cable, User Documentation, Warranty Card, and
                  exclusive Shoplixy stickers.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              {[
                { label: "Product Identity", value: product.name },
                { label: "Category", value: "Premium Electronics" },
                { label: "SKU Variant", value: `SLX-${product.id.padStart(6, "0")}` },
                { label: "Global Warranty", value: "24 Months International" },
                { label: "Dispatch State", value: "In Stock" },
                { label: "Logistics", value: "Nationwide Tracking Included" },
                { label: "Origin", value: "International Quality" },
                { label: "Support", value: "24/7 Technical Priority" },
              ].map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 flex flex-col gap-1 hover:bg-slate-50 transition-colors"
                >
                  <span
                    className="text-[10px] font-black text-slate-400 uppercase tracking-widest"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    {spec.label}
                  </span>
                  <span className="text-sm font-bold text-slate-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16 px-6 py-10 bg-indigo-50/30 border border-indigo-100/50 rounded-3xl">
              <div className="text-center">
                <div
                  className="text-6xl font-black text-slate-900 mb-2"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  {product.rating}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={
                        star <= Math.round(product.rating || 0)
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-200 text-slate-200"
                      }
                    />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Global verified Score
                </p>
              </div>

              <div className="flex-grow flex flex-col gap-3">
                {[5, 4, 3, 2, 1].map((score) => (
                  <div key={score} className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-slate-400 w-2">{score}</span>
                    <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: score === 5 ? "85%" : score === 4 ? "12%" : "1%" }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 w-8">
                      {score === 5 ? "85%" : score === 4 ? "12%" : "1%"}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="px-8 py-4 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-900 hover:shadow-lg transition-all shadow-sm active:scale-[0.98]"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Write a Review
              </button>
            </div>

            <div className="space-y-6">
              {[
                {
                  user: "Ariful Islam",
                  date: "Jan 12, 2026",
                  rating: 5,
                  comment: "Absolutely stunning performance. This is why I trust Shoplixy.",
                },
                {
                  user: "Nusrat Jahan",
                  date: "Feb 05, 2026",
                  rating: 5,
                  comment:
                    "Build quality is unmatched. Delivery was unexpectedly fast to Chittagong.",
                },
              ].map((review, idx) => (
                <div
                  key={idx}
                  className="p-8 border border-slate-100 rounded-3xl bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center font-black text-indigo-600">
                        {review.user[0]}
                      </div>
                      <div>
                        <h4
                          className="text-sm font-black text-slate-900"
                          style={{ fontFamily: "var(--sl-font-sans)" }}
                        >
                          {review.user}
                        </h4>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              size={10}
                              className={
                                s <= review.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "fill-slate-100 text-slate-100"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    "{review.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
