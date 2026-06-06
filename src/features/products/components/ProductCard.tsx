"use client";

import { ShoppingCart, X, Eye } from "lucide-react";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<"buy" | "cart" | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>("Red");

  const handleCardClick = () => router.push(`/product/${id}`);

  const savedAmount = originalPrice && originalPrice > price ? originalPrice - price : 0;
  const discountPct =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  const handleOpenModal = (e: React.MouseEvent, type: "buy" | "cart") => {
    e.stopPropagation();
    setActionType(type);
    setIsModalOpen(true);
  };

  const handleModalSubmit = () => {
    addItem(product, 1);
    setIsModalOpen(false);
    if (actionType === "buy") {
      router.push("/checkout");
    }
  };

  const isDisabled = stockStatus === "Out of Stock" || stockStatus === "Upcoming";

  /* Stock badge colours */
  const stockStyle: Record<string, { bg: string; color: string }> = {
    "In Stock": { bg: "#dcfce7", color: "#15803d" },
    Upcoming: { bg: "#dbeafe", color: "#1d4ed8" },
    "Out of Stock": { bg: "#fee2e2", color: "#dc2626" },
  };
  const sc = stockStyle[stockStatus] ?? stockStyle["In Stock"];

  return (
    <>
      <div
        onClick={handleCardClick}
        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white product-card"
      >
        {/* ── Badges ── */}
        <div className="absolute left-0 top-3 z-20 flex flex-col gap-1.5 items-start">
          {discountPct > 0 && (
            <div
              className="rounded-r-full px-2.5 py-1 text-[10px] font-bold text-white leading-none shadow-sm"
              style={{ background: "var(--sl-accent-500)" }}
            >
              -{discountPct}%
            </div>
          )}
          <div
            className="rounded-r-full px-2.5 py-1 text-[10px] font-semibold leading-none"
            style={{ background: sc.bg, color: sc.color }}
          >
            {stockStatus}
          </div>
        </div>

        {/* ── Quick View (desktop hover) ── */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/product/${id}`);
          }}
          className="absolute right-3 top-3 z-20 h-8 w-8 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:border-slate-300 hover:text-slate-900 shadow-sm hidden md:flex"
        >
          <Eye size={15} />
        </button>

        {/* ── Image ── */}
        <div className="relative aspect-square w-full overflow-hidden bg-slate-50 p-3 sm:p-5">
          <div className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.07]">
            <Image
              src={image}
              alt={name}
              width={220}
              height={220}
              className="h-full w-full object-contain mix-blend-multiply"
              loading="lazy"
            />
          </div>

          {/* Hover action buttons — desktop */}
          <div className="absolute inset-x-3 bottom-3 z-20 hidden gap-2 opacity-0 transition-all duration-250 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 md:flex">
            <button
              disabled={isDisabled}
              onClick={(e) => handleOpenModal(e, "buy")}
              className="flex-1 bg-white text-slate-800 py-2 rounded-xl text-xs font-semibold shadow-md hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed border border-slate-200"
              style={{ fontFamily: "var(--sl-font-sans)" }}
            >
              Buy Now
            </button>
            <button
              disabled={isDisabled}
              onClick={(e) => handleOpenModal(e, "cart")}
              className="flex-1 text-white py-2 rounded-xl text-xs font-semibold shadow-md transition-colors flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "var(--sl-primary-600)", fontFamily: "var(--sl-font-sans)" }}
              onMouseEnter={(e) =>
                !isDisabled &&
                ((e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-700)")
              }
              onMouseLeave={(e) =>
                !isDisabled &&
                ((e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-600)")
              }
            >
              <ShoppingCart size={13} />
              Add to Cart
            </button>
          </div>
        </div>

        {/* ── Info ── */}
        <div className="flex flex-grow flex-col p-3.5 sm:p-4">
          <h3
            className="mb-2.5 line-clamp-2 min-h-[2.5rem] text-xs font-medium leading-snug text-slate-700 transition-colors group-hover:text-slate-900 sm:text-sm"
            style={{ fontFamily: "var(--sl-font-body)" }}
          >
            {name}
          </h3>

          <div className="mt-auto flex flex-col gap-2">
            {/* Price row */}
            <div className="flex flex-wrap items-baseline gap-1.5">
              <span
                className="text-base font-bold text-slate-900 sm:text-lg"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                <span className="text-[10px] font-medium text-slate-400 mr-0.5">BDT</span>
                {price.toLocaleString()}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-xs text-slate-400 line-through">
                  {originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="flex gap-1.5 md:hidden">
              <button
                disabled={isDisabled}
                onClick={(e) => handleOpenModal(e, "cart")}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-[10px] font-semibold text-white active:scale-95 disabled:opacity-40 transition-transform"
                style={{
                  background: isDisabled ? "#94a3b8" : "var(--sl-primary-600)",
                  fontFamily: "var(--sl-font-sans)",
                }}
              >
                <ShoppingCart size={11} />
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Variant Modal ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-sm animate-scale-in overflow-hidden rounded-2xl bg-white shadow-2xl md:max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div>
                <h2
                  className="text-base font-bold text-slate-900"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Select Variant
                </h2>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{name}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X size={18} className="text-slate-400" />
              </button>
            </div>

            {/* Variants */}
            <div className="px-5 py-4">
              <p
                className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Color
              </p>
              <div className="flex flex-wrap gap-2">
                {["Red", "Blue", "Black", "White"].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className="rounded-xl border px-4 py-2.5 text-sm font-medium transition-all"
                    style={{
                      borderColor:
                        selectedVariant === variant ? "var(--sl-primary-500)" : "#e2e8f0",
                      background: selectedVariant === variant ? "var(--sl-primary-50)" : "#fff",
                      color: selectedVariant === variant ? "var(--sl-primary-700)" : "#475569",
                      fontFamily: "var(--sl-font-sans)",
                    }}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="grid grid-cols-2 gap-2.5 bg-slate-50 px-5 py-4 border-t border-slate-100">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all"
                style={{ background: "var(--sl-primary-600)", fontFamily: "var(--sl-font-sans)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-700)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-600)";
                }}
              >
                <ShoppingCart size={16} />
                {actionType === "buy" ? "Buy Now" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
