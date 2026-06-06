import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  showViewAll?: boolean;
  viewAllHref?: string;
  accent?: "indigo" | "rose" | "emerald" | "orange";
}

const accentColors: Record<string, string> = {
  indigo: "var(--sl-primary-600)",
  rose: "var(--sl-accent-600)",
  emerald: "#059669",
  orange: "#ea580c",
};

const ProductGrid = ({
  title,
  subtitle,
  products,
  showViewAll = true,
  viewAllHref = "/",
  accent = "indigo",
}: ProductGridProps) => {
  const accentColor = accentColors[accent] ?? accentColors.indigo;

  return (
    <section className="py-10 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-7 flex items-end justify-between md:mb-10">
          <div>
            <div className="mb-1 h-0.5 w-8 rounded-full" style={{ background: accentColor }} />
            <h2
              className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
            {subtitle && <p className="mt-1.5 text-sm text-slate-500">{subtitle}</p>}
          </div>
          {showViewAll && (
            <Link
              href={viewAllHref}
              className="group hidden items-center gap-1.5 text-sm font-semibold transition-colors hover:text-indigo-600 sm:flex"
              style={{ color: accentColor, fontFamily: "var(--sl-font-sans)" }}
            >
              View all
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 stagger-children animate-fade-in-up">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
