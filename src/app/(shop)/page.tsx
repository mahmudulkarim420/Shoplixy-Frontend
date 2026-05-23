import HeroCarousel from "@/components/ui/Hero/HeroCarousel";
import CategorySection from "@/components/ui/Sections/CategorySection";
import ProductGrid from "@/features/products/components/ProductGrid";
import PromoBanner from "@/components/ui/Sections/PromoBanner";
import FeaturedBrands from "@/components/ui/Sections/FeaturedBrands";
import WhyChooseUs from "@/components/ui/Sections/WhyChooseUs";
import {
  featuredProducts,
  latestMouse,
  latestKeyboard,
  dailyDealsProducts,
} from "@/data/sampleProducts";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />

      {/* Category Section */}
      <CategorySection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Featured Products */}
      <ProductGrid
        title="Featured Products"
        subtitle="Hand-picked products our customers love most"
        products={featuredProducts}
        accent="indigo"
      />

      {/* Promo Banner 1 */}
      <PromoBanner
        title="Level Up Your Game"
        subtitle="Get the best gaming peripherals with exclusive discounts — limited stock available."
        buttonText="Shop Gaming"
        gradientFrom="#6366f1"
        gradientTo="#a855f7"
        badge="🎮 Gaming Week"
        showTimer={true}
      />

      {/* Latest Mouse */}
      <ProductGrid
        title="Latest Mouse"
        subtitle="Ultra-light, ultra-precise — built for serious gamers"
        products={latestMouse}
        accent="rose"
      />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Latest Keyboard */}
      <ProductGrid
        title="Latest Keyboards"
        subtitle="Mechanical, wireless, RGB — find your perfect keystroke"
        products={latestKeyboard}
        accent="emerald"
      />

      {/* Promo Banner 2 */}
      <PromoBanner
        title="Daily Deals"
        subtitle="Prices drop every 24 hours. Grab yours before they're gone."
        buttonText="View All Deals"
        gradientFrom="#f43f5e"
        gradientTo="#fb923c"
        badge="⚡ Flash Sale"
        showTimer={true}
      />

      {/* Special Offers */}
      <ProductGrid
        title="Today's Special Offers"
        subtitle="Up to 60% off — deals refreshed daily at midnight"
        products={dailyDealsProducts}
        accent="orange"
      />

      <FeaturedBrands />

      <WhyChooseUs />
    </div>
  );
}
