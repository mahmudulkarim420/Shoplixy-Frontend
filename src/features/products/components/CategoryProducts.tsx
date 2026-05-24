"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import { Product } from "@/types/product";
import { getCategoryProducts } from "@/lib/api/products";
import { ChevronDown, Search, Star, Filter, X } from "lucide-react";
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
        // If no slug, maybe show all?
        const data = await getCategoryProducts("all");
        setProducts(data);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, [categorySlug]);

  const categoryName = useMemo(() => {
    return categorySlug?.toUpperCase() || "PRODUCTS";
  }, [categorySlug]);

  const brands = useMemo(() => {
    const brandMap = new Map<string, number>();
    products.forEach((p) => {
      const brand = p.name.split(" ")[0]; // Very basic brand extraction
      brandMap.set(brand, (brandMap.get(brand) || 0) + 1);
    });
    return Array.from(brandMap.entries()).map(([name, count]) => ({ name, count }));
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const brand = p.name.split(" ")[0];
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(brand);
      
      // Handle price conversion if needed (assuming p.price is in USD and we show BDT)
      const price = p.price * 100;
      const matchesPrice = price >= priceRange.min && price <= priceRange.max;
      
      const matchesRating = !selectedRating || (p.rating ?? 0) >= selectedRating;
      const matchesAvailability =
        selectedAvailability === "All Items" ||
        (selectedAvailability === "In Stock" && p.stockStatus === "In Stock") ||
        (selectedAvailability === "Upcoming" && p.stockStatus === "Upcoming");

      return (
        matchesSearch && matchesBrand && matchesPrice && matchesRating && matchesAvailability
      );
    });

    // Sorting
    if (sortBy === "Price Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Customer Rating") {
      result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    }

    return result;
  }, [products, searchQuery, selectedBrands, priceRange, selectedRating, selectedAvailability, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Header Section - Better alignment with navbar */}
        <div className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
            
              <span className="text-[10px] font-black text-slate-400 tracking-[0.3em]">
                Explore Category
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              {categoryName}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider">
                {isLoading ? "Loading..." : `${filteredProducts.length} items found`}
              </span>
            </div>

            {/* In-page Search Bar */}
            <div className="relative group flex-1 min-w-[220px] md:max-w-[300px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search within this category..."
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:bg-white transition-all shadow-xs"
              />
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="relative" onMouseLeave={() => setShowSortDropdown(false)}>
                <button 
                  onMouseEnter={() => setShowSortDropdown(true)}
                  className="flex items-center justify-between gap-4 px-6 py-3.5 bg-white border border-slate-100 rounded-2xl text-sm font-black text-slate-900 hover:border-slate-900 transition-all shadow-sm group"
                >
                  <span className="text-slate-400 uppercase text-[10px] tracking-widest">Sort:</span>
                  <span className="group-hover:text-slate-600">{sortBy}</span>
                  <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${showSortDropdown ? "rotate-180" : ""}`} />
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
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black transition-colors ${sortBy === option ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-4 bg-slate-900 text-white rounded-2xl shadow-xl shadow-slate-200 active:scale-95 transition-all"
            >
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-8">
            {/* Brand Filter */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-7 shadow-sm">
              <h3 className="text-[14px] font-black text-slate-900  mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                Brand
              </h3>
              <div className="space-y-4 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
                {brands.length > 0 ? brands.map((brand) => (
                  <label
                    key={brand.name}
                    className="flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 border-2 rounded-xl flex items-center justify-center transition-all ${selectedBrands.includes(brand.name) ? "bg-slate-900 border-slate-900" : "border-slate-100 bg-slate-50 group-hover:border-slate-300"}`}>
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={selectedBrands.includes(brand.name)}
                          onChange={() => toggleBrand(brand.name)}
                        />
                        {selectedBrands.includes(brand.name) && <X size={14} className="text-white" />}
                      </div>
                      <span className={`text-[13px] font-bold transition-colors ${selectedBrands.includes(brand.name) ? "text-slate-900" : "text-slate-500 group-hover:text-slate-800"}`}>
                        {brand.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg group-hover:bg-slate-100 transition-colors border border-slate-100">
                      {brand.count}
                    </span>
                  </label>
                )) : (
                  <p className="text-xs font-bold text-slate-400 italic py-4">No brands available</p>
                )}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-7 shadow-sm">
              <h3 className="text-[14px] font-black text-slate-900  mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                Price Range
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center group focus-within:ring-2 focus-within:ring-slate-200 transition-all">
                    <span className="block text-[8px] font-black text-slate-400  mb-1.5">
                      Min BDT
                    </span>
                    <input 
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                      className="w-full bg-transparent text-center text-sm font-black text-slate-900 focus:outline-none"
                    />
                  </div>
                  <div className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center group focus-within:ring-2 focus-within:ring-slate-200 transition-all">
                    <span className="block text-[8px] font-black text-slate-400  mb-1.5">
                      Max BDT
                    </span>
                    <input 
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                      className="w-full bg-transparent text-center text-sm font-black text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-7 shadow-sm">
              <h3 className="text-[14px] font-black text-slate-900  mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                Rating
              </h3>
              <div className="space-y-5">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center gap-4 group cursor-pointer">
                    <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${selectedRating === rating ? "border-slate-900" : "border-slate-100 bg-slate-50 group-hover:border-slate-300"}`}>
                      {selectedRating === rating && <div className="w-2.5 h-2.5 bg-slate-900 rounded-full" />}
                      <input 
                        type="radio" 
                        name="rating" 
                        className="hidden" 
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                      />
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          fill={i < rating ? "currentColor" : "none"}
                          className={i < rating ? "" : "text-slate-100"}
                        />
                      ))}
                      <span className={`ml-2 text-xs font-black tracking-tight transition-colors ${selectedRating === rating ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"}`}>
                        & up
                      </span>
                    </div>
                  </label>
                ))}
                <button 
                  onClick={() => setSelectedRating(null)}
                  className="text-[10px] font-black text-slate-400 hover:text-rose-500 uppercase tracking-widest pt-2 transition-colors w-full text-left"
                >
                  Clear Selection
                </button>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-7 shadow-sm">
              <h3 className="text-[14px] font-black text-slate-900  mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                Availability
              </h3>
              <div className="space-y-5">
                {["All Items", "In Stock", "Upcoming"].map((status) => (
                  <label key={status} className="flex items-center gap-4 group cursor-pointer">
                    <div
                      className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${selectedAvailability === status ? "border-slate-900" : "border-slate-100 bg-slate-50 group-hover:border-slate-300"}`}
                    >
                      {selectedAvailability === status && (
                        <div className="w-2.5 h-2.5 bg-slate-900 rounded-full" />
                      )}
                      <input 
                        type="radio" 
                        name="availability" 
                        className="hidden" 
                        checked={selectedAvailability === status}
                        onChange={() => setSelectedAvailability(status)}
                      />
                    </div>
                    <span className={`text-[13px] font-bold transition-colors ${selectedAvailability === status ? "text-slate-900" : "text-slate-500 group-hover:text-slate-800"}`}>
                      {status}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Grid Area */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-slate-50 rounded-[2.5rem] h-[400px] animate-pulse" />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 animate-in fade-in duration-500">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    price={product.price * 100}
                    originalPrice={product.originalPrice ? product.originalPrice * 100 : undefined}
                    stockStatus={product.stockStatus}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-slate-50 rounded-[3rem] p-16 md:p-24 text-center border-2 border-dashed border-slate-100">
                <div className="w-24 h-24 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center mx-auto mb-10">
                  <Search size={40} className="text-slate-200" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">No products found</h3>
                <p className="text-slate-500 font-bold max-w-sm mx-auto mb-10 leading-relaxed">
                  We couldn't find any products matching your current filters in the <span className="text-slate-900">{categoryName}</span> category.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedBrands([]);
                    setPriceRange({ min: 0, max: 100000 });
                    setSelectedRating(null);
                    setSelectedAvailability("All Items");
                  }}
                  className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl active:scale-95"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {!isLoading && filteredProducts.length > 0 && (
              <div className="mt-20 flex items-center justify-center gap-4">
                <button className="px-8 py-4 text-[11px] font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
                  Prev
                </button>
                <div className="flex items-center gap-3">
                  <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 text-white text-sm font-black shadow-2xl shadow-slate-200">
                    1
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-100 text-slate-400 text-sm font-black hover:border-slate-900 hover:text-slate-900 transition-all">
                    2
                  </button>
                </div>
                <button className="px-8 py-4 text-[11px] font-black text-slate-900 hover:text-slate-600 transition-colors uppercase tracking-widest">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md lg:hidden animate-fade-in" onClick={() => setIsSidebarOpen(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[360px] bg-white p-8 shadow-2xl animate-slide-in-right overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Filters</h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">Refine your results</p>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-4 hover:bg-slate-50 rounded-[1.5rem] transition-colors border border-slate-100"
              >
                <X size={24} className="text-slate-900" />
              </button>
            </div>

            {/* Filter Content - Mobile */}
            <div className="space-y-12 pb-32">
              {/* Brand Filter */}
              <div>
                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                  Brand
                </h3>
                <div className="space-y-5">
                  {brands.map((brand) => (
                    <label
                      key={brand.name}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 border-2 rounded-xl flex items-center justify-center transition-all ${selectedBrands.includes(brand.name) ? "bg-slate-900 border-slate-900" : "border-slate-100 bg-slate-50"}`}>
                          <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={selectedBrands.includes(brand.name)}
                            onChange={() => toggleBrand(brand.name)}
                          />
                          {selectedBrands.includes(brand.name) && <X size={14} className="text-white" />}
                        </div>
                        <span className={`text-sm font-bold ${selectedBrands.includes(brand.name) ? "text-slate-900" : "text-slate-600"}`}>{brand.name}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                        {brand.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                  Price Range
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                    <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Min BDT</span>
                    <input 
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                      className="w-full bg-transparent text-center text-sm font-black text-slate-900 focus:outline-none"
                    />
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                    <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Max BDT</span>
                    <input 
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                      className="w-full bg-transparent text-center text-sm font-black text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Availability - Mobile */}
              <div>
                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                  Availability
                </h3>
                <div className="space-y-5">
                  {["All Items", "In Stock", "Upcoming"].map((status) => (
                    <label key={status} className="flex items-center gap-4 group cursor-pointer">
                      <div
                        className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${selectedAvailability === status ? "border-slate-900" : "border-slate-100 bg-slate-50"}`}
                      >
                        {selectedAvailability === status && (
                          <div className="w-2.5 h-2.5 bg-slate-900 rounded-full" />
                        )}
                        <input 
                          type="radio" 
                          className="hidden" 
                          checked={selectedAvailability === status}
                          onChange={() => setSelectedAvailability(status)}
                        />
                      </div>
                      <span className={`text-sm font-bold ${selectedAvailability === status ? "text-slate-900" : "text-slate-600"}`}>{status}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Footer Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-white border-t border-slate-100 grid grid-cols-2 gap-4">
              <button 
                onClick={() => {
                  setSelectedBrands([]);
                  setPriceRange({ min: 0, max: 100000 });
                  setSelectedRating(null);
                  setSelectedAvailability("All Items");
                }}
                className="py-5 text-xs font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors"
              >
                Reset
              </button>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="py-5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl shadow-slate-200 active:scale-95 transition-all"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
