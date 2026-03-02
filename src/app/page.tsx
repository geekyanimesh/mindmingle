// src/app/page.tsx
"use client";

import { useState } from "react";
// Using the exact import path requested
import ImageSlideshow from "@/src/components/ImageSlideshow";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Music");

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* Slideshow Section */}
      <section className="w-full bg-slate-100">
        <ImageSlideshow />
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl md:text-4xl font-bold text-[#00bcd4] mb-4 font-serif">Welcome To The Kids Square</h2>
            <div className="w-16 h-0.5 bg-[#00bcd4] mb-6"></div>
            <p className="md:text-xl text-slate-500 text-sm leading-relaxed mb-8">
              The Kids Square is one of the best play school chain ventured by Kids Square Private Limited, A Pioneer organization in education. The organization is managed by a team of highly qualified, dedicated and experienced educationists and professionals who have taken initiative in making The KiDS Square a dream place for little wonders. We believe that children need a safe, clean and hygienic environment in which they can grow themselves.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#ff5252] rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Active Learning</h4>
                  <p className="text-xs text-slate-500">It is a form of learning in which teaching strives to involve students in the learning process.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#8bc34a] rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Funny and Happy</h4>
                  <p className="text-xs text-slate-500">While kids are not always thrilled to go back to school, parents do not always share that feeling.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#673ab7] rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Fulfill With Love</h4>
                  <p className="text-xs text-slate-500">Traveling back in their history we see the same instruction to love God uninterrupted.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#ff9800] rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Expert Teachers</h4>
                  <p className="text-xs text-slate-500">Our teachers have become experts at understanding the developmental characteristics.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">
             {/* You can replace this src with your actual student image */}
            <img src="/img2.jpg" alt="Student painting" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Decorative Grass Break (Placeholder using CSS colors, replace with your actual SVG/PNG grass border) */}
      <div className="w-full h-24 bg-gradient-to-t from-green-400 to-transparent opacity-50 border-b-8 border-green-500"></div>

      {/* Colorful Tabbed Section */}
      <section className="py-16 bg-[#f8f9fa] px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-slate-100">
          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-5 text-center text-sm font-bold uppercase tracking-wider">
            <button onClick={() => setActiveTab("Music")} className={`py-6 flex flex-col items-center gap-2 ${activeTab === 'Music' ? 'bg-white text-slate-800' : 'bg-slate-50 text-slate-400'}`}>
              <span className="text-2xl">🎵</span> Music
            </button>
            <button onClick={() => setActiveTab("Learn")} className={`py-6 flex flex-col items-center gap-2 ${activeTab === 'Learn' ? 'bg-[#ff5252] text-white' : 'bg-[#ff5252]/90 text-white/80'}`}>
              <span className="text-2xl">🎓</span> Learn
            </button>
            <button onClick={() => setActiveTab("Painting")} className={`py-6 flex flex-col items-center gap-2 ${activeTab === 'Painting' ? 'bg-[#ff9800] text-white' : 'bg-[#ff9800]/90 text-white/80'}`}>
              <span className="text-2xl">🎨</span> Painting
            </button>
            <button onClick={() => setActiveTab("Sports")} className={`py-6 flex flex-col items-center gap-2 ${activeTab === 'Sports' ? 'bg-[#00bcd4] text-white' : 'bg-[#00bcd4]/90 text-white/80'}`}>
              <span className="text-2xl">⚽</span> Sports
            </button>
            <button onClick={() => setActiveTab("Playground")} className={`py-6 flex flex-col items-center gap-2 col-span-2 md:col-span-1 ${activeTab === 'Playground' ? 'bg-[#ffb300] text-white' : 'bg-[#ffb300]/90 text-white/80'}`}>
              <span className="text-2xl">🏆</span> Playground
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl font-serif font-bold text-[#00bcd4] mb-4">{activeTab}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {activeTab} is an art form and cultural activity whose medium is sound organized in time. The common elements of music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture.
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8 text-sm text-slate-600">
                <div className="flex items-center gap-2"><span className="text-[#00bcd4]">♥</span> Qualified Teacher</div>
                <div className="flex items-center gap-2"><span className="text-[#00bcd4]">♥</span> Strategic Location</div>
                <div className="flex items-center gap-2"><span className="text-[#00bcd4]">♥</span> Love & Care</div>
                <div className="flex items-center gap-2"><span className="text-[#00bcd4]">♥</span> Active Learning</div>
                <div className="flex items-center gap-2"><span className="text-[#00bcd4]">♥</span> Delicious Food</div>
                <div className="flex items-center gap-2"><span className="text-[#00bcd4]">♥</span> Transportation</div>
              </div>
              <button className="bg-[#00bcd4] hover:bg-cyan-600 text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors">
                View Details
              </button>
            </div>
            <div>
              {/* Replace with your respective activity image */}
              <img src="/image1.JPG" alt={`${activeTab} activity`} className="w-full h-full object-cover rounded shadow-md border-4 border-slate-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 font-serif">What Happy Parent's Say ?</h2>
        <div className="mb-6">
          <p className="text-sm font-bold text-slate-700 mb-4">"We thank you for taking good care of our daughter"</p>
          <div className="text-4xl text-[#ff5252] font-serif mb-2">❞</div>
          <p className="text-[#00bcd4] font-bold font-serif text-lg">Priyanka singh</p>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-3 h-3 rounded-full border-2 border-[#673ab7]"></div>
          <div className="w-3 h-3 rounded-full bg-[#00bcd4]"></div>
        </div>
      </section>
      
      {/* Footer Decorative Grass Break */}
      {/* Modern Pre-Footer CTA with Floating CSS Shapes */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#00bcd4] mt-12">
        {/* Floating Background Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#ffb300]/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-[#ff5252]/40 rounded-3xl rotate-45 blur-md"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-[#8bc34a]/30 rounded-full blur-2xl"></div>
        <div className="absolute -top-16 right-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        {/* Decorative Grid Pattern (Subtle) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
            Give Your Child The Best Start
          </h2>
          <p className="text-cyan-50 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Admissions are now open for the upcoming academic year. Join our vibrant community of learners and let your little one shine!
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="bg-[#ff5252] hover:bg-red-600 text-white px-10 py-4 rounded-xl text-base font-extrabold uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto border-2 border-[#ff5252]">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#00bcd4] text-white px-10 py-4 rounded-xl text-base font-extrabold uppercase tracking-widest transition-all shadow-lg w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}