import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const BlogSection = () => {
  // Featured Post Data
  const featuredPost = {
    title: "Gadget Shop in Bangladesh – Buy Original Tech Products Online from Pokobai",
    excerpt: "Technology is becoming an essential part of everyday life in Bangladesh. From gaming setups and smart wearables to productivity tools for work and study, people now depend heavily on modern gadgets. If you are searching for a...",
    author: "Pokobai Team",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop", // Replace with actual image
    link: "#",
  };

  // Grid Posts Data
  const posts = [
    {
      id: 1,
      title: "E-YOOSO Z11 Mechanical Keyboard Price in Bangladesh – Is This the Best Budget 60%...",
      excerpt: "E-YOOSO Z11 Mechanical Keyboard Price in Bangladesh – Complete Review & Buying Guide...",
      date: "Feb 22, 2026",
      readTime: "1 min read",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=400&fit=crop", // Replace with actual image
      link: "#",
    },
    {
      id: 2,
      title: "Is Wireless Mouse Good for Gaming?",
      excerpt: "In the past, gamers believed that only wired mice were suitable for serious gaming. Wireless mice were...",
      date: "Jan 27, 2026",
      readTime: "1 min read",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop", // Replace with actual image
      link: "#",
    },
    {
      id: 3,
      title: "Why Are Mechanical Keyboards Better for Gaming?",
      excerpt: "In recent years, mechanical keyboards have become the top choice for gamers worldwide. Whether you play FPS...",
      date: "Jan 27, 2026",
      readTime: "1 min read",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&h=400&fit=crop", // Replace with actual image
      link: "#",
    },
    {
      id: 4,
      title: "Is Mechanical Keyboard Better for Gaming?",
      excerpt: "When it comes to gaming performance, every millisecond matters. Many gamers in Bangladesh often ask: is...",
      date: "Jan 27, 2026",
      readTime: "1 min read",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=400&fit=crop", // Replace with actual image
      link: "#",
    }
  ];

  return (
    <>
      
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-[#0a192f] mb-2 tracking-tight">Our Blog</h2>
          <p className="text-slate-500 text-sm md:text-base">
            Discover the latest tech tips, buying guides, and industry news
          </p>
        </div>

        {/* Featured Post (Top Large Card) */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col lg:flex-row mb-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
          {/* Featured Image */}
          <div className="w-full lg:w-[55%] relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Featured
            </div>
            <Image
              src={featuredPost.image} 
              alt={featuredPost.title} 
              fill
              className="w-full h-full object-cover min-h-[250px] lg:min-h-[380px] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Featured Content */}
          <div className="w-full lg:w-[45%] p-6 md:p-10 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-4 leading-tight group-hover:text-blue-600 transition-colors">
              <Link href={featuredPost.link}>{featuredPost.title}</Link>
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 line-clamp-4">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto pt-4">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="text-slate-800 font-semibold">{featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <Link 
                href={featuredPost.link}
                className="px-6 py-2.5 bg-black text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-colors shadow-md"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>

        {/* Grid Posts (Bottom Small Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="w-full aspect-[16/10] overflow-hidden relative">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>
                
                {/* Title */}
                <h4 className="text-[17px] font-bold text-[#0a192f] leading-snug mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <Link href={post.link}>{post.title}</Link>
                </h4>
                
                {/* Excerpt */}
                <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 mb-5">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <div className="mt-auto pt-2">
                  <Link 
                    href={post.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a192f] hover:text-blue-600 transition-colors"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    
    </>
  );
};

export default BlogSection;