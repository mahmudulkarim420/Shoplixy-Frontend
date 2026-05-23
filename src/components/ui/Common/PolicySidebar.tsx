"use client";

import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";

interface SidebarSection {
  id: string;
  title: string;
  iconName: string;
}

interface PolicySidebarProps {
  sections: SidebarSection[];
  title?: string;
}

const PolicySidebar = ({ sections, title = "Topics" }: PolicySidebarProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveSection(id);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
        {title}
      </h3>
      <nav className="space-y-2">
        {sections.map((item) => {
          const isActive = activeSection === item.id;
          // @ts-ignore
          const Icon = LucideIcons[item.iconName] || LucideIcons.FileText;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left ${
                isActive
                  ? "bg-rose-50 text-[#FF6F61]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-[#002147]"
              }`}
            >
              <Icon
                size={18}
                className={isActive ? "text-[#FF6F61]" : "text-slate-400"}
              />
              {item.title}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default PolicySidebar;
