// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-white text-xl font-extrabold mb-8 tracking-tight uppercase">The kids Square Pvt Ltd</h3>
          <p className="text-[14px] leading-relaxed text-slate-400 font-medium">
            The Kids Square is one of the best play school chain ventured by Kids Square Private Limited, A Pioneer organization in education. We believe that children need a safe, clean and hygienic environment in which they can grow themselves.
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-white text-xl font-extrabold mb-8 tracking-tight uppercase">Useful Links</h3>
          <ul className="text-[14px] space-y-4 font-medium">
            <li className="border-b border-dotted border-slate-600 pb-3"><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
            <li className="border-b border-dotted border-slate-600 pb-3"><a href="#" className="hover:text-cyan-400 transition-colors">Our Network</a></li>
            <li className="border-b border-dotted border-slate-600 pb-3"><a href="#" className="hover:text-cyan-400 transition-colors">Admission</a></li>
            <li className="border-b border-dotted border-slate-600 pb-3"><a href="#" className="hover:text-cyan-400 transition-colors">Franchise</a></li>
            <li className="border-b border-dotted border-slate-600 pb-3"><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h3 className="text-white text-xl font-extrabold mb-8 tracking-tight uppercase">Contact Us</h3>
          <ul className="text-[14px] space-y-5 font-medium">
            <li className="flex gap-4">
              <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
              <span className="text-slate-400 leading-relaxed">E-10/12 Triveni Complex, 210, 2nd Floor, Laxmi Nagar, Near Hira Sweets, Delhi - 110092</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-[#8bc34a] text-lg">✉</span>
              <a href="mailto:info@thekidssquare.in" className="hover:text-white transition-colors text-slate-400">info@thekidssquare.in</a>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-[#ff9800] text-lg">🌎</span>
              <a href="#" className="hover:text-white transition-colors text-slate-400">www.thekidssquare.in</a>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-[#ff5252] text-lg">📞</span>
              <span className="text-slate-400">9560533778 <span className="mx-2 text-slate-600">|</span> 9335131420</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Opening Hours */}
        <div>
          <h3 className="text-white text-xl font-extrabold mb-8 tracking-tight uppercase">Opening Hours</h3>
          <ul className="text-[14px] space-y-4 text-slate-400 font-medium">
            <li className="flex justify-between border-b border-dotted border-slate-600 pb-3">
              <span>Mon - Fri :</span>
              <span className="text-white">09.00 am - 05.00 pm</span>
            </li>
            <li className="flex justify-between border-b border-dotted border-slate-600 pb-3">
              <span>Sun :</span>
              <span className="text-white">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#151515] py-6 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[12px] font-bold tracking-wide text-slate-500 gap-3">
          <p>COPYRIGHT © {new Date().getFullYear()} THE KID SQUARE PVT LTD. ALL RIGHTS RESERVED</p>
          <p>DESIGNED & DEVELOPED BY xlr8Devs</p>
        </div>
      </div>
    </footer>
  );
}