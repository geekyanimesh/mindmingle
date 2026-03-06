"use client";

import { useState } from "react";
import Navbar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";

const programs = [
  { name: "Toddler", age: "1+ Years", icon: "🌱", color: "#ff5252" },
  { name: "Playgroup", age: "1.5+ Years", icon: "🎨", color: "#00bcd4" },
  { name: "Nursery", age: "2.5+ Years", icon: "🌸", color: "#ff9800" },
  { name: "LKG", age: "3.5+ Years", icon: "⭐", color: "#673ab7" },
];

const dayCarePrograms = [
  { type: "Full-Day Day-Care", timing: "9 AM – 6 PM", age: "1–5 Years" },
  { type: "Extended Day Care", timing: "8:30 AM – 7:30 PM", age: "1–5 Years" },
];

const afterSchoolPrograms = [
  { type: "Junior", timing: "12:30 PM – 6 PM", age: "1–5 Years" },
  { type: "Junior Extended", timing: "12:30 PM – 7:30 PM", age: "1–5 Years" },
  { type: "Senior", timing: "2 PM – 6 PM", age: "6–10 Years" },
  { type: "Senior Extended", timing: "2 PM – 7:30 PM", age: "6–10 Years" },
];

const documents = [
  {
    num: "01",
    text: "Birth certificate of the child.",
    icon: "📄",
  },
  {
    num: "02",
    text: "Five passport size photographs of the child and three passport size photographs of both the parents.",
    icon: "📸",
  },
  {
    num: "03",
    text: "One passport size photograph of the attendant / family member for collecting child from the school.",
    icon: "👤",
  },
];

export default function AdmissionPage() {
  const [activeTab, setActiveTab] = useState<"daycare" | "afterschool">("daycare");

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/admission-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#673ab7]/80 via-[#00bcd4]/60 to-black/40" />
        {/* Playful dots overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 font-[Nunito]">
            <span>Home</span>
            <span className="text-[#00bcd4]">›</span>
            <span className="text-white">Admission</span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-black text-white tracking-tight"
            style={{ fontFamily: "'Fredoka One', cursive", textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
          >
            Admission
          </h1>
          {/* Decorative underline */}
          <div className="mt-3 flex gap-2 items-center">
            <div className="h-1 w-16 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-8 rounded-full bg-[#00bcd4]" />
            <div className="h-1 w-4 rounded-full bg-[#ff9800]" />
          </div>
        </div>
      </section>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&family=Poppins:wght@400;500;600;700&display=swap');
        body { font-family: 'Nunito', sans-serif; }
        .section-title { font-family: 'Fredoka One', cursive; }
        .body-text { font-family: 'Poppins', sans-serif; }
        .table-styled th { font-family: 'Fredoka One', cursive; letter-spacing: 0.04em; }
        .table-styled td { font-family: 'Poppins', sans-serif; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
        .fade-in { animation: fadeUp 0.6s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <main className="bg-[#fafafa]">

        {/* ─── Admission Information ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start fade-in">
          {/* Left Content */}
          <div>
            {/* Section badge */}
            <span className="inline-flex items-center gap-2 bg-[#00bcd4]/10 text-[#00bcd4] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5">
              🎓 Enroll Your Child
            </span>
            <h2 className="section-title text-4xl md:text-5xl text-slate-800 mb-2 leading-tight">
              Admission <span className="text-[#00bcd4]">Information</span>
            </h2>
            <div className="flex gap-2 mb-6">
              <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
              <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
            </div>

            <p className="body-text text-slate-600 text-base leading-relaxed mb-8 font-medium">
              Admission in The KiDS Square Play School & Day Care remains{" "}
              <span className="text-[#673ab7] font-bold">open throughout the year.</span>{" "}
              We welcome children into a nurturing environment designed to spark curiosity and joy.
            </p>

            {/* Programs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {programs.map((p) => (
                <div
                  key={p.name}
                  className="card-hover rounded-2xl p-5 bg-white shadow-sm border border-slate-100 flex items-center gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: p.color + "18" }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <p className="section-title text-lg text-slate-800 leading-none">{p.name}</p>
                    <p className="body-text text-sm font-semibold mt-1" style={{ color: p.color }}>
                      {p.age}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Full Program Table */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <table className="table-styled w-full text-sm text-center">
                <thead>
                  <tr className="bg-[#673ab7] text-white">
                    <th className="py-3.5 px-5">Program</th>
                    <th className="py-3.5 px-5">Age Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((p, i) => (
                    <tr
                      key={p.name}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="py-3 px-5 font-semibold text-[#ff5252]">{p.name}</td>
                      <td className="py-3 px-5 text-slate-600 font-medium">{p.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative background blob */}
              <div className="absolute -top-6 -right-6 w-64 h-64 rounded-full bg-[#00bcd4]/10 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-[#ff5252]/10 -z-10" />
              <img
                src="/admission-child.png"
                alt="Child ready for school"
                className="w-full h-auto object-contain drop-shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80";
                }}
              />
              {/* Floating badge */}
              <div className="absolute top-8 -left-4 bg-[#ff5252] text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="section-title text-sm">Admissions</p>
                <p className="body-text text-xs font-bold opacity-90">Open Year Round!</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Documents Required ─── */}
        <section className="bg-gradient-to-br from-[#673ab7]/5 via-white to-[#00bcd4]/5 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-[#ff5252]/10 text-[#ff5252] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4">
                📋 Checklist
              </span>
              <h2 className="section-title text-4xl text-slate-800">
                Documents <span className="text-[#ff5252]">Required</span>
              </h2>
              <div className="flex justify-center gap-2 mt-3">
                <div className="h-1 w-12 rounded-full bg-[#673ab7]" />
                <div className="h-1 w-6 rounded-full bg-[#ff5252]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="card-hover bg-white rounded-3xl p-7 shadow-sm border border-slate-100 relative overflow-hidden"
                >
                  {/* Large number watermark */}
                  <span
                    className="absolute -top-3 -right-1 text-8xl font-black opacity-5 select-none section-title"
                    style={{ color: ["#ff5252", "#00bcd4", "#673ab7"][i] }}
                  >
                    {doc.num}
                  </span>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                    style={{ background: ["#ff5252", "#00bcd4", "#673ab7"][i] + "15" }}
                  >
                    {doc.icon}
                  </div>
                  <div
                    className="text-xs font-black uppercase tracking-widest mb-2 section-title"
                    style={{ color: ["#ff5252", "#00bcd4", "#673ab7"][i] }}
                  >
                    Document {doc.num}
                  </div>
                  <p className="body-text text-slate-600 text-sm leading-relaxed font-medium">{doc.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Day Care Section ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#00bcd4]/10 text-[#00bcd4] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4">
                🏠 Safe & Secure
              </span>
              <h2 className="section-title text-4xl text-slate-800">
                Day <span className="text-[#00bcd4]">Care</span>
              </h2>
              <div className="flex gap-2 mt-2">
                <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
                <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
              </div>
            </div>

            {/* Tab Toggle */}
            <div className="flex bg-slate-100 rounded-2xl p-1.5 w-fit gap-1">
              <button
                onClick={() => setActiveTab("daycare")}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all body-text ${
                  activeTab === "daycare"
                    ? "bg-[#00bcd4] text-white shadow-md"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Day Care
              </button>
              <button
                onClick={() => setActiveTab("afterschool")}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all body-text ${
                  activeTab === "afterschool"
                    ? "bg-[#673ab7] text-white shadow-md"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                After School
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gradient-to-r from-[#00bcd4]/10 to-[#673ab7]/5 rounded-3xl p-6 mb-8 border border-[#00bcd4]/20">
            <p className="body-text text-slate-700 text-base leading-relaxed font-medium">
              <span className="text-[#673ab7] font-bold">The KiDS Square Day Care</span> program is a secure heaven for working parents to leave their children in while they are at work. It is a{" "}
              <span className="text-[#00bcd4] font-bold">home away from home.</span>
            </p>
          </div>

          {/* Tables */}
          {activeTab === "daycare" && (
            <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200">
              <table className="table-styled w-full text-sm text-center">
                <thead>
                  <tr className="bg-[#00bcd4] text-white">
                    <th className="py-4 px-6 text-base">Type of Day Care</th>
                    <th className="py-4 px-6 text-base">Timing</th>
                    <th className="py-4 px-6 text-base">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {dayCarePrograms.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cyan-50/50"}>
                      <td className="py-4 px-6 font-semibold text-[#ff5252]">{row.type}</td>
                      <td className="py-4 px-6 text-slate-600 font-medium">{row.timing}</td>
                      <td className="py-4 px-6 text-[#673ab7] font-bold">{row.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "afterschool" && (
            <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200">
              <table className="table-styled w-full text-sm text-center">
                <thead>
                  <tr className="bg-[#673ab7] text-white">
                    <th className="py-4 px-6 text-base">Type of Day Care</th>
                    <th className="py-4 px-6 text-base">Timing</th>
                    <th className="py-4 px-6 text-base">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {afterSchoolPrograms.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-purple-50/50"}>
                      <td className="py-4 px-6 font-semibold text-[#ff5252]">{row.type}</td>
                      <td className="py-4 px-6 text-slate-600 font-medium">{row.timing}</td>
                      <td className="py-4 px-6 text-[#673ab7] font-bold">{row.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Info Notes */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⏱️", color: "#ff5252", text: "Our few centers provide day care facilities on a per hour basis." },
              { icon: "📅", color: "#00bcd4", text: "Day Care facilities are also available for weekends (Saturday & Sunday)." },
              { icon: "📞", color: "#673ab7", text: "For more details please contact the school co-ordinator or at admission helpline." },
            ].map((note, i) => (
              <div
                key={i}
                className="card-hover flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ background: note.color + "15" }}
                >
                  {note.icon}
                </div>
                <p className="body-text text-slate-600 text-sm leading-relaxed font-medium">{note.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA Banner ─── */}
        <section className="bg-gradient-to-r from-[#673ab7] to-[#00bcd4] py-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
              Ready to Join Our Family?
            </h2>
            <p className="body-text text-white/85 text-base mb-8 font-medium leading-relaxed">
              Give your child the best start in life. Contact us today to begin the admission process and secure your child's spot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919560533778"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#673ab7] font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base"
              >
                📞 Call +91-9560533778
              </a>
              <a
                href="mailto:info@thekidssquare.in"
                className="inline-flex items-center justify-center gap-3 bg-white/20 text-white font-black px-8 py-4 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all body-text text-base"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}