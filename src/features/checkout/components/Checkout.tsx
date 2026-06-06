"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, CheckCircle2 } from "lucide-react";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  const subtotal = 2590;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen py-12" style={{ background: "var(--sl-bg-subtle)" }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Shipping Address */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <h2
              className="text-xl font-bold text-slate-900 mb-8"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
            >
              Shipping Address
            </h2>

            <form className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 block"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white transition-all"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 block"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="01830-8210"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white transition-all"
                />
              </div>

              {/* Delivery Address */}
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 block"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Delivery Address
                </label>
                <textarea
                  placeholder="Enter your exact delivery address here (e.g. House 45, Road 12, Block C...)"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Billing Checkbox */}
              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer group w-fit">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={billingSameAsShipping}
                      onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                      className="peer sr-only"
                    />
                    <div
                      className="w-6 h-6 border-2 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:border-slate-400"
                      style={{
                        borderColor: billingSameAsShipping ? "var(--sl-primary-600)" : "#e2e8f0",
                        background: billingSameAsShipping ? "var(--sl-primary-600)" : "#fff",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-3.5 h-3.5 text-white transition-all duration-300 ${billingSameAsShipping ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                    Billing address is same as shipping
                  </span>
                </label>
              </div>

              {/* Billing Address Fields */}
              {!billingSameAsShipping && (
                <div className="space-y-6 pt-6 border-t border-slate-100 mt-6 animate-in fade-in slide-in-from-top-4 duration-300">
                  <h3 className="text-lg font-bold text-slate-900">Billing Address</h3>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter billing full name"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-900 transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">Phone number</label>
                    <input
                      type="text"
                      placeholder="01830-8210"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-900 transition-all"
                    />
                  </div>

                  {/* Billing Address */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">
                      Billing Address
                    </label>
                    <textarea
                      placeholder="Enter your exact billing address here"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-900 transition-all resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Confirm Order Button */}
              <button
                type="button"
                className="w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-200 active:scale-[0.98] mt-4 shadow-md"
                style={{ background: "var(--sl-primary-600)", fontFamily: "var(--sl-font-sans)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-700)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-600)";
                }}
              >
                Confirm Order
              </button>
            </form>
          </div>

          {/* Right Column - Your Order */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm space-y-8">
            <h2
              className="text-xl font-bold text-slate-900"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
            >
              Your Order
            </h2>

            {/* Order Item */}
            <div className="p-5 border border-slate-100 rounded-2xl flex items-center gap-4 relative">
              <div className="relative shrink-0">
                <div className="w-20 h-20 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-2">
                  <Image
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=mechanical%20keyboard%2060%25%20wireless%20RGB%20white%20color&image_size=square"
                    alt="Keyronix H61k"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                  1
                </span>
              </div>

              <div className="flex-grow min-w-0">
                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-0.5 truncate">
                  Keyronix H61k 60% Wireless Mechanical RGB keyboard
                </h3>
                <p className="text-xs text-cyan-600 font-medium">Blue</p>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden scale-90 origin-right">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 hover:bg-slate-50 text-slate-500 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <div className="w-10 text-center text-xs font-bold text-slate-900 border-x border-slate-200 py-1.5">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 hover:bg-slate-50 text-slate-500 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">BDT</span>
                  <span className="text-sm font-black text-slate-900">
                    {subtotal.toLocaleString()}
                  </span>
                  <button className="ml-2 p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Discount Code */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Discount Code
              </h3>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-emerald-700 tracking-wide">
                      SHOPLIXYFREE
                    </span>
                    <span className="text-sm text-emerald-600">—</span>
                    <span className="text-sm text-emerald-700 font-medium">
                      -৳0 + Free Shipping
                    </span>
                  </div>
                </div>
                <button className="text-xs font-bold text-rose-500 hover:text-rose-600 transition-colors">
                  Remove
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center text-slate-500">
                <span className="text-sm font-medium uppercase tracking-widest text-[10px]">
                  Subtotal
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold tracking-tight">BDT</span>
                  <span className="text-sm font-bold text-slate-900">
                    {subtotal.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center text-slate-500">
                <span className="text-sm font-medium uppercase tracking-widest text-[10px]">
                  Shipping Cost
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold tracking-tight">BDT</span>
                  <span className="text-sm font-bold text-slate-900">{shipping}</span>
                </div>
              </div>

              <div className="h-px bg-slate-100 my-2" />

              <div className="flex justify-between items-center">
                <span className="text-lg font-black text-slate-900 uppercase tracking-tighter">
                  Total
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-black tracking-tighter text-slate-400">
                    BDT
                  </span>
                  <span className="text-xl font-black text-slate-900">
                    {total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Payment method
              </h3>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center justify-between">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" checked readOnly className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-slate-300 rounded-full flex items-center justify-center transition-all peer-checked:border-slate-900">
                      <div className="w-2.5 h-2.5 bg-slate-900 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-900">Cash On Delivery</span>
                </label>
                <div className="bg-white p-2 rounded-lg border border-slate-100">
                  <Image
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cash%20on%20delivery%20logo%20modern%20minimalist&image_size=landscape_4_3"
                    alt="COD"
                    width={40}
                    height={30}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
