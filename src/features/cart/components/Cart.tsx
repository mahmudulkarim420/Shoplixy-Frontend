"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, CheckCircle2, ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import { useCartStore } from "@/features/cart/store/cartStore";

const CartPage = () => {
  const { items, updateQuantity, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 text-slate-300">
          <Trash2 size={40} />
        </div>
        <h1
          className="text-2xl font-bold text-slate-900 mb-2"
          style={{ fontFamily: "var(--sl-font-sans)" }}
        >
          {" "}
          Your cart is empty{" "}
        </h1>
        <p className="text-slate-500 mb-8 max-w-xs text-center">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5"
          style={{ background: "var(--sl-primary-600)", fontFamily: "var(--sl-font-sans)" }}
        >
          <ArrowLeft size={18} />
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12" style={{ background: "var(--sl-bg-subtle)" }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Link
            href="/"
            className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1
            className="text-2xl font-black text-slate-900"
            style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.03em" }}
          >
            My Shopping Cart
          </h1>
          <span className="ml-2 px-3 py-1 bg-white border border-slate-100 rounded-full text-xs font-bold text-slate-500">
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side - Cart Items */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative shrink-0">
                  <div className="w-28 h-28 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center p-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-grow text-center sm:text-left min-w-0">
                  <div
                    className="mb-1 text-[10px] font-bold text-indigo-500 uppercase tracking-widest"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Premium Gear
                  </div>
                  <h3
                    className="text-lg font-bold text-slate-900 leading-snug mb-2 line-clamp-2"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <ShieldCheck size={12} />
                      Authentic
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                      <Truck size={12} />
                      Ships Fast
                    </div>
                  </div>
                </div>

                {/* Controls & Price */}
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-6 sm:gap-4 shrink-0 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-50">
                  <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2.5 hover:bg-slate-100 text-slate-500 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <div className="w-10 text-center text-sm font-bold text-slate-900 border-x border-slate-100 py-1.5">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2.5 hover:bg-slate-100 text-slate-500 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold text-slate-400">BDT</span>
                      <span
                        className="text-xl font-black text-slate-900"
                        style={{ fontFamily: "var(--sl-font-sans)" }}
                      >
                        {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                    >
                      <Trash2 size={20} strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Support Info */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex-1 flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4
                    className="text-sm font-bold text-slate-900"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Secure Payments
                  </h4>
                  <p className="text-xs text-slate-500">Your transactions are protected</p>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Truck size={20} />
                </div>
                <div>
                  <h4
                    className="text-sm font-bold text-slate-900"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Fast Nationwide Delivery
                  </h4>
                  <p className="text-xs text-slate-500">Across all 64 districts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className="lg:col-span-4 space-y-6">
            {/* Promo Section */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
              <h3
                className="text-base font-bold text-slate-900 mb-4"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Gift Cards & Promo
              </h3>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-grow px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all"
                />
                <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">
                  Apply
                </button>
              </div>

              <div className="bg-emerald-50 border border-emerald-100/50 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <div>
                    <span className="text-xs font-bold text-emerald-700 tracking-wide block uppercase">
                      SHOPLIXYFREE
                    </span>
                    <span className="text-[11px] text-emerald-600 font-medium">
                      Free Shipping Applied
                    </span>
                  </div>
                </div>
                <button className="text-[10px] font-bold text-rose-500 uppercase tracking-wider hover:text-rose-600 transition-colors">
                  Remove
                </button>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm border-t-4 border-t-indigo-600">
              <h3
                className="text-base font-bold text-slate-900 mb-6"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Order Summary
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-slate-500">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Subtotal
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-400">BDT</span>
                    <span className="text-sm font-bold text-slate-900">
                      {subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-slate-500">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Shipping
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-400">BDT</span>
                    <span className="text-sm font-bold text-slate-900">
                      {shipping > 0 ? shipping.toLocaleString() : "FREE"}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-slate-50 mt-2" />

                <div className="flex justify-between items-center pt-2">
                  <span
                    className="text-lg font-black text-slate-900 uppercase tracking-tighter"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Total
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-black text-slate-400">BDT</span>
                    <span
                      className="text-2xl font-black text-slate-900"
                      style={{ fontFamily: "var(--sl-font-sans)" }}
                    >
                      {total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout CTA */}
              <Link href="/checkout" className="block mt-8">
                <button
                  className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all duration-200 active:scale-[0.98] shadow-xl shadow-indigo-100"
                  style={{ background: "var(--sl-primary-600)", fontFamily: "var(--sl-font-sans)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "var(--sl-primary-700)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "var(--sl-primary-600)";
                  }}
                >
                  Proceed to Checkout
                </button>
              </Link>

              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center"
                    >
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 font-medium">
                  Joined by 10k+ shoppers today
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
