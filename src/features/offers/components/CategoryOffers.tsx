"use client";

import { useState } from "react";
import ProductGrid from "@/features/products/components/ProductGrid";
import { featuredProducts, latestMouse, latestKeyboard, dailyDealsProducts } from "@/data/sampleProducts";

const categories = ["All Offers", "Electronics", "Keyboards", "Mice", "Accessories"];

export default function CategoryOffers() {
  const [activeTab, setActiveTab] = useState("All Offers");

  const getProducts = () => {
    switch (activeTab) {
      case "Keyboards":
        return latestKeyboard;
      case "Mice":
        return latestMouse;
      case "Accessories":
        return dailyDealsProducts;
      case "Electronics":
        return featuredProducts;
      default:
        return [...featuredProducts, ...latestMouse].slice(0, 10);
    }
  };

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2
            className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl"
            style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
          >
            Shop by Category
          </h2>
          <p className="mt-2 text-sm text-slate-500">Find exactly what you need at the best prices.</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex overflow-x-auto pb-4 custom-scrollbar justify-start md:justify-center">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="-mt-10">
        <ProductGrid
          title=""
          products={getProducts()}
          showViewAll={false}
          accent="indigo"
        />
      </div>
    </section>
  );
}
