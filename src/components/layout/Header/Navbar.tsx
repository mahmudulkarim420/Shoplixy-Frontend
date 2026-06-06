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

  const allProducts = [
    ...featuredProducts,
    ...latestMouse,
    ...latestKeyboard,
    ...dailyDealsProducts,
  ];

  const suggestions = searchQuery.trim()
    ? allProducts
        .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 6)
    : [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

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
    setIsMobileSearchOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-[0_1px_20px_rgb(0_0_0/0.07)] border-b border-slate-100"
          : "border-b border-slate-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[68px] lg:gap-8">
          {/* ── Logo ── */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="group flex items-center gap-2.5">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl md:h-10 md:w-10"
                style={{
                  background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
                  boxShadow: "0 2px 10px rgb(99 102 241 / 0.3)",
                }}
              >
                <Sparkles size={17} className="text-white" />
              </div>
              <span
                className="text-lg font-extrabold tracking-tight text-slate-900 md:text-xl"
                style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.03em" }}
              >
                Shoplixy
              </span>
            </Link>
          </div>

          {/* ── Desktop Search ── */}
          <div className="hidden flex-1 max-w-xl relative md:block lg:max-w-2xl" ref={searchRef}>
            <div className="relative">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search products, brands and more…"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-10 pr-12 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 lg:py-3"
                style={{ fontFamily: "var(--sl-font-body)" }}
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 flex items-center justify-center rounded-lg transition-colors duration-200 btn-press lg:right-2.5"
                style={{ background: "var(--sl-primary-600)" }}
              >
                <Search size={14} className="text-white" />
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && searchQuery.trim() !== "" && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-[60] animate-fade-in-down">
                <div className="p-1.5">
                  {suggestions.length > 0 ? (
                    <>
                      <div
                        className="px-3 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-50 mb-1"
                        style={{ fontFamily: "var(--sl-font-sans)" }}
                      >
                        Suggestions
                      </div>
                      {suggestions.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleSuggestionClick(product.id)}
                          className="w-full flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl transition-colors group text-left"
                        >
                          <div className="w-11 h-11 bg-slate-50 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 p-1">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={44}
                              height={44}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4
                              className="text-sm font-semibold text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors"
                              style={{ fontFamily: "var(--sl-font-sans)" }}
                            >
                              {product.name}
                            </h4>
                            <p className="text-xs text-slate-500 mt-0.5">
                              BDT {(product.price * 100).toLocaleString()}
                            </p>
                          </div>
                          <Search
                            size={13}
                            className="text-slate-300 group-hover:text-indigo-400 transition-colors shrink-0"
                          />
                        </button>
                      ))}
                    </>
                  ) : (
                    <div className="p-6 flex flex-col items-center justify-center text-center">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-3 border border-slate-100">
                        <AlertCircle className="text-slate-400" size={20} />
                      </div>
                      <p
                        className="text-sm font-semibold text-slate-700"
                        style={{ fontFamily: "var(--sl-font-sans)" }}
                      >
                        No results found
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">Try a different search term</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── Actions ── */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors md:hidden ${
                isMobileSearchOpen
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Search size={19} />
            </button>

            {/* Offers — desktop lg+ */}
            <Link href="/offers" className="group hidden items-center gap-2.5 lg:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 group-hover:bg-rose-50 text-slate-600 group-hover:text-rose-500">
                <Gift size={20} strokeWidth={1.8} />
              </div>
              <div className="hidden flex-col xl:flex">
                <span
                  className="text-[13px] font-semibold leading-none text-slate-800 transition-colors group-hover:text-rose-500"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Offers
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">View deals</span>
              </div>
            </Link>

            {/* Account — desktop lg+ */}
            <Link href="/login" className="group hidden items-center gap-2.5 lg:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 group-hover:bg-slate-50 text-slate-600">
                <User size={20} strokeWidth={1.8} />
              </div>
              <div className="hidden flex-col xl:flex">
                <span
                  className="text-[13px] font-semibold leading-none text-slate-800"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Account
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">Sign in</span>
              </div>
            </Link>

            {/* Account icon — md..lg */}
            <Link
              href="/login"
              className="hidden h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-50 md:flex lg:hidden"
            >
              <User size={20} strokeWidth={1.8} />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-slate-50 md:w-auto md:px-2"
            >
              <div className="relative text-slate-700">
                <ShoppingCart size={21} strokeWidth={1.8} />
                {itemCount > 0 && (
                  <span
                    className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white leading-none"
                    style={{ background: "var(--sl-accent-500)" }}
                  >
                    {itemCount}
                  </span>
                )}
              </div>
              <div className="ml-2.5 hidden flex-col md:flex lg:hidden xl:flex">
                <span
                  className="text-[13px] font-semibold leading-none text-slate-800 group-hover:text-amber-600 transition-colors"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  Cart
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">{itemCount} items</span>
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* ── Mobile Search (Expandable) ── */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMobileSearchOpen ? "max-h-24 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative" ref={searchRef}>
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search products…"
              className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-9 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
            />
            {showSuggestions && searchQuery.trim() !== "" && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-[60]">
                <div className="p-1.5">
                  {suggestions.length > 0 ? (
                    suggestions.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleSuggestionClick(product.id)}
                        className="w-full flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl transition-colors text-left"
                      >
                        <div className="w-10 h-10 bg-slate-50 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 p-1">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4
                            className="text-xs font-semibold text-slate-900 line-clamp-1"
                            style={{ fontFamily: "var(--sl-font-sans)" }}
                          >
                            {product.name}
                          </h4>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            BDT {(product.price * 100).toLocaleString()}
                          </p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center">
                      <p
                        className="text-xs font-semibold text-slate-700"
                        style={{ fontFamily: "var(--sl-font-sans)" }}
                      >
                        No results found
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile Slide-in Menu ── */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-out sm:w-[320px] ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)" }}
              >
                <Sparkles size={15} className="text-white" />
              </div>
              <span
                className="font-extrabold text-slate-900 text-base tracking-tight"
                style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
              >
                Shoplixy
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-slate-50 rounded-xl transition-colors"
            >
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-140px)]">
            {[
              { href: "/", label: "Home" },
              {
                href: "/offers",
                label: "Offers & Deals",
                icon: <Gift size={17} className="text-rose-500" />,
              },
              {
                href: "/login",
                label: "My Account",
                icon: <User size={17} className="text-slate-500" />,
              },
              {
                href: "/cart",
                label: "Cart",
                icon: <ShoppingCart size={17} className="text-indigo-500" />,
              },
            ].map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 text-sm font-semibold"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                {icon}
                {label}
              </Link>
            ))}

            <div className="h-px bg-slate-100 my-3" />

            <div className="px-4 py-1">
              <span
                className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Company
              </span>
            </div>

            {[
              { href: "/about", label: "About Shoplixy" },
              { href: "/blogs", label: "Read Blogs" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-600 text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-slate-50 border-t border-slate-100">
            <p className="text-[11px] text-slate-400 text-center">
              © 2026 Shoplixy Bangladesh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
