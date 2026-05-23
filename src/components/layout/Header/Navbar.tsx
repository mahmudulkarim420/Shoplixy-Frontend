"use client";

import { Search, User, ShoppingCart, Menu, X, Sparkles, Gift, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  featuredProducts,
  latestMouse,
  latestKeyboard,
  dailyDealsProducts,
} from "@/data/sampleProducts";
import Image from "next/image";
import { useCartStore } from "@/features/cart/store/cartStore";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const cartItems = useCartStore((state) => state.items);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const itemCount = mounted ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  // Combine all products for searching
  const allProducts = [
    ...featuredProducts,
    ...latestMouse,
    ...latestKeyboard,
    ...dailyDealsProducts,
  ];

  // Filter products based on query
  const suggestions = searchQuery.trim()
    ? allProducts
        .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 6) // Limit to 6 suggestions
    : [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);

    // Close suggestions when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Body scroll lock for mobile menu
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleSuggestionClick = (productId: string) => {
    router.push(`/product/${productId}`);
    setSearchQuery("");
    setShowSuggestions(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shadow-sm group-hover:shadow-slate-200 transition-all duration-300">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">Shoplixy</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative" ref={searchRef}>
            <div className="relative group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search for products, brands and more..."
                className="w-full pl-5 pr-12 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent focus:bg-white transition-all duration-200"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 hover:bg-slate-800 rounded-xl flex items-center justify-center transition-colors duration-200 btn-press">
                <Search size={15} className="text-white" />
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && searchQuery.trim() !== "" && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2">
                  {suggestions.length > 0 ? (
                    <>
                      <div className="px-3 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 mb-1">
                        Product Suggestions
                      </div>
                      {suggestions.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleSuggestionClick(product.id)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors group text-left"
                        >
                          <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200 p-1">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={100}
                              height={100}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=electronics%20product%20placeholder&image_size=square";
                              }}
                            />
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-slate-600 transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-xs font-black text-slate-400">
                              BDT {(product.price * 100).toLocaleString()}
                            </p>
                          </div>
                          <Search
                            size={14}
                            className="text-slate-300 group-hover:text-slate-900 transition-colors"
                          />
                        </button>
                      ))}
                    </>
                  ) : (
                    <div className="p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-3">
                        <AlertCircle className="text-rose-500" size={24} />
                      </div>
                      <p className="text-sm font-bold text-slate-900">Product Not Available</p>
                      <p className="text-xs text-slate-500 mt-1">
                        We couldn't find anything matching "{searchQuery}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Action Icons - Standardized horizontal layout */}
          <div className="flex items-center gap-6 shrink-0">
            {/* Offers */}
            <Link href="/offers" className="flex items-center gap-3 group">
              <div className="text-slate-900 group-hover:scale-110 transition-transform duration-200">
                <Gift size={24} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-none group-hover:text-rose-500 transition-colors">
                  Offers
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Latest Offers</span>
              </div>
            </Link>

            {/* Account */}
            <Link href="/login" className="flex items-center gap-3 group">
              <div className="text-slate-900 group-hover:scale-110 transition-transform duration-200">
                <User size={24} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-none group-hover:text-slate-600 transition-colors">
                  Account
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Login or Register</span>
              </div>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="flex items-center gap-3 group">
              <div className="relative text-slate-900 group-hover:scale-110 transition-transform duration-200">
                <ShoppingCart size={24} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold leading-none animate-pulse-soft">
                  {itemCount}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-none group-hover:text-amber-600 transition-colors">
                  Cart
                </span>
                <span className="text-[11px] text-slate-500 font-medium">{itemCount} items</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center">
                <Sparkles size={15} className="text-white" />
              </div>
              <span className="text-lg font-extrabold text-slate-900">Shoplixy</span>
            </Link>

            {/* Mobile Actions */}
            <div className="flex items-center gap-1">
              {/* Search Toggle */}
              <button
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className={`p-2 rounded-xl transition-colors ${isMobileSearchOpen ? "bg-slate-100 text-slate-900" : "hover:bg-slate-50 text-slate-600"}`}
              >
                <Search size={20} />
              </button>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative p-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <ShoppingCart size={20} className="text-slate-600" />
                <span className="absolute top-1 right-1 bg-rose-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              </Link>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Menu size={20} className="text-slate-700" />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileSearchOpen ? "max-h-20 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={16} />
              </button>

              {/* Mobile Suggestions Overlay */}
              {showSuggestions && searchQuery.trim() !== "" && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-[60]">
                  <div className="p-2">
                    {suggestions.length > 0 ? (
                      suggestions.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleSuggestionClick(product.id)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left"
                        >
                          <div className="w-10 h-10 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200 p-1">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={100}
                              height={100}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=electronics%20product%20placeholder&image_size=square";
                              }}
                            />
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                              {product.name}
                            </h4>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="p-4 text-center">
                        <p className="text-xs font-bold text-slate-900">Not Available</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right-side Slide-in Menu */}
          <div
            className={`fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className={`absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <span className="font-black text-slate-900 uppercase tracking-widest text-sm">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <X size={20} className="text-slate-900" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-4 space-y-2">
                <Link
                  href="/offers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 text-sm font-bold group"
                >
                  <Gift
                    size={20}
                    className="text-rose-500 group-hover:scale-110 transition-transform"
                  />
                  Latest Offers
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 text-sm font-bold group"
                >
                  <User
                    size={20}
                    className="text-slate-900 group-hover:scale-110 transition-transform"
                  />
                  My Account
                </Link>
                <div className="h-px bg-slate-100 my-4" />
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 text-sm font-bold"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
