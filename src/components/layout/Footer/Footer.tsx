"use client";

import { Phone, Mail, MapPin, Send, ExternalLink } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#0b0f1a" }} className="pt-16 pb-8 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="mb-5 flex items-center gap-2.5">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)" }}
              >
                <span
                  className="text-white font-black text-base"
                  style={{ fontFamily: "var(--sl-font-sans)" }}
                >
                  S
                </span>
              </div>
              <span
                className="text-xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.03em" }}
              >
                Shoplixy
              </span>
            </Link>
            <p
              className="mb-7 max-w-[240px] text-sm leading-relaxed"
              style={{ color: "rgba(148,163,184,0.85)" }}
            >
              Your ultimate destination for premium tech, lifestyle gadgets, and modern essentials.
              Quality meets style.
            </p>
            {/* Social icons as SVG */}
            <div className="flex gap-2.5">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 group"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="rgba(148,163,184,0.7)"
                  className="group-hover:fill-indigo-400 transition-colors"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 group"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="rgba(148,163,184,0.7)"
                  className="group-hover:fill-indigo-400 transition-colors"
                >
                  <path
                    d="M4 4l16 16M4 20L20 4"
                    stroke="rgba(148,163,184,0.7)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    className="group-hover:stroke-indigo-400 transition-colors"
                  />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 group"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="none"
                  stroke="rgba(148,163,184,0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-indigo-400 transition-colors"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="rgba(148,163,184,0.7)" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 group"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="rgba(148,163,184,0.7)"
                  className="group-hover:fill-indigo-400 transition-colors"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <h4
              className="mb-5 text-xs font-semibold uppercase tracking-widest text-white"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "0.1em" }}
            >
              Products
            </h4>
            <ul className="space-y-3">
              {["Smart Watches", "Audio Gear", "Keyboards", "Gaming Setup", "Accessories"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(148,163,184,0.75)" }}
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4
              className="mb-5 text-xs font-semibold uppercase tracking-widest text-white"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "0.1em" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(148,163,184,0.75)" }}
              >
                <Phone size={16} className="shrink-0 mt-0.5" style={{ color: "#818cf8" }} />
                <span>+880 1234 567890</span>
              </li>
              <li
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(148,163,184,0.75)" }}
              >
                <Mail size={16} className="shrink-0 mt-0.5" style={{ color: "#818cf8" }} />
                <span>support@shoplixy.com</span>
              </li>
              <li
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(148,163,184,0.75)" }}
              >
                <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: "#818cf8" }} />
                <span>Dhanmondi, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h4
              className="mb-5 text-xs font-semibold uppercase tracking-widest text-white"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "0.1em" }}
            >
              Newsletter
            </h4>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.75)" }}>
              Get 10% off your first order. Subscribe for exclusive deals.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all pr-12"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-lg text-white transition-all"
                style={{ background: "var(--sl-primary-600)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-700)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-600)";
                }}
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col items-center justify-between pt-8 gap-4 md:flex-row">
          <p className="text-xs" style={{ color: "rgba(100,116,139,0.7)" }}>
            © {currentYear} Shoplixy Bangladesh. All rights reserved. Built with ❤️ in Dhaka.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {["Privacy Policy", "Terms of Service", "Return Policy"].map((text) => (
              <Link
                key={text}
                href="#"
                className="text-xs hover:text-white transition-colors duration-200"
                style={{ color: "rgba(100,116,139,0.7)" }}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
