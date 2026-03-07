"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "📍",
    color: "#ff5252",
    label: "Our Address",
    value: "E-10/12 Triveni Complex, 210, 2nd Floor, Laxmi Nagar, Near Hira Sweets, Delhi - 110092",
    href: "https://maps.google.com/?q=Laxmi+Nagar+Delhi",
  },
  {
    icon: "📞",
    color: "#00bcd4",
    label: "Call Us",
    value: "+91-9560533778  |  +91-9335131420",
    href: "tel:+919560533778",
  },
  {
    icon: "✉️",
    color: "#673ab7",
    label: "Email Us",
    value: "info@thekidssquare.in",
    href: "mailto:info@thekidssquare.in",
  },
  {
    icon: "🕐",
    color: "#ff9800",
    label: "Working Hours",
    value: "Mon – Fri: 9:00 AM – 5:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@kidssquare.co.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Contact Form Submission from The Kids Square",
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          message: form.message,
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
        .input-field {
          font-family: 'Poppins', sans-serif;
          width: 100%;
          padding: 14px 18px;
          border-radius: 14px;
          border: 2px solid #e2e8f0;
          background: #f8fafc;
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .input-field:focus {
          border-color: #00bcd4;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(0,188,212,0.1);
        }
        .input-field::placeholder { color: #94a3b8; }
        @keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .pop-in { animation: popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>

      {/* ── Hero Banner ── */}
      <section className="relative h-60 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/contact-hero.jpg')]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff5252]/80 via-[#673ab7]/60 to-[#00bcd4]/50" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-widest uppercase mb-3 body-text">
            <span>Home</span>
            <span className="text-[#ff9800]">›</span>
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="sec-title text-5xl md:text-6xl text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            Contact Us
          </h1>
          <div className="mt-3 flex gap-2 items-center">
            <div className="h-1 w-16 rounded-full bg-[#ff5252]" />
            <div className="h-1 w-8 rounded-full bg-[#00bcd4]" />
            <div className="h-1 w-4 rounded-full bg-[#ff9800]" />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa]">

        {/* ── Intro strip ── */}
        <div className="bg-gradient-to-r from-[#673ab7]/8 to-[#00bcd4]/8 border-b border-slate-100 py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="sec-title text-3xl text-slate-800">Get in <span className="text-[#00bcd4]">Touch with Us</span></h2>
              <p className="body-text text-slate-500 text-sm font-medium mt-1">
                We always appreciate feedback and suggestions. Fill in the form and we'll get back to you shortly.
              </p>
            </div>
            <a
              href="tel:+919560533778"
              className="inline-flex items-center gap-3 bg-[#ff5252] text-white font-bold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all body-text text-sm shrink-0"
            >
              📞 Call Now: +91-9560533778
            </a>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12 fade-in">

          {/* ── Contact Form (3/5) ── */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 pop-in">
                <div className="w-20 h-20 bg-[#00bcd4]/10 rounded-full flex items-center justify-center text-4xl mb-5">✅</div>
                <h3 className="sec-title text-3xl text-slate-800 mb-2">Message Sent!</h3>
                <p className="body-text text-slate-500 text-sm font-medium max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", address: "", message: "" }); }}
                  className="mt-8 bg-[#00bcd4] text-white font-bold px-6 py-3 rounded-2xl body-text text-sm hover:bg-cyan-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <span className="inline-flex items-center gap-2 bg-[#00bcd4]/10 text-[#00bcd4] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 body-text">
                  💬 Send a Message
                </span>
                <h2 className="sec-title text-4xl text-slate-800 mb-1">Contact <span className="text-[#00bcd4]">Us</span></h2>
                <div className="flex gap-2 mb-8">
                  <div className="h-1 w-12 rounded-full bg-[#ff5252]" />
                  <div className="h-1 w-6 rounded-full bg-[#00bcd4]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block body-text text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Full Name <span className="text-[#ff5252]">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="e.g. Priya Sharma"
                      className="input-field"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block body-text text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Email Address <span className="text-[#ff5252]">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="you@example.com"
                      className="input-field"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block body-text text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      placeholder="+91 98765 43210"
                      className="input-field"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block body-text text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Your Address
                    </label>
                    <input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      onFocus={() => setFocused("address")}
                      onBlur={() => setFocused(null)}
                      placeholder="City, State"
                      className="input-field"
                    />
                  </div>

                  {/* Message — full width */}
                  <div className="sm:col-span-2">
                    <label className="block body-text text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Write your query or feedback here..."
                      rows={4}
                      className="input-field resize-none"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ff5252] hover:bg-[#e53935] disabled:opacity-50 text-white font-black px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message 🚀"}
                </button>
              </>
            )}
          </div>

          {/* ── Contact Info Cards (2/5) ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="mb-2">
              <span className="inline-flex items-center gap-2 bg-[#673ab7]/10 text-[#673ab7] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full body-text">
                📌 Find Us
              </span>
              <h2 className="sec-title text-3xl text-slate-800 mt-3">Contact <span className="text-[#673ab7]">Information</span></h2>
              <div className="flex gap-2 mt-2">
                <div className="h-1 w-12 rounded-full bg-[#673ab7]" />
                <div className="h-1 w-6 rounded-full bg-[#ff5252]" />
              </div>
            </div>

            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: info.color + "15" }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="body-text text-xs font-black uppercase tracking-widest mb-1" style={{ color: info.color }}>
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="body-text text-slate-700 text-sm font-semibold leading-relaxed hover:underline"
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="body-text text-slate-700 text-sm font-semibold leading-relaxed">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-48 bg-slate-100 relative">
              <iframe
                title="Kids Square Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3!2d77.2773!3d28.6304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzQ5LjQiTiA3N8KwMTYnMzguMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="bg-gradient-to-r from-[#ff5252] to-[#673ab7] py-14 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h2 className="sec-title text-4xl md:text-5xl text-white mb-4">We'd Love to Hear From You!</h2>
            <p className="body-text text-white/85 text-base mb-8 font-medium leading-relaxed">
              Have a question about admissions, academics, or anything else? Our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@thekidssquare.in"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#673ab7] font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 body-text text-base"
              >
                ✉️ info@thekidssquare.in
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