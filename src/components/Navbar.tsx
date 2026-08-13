import { useState } from 'react';
import { Link as RouterLink, useLocation as useRouteLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Navbar() {
  const location = useRouteLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePhoneClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText('+919566738884');
      toast.success('Phone numbers +91 95667 38884 / +91 93423 17996 copied!');
    }
  };

  const navLinks = [
    { name: 'HOME', path: '/', hasDropdown: false },
    { name: 'SERVICES', path: '/services', hasDropdown: false },
    { name: 'GALLERY', path: '/gallery', hasDropdown: false },
    { name: 'ABOUT US', path: '/about', hasDropdown: false },
    { name: 'CONTACT', path: '/#contact', hasDropdown: false },
  ];

  const searchableItems = [
    { title: 'Full Truck Load (FTL) Freight', category: 'Services', path: '/services' },
    { title: 'Part Load Cargo (PTL)', category: 'Services', path: '/services' },
    { title: 'Heavy Machinery & Multi-Axle Haulage', category: 'Services', path: '/services' },
    { title: 'Sealed Container Fleet Operations', category: 'Services', path: '/services' },
    { title: 'Warehousing & Storage Hubs', category: 'Services', path: '/services' },
    { title: 'Bangalore - Chennai Express Route', category: 'Routes', path: '/' },
    { title: 'Bangalore - Tirupur Garment Corridor', category: 'Routes', path: '/' },
    { title: 'Chennai - Tirupur Inter-Branch Route', category: 'Routes', path: '/' },
    { title: 'Photo Gallery & Fleet Operations', category: 'Gallery', path: '/gallery' },
    { title: 'About Lithin Transport & Fleet', category: 'Company', path: '/about' },
    { title: 'Get Instant Rate Quote / Contact', category: 'Support', path: '/#quote' },
  ];

  const searchResults = searchQuery.trim() === ''
    ? searchableItems.slice(0, 4)
    : searchableItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Left: Official Lithin Logo Image in a Perfect Circular Metallic Glow Badge */}
        <RouterLink to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-12 h-12 shrink-0 aspect-square rounded-full p-0.5 bg-[#060b1e] border-2 border-emerald-400/80 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform group-hover:border-emerald-300">
            <img
              src="/logo.png"
              alt="Lithin Transport Logo"
              className="w-full h-full object-cover rounded-full scale-105"
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
              TRANSPORT
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
                className={`flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 py-1 px-2 rounded-lg bg-transparent hover:bg-white/5 ${isActive
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

        {/* Right: Search Button, Mass 24/7 Helpline Desk Widget & Transparent CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-emerald-500/10 border border-emerald-500/30 rounded-full text-white text-xs font-semibold tracking-wider transition-all"
            title="Search Services & Routes"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span>SEARCH</span>
          </button>

          {/* MASS 24/7 HELPLINE DESK HEADER WIDGET */}
          <a
            href="tel:+919566738884"
            onClick={handlePhoneClick}
            className="flex items-center gap-2.5 px-4 py-1.5 bg-slate-950/80 hover:bg-slate-900 border border-emerald-500/60 rounded-full text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] group"
            title="24/7 Lithin Transport Helpline Desk"
          >
            <div className="relative flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 relative" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400">
                24/7 HELPLINE DESK
              </span>
              <div className="flex items-center gap-1 text-xs font-black text-white group-hover:text-emerald-300 transition-colors">
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>+91 95667 38884</span>
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/919566738884"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-400/40 rounded-full text-emerald-400 text-xs font-black tracking-wider transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <div className="flex -space-x-1 text-emerald-400 text-xs font-black">
              <span>›</span>
              <span>›</span>
            </div>
            <span>GET STARTED NOW</span>
          </a>
        </div>

        {/* Mobile Hamburger & Search Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2.5 rounded-xl bg-transparent border border-white/15 text-white hover:bg-white/10"
          >
            <Search className="w-5 h-5 text-emerald-400" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-transparent border border-white/15 text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
          
          {/* Mobile 24/7 Helpline Desk Widget */}
          <a
            href="tel:+919566738884"
            onClick={handlePhoneClick}
            className="flex items-center justify-between px-4 py-3 bg-slate-900 border border-emerald-500/40 rounded-xl text-white text-xs font-bold"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 relative" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400">24/7 HELPLINE DESK</span>
                <span className="text-xs font-extrabold text-white">+91 95667 38884</span>
              </div>
            </div>
            <Phone className="w-4 h-4 text-emerald-400" />
          </a>

          <a
            href="https://wa.me/919566738884"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 rounded-xl text-xs font-black uppercase tracking-wider text-center"
          >
            Get Started Now
          </a>
        </div>
      )}

      {/* Polish Modal Search Dialog */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#060b1e]/95 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-5">
            <button
              onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-emerald-600 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xs font-black uppercase tracking-widest text-emerald-400">Search Lithin Transport</h3>
            
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-emerald-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search freight services, express routes, FTL, gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-[#02040c] border border-emerald-500/30 rounded-2xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2 mt-1 max-h-64 overflow-y-auto pr-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {searchQuery ? 'Search Results' : 'Suggested Services & Express Routes'}
              </span>
              {searchResults.length > 0 ? (
                searchResults.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.path}
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-emerald-500/20 border border-emerald-500/10 hover:border-emerald-500/40 transition-all text-white text-xs group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase border border-emerald-500/30">
                        {item.category}
                      </span>
                      <span className="font-bold tracking-wide">{item.title}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-gray-400">
                  No matching services or routes found for "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
