import { useState } from 'react';
import { Link as RouterLink, useLocation as useRouteLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, HelpCircle, User, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import BookingFormContent from './BookingFormContent';

export default function Navbar() {
  const location = useRouteLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [queryOpen, setQueryOpen] = useState(false);
  const [queryData, setQueryData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isQuerySubmitting, setIsQuerySubmitting] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText('+919566738884');
      toast.success('Phone number +91 95667 38884 copied to clipboard!');
    }
  };


  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!queryData.message.trim()) {
      toast.error('Please enter your query message');
      return;
    }

    setIsQuerySubmitting(true);

    const whatsappText =
      `Lithin Transport - Customer Inquiry\n\n` +
      (queryData.name.trim() ? `Client Name: ${queryData.name.trim()}\n` : '') +
      (queryData.phone.trim() ? `Phone: ${queryData.phone.trim()}\n` : '') +
      `Query: ${queryData.message.trim()}`;

    const targetPhone = "919566738884";
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(whatsappText)}`;

    setTimeout(() => {
      setIsQuerySubmitting(false);
      toast.success('Opening WhatsApp to send your query...');
      window.open(whatsappUrl, '_blank');
      setQueryData({ name: '', phone: '', message: '' });
      setQueryOpen(false);
    }, 500);
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

        {/* Right: Query Button, Phone Pill & Transparent CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setQueryOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-emerald-500/10 border border-emerald-500/30 rounded-full text-white text-xs font-semibold tracking-wider transition-all cursor-pointer"
            title="Ask a Query"
          >
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>QUERY</span>
          </button>

          <a
            href="tel:+919566738884"
            onClick={handlePhoneClick}
            className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-emerald-500/10 border border-emerald-500/30 rounded-full text-white text-xs font-semibold tracking-wider transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 95667 38884</span>
          </a>

          <button
            onClick={() => setBookingModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 rounded-full text-emerald-300 text-xs font-black tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <div className="flex -space-x-1 text-emerald-400 text-xs font-black">
              <span>›</span>
              <span>›</span>
            </div>
            <span>BOOK NOW</span>
          </button>
        </div>

        {/* Mobile Hamburger & Query Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setQueryOpen(true)}
            className="p-2.5 rounded-xl bg-transparent border border-white/15 text-white hover:bg-white/10 cursor-pointer"
            title="Ask Query"
          >
            <HelpCircle className="w-5 h-5 text-emerald-400" />
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
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setQueryOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-xl text-white text-xs font-bold w-full text-left"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Ask a Query</span>
          </button>
          <a
            href="tel:+919566738884"
            onClick={handlePhoneClick}
            className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-xl text-white text-xs font-bold"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>+91 95667 38884</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setBookingModalOpen(true);
            }}
            className="px-4 py-3 bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 rounded-xl text-xs font-black uppercase tracking-wider text-center cursor-pointer"
          >
            Book Now
          </button>
        </div>
      )}


      {/* Lithin Transport Container Booking Modal Dialog */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#060b1e]/95 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-5 my-8">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-emerald-600 text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <BookingFormContent
              onSuccess={() => setBookingModalOpen(false)}
              title="LITHIN TRANSPORT"
              subtitle="Container Booking Form"
            />
          </div>
        </div>
      )}

      {/* Lithin Transport Query Modal Dialog */}
      {queryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#060b1e]/95 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-5">
            <button
              onClick={() => setQueryOpen(false)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-emerald-600 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-emerald-500/20 pb-3">
              <h3 className="text-xl font-black text-white uppercase tracking-wider font-sans flex items-center gap-2">
                <span className="text-emerald-400">LITHIN</span> TRANSPORT
              </h3>
              <p className="text-xs text-emerald-400 font-bold tracking-wider uppercase mt-1">
                Submit Customer Query
              </p>
            </div>

            <form onSubmit={handleQuerySubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Selvamani"
                  value={queryData.name}
                  onChange={(e) => setQueryData({ ...queryData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={queryData.phone}
                  onChange={(e) => setQueryData({ ...queryData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Your Query / Question</span>
                  <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your freight query, route question, or container inquiry here..."
                  value={queryData.message}
                  onChange={(e) => setQueryData({ ...queryData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isQuerySubmitting}
                className="w-full py-4 bg-[#10b981] hover:bg-emerald-600 text-white font-black rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-50 cursor-pointer mt-1"
              >
                <Send className="w-4 h-4" />
                <span>{isQuerySubmitting ? 'Sending Query...' : 'Send Query to WhatsApp'}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}


