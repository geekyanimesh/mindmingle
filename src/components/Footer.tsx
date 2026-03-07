import Link from "next/link";

const usefulLinks = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Our Network", href: "/ourNetwork" },
  { label: "Admission", href: "/admission" },
  { label: "Our Course", href: "/ourCourse" },
  { label: "Parent's Corner", href: "/parentsCorner" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contactUs" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1: About */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src="/logo.jpeg" alt="The Kids Square" className="w-10 h-10 object-contain rounded-lg" />
            <h3 className="text-white text-lg font-extrabold tracking-tight uppercase">The Kids Square Pvt Ltd</h3>
          </div>
          <p className="text-[14px] leading-relaxed text-slate-400 font-medium">
            The Kids Square is one of the best play school chains ventured by Kids Square Private Limited, a pioneer organization in education. We believe that children need a safe, clean and hygienic environment in which they can grow.
          </p>
          {/* Facebook only */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/share/17xXGnnAGk/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1877f2] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-white text-lg font-extrabold mb-6 tracking-tight uppercase flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-[#00bcd4] inline-block" />
            Useful Links
          </h3>
          <ul className="text-[14px] space-y-3 font-medium">
            {usefulLinks.map((link) => (
              <li key={link.href} className="border-b border-dotted border-slate-700 pb-3">
                <Link href={link.href}
                  className="hover:text-[#00bcd4] transition-colors flex items-center gap-2 group text-slate-400">
                  <span className="text-[#00bcd4] opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white text-lg font-extrabold mb-6 tracking-tight uppercase flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-[#ff5252] inline-block" />
            Contact Us
          </h3>
          <ul className="text-[14px] space-y-5 font-medium">
            <li className="flex gap-3 items-start">
              <span className="text-[#00bcd4] text-base mt-0.5 shrink-0">📍</span>
              <span className="text-slate-400 leading-relaxed">
                E-10/12 Triveni Complex, 210, 2nd Floor, Laxmi Nagar, Near Hira Sweets, Delhi - 110092
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-[#8bc34a] text-base shrink-0">✉</span>
              <a href="mailto:info@kidssquare.co.in"
                className="hover:text-white transition-colors text-slate-400">
                info@kidssquare.co.in
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-[#ff9800] text-base shrink-0">🌎</span>
              <a href="https://www.kidssquare.co.in" target="_blank" rel="noreferrer"
                className="hover:text-white transition-colors text-slate-400">
                www.kidssquare.co.in
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-[#ff5252] text-base shrink-0">📞</span>
              <div className="text-slate-400">
                <a href="tel:+919560533778" className="hover:text-white transition-colors">9560533778</a>
                <span className="mx-2 text-slate-600">|</span>
                <a href="tel:+919335131420" className="hover:text-white transition-colors">9335131420</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4: Opening Hours */}
        <div>
          <h3 className="text-white text-lg font-extrabold mb-6 tracking-tight uppercase flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-[#ff9800] inline-block" />
            Opening Hours
          </h3>
          <ul className="text-[14px] space-y-4 text-slate-400 font-medium mb-8">
            {[
              { day: "Mon – Fri", time: "09:00 am – 05:00 pm", open: true },
              { day: "Saturday", time: "By Appointment", open: true },
              { day: "Sunday", time: "Closed", open: false },
            ].map((row) => (
              <li key={row.day} className="flex justify-between border-b border-dotted border-slate-700 pb-3">
                <span>{row.day}</span>
                <span className={row.open ? "text-white" : "text-[#ff5252]"}>{row.time}</span>
              </li>
            ))}
          </ul>

          {/* Quick CTA */}
          <Link href="/admission"
            className="inline-flex items-center gap-2 bg-[#ff5252] hover:bg-red-600 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5 uppercase tracking-widest">
            🎓 Apply for Admission
          </Link>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#151515] py-5 mt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[12px] font-bold tracking-wide text-slate-500 gap-3">
          <p>COPYRIGHT © {new Date().getFullYear()} THE KIDS SQUARE PVT LTD. ALL RIGHTS RESERVED</p>
          <p>DESIGNED & DEVELOPED BY <a href="mailto:xlr8developers@gmail.com" className="text-[#00bcd4] hover:text-white transition-colors">xlr8Devs</a></p>
        </div>
      </div>
    </footer>
  );
}