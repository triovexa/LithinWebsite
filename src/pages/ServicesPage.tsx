import { Truck, Shield, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "Full Truck Load (FTL)",
      description: "Dedicated multi-axle and containerized trucks for large industrial volume shipments with direct point-to-point delivery.",
      icon: Truck,
      highlight: "Direct Route Dispatch"
    },
    {
      title: "Part Load Transportation",
      description: "Consolidated freight solutions designed for cost efficiency without sacrificing delivery timelines or cargo security.",
      icon: MapPin,
      highlight: "Cost-Effective Freight"
    },
    {
      title: "Industrial Goods Transport",
      description: "Specialized haulage for industrial machinery, steel coils, factory equipment, and raw manufacturing materials.",
      icon: Shield,
      highlight: "Heavy Capacity Transport"
    },
    {
      title: "Heavy & Project Cargo",
      description: "Specialized low-bed trailers and hydraulic axles designed for oversized machinery and construction equipment.",
      icon: Clock,
      highlight: "Permit & Escort Ready"
    },
    {
      title: "Local Transportation",
      description: "Fast and dependable intra-city and intra-regional goods delivery within localized commercial zones.",
      icon: Truck,
      highlight: "Rapid City Delivery"
    },
    {
      title: "Customized Transport Solutions",
      description: "Flexible transport arrangements tailored specifically to client schedule, cargo weight, and vehicle type.",
      icon: Shield,
      highlight: "B2B Customized SLA"
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12">
      
      {/* Services Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          Our Capabilities
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight uppercase font-sans">
          Comprehensive Transport & Logistics
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
          Tailored transport solutions engineered to keep your enterprise supply chain moving with precision.
        </p>
      </div>

      {/* Services List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div key={idx} className="p-8 rounded-3xl glass-panel border border-emerald-500/15 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    {srv.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{srv.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <a
                href="/#quote"
                className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-emerald-400 group-hover:text-white transition-colors"
              >
                <span>Request Rate Quote</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          );
        })}
      </div>

    </div>
  );
}
