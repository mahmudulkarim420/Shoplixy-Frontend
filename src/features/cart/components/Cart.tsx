"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, CheckCircle2 } from "lucide-react";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const subtotal = 2590;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side - Cart Items */}
          <div className="lg:col-span-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-8">Your Order</h1>

            {/* Cart Item Card */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Product Image with Badge */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-2">
                  <Image
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=mechanical%20keyboard%2060%25%20wireless%20RGB%20white%20color&image_size=square"
                    alt="Keyronix H61k"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                  1
                </span>
              </div>

              {/* Product Info */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-[17px] font-bold text-slate-900 leading-snug mb-1">
                  Keyronix H61k 60% Wireless Mechanical RGB keyboard
                </h3>
                <p className="text-sm text-cyan-600 font-medium">Blue</p>
              </div>

              {/* Quantity Selector & Price */}
              <div className="flex items-center gap-6 shrink-0">
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-slate-50 text-slate-500 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-12 text-center text-sm font-bold text-slate-900 border-x border-slate-200 py-2">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-slate-50 text-slate-500 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">BDT</span>
                  <span className="text-lg font-bold text-slate-900">
                    {subtotal.toLocaleString()}
                  </span>
                </div>

                <button className="p-2.5 text-rose-500 border border-rose-100 rounded-xl hover:bg-rose-50 transition-all duration-200">
                  <Trash2 size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className="lg:col-span-4 space-y-8">
            {/* Discount Code Section */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Discount Code</h3>
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-emerald-700 tracking-wide">
                      SHOPLIXYFREE
                    </span>
                    <span className="text-sm text-emerald-600/80">—</span>
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

            {/* Price Summary */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center text-slate-500">
                <span className="text-sm font-medium">Subtotal</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold tracking-tight">BDT</span>
                  <span className="text-sm font-bold text-slate-900">
                    {subtotal.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center text-slate-500">
                <span className="text-sm font-medium">Shipping Cost</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold tracking-tight">BDT</span>
                  <span className="text-sm font-bold text-slate-900">{shipping}</span>
                </div>
              </div>

              <div className="h-px bg-slate-100 my-2" />

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-slate-900">Total</span>
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

            {/* Buy Now Button */}
            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-[15px] hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-200 active:scale-[0.98]">
              Buy Now
            </button>
          </div>
        </div>
      </main>


    </div>
  );
};

export default CartPage;
