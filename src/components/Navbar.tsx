import { useState } from 'react';
import { Link as RouterLink, useLocation as useRouteLocation } from 'react-router-dom';
import { Phone, Menu, X, HelpCircle, User, Send, Mail, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';
import BookingFormContent from './BookingFormContent';
import ContactSection from './ContactSection';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const location = useRouteLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [queryOpen, setQueryOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
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
    { name: 'HOME', path: '/', isModal: false },
    { name: 'SERVICES', path: '/services', isModal: false },
    { name: 'GALLERY', path: '/gallery', isModal: false },
    { name: 'ABOUT US', path: '/about', isModal: false },
    { name: 'CONTACT', path: '#contact', isModal: true },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Left: Official Lithin Logo Image in an Enlarged Circular Metallic Glow Badge */}
        <RouterLink to="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 bg-[#060b1e]/95 border-2 border-emerald-400/70 shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform group-hover:border-emerald-300 shrink-0">
            <img
              src="/logo.png"
              alt="Lithin Transport Logo"
              className="w-full h-full object-contain rounded-full scale-130"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo-tab.png';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase font-sans leading-none">
              LITHIN
            </span>
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-emerald-400 uppercase mt-1">
              TRANSPORT
            </span>
          </div>
        </RouterLink>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path && !link.path.includes('#');
            if (link.isModal) {
              return (
                <button
                  key={link.name}
                  onClick={() => setContactModalOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 py-1 px-2 rounded-lg bg-transparent text-slate-200 hover:text-emerald-400 hover:bg-white/5 cursor-pointer"
                >
                  <span>{link.name}</span>
                </button>
              );
            }
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

          {/* 24/7 SUPPORT DROPDOWN MENU */}
          <div className="relative">
            <button
              onClick={() => setSupportDropdownOpen(!supportDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-emerald-500/10 border border-emerald-500/30 rounded-full text-white text-xs font-semibold tracking-wider transition-all cursor-pointer"
              title="24/7 Support Desk"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 SUPPORT</span>
              <ChevronDown className={`w-3.5 h-3.5 text-emerald-400 transition-transform duration-200 ${supportDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu attached right below button */}
            {supportDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-72 sm:w-80 bg-[#060b1e]/98 backdrop-blur-2xl border-2 border-emerald-500/40 rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="border-b border-emerald-500/20 pb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-white uppercase font-sans">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>24/7 Support Desk</span>
                  </div>
                  <button
                    onClick={() => setSupportDropdownOpen(false)}
                    className="text-gray-400 hover:text-white text-xs p-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {/* 1. Phone Call Action */}
                <a
                  href="tel:+919566738884"
                  onClick={() => setSupportDropdownOpen(false)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-400 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest">
                        24/7 Phone Helpline
                      </span>
                      <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                        +91 95667 38884
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 uppercase tracking-wider">
                    Call
                  </span>
                </a>

                {/* 2. WhatsApp Direct Support Action */}
                <a
                  href="https://wa.me/919566738884?text=Hi%20Lithin%20Transport%2C%20I%20need%20container%20freight%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSupportDropdownOpen(false)}
                  className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-400/30 hover:border-emerald-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-extrabold text-[#25D366] uppercase tracking-widest">
                        WhatsApp Support
                      </span>
                      <span className="text-xs font-bold text-white group-hover:text-[#25D366] transition-colors">
                        +91 95667 38884
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-[#25D366] text-slate-950 uppercase tracking-wider">
                    Chat
                  </span>
                </a>

                {/* 3. Email Action */}
                <a
                  href="mailto:lithintransports@gmail.com"
                  onClick={() => setSupportDropdownOpen(false)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-400 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest">
                        Official Email
                      </span>
                      <span className="text-[11px] font-bold text-white group-hover:text-emerald-300 transition-colors">
                        lithintransports@gmail.com
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 uppercase tracking-wider shrink-0">
                    Mail
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Language Selector Dropdown */}
          <LanguageSelector />

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
          <LanguageSelector />

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
          {navLinks.map((link) => {
            if (link.isModal) {
              return (
                <button
                  key={link.name}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setContactModalOpen(true);
                  }}
                  className="flex items-center justify-between px-4 py-3 text-xs font-bold tracking-widest uppercase text-slate-200 hover:bg-white/10 rounded-xl text-left cursor-pointer"
                >
                  <span>{link.name}</span>
                </button>
              );
            }
            return (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-xs font-bold tracking-widest uppercase text-slate-200 hover:bg-white/10 rounded-xl"
              >
                <span>{link.name}</span>
              </a>
            );
          })}
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

      {/* Lithin Transport Official Contact Details Modal Dialog */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-[#060b1e]/95 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-5 my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-emerald-600 text-white transition-colors z-10 cursor-pointer"
              title="Close Contact Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <ContactSection isModal={true} />
          </div>
        </div>
      )}
    </header>
  );
}


