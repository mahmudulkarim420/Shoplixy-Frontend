"use client";

import { Send, Sparkles } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-12 sm:py-16 lg:py-20 flex flex-col items-center text-center shadow-2xl">
        {/* Background Decorative */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000&opacity=10')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/90" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-full max-w-2xl bg-indigo-500/20 blur-[100px]" />

        <div className="relative z-10 max-w-2xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
            <Sparkles size={28} />
          </div>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
          >
            Get Exclusive Offers First
          </h2>
          <p className="mb-8 text-base text-slate-300 sm:text-lg">
            Subscribe to our newsletter and receive a 10% discount on your first purchase. We&apos;ll only send you the best deals.
          </p>

          <form className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 backdrop-blur-sm transition-all"
              required
            />
            <button
              type="submit"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 text-sm font-semibold text-white shadow-lg transition-all hover:bg-indigo-500 hover:shadow-indigo-500/25 sm:w-auto"
              style={{ fontFamily: "var(--sl-font-sans)" }}
            >
              Subscribe
              <Send size={16} />
            </button>
          </form>
          <p className="mt-4 text-[11px] text-slate-500">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </section>
  );
}
