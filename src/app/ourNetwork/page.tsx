"use client";

import { useState } from "react";

const branches = [
  { city: "Satna", state: "Madhya Pradesh", name: "Little Angel" },
  { city: "Patna", state: "Bihar", name: "Sparkles" },
  { city: "Bolpur", state: "West Bengal", name: "Pumpkin Patch" },
  { city: "Indore", state: "Madhya Pradesh", name: "First Step" },
  { city: "Roorkee", state: "Uttarakhand", name: "Little Stars" },
  { city: "Bihar Sharif, Nalanda", state: "Bihar", name: "Little Flowers" },
  { city: "Mira Road (East), Mumbai", state: "Maharashtra", name: "Stepping Stones" },
  { city: "Faizabad", state: "Uttar Pradesh", name: "Rising Stars" },
  { city: "Purnea", state: "Bihar", name: "Kidzania" },
  { city: "Mira Road", state: "Maharashtra", name: "Cute Ducklings" },
  { city: "Moradabad", state: "Uttar Pradesh", name: "Bachpan" },
  { city: "Uri, Baramula", state: "Jammu & Kashmir", name: "Blooming Buds" },
  { city: "Bangalore", state: "Karnataka", name: "Champs World" },
  { city: "Kurnool", state: "Andhra Pradesh", name: "Wonderkids" },
  { city: "Asansol", state: "West Bengal", name: "Kinder's Joy" },
  { city: "Srinagar", state: "Jammu & Kashmir", name: "Hazelwood" },
  { city: "Raipur", state: "Chhattisgarh", name: "Bright Minds" },
  { city: "Pune", state: "Maharashtra", name: "Island" },
  { city: "Palwal", state: "Haryana", name: "Nanhe Kadam" },
  { city: "Mandla", state: "Madhya Pradesh", name: "Wonderland" },
  { city: "Lucknow", state: "Uttar Pradesh", name: "Vatsalya" },
];

const allStates = ["All", ...Array.from(new Set(branches.map((b) => b.state))).sort()];

const stats = [
  { icon: "👩‍🏫", label: "Qualified Teachers", value: "500+" },
  { icon: "🎓", label: "Successful Kids", value: "10,000+" },
  { icon: "😊", label: "Happy Parents", value: "8,000+" },
  { icon: "🏆", label: "Awards Won", value: "25+" },
];

const cardColors = ["#00bcd4", "#ff5252", "#673ab7", "#ff9800"];

export default function OurNetworkPage() {
  const [selectedState, setSelectedState] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = branches.filter((b) => {
    const matchState = selectedState === "All" || b.state === selectedState;
    const matchSearch =
      search === "" ||
      b.city.toLowerCase().includes(search.toLowerCase()) ||
      b.state.toLowerCase().includes(search.toLowerCase()) ||
      b.name.toLowerCase().includes(search.toLowerCase());
    return matchState && matchSearch;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600;700&display=swap');
        .sec-title { font-family: 'Fredoka One', cursive; }
        .body-text  { font-family: 'Poppins', sans-serif; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(0,0,0,0.1); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeUp 0.55s ease both; }
        .pin-bounce:hover { animation: pinBounce 0.4s ease; }
        @keyframes pinBounce { 0%,100% { transform: translateY(0); } 40% { transform: translateY(-8px); } }
        .input-field {
          font-family: 'Poppins', sans-serif;
          padding: 11px 16px 11px 42px;
          border-radius: 14px;
          border: 2px solid #e2e8f0;
          background: #fff;
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
        }
        .input-field:focus { border-color: #00bcd4; box-shadow: 0 0 0 4px rgba(0,188,212,0.1); }
        .input-field::placeholder { color: #94a3b8; }
        @keyframes countUp { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }
        .count-in { animation: countUp 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative h-60 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/network-hero.jpg')]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/80 via-[#673ab7]/60 to-[#ff5252]/50" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 body-text">
            <span>Home</span><span className="text-[#ff9800]">›</span><span className="text-white">Our Network</span>
          </div>
          <h1 className="sec-title text-5xl md:text-6xl text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            Our Network
          </h1>
          <div className="mt-3 flex gap-2">
            <div className="h-1 w-16 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-8 rounded-full bg-[#00bcd4]" />
            <div className="h-1 w-4 rounded-full bg-[#ff9800]" />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa]">

        {/* ── Section Header ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-8 text-center fade-in">
          <span className="inline-flex items-center gap-2 bg-[#00bcd4]/10 text-[#00bcd4] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
            📍 Across India
          </span>
          <h2 className="sec-title text-4xl md:text-5xl text-slate-800 mb-3">
            Our <span className="text-[#00bcd4]">Network</span>
          </h2>
          <div className="flex justify-center gap-2 mb-4">
            <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
          </div>
          <p className="body-text text-slate-500 text-sm font-medium max-w-lg mx-auto">
            Select a state or search by city to find a KiDS Square centre near you.
          </p>
        </section>

        {/* ── Search + Filter Bar ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base">🔍</span>
              <input
                className="input-field"
                placeholder="Search city, state or branch..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {/* State pills */}
            <div className="flex flex-wrap gap-2 flex-1">
              {allStates.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedState(s)}
                  className={`body-text text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                    selectedState === s
                      ? "bg-[#00bcd4] text-white shadow-md"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {/* Count badge */}
            <div className="shrink-0 bg-[#673ab7]/10 text-[#673ab7] font-black body-text text-sm px-4 py-2 rounded-xl">
              {filtered.length} Centre{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
        </section>

        {/* ── Branch Cards Grid ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <p className="sec-title text-2xl text-slate-400">No centres found</p>
              <p className="body-text text-slate-400 text-sm mt-2">Try a different city or state</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((branch, i) => {
                const color = cardColors[i % cardColors.length];
                return (
                  <div
                    key={i}
                    className="card-hover bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
                  >
                    {/* Coloured top bar */}
                    <div className="h-2 w-full" style={{ background: color }} />

                    <div className="p-6 flex flex-col items-start gap-3">
                      {/* Pin icon + location */}
                      <div className="flex items-start gap-4">
                        <div
                          className="pin-bounce w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-sm"
                          style={{ background: color + "18" }}
                        >
                          📍
                        </div>
                        <div>
                          <p className="sec-title text-xl text-slate-800 leading-tight">{branch.city}</p>
                          <span
                            className="body-text text-xs font-bold px-2.5 py-0.5 rounded-full mt-1 inline-block"
                            style={{ background: color + "15", color }}
                          >
                            {branch.state}
                          </span>
                        </div>
                      </div>

                      {/* Branch name */}
                      <p className="body-text text-sm font-bold text-slate-700">
                        The KiDS Square –{" "}
                        <span style={{ color }}>{branch.name}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ── Stats Banner ── */}
        <section className="bg-gradient-to-r from-[#673ab7] to-[#9c27b0] py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center count-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-3xl mb-4">
                  {s.icon}
                </div>
                <p className="sec-title text-4xl text-white mb-1">{s.value}</p>
                <p className="body-text text-white/75 text-sm font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-r from-[#ff5252] to-[#00bcd4] py-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h2 className="sec-title text-4xl md:text-5xl text-white mb-4">Want a Centre Near You?</h2>
            <p className="body-text text-white/85 text-base mb-8 font-medium leading-relaxed">
              Can't find a KiDS Square near you? Enquire about our franchise opportunities and bring us to your city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/franchise"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#673ab7] font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base">
                🏫 Open a Franchise
              </a>
              <a href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white/20 text-white font-black px-8 py-4 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all body-text text-base">
                📞 Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}