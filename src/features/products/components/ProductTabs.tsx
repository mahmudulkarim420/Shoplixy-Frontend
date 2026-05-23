"use client";

import React, { useState } from "react";
import { Check, Star } from "lucide-react";

import { Product } from "@/types/product";

interface ProductTabsProps {
  product: Product;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");

  return (
    <div className="mt-12">
      <div className="border-b border-slate-200">
        <div className="flex gap-8">
          {(["description", "specs", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-medium capitalize border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-black text-black"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {activeTab === "description" && (
          <div className="prose max-w-none">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Product Description</h3>
            <p className="text-slate-600 mb-4">
              Experience the ultimate gaming performance with the {product.name}. Designed for both
              casual and professional gamers, this product delivers exceptional quality and
              reliability.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                Premium build quality with durable materials
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                Ergonomic design for extended use
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                Compatible with all major operating systems
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                2-year manufacturer warranty included
              </li>
            </ul>
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="px-4 py-3 bg-slate-50 font-medium text-slate-700">Model</td>
                      <td className="px-4 py-3 text-slate-900">{product.name}</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="px-4 py-3 bg-slate-50 font-medium text-slate-700">SKU</td>
                      <td className="px-4 py-3 text-slate-900">
                        SKU-{product.id.padStart(4, "0")}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 font-medium text-slate-700">Warranty</td>
                      <td className="px-4 py-3 text-slate-900">2 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="px-4 py-3 bg-slate-50 font-medium text-slate-700">
                        Availability
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-green-600 font-medium">In Stock</span>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="px-4 py-3 bg-slate-50 font-medium text-slate-700">Shipping</td>
                      <td className="px-4 py-3 text-slate-900">Free Delivery</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 font-medium text-slate-700">Returns</td>
                      <td className="px-4 py-3 text-slate-900">30 Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Customer Reviews</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-slate-900">{product.rating}</div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={`${
                        star <= Math.round(product.rating || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-slate-200 text-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-600">Based on {product.reviewCount} reviews</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-900">John Doe</h4>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={12}
                          className={`${
                            star <= 5
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-slate-200 text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-slate-500">2 days ago</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Excellent product! The quality exceeded my expectations. Highly recommend!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
