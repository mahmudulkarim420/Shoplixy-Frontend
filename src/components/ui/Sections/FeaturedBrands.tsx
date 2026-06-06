"use client";

import Image from "next/image";

const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Asus", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
  {
    name: "Logitech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg",
  },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  {
    name: "Razer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Razer_snake_logo.svg",
  },
];

const FeaturedBrands = () => {
  return (
    <section className="bg-slate-50/50 py-12 sm:py-14 md:py-16 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-9 text-center">
          <p className="sl-label sl-label-primary mb-2">Verified</p>
          <h2
            className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl"
            style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
          >
            Trusted Brands
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-sm text-slate-500">
            Authorized retailer for world-leading technology brands.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:flex md:items-center md:justify-between md:gap-4 lg:gap-6">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="group flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-slate-300 md:h-24 md:flex-1 lg:p-6"
            >
              <div className="relative h-full w-full grayscale opacity-45 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
                <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
