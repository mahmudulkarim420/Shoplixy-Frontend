"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import { Product } from "@/types/product";
import { getCategoryProducts } from "@/lib/api/products";
import { ChevronDown, Search, Star, Filter, X, Grid, List, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";

const CategoryPage = () => {
  const params = useParams();
  const slug = params?.slug;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Price Low to High");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedAvailability, setSelectedAvailability] = useState("All Items");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const categorySlug = Array.isArray(slug) ? slug[0] : slug;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      if (categorySlug) {
        const data = await getCategoryProducts(categorySlug);
        setProducts(data);
      } else {
        const data = await getCategoryProducts("all");
        setProducts(data);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, [categorySlug]);

  const categoryName = useMemo(() => {
    return categorySlug?.toUpperCase() || "PREMIUM GEAR";
  }, [categorySlug]);

  const brands = useMemo(() => {
    const brandMap = new Map<string, number>();
    products.forEach((p) => {
      const brand = p.name.split(" ")[0];
      brandMap.set(brand, (brandMap.get(brand) || 0) + 1);
    });
    return Array.from(brandMap.entries()).map(([name, count]) => ({ name, count }));
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const brand = p.name.split(" ")[0];
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(brand);
      const matchesPrice = p.price >= priceRange.min && p.price <= priceRange.max;
      const matchesRating = !selectedRating || (p.rating ?? 0) >= selectedRating;
      const matchesAvailability =
        selectedAvailability === "All Items" ||
        (selectedAvailability === "In Stock" && p.stockStatus === "In Stock") ||
        (selectedAvailability === "Upcoming" && p.stockStatus === "Upcoming");

      return matchesSearch && matchesBrand && matchesPrice && matchesRating && matchesAvailability;
    });

    if (sortBy === "Price Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Customer Rating") {
      result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    }

    return result;
  }, [
    products,
    searchQuery,
    selectedBrands,
    priceRange,
    selectedRating,
    selectedAvailability,
    sortBy,
  ]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--sl-bg-subtle)" }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Header */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 mb-10 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full -mr-32 -mt-32 blur-3xl transition-transform group-hover:scale-110 duration-1000" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-indigo-600" />
                <span
                  className="text-[10px] font-black text-indigo-600 tracking-[0.3em] uppercase"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Curated Collection
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                {categoryName}
              </h1>
              <p className="mt-4 text-slate-500 font-medium max-w-lg leading-relaxed">
                Experience high-performance gear tailored for elite users. Verified quality,
                authentic brands, and exclusive Shoplixy priority shipping.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-5 py-2.5 bg-indigo-50 border border-indigo-100/50 rounded-2xl text-[11px] font-black text-indigo-600 uppercase tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                {filteredProducts.length} Gear Found
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white border border-slate-100 rounded-3xl p-4 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm sticky top-24 z-40">
          <div className="flex items-center gap-3 flex-grow max-w-md relative group">
            <Search
              size={18}
              className="absolute left-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search collection..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="relative" onMouseLeave={() => setShowSortDropdown(false)}>
              <button
                onMouseEnter={() => setShowSortDropdown(true)}
                className="flex items-center gap-4 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black text-slate-900 hover:border-indigo-600 transition-all group"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                <span className="text-slate-400 uppercase tracking-widest text-[9px]">
                  Sort By:
                </span>
                {sortBy}
                <ChevronDown
                  size={14}
                  className={`text-slate-400 transition-transform duration-300 ${showSortDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showSortDropdown && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-slate-100 rounded-2xl shadow-2xl p-2 z-[60] animate-in fade-in slide-in-from-top-2">
                  {["Price Low to High", "Price High to Low", "Customer Rating"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black transition-colors ${sortBy === option ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-3.5 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100 active:scale-95 transition-all"
            >
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-8 h-fit sticky top-48">
            {/* Filter Section: Brand */}
            <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">
              <h3
                className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center justify-between"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Identity
                <span className="w-1 h-1 bg-indigo-500 rounded-full" />
              </h3>
              <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {brands.map((brand) => (
                  <label
                    key={brand.name}
                    className="flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 border-2 rounded-lg flex items-center justify-center transition-all ${selectedBrands.includes(brand.name) ? "bg-indigo-600 border-indigo-600 shadow-md shadow-indigo-100" : "border-slate-200 bg-white group-hover:border-indigo-400"}`}
                        onClick={() => toggleBrand(brand.name)}
                      >
                        {selectedBrands.includes(brand.name) && (
                          <X size={12} className="text-white" strokeWidth={3} />
                        )}
                      </div>
                      <span
                        className={`text-[13px] font-bold transition-colors ${selectedBrands.includes(brand.name) ? "text-indigo-600" : "text-slate-500 group-hover:text-slate-900"}`}
                      >
                        {brand.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-100">
                      {brand.count}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Section: Price */}
            <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">
              <h3
                className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center justify-between"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Valuation
                <span className="w-1 h-1 bg-indigo-500 rounded-full" />
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                  <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Min
                  </span>
                  <input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange((prev) => ({ ...prev, min: Number(e.target.value) }))
                    }
                    className="w-full bg-transparent text-sm font-black text-slate-900 focus:outline-none"
                  />
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                  <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Max
                  </span>
                  <input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange((prev) => ({ ...prev, max: Number(e.target.value) }))
                    }
                    className="w-full bg-transparent text-sm font-black text-slate-900 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Filter Section: Rating */}
            <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">
              <h3
                className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center justify-between"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Satisfaction
                <span className="w-1 h-1 bg-indigo-500 rounded-full" />
              </h3>
              <div className="space-y-4">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center gap-3 group cursor-pointer">
                    <div
                      className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all ${selectedRating === rating ? "border-indigo-600 bg-indigo-600" : "border-slate-200 bg-white group-hover:border-indigo-400"}`}
                      onClick={() => setSelectedRating(rating)}
                    >
                      {selectedRating === rating && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill={i < rating ? "currentColor" : "none"}
                          className={i < rating ? "" : "text-slate-100"}
                        />
                      ))}
                      <span
                        className={`ml-2 text-[11px] font-black tracking-tight ${selectedRating === rating ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`}
                      >
                        & UP
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/5] bg-white border border-slate-100 rounded-3xl animate-pulse"
                  />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    price={product.price}
                    originalPrice={product.originalPrice}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-100 rounded-[3rem] p-16 md:p-24 text-center shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-slate-200">
                  <Search size={32} />
                </div>
                <h3
                  className="text-2xl font-black text-slate-900 mb-2"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Gear Missing In Action
                </h3>
                <p className="text-slate-400 font-medium max-w-xs mx-auto mb-10">
                  We couldn't find any products matching your current tactical filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedBrands([]);
                    setPriceRange({ min: 0, max: 100000 });
                    setSelectedRating(null);
                    setSelectedAvailability("All Items");
                  }}
                  className="px-8 py-3.5 bg-indigo-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                >
                  Reset Tactical View
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-full sm:w-[380px] bg-white p-8 animate-slide-in-right overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-10">
              <h2
                className="text-2xl font-black text-slate-900 uppercase tracking-tight"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Refine Search
              </h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-3 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Filter Content - reusing patterns */}
            <div className="space-y-10 pb-32">
              {/* Identity */}
              <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                  Master Brands
                </h3>
                <div className="space-y-5">
                  {brands.map((brand) => (
                    <label
                      key={brand.name}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-6 h-6 border-2 rounded-xl flex items-center justify-center transition-all ${selectedBrands.includes(brand.name) ? "bg-indigo-600 border-indigo-600 shadow-lg shadow-indigo-100" : "border-slate-200"}`}
                          onClick={() => toggleBrand(brand.name)}
                        >
                          {selectedBrands.includes(brand.name) && (
                            <X size={12} className="text-white" strokeWidth={4} />
                          )}
                        </div>
                        <span
                          className={`text-[15px] font-bold ${selectedBrands.includes(brand.name) ? "text-indigo-600" : "text-slate-600"}`}
                        >
                          {brand.name}
                        </span>
                      </div>
                      <span className="text-xs font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-xl border border-slate-100">
                        {brand.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Valuation */}
              <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                  Price Ceiling
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <span className="block text-[8px] font-black text-slate-300 uppercase mb-1">
                      Min BDT
                    </span>
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange((prev) => ({ ...prev, min: Number(e.target.value) }))
                      }
                      className="bg-transparent w-full text-base font-black text-slate-900 focus:outline-none"
                    />
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <span className="block text-[8px] font-black text-slate-300 uppercase mb-1">
                      Max BDT
                    </span>
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange((prev) => ({ ...prev, max: Number(e.target.value) }))
                      }
                      className="bg-transparent w-full text-base font-black text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-white border-t border-slate-50 grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setSelectedBrands([]);
                  setPriceRange({ min: 0, max: 100000 });
                  setSelectedRating(null);
                  setSelectedAvailability("All Items");
                }}
                className="flex items-center justify-center font-bold text-slate-400 uppercase text-[10px] tracking-widest"
              >
                Deactivate All
              </button>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="py-5 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl shadow-indigo-100 active:scale-95 transition-all"
              >
                Confirm Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
