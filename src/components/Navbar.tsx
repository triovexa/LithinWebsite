import { useState } from 'react';
import { Link as RouterLink, useLocation as useRouteLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const location = useRouteLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/', hasDropdown: false },
    { name: 'SERVICES', path: '/services', hasDropdown: false },
    { name: 'GALLERY', path: '/gallery', hasDropdown: false },
    { name: 'ABOUT US', path: '/about', hasDropdown: false },
    { name: 'CONTACT', path: '/#contact', hasDropdown: false },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Official Lithin Logo Image in a Circular Metallic Glow Badge */}
        <RouterLink to="/" className="flex items-center gap-3 group">
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
            <span className="text-xl font-black tracking-widest text-white uppercase font-sans leading-none flex items-center gap-1">
              LITHIN
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            </span>
            <span className="text-[9px] font-extrabold tracking-[0.25em] text-emerald-400 uppercase mt-1">
              LOGISTICS & TRANSPORT
            </span>
          </div>
        </RouterLink>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path && !link.path.includes('#');
            return (
              <a
                key={link.name}
                href={link.path}
                className={`flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 py-1 px-2 rounded-lg bg-transparent hover:bg-white/5 ${
                  isActive
                    ? 'text-emerald-400 font-black'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-300 stroke-[2.5]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Phone Pill & Transparent CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-emerald-500/10 border border-emerald-500/30 rounded-full text-white text-xs font-semibold tracking-wider transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 98765 43210</span>
          </a>

          <a
            href="#quote"
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 hover:text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105"
          >
            <div className="flex -space-x-1 text-emerald-400 text-xs font-black">
              <span>›</span>
              <span>›</span>
            </div>
            <span>GET STARTED NOW</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-transparent border border-white/15 text-white hover:bg-white/10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-5 bg-[#060817]/95 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col gap-3 shadow-2xl animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 text-xs font-bold tracking-widest uppercase text-slate-200 hover:bg-white/10 rounded-xl"
            >
              <span>{link.name}</span>
              {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
            </a>
          ))}
          <hr className="border-white/10 my-1" />
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-xl text-white text-xs font-bold"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>+91 98765 43210</span>
          </a>
          <a
            href="#quote"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 rounded-xl text-xs font-black uppercase tracking-wider text-center"
          >
            Get Started Now
          </a>
        </div>
      )}
    </header>
  );
}
