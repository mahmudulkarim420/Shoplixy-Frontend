"use client";

import { ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Product } from "@/types/product";
import { useCartStore } from "@/features/cart/store/cartStore";

const ProductCard = (product: Product) => {
  const { id, name, price, originalPrice, image } = product;
  const stockStatus = product.stockStatus || "In Stock";
  const router = useRouter();

  const addItem = useCartStore((state) => state.addItem);

  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<"buy" | "cart" | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>("Red");

  // Handler for card click - redirect to product details
  const handleCardClick = () => {
    router.push(`/product/${id}`);
  };

  const savedAmount = originalPrice && originalPrice > price ? originalPrice - price : 0;

  // Handler for opening modal
  const handleOpenModal = (e: React.MouseEvent, type: "buy" | "cart") => {
    e.stopPropagation();
    setActionType(type);
    setIsModalOpen(true);
  };

  // Handler for final submit from Modal
  const handleModalSubmit = () => {
    // Add to cart via Zustand
    addItem(product, 1);
    console.log(`Product added to cart with variant: ${selectedVariant}`);

    // 2. Action onujayi Redirect ba Close kora
    if (actionType === "buy") {
      // Next.js use korle router.push('/cart') dibe
      window.location.href = "/cart";
    } else {
      // Shudhu cart e click korle modal bondho hobe, redirect hobe na
      setIsModalOpen(false);
      alert("Successfully added to cart!"); // Testing er jonno
    }
  };

  return (
    <>
      {/* ================= PRODUCT CARD ================= */}
      <div
        onClick={handleCardClick}
        className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer relative z-10"
      >
        {/* Top Badges */}
        <div className="absolute top-3 left-0 z-10 bg-black text-white px-2.5 py-1 text-[11px] font-bold rounded-r-md">
          Save : {savedAmount.toLocaleString()} BDT
        </div>
        <div
          className={`absolute top-3 right-0 z-10 px-2.5 py-1 text-[11px] font-bold rounded-l-md text-white ${
            stockStatus === "In Stock" ? "bg-[#00d664]" : 
            stockStatus === "Upcoming" ? "bg-blue-500" : "bg-red-500"
          }`}
        >
          {stockStatus}
        </div>

        {/* Image Area */}
        <div className="relative aspect-square w-full overflow-hidden bg-white p-4 flex items-center justify-center">
          <div className="w-full h-full bg-white rounded flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=electronics%20product%20placeholder&image_size=square";
              }}
            />
          </div>

          {/* Hover Overlay Actions */}
          <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <button
              disabled={stockStatus === "Out of Stock" || stockStatus === "Upcoming"}
              className="flex-1 bg-white text-slate-900 py-2.5 rounded-md text-xs font-bold shadow-md hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={(e) => handleOpenModal(e, "buy")}
            >
              Buy Now
            </button>
            <button
              disabled={stockStatus === "Out of Stock" || stockStatus === "Upcoming"}
              className="flex-1 bg-[#1a1f2b] text-white py-2.5 rounded-md text-xs font-bold shadow-md hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={(e) => handleOpenModal(e, "cart")}
            >
              <ShoppingCart size={14} /> Cart
            </button>
          </div>
        </div>

        {/* Info Area */}
        <div className="p-4 pt-3 flex flex-col flex-grow text-center">
          <h3 className="font-bold text-slate-800 text-[13px] leading-snug mb-3 line-clamp-2 group-hover:text-slate-900 transition-colors">
            {name}
          </h3>
          <div className="flex flex-col items-center gap-1 mt-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-bold text-slate-900">
                <span className="text-[11px] font-black mr-1 text-slate-400">BDT</span>
                {price.toLocaleString()}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-xs text-slate-400 line-through decoration-slate-300">
                  <span className="text-[10px] font-bold mr-0.5">BDT</span>
                  {originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= VARIANT MODAL ================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)} // Baire click korle close hobe
        >
          {/* Modal Container */}
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} // Modal er vitore click korle jeno close na hoy
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-800">Select Variant</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-slate-100 rounded-md transition-colors text-slate-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* Product Summary */}
            <div className="p-4 flex gap-4 border-b border-slate-100">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 border border-slate-200">
                {/* Thumbnail Image asbe ekhane */}
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-800 line-clamp-2">{name}</h3>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  <span className="text-xs font-normal text-slate-500 mr-1">BDT</span>
                  {price.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Variant Selection */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-slate-700">
                  Switch: <span className="font-bold text-black">{selectedVariant}</span>
                </p>
                <button className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded hover:bg-rose-100 transition-colors">
                  Clear Selection
                </button>
              </div>

              {/* Variant Buttons */}
              <div className="flex gap-2 mb-4">
                {["Red", "Blue", "Brown"].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${
                      selectedVariant === variant
                        ? "bg-black text-white border-black"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>

              {/* Stock Badge inside Modal */}
              <div className="inline-block px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                In Stock (13)
              </div>
            </div>

            {/* Modal Footer / Actions */}
            <div className="p-4 flex gap-3 bg-slate-50 border-t border-slate-100">
              <button
                onClick={handleModalSubmit}
                className="flex-1 bg-black text-white py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={16} />
                {actionType === "buy" ? "Add & Checkout" : "Add to Cart"}
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 bg-white text-slate-700 border border-slate-200 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
