"use client";

import { useState } from "react";

const events = [
  { icon: "🎂", color: "#ff5252", label: "Birthday Celebrations" },
  { icon: "🎉", color: "#00bcd4", label: "Festival Celebrations" },
  { icon: "🌟", color: "#ff9800", label: "Annual Day" },
  { icon: "🧭", color: "#673ab7", label: "Orientation Programs" },
  { icon: "👨‍👩‍👧", color: "#ff5252", label: "Parenting Workshops" },
  { icon: "📚", color: "#00bcd4", label: "Seminars" },
  { icon: "💐", color: "#ff9800", label: "Mother's Day" },
  { icon: "👨‍👧", color: "#673ab7", label: "Parent's Day" },
  { icon: "👴", color: "#ff5252", label: "Grandparents Day" },
];

const downloads = [
  {
    icon: "📋",
    color: "#00bcd4",
    label: "Parent's Circular",
    desc: "Monthly updates, notices and important announcements for parents.",
    file: "#",
  },
  {
    icon: "🍱",
    color: "#ff9800",
    label: "Monthly Meal Planner",
    desc: "Nutritious, balanced meal schedules curated for your child each month.",
    file: "#",
  },
  {
    icon: "📖",
    color: "#673ab7",
    label: "Admission Brochure",
    desc: "Everything you need to know about programs, fees and the admission process.",
    file: "#",
  },
];

const ptmBenefits = [
  { icon: "🤝", text: "Regular Parent-Teacher Meetings (PTMs) to discuss your child's progress." },
  { icon: "📞", text: "Meet teachers or School Co-ordinator / Director on prior appointment anytime." },
  { icon: "🚪", text: "Open-door policy — parents can communicate easily with teachers." },
  { icon: "🔒", text: "All information shared by parents is treated in strict confidence." },
];

const faqs = [
  {
    q: "How often are PTMs held?",
    a: "Parent-Teacher Meetings are held regularly every term. You will be informed in advance about the schedule through the Parent's Circular.",
  },
  {
    q: "Can I visit the school to check on my child?",
    a: "Yes! We follow an open-door policy. You are welcome to meet the class teacher or school co-ordinator on prior appointment.",
  },
  {
    q: "How does The KiDS Square communicate with parents?",
    a: "We communicate through Parent's Circulars, WhatsApp groups, email updates, and in-person meetings. We keep you informed of all key developments.",
  },
  {
    q: "What is the Formal School Admission seminar?",
    a: "We organise seminars to guide parents through the formal school admission process. Experienced professionals and principals answer all queries.",
  },
];

export default function ParentsCornerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        .faq-body { overflow: hidden; transition: max-height 0.35s ease, opacity 0.3s ease; }
        .event-pill { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .event-pill:hover { transform: scale(1.06); box-shadow: 0 6px 18px rgba(0,0,0,0.1); }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative h-60 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/parents-hero.jpg')]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff9800]/80 via-[#ff5252]/60 to-[#673ab7]/50" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 body-text">
            <span>Home</span><span className="text-[#ff9800]">›</span><span className="text-white">Parent's Corner</span>
          </div>
          <h1 className="sec-title text-5xl md:text-6xl text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            Parent's Corner
          </h1>
          <div className="mt-3 flex gap-2">
            <div className="h-1 w-16 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-8 rounded-full bg-[#00bcd4]" />
            <div className="h-1 w-4 rounded-full bg-[#ff9800]" />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa]">

        {/* ── Partnership with Parents ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#00bcd4]/10 text-[#00bcd4] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 body-text">
              🤝 We're In This Together
            </span>
            <h2 className="sec-title text-4xl md:text-5xl text-slate-800 mb-2 leading-tight">
              Partnership with <span className="text-[#00bcd4]">Parents</span>
            </h2>
            <div className="flex gap-2 mb-6">
              <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
              <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
            </div>
            <p className="body-text text-slate-600 text-[15px] leading-relaxed font-medium mb-8">
              We strongly believe that a close partnership of teachers with parents results in the development of the child. Good communication between teachers and parents enables informing each other of relevant matters concerning the child. We appreciate being informed of any change at home that might affect your child and will treat anything you tell us in strict confidence.
            </p>

            {/* PTM benefit cards */}
            <div className="space-y-3">
              {ptmBenefits.map((b, i) => (
                <div key={i} className="card-hover flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#00bcd4]/10 flex items-center justify-center text-lg shrink-0">
                    {b.icon}
                  </div>
                  <p className="body-text text-slate-600 text-sm font-medium leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -right-6 w-56 h-56 rounded-full bg-[#00bcd4]/10 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-[#ff5252]/10 -z-10" />
              <img
                src="/parents-ptm.jpg"
                alt="Parent-Teacher Meeting"
                className="w-full h-72 object-cover rounded-3xl shadow-xl"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"; }}
              />
              <div className="absolute -bottom-4 -right-4 bg-[#ff5252] text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="sec-title text-sm">Open Door Policy</p>
                <p className="body-text text-xs font-bold opacity-90">Always here for you</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Events for Parents ── */}
        <section className="bg-gradient-to-br from-[#ff9800]/5 via-white to-[#673ab7]/5 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[#ff9800]/10 text-[#ff9800] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
                🎉 Join Us
              </span>
              <h2 className="sec-title text-4xl text-slate-800">
                Events for <span className="text-[#ff9800]">Parents</span>
              </h2>
              <div className="flex justify-center gap-2 mt-3 mb-5">
                <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
                <div className="h-1 w-6 rounded-full bg-[#ff9800]" />
              </div>
              <p className="body-text text-slate-500 text-sm font-medium max-w-2xl mx-auto">
                The KiDS Square provides a variety of opportunities for parents to participate — from birthday and festival celebrations to exclusive events organised just for parents and grandparents.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {events.map((ev) => (
                <div
                  key={ev.label}
                  className="event-pill flex items-center gap-3 bg-white rounded-2xl px-5 py-3.5 shadow-sm border border-slate-100 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: ev.color + "15" }}>
                    {ev.icon}
                  </div>
                  <span className="body-text text-sm font-bold text-slate-700">{ev.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Formal School Admission ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#673ab7]/10 flex items-center justify-center text-2xl">🎓</div>
                <h2 className="sec-title text-3xl text-slate-800">
                  Formal School <span className="text-[#673ab7]">Admission</span>
                </h2>
              </div>
              <div className="flex gap-2 mb-5">
                <div className="h-1 w-12 rounded-full bg-[#673ab7]" />
                <div className="h-1 w-6 rounded-full bg-[#ff5252]" />
              </div>
              <p className="body-text text-slate-600 text-[15px] leading-relaxed font-medium mb-4">
                We organise seminars to provide detailed information on the formal school admission process. All queries from parents related to the formal school admission process are answered by highly experienced professionals and principals/directors of different schools.
              </p>
              <div className="bg-[#673ab7]/5 rounded-2xl p-4 border border-[#673ab7]/10">
                <p className="body-text text-[#673ab7] text-sm font-semibold leading-relaxed">
                  📅 Seminars are announced through Parent's Circulars. Keep an eye on your downloads for the latest schedule.
                </p>
              </div>
            </div>

            {/* Downloads */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#ff5252]/10 flex items-center justify-center text-2xl">⬇️</div>
                <div>
                  <h2 className="sec-title text-3xl text-slate-800">
                    Downloads
                  </h2>
                  <p className="body-text text-slate-400 text-xs font-medium">Updated regularly for parents</p>
                </div>
              </div>
              <div className="space-y-4">
                {downloads.map((d, i) => (
                  <div key={i} className="card-hover bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: d.color + "18" }}>
                      {d.icon}
                    </div>
                    <div className="flex-1">
                      <p className="sec-title text-xl" style={{ color: d.color }}>{d.label}</p>
                      <p className="body-text text-slate-500 text-xs font-medium leading-relaxed mt-1 mb-3">{d.desc}</p>
                      <a
                        href={d.file}
                        className="inline-flex items-center gap-2 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all hover:opacity-90 body-text"
                        style={{ background: d.color }}
                      >
                        ⬇️ Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-gradient-to-br from-[#00bcd4]/5 via-white to-[#ff5252]/5 py-16">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[#ff5252]/10 text-[#ff5252] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
                ❓ Common Questions
              </span>
              <h2 className="sec-title text-4xl text-slate-800">
                Parent <span className="text-[#ff5252]">FAQs</span>
              </h2>
              <div className="flex justify-center gap-2 mt-3">
                <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
                <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="body-text text-slate-800 text-sm font-bold leading-snug">{faq.q}</span>
                    <span
                      className="text-2xl shrink-0 transition-transform duration-300"
                      style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", color: "#00bcd4" }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="faq-body"
                    style={{ maxHeight: openFaq === i ? "200px" : "0px", opacity: openFaq === i ? 1 : 0 }}
                  >
                    <p className="body-text text-slate-500 text-sm font-medium leading-relaxed px-6 pb-5">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-r from-[#ff9800] to-[#673ab7] py-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h2 className="sec-title text-4xl md:text-5xl text-white mb-4">Stay Connected With Us</h2>
            <p className="body-text text-white/85 text-base mb-8 font-medium leading-relaxed">
              Have a question about your child's progress or our school events? Reach out — we're always here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919560533778"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#673ab7] font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base">
                📞 Call +91-9560533778
              </a>
              <a href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white/20 text-white font-black px-8 py-4 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all body-text text-base">
                ✉️ Send a Message
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}