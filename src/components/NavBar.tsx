// src/components/Navbar.tsx
"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-sm z-50 bg-white font-sans">
      {/* Top Bar - Cyan */}
      <div className="bg-[#00bcd4] text-white text-xs py-2 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
          <a href="mailto:info@thekidssquare.in" className="hover:underline">info@thekidssquare.in</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-cyan-200">f</a>
          <a href="#" className="hover:text-cyan-200">tw</a>
          <a href="#" className="hover:text-cyan-200">G+</a>
          <a href="#" className="hover:text-cyan-200">ig</a>
          <a href="#" className="hover:text-cyan-200">in</a>
        </div>
      </div>

      {/* Middle Bar - White */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="The Kids Square Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">The KiDS Square</h1>
            <p className="text-[9px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Building Blocks of Smart Future</p>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>

        {/* Info Area (Hidden on mobile) */}
        <div className="hidden md:flex gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00bcd4] text-white rounded flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Call Us Today!</p>
              <p className="text-sm font-bold text-violet-800">+91-9560533778</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#ff5252] text-white rounded flex items-center justify-center border-2 border-[#ff5252]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase">We Are Open!</p>
              <p className="text-sm font-bold text-violet-800">Mon-Fri 09:00 am-02:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Navigation (Desktop: Coral/Red, Mobile: Dropdown) */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block bg-[#ff5252] w-full`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-xs font-bold text-white uppercase">
          <a href="#" className="bg-[#00bcd4] px-6 py-4 hover:bg-cyan-600 transition-colors border-b md:border-none border-white/20">Home</a>
          <a href="#" className="px-6 py-4 hover:bg-white/20 transition-colors flex items-center gap-1 border-b md:border-none border-white/20">About Us <span className="text-[10px]">▼</span></a>
          <a href="#" className="px-6 py-4 hover:bg-white/20 transition-colors border-b md:border-none border-white/20">Admission</a>
          <a href="#" className="px-6 py-4 hover:bg-white/20 transition-colors border-b md:border-none border-white/20">Academics</a>
          <a href="#" className="px-6 py-4 hover:bg-white/20 transition-colors border-b md:border-none border-white/20">Our Course</a>
          <a href="#" className="px-6 py-4 hover:bg-white/20 transition-colors border-b md:border-none border-white/20">Parent's Corner</a>
          <a href="#" className="px-6 py-4 hover:bg-white/20 transition-colors border-b md:border-none border-white/20">Our Network</a>
          <a href="#" className="px-6 py-4 hover:bg-white/20 transition-colors border-b md:border-none border-white/20">Franchise</a>
          <a href="#" className="px-6 py-4 hover:bg-white/20 transition-colors">Contact Us</a>
        </div>
      </div>
    </div>
  );
}