"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Admission", href: "/admission" },
  { label: "Academics", href: "/academics" },
  { label: "Our Course", href: "/ourCourse" },
  { label: "Our Product", href: "/ourProduct" },
  { label: "Parent's Corner", href: "/parentsCorner" },
  { label: "Our Network", href: "/ourNetwork" },
  { label: "Gallery", href: "/gallery" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact Us", href: "/contactUs" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full shadow-md z-30 bg-white font-sans sticky top-0">

      {/* ── Top micro-bar: email left, Facebook right ── */}
      <div className="bg-[#00bcd4] text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-1.5 flex items-center justify-between">
          <a
            href="mailto:info@kidssquare.co.in"
            className="flex items-center gap-2 text-xs font-bold tracking-wide hover:text-cyan-100 transition-colors"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            info@kidssquare.co.in
          </a>
          <a
            href="https://www.facebook.com/share/17xXGnnAGk/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-bold tracking-wide hover:text-cyan-100 transition-colors"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Follow us on Facebook
          </a>
        </div>
      </div>

      {/* ── Middle bar: Logo + contact info ── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.jpeg" alt="The Kids Square Logo" className="w-14 h-14 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">The KiDS Square</h1>
              <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.18em] mt-1">
                Building Blocks of Smart Future
              </p>
            </div>
          </Link>

          {/* Centre contact info */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#00bcd4] text-white rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">Call Us</p>
                <a href="tel:+919560533778" className="text-[15px] font-black text-[#673ab7] hover:text-[#ff5252] transition-colors">
                  +91-9560533778
                </a>
              </div>
            </div>

            <div className="w-px h-8 bg-slate-200" />

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#ff5252] text-white rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">We Are Open</p>
                <p className="text-[15px] font-black text-[#673ab7]">Mon–Fri 9am–2pm</p>
              </div>
            </div>

            <div className="w-px h-8 bg-slate-200" />

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#673ab7] text-white rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <a href="mailto:info@kidssquare.co.in" className="text-[15px] font-black text-[#673ab7] hover:text-[#ff5252] transition-colors">
                info@kidssquare.co.in
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Nav links bar ── */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} xl:block bg-[#ff5252] w-full`}>
        <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row justify-center text-[12.5px] font-extrabold text-white uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3.5 transition-colors border-b xl:border-none border-white/20 text-center flex items-center justify-center whitespace-nowrap ${
                  isActive
                    ? "bg-[#00bcd4] shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)]"
                    : "hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}