"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Mail, Lock, ArrowRight, User } from "lucide-react";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side: Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.95) 100%)",
          }}
        />

        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=1600&fit=crop"
          alt="Register Background"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />

        {/* Content on Image */}
        <div className="relative z-20 flex flex-col justify-between h-full p-16 text-white">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-2xl shadow-white/10 transition-all group-hover:scale-110">
              <Sparkles size={22} className="text-indigo-600" />
            </div>
            <span
              className="text-3xl font-black tracking-tight"
              style={{ fontFamily: "var(--sl-font-sans)" }}
            >
              Shoplixy
            </span>
          </Link>

          <div>
            <div className="mb-6 h-1 w-12 rounded-full bg-indigo-500" />
            <h2
              className="text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.03em" }}
            >
              Join the Elite <br />
              <span className="text-indigo-400">Circuit.</span>
            </h2>
            <p className="text-slate-300 max-w-md text-lg leading-relaxed">
              Create an account to unlock personalized deals, earn rewards, and be the first to
              witness legendary tech drops.
            </p>
          </div>

          <div className="text-sm text-slate-400 font-medium border-t border-white/10 pt-8 flex items-center justify-between">
            <span>© 2026 Shoplixy Bangladesh</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-slate-50/30">
        <div className="w-full max-w-md py-10">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                <Sparkles size={20} className="text-white" />
              </div>
              <span
                className="text-2xl font-black text-slate-900"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Shoplixy
              </span>
            </Link>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h1
              className="text-3xl font-black text-slate-900 mb-3"
              style={{ fontFamily: "var(--sl-font-sans)", letterSpacing: "-0.02em" }}
            >
              Create Account
            </h1>
            <p className="text-slate-500 font-medium">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label
                className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Full Name
              </label>
              <div className="relative group">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all font-medium shadow-sm"
                  style={{ fontFamily: "var(--sl-font-body)" }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Email Address
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all font-medium shadow-sm"
                  style={{ fontFamily: "var(--sl-font-body)" }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1"
                style={{ fontFamily: "var(--sl-font-sans)" }}
              >
                Password
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all font-medium shadow-sm"
                  style={{ fontFamily: "var(--sl-font-body)" }}
                />
              </div>
            </div>

            <div className="flex items-start gap-3 px-1 py-1">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-100 transition-colors cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-[11px] text-slate-500 font-medium leading-relaxed cursor-pointer"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-slate-900 font-bold hover:text-indigo-600 transition-colors underline decoration-slate-200 underline-offset-4"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-slate-900 font-bold hover:text-indigo-600 transition-colors underline decoration-slate-200 underline-offset-4"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              className="w-full py-4 rounded-2xl font-bold text-white text-sm uppercase tracking-widest transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] flex items-center justify-center gap-2 group"
              style={{ background: "var(--sl-primary-600)", fontFamily: "var(--sl-font-sans)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-700)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--sl-primary-600)";
              }}
            >
              Sign Up{" "}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
              Join via Express
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-slate-700 text-sm shadow-sm">
              <svg viewBox="0 0 24 24" width="18" height="18" className="shrink-0">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-4 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-slate-700 text-sm shadow-sm">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="shrink-0"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
