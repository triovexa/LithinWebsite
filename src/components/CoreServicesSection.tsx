import { Truck, CheckCircle2, PhoneCall, Sparkles, Building2 } from 'lucide-react';
import SparkleHeading from './SparkleHeading';

export default function CoreServicesSection() {
  return (
    <section id="core-services" className="my-10 sm:my-16 scroll-mt-28 flex flex-col gap-8 relative z-10">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        <SparkleHeading text="Lithin Transport Core Specializations" />
       
      </div>

      {/* ATTRACTIVE DUAL UI CARDS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        
        {/* SERVICE CARD 1: TRANSPORT CONTRACTOR */}
        <div className="relative overflow-hidden rounded-3xl glass-panel bg-gradient-to-br from-[#08152e] via-[#050c1f] to-[#020512] border-2 border-emerald-500/40 p-6 sm:p-9 shadow-2xl transition-all duration-300 hover:border-emerald-400 group flex flex-col justify-between gap-6">
          
          {/* Top Ambient Glow Circle */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-5 relative z-10">
            {/* Top Row: Icon & Category Badge */}
            <div className="flex items-center justify-between gap-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                <Truck className="w-7 h-7" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-extrabold text-xs uppercase tracking-wider shadow-lg">
                100% Contract Fleet
              </span>
            </div>

            {/* Title (No 1. Prefix as Requested) */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide font-sans group-hover:text-emerald-300 transition-colors">
                Transport Contractor
              </h3>
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block mt-1">
                Direct Corporate & Factory Haulage Partner
              </span>
            </div>

            {/* Key Advantages Checklist */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-gray-200">
              {[
                "Dedicated long-term container fleet contracts for factories & plants.",
                "100% Weatherproof sealed containers (MRF Tyres & Ashok Leyland Partner).",
                "Guaranteed daily truck placements with direct carrier pricing.",
                "Full cargo safety assurance & 24/7 highway dispatch support."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <Building2 className="w-4 h-4" />
              <span>Dedicated Industrial Haulage</span>
            </div>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal', { detail: { container: '32ft' } }))}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black uppercase tracking-wider text-xs transition-all shadow-lg shadow-emerald-500/30 cursor-pointer text-center"
            >
              Get Contractor Quote
            </button>
          </div>

        </div>

        {/* SERVICE CARD 2: BOOKING AGENCY */}
        <div className="relative overflow-hidden rounded-3xl glass-panel bg-gradient-to-br from-[#1a1204] via-[#100b02] to-[#050300] border-2 border-amber-500/40 p-6 sm:p-9 shadow-2xl transition-all duration-300 hover:border-amber-400 group flex flex-col justify-between gap-6">
          
          {/* Top Ambient Glow Circle */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-5 relative z-10">
            {/* Top Row: Icon & Category Badge */}
            <div className="flex items-center justify-between gap-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-400/40 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all">
                <PhoneCall className="w-7 h-7" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 font-extrabold text-xs uppercase tracking-wider shadow-lg">
                On-Demand Freight Desk
              </span>
            </div>

            {/* Title (No 2. Prefix as Requested) */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide font-sans group-hover:text-amber-300 transition-colors">
                Freight Booking Agency
              </h3>
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest block mt-1">
                Instant Pan-India Container Truck Booking Hub
              </span>
            </div>

            {/* Key Advantages Checklist */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-gray-200">
              {[
                "Book 7ft to 32ft MXL container lorries instantly in 30 minutes.",
                "Transparent market freight rates for FMCG, retail & garment shippers.",
                "Instant digital Lorry Receipt (LR), E-Way Bill & Proof of Delivery (POD).",
                "24/7 Live GPS tracking & active WhatsApp helpline support."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/40">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Instant Lorry Allotment</span>
            </div>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs transition-all shadow-lg shadow-amber-400/30 cursor-pointer text-center"
            >
              Book Lorry Now
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
