import React, { ReactNode } from "react";
import PolicySidebar from "./PolicySidebar";

export interface PolicySection {
  id: string;
  title: string;
  icon: React.ElementType;
  iconName: string;
  content: ReactNode;
}

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: PolicySection[];
  sidebarTitle?: string;
  contactTitle?: string;
  contactDesc?: string;
  contactAction?: string;
}

const PolicyLayout = ({
  title,
  subtitle,
  lastUpdated,
  sections,
  sidebarTitle = "Topics",
  contactTitle = "Need help?",
  contactDesc = "Our support team is here to assist you.",
  contactAction = "Contact Support",
}: PolicyLayoutProps) => {
  const sidebarSections = sections.map((s) => ({
    id: s.id,
    title: s.title,
    iconName: s.iconName,
  }));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#002147] py-16 md:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              {subtitle} <br className="hidden sm:block" />
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Sidebar Navigation (Desktop) */}
            <div className="hidden lg:block w-1/4 shrink-0 sticky top-32">
              <PolicySidebar sections={sidebarSections} title={sidebarTitle} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 md:p-12">
                <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-600 prose-li:text-slate-600">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <div
                        key={section.id}
                        id={section.id}
                        className={`scroll-mt-32 ${
                          index !== sections.length - 1
                            ? "border-b border-slate-100 pb-12 mb-12"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-[#002147]/5 flex items-center justify-center text-[#002147]">
                            <Icon size={24} strokeWidth={2} />
                          </div>
                          <h2 className="text-2xl font-bold text-[#002147] m-0">
                            {section.title}
                          </h2>
                        </div>
                        <div className="space-y-4 text-[15px] md:text-base">
                          {section.content}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Contact Banner */}
                <div className="mt-16 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-[#002147] mb-1">
                      {contactTitle}
                    </h4>
                    <p className="text-sm text-slate-500">{contactDesc}</p>
                  </div>
                  <button className="px-6 py-3 bg-[#002147] text-white rounded-xl font-bold text-sm hover:bg-[#FF6F61] transition-colors shrink-0 whitespace-nowrap">
                    {contactAction}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolicyLayout;
