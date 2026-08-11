import { ShieldCheck, Send, Globe, Share2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Footer() {
  const handlePhoneClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText('+919876543210');
      toast.success('Phone number +91 98765 43210 copied to clipboard!');
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText('support@lithintransport.com');
      toast.success('Email support@lithintransport.com copied to clipboard!');
    }
  };

  return (
    <footer className="relative mt-20 bg-transparent pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: About Lithin Transport */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full p-1 bg-[#060b1e]/90 border-2 border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
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
                <span className="text-lg font-black text-white uppercase tracking-widest font-sans leading-none flex items-center gap-1">
                  LITHIN
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                </span>
                <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest mt-0.5">
                  TRANSPORT
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              ISO 9001:2015 certified commercial logistics and heavy freight transport solutions delivering speed, safety, and reliability across Indian industrial corridors.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase rounded-full w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Licensed Interstate Carrier</span>
            </div>
          </div>

          {/* Col 2: Freight Solutions */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-emerald-500/30 pb-2 text-emerald-400">
              Freight Solutions
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-300">
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Full Truck Load (FTL) Freight</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Part Load Express Cargo (PTL)</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Heavy Machinery & Multi-Axle Haulage</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Sealed Steel Container Fleet</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Warehousing & Storage Hubs</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-400 transition-colors">Visual Operations Gallery</Link></li>
            </ul>
          </div>

          {/* Col 3: Support Resources */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-emerald-500/30 pb-2 text-emerald-400">
              Support Resources
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-300">
              <li><a href="/#quote" className="hover:text-emerald-400 transition-colors">Instant Freight Rate Estimator</a></li>
              <li><a href="/#contact" className="hover:text-emerald-400 transition-colors">Track Consignment & Dispatch Desk</a></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Our Fleet & Infrastructure</Link></li>
              <li><a href="tel:+919876543210" onClick={handlePhoneClick} className="hover:text-emerald-400 transition-colors">Direct Highway Helpline Desk</a></li>
              <li><a href="mailto:support@lithintransport.com" onClick={handleEmailClick} className="hover:text-emerald-400 transition-colors">Report Cargo Inquiry or Support</a></li>
            </ul>
          </div>

          {/* Col 4: Stay Connected & Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-emerald-500/30 pb-2 text-emerald-400">
              Stay Connected with Lithin
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Subscribe for tariff updates, express route schedules, and industrial logistics insights.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter business email"
                className="w-full px-3 py-2 bg-[#060b1e] border border-emerald-500/30 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all shadow-md shrink-0"
                title="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 border border-white/10 transition-colors" title="Global Network">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 border border-white/10 transition-colors" title="Social Channels">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 border border-white/10 transition-colors" title="Dispatch Desk Chat">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Copyright */}
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
