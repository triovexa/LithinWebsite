import { useState } from 'react';
import { Search, MessageCircle, Truck, Phone, Lock, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

export default function HomePage() {
  const [heroTab, setHeroTab] = useState<'tracking' | 'ship'>('tracking');
  const [heroTrackingInput, setHeroTrackingInput] = useState('');

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent("Hi Lithin Transport, I would like to know more about your transportation services.")}`;

  const handleHeroTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroTrackingInput.trim()) {
      toast.error('Please enter a tracking number (e.g. LR001)');
      return;
    }
    toast.success(`Checking tracking status for: ${heroTrackingInput.toUpperCase()}`);
    const trackingElement = document.getElementById('tracking');
    if (trackingElement) {
      trackingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[85vh] pt-24 pb-12 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center">

      {/* HERO SECTION ONLY */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-950/20 backdrop-blur-sm shadow-2xl min-h-[75vh] flex flex-col justify-between p-6 sm:p-12">
        
        {/* Real-World Freight Container Truck Visual / Video Overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            alt="Commercial Freight Container Truck"
            className="w-full h-full object-cover opacity-25 mix-blend-screen scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05060f]/80 via-[#071329]/50 to-[#05060f]/70 pointer-events-none" />
        </div>

        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
          
          {/* Left Column: High-Impact Hero Headlines & 3 Action Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider w-fit">
              <Truck className="w-4 h-4" />
              <span>Leading Commercial Haulage</span>
            </div>

            {/* Main Headline requested by user */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight uppercase font-sans">
              Reliable Transportation. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-emerald-400 to-teal-300">
                Delivered with Trust.
              </span>
            </h1>

            {/* Sub-headline requested by user */}
            <p className="text-base sm:text-lg text-gray-200 max-w-xl font-normal leading-relaxed">
              Safe, Reliable and Timely Transport Solutions for Your Business.
            </p>

            {/* 3 Buttons requested by user: Get a Free Quote, Contact Us, WhatsApp Us */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="/services#quote"
                className="px-6 py-3.5 bg-[#10b981] hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
              >
                Get a Free Quote
              </a>

              <a
                href="/about#contact"
                className="px-6 py-3.5 bg-[#0c1328] hover:bg-[#121c3b] border border-emerald-500/30 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all hover:scale-105"
              >
                Contact Us
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Quality Truck Visual & Quick Track Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-6 sm:p-7 border border-white/10 shadow-glass text-slate-200">
              
              {/* Card Tabs */}
              <div className="flex items-center gap-6 border-b border-white/10 pb-3 mb-5">
                <button
                  type="button"
                  onClick={() => setHeroTab('tracking')}
                  className={`text-xs font-bold uppercase tracking-wider pb-1 transition-colors ${
                    heroTab === 'tracking'
                      ? 'text-emerald-400 border-b-2 border-emerald-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Tracking Order
                </button>

                <button
                  type="button"
                  onClick={() => setHeroTab('ship')}
                  className={`text-xs font-bold uppercase tracking-wider pb-1 transition-colors ${
                    heroTab === 'ship'
                      ? 'text-emerald-400 border-b-2 border-emerald-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Ship Order / Quote
                </button>
              </div>

              {heroTab === 'tracking' ? (
                <form onSubmit={handleHeroTrackSubmit} className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Type your tracking number here..."
                      value={heroTrackingInput}
                      onChange={(e) => setHeroTrackingInput(e.target.value)}
                      className="input-field"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Track Now</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-2 border-t border-white/10">
                    <a href="/services#tracking" className="hover:text-emerald-400 font-semibold">Multiple Tracking Numbers</a>
                    <a href="/about#faq" className="hover:text-emerald-400 font-semibold">Need Help?</a>
                  </div>

                  {/* App Store / Google Play Badges */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                    <div className="flex-1 bg-[#0c0e25] border border-white/10 text-slate-200 p-2.5 rounded-xl flex items-center justify-center gap-2 text-[10px] font-bold cursor-pointer hover:bg-white/5 transition-colors">
                      <span>▶ GET IT ON Google Play</span>
                    </div>
                    <div className="flex-1 bg-[#0c0e25] border border-white/10 text-slate-200 p-2.5 rounded-xl flex items-center justify-center gap-2 text-[10px] font-bold cursor-pointer hover:bg-white/5 transition-colors">
                      <span> Download on App Store</span>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col gap-3 text-xs">
                  <p className="text-slate-300 font-medium">Request an immediate cargo rate estimation for your shipment route.</p>
                  <a
                    href="/services#quote"
                    className="btn-primary w-full py-3.5 text-center text-xs font-extrabold uppercase tracking-wider block"
                  >
                    Go to Quote Form
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Hero Bottom Bar: 4 Quick Highlights requested by user */}
        {/* 🚛 Reliable Transport | 📍 On-Time Delivery | 🔒 Safe & Secure | 📞 24/7 Support */}
        <div className="mt-12 pt-6 border-t border-emerald-500/20 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#080d24]/70 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/15">
          <div className="flex items-center gap-3.5 border-r border-white/10 pr-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-black text-white uppercase tracking-wide block">Reliable Transport</span>
              <span className="text-[11px] text-gray-400 font-medium block">Dedicated Fleet Operations</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-white/10 pr-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-black text-white uppercase tracking-wide block">On-Time Delivery</span>
              <span className="text-[11px] text-gray-400 font-medium block">Strict Transit Scheduling</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-white/10 pr-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-black text-white uppercase tracking-wide block">Safe & Secure</span>
              <span className="text-[11px] text-gray-400 font-medium block">Certified Cargo Lashing</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-black text-white uppercase tracking-wide block">24/7 Support</span>
              <span className="text-[11px] text-gray-400 font-medium block">Highway Dispatch Desk</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
