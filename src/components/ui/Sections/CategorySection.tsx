import { 
  Keyboard, 
  Headphones, 
  Watch, 
  Mouse, 
  LayoutGrid, 
  Headset 
} from "lucide-react";

import Link from "next/link";

const CategorySection = () => {
  const categories = [
    { id: 1, name: "KEYBOARD", icon: Keyboard, slug: "keyboard" },
    // Lucide-e exact earbud nai, tai Headphones use kora holo, tumi chaile onnya icon dite paro
    { id: 2, name: "EARBUDS", icon: Headphones, slug: "earbuds" }, 
    { id: 3, name: "SMART WATCH", icon: Watch, slug: "smart-watch" },
    { id: 4, name: "MOUSE", icon: Mouse, slug: "mouse" },
    { id: 5, name: "FEATURED", icon: LayoutGrid, slug: "featured" },
    { id: 6, name: "HEADSETS", icon: Headset, slug: "headsets" },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-left mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3 tracking-tight">
            FEATURED CATEGORY
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Get Your Desired Product from Featured Category!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="group flex flex-col items-center justify-center gap-4 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 hover:border-slate-900"
              >
                {/* Icon Container */}
                <div className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                  <Icon size={42} strokeWidth={1.2} />
                </div>
                
                {/* Text Container */}
                <span className="text-[13px] md:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 tracking-wide">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;