"use client";

import PromoBanner from "@/components/ui/Sections/PromoBanner";
import ProductGrid from "@/features/products/components/ProductGrid";
import { featuredProducts, latestMouse } from "@/data/sampleProducts";

import FlashSale from "./FlashSale";
import CouponSection from "./CouponSection";
import BuyMoreSaveMore from "./BuyMoreSaveMore";
import SeasonalCampaigns from "./SeasonalCampaigns";
import CategoryOffers from "./CategoryOffers";
import Newsletter from "./Newsletter";

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-white pb-10">
      {/* 1. Hero Section */}
      <div className="pt-4 md:pt-6">
        <PromoBanner
          title="Mega Savings Event"
          subtitle="Discover unbeatable discounts on premium electronics, gaming gear, and accessories. Limited time only."
          buttonText="Shop All Offers"
          gradientFrom="#0f172a"
          gradientTo="#334155"
          badge="Special Offer"
          showTimer={false}
        />
      </div>

      {/* 2. Coupon & Voucher Section */}
      <CouponSection />

      {/* 3. Flash Sale Section */}
      <FlashSale />

      {/* 4. Featured Deals */}
      <ProductGrid
        title="Featured Deals"
        subtitle="Hand-picked discounts you won't want to miss."
        products={featuredProducts}
        accent="emerald"
      />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* 5. Buy More, Save More */}
      <BuyMoreSaveMore />

      {/* 6. Seasonal Campaigns */}
      <SeasonalCampaigns />

      {/* 7. Category-based Offers */}
      <CategoryOffers />

      {/* 8. Trending Deals Carousel/Grid */}
      <div className="bg-slate-50 py-4">
        <ProductGrid
          title="Trending Offers"
          subtitle="What everyone is buying right now."
          products={latestMouse}
          accent="orange"
        />
      </div>

      {/* 9. Recommended Offers */}
      <ProductGrid
        title="Recommended For You"
        subtitle="Based on your browsing history."
        products={featuredProducts.slice(0, 5).reverse()}
        accent="indigo"
      />

      {/* 10. Newsletter */}
      <Newsletter />
    </div>
  );
}
