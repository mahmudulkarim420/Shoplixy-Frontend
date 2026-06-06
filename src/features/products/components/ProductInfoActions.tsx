"use client";

import React, { useState } from "react";
import { ShoppingCart, Heart, Share2, Zap, Minus, Plus } from "lucide-react";

import { Product } from "@/types/product";
import { useCartStore } from "@/features/cart/store/cartStore";
import { useRouter } from "next/navigation";

interface ProductInfoActionsProps {
  product: Product;
  discountPercentage: number;
}

const ProductInfoActions = ({ product, discountPercentage }: ProductInfoActionsProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addItem } = useCartStore();
  const router = useRouter();

  const handleAddToCart = () => {
    addItem(product, selectedQuantity);
    // Custom notification would be better, but for now...
  };

  const handleBuyNow = () => {
    addItem(product, selectedQuantity);
    router.push("/checkout");
  };

  const isOutOfStock = product.stockStatus === "Out of Stock";

  return (
    <div className="space-y-8">
      {/* Price Section */}
      <div className="flex flex-col gap-1">
        <div
          className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-500 uppercase tracking-widest"
          style={{ fontFamily: "var(--sl-font-sans)" }}
        >
          Special Offer Price
        </div>
        <div className="flex items-baseline gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-slate-400">BDT</span>
            <span
              className="text-4xl font-black text-slate-900"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.03em" }}
            >
              {product.price.toLocaleString()}
            </span>
          </div>
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="flex items-center gap-2">
              <span className="text-lg text-slate-300 line-through font-semibold whitespace-nowrap">
                BDT {product.originalPrice.toLocaleString()}
              </span>
              <span className="px-2 py-0.5 bg-rose-50 text-rose-600 text-[11px] font-black rounded border border-rose-100 uppercase tracking-tighter">
                Save {discountPercentage}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="h-px bg-slate-50" />

      {/* Buy Controls */}
      <div className="space-y-6">
        {/* Quantity */}
        <div className="flex flex-col gap-3">
          <span
            className="text-[11px] font-black text-slate-400 uppercase tracking-widest"
            style={{ fontFamily: "var(--sl-font-sans)" }}
          >
            Select Quantity
          </span>
          <div className="flex items-center bg-slate-50 border border-slate-100 rounded-2xl p-1.5 w-fit">
            <button
              onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
              disabled={isOutOfStock}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm text-slate-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Minus size={16} />
            </button>
            <div
              className="w-12 text-center text-sm font-black text-slate-900"
              style={{ fontFamily: "var(--sl-font-sans)" }}
            >
              {selectedQuantity}
            </div>
            <button
              onClick={() => setSelectedQuantity(selectedQuantity + 1)}
              disabled={isOutOfStock}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm text-slate-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleBuyNow}
              disabled={isOutOfStock}
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-white font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed group"
              style={{
                background: isOutOfStock ? undefined : "var(--sl-primary-600)",
                fontFamily: "var(--sl-font-sans)",
              }}
              onMouseEnter={(e) =>
                !isOutOfStock &&
                ((e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-700)")
              }
              onMouseLeave={(e) =>
                !isOutOfStock &&
                ((e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-600)")
              }
            >
              <Zap size={18} className="fill-current transition-transform group-hover:scale-110" />
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-white border-2 border-slate-900 text-slate-900 font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all duration-300 active:scale-[0.98] disabled:border-slate-200 disabled:text-slate-300 disabled:cursor-not-allowed"
              style={{ fontFamily: "var(--sl-font-sans)" }}
            >
              <ShoppingCart size={18} strokeWidth={2} />
              Add to Cart
            </button>
          </div>

          <div className="flex gap-3">
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-slate-100 rounded-2xl text-xs font-bold text-slate-500 hover:bg-white hover:shadow-md hover:text-rose-500 transition-all group"
              style={{ background: "var(--sl-bg-subtle)" }}
            >
              <Heart size={16} className="group-hover:fill-rose-500 transition-all" />
              Add to Wishlist
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-slate-100 rounded-2xl text-xs font-bold text-slate-500 hover:bg-white hover:shadow-md hover:text-indigo-600 transition-all"
              style={{ background: "var(--sl-bg-subtle)" }}
            >
              <Share2 size={16} />
              Share Gear
            </button>
          </div>
        </div>
      </div>

      {/* Stock Info */}
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 rounded-2xl border border-slate-100">
        <div
          className={`w-2 h-2 rounded-full animate-pulse ${isOutOfStock ? "bg-rose-500" : "bg-emerald-500"}`}
        />
        <span
          className="text-[11px] font-bold text-slate-500 uppercase tracking-wider"
          style={{ fontFamily: "var(--sl-font-sans)" }}
        >
          Status:{" "}
          <span className={isOutOfStock ? "text-rose-600" : "text-emerald-600"}>
            {isOutOfStock ? "Sold Out" : "In Stock - Ready to Ship"}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProductInfoActions;
