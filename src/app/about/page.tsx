// src/app/about/page.tsx
"use client";

import Link from "next/link";

export default function AboutPage() {
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
      `}</style>

      <div className="min-h-screen bg-[#fafafa] text-slate-800">
        
        {/* ── Hero Header ── */}
        <section className="relative h-60 md:h-72 overflow-hidden fade-in">
          <div className="absolute inset-0 bg-cover bg-center bg-[url('/about-hero.jpg')]" />
          {/* Using a distinct gradient to match the brand but differentiate from the Franchise page */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff5252]/85 via-[#673ab7]/60 to-[#00bcd4]/50" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 body-text">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#ff9800]">›</span>
              <span className="text-white">About Us</span>
            </div>
            <h1 className="sec-title text-5xl md:text-6xl text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>About Us</h1>
            <div className="mt-3 flex gap-2">
              <div className="h-1 w-16 rounded-full bg-[#ff9800]" />
              <div className="h-1 w-8 rounded-full bg-[#00bcd4]" />
              <div className="h-1 w-4 rounded-full bg-[#673ab7]" />
            </div>
          </div>
        </section>

        {/* ── Main About Section (Reframed for Franchise/Network) ── */}
        <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#ff5252]/10 text-[#ff5252] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
                🌟 Our Story
              </span>
              <h2 className="sec-title text-4xl md:text-5xl text-slate-800 mb-6 tracking-tight">
                Nurturing Kids, <br/><span className="text-[#ff5252]">Empowering Partners.</span>
              </h2>
              <div className="flex gap-2 mb-8">
                <div className="h-1.5 w-12 rounded-full bg-[#ff5252]" />
                <div className="h-1.5 w-6 rounded-full bg-[#ff9800]" />
              </div>
              
              <div className="space-y-5 body-text text-slate-600 text-[15px] font-medium leading-relaxed">
                <p>
                  Each one of us at The KiDS Square has dedicated long years to develop the proven educational format we use across our growing network of schools. Our research is deeply rooted in the real environment of play school education and the everyday challenges faced by today's modern parents.
                </p>
                <p>
                  We give special emphasis on the needs of single parents and nuclear families where both parents are working. The KiDS Square is more than just a school; it is a collaborative junction where children grow through reading, listening, and playing, and where <strong className="text-[#673ab7]">passionate entrepreneurs can establish their own franchise</strong> to serve their communities.
                </p>
                <p>
                  We focus on the 360-degree development of a child—including sensory, motor, auditory, and cognitive skills. Our expert panel continuously refines our curriculum, ensuring that whether a child attends our founding school or one of our esteemed franchise branches, they receive the highest standard of early education.
                </p>
              </div>
            </div>
            
            <div className="relative">
              {/* Decorative background blob/shape behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ff5252]/20 to-[#00bcd4]/20 rounded-[3rem] transform rotate-3" />
              <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-3xl border-8 border-white shadow-xl overflow-hidden">
                 <img src="/10382636_164001750460976_5533876974069022762_n.jpg" alt="The Kids Square Learning Format" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission, Vision & Why Us (Highlight Cards Layout) ── */}
        <section className="py-20 bg-white px-6 md:px-10 border-t border-slate-100 fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="sec-title text-4xl md:text-5xl text-slate-800 mb-4 tracking-tight">
                Why <span className="text-[#00bcd4]">The Kids Square?</span>
              </h2>
              <div className="flex justify-center gap-2 mb-8">
                <div className="h-1.5 w-16 rounded-full bg-[#00bcd4]" />
                <div className="h-1.5 w-8 rounded-full bg-[#673ab7]" />
              </div>
              <p className="body-text text-slate-600 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                We owe our success to blending learning with fun. Our ultimate goal is to establish The KiDS Square play schools across the length and breadth of the Indian sub-continent through our dedicated franchise network.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission Card */}
              <div className="card-hover bg-[#fafafa] rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff9800]/10 rounded-full blur-3xl -mr-10 -mt-10" />
                <div className="w-14 h-14 bg-[#ff9800]/15 text-2xl flex items-center justify-center rounded-2xl mb-6">🎯</div>
                <h3 className="sec-title text-2xl text-slate-800 mb-4">Our Mission</h3>
                <p className="body-text text-slate-600 text-sm font-medium leading-relaxed">
                  We aspire to be the leaders of the play school industry by opening 'The KiDS Square' branches across the Indian sub-continent. We aim to develop kids into the real heroes of tomorrow by providing them, and our franchise partners, with the best educational frameworks.
                </p>
              </div>

              {/* Vision Card */}
              <div className="card-hover bg-[#fafafa] rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#673ab7]/10 rounded-full blur-3xl -mr-10 -mt-10" />
                <div className="w-14 h-14 bg-[#673ab7]/15 text-2xl flex items-center justify-center rounded-2xl mb-6">👁️</div>
                <h3 className="sec-title text-2xl text-slate-800 mb-4">Our Vision</h3>
                <p className="body-text text-slate-600 text-sm font-medium leading-relaxed">
                  We are committed to providing top-tier educational facilities that prepare kids for a competitive world. With well-trained staff and robust hygiene protocols, we develop strong, confident, and creative quick-learners who grow into better leaders.
                </p>
              </div>

              {/* Preschool to School Card */}
              <div className="card-hover bg-[#fafafa] rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5252]/10 rounded-full blur-3xl -mr-10 -mt-10" />
                <div className="w-14 h-14 bg-[#ff5252]/15 text-2xl flex items-center justify-center rounded-2xl mb-6">🎓</div>
                <h3 className="sec-title text-2xl text-slate-800 mb-4">Preschool to School</h3>
                <p className="body-text text-slate-600 text-sm font-medium leading-relaxed">
                  As the name suggests, a preschool prepares a child for full school. A good preschool provides the right environment for a child that makes their transition incredibly smooth. We ensure this standard is met at every KiDS Square location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Team Section ── */}
        <section className="py-20 px-6 md:px-10 bg-[#fafafa] max-w-7xl mx-auto text-center fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="sec-title text-4xl md:text-5xl text-slate-800 mb-4 tracking-tight">
            Our <span className="text-[#673ab7]">Core Team</span>
          </h2>
          <div className="flex justify-center gap-2 mb-12">
            <div className="h-1.5 w-16 rounded-full bg-[#673ab7]" />
            <div className="h-1.5 w-8 rounded-full bg-[#00bcd4]" />
          </div>

          <div className="flex justify-center">
            {/* Team Member Card (Styled to match the new UI) */}
            <div className="card-hover bg-white rounded-[2rem] shadow-sm border border-slate-100 max-w-sm overflow-hidden text-center group">
              <div className="h-72 bg-gradient-to-b from-[#e0f7fa] to-white overflow-hidden relative p-4">
                <div className="absolute inset-0 bg-[#673ab7]/5 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src="/rajen.jpeg"
                  alt="Mr. Rajendra Prasad"
                  className="w-full h-full object-cover rounded-2xl object-top group-hover:scale-105 transition-transform duration-500 relative z-0"
                />
              </div>
              <div className="p-8">
                <h3 className="sec-title text-2xl text-[#ff5252] mb-1">Mr. Rajendra Prasad</h3>
                <p className="body-text text-[#00bcd4] font-bold text-sm mb-1 uppercase tracking-wide">Director - Operations & Logistics</p>
                <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-5 body-text">
                  BCA, OCP, OCA, MCA
                </div>
                
                <p className="body-text text-slate-500 text-sm font-medium leading-relaxed border-t border-slate-100 pt-5">
                  Extensive experience in the Education Sector, Dermatoglyphics, Administration & Supply Chain—ensuring smooth operations across all our branches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 text-center border-t border-slate-200">
           <Link href="/" className="inline-flex items-center gap-3 bg-[#673ab7] hover:bg-purple-700 text-white font-black px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 body-text text-base">
             ← Back to Home
           </Link>
           <Link href="/franchise" className="ml-4 inline-flex items-center gap-3 bg-white text-[#ff5252] border-2 border-[#ff5252] font-black px-10 py-4 rounded-2xl shadow-sm hover:bg-[#ff5252] hover:text-white transition-all hover:-translate-y-1 body-text text-base">
             Explore Franchises →
           </Link>
        </section>

      </div>
    </>
  );
}