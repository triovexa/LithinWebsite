import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function HomePage() {
  const homeServices = [
    {
      title: "Transport Contractor",
      description: "Official commercial transport contractor providing dedicated Full Truck Load (FTL) vehicle haulage, heavy industrial machinery transport, SIPCOT supply chain logistics, and long-distance interstate fleet contracts.",
      image: "/transport-contractor.jpg",
      highlight: "Fleet Contracting & FTL"
    },
    {
      title: "Booking Agency",
      description: "Authorized express goods booking agency facilitating daily express part-load (PTL) consignment booking, commercial parcel dispatches, doorstep pickup/delivery, and verified route booking.",
      image: "/booking-agency.jpg",
      highlight: "Express Goods Booking"
    }
  ];

  return (
    <div className="relative min-h-screen pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-6 sm:gap-12 md:gap-16">

      {/* HERO SECTION - FULL WIDTH BRIGHT HD VIDEO BACKGROUND */}
      <section id="hero-video-section" className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-slate-950 shadow-2xl aspect-[16/10] sm:aspect-[16/9] w-full transition-all">

        {/* 100% Vivid Bright Full HD Video Background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover opacity-100 transition-all duration-500 brightness-105 contrast-105 rounded-3xl"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-truck-driving-on-the-highway-at-sunset-41581-large.mp4" type="video/mp4" />
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
              alt="Commercial Freight Container Truck"
              className="w-full h-full object-cover opacity-100 rounded-3xl"
            />
          </video>
        </div>

      </section>

  

      {/* 3. OUR SERVICES SECTION */}
      <section id="services-preview-section" className="flex flex-col gap-8 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight font-sans">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeServices.map((srv, idx) => {
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-panel bg-slate-950/80 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between group shadow-2xl overflow-hidden"
              >
                <div>
                  {/* HD IMAGE BANNER HEADER */}
                  <div className="relative aspect-[16/9.2] rounded-2xl overflow-hidden mb-5 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-colors bg-slate-950">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 uppercase tracking-wide font-sans group-hover:text-emerald-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                    {srv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPACT SLEEK HIGH-TECH GLASS GLOW BUTTON */}
        <div className="flex justify-center mt-3">
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center p-0.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer"
          >
            {/* Glowing Gradient Ring */}
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Inner Dark Glass Pill */}
            <span className="relative px-6 py-2.5 bg-slate-950/90 group-hover:bg-slate-950/80 backdrop-blur-xl rounded-full text-white flex items-center gap-2 border border-emerald-500/30 transition-all">
              <span>More Details</span>
              <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* 4. FLEET & OPERATIONS GALLERY PREVIEW SECTION */}
      <section id="gallery-preview-section" className="flex flex-col gap-8 scroll-mt-28">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight font-sans">
            Our Gallery
          </h2>
        </div>

        {/* Clean Gallery Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Container Fleet in Transit",
              image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
            },
            {
              title: "Automated Logistics Hub",
              image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
            },
            {
              title: "Multi-Axle Heavy Cargo Haulage",
              image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80"
            }
          ].map((item, idx) => (
            <Link
              key={idx}
              to="/gallery"
              className="group rounded-3xl glass-panel bg-slate-950/80 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-2xl p-5"
            >
              <div>
                <div className="relative aspect-[16/9.5] rounded-2xl overflow-hidden bg-slate-950 border border-emerald-500/20 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wide group-hover:text-emerald-400 transition-colors font-sans text-center">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* COMPACT SLEEK HIGH-TECH GLASS GLOW BUTTON */}
        <div className="flex justify-center mt-3">
          <Link
            to="/gallery"
            className="group relative inline-flex items-center justify-center p-0.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer"
          >
            {/* Glowing Gradient Ring */}
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Inner Dark Glass Pill */}
            <span className="relative px-6 py-2.5 bg-slate-950/90 group-hover:bg-slate-950/80 backdrop-blur-xl rounded-full text-white flex items-center gap-2 border border-emerald-500/30 transition-all">
              <span>More Details</span>
              <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}