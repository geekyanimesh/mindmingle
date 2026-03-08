"use client";

export default function OurProductPage() {
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
      `}</style>

      {/* ── Hero ── */}
      <section className="relative h-60 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff6a00]/90 via-[#ee0979]/60 to-[#ff6a00]/50" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 body-text">
            <span>Home</span><span className="text-white/50">›</span><span className="text-white">Our Product</span>
          </div>
          <h1 className="sec-title text-5xl md:text-6xl text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            Our Product
          </h1>
          <div className="mt-3 flex gap-2">
            <div className="h-1 w-16 rounded-full bg-white" />
            <div className="h-1 w-8 rounded-full bg-white/60" />
            <div className="h-1 w-4 rounded-full bg-white/30" />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa]">

        {/* ── Intro: Logo + About ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 fade-in">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Logo + brain image stacked */}
            <div className="flex flex-col items-center gap-8">
              <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-8 w-full flex items-center justify-center">
                <img
                  src="/mindmingle_logo.jpeg"
                  alt="MindMiingle Logo"
                  className="max-h-24 object-contain"
                />
              </div>
              <div className="w-48 mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="/c7be8153-4ae7-419e-9bc5-a16c84ca7abc.jpeg"
                  alt="Brain potential illustration"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* About text */}
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
                🧠 Works Like Magic
              </span>
              <h2 className="sec-title text-4xl md:text-5xl text-slate-800 mb-4">
                What is <span className="text-[#ff6a00]">MindMiingle?</span>
              </h2>
              <div className="h-1 w-16 rounded-full bg-[#ff6a00] mb-6" />
              <div className="space-y-4 body-text text-slate-600 text-[15px] font-medium leading-relaxed">
                <p>
                  Mindmiingle is an organization dedicated to bringing meaningful transformation and positive change in the life of every human being by exploring the full potential of the brain.
                </p>
                <p>
                  We believe that every human brain holds unlimited potential — yet most people go through life using only 5% of it. Mindmiingle exists to change that.
                </p>
                <p>
                  Through the twin sciences of <strong className="text-slate-800">Dermatoglyphics</strong> and <strong className="text-slate-800">Mnemonics</strong>, Mindmiingle helps children and adults discover their inborn talents, learning styles, multiple intelligences, and dominant brain type — empowering them to live, learn, and grow to their fullest capacity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Vision & Mission ── */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="sec-title text-4xl text-slate-800">
                Vision &amp; <span className="text-[#ff6a00]">Mission</span>
              </h2>
              <div className="flex justify-center gap-2 mt-3">
                <div className="h-1 w-12 rounded-full bg-[#ff6a00]" />
                <div className="h-1 w-6 rounded-full bg-orange-300" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-hover bg-gradient-to-br from-orange-50 to-white rounded-3xl border border-orange-100 p-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl mb-4">👁️</div>
                <h3 className="sec-title text-2xl text-slate-800 mb-3">Our Vision</h3>
                <p className="body-text text-slate-600 text-sm font-medium leading-relaxed">
                  To educate people about the benefit and need of Dermatoglyphics Multiple Intelligence Test (DMIT) and Mnemonics throughout the world — enabling every individual to unlock the hidden power of their brain.
                </p>
              </div>
              <div className="card-hover bg-gradient-to-br from-orange-50 to-white rounded-3xl border border-orange-100 p-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl mb-4">🎯</div>
                <h3 className="sec-title text-2xl text-slate-800 mb-3">Our Mission</h3>
                <p className="body-text text-slate-600 text-sm font-medium leading-relaxed">
                  To make every individual noble and financially empowered by helping them discover their strengths. We are committed to bringing meaningful transformation in the lives of children by making them explore their true brain power.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Two Core Sciences ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="text-center mb-12">
            <h2 className="sec-title text-4xl text-slate-800">
              The Two <span className="text-[#ff6a00]">Core Sciences</span>
            </h2>
            <div className="flex justify-center gap-2 mt-3">
              <div className="h-1 w-12 rounded-full bg-[#ff6a00]" />
              <div className="h-1 w-6 rounded-full bg-orange-300" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mnemonics */}
            <div className="card-hover bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#ff6a00] to-orange-400" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl mb-5">🧩</div>
                <h3 className="sec-title text-3xl text-slate-800 mb-3">Mnemonics</h3>
                <p className="body-text text-slate-600 text-sm font-medium leading-relaxed mb-5">
                  Mnemonics is the science and art of memorizing what you See, Listen, Do, Smell or Taste. It enables learners to use the right brain for long-term memory — making it a blessing for students and professionals alike.
                </p>
                <ul className="space-y-2">
                  {[
                    "Memorize 100-item lists with ease",
                    "Long answers, dates, names & history facts",
                    "100 years of calendar memorization",
                    "Long digit numbers & telephone numbers",
                    "Develop long-term memory — study less, score more",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 body-text text-slate-600 text-xs font-medium">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#ff6a00] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-orange-50 rounded-2xl px-5 py-3 body-text text-orange-700 text-xs font-bold">
                  🗓️ Offered as a 2-day workshop (min 20 / max 50 participants)
                </div>
              </div>
            </div>

            {/* Dermatoglyphics */}
            <div className="card-hover bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#673ab7] to-purple-400" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl mb-5">🔬</div>
                <h3 className="sec-title text-3xl text-slate-800 mb-3">Dermatoglyphics</h3>
                <p className="body-text text-slate-600 text-sm font-medium leading-relaxed mb-5">
                  Dermatoglyphics is the science of studying the patterns of skin (dermal) ridges on fingers. With 200+ years of research, it reveals a child's inborn potential through their unique fingerprints — which are fully formed at birth and never change.
                </p>
                <ul className="space-y-2">
                  {[
                    "Discover 8 Multiple Intelligences",
                    "Identify dominant brain: Left or Right",
                    "Reveal Learning Style (Visual / Auditory / Kinesthetic)",
                    "Measure 4 Quotients: IQ, EQ, CQ, AQ",
                    "Uncover Personality Trait & strong career options",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 body-text text-slate-600 text-xs font-medium">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#673ab7] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-purple-50 rounded-2xl px-5 py-3 body-text text-purple-700 text-xs font-bold">
                  🏅 Used globally to select Olympic athletes since the 1970s
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What DMIT Reveals ── */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="sec-title text-4xl text-slate-800">
                What <span className="text-[#ff6a00]">DMIT</span> Reveals for Your Child
              </h2>
              <div className="flex justify-center gap-2 mt-3">
                <div className="h-1 w-12 rounded-full bg-[#ff6a00]" />
                <div className="h-1 w-6 rounded-full bg-orange-300" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: "🎯", label: "Inborn Talent", desc: "Discover your child's natural strengths from birth" },
                { icon: "🧠", label: "Brain Dominance", desc: "Left brain or right brain — know how they think" },
                { icon: "📚", label: "Learning Style", desc: "Visual, Auditory or Kinesthetic learner" },
                { icon: "💡", label: "8 Intelligences", desc: "Based on Dr. Howard Gardner's proven theory" },
                { icon: "❤️", label: "4 Quotients", desc: "IQ, EQ, CQ and AQ — a complete picture" },
                { icon: "🦅", label: "Personality Trait", desc: "Eagle, Peacock, Dove or Owl — Dr. Marston's model" },
                { icon: "🚀", label: "Career Guidance", desc: "Strong career options aligned to natural talent" },
                { icon: "👨‍👩‍👧", label: "Better Parenting", desc: "Set the right expectations & improve relationships" },
              ].map((item, i) => (
                <div key={i} className="card-hover bg-[#fafafa] rounded-2xl border border-slate-100 p-5 flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl">{item.icon}</div>
                  <p className="sec-title text-lg text-slate-800">{item.label}</p>
                  <p className="body-text text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-r from-[#ff6a00] to-[#ee0979] py-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h2 className="sec-title text-4xl md:text-5xl text-white mb-4">Unlock Your Child's True Potential</h2>
            <p className="body-text text-white/85 text-base mb-8 font-medium leading-relaxed">
              Get in touch with us to learn more about MindMiingle's DMIT and Mnemonics programmes offered at The KiDS Square.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#ff6a00] font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base">
                📞 Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}