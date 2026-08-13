import { ShieldCheck, ChevronRight, Phone, MapPin, Award, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Footer() {
  const handlePhoneClick = (phone: string) => (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText(phone);
      toast.success(`Phone number ${phone} copied to clipboard!`);
    }
  };

  return (
    <footer className="relative mt-20 bg-slate-950/80 backdrop-blur-xl border-t border-emerald-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* TOP ROW: ABOUT US, QUICK LINKS, OFFICES & BRANCHES, 6+ YEARS BADGE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* ABOUT US */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2 border-b border-emerald-500/30 pb-2.5 w-fit">
              <span>About Us</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              Established in 2020, Lithin Transport is a premier commercial <strong className="text-emerald-400 font-extrabold">Transport Contractor</strong> and <strong className="text-emerald-400 font-extrabold">Booking Agency</strong>. We specialize in professional transport contracting, commercial fleet haulage, and express goods booking solutions.
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Transport Contractor</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase rounded-full">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Licensed Carrier</span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-emerald-500/30 pb-2.5 w-fit">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-gray-300">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/about#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 hover:text-emerald-400 transition-colors font-medium group"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR OFFICES & BRANCHES */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-emerald-500/30 pb-2.5 flex items-center gap-2 text-emerald-400 w-fit">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Offices & Branches</span>
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-gray-300">
              <li className="flex flex-col gap-0.5">
                <span className="font-extrabold text-white uppercase text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Bangalore (H.O)</span>
                </span>
                <a
                  href="tel:+919566738884"
                  onClick={handlePhoneClick('+91 95667 38884')}
                  className="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 pl-5 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 95667 38884</span>
                </a>
              </li>

              <li className="flex flex-col gap-0.5">
                <span className="font-extrabold text-white uppercase text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Chennai Branch</span>
                </span>
                <a
                  href="tel:+919342317996"
                  onClick={handlePhoneClick('+91 93423 17996')}
                  className="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 pl-5 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 93423 17996</span>
                </a>
              </li>

              <li className="flex flex-col gap-0.5">
                <span className="font-extrabold text-white uppercase text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Tirupur Hub</span>
                </span>
                <a
                  href="tel:+919566738884"
                  onClick={handlePhoneClick('+91 95667 38884')}
                  className="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 pl-5 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 95667 38884</span>
                </a>
              </li>
            </ul>
          </div>

          {/* CELEBRATING 6+ YEARS BADGE CARD */}
          <div className="md:col-span-3 flex flex-col items-center justify-center p-5 rounded-3xl bg-slate-900/60 border border-emerald-500/30 text-center relative overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 via-transparent to-transparent pointer-events-none" />
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 uppercase tracking-tighter">
              6+ YEARS
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-emerald-400 mt-1">
              In Transport Service
            </div>
            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
              Serving All-India Commercial Freight Corridors Since 2020
            </p>
          </div>

        </div>

        {/* BOTTOM BAR: LEGAL & COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-semibold text-gray-300">Legal</span>
            <span>|</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Supply Chain Transparency</a>
          </div>

          <span className="text-gray-400">
            &copy; {new Date().getFullYear()} Lithin Transport Ltd. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
