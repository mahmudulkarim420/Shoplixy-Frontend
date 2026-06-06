"use client";

import {
  ChevronDown,
  Laptop,
  Shirt,
  Home,
  ShoppingCart,
  Sparkles,
  Gamepad2,
  Headphones,
} from "lucide-react";
import Link from "next/link";

const CategoryNavigation = () => {
  const categories = [
    {
      name: "Electronics",
      icon: Laptop,
      slug: "computer-electronics",
      subcategories: ["Laptops", "Desktops", "Monitors", "Printers", "Storage"],
    },
    {
      name: "Fashion",
      icon: Shirt,
      slug: "fashion-lifestyle",
      subcategories: ["Men's Clothing", "Women's Clothing", "Watches", "Bags"],
    },
    {
      name: "Home & Living",
      icon: Home,
      slug: "home-kitchen",
      subcategories: ["Kitchen Appliances", "Furniture", "Decor", "Bedding"],
    },
    {
      name: "Groceries",
      icon: ShoppingCart,
      slug: "groceries",
      subcategories: ["Fruits & Veg", "Dairy & Eggs", "Beverages", "Snacks"],
    },
    {
      name: "Beauty",
      icon: Sparkles,
      slug: "beauty-care",
      subcategories: ["Skincare", "Haircare", "Makeup", "Fragrance"],
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      slug: "gaming-gear",
      subcategories: ["Keyboards", "Mice", "Headsets", "Graphics Cards"],
    },
    {
      name: "Accessories",
      icon: Headphones,
      slug: "accessories",
      subcategories: ["Cables", "Adapters", "Cases", "Power Banks"],
    },
  ];

  return (
    <div className="bg-white border-b border-slate-100/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Mobile: Horizontal Scroll */}
        <nav className="flex items-center gap-1.5 py-2.5 overflow-x-auto scrollbar-hide md:hidden">
          {categories.map((cat, i) => {
            const IconComponent = cat.icon;
            return (
              <Link
                key={i}
                href={`/category/${cat.slug}`}
                className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-100 transition-all text-xs font-medium whitespace-nowrap"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                <IconComponent size={13} className="shrink-0" />
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop: Inline Nav */}
        <nav className="hidden md:flex items-center gap-0.5 py-1">
          {categories.map((cat, i) => {
            const IconComponent = cat.icon;
            return (
              <div key={i} className="relative group">
                <Link
                  href={`/category/${cat.slug}`}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150 font-medium text-[13px] lg:text-sm whitespace-nowrap nav-link"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  <IconComponent
                    size={16}
                    className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <span>{cat.name}</span>
                  <ChevronDown
                    size={13}
                    className="opacity-40 group-hover:opacity-80 group-hover:rotate-180 transition-all duration-250 ml-0.5"
                  />
                </Link>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50">
                  <div className="p-1.5">
                    <p
                      className="text-[10px] font-semibold text-slate-400 px-2.5 mb-1.5 pt-2 pb-1.5 uppercase tracking-widest border-b border-slate-50"
                      style={{ fontFamily: "var(--sl-font-sans)" }}
                    >
                      {cat.name}
                    </p>
                    <div className="space-y-0.5 pb-1">
                      {cat.subcategories.map((item) => (
                        <Link
                          key={item}
                          href={`/category/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                          className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors font-medium"
                          style={{ fontFamily: "var(--sl-font-body)" }}
                        >
                          <span className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default CategoryNavigation;
