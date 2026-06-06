"use client";

import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import FlashSaleTimer from "./FlashSaleTimer";
import ProductCard from "@/features/products/components/ProductCard";
import { dailyDealsProducts } from "@/data/sampleProducts";

export default function FlashSale() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-rose-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 md:mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                  <Zap size={18} fill="currentColor" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-rose-600" style={{ fontFamily: "var(--sl-font-sans)" }}>
                  Flash Sale
                </span>
              </div>
              <h2
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
                style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
              >
                Hurry Up! Deals End Soon
              </h2>
            </div>
            
            <div className="hidden h-12 w-px bg-slate-200 md:block" />
            
            <FlashSaleTimer />
          </div>

          <Link
            href="/shop"
            className="group hidden items-center gap-1.5 text-sm font-semibold text-rose-600 transition-colors hover:text-rose-700 sm:flex"
            style={{ fontFamily: "var(--sl-font-sans)" }}
          >
            View all deals
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-4 stagger-children animate-fade-in-up">
          {dailyDealsProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* Mobile View All */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/shop"
            className="group flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all active:scale-95"
            style={{ fontFamily: "var(--sl-font-sans)" }}
          >
            View all deals
            <ArrowRight size={15} className="text-slate-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
