"use client";

import { Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buyMoreSaveMore } from "../data/mockData";

export default function BuyMoreSaveMore() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2
              className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
            >
              Buy More, Save More
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">Bundle up your favorite items for extra discounts.</p>
          </div>
          <Link
            href="/shop"
            className="group hidden items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 sm:flex"
            style={{ fontFamily: "var(--sl-font-sans)" }}
          >
            Shop Bundles
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {buyMoreSaveMore.map((offer) => (
            <div
              key={offer.id}
              className={`group relative overflow-hidden rounded-3xl ${offer.bg} p-6 transition-all hover:scale-[1.02] hover:shadow-lg border border-slate-100/50`}
            >
              <div className="relative z-10 flex h-full flex-col items-start">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-slate-700">
                  <Layers size={24} />
                </div>
                <div className="mb-1 rounded-full bg-white/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 backdrop-blur-sm" style={{ fontFamily: "var(--sl-font-sans)" }}>
                  Min. {offer.minItems} Items
                </div>
                <h3 className="mb-2 mt-2 text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}>
                  {offer.title}
                </h3>
                <p className="mb-6 text-sm text-slate-600">{offer.description}</p>
                <Link
                  href="/shop"
                  className="mt-auto inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Shop Now
                </Link>
              </div>
              
              {/* Decorative Number Background */}
              <div className="absolute -bottom-6 -right-4 z-0 text-[120px] font-black leading-none text-black/[0.03] select-none" style={{ fontFamily: "var(--sl-font-sans)" }}>
                {offer.discount}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
