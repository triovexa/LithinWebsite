import { useState } from 'react';
import { Link as RouterLink, useLocation as useRouteLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useRouteLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SHIPPING', path: '/services' },
    { name: 'FLEET', path: '/fleet' },
    { name: 'TRACKING', path: '/#tracking' },
    { name: 'SUPPORT', path: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060817]/90 backdrop-blur-xl border-b border-emerald-500/20 px-4 sm:px-8 py-3.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Emerald Arrow Emblem & Lithin Logistics Brand Logo */}
        <RouterLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
            <div className="flex -space-x-1 font-black text-white text-lg tracking-tighter">
              <span>▶</span>
              <span className="text-emerald-200">▶</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-widest text-white uppercase font-sans leading-none">
              LITHIN
            </span>
            <span className="text-[9px] font-extrabold tracking-[0.25em] text-emerald-400 uppercase mt-0.5">
              LOGISTICS
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
                className={`text-xs font-bold tracking-wider uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-emerald-400 font-extrabold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Phone Pill & Two-Tone Button [ >> | Get Started Now ] */}
        <div className="hidden md:flex items-center gap-3">
          {/* Phone Number Pill */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2.5 px-4 py-2 bg-[#0c1328] hover:bg-[#121c3b] border border-emerald-500/20 rounded-full text-white text-xs font-semibold tracking-wider transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 98765 43210</span>
          </a>

          {/* Two-Tone Emerald CTA Button: [ >> | Get Started Now ] */}
          <a
            href="#quote"
            className="flex items-center rounded-xl overflow-hidden shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all group border border-emerald-400/30"
          >
            {/* Left Emerald Box */}
            <div className="px-3 py-2.5 bg-[#10b981] flex items-center justify-center border-r border-emerald-600">
              <div className="flex -space-x-1 text-white font-black text-xs">
                <span>›</span>
                <span>›</span>
              </div>
            </div>
            {/* Right White Box */}
            <span className="px-4 py-2.5 bg-white text-slate-900 text-xs font-black uppercase tracking-wider group-hover:bg-slate-100 transition-colors">
              Get Started Now
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-[#0c1328] border border-emerald-500/20 text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-[#060817]/95 backdrop-blur-2xl border border-emerald-500/20 rounded-2xl flex flex-col gap-3 shadow-2xl animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-xs font-bold tracking-wider uppercase text-gray-200 hover:bg-white/5 rounded-xl"
            >
              {link.name}
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
            className="px-4 py-3 bg-[#10b981] text-white rounded-xl text-xs font-black uppercase tracking-wider text-center"
          >
            Get Started Now
          </a>
        </div>
      )}
    </header>
  );
}
