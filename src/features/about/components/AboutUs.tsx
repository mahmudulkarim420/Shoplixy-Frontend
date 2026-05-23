import React from "react";
import { 
  Users, 
  Target, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Clock,
  Sparkles,
  Rocket
} from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <main className="flex-grow">
        {/* ===== HERO SECTION ===== */}
        {/* Deep Navy to Light fade background */}
        <section className="relative pt-24 pb-32 bg-gradient-to-b from-[#002147] to-slate-50 overflow-hidden">
          {/* Subtle Circuit/Dot Background Pattern (CSS generated) */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-[0.2em] mb-8 border border-white/20">
              <Sparkles size={14} className="text-[#FF6F61]" />
              About Shoplixy
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              Elevating Your <br className="hidden md:block" />
              <span className="text-[#FF6F61] relative inline-block">
                Tech Experience.
                {/* Custom underline accent */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FF6F61]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 md:text-lg leading-relaxed font-medium">
              Founded with a passion for innovation, Shoplixy is Bangladesh's most trusted destination for premium gaming gear, high-performance electronics, and cutting-edge accessories.
            </p>
          </div>
        </section>

        {/* ===== OUR JOURNEY SECTION ===== */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-[#002147] tracking-tight">Our Journey So Far</h2>
              <div className="w-16 h-1.5 bg-[#FF6F61] rounded-full"></div>
              <p className="text-slate-600 leading-relaxed text-lg pt-4">
                What started as a small team of tech enthusiasts has grown into a nationwide phenomenon. We realized that gamers and professionals in Bangladesh needed a reliable source for authentic, high-end gear without the hassle.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Today, we don't just sell products; we build setups, fuel passions, and create communities. Every product in our catalog is handpicked to ensure it meets our rigorous standards for quality and performance.
              </p>
            </div>
            
            {/* Right: Image with Glassmorphism Pill */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group">
                <Image
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000&h=800&fit=crop" 
                  alt="Premium Tech Setup" 
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#002147]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              {/* Floating Stat Pill */}
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,33,71,0.15)] border border-white max-w-[220px] animate-fade-in-up">
                <div className="text-4xl font-black text-[#002147] mb-1">50k+</div>
                <div className="text-[11px] font-extrabold text-[#FF6F61] uppercase tracking-widest">Happy Customers</div>
              </div>
            </div>

          </div>
        </section>

        {/* ===== VISION & MISSION ===== */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              
              {/* Vision */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#002147]/5 border-2 border-[#002147] text-[#FF6F61] rounded-2xl flex items-center justify-center mb-8">
                  <Target size={28} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#002147] mb-4 tracking-tight">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  To be the ultimate tech hub in South Asia, where premium quality meets absolute accessibility. We envision a world where every gamer, creator, and professional has instant access to the best tools to realize their full potential.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#002147]/5 border-2 border-[#002147] text-[#FF6F61] rounded-2xl flex items-center justify-center mb-8">
                  <Users size={28} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#002147] mb-4 tracking-tight">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To provide an unparalleled shopping experience by offering exclusively authentic products, expert technical advice, and world-class customer support that continues long after your unboxing experience.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===== WHAT DEFINES US ===== */}
        <section className="py-24 bg-[#002147] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">What Defines Us</h2>
              <div className="w-20 h-1.5 bg-[#FF6F61] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "100% Authentic",
                  desc: "We source directly from global manufacturers to guarantee every single product is factory-sealed and genuine."
                },
                {
                  icon: Award,
                  title: "Official Warranty",
                  desc: "Enjoy absolute peace of mind with full, hassle-free brand warranty support on every eligible purchase."
                },
                {
                  icon: Rocket,
                  title: "Lightning Delivery",
                  desc: "Our optimized logistics network ensures your premium gear reaches your doorstep in record time."
                }
              ].map((item, i) => (
                <div key={i} className="group p-10 rounded-[2rem] bg-white border border-transparent hover:border-[#FF6F61]/30 hover:shadow-[0_0_40px_rgba(255,111,97,0.15)] transition-all duration-300">
                  <div className="w-14 h-14 bg-slate-50 text-[#002147] group-hover:text-[#FF6F61] group-hover:bg-rose-50 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300">
                    <item.icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#002147] mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISIT US ===== */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#002147] tracking-tight leading-tight">
                Experience it <br/> in Person.
              </h2>
              <div className="space-y-6 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 text-[#FF6F61]">
                    <MapPin size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002147] text-lg">Flagship Center</h4>
                    <p className="text-slate-500 mt-1">Level 4, Tech Plaza, Dhanmondi<br/>Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 text-[#FF6F61]">
                    <Clock size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002147] text-lg">Working Hours</h4>
                    <p className="text-slate-500 mt-1">Saturday - Thursday<br/>10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 px-8 py-4 bg-[#002147] text-white rounded-xl font-bold text-sm hover:bg-transparent hover:text-[#002147] border-2 border-[#002147] transition-all duration-300">
                Get Directions
              </button>
            </div>
            
            <div className="flex-1 w-full lg:h-[500px] rounded-[2rem] overflow-hidden relative group">
              <Image
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=1000&fit=crop" 
                alt="Store Location" 
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#002147]/20 group-hover:bg-[#002147]/10 transition-colors duration-500" />
              
              {/* Overlay styling map pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 animate-pulse">
                 <MapPin size={28} className="text-white fill-[#FF6F61]" />
              </div>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
};

export default AboutPage;