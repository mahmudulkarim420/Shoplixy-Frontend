"use client";

import { useState } from "react";
import { Copy, CheckCircle2, Ticket } from "lucide-react";
import { coupons } from "../data/mockData";

export default function CouponSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-10 sm:py-14 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:text-left">
          <h2
            className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl"
            style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
          >
            Exclusive Vouchers
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">Apply these codes at checkout to save more.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="group relative flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-slate-300"
            >
              {/* Left Edge Decoration */}
              <div className={`w-3 shrink-0 bg-linear-to-b ${coupon.color}`} />
              
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1" style={{ fontFamily: "var(--sl-font-sans)" }}>
                      <Ticket size={14} />
                      Voucher
                    </div>
                    <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "var(--sl-font-sans)" }}>
                      {coupon.discount}
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">{coupon.description}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
                  <div className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold tracking-wider text-slate-800" style={{ fontFamily: "var(--sl-font-sans)" }}>
                    {coupon.code}
                  </div>
                  <button
                    onClick={() => handleCopy(coupon.id, coupon.code)}
                    className="flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-indigo-600 border border-indigo-100 transition-colors hover:bg-indigo-50"
                  >
                    {copiedId === coupon.id ? (
                      <>
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Cutout circles for ticket effect */}
              <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full border border-slate-200 bg-slate-50" />
              <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full border border-slate-200 bg-slate-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
