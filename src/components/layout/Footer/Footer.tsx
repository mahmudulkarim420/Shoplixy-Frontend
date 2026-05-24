import {
  Phone,
  Mail,
  MapPin,
  FileText,
  Share2,
  Heart,
  MessageCircle, // Using MessageCircle as WhatsApp placeholder since lucide doesn't have a direct WA icon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import sslcommerz from "@/assets/SSLCommerz.png";
const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Column 1: Brand & Contact Info */}
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="text-3xl font-bold text-[#0a192f] mb-6">Shoplixy</h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8 pr-4">
              Shoplixy is Bangladesh's leading technology retailer, offering the latest computers,
              laptops, gaming gear, and accessories with competitive prices and excellent service.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-800">
                <Phone size={18} strokeWidth={1.5} className="shrink-0" />
                <span>+8801300977</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800">
                <Mail size={18} strokeWidth={1.5} className="shrink-0" />
                <span>shoplixy.update@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800">
                <MapPin size={18} strokeWidth={1.5} className="shrink-0" />
                <span>Dhaka,Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800">
                <FileText size={18} strokeWidth={1.5} className="shrink-0" />
                <span>Trade License : 69442890138</span>
              </div>
            </div>
          </div>

          {/* Column 2: Help Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-lg font-bold text-[#0a192f] mb-6">Help</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Terms And Conditions", href: "/terms" },
                { name: "Return & Refund Policy", href: "/refund" },
                { name: "Warranty", href: "/waranty" },
                { name: "Blogs", href: "/blogs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 transition-colors text-[15px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Payment Gateways */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-lg font-bold text-[#0a192f] mb-6">Pay with SSLCommercz</h3>
            <div className="w-full max-w-[320px]">
              {/* SSLCommercz public banner URL used here for immediate visual feedback */}
              <Image
                src={sslcommerz}
                alt="SSLCommercz Payment Methods"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-800 text-[14px]">
            Copyright © 2026 Shoplixy - All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook / Social Share */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-[34px] h-[34px] rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Share2 size={18} strokeWidth={1.5} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-[34px] h-[34px] rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Heart size={18} fill="currentColor" strokeWidth={1.5} />
            </a>

            {/* WhatsApp (MessageCircle used as fallback, filled to look like WA) */}
            <a
              href="#"
              aria-label="WhatsApp"
              className="w-[34px] h-[34px] rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} fill="currentColor" strokeWidth={0} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
