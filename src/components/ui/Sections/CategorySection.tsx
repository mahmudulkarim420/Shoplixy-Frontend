"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CATEGORIES } from "@/data/categories";

const CategorySection = () => {
  return (
    <section className="bg-slate-50/70 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between sm:mb-12">
          <div className="max-w-lg">
            <p className="sl-label sl-label-primary mb-2">Explore</p>
            <h2
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.025em" }}
            >
              Shop by Category
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Discover premium products across all categories.
            </p>
          </div>
          <Link
            href="/categories"
            className="group hidden items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-indigo-600 sm:flex"
            style={{ fontFamily: "var(--sl-font-sans)" }}
          >
            All Categories
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-4">
          {CATEGORIES.slice(0, 8).map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.slug}`}
              className="group relative h-36 overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 sm:h-48 md:h-52"
            >
              {/* Image */}
              <div className="absolute inset-0 p-5 transition-transform duration-500 group-hover:scale-[1.08]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-4 mix-blend-multiply opacity-85 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent px-3 py-3 sm:px-4 sm:py-4">
                <h3
                  className="text-center text-[11px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors sm:text-xs"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "View All" */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-[11px] font-semibold text-slate-700 shadow-sm transition-shadow hover:shadow-md"
            style={{ fontFamily: "var(--sl-font-sans)" }}
          >
            View All Categories <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
