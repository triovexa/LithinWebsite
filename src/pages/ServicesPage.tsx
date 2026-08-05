import { Truck, MapPin, Shield, Package, Factory, HardHat, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "Full Truck Load (FTL)",
      description: "Large shipments requiring dedicated vehicle transportation.",
      icon: Truck,
      highlight: "Dedicated Route Fleet"
    },
    {
      title: "Part Load Transportation",
      description: "For smaller shipments and cost-effective transport.",
      icon: Package,
      highlight: "Cost-Effective Freight"
    },
    {
      title: "Industrial Goods Transport",
      description: "Machinery, equipment and industrial materials transportation.",
      icon: Factory,
      highlight: "Heavy Duty Haulage"
    },
    {
      title: "Heavy & Project Cargo",
      description: "Large and heavy cargo transportation solutions.",
      icon: HardHat,
      highlight: "Oversized Load Ready"
    },
    {
      title: "Local Transportation",
      description: "Reliable transportation within local and regional locations.",
      icon: MapPin,
      highlight: "Rapid Zone Express"
    },
    {
      title: "Customized Transport Solutions",
      description: "Transport solutions based on specific customer requirements.",
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
          Our Services
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
          Tailored commercial transport solutions engineered to keep your enterprise supply chain moving with precision.
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
