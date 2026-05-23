"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import { Product } from "@/types/product";
import { getCategoryProducts } from "@/lib/api/products";
import { ChevronDown, Search, Star, Filter, X } from "lucide-react";
import ProductCard from "./ProductCard";

const CategoryPage = () => {
  const { slug } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Price Low to High");
  const [searchQuery, setSearchQuery] = useState("");

  const [products, setProducts] = useState<Product[]>([]);

  const categorySlug = Array.isArray(slug) ? slug[0] : slug;

  useEffect(() => {
    const fetchProducts = async () => {
      if (categorySlug) {
        const data = await getCategoryProducts(categorySlug);
        setProducts(data);
      }
    };
    fetchProducts();
  }, [categorySlug]);

  const categoryName = useMemo(() => {
    return categorySlug?.toUpperCase() || "PRODUCTS";
  }, [categorySlug]);

  const brands = [
    { name: "Attack Shark", count: 1 },
    { name: "Aula", count: 2 },
    { name: "Bajeal", count: 1 },
    { name: "E-Yooso", count: 2 },
    { name: "Fantech", count: 1 },
    { name: "GravaStar", count: 1 },
    { name: "Keyronix", count: 1 },
    { name: "Logitech", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header Section */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase">
            {categoryName}
          </h1>

          <div className="flex items-center justify-between md:justify-end gap-4 md:gap-8">
            <span className="text-sm font-bold text-slate-400 whitespace-nowrap">
              {products.length} products
            </span>

            {/* In-page Search Bar */}
            <div className="relative group flex-1 max-w-full md:max-w-[240px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search in results..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:bg-white transition-all"
              />
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:block text-sm font-bold text-slate-900">Sort By:</span>
              <div className="relative group min-w-[160px]">
                <button className="w-full flex items-center justify-between gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-slate-900 transition-all">
                  {sortBy}
                  <ChevronDown size={16} className="text-slate-400" />
                </button>
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2.5 bg-slate-900 text-white rounded-xl shadow-md active:scale-95 transition-transform"
            >
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-10">
            {/* Brand Filter */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[13px] font-black text-slate-900 uppercase tracking-widest mb-5">
                Brand
              </h3>
              <div className="relative mb-5">
                <input
                  type="text"
                  placeholder="Search brands..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all"
                />
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                {brands.map((brand) => (
                  <label
                    key={brand.name}
                    className="flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-slate-200 rounded group-hover:border-slate-900 transition-colors flex items-center justify-center">
                        <input type="checkbox" className="hidden" />
                      </div>
                      <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                        {brand.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">
                      {brand.count}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[13px] font-black text-slate-900 uppercase tracking-widest mb-5">
                Price Range
              </h3>
              <div className="px-1">
                <div className="h-1.5 bg-slate-100 rounded-full relative mb-6">
                  <div className="absolute left-[10%] right-[20%] h-full bg-slate-900 rounded-full" />
                  <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-slate-900 rounded-full shadow-md cursor-pointer" />
                  <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-slate-900 rounded-full shadow-md cursor-pointer" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-2 text-center">
                    <span className="block text-[9px] font-black text-slate-400 uppercase mb-0.5">
                      Min
                    </span>
                    <span className="text-xs font-black text-slate-900 tracking-tight">
                      ৳ 2,250
                    </span>
                  </div>
                  <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-2 text-center">
                    <span className="block text-[9px] font-black text-slate-400 uppercase mb-0.5">
                      Max
                    </span>
                    <span className="text-xs font-black text-slate-900 tracking-tight">
                      ৳ 12,990
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[13px] font-black text-slate-900 uppercase tracking-widest mb-5">
                Rating
              </h3>
              <div className="space-y-4">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-5 h-5 border-2 border-slate-200 rounded-full group-hover:border-slate-900 transition-colors flex items-center justify-center">
                      <input type="radio" name="rating" className="hidden" />
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          fill={i < rating ? "currentColor" : "none"}
                          className={i < rating ? "" : "text-slate-100"}
                        />
                      ))}
                      <span className="ml-2 text-xs font-black text-slate-400 group-hover:text-slate-900 transition-colors tracking-tight">
                        & up
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[13px] font-black text-slate-900 uppercase tracking-widest mb-5">
                Availability
              </h3>
              <div className="space-y-4">
                {["All Items", "In Stock", "Upcoming"].map((status) => (
                  <label key={status} className="flex items-center gap-3 group cursor-pointer">
                    <div
                      className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all ${status === "All Items" ? "border-slate-900" : "border-slate-200 group-hover:border-slate-900"}`}
                    >
                      {status === "All Items" && (
                        <div className="w-2.5 h-2.5 bg-slate-900 rounded-full" />
                      )}
                      <input type="radio" name="availability" className="hidden" />
                    </div>
                    <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                      {status}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Offers */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[13px] font-black text-slate-900 uppercase tracking-widest mb-5">
                Offers
              </h3>
              <label className="flex items-center gap-3 group cursor-pointer">
                <div className="w-5 h-5 border-2 border-slate-200 rounded group-hover:border-slate-900 transition-colors flex items-center justify-center">
                  <input type="checkbox" className="hidden" />
                </div>
                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  On Sale
                </span>
              </label>
            </div>
          </aside>

          {/* Main Grid Area */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  price={product.price * 100} // Convering to BDT roughly
                  originalPrice={product.originalPrice ? product.originalPrice * 100 : undefined}
                  stockStatus="In Stock"
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex items-center justify-center gap-2">
              <button className="px-4 py-2.5 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
                Previous
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 text-white text-sm font-bold shadow-lg shadow-slate-200">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-600 text-sm font-bold hover:border-slate-900 transition-all">
                2
              </button>
              <button className="px-4 py-2.5 text-sm font-bold text-slate-900 hover:text-slate-600 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm lg:hidden animate-fade-in">
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-white p-6 shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-black text-slate-900 uppercase">Filters</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <X size={24} className="text-slate-900" />
              </button>
            </div>
            {/* Filter Content - Mobile */}
            <div className="overflow-y-auto h-[calc(100vh-120px)] space-y-10 pb-10 pr-2">
              {/* Reuse Desktop Sidebar Content here if needed, or implement separately */}
              <div>
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-5">
                  Brand
                </h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <label
                      key={brand.name}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-slate-200 rounded flex items-center justify-center">
                          <input type="checkbox" className="hidden" />
                        </div>
                        <span className="text-sm font-bold text-slate-600">{brand.name}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">
                        {brand.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability - Mobile */}
              <div>
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-5">
                  Availability
                </h3>
                <div className="space-y-3">
                  {["All Items", "In Stock", "Upcoming"].map((status) => (
                    <label key={status} className="flex items-center gap-3 group cursor-pointer">
                      <div
                        className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${status === "All Items" ? "border-slate-900" : "border-slate-200"}`}
                      >
                        {status === "All Items" && (
                          <div className="w-2.5 h-2.5 bg-slate-900 rounded-full" />
                        )}
                      </div>
                      <span className="text-sm font-bold text-slate-600">{status}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
