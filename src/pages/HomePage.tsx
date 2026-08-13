import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BranchNetworkSection from '../components/BranchNetworkSection';

export default function HomePage() {
  const homeServices = [
    {
      title: "Transport Contractor",
      description: "Official commercial transport contractor providing dedicated Full Truck Load (FTL) vehicle haulage, heavy industrial machinery transport, SIPCOT supply chain logistics, and long-distance interstate fleet contracts.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      highlight: "Fleet Contracting & FTL"
    },
    {
      title: "Booking Agency",
      description: "Authorized express goods booking agency facilitating daily express part-load (PTL) consignment booking, commercial parcel dispatches, doorstep pickup/delivery, and verified route booking.",
      image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=1200&q=80",
      highlight: "Express Goods Booking"
    }
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

      {/* COMPANY HEAD OFFICE & BRANCHES SECTION (MAP HIDDEN ON HOMEPAGE) */}
      <BranchNetworkSection showMap={false} />

      {/* OUR SERVICES OVERVIEW WITH MINI HD IMAGES & CYBER BADGES */}
      <section className="flex flex-col gap-8">
        <div>
          <span className="px-4 py-1.5 rounded-full bg-slate-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
            Commercial Transport Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 uppercase tracking-tight font-sans">
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
                  {/* HD IMAGE BANNER HEADER WITH FLOATING BADGE */}
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-5 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-colors">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Floating Highlight Badge */}
                    <div className="absolute bottom-3 right-3 text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      {srv.highlight}
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-white mb-2 uppercase tracking-wide font-sans group-hover:text-emerald-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed font-normal">
                    {srv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SINGLE CENTERED MORE DETAILS BUTTON BELOW CARDS */}
        <div className="flex justify-center mt-2">
          <Link
            to="/services"
            className="px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20 hover:scale-105 cursor-pointer"
          >
            <span>More Details</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </section>

    </div>
  );
}
