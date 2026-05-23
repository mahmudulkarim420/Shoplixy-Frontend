import Link from "next/link";
import { Star } from "lucide-react";
import ProductTabs from "./ProductTabs";
import ProductInfoActions from "./ProductInfoActions";

import { getProductById } from "@/lib/api/products";

interface ProductDetailsPageProps {
  productId: string;
}

export default async function ProductDetailsPage({ productId }: ProductDetailsPageProps) {
  // Find the product
  const product = await getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
          <p className="text-slate-600 mb-6">The product you are looking for does not exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  const discountPercentage =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Area */}
          <div className="space-y-4">
            <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-slate-400 text-sm">Product Image</span>
              </div>
            </div>
            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="w-20 h-20 bg-slate-100 rounded-lg border border-slate-200 hover:border-black transition-colors flex items-center justify-center"
                >
                  <span className="text-slate-400 text-xs">{i}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Badges */}
            <div>
              {product.badge && (
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${
                    product.badgeColor === "sale"
                      ? "bg-red-100 text-red-700"
                      : product.badgeColor === "hot"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {product.badge}
                </span>
              )}
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={`${
                        star <= Math.round(product.rating || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-slate-200 text-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Client Components for interactive parts */}
            <ProductInfoActions product={product} discountPercentage={discountPercentage} />
          </div>
        </div>

        {/* Product Tabs Client Component */}
        <ProductTabs product={product} />
      </div>
    </div>
  );
}
