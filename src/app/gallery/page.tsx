"use client";

import { useState } from "react";

const allPhotos = [
  { src: "/01 copy.jpg", category: "events" },
  { src: "/03 copy.jpg", category: "events" },
  { src: "/04 copy.jpg", category: "events" },
  { src: "/05 copy.jpg", category: "events" },
  { src: "/06 copy.jpg", category: "events" },
  { src: "/07 copy.jpg", category: "events" },
  { src: "/08 copy.jpg", category: "events" },
  { src: "/09 copy.jpg", category: "events" },
  { src: "/10 copy.jpg", category: "events" },
  { src: "/11 copy.jpg", category: "events" },
  { src: "/10346543_1546627472222307_4741266857808600602_n.jpg", category: "activities" },
  { src: "/10382636_164001750460976_5533876974069022762_n.jpg", category: "activities" },
  { src: "/10392553_1538416899710031_7720911818438288906_n.jpg", category: "activities" },
  { src: "/10500447_164001747127643_3927280648622089019_n.jpg", category: "activities" },
  { src: "/10615569_1546616852223369_4457965064043055753_n.jpg", category: "activities" },
  { src: "/10625103_1546642892220765_8393717664786123953_n.jpg", category: "activities" },
  { src: "/10846384_1550551535163234_4269812039320515755_n (1).jpg", category: "activities" },
  { src: "/1476082_1550553931829661_1576418876641054094_n.jpg", category: "activities" },
  { src: "/1510855_1550553465163041_7115272553341452351_n.jpg", category: "activities" },
  { src: "/20150423_112548.jpg", category: "campus" },
  { src: "/20160103_105959.jpg", category: "campus" },
  { src: "/20160112_120359.jpg", category: "campus" },
  { src: "/20160112_120409.jpg", category: "campus" },
  { src: "/20160112_120415.jpg", category: "campus" },
  { src: "/20160112_120428.jpg", category: "campus" },
  { src: "/20160112_120444.jpg", category: "campus" },
  { src: "/_DSC0003.JPG", category: "campus" },
  { src: "/_DSC0004.JPG", category: "campus" },
  { src: "/_DSC0007.JPG", category: "campus" },
  { src: "/_DSC0009.JPG", category: "campus" },
  { src: "/_DSC0039.JPG", category: "campus" },
  { src: "/_DSC0057.JPG", category: "campus" },
  { src: "/_DSC0060.JPG", category: "campus" },
  { src: "/_DSC0076.JPG", category: "campus" },
  { src: "/_DSC0089.JPG", category: "campus" },
  { src: "/_DSC0095.JPG", category: "campus" },
  { src: "/_DSC0097.JPG", category: "campus" },
  { src: "/_DSC0105.JPG", category: "campus" },
  { src: "/_DSC0162.JPG", category: "campus" },
  { src: "/DSC_0474.JPG", category: "events" },
  { src: "/DSC_0565.JPG", category: "events" },
  { src: "/DSC_0716.JPG", category: "events" },
  { src: "/DSC_0819.JPG", category: "events" },
  { src: "/DSC_0838.JPG", category: "events" },
  { src: "/DSC_0842.JPG", category: "events" },
  { src: "/DSC_0868.JPG", category: "events" },
  { src: "/DSC_0874.JPG", category: "events" },
  { src: "/DSC_0893.JPG", category: "events" },
  { src: "/DSC_0927.JPG", category: "events" },
  { src: "/DSC_0946.JPG", category: "events" },
  { src: "/DSC_0963.JPG", category: "events" },
  { src: "/DSC_0997.JPG", category: "events" },
  { src: "/DSC_1028.JPG", category: "events" },
  { src: "/image1.JPG", category: "activities" },
  { src: "/IMG_20150720_111950.jpg", category: "activities" },
  { src: "/IMG_20150806_110817.jpg", category: "activities" },
  { src: "/img2.jpg", category: "activities" },
  { src: "/IMG_3034.JPG", category: "activities" },
  { src: "/IMG_3052.JPG", category: "activities" },
  { src: "/IMG_3090.JPG", category: "activities" },
];

const filters = [
  { id: "all", label: "All Photos", icon: "🖼️", color: "#673ab7" },
  { id: "events", label: "Events", icon: "🎉", color: "#ff5252" },
  { id: "activities", label: "Activities", icon: "🎨", color: "#00bcd4" },
  { id: "campus", label: "Campus", icon: "🏫", color: "#ff9800" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeFilter === "all"
    ? allPhotos
    : allPhotos.filter((p) => p.category === activeFilter);

  const openLightbox = (src: string, index: number) => {
    setLightbox(src);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightbox(null);

  const prevPhoto = () => {
    const newIndex = (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightboxIndex(newIndex);
    setLightbox(filtered[newIndex].src);
  };

  const nextPhoto = () => {
    const newIndex = (lightboxIndex + 1) % filtered.length;
    setLightboxIndex(newIndex);
    setLightbox(filtered[newIndex].src);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600;700&display=swap');
        .sec-title { font-family: 'Fredoka One', cursive; }
        .body-text  { font-family: 'Poppins', sans-serif; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeUp 0.55s ease both; }
        .photo-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .photo-card:hover { transform: scale(1.03); box-shadow: 0 16px 40px rgba(0,0,0,0.18); }
        .photo-card:hover .photo-overlay { opacity: 1; }
        .photo-overlay { opacity: 0; transition: opacity 0.25s ease; }
        @keyframes lightboxIn { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
        .lightbox-img { animation: lightboxIn 0.25s ease both; }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative h-60 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#673ab7]/90 via-[#ff5252]/70 to-[#00bcd4]/70" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 body-text">
            <span>Home</span><span className="text-[#ff9800]">›</span><span className="text-white">Gallery</span>
          </div>
          <h1 className="sec-title text-5xl md:text-6xl text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            Our Gallery
          </h1>
          <div className="mt-3 flex gap-2">
            <div className="h-1 w-16 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-8 rounded-full bg-[#00bcd4]" />
            <div className="h-1 w-4 rounded-full bg-[#ff9800]" />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa]">

        {/* ── Header + filters ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-8 fade-in">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-[#673ab7]/10 text-[#673ab7] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
              📸 Memories
            </span>
            <h2 className="sec-title text-4xl text-slate-800">
              Life at <span className="text-[#673ab7]">The KiDS Square</span>
            </h2>
            <div className="flex justify-center gap-2 mt-3 mb-4">
              <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
              <div className="h-1 w-6 rounded-full bg-[#673ab7]" />
            </div>
            <p className="body-text text-slate-500 text-sm font-medium max-w-lg mx-auto">
              A glimpse into the joy, learning and memories we create every day.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all body-text ${
                  activeFilter === f.id ? "text-white shadow-md scale-105" : "bg-white text-slate-500 border border-slate-200 hover:border-slate-300"
                }`}
                style={activeFilter === f.id ? { background: f.color } : {}}
              >
                <span>{f.icon}</span> {f.label}
                {activeFilter === f.id && (
                  <span className="bg-white/25 text-white text-xs font-black px-2 py-0.5 rounded-full">
                    {filtered.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── Photo Grid ── */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <div
                key={photo.src}
                className="photo-card break-inside-avoid rounded-2xl overflow-hidden cursor-pointer relative shadow-sm"
                onClick={() => openLightbox(photo.src, i)}
                style={{ animationDelay: `${(i % 12) * 0.04}s` }}
              >
                <img
                  src={photo.src}
                  alt={`Gallery photo ${i + 1}`}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).closest("div")!.style.display = "none";
                  }}
                />
                {/* Hover overlay */}
                <div className="photo-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ml-auto">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <img
            key={lightbox}
            src={lightbox}
            alt="Gallery preview"
            className="lightbox-img max-h-[88vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 body-text text-white/60 text-sm font-semibold">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}