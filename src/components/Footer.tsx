import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ShieldCheck, HelpCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import BookingFormContent from './BookingFormContent';

export default function Footer() {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [queryOpen, setQueryOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const [queryForm, setQueryForm] = useState({ name: '', phone: '', query: '' });
  const [isQuerySubmitting, setIsQuerySubmitting] = useState(false);

  const handleQuickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhoneClick = (e: React.MouseEvent, phone: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText(phone);
      toast.success(`Phone number ${phone} copied to clipboard!`);
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText('lithintransports@gmail.com');
      toast.success('Email lithintransports@gmail.com copied to clipboard!');
    }
  };

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryForm.name.trim() || !queryForm.phone.trim() || !queryForm.query.trim()) {
      toast.error('Please fill in all fields to submit your query');
      return;
    }

    setIsQuerySubmitting(true);
    const whatsappMsg = `LITHIN TRANSPORT - QUERY\n\nClient Name: ${queryForm.name}\nPhone: ${queryForm.phone}\nQuery: ${queryForm.query}`;
    const targetPhone = "919566738884";
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(whatsappMsg)}`;

    setTimeout(() => {
      setIsQuerySubmitting(false);
      toast.success('Opening WhatsApp to send query...');
      window.open(whatsappUrl, '_blank');
      setQueryForm({ name: '', phone: '', query: '' });
      setQueryOpen(false);
    }, 600);
  };

  return (
    <footer className="relative mt-12 bg-transparent border-t border-emerald-500/20 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Content Grid: About Us, Quick Links, Get In Touch, Celebrating 6+ Years Badge */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10 items-start">
          
          {/* Col 1: About Us (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <Link to="/" onClick={handleQuickLinkClick} className="flex items-center gap-3 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 bg-[#060b1e] border-2 border-emerald-400/70 shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0">
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
                <span className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest font-sans leading-none">
                  LITHIN
                </span>
                <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-[0.25em] mt-1">
                  TRANSPORT
                </span>
              </div>
            </Link>

            <h4 className="text-xs font-black text-white uppercase tracking-widest text-emerald-400 border-b border-emerald-500/30 pb-1 w-fit mt-1">
              About Us
            </h4>

            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              Founded in 2020, Lithin Transport is a professional transport contractor and freight booking agency offering expert freight transport, parcel dispatch, and comprehensive logistics solutions across India.
            </p>
          </div>

          {/* Col 2: Quick Links with Auto-Scroll to Top (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h4 className="text-xs font-black text-white uppercase tracking-widest text-emerald-400 border-b border-emerald-500/30 pb-1 w-fit">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-300">
              <li>
                <Link to="/" onClick={handleQuickLinkClick} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-emerald-400 font-bold">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleQuickLinkClick} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-emerald-400 font-bold">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleQuickLinkClick} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-emerald-400 font-bold">›</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={handleQuickLinkClick} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-emerald-400 font-bold">›</span>
                  <span>Fleet Gallery</span>
                </Link>
              </li>
              
              <li>
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-bold text-emerald-400 cursor-pointer text-left"
                >
                  <span className="text-emerald-400 font-bold">›</span>
                  <span>Book Container Freight</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setQueryOpen(true)}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium cursor-pointer text-left"
                >
                  <span className="text-emerald-400 font-bold">›</span>
                  <span>Ask a Query</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Get In Touch (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest text-emerald-400 border-b border-emerald-500/30 pb-1 w-fit">
              Get In Touch
            </h4>

            <div className="flex flex-col gap-2.5 text-xs">
              {/* Head Office: Bangalore */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-0.5">
                <span className="font-black text-emerald-400 uppercase text-[11px]">
                  BANGALORE H.O
                </span>
                <p className="text-[11px] text-gray-300 font-normal leading-snug">
                  Electronic City Industrial Area, Bengaluru, Karnataka - 560100
                </p>
                <a
                  href="tel:+919566738884"
                  onClick={(e) => handlePhoneClick(e, '+91 95667 38884')}
                  className="text-[11px] font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  Phone: +91 95667 38884
                </a>
              </div>

              {/* Tirupur Branch */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-0.5">
                <span className="font-black text-emerald-400 uppercase text-[11px]">
                  TIRUPUR BRANCH
                </span>
                <p className="text-[11px] text-gray-300 font-normal leading-snug">
                  Garment Export Zone, Tirupur, Tamil Nadu - 641604
                </p>
                <a
                  href="tel:+919342317996"
                  onClick={(e) => handlePhoneClick(e, '+91 93423 17996')}
                  className="text-[11px] font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  Phone: +91 93423 17996
                </a>
              </div>

              {/* Chennai Branch */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-0.5">
                <span className="font-black text-emerald-400 uppercase text-[11px]">
                  CHENNAI BRANCH
                </span>
                <p className="text-[11px] text-gray-300 font-normal leading-snug">
                  Ambattur Industrial Estate, Chennai, Tamil Nadu - 600058
                </p>
                <a
                  href="mailto:lithintransports@gmail.com"
                  onClick={handleEmailClick}
                  className="text-[11px] font-bold text-emerald-300 hover:text-emerald-400 transition-colors"
                >
                  Email: lithintransports@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Celebrating 6+ Years In Service Badge (Far Right - lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-[#081226] via-[#05091a] to-[#040816] border-2 border-emerald-500/30 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-xs font-black tracking-widest text-emerald-400 uppercase font-sans italic">
              Celebrating
            </span>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 font-sans tracking-tight my-1 drop-shadow-lg">
              6+ YEARS
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase bg-emerald-500/25 px-3 py-1 rounded-full border border-emerald-400/40 shadow-md">
              In Service
            </span>
            <p className="text-[10px] text-gray-400 font-medium mt-2">
              Pan-India Commercial Freight
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms & Conditions (| Line Separator) + Animated Snake Social Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-2 text-xs text-gray-300 flex-wrap justify-center sm:justify-start font-medium">
            <span>Copyright &copy; {new Date().getFullYear()} Lithin Transport Ltd. All Rights Reserved.</span>
            <span className="text-gray-500 font-bold">|</span>
            <button
              onClick={() => setShowTermsModal(true)}
              className="text-gray-200 hover:text-emerald-400 font-semibold transition-colors cursor-pointer underline underline-offset-4"
            >
              Terms & Conditions
            </button>
          </div>

          {/* Facebook & Instagram Animated Snake Glow Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Follow Us:</span>

            {/* Facebook Snake Glow Icon */}
            <div className="p-[2px] rounded-full animate-snake-border shadow-lg shadow-emerald-500/20">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#060b1e] hover:bg-emerald-500/20 flex items-center justify-center text-white hover:text-emerald-300 transition-all duration-300 cursor-pointer"
                title="Lithin Transport Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Instagram Snake Glow Icon */}
            <div className="p-[2px] rounded-full animate-snake-border shadow-lg shadow-emerald-500/20">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#060b1e] hover:bg-emerald-500/20 flex items-center justify-center text-white hover:text-emerald-300 transition-all duration-300 cursor-pointer"
                title="Lithin Transport Instagram Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* TERMS & CONDITIONS LIGHTBOX MODAL POPUP */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full bg-[#060b1e] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto">
            
            {/* Close X Button */}
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
              title="Close Terms Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-emerald-500/20 pb-4 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider mb-2 border border-emerald-400/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Commercial Freight Policy</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide font-sans">
                Lithin Transport — Terms & Conditions
              </h3>
              <p className="text-xs text-gray-300 mt-1 font-medium">
                Official terms governing commercial container booking, transit SLAs, and carrier dispatch.
              </p>
            </div>

            {/* Modal Content Sections */}
            <div className="flex flex-col gap-4 text-xs text-gray-300 leading-relaxed font-normal">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                <h4 className="text-xs font-black text-emerald-400 uppercase flex items-center gap-2">
                  <span>1. Vehicle Allotment & Loading SLA</span>
                </h4>
                <p>
                  Container trucks (9ft, 10ft, 14ft, 17ft, 20ft, 22ft, 24ft, 32ft) are dispatched based on confirmed booking requirements. Free loading and unloading time allowance is 2 hours per terminal. Demurrage charges apply for delays exceeding free time limits.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                <h4 className="text-xs font-black text-emerald-400 uppercase flex items-center gap-2">
                  <span>2. Cargo Security & Sealed Transit</span>
                </h4>
                <p>
                  All commercial goods are transported in heavy-duty weatherproof closed containers. Consignment notes (LR copies) are issued upon pickup dispatch. Clients must ensure accurate cargo declaration prior to transit.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                <h4 className="text-xs font-black text-emerald-400 uppercase flex items-center gap-2">
                  <span>3. Freight Charges & Payment Terms</span>
                </h4>
                <p>
                  Freight quotations are non-inclusive of statutory GST or toll charges unless specified in contract SLAs. Invoices must be settled as per agreed credit terms or upon Goods Receipt (POD delivery confirmation).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                <h4 className="text-xs font-black text-emerald-400 uppercase flex items-center gap-2">
                  <span>4. Prohibited & Hazardous Goods</span>
                </h4>
                <p>
                  Lithin Transport strictly prohibits illegal contraband, explosives, uncertified hazardous chemicals, or contraband goods in commercial containers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                <h4 className="text-xs font-black text-emerald-400 uppercase flex items-center gap-2">
                  <span>5. Cancellation & Route Rescheduling</span>
                </h4>
                <p>
                  Trip cancellations made within 2 hours of vehicle dispatch at pickup terminal are subject to nominal placement charges. Schedule amendments can be coordinated via our 24/7 dispatch desk.
                </p>
              </div>

            </div>

            {/* Accept & Close Button */}
            <button
              onClick={() => setShowTermsModal(false)}
              className="mt-6 w-full py-3 bg-[#10b981] hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
            >
              Accept & Close
            </button>

          </div>
        </div>
      )}

      {/* QUERY DESK MODAL POPUP */}
      {queryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-lg w-full bg-[#060b1e] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col">
            <button
              onClick={() => setQueryOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
              title="Close Query Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-emerald-500/20 pb-4 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider mb-2 border border-emerald-400/30">
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                <span>Logistics Query Desk</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide font-sans">
                Ask Lithin Transport
              </h3>
              <p className="text-xs text-gray-300 mt-1 font-medium">
                Have a question about routes, freight rates, or fleet availability? Send your query directly.
              </p>
            </div>

            <form onSubmit={handleQuerySubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={queryForm.name}
                  onChange={(e) => setQueryForm({ ...queryForm, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10-digit phone number"
                  value={queryForm.phone}
                  onChange={(e) => setQueryForm({ ...queryForm, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-1">Your Question / Inquiry *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Type your freight inquiry or route question..."
                  value={queryForm.query}
                  onChange={(e) => setQueryForm({ ...queryForm, query: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isQuerySubmitting}
                className="w-full py-3.5 bg-[#10b981] hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition-all cursor-pointer mt-2"
              >
                {isQuerySubmitting ? 'Sending Query...' : 'Send Query to WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CONTAINER BOOKING FORM MODAL POPUP */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-xl w-full bg-[#060b1e] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col max-h-[95vh] overflow-y-auto">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
              title="Close Booking Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <BookingFormContent
              onSuccess={() => setBookingModalOpen(false)}
              title="LITHIN TRANSPORT"
              subtitle="CONTAINER BOOKING FORM"
            />
          </div>
        </div>
      )}

    </footer>
  );
}
