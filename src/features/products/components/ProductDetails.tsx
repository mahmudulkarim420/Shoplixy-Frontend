import Link from "next/link";
import { Star, ChevronRight, Share2, Heart, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import Image from "next/image";
import ProductTabs from "./ProductTabs";
import ProductInfoActions from "./ProductInfoActions";

import { getProductById } from "@/lib/api/products";

interface ProductDetailsPageProps {
  productId: string;
}

export default async function ProductDetailsPage({ productId }: ProductDetailsPageProps) {
  const product = await getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300">
            <ShieldCheck size={40} />
          </div>
          <h1
            className="text-2xl font-bold text-slate-900 mb-2"
            style={{ fontFamily: "var(--sl-font-sans)" }}
          >
            Product Not Found
          </h1>
          <p className="text-slate-500 mb-8">
            The elite gadget you are looking for has vanished from our inventory.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5"
            style={{ background: "var(--sl-primary-600)", fontFamily: "var(--sl-font-sans)" }}
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    );
  }

  const discountPercentage =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <div className="min-h-screen" style={{ background: "var(--sl-bg-subtle)" }}>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/shop" className="hover:text-indigo-600 transition-colors">
              Products
            </Link>
            <ChevronRight size={12} />
            <span className="text-slate-900 truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image Area */}
            <div className="p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-50">
              <div className="relative aspect-square w-full rounded-2xl bg-slate-50/50 flex items-center justify-center overflow-hidden border border-slate-100/50 group">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-contain p-8 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                  priority
                />

                {/* Image Overlay Tokens */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  {discountPercentage > 0 && (
                    <span className="px-3 py-1 bg-rose-500 text-white text-[11px] font-black rounded-full shadow-lg">
                      -{discountPercentage}%
                    </span>
                  )}
                  {product.badge && (
                    <span className="px-3 py-1 bg-white text-indigo-600 text-[11px] font-black rounded-full shadow-md border border-slate-100">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2.5 bg-white rounded-xl shadow-lg border border-slate-100 text-slate-400 hover:text-rose-500 transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="p-2.5 bg-white rounded-xl shadow-lg border border-slate-100 text-slate-400 hover:text-indigo-600 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-3 mt-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    className={`aspect-square rounded-xl border-2 transition-all flex items-center justify-center p-2 ${
                      i === 1
                        ? "border-indigo-600 bg-white"
                        : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} thumbnail ${i}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 text-[10px] font-bold text-amber-600">
                    <Star size={10} className="fill-current mr-1" />
                    BEST SELLER
                  </div>
                  <div
                    className="text-[10px] font-bold text-slate-400 uppercase tracking-widest"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Verified Category
                  </div>
                </div>

                <h1
                  className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight"
                  style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.03em" }}
                >
                  {product.name}
                </h1>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={`${
                          star <= Math.round(product.rating || 0)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-100 text-slate-100"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400 border-l border-slate-200 pl-4">
                    {product.reviewCount || 128} CUSTOMER REVIEWS
                  </span>
                </div>
              </div>

              <ProductInfoActions product={product} discountPercentage={discountPercentage} />

              <div className="mt-auto pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-50">
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto sm:mx-0">
                    <Truck size={16} />
                  </div>
                  <span
                    className="text-[11px] font-black text-slate-400 uppercase"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Fast Shipping
                  </span>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                    Nationwide delivery in 3-5 business days
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto sm:mx-0">
                    <ShieldCheck size={16} />
                  </div>
                  <span
                    className="text-[11px] font-black text-slate-400 uppercase"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Authentic Only
                  </span>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                    Direct from authorized global distributors
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mx-auto sm:mx-0">
                    <RefreshCw size={16} />
                  </div>
                  <span
                    className="text-[11px] font-black text-slate-400 uppercase"
                    style={{ fontFamily: "var(--sl-font-sans)" }}
                  >
                    Easy Returns
                  </span>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                    7-day hassle-free exchange policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <ProductTabs product={product} />
        </div>
      </div>
    </div>
  );
}
