import { Truck, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-emerald-500/20 bg-[#040614]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                <Truck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-white uppercase tracking-widest">LITHIN</span>
                <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest -mt-0.5">LOGISTICS & TRANSPORT</span>
              </div>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed">
              Technology-driven logistics and freight transport solutions delivering speed, safety, and reliability across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-extrabold text-white mb-2 uppercase tracking-wider text-emerald-400">Navigation</h4>
            <Link to="/" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Home</Link>
            <Link to="/about" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">About Us</Link>
            <Link to="/services" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Services</Link>
            <Link to="/fleet" className="text-xs text-gray-300 hover:text-emerald-300 transition-colors">Fleet</Link>
          </div>

          {/* Team Scope Notice */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-extrabold text-white mb-2 uppercase tracking-wider text-emerald-400">Project Ownership</h4>
            <p className="text-xs text-gray-300">
              <strong className="text-white">Selvamani:</strong> Core Architecture & Pages (Home, About, Services, Fleet)
            </p>
            <p className="text-xs text-gray-300">
              <strong className="text-white">Navin:</strong> UI/UX, Firebase & Deployment
            </p>
            <p className="text-xs text-gray-300">
              <strong className="text-white">Munik:</strong> Functional Features & Admin
            </p>
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
          <span>&copy; {new Date().getFullYear()} Lithin Transport Logistics. All rights reserved.</span>
          <span>Designed & Built by Selvamani (Frontend Architecture Team)</span>
        </div>
      </div>
    </footer>
  );
}
