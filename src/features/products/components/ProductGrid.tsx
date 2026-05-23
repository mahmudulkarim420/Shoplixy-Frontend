import ProductCard from "./ProductCard";
import { ArrowRight, TrendingUp } from "lucide-react";

import { Product } from "@/types/product";

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  showViewAll?: boolean;
  accent?: "indigo" | "rose" | "emerald" | "orange";
}

const accentMap = {
  indigo: {
    pill: "bg-indigo-50 text-indigo-600 border-indigo-100",
    bar: "bg-indigo-600",
    btn: "text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 border-indigo-100",
  },
  rose: {
    pill: "bg-rose-50 text-rose-600 border-rose-100",
    bar: "bg-rose-500",
    btn: "text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 border-rose-100",
  },
  emerald: {
    pill: "bg-emerald-50 text-emerald-600 border-emerald-100",
    bar: "bg-emerald-500",
    btn: "text-emerald-600 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border-emerald-100",
  },
  orange: {
    pill: "bg-orange-50 text-orange-600 border-orange-100",
    bar: "bg-orange-500",
    btn: "text-orange-600 hover:text-orange-800 bg-orange-50 hover:bg-orange-100 border-orange-100",
  },
};

const ProductGrid = ({
  title,
  subtitle,
  products,
  showViewAll = true,
  accent = "indigo",
}: ProductGridProps) => {
  const colors = accentMap[accent];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3 tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="text-slate-500 text-sm md:text-base">{subtitle}</p>}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 stagger-children">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
