// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* Hero Header */}
      <div className="bg-[#1a1a1a] py-16 px-6 text-center border-b-4 border-[#ff5252]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">About Us</h1>
        <p className="text-slate-400 font-medium">
          <a href="/" className="hover:text-cyan-400 transition-colors">Home</a> <span className="mx-2">&gt;</span> About
        </p>
      </div>

      {/* Main About Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff5252] mb-6 tracking-tight">About</h2>
            <div className="w-24 h-2 bg-[#ff5252] mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
              <p>
                Each one of us at The KiDS Square has dedicated long years to develop the format we use at our schools. Our research is based on the study of real environment of play school education and the problems that today's parents face with their wards.
              </p>
              <p>
                We give special emphasis on the needs and wants of a single parent, nuclear families where both parents are working and hence unable to attend to the routine problems of kids. The KiDS Square play school is a Kid's junction where children grow and develop while reading, listening, playing and doing activities.
              </p>
              <p>
                We focus on 360 degrees development of child which includes sensory skills, motor skills, nerve coordination, auditory and visual skills, speech, emotional and mental development of a child. Our panel of experts and professionals work continuously on the development and refining of learning tools & curriculum using the best available information and techniques. We keep on updating our learning tools and curriculum basis these recommendations.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[400px] md:h-[500px] bg-slate-100 rounded-3xl border-8 border-slate-50 shadow-xl overflow-hidden">
               <img src="/10382636_164001750460976_5533876974069022762_n.jpg" alt="About The Kids Square" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why The Kids Square Section */}
      <section className="py-24 bg-[#f8f9fa] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#00bcd4] mb-6 tracking-tight">Why The Kids Square</h2>
            <div className="w-24 h-2 bg-[#00bcd4] mb-10 rounded-full"></div>
            
            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
              We owe our success to the fact that we have been able to blend learning along with fun. Our aim is to open The KiDS Square play schools across the length and breadth of the Indian sub-continent.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-3">Our Mission</h3>
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                  We aspire to be the leaders of the play school industry by opening 'The KiDS Square' play schools across the length and breadth of the Indian sub-continent. To develop kids to be the real heroes of tomorrow by providing them with best education.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-3">Our Vision</h3>
                <p className="text-slate-600 text-base font-medium leading-relaxed mb-4">
                  We are committed to provide the best educational facilities thus preparing the kids for the competitive world ahead. To develop these kids into a strong, confident, caring, creative and quick learner who would grow into better leaders and human beings of tomorrow.
                </p>
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                  With well trained teachers and staff, The Kids Square ensures that a child becomes self dependant by inculcating good habits along with high level of hygiene and safety.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-3">Preschool to School:</h3>
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                  As the name suggests a preschool prepares a child for a full school. A good preschool provides the right environment for a child that makes her transition smooth from a preschool to a school.
                </p>
              </div>
            </div>

            <button className="mt-10 bg-[#673ab7] hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-base font-extrabold transition-all shadow-md hover:-translate-y-1">
              Back to Home
            </button>
          </div>

          <div className="relative pt-12 md:pt-0">
            <div className="w-full h-[600px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[16px] border-white">
              <img src="/img2.jpg" alt="Child learning and playing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
          Our <span className="text-[#ff5252]">Core Team</span>
        </h2>
        <div className="w-24 h-2 bg-[#00bcd4] mx-auto mb-16 rounded-full"></div>

        <div className="flex justify-center">
          {/* Team Member Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-sm hover:-translate-y-2 transition-transform duration-300">
            <div className="h-72 bg-blue-50 overflow-hidden">
              <img
                src="/rajen.jpeg"
                alt="Mr. Rajendra Prasad"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-8 text-left">
              <h3 className="text-2xl font-extrabold text-[#ff5252] mb-1">Mr. Rajendra Prasad</h3>
              <p className="text-[#00bcd4] font-bold text-sm mb-1">(Director - Operations & Logistics)</p>
              <p className="text-[#00bcd4] font-bold text-sm mb-6">BCA, OCP, OCA, MCA</p>
              
              <p className="text-slate-500 text-sm font-medium leading-relaxed border-t border-slate-100 pt-6">
                Having good experience in Education Sector, Dermatoglyphics, Administration & Supply Chain.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}