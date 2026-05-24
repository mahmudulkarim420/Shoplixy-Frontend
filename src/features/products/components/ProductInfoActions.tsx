"use client";

import React, { useState } from "react";
import { ShoppingCart, Heart, Share2, Truck, Shield, RefreshCw } from "lucide-react";

import { Product } from "@/types/product";

import { useCartStore } from "@/features/cart/store/cartStore";

import { useRouter } from "next/navigation";

interface ProductInfoActionsProps {
  product: Product;
  discountPercentage: number;
}

const ProductInfoActions = ({ product, discountPercentage }: ProductInfoActionsProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  const handleAddToCart = () => {
    addItem(product, selectedQuantity);
    alert("Added to cart successfully!");
  };

  const handleBuyNow = () => {
    addItem(product, selectedQuantity);
    router.push("/checkout");
  };

  return (
    <div className="space-y-6">
      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-slate-900">
          BDT {product.price.toLocaleString()}
        </span>
        {product.originalPrice && (
          <span className="text-lg text-slate-400 line-through">
            BDT {product.originalPrice.toLocaleString()}
          </span>
        )}
        {discountPercentage > 0 && (
          <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-bold rounded">
            {discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-slate-700">Quantity:</span>
        <div className="flex items-center border border-slate-300 rounded-lg">
          <button
            onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
            className="px-3 py-2 hover:bg-slate-100 transition-colors text-slate-600"
          >
            -
          </button>
          <span className="px-4 py-2 font-medium text-slate-900 min-w-[3rem] text-center">
            {selectedQuantity}
          </span>
          <button
            onClick={() => setSelectedQuantity(selectedQuantity + 1)}
            className="px-3 py-2 hover:bg-slate-100 transition-colors text-slate-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-200 active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Buy Now
        </button>
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-white border-2 border-slate-900 text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
        <div className="flex gap-2">
          <button className="px-4 py-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Heart size={20} className="text-slate-600" />
          </button>
          <button className="px-4 py-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Share2 size={20} className="text-slate-600" />
          </button>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Truck size={18} className="text-green-600" />
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Shield size={18} className="text-blue-600" />
          <span>2 Year Warranty</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <RefreshCw size={18} className="text-purple-600" />
          <span>Easy Returns</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoActions;
