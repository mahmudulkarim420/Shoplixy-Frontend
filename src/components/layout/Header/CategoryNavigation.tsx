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
      name: "Computer & Electronics",
      icon: Laptop,
      slug: "computer-electronics",
      subcategories: ["Laptops", "Desktops", "Monitors", "Printers", "Storage"],
    },
    {
      name: "Fashion & Lifestyle",
      icon: Shirt,
      slug: "fashion-lifestyle",
      subcategories: ["Men's Clothing", "Women's Clothing", "Watches", "Bags"],
    },
    {
      name: "Home & Kitchen",
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
      name: "Beauty & Care",
      icon: Sparkles,
      slug: "beauty-care",
      subcategories: ["Skincare", "Haircare", "Makeup", "Fragrance"],
    },
    {
      name: "Gaming Gear",
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
    <div className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1 py-1">
          {categories.map((cat, i) => {
            const IconComponent = cat.icon;
            return (
              <div key={i} className="relative group">
                <Link 
                  href={`/category/${cat.slug}`}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 font-medium text-sm whitespace-nowrap nav-link"
                >
                  <IconComponent size={18} />
                  <span>{cat.name}</span>
                  <ChevronDown
                    size={13}
                    className="opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-200"
                  />
                </Link>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50 animate-scale-in">
                  <div className="p-3">
                    <p className="text-xs text-slate-400 font-medium px-2 mb-2 uppercase tracking-wide">
                      {cat.name}
                    </p>
                    {cat.subcategories.map((item) => (
                      <Link
                        key={item}
                        href={`/category/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Mobile */}
        <nav className="md:hidden py-2">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat, i) => {
              const IconComponent = cat.icon;
              return (
                <Link
                  key={i}
                  href={`/category/${cat.slug}`}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors text-xs font-medium whitespace-nowrap border border-slate-200 hover:border-slate-300"
                >
                  <IconComponent size={16} />
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CategoryNavigation;
