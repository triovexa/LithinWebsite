import { useState, useRef } from 'react';
import { MessageCircle, Truck, Phone, Lock, Clock, MapPin, ShieldCheck, ArrowRight, CheckCircle2, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import QuoteFormSection from '../components/QuoteFormSection';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent("Hi Lithin Transport, I would like to know more about your commercial transportation services.")}`;

  const routes = [
    { from: "Chennai", to: "Bengaluru", time: "8 Hours", frequency: "Daily 15+ Trucks", type: "Container & FTL" },
    { from: "Chennai", to: "Hyderabad", time: "14 Hours", frequency: "Daily 10+ Trucks", type: "Heavy Freight" },
    { from: "Coimbatore", to: "Chennai", time: "10 Hours", frequency: "Daily 12+ Trucks", type: "Express Industrial" },
    { from: "Chennai", to: "Mumbai", time: "34 Hours", frequency: "Regular Multi-Axle", type: "Sealed Heavy Cargo" },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-12 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-16">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-slate-950/40 backdrop-blur-md shadow-2xl min-h-[80vh] flex flex-col justify-between p-6 sm:p-12 transition-all">
        
        {/* High-Impact Cinematic Video Background Overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover opacity-75 sm:opacity-85 scale-105 transition-opacity duration-700"
          >
            {/* Primary Local Video File from public/hero-video.mp4 */}
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Online Backup Stream */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-truck-driving-on-the-highway-at-sunset-41581-large.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
              alt="Commercial Freight Container Truck"
              className="w-full h-full object-cover opacity-80 scale-105"
            />
          </video>

          {/* Dual Layer Gradient Overlays for Ultra Readability & Rich Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030612]/95 via-[#060e26]/75 to-[#030612]/85 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030612] via-transparent to-[#030612]/40 pointer-events-none" />
        </div>

        {/* Floating Video Control Pill */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#060b1e]/85 backdrop-blur-xl border border-emerald-500/30 px-3 py-1.5 rounded-full shadow-lg">
          <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-300" />
              HD FLEET PROMO
            </span>
          </div>

          <button
            type="button"
            onClick={togglePlay}
            title={isPlaying ? "Pause Background Video" : "Play Background Video"}
            className="p-1.5 rounded-full hover:bg-emerald-500/20 text-white transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
            className="p-1.5 rounded-full hover:bg-emerald-500/20 text-white transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-gray-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          </button>
        </div>

        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
          
          {/* Left Column: Headlines & CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider w-fit">
              <Truck className="w-4 h-4" />
              <span>Leading Commercial Freight Carrier</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight uppercase font-sans">
              Reliable Transportation. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-emerald-400 to-teal-300">
                Delivered with Trust.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 max-w-xl font-normal leading-relaxed">
              Safe, Reliable and Timely Transport Solutions for Your Business across All Major Indian Industrial Corridors.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#quote"
                className="px-6 py-3.5 bg-[#10b981] hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
              >
                Get a Free Quote
              </a>

              <a
                href="/about"
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

          {/* Right Column: Instant Freight Rate Calculation & Operations Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900/80 backdrop-blur-md text-white p-6 sm:p-7 rounded-2xl shadow-2xl border border-emerald-500/20 flex flex-col gap-5">
              
              <div className="border-b border-emerald-500/20 pb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Commercial Haulage Pricing
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mt-2 font-sans">
                  Transport Rate Estimator
                </h3>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  Get transparent transport pricing tailored for your commercial cargo and route needs.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="#quote"
                  className="w-full py-3.5 bg-[#10b981] hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition-all text-center block"
                >
                  Calculate Shipping Rate
                </a>

                <a
                  href="/gallery"
                  className="w-full py-3.5 bg-[#0c1328] hover:bg-[#121c3b] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all text-center block border border-emerald-500/30"
                >
                  View Operations Gallery
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-2 border-t border-white/10">
                <a href="/services" className="hover:text-emerald-400 font-bold">Explore All Fleet Services</a>
                <a href="/about" className="hover:text-emerald-400 font-bold">Logistics Desk Contact</a>
              </div>

              {/* B2B Trust Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[10px] font-extrabold uppercase text-slate-300">
                <div className="bg-slate-800/50 border border-emerald-500/20 p-2.5 rounded-xl text-center">
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="bg-slate-800/50 border border-emerald-500/20 p-2.5 rounded-xl text-center">
                  <span>24/7 Telematics Monitoring</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Hero Bottom Bar: 4 Quick Highlights */}
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

      {/* KEY HIGHWAY ROUTES & CORRIDORS */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
              Logistics Network
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight font-sans">
              Major Express Routes
            </h2>
          </div>
          <a
            href="/services"
            className="flex items-center gap-2 text-xs font-extrabold text-emerald-400 uppercase tracking-wider hover:text-emerald-300 transition-colors w-fit"
          >
            <span>View All Freight Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-emerald-500/15 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between group"
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

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300 font-bold uppercase">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>GPS Tracked Route</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE LITHIN TRANSPORT */}
      <section className="p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/20 bg-gradient-to-r from-[#070e24] via-[#050b1e] to-[#070e24] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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

        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden h-72 border border-emerald-500/30 shadow-xl">
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
