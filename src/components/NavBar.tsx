// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-md z-30 bg-white font-sans">
      {/* Top Bar - Cyan */}
      <div className="bg-[#00bcd4] text-white text-sm py-2.5 px-6 md:px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
          <a href="mailto:info@thekidssquare.in" className="hover:underline font-bold tracking-wide">info@thekidssquare.in</a>
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-5 md:gap-8 font-medium">
          <a href="#" aria-label="Facebook" className="hover:text-cyan-200 transition-transform hover:scale-110">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-cyan-200 transition-transform hover:scale-110">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-cyan-200 transition-transform hover:scale-110">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>

      {/* Middle Bar - White */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-5">
          <img src="/logo.jpeg" alt="The Kids Square Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">The KiDS Square</h1>
            <p className="text-xs md:text-sm font-extrabold text-slate-500 uppercase tracking-[0.2em] mt-1.5">Building Blocks of Smart Future</p>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden p-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>

        {/* Info Area (Hidden on mobile/small tablets) */}
        <div className="hidden xl:flex gap-12">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#00bcd4] text-white rounded-2xl flex items-center justify-center shadow-md">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us Today!</p>
              <p className="text-xl font-black text-[#673ab7] tracking-wide">+91-9560533778</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#ff5252] text-white rounded-full flex items-center justify-center shadow-md border-4 border-[#ff5252]/20">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">We Are Open!</p>
              <p className="text-xl font-black text-[#673ab7] tracking-wide">Mon-Fri 09:00am-02:00pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Navigation (Red) */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} xl:block bg-[#ff5252] w-full border-t border-red-400 shadow-inner`}>
        {/* We use max-w-[1500px] and justify-center to mimic the exact layout of the reference image */}
        <div className="max-w-[1200px] mx-auto flex flex-col xl:flex-row justify-center text-base lg:text-[15px] font-extrabold text-white uppercase tracking-widest">
          <Link href="/" className="px-6 2xl:px-8 py-5 md:py-6 hover:bg-white/20 transition-colors border-b xl:border-none border-white/20 text-center flex items-center justify-center">Home</Link>
          
          {/* Active cyan state for 'About Us' */}
          <Link href="/about" className="bg-[#00bcd4] px-6 2xl:px-8 py-5 md:py-6 hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2 border-b xl:border-none border-white/20 text-center shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)]">
            About Us <span className="text-[10px] mt-0.5 opacity-80">▼</span>
          </Link>
          
          <a href="#" className="px-6 2xl:px-8 py-5 md:py-6 hover:bg-white/20 transition-colors border-b xl:border-none border-white/20 text-center flex items-center justify-center">Admission</a>
          <a href="#" className="px-6 2xl:px-8 py-5 md:py-6 hover:bg-white/20 transition-colors border-b xl:border-none border-white/20 text-center flex items-center justify-center">Academics</a>
          <a href="#" className="px-6 2xl:px-8 py-5 md:py-6 hover:bg-white/20 transition-colors border-b xl:border-none border-white/20 text-center flex items-center justify-center">Our Course</a>
          <a href="#" className="px-6 2xl:px-8 py-5 md:py-6 hover:bg-white/20 transition-colors border-b xl:border-none border-white/20 text-center flex items-center justify-center">Parent's Corner</a>
          <a href="#" className="px-6 2xl:px-8 py-5 md:py-6 hover:bg-white/20 transition-colors border-b xl:border-none border-white/20 text-center flex items-center justify-center">Our Network</a>
          <a href="#" className="px-6 2xl:px-8 py-5 md:py-6 hover:bg-white/20 transition-colors border-b xl:border-none border-white/20 text-center flex items-center justify-center">Franchise</a>
          <a href="#" className="px-6 2xl:px-8 py-5 md:py-6 hover:bg-white/20 transition-colors text-center flex items-center justify-center">Contact Us</a>
        </div>
      </div>
    </div>
  );
}