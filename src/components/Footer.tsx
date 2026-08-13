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
        
        {/* TOP ROW: ABOUT US, QUICK LINKS, 30 YEARS BADGE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* ABOUT US */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2 border-b border-emerald-500/30 pb-2.5 w-fit">
              <span>About Us</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed font-normal max-w-xl">
              Established in 2020, Lithin Transport is a premier commercial <strong className="text-emerald-400 font-extrabold">Transport Contractor</strong> and <strong className="text-emerald-400 font-extrabold">Booking Agency</strong>. We specialize in professional transport contracting, commercial fleet haulage, and express goods booking solutions tailored to your business.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase rounded-full">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Transport Contractor & Booking Agency</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase rounded-full">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Licensed Interstate Carrier</span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-emerald-500/30 pb-2.5 w-fit">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-300">
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
                    className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CELEBRATING 6+ YEARS BADGE */}
          <div className="md:col-span-3 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-900/40 border border-emerald-500/20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 uppercase tracking-tighter">
              6+ YEARS
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-emerald-400 mt-1">
              In Transport Service
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              Serving All-India Commercial Freight Corridors Since 2020
            </p>
          </div>

        </div>

        {/* MIDDLE ROW: OFFICIAL TRANSPORT HUBS & OFFICES */}
        <div className="py-10 border-b border-white/10">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-6 flex items-center gap-2 text-emerald-400">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Official Transport Hubs & Offices</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-gray-300">
            {/* BANGALORE H.O */}
            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-slate-900/40 border border-emerald-500/15">
              <h4 className="font-black text-white text-sm uppercase tracking-wide text-emerald-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                BANGALORE H.O
              </h4>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                Peenya Industrial Area & Kalasipalyam, Bengaluru - 560058
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-emerald-400 font-bold">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+919566738884" onClick={handlePhoneClick('+91 95667 38884')} className="hover:underline">
                  Phone: +91 95667 38884
                </a>
              </div>
            </div>

            {/* CHENNAI MAIN OFFICE */}
            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-slate-900/40 border border-emerald-500/15">
              <h4 className="font-black text-white text-sm uppercase tracking-wide text-emerald-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                CHENNAI MAIN OFFICE
              </h4>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                GST Road, Guindy Industrial Estate, Chennai - 600032
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-emerald-400 font-bold">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+919342317996" onClick={handlePhoneClick('+91 93423 17996')} className="hover:underline">
                  Phone: +91 93423 17996
                </a>
              </div>
            </div>

            {/* TIRUPUR HUB */}
            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-slate-900/40 border border-emerald-500/15">
              <h4 className="font-black text-white text-sm uppercase tracking-wide text-emerald-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                TIRUPUR HUB
              </h4>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                Palladam Road, Garment Industry Corridor, Tirupur - 641604
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-emerald-400 font-bold">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+919566738884" onClick={handlePhoneClick('+91 95667 38884')} className="hover:underline">
                  Phone: +91 95667 38884
                </a>
              </div>
            </div>
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
