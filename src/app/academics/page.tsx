"use client";

const festivals = [
  "Christmas", "Republic Day", "Lohri", "Basant Panchami", "Baisakhi", "Holi",
  "Raksha Bandhan", "Janamashtami", "Eid-ul-Zuha", "Id-ul-Fitr", "Dussehra",
  "Diwali", "Gurupurab", "Independence Day", "Children's Day", "Teacher's Day",
  "Mother's Day", "Earth Day", "Hugs Day", "Father's Day", "Daughter's Day",
  "Friendship Day", "Valentine's Day", "Grandparent's Day", "Sports Day", "Annual Day",
];

const generalFacilities = [
  "Researched Curriculum", "Low child teacher ratio – 10:1:1", "Children friendly environment",
  "Trained, experienced, friendly faculty", "Creative play-way methods", "Kind aesthetic guidelines",
  "Exercises, yoga & meditation", "Hygienic environment", "Regular health check-ups",
  "Regular tips for parents", "Pure drinking water", "Celebrations (B'days/festivals)",
  "Stage exposure", "Maids (Aayas)", "Excursions / picnics", "Celebration Area",
  "Splash Pool Activities", "Ball Pool Activities", "Free Inter branch transfer",
];

const technicalFacilities = [
  "Digital Classes", "Audio Visual Room", "Study with Talking Pen",
  "DVDs sets for each kids", "RFID based", "DVDs sets for each kids", "CCTV and live updates",
];

const additionalFacilities = [
  "Mid day meal", "Day Care", "Activity Center", "Transport facility",
];

const sections = [
  {
    icon: "🎓",
    color: "#00bcd4",
    title: "Kids Square Curriculum",
    content:
      "We believe education is far more than just academic success. Curriculum at The Kids Square is developed basis this understanding putting equal emphasis on overall development of kids along with the academics. Teaching is innovatively structured to aid child's personality development and self-confidence. Our curriculum has been designed after a detailed research for the best development and learning techniques of early childhood. It is supported by various teaching aids, innovative classrooms and 'do it yourself' concepts, as well as outdoor activities. Each and every kid has his/her own strengths and ways through which they would learn better. We use special tools and technique to identify these in every kid at our school.",
    image: "/academics-curriculum.jpg",
    imageAlt: "Christmas celebration at Kids Square",
    imageFallback: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80",
  },
  {
    icon: "🚌",
    color: "#ff9800",
    title: "Educational Tours",
    content:
      "Educational tours is a part of The KiDS Square Curriculum. We take our students to various places like Bank & ATM, Fruit & Vegetable Market, Dairy, Departmental Store / Mall, Parks, Zoo, Post Office etc. to give them real time experience so that they see, feel, experience and learn the things.",
    image: "/academics-tour.jpg",
    imageAlt: "Educational tour at Reliance Fresh",
    imageFallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
  {
    icon: "🏆",
    color: "#ff5252",
    title: "Competitions",
    content:
      "The School organises various academic, cultural and sports competitions in the school such as colouring competition, Dance Competition, Fancy Dress Competition, Baby Shows etc.",
    image: null,
    imageAlt: "",
    imageFallback: "",
  },
  {
    icon: "🧺",
    color: "#673ab7",
    title: "Picnic",
    content:
      "School organises picnics for students. We try to take children on picnic to the places of their interest like Mc Donald's, Parks, Rail Museum, Zoo, etc.",
    image: "/academics-picnic.jpg",
    imageAlt: "Kids in fancy dress",
    imageFallback: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&q=80",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600;700&display=swap');
        .sec-title { font-family: 'Fredoka One', cursive; }
        .body-text  { font-family: 'Poppins', sans-serif; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeUp 0.55s ease both; }
        .festival-pill:hover { transform: scale(1.05); }
        .festival-pill { transition: transform 0.2s ease; }
      `}</style>

      {/* ── Hero Banner ── */}
      <section className="relative h-60 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/academics-hero.jpg')]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/80 via-[#673ab7]/60 to-black/40" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 body-text">
            <span>Home</span>
            <span className="text-[#ff5252]">›</span>
            <span className="text-white">Academics</span>
          </div>
          <h1 className="sec-title text-5xl md:text-6xl text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            Academics
          </h1>
          <div className="mt-3 flex gap-2 items-center">
            <div className="h-1 w-16 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-8 rounded-full bg-[#00bcd4]" />
            <div className="h-1 w-4 rounded-full bg-[#ff9800]" />
          </div>
        </div>
      </section>

      {/* ── Curriculum & Sections ── */}
      <main className="bg-[#fafafa]">

        {/* Curriculum + Educational Tours (image right) */}
        {[sections[0], sections[1]].map((s, idx) => (
          <section
            key={idx}
            className={`max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center fade-in ${idx === 1 ? "flex-row-reverse" : ""}`}
          >
            <div className={idx === 1 ? "lg:order-2" : ""}>
              <span
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text"
                style={{ background: s.color + "15", color: s.color }}
              >
                {s.icon} {idx === 0 ? "Our Approach" : "Field Learning"}
              </span>
              <h2 className="sec-title text-4xl md:text-5xl text-slate-800 mb-3 leading-tight">
                {s.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span style={{ color: s.color }}>{s.title.split(" ").slice(-1)}</span>
              </h2>
              <div className="flex gap-2 mb-5">
                <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
                <div className="h-1 w-6 rounded-full" style={{ background: s.color }} />
              </div>
              <p className="body-text text-slate-600 text-[15px] leading-relaxed font-medium">{s.content}</p>
            </div>
            <div className={`relative ${idx === 1 ? "lg:order-1" : ""}`}>
              <div className="absolute -top-5 -right-5 w-56 h-56 rounded-full opacity-10 -z-10" style={{ background: s.color }} />
              <img
                src={s.image || s.imageFallback}
                alt={s.imageAlt}
                className="w-full h-72 object-cover rounded-3xl shadow-xl"
                onError={(e) => { (e.target as HTMLImageElement).src = s.imageFallback; }}
              />
              <div
                className="absolute -bottom-4 -left-4 text-white rounded-2xl px-5 py-3 shadow-lg sec-title text-sm"
                style={{ background: s.color }}
              >
                {idx === 0 ? "🌟 Holistic Learning" : "🚌 Real-World Exposure"}
              </div>
            </div>
          </section>
        ))}

        {/* ── Activities / Festivals ── */}
        <section className="bg-gradient-to-br from-[#ff9800]/5 via-white to-[#00bcd4]/5 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#ff9800]/10 text-[#ff9800] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
                  🎉 Celebrations
                </span>
                <h2 className="sec-title text-4xl text-slate-800">
                  Activities at <span className="text-[#ff9800]">The KiDS Square</span>
                </h2>
                <div className="flex gap-2 mt-2">
                  <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
                  <div className="h-1 w-6 rounded-full bg-[#ff9800]" />
                </div>
              </div>
            </div>
            <p className="body-text text-slate-600 text-[15px] leading-relaxed font-medium mb-8 max-w-3xl">
              The school celebrates various festivals & functions, and organises workshops and seminars for parents on parenting, nursery school admission orientation, and many other topics useful to parents in the upbringing of their children.
            </p>
            <div className="flex flex-wrap gap-3">
              {festivals.map((f) => (
                <span
                  key={f}
                  className="festival-pill body-text text-sm font-semibold px-4 py-2 rounded-full border-2 border-[#ff9800]/30 bg-white text-slate-700 shadow-sm cursor-default"
                >
                  🎊 {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Competitions & Picnic ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[sections[2], sections[3]].map((s, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -translate-y-8 translate-x-8"
                style={{ background: s.color }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shrink-0"
                style={{ background: s.color + "15" }}
              >
                {s.icon}
              </div>
              <h3 className="sec-title text-3xl mb-3" style={{ color: s.color }}>{s.title}</h3>
              <p className="body-text text-slate-600 text-[15px] leading-relaxed font-medium">{s.content}</p>
            </div>
          ))}
        </section>

        {/* ── Our Teachers ── */}
        <section className="bg-gradient-to-r from-[#673ab7]/8 to-[#00bcd4]/8 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[#673ab7]/10 text-[#673ab7] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
                👩‍🏫 Our Educators
              </span>
              <h2 className="sec-title text-4xl text-slate-800">
                Our <span className="text-[#673ab7]">Teacher's</span>
              </h2>
              <div className="flex justify-center gap-2 mt-2">
                <div className="h-1 w-12 rounded-full bg-[#673ab7]" />
                <div className="h-1 w-6 rounded-full bg-[#ff5252]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  text: "Teacher is a person who is always a source of love, morally upright and whose behavior not only in personal but also in the professional life is impeccable. Teacher is a source of information, a guide, a mentor, a motivator, all at the same time. Teaching is the only profession which always deals with the future.",
                  icon: "💡",
                  label: "Philosophy",
                },
                {
                  text: "Our teachers are highly dedicated and motivated who from time to time are equipped with in-service orientation, education and training program, inter-school exchange program and many other skill up-gradation activities. They are very patient and understanding. They encourage the development of each child by providing security and warmth emphasizing self-discipline.",
                  icon: "🌱",
                  label: "Commitment",
                },
              ].map((item, i) => (
                <div key={i} className="card-hover bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#673ab7]/10 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <span className="sec-title text-lg text-[#673ab7]">{item.label}</span>
                  </div>
                  <p className="body-text text-slate-600 text-[15px] leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Facilities Table ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#00bcd4]/10 text-[#00bcd4] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
              🏫 What We Offer
            </span>
            <h2 className="sec-title text-4xl text-slate-800">
              Facilities at <span className="text-[#00bcd4]">The KiDS Square</span>
            </h2>
            <div className="flex justify-center gap-2 mt-3">
              <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
              <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
            </div>
          </div>

          {/* Facility Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Part-1 — General", color: "#00bcd4", icon: "📋", items: generalFacilities },
              { label: "Part-2 — Technical", color: "#673ab7", icon: "💻", items: technicalFacilities },
              { label: "Part-3 — Additional", color: "#ff5252", icon: "✨", items: additionalFacilities },
            ].map((col) => (
              <div
                key={col.label}
                className="card-hover bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
              >
                {/* Header */}
                <div className="px-6 py-4 flex items-center gap-3" style={{ background: col.color }}>
                  <span className="text-2xl">{col.icon}</span>
                  <h3 className="sec-title text-white text-xl tracking-wide">{col.label}</h3>
                </div>
                {/* Items */}
                <ul className="divide-y divide-slate-100">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 px-6 py-3 body-text text-[14px] text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: col.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-r from-[#00bcd4] to-[#673ab7] py-14 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h2 className="sec-title text-4xl md:text-5xl text-white mb-4">Explore Our Academics</h2>
            <p className="body-text text-white/85 text-base mb-8 font-medium leading-relaxed">
              Want to know more about our curriculum, activities, or facilities? Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919560533778"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#673ab7] font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base"
              >
                📞 Call +91-9560533778
              </a>
              <a
                href="/admission"
                className="inline-flex items-center justify-center gap-3 bg-white/20 text-white font-black px-8 py-4 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all body-text text-base"
              >
                🎓 Apply for Admission
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}