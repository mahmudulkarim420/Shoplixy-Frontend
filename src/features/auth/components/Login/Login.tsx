"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Mail, Lock, ArrowRight, ChessRook, GitBranchPlus } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side: Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-10 bg-linear-to-b from-slate-900/20 via-slate-900/60 to-slate-900" />
        <Image
          src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=high%20end%20gaming%20setup%20with%20mechanical%20keyboard%20and%20rgb%20lighting%20dark%20aesthetic&image_size=portrait_4_3" 
          alt="Login Background" 
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        
        {/* Content on Image */}
        <div className="relative z-20 flex flex-col justify-between h-full p-12 text-white">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <Sparkles size={20} className="text-slate-900" />
            </div>
            <span className="text-2xl font-black tracking-tight">Shoplixy</span>
          </Link>

          <div>
            <h2 className="text-4xl font-black leading-tight mb-4">
              Welcome Back to <br />The Elite Hub.
            </h2>
            <p className="text-slate-300 max-w-md text-lg">
              Sign in to access your orders, saved items, and exclusive member-only deals.
            </p>
          </div>

          <div className="text-sm text-slate-400 font-medium">
            © 2026 Shoplixy. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-20">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-10">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="text-xl font-black text-slate-900">Shoplixy</span>
            </Link>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-black text-slate-900 mb-2">Sign In</h1>
            <p className="text-slate-500 font-medium">New to Shoplixy? <Link href="/register" className="text-slate-900 font-black hover:underline underline-offset-4 transition-all">Create an account</Link></p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                <Link href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all font-medium"
                />
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-[0.98] flex items-center justify-center gap-2">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Or continue with</span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
              <ChessRook size={18} /> Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
              <GitBranchPlus size={18} /> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
