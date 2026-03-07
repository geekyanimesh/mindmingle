// src/components/ImageSlideshow.tsx
"use client";

import { useState, useEffect, useCallback } from "react";

const images = [
  "/image1.JPG",
  "/img2.jpg",
  "/_DSC0003.JPG",
  "/_DSC0004.JPG",
  "/_DSC0007.JPG",
  "/_DSC0009.JPG",
  "/_DSC0039.JPG",
  "/_DSC0057.JPG",
  "/_DSC0060.JPG",
  "/_DSC0076.JPG",
  "/_DSC0089.JPG",
  "/_DSC0095.JPG",
  "/_DSC0097.JPG",
  "/_DSC0105.JPG",
  "/_DSC0162.JPG",
  "/DSC_0474.JPG",
  "/DSC_0565.JPG",
  "/DSC_0716.JPG",
  "/DSC_0819.JPG",
  "/DSC_0838.JPG",
  "/DSC_0842.JPG",
  "/DSC_0868.JPG",
  "/DSC_0874.JPG",
  "/DSC_0893.JPG",
  "/DSC_0927.JPG",
  "/DSC_0946.JPG",
  "/DSC_0963.JPG",
  "/DSC_0997.JPG",
  "/DSC_1028.JPG",
  "/IMG_3034.JPG",
  "/IMG_3052.JPG",
  "/IMG_3090.JPG",
  "/IMG_20150720_111950.jpg",
  "/IMG_20150806_110817.jpg",
  "/20150423_112548.jpg",
  "/20160103_105959.jpg",
  "/20160112_120359.jpg",
  "/20160112_120409.jpg",
  "/20160112_120415.jpg",
  "/20160112_120428.jpg",
  "/20160112_120444.jpg",
  "/01 copy.jpg",
  "/03 copy.jpg",
  "/04 copy.jpg",
  "/05 copy.jpg",
  "/06 copy.jpg",
  "/07 copy.jpg",
  "/08 copy.jpg",
  "/09 copy.jpg",
  "/10 copy.jpg",
  "/11 copy.jpg",
  "/10346543_1546627472222307_4741266857808600602_n.jpg",
  "/10382636_164001750460976_5533876974069022762_n.jpg",
  "/10392553_1538416899710031_7720911818438288906_n.jpg",
  "/10500447_164001747127643_3927280648622089019_n.jpg",
  "/10615569_1546616852223369_4457965064043055753_n.jpg",
  "/10625103_1546642892220765_8393717664786123953_n.jpg",
  "/10846384_1550551535163234_4269812039320515755_n (1).jpg",
  "/1476082_1550553931829661_1576418876641054094_n.jpg",
  "/1510855_1550553465163041_7115272553341452351_n.jpg",
];

const TOTAL = images.length;

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Always use the functional updater form — no stale closure possible
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]); // nextSlide is stable due to useCallback with no deps

  return (
    <div className="relative w-full h-[50vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-slate-900 group">

      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Blurred background fills side/top bars */}
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-75"
          />
          {/* Main image at true proportions */}
          <img
            src={src}
            alt={`School slide ${index + 1}`}
            className="relative z-10 w-full h-full object-contain object-center"
          />
        </div>
      ))}

      {/* Prev arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-4 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-4 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Counter + windowed dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {[-2, -1].map((offset) => {
          const i = (currentIndex + offset + TOTAL) % TOTAL;
          return (
            <button
              key={`p${offset}`}
              onClick={() => setCurrentIndex(i)}
              className="h-2.5 w-2.5 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300"
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}

        {/* Active pill */}
        <div className="h-3 w-10 rounded-full bg-white shadow-md" />

        {[1, 2].map((offset) => {
          const i = (currentIndex + offset) % TOTAL;
          return (
            <button
              key={`n${offset}`}
              onClick={() => setCurrentIndex(i)}
              className="h-2.5 w-2.5 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300"
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}

        <span className="ml-2 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
          {currentIndex + 1} / {TOTAL}
        </span>
      </div>

    </div>
  );
}