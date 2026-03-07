"use client";

const courseFeatures = [
  {
    icon: "✏️",
    color: "#ff5252",
    title: "Active Learning",
    desc: "Children take initiative, design solutions, experiment and share their ideas through hands-on activities.",
  },
  {
    icon: "🎬",
    color: "#ff9800",
    title: "Multimedia Class",
    desc: "Audio-visual tools and digital content make learning engaging, memorable and deeply effective.",
  },
  {
    icon: "🌞",
    color: "#4caf50",
    title: "Full Day Programs",
    desc: "Structured full-day schedules that balance academics, play, rest and creative exploration.",
  },
  {
    icon: "🎓",
    color: "#ff5252",
    title: "Expert Teachers",
    desc: "Trained, experienced educators who nurture each child's individual learning style and potential.",
  },
  {
    icon: "😄",
    color: "#ff9800",
    title: "Funny & Happy",
    desc: "A joyful, playful atmosphere where laughter and curiosity go hand in hand every single day.",
  },
  {
    icon: "❤️",
    color: "#4caf50",
    title: "Fulfilled With Love",
    desc: "Every child feels safe, loved and celebrated — building confidence and emotional well-being.",
  },
];

const facilityDetails = [
  {
    icon: "🚪",
    color: "#ff5252",
    title: "Entry",
    desc: null,
    highlight: "Your child's safety is our first priority. Secure entrance and exit are important features in our pre-school.",
    points: [],
  },
  {
    icon: "📚",
    color: "#00bcd4",
    title: "Library",
    desc: null,
    highlight: null,
    points: [
      "We provide colourful & interesting books that help children understand the power and importance of early written words.",
      "Early experiences with books help children make the vital connection between written words and virtual images, providing an excellent foundation for future learning.",
      "A quiet place to read and look at picture books encourages language skills for beginning and advanced readers.",
    ],
  },
  {
    icon: "💻",
    color: "#673ab7",
    title: "Pioneer to Technology",
    desc: "Today's world is the world of technology. Early introduction to computers is the best way to achieve a sincere edge in the path of technology.",
    highlight: null,
    points: [],
  },
  {
    icon: "🛝",
    color: "#ff9800",
    title: "Playgroup",
    desc: null,
    highlight: null,
    points: [
      "The joyous and fun filled environment stimulates the child to explore and discover.",
      "Our mission is to create facilities, programs & services that empower young children by helping them acquire the skills, confidence and positive self image needed to become healthy young adults.",
      "We provide specialized, imported equipment which is fully adjustable & interchangeable, affording flexibility to provide healthy, fun & safe activities for young children.",
    ],
  },
];

const programs = [
  { name: "Toddler", age: "1+ Years", icon: "🌱", color: "#ff5252", desc: "Gentle introduction to structured play and social interaction." },
  { name: "Playgroup", age: "1.5+ Years", icon: "🎨", color: "#00bcd4", desc: "Creative exploration through art, music and movement." },
  { name: "Nursery", age: "2.5+ Years", icon: "🌸", color: "#ff9800", desc: "Language, numeracy and foundational learning skills." },
  { name: "LKG", age: "3.5+ Years", icon: "⭐", color: "#673ab7", desc: "School readiness with structured academic preparation." },
];

export default function OurCoursePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600;700&display=swap');
        .sec-title { font-family: 'Fredoka One', cursive; }
        .body-text  { font-family: 'Poppins', sans-serif; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(0,0,0,0.1); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeUp 0.55s ease both; }
        .feature-icon-ring {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .card-hover:hover .feature-icon-ring { transform: scale(1.12) rotate(-6deg); }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative h-60 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/courses-hero.jpg')]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff9800]/80 via-[#ff5252]/60 to-[#673ab7]/50" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 body-text">
            <span>Home</span><span className="text-[#ff9800]">›</span><span className="text-white">Our Course</span>
          </div>
          <h1 className="sec-title text-5xl md:text-6xl text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            Our Courses
          </h1>
          <div className="mt-3 flex gap-2">
            <div className="h-1 w-16 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-8 rounded-full bg-[#ff9800]" />
            <div className="h-1 w-4 rounded-full bg-[#00bcd4]" />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa]">

        {/* ── Our Courses Feature Section ── */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-2 bg-[#ff9800]/10 text-[#ff9800] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full body-text">
                🎒 What We Teach
              </span>
            </div>
            <h2 className="sec-title text-4xl md:text-5xl text-slate-800 text-center mb-3">
              Our <span className="text-[#ff5252]">Courses</span>
            </h2>
            <p className="body-text text-center text-slate-500 text-sm font-medium max-w-xl mx-auto mb-14">
              Our courses show kids how to take initiative, design their own solutions, experiment, and share their ideas.
            </p>

            {/* 3-col layout: features | child image | features */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left features */}
              <div className="flex flex-col gap-8">
                {courseFeatures.slice(0, 3).map((f) => (
                  <div key={f.title} className="card-hover flex items-start gap-4 text-right flex-row-reverse lg:flex-row lg:text-left">
                    <div className="feature-icon-ring w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: f.color + "18" }}>
                      {f.icon}
                    </div>
                    <div>
                      <p className="sec-title text-xl" style={{ color: f.color }}>{f.title}</p>
                      <p className="body-text text-slate-500 text-sm font-medium leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center image */}
              <div className="relative flex justify-center py-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00bcd4]/10 to-[#ff9800]/10 scale-90" />
                <img
                  src="/10392553_1538416899710031_7720911818438288906_n.jpg"
                  alt="Child learning"
                  className="relative z-10 w-64 h-80 object-cover rounded-3xl drop-shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80"; }}
                />
              </div>

              {/* Right features */}
              <div className="flex flex-col gap-8">
                {courseFeatures.slice(3).map((f) => (
                  <div key={f.title} className="card-hover flex items-start gap-4">
                    <div className="feature-icon-ring w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: f.color + "18" }}>
                      {f.icon}
                    </div>
                    <div>
                      <p className="sec-title text-xl" style={{ color: f.color }}>{f.title}</p>
                      <p className="body-text text-slate-500 text-sm font-medium leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Program Cards ── */}
        <section className="bg-gradient-to-br from-[#ff9800]/5 via-white to-[#00bcd4]/5 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-[#00bcd4]/10 text-[#00bcd4] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
                🗓️ Programs Offered
              </span>
              <h2 className="sec-title text-4xl text-slate-800">
                Choose Your <span className="text-[#00bcd4]">Program</span>
              </h2>
              <div className="flex justify-center gap-2 mt-3">
                <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
                <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((p) => (
                <div key={p.name}
                  className="card-hover bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden">
                  {/* background blob */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10"
                    style={{ background: p.color }} />
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4"
                    style={{ background: p.color + "18" }}>
                    {p.icon}
                  </div>
                  <p className="sec-title text-2xl text-slate-800 mb-1">{p.name}</p>
                  <span className="body-text text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{ background: p.color + "18", color: p.color }}>
                    {p.age}
                  </span>
                  <p className="body-text text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
                  <a href="/admission"
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 text-white font-bold text-sm py-2.5 rounded-xl transition-all hover:opacity-90 body-text"
                    style={{ background: p.color }}>
                    Enroll Now →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Facilities Section ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start fade-in">
          {/* Left content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#00bcd4]/10 text-[#00bcd4] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 body-text">
              🏫 School Tour
            </span>
            <h2 className="sec-title text-4xl md:text-5xl text-slate-800 mb-2">
              Our <span className="text-[#00bcd4]">Facilities</span>
            </h2>
            <div className="flex gap-2 mb-5">
              <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
              <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
            </div>
            <p className="body-text text-slate-600 text-[15px] leading-relaxed font-medium mb-10">
              We are pleased to present you this tour of our Pre-School. These images will give you a glimpse of the children's fun rooms, some of their activities, the staff, as well as other facilities. We also invite you to visit our school yourself to take a tour in person.
            </p>

            <div className="space-y-8">
              {facilityDetails.map((f) => (
                <div key={f.title} className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{ background: f.color + "18" }}>
                      {f.icon}
                    </div>
                    <h3 className="sec-title text-2xl" style={{ color: f.color }}>{f.title}</h3>
                  </div>
                  {f.highlight && (
                    <p className="body-text text-sm font-semibold leading-relaxed mb-2" style={{ color: f.color }}>
                      {f.highlight}
                    </p>
                  )}
                  {f.desc && (
                    <p className="body-text text-slate-600 text-sm font-medium leading-relaxed">{f.desc}</p>
                  )}
                  {f.points.length > 0 && (
                    <ul className="space-y-2 mt-1">
                      {f.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: f.color }} />
                          <p className="body-text text-slate-600 text-sm font-medium leading-relaxed">{pt}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative lg:sticky lg:top-24 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-6 -right-6 w-56 h-56 rounded-full bg-[#00bcd4]/10 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-[#ff5252]/10 -z-10" />
              <img
                src="/DSC_0927.JPG"
                alt="School Facility"
                className="w-full h-auto object-cover rounded-3xl drop-shadow-xl"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=500&q=80"; }}
              />
              <div className="absolute top-8 -left-4 bg-[#ff9800] text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="sec-title text-sm">Safe & Secure</p>
                <p className="body-text text-xs font-bold opacity-90">World-class facilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-r from-[#ff9800] to-[#ff5252] py-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h2 className="sec-title text-4xl md:text-5xl text-white mb-4">Enroll Your Child Today!</h2>
            <p className="body-text text-white/85 text-base mb-8 font-medium leading-relaxed">
              Give your child the best start with our world-class curriculum and caring teachers. Admissions are open year round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admission"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#ff5252] font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base">
                🎓 Apply for Admission
              </a>
              <a href="tel:+919560533778"
                className="inline-flex items-center justify-center gap-3 bg-white/20 text-white font-black px-8 py-4 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all body-text text-base">
                📞 Call +91-9560533778
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}