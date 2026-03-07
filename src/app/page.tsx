"use client";

import { useState } from "react";
import ImageSlideshow from "@/src/components/ImageSlideshow";

const tabs = [
  { id: "Music", icon: "🎵", color: "#673ab7" },
  { id: "Learn", icon: "🎓", color: "#ff5252" },
  { id: "Painting", icon: "🎨", color: "#ff9800" },
  { id: "Sports", icon: "⚽", color: "#00bcd4" },
  { id: "Playground", icon: "🏆", color: "#4caf50" },
];

const tabDescriptions: Record<string, string> = {
  Music: "Music nurtures creativity, emotional intelligence and cognitive development in young children. Our music sessions make learning joyful and memorable.",
  Learn: "Our research-backed curriculum blends academics with hands-on discovery. Every child learns at their own pace in a safe, supportive environment.",
  Painting: "Art empowers children to express themselves freely. Our painting sessions develop fine motor skills, focus, and a lifelong love for creativity.",
  Sports: "Physical activity is essential for growing bodies and minds. Our sports program builds teamwork, coordination and healthy habits from an early age.",
  Playground: "Our safe, stimulating playground encourages exploration, social skills and joyful movement — because play is the child's first language.",
};

const features = [
  { icon: "📚", color: "#ff5252", title: "Active Learning", desc: "A form of learning where teaching strives to actively involve students in the process." },
  { icon: "😄", color: "#4caf50", title: "Funny & Happy", desc: "A joyful atmosphere where every child looks forward to coming to school each day." },
  { icon: "❤️", color: "#673ab7", title: "Fulfilled With Love", desc: "Every child feels safe, celebrated and loved — building confidence every single day." },
  { icon: "🎓", color: "#ff9800", title: "Expert Teachers", desc: "Highly trained educators who understand each child's unique developmental needs." },
];

const testimonials = [
  { quote: "We thank you for taking such good care of our daughter. She loves coming to school every morning!", name: "Priyanka Singh", role: "Parent of Toddler student" },
  { quote: "The teachers are incredibly patient and loving. My son has grown so much in just one term.", name: "Rahul Sharma", role: "Parent of Playgroup student" },
  { quote: "Amazing environment and curriculum. Our daughter is already reading at the Nursery level!", name: "Meena Verma", role: "Parent of Nursery student" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Music");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const activeTabData = tabs.find((t) => t.id === activeTab)!;

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
        @keyframes fadeSlide { from { opacity: 0; transform: translateX(12px); } to { opacity: 1; transform: translateX(0); } }
        .tab-fade { animation: fadeSlide 0.3s ease both; }
      `}</style>

      <div className="min-h-screen bg-[#fafafa]">

        {/* ── Slideshow ── */}
        <section className="w-full bg-slate-100">
          <ImageSlideshow />
        </section>

        {/* ── Welcome Section ── */}
        <section className="py-20 px-6 max-w-7xl mx-auto fade-in">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 bg-[#00bcd4]/10 text-[#00bcd4] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 body-text">
                🌟 Welcome
              </span>
              <h2 className="sec-title text-4xl md:text-5xl text-slate-800 mb-3 leading-tight">
                Welcome To <span className="text-[#00bcd4]">The Kids Square</span>
              </h2>
              <div className="flex gap-2 mb-6">
                <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
                <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
              </div>
              <p className="body-text text-slate-500 text-[15px] leading-relaxed mb-10 font-medium">
                The Kids Square is one of the best play school chains ventured by Kids Square Private Limited, a pioneer organization in education. The organization is managed by a team of highly qualified, dedicated and experienced educationists who have taken initiative in making The KiDS Square a dream place for little wonders. We believe that children need a safe, clean and hygienic environment in which they can grow.
              </p>

              {/* Feature grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="card-hover flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: f.color + "18" }}>
                      {f.icon}
                    </div>
                    <div>
                      <p className="sec-title text-lg text-slate-800 leading-none">{f.title}</p>
                      <p className="body-text text-slate-500 text-xs font-medium leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-56 h-56 rounded-full bg-[#00bcd4]/10 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-[#ff5252]/10 -z-10" />
              <img
                src="/img2.jpg"
                alt="Student painting"
                className="w-full h-auto object-cover rounded-3xl shadow-xl border-4 border-white"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"; }}
              />
              <div className="absolute -bottom-4 -left-4 bg-[#ff5252] text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="sec-title text-sm">Admissions Open!</p>
                <p className="body-text text-xs font-bold opacity-90">Year Round Enrolment</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Decorative divider ── */}
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f0fafb" />
          </svg>
        </div>

        {/* ── Activities Tabbed Section ── */}
        <section className="py-16 bg-[#f0fafb] px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[#673ab7]/10 text-[#673ab7] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
                🎒 Activities
              </span>
              <h2 className="sec-title text-4xl text-slate-800">
                What We <span className="text-[#673ab7]">Offer</span>
              </h2>
              <div className="flex justify-center gap-2 mt-3">
                <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
                <div className="h-1 w-6 rounded-full bg-[#673ab7]" />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              {/* Tab pills row */}
              <div className="flex overflow-x-auto border-b border-slate-100">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex-1 min-w-[80px] py-5 flex flex-col items-center gap-2 text-xs font-black uppercase tracking-widest transition-all body-text ${
                      activeTab === t.id ? "text-white" : "text-slate-400 hover:text-slate-600 bg-slate-50"
                    }`}
                    style={activeTab === t.id ? { background: t.color } : {}}
                  >
                    <span className="text-2xl">{t.icon}</span>
                    {t.id}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center tab-fade" key={activeTab}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                      style={{ background: activeTabData.color + "18" }}>
                      {activeTabData.icon}
                    </div>
                    <h3 className="sec-title text-3xl text-slate-800">{activeTab}</h3>
                  </div>
                  <div className="flex gap-2 mb-5">
                    <div className="h-1 w-10 rounded-full bg-[#ff5252]" />
                    <div className="h-1 w-5 rounded-full" style={{ background: activeTabData.color }} />
                  </div>
                  <p className="body-text text-slate-500 text-[15px] leading-relaxed mb-7 font-medium">
                    {tabDescriptions[activeTab]}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {["Qualified Teachers", "Strategic Location", "Love & Care", "Active Learning", "Delicious Food", "Transportation"].map((item) => (
                      <div key={item} className="flex items-center gap-2 body-text text-sm text-slate-600 font-medium">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: activeTabData.color }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href="/our-course"
                    className="inline-flex items-center gap-2 text-white font-black px-7 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 body-text text-sm"
                    style={{ background: activeTabData.color }}
                  >
                    View Details →
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-10 -z-10"
                    style={{ background: activeTabData.color }} />
                  <img
                    src="/image1.JPG"
                    alt={`${activeTab} activity`}
                    className="w-full h-64 object-cover rounded-3xl shadow-lg border-4 border-slate-50"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80"; }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-[#ff5252]/10 text-[#ff5252] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
            💬 Parent Stories
          </span>
          <h2 className="sec-title text-4xl text-slate-800 mb-3">
            What Happy <span className="text-[#ff5252]">Parents Say</span>
          </h2>
          <div className="flex justify-center gap-2 mb-12">
            <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
          </div>

          {/* Testimonial card */}
          <div className="relative bg-white rounded-3xl shadow-sm border border-slate-100 p-10 max-w-2xl mx-auto tab-fade" key={activeTestimonial}>
            <div className="text-5xl mb-4" style={{ color: "#ff5252", fontFamily: "Georgia, serif" }}>"</div>
            <p className="body-text text-slate-600 text-base font-medium leading-relaxed mb-6 italic">
              {testimonials[activeTestimonial].quote}
            </p>
            <div className="w-10 h-0.5 bg-[#00bcd4] mx-auto mb-4" />
            <p className="sec-title text-xl text-[#00bcd4]">{testimonials[activeTestimonial].name}</p>
            <p className="body-text text-slate-400 text-xs font-semibold mt-1">{testimonials[activeTestimonial].role}</p>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: activeTestimonial === i ? "28px" : "10px",
                  height: "10px",
                  background: activeTestimonial === i ? "#00bcd4" : "#e2e8f0",
                }}
              />
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="relative py-24 px-6 overflow-hidden bg-[#00bcd4]">
          {/* Background blobs */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#ff9800]/25 rounded-full blur-xl" />
          <div className="absolute top-1/4 right-20 w-28 h-28 bg-[#ff5252]/30 rounded-3xl rotate-45 blur-md" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#4caf50]/20 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="sec-title text-4xl md:text-5xl text-white mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.15)" }}>
              Give Your Child The Best Start
            </h2>
            <p className="body-text text-cyan-50 text-base md:text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Admissions are now open for the upcoming academic year. Join our vibrant community of learners and let your little one shine!
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/admission"
                className="inline-flex items-center justify-center gap-3 bg-[#ff5252] hover:bg-red-600 text-white font-black px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 body-text text-base uppercase tracking-widest border-2 border-[#ff5252]"
              >
                🎓 Apply Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-[#00bcd4] text-white font-black px-10 py-4 rounded-2xl shadow-lg transition-all body-text text-base uppercase tracking-widest"
              >
                📞 Contact Us
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}