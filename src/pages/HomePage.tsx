import { Truck, Phone, Lock, ShieldCheck, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import QuoteFormSection from '../components/QuoteFormSection';

export default function HomePage() {
  const routes = [
    { from: "Bangalore", to: "Chennai", time: "6 Hours", frequency: "Daily Express FTL", type: "Head Office Corridor" },
    { from: "Bangalore", to: "Tirupur", time: "5 Hours", frequency: "Daily Garment Fleet", type: "Textile Freight Route" },
    { from: "Chennai", to: "Tirupur", time: "7 Hours", frequency: "Daily Inter-Branch", type: "Industrial Cargo Line" },
    { from: "Bangalore", to: "All India", time: "Express Transit", frequency: "Multi-Axle Fleet", type: "Pan-India Haulage" },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-12 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-16">

      {/* HERO SECTION - FULL WIDTH BRIGHT HD VIDEO BACKGROUND */}
      <section id="hero-video-section" className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-transparent shadow-2xl h-[70vh] sm:h-[75vh] md:h-[80vh] w-full transition-all">
        
        {/* 100% Vivid Bright Full HD Video Background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover opacity-100 scale-105 transition-all duration-700 brightness-105 contrast-105 rounded-3xl"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-truck-driving-on-the-highway-at-sunset-41581-large.mp4" type="video/mp4" />
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
              alt="Commercial Freight Container Truck"
              className="w-full h-full object-cover opacity-100 scale-105 rounded-3xl"
            />
          </video>
        </div>

      </section>

      {/* 4 QUICK HIGHLIGHTS BAR - PLACED OUTSIDE & BELOW THE VIDEO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-950/20 backdrop-blur-md border border-emerald-500/30 shadow-2xl shadow-emerald-500/10">
        <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 pr-0 sm:pr-4 group">
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600/30 via-teal-500/20 to-emerald-400/10 border border-emerald-400/40 shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
            <Truck className="w-7 h-7 text-emerald-300 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-base font-black text-white uppercase tracking-wide block font-sans">Pan-India Transport</span>
            <span className="text-xs text-emerald-400 font-semibold block mt-0.5">58+ Express Destinations</span>
          </div>
        </div>

        <div className="flex items-center gap-4 border-b sm:border-b-0 lg:border-r border-white/10 pb-4 sm:pb-0 pr-0 lg:pr-4 group">
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600/30 via-teal-500/20 to-emerald-400/10 border border-emerald-400/40 shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
            <Building2 className="w-7 h-7 text-emerald-300 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-base font-black text-white uppercase tracking-wide block font-sans">3 Official Offices</span>
            <span className="text-xs text-emerald-400 font-semibold block mt-0.5">Bangalore (HQ), Chennai, Tirupur</span>
          </div>
        </div>

        <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 pr-0 sm:pr-4 group">
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600/30 via-teal-500/20 to-emerald-400/10 border border-emerald-400/40 shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
            <Lock className="w-7 h-7 text-emerald-300 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-base font-black text-white uppercase tracking-wide block font-sans">Daily Parcel Service</span>
            <span className="text-xs text-emerald-400 font-semibold block mt-0.5">Sealed Box & Heavy Freight</span>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600/30 via-teal-500/20 to-emerald-400/10 border border-emerald-400/40 shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
            <Phone className="w-7 h-7 text-emerald-300 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-base font-black text-white uppercase tracking-wide block font-sans">24/7 Helpline Desk</span>
            <span className="text-xs text-emerald-400 font-semibold block mt-0.5">Direct Dispatch Contact</span>
          </div>
        </div>
      </div>

      {/* KEY HIGHWAY ROUTES & CORRIDORS SUMMARY */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
              Logistics Network Overview
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight font-sans">
              Major Express Routes
            </h2>
          </div>
          <a
            href="/services#parcel-network"
            className="flex items-center gap-2 text-xs font-extrabold text-emerald-400 uppercase tracking-wider hover:text-emerald-300 transition-colors w-fit"
          >
            <span>View All 58+ Parcel Services & India Map</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-emerald-500/15 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-extrabold text-emerald-400 uppercase mb-3">
                  <span>{route.type}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {route.time}
                  </span>
                </div>

                <div className="flex items-center gap-3 my-2">
                  <span className="text-lg font-black text-white">{route.from}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-lg font-black text-white">{route.to}</span>
                </div>

                <p className="text-xs text-gray-400 mt-2 font-medium">
                  Frequency: <strong className="text-white">{route.frequency}</strong>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-400 font-extrabold uppercase">
                <a href="/services#parcel-network" className="hover:underline flex items-center gap-1">
                  <span>View Service Destinations</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE LITHIN TRANSPORT */}
      <section className="p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/20 bg-slate-950/20 backdrop-blur-md shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider w-fit">
            Enterprise Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
            Why Leading Businesses Partner With Lithin Transport
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed font-normal">
            We provide seamless end-to-end commercial haulage, offering transparent pricing, guaranteed delivery windows, and certified cargo safety protocols across India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {[
              { title: "Direct Carrier Pricing", desc: "Zero broker markups. Direct fleet rates." },
              { title: "100% Weatherproof Containers", desc: "Sealed steel box payload protection." },
              { title: "Double Driver Rotation", desc: "Maximum highway transit velocity." },
              { title: "Dedicated Support Desk", desc: "Direct route manager contact 24/7." }
            ].map((adv, aIdx) => (
              <div key={aIdx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-extrabold text-white uppercase">{adv.title}</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-no-particles="true" className="lg:col-span-6 relative rounded-2xl overflow-hidden h-72 border border-emerald-500/30 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
            alt="Lithin Transport Logistics Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#060a1d]/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-between text-xs text-white">
            <div>
              <span className="font-extrabold uppercase text-emerald-400 block">Hub Logistics & Warehousing</span>
              <span className="text-[11px] text-gray-300 font-medium">Sriperumbudur Industrial Hub, Tamil Nadu</span>
            </div>
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
          </div>
        </div>
      </section>

      {/* FREIGHT RATE QUOTE SECTION */}
      <QuoteFormSection />

    </div>
  );
}
