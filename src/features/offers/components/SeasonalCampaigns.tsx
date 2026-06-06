"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { campaigns } from "../data/mockData";

export default function SeasonalCampaigns() {
  return (
    <section className="py-10 sm:py-14 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2
            className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl"
            style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
          >
            Seasonal Campaigns
          </h2>
          <p className="mt-2 text-sm text-slate-500">Don&apos;t miss out on our biggest events of the year.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <Link
              key={campaign.id}
              href="/shop"
              className="group relative h-64 md:h-80 w-full overflow-hidden rounded-3xl shadow-sm transition-all hover:shadow-xl block"
            >
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-linear-to-t ${campaign.color} opacity-80 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 sm:p-8">
                <span className="mb-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md" style={{ fontFamily: "var(--sl-font-sans)" }}>
                  Campaign
                </span>
                <h3 className="mb-1.5 text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}>
                  {campaign.title}
                </h3>
                <p className="mb-5 text-sm text-white/80 line-clamp-1">{campaign.subtitle}</p>
                
                <div className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-transform group-hover:translate-y-[-4px]" style={{ fontFamily: "var(--sl-font-sans)" }}>
                  Explore
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
