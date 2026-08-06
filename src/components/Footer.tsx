import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-transparent border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full p-1 bg-[#060b1e]/90 border-2 border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform group-hover:border-emerald-300">
                <img
                  src="/logo.png"
                  alt="Lithin Transport Logo"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo-tab.png';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-white uppercase tracking-widest font-sans leading-none flex items-center gap-1">
                  LITHIN
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                </span>
                <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest mt-0.5">
                  LOGISTICS & TRANSPORT
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed">
              ISO 9001:2015 certified commercial logistics and heavy freight transport solutions delivering speed, safety, and reliability across India.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase rounded-full w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Licensed Interstate Freight Carrier</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-extrabold text-white mb-2 uppercase tracking-wider text-emerald-400">Navigation</h4>
            <Link to="/" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Home</Link>
            <Link to="/about" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">About Us</Link>
            <Link to="/services" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Services</Link>
            <Link to="/gallery" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Gallery</Link>
            <a href="/#quote" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Rate Estimator</a>
          </div>

          {/* Commercial Services */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-extrabold text-white mb-2 uppercase tracking-wider text-emerald-400">Freight Solutions</h4>
            <Link to="/services" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Full Truck Load (FTL)</Link>
            <Link to="/services" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Part Load Cargo (PTL)</Link>
            <Link to="/services" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Heavy Machinery Transport</Link>
            <Link to="/services" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Sealed Container Fleet</Link>
            <Link to="/services" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Warehousing & Hub Logistics</Link>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-extrabold text-white mb-1 uppercase tracking-wider text-emerald-400">Contact Hub</h4>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Headquarters: Chennai, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>support@lithintransport.com</span>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <span>&copy; {new Date().getFullYear()} Lithin Transport Logistics Ltd. All rights reserved.</span>
          <span>Nationwide Commercial Transport & Supply Chain Network</span>
        </div>
      </div>
    </footer>
  );
}
