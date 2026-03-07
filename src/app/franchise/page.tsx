"use client";

import { useState } from "react";

const tabs = [
  { id: "why", label: "Why Franchise?" },
  { id: "whykids", label: "Why The Kids Square" },
  { id: "support", label: "Our Support System" },
  { id: "benefits", label: "Franchise Benefits" },
  { id: "requirements", label: "Requirements" },
];

const tabContent: Record<string, { heading: string; icon: string; color: string; items: { title?: string; text: string }[] }> = {
  why: {
    heading: "Why Develop Through Franchisee?",
    icon: "🌍",
    color: "#00bcd4",
    items: [
      {
        text: "As an organization we have introduced and developed various concepts and learning tools for preschool education. We want to introduce these across India. We invite people to be our partners in our cause by taking up franchisee of our schools.",
      },
      {
        text: "As a franchisor we pass on all the benefits of the parent company and all other necessary documentation required for running the school. Franchisee also gains the immediate recognition of the business venture.",
      },
      {
        text: "By becoming a franchise, a person is eligible to avail all kind of support by the parent company. Many disadvantages commonly associated with a conventional business operation are avoided.",
      },
    ],
  },
  whykids: {
    heading: "Why Choose The Kids Square?",
    icon: "⭐",
    color: "#ff9800",
    items: [
      { title: "Proven Brand", text: "The Kids Square is one of the best play school chains in India with a strong, trusted brand identity." },
      { title: "Established Systems", text: "Benefit from our tried-and-tested operational systems, curriculum frameworks and admin processes." },
      { title: "Growing Sector", text: "Early childhood education is one of the fastest-growing sectors in India — join at the right time." },
      { title: "Community Impact", text: "Build a meaningful business in your own community while shaping young minds for the future." },
    ],
  },
  support: {
    heading: "Our Support System",
    icon: "🤝",
    color: "#673ab7",
    items: [
      { title: "Setup Assistance", text: "Complete guidance on setting up your school — from location selection to infrastructure planning." },
      { title: "Training Programs", text: "In-depth training for you and your staff covering pedagogy, operations and management." },
      { title: "Marketing Support", text: "Ready-made marketing materials, digital support and brand guidelines to launch successfully." },
      { title: "Ongoing Mentorship", text: "Regular visits, performance reviews and helpline access to keep you on track at every stage." },
    ],
  },
  benefits: {
    heading: "Benefits of Being a Franchise",
    icon: "🏆",
    color: "#ff5252",
    items: [
      { text: "Professional support from the parent company on each and every step for running a smooth and successful business operation." },
      { text: "Accessing the predefined patterns and curriculum." },
      { text: "Using a Brand Name along with all materials help." },
      { text: "Associating directly with a Brand." },
      { text: "Franchisee can save time, efforts and money to develop a Brand Name." },
      { text: "Marketing strategy, plan and activities is another benefit to the Franchisee." },
      { text: "We recognize our franchisee as our partners & representatives and facilitate them to run The KiDS Square Play School in their region." },
    ],
  },
  requirements: {
    heading: "Franchise Requirements",
    icon: "📋",
    color: "#00bcd4",
    items: [
      { title: "Space", text: "Minimum 1500–2000 sq. ft. of carpet area in a ground floor or first floor location." },
      { title: "Investment", text: "Initial franchise fee and setup investment as per the package selected. Contact us for detailed pricing." },
      { title: "Commitment", text: "A genuine passion for early childhood education and a commitment to the KiDS Square values." },
      { title: "Staff", text: "Willingness to hire trained staff and follow the KiDS Square teacher-to-child ratio standards." },
    ],
  },
};

const franchiseBenefitHighlights = [
  { icon: "💰", color: "#ff5252", label: "Low Risk", desc: "Established brand reduces startup risk" },
  { icon: "📚", color: "#00bcd4", label: "Full Curriculum", desc: "Proven learning framework included" },
  { icon: "📣", color: "#673ab7", label: "Marketing Help", desc: "Brand materials & digital support" },
  { icon: "🎓", color: "#ff9800", label: "Staff Training", desc: "Complete teacher training program" },
];

export default function FranchisePage() {
  const [activeTab, setActiveTab] = useState("why");
  const [form, setForm] = useState({ name: "", city: "", state: "", mobile: "", landline: "", email: "", pincode: "", address: "", qualification: "", occupation: "", query: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@kidssquare.co.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Franchise Application from The Kids Square",
          name: form.name,
          city: form.city,
          state: form.state,
          mobile: form.mobile,
          landline: form.landline,
          email: form.email,
          pincode: form.pincode,
          address: form.address,
          qualification: form.qualification,
          occupation: form.occupation,
          query: form.query,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = tabContent[activeTab];

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
        .tab-content { animation: fadeUp 0.3s ease both; }
        .input-field {
          font-family: 'Poppins', sans-serif;
          width: 100%;
          padding: 13px 16px;
          border-radius: 14px;
          border: 2px solid #e2e8f0;
          background: #f8fafc;
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .input-field:focus { border-color: #673ab7; background: #fff; box-shadow: 0 0 0 4px rgba(103,58,183,0.1); }
        .input-field::placeholder { color: #94a3b8; }
        @keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .pop-in { animation: popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative h-60 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/franchise-hero.jpg')]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#673ab7]/85 via-[#ff5252]/60 to-[#00bcd4]/50" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 body-text">
            <span>Home</span><span className="text-[#ff9800]">›</span><span className="text-white">Franchise</span>
          </div>
          <h1 className="sec-title text-5xl md:text-6xl text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>Franchise</h1>
          <div className="mt-3 flex gap-2">
            <div className="h-1 w-16 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-8 rounded-full bg-[#00bcd4]" />
            <div className="h-1 w-4 rounded-full bg-[#ff9800]" />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa]">

        {/* ── Highlight Cards ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-5 fade-in">
          {franchiseBenefitHighlights.map((h) => (
            <div key={h.label} className="card-hover bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: h.color + "15" }}>{h.icon}</div>
              <p className="sec-title text-lg text-slate-800">{h.label}</p>
              <p className="body-text text-slate-500 text-xs font-medium leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </section>

        {/* ── Tab Section ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">

          {/* Tab Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`body-text text-sm font-bold px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === t.id
                    ? "text-white shadow-md"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-700"
                }`}
                style={activeTab === t.id ? { background: tabContent[t.id].color } : {}}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10" key={activeTab}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0" style={{ background: content.color + "15" }}>
                {content.icon}
              </div>
              <div>
                <h2 className="sec-title text-3xl md:text-4xl text-slate-800">{content.heading}</h2>
                <div className="flex gap-2 mt-1">
                  <div className="h-1 w-10 rounded-full bg-[#ff5252]" />
                  <div className="h-1 w-5 rounded-full" style={{ background: content.color }} />
                </div>
              </div>
            </div>

            {activeTab === "benefits" ? (
              <ul className="space-y-3">
                {content.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: content.color }} />
                    <p className="body-text text-slate-600 text-[15px] font-medium leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            ) : content.items[0].title ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {content.items.map((item, i) => (
                  <div key={i} className="card-hover rounded-2xl p-5 border border-slate-100 bg-slate-50/50">
                    <p className="sec-title text-xl mb-2" style={{ color: content.color }}>{item.title}</p>
                    <p className="body-text text-slate-600 text-sm font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {content.items.map((item, i) => (
                  <p key={i} className="body-text text-slate-600 text-[15px] font-medium leading-relaxed">{item.text}</p>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Franchise Application Form ── */}
        <section className="bg-gradient-to-br from-[#673ab7]/5 via-white to-[#ff5252]/5 py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[#673ab7]/10 text-[#673ab7] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4 body-text">
                📝 Apply Now
              </span>
              <h2 className="sec-title text-4xl text-slate-800">
                Franchise <span className="text-[#673ab7]">Application Form</span>
              </h2>
              <div className="flex justify-center gap-2 mt-3">
                <div className="h-1 w-12 rounded-full bg-[#673ab7]" />
                <div className="h-1 w-6 rounded-full bg-[#ff5252]" />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 pop-in">
                  <div className="w-20 h-20 bg-[#673ab7]/10 rounded-full flex items-center justify-center text-4xl mb-5">🎉</div>
                  <h3 className="sec-title text-3xl text-slate-800 mb-2">Application Submitted!</h3>
                  <p className="body-text text-slate-500 text-sm font-medium max-w-xs">
                    Thank you for your interest. Our franchise team will contact you within 2–3 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", city: "", state: "", mobile: "", landline: "", email: "", pincode: "", address: "", qualification: "", occupation: "", query: "" }); }}
                    className="mt-8 bg-[#673ab7] text-white font-bold px-6 py-3 rounded-2xl body-text text-sm hover:bg-purple-700 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: "name", label: "Full Name", placeholder: "Your full name", required: true },
                      { name: "city", label: "City", placeholder: "e.g. New Delhi" },
                      { name: "state", label: "State", placeholder: "e.g. Delhi" },
                      { name: "mobile", label: "Mobile Number", placeholder: "+91 98765 43210", required: true },
                      { name: "landline", label: "Landline", placeholder: "011-XXXXXXXX" },
                      { name: "email", label: "Email Address", placeholder: "you@example.com" },
                      { name: "pincode", label: "Pincode", placeholder: "110092" },
                      { name: "address", label: "Address", placeholder: "Your full address" },
                      { name: "qualification", label: "Qualification", placeholder: "e.g. B.Ed, MBA" },
                      { name: "occupation", label: "Occupation", placeholder: "e.g. Teacher, Businessman" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block body-text text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                          {field.label} {field.required && <span className="text-[#ff5252]">*</span>}
                        </label>
                        <input
                          name={field.name}
                          value={(form as any)[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="input-field"
                        />
                      </div>
                    ))}

                    <div className="sm:col-span-2">
                      <label className="block body-text text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Your Query
                      </label>
                      <textarea
                        name="query"
                        value={form.query}
                        onChange={handleChange}
                        placeholder="Write any questions or queries about the franchise..."
                        rows={4}
                        className="input-field resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-7 flex justify-center">
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 bg-[#673ab7] hover:bg-purple-700 disabled:opacity-50 text-white font-black px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application 🚀"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-r from-[#673ab7] to-[#ff5252] py-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h2 className="sec-title text-4xl md:text-5xl text-white mb-4">Ready to Be a Partner?</h2>
            <p className="body-text text-white/85 text-base mb-8 font-medium leading-relaxed">
              Join The KiDS Square family and build a rewarding business while shaping young minds across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919560533778" className="inline-flex items-center justify-center gap-3 bg-white text-[#673ab7] font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base">
                📞 Call +91-9560533778
              </a>
              <a href="mailto:info@thekidssquare.in" className="inline-flex items-center justify-center gap-3 bg-white/20 text-white font-black px-8 py-4 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all body-text text-base">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}