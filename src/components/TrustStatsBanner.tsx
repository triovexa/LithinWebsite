import { PackageCheck, Truck, Users, MapPin, Clock } from 'lucide-react';

export default function TrustStatsBanner() {
  const stats = [
    {
      icon: PackageCheck,
      value: "10,000+",
      label: "Loads Fulfilled"
    },
    {
      icon: Truck,
      value: "100+",
      label: "Verified Trucks"
    },
    {
      icon: Users,
      value: "3,000+",
      label: "Happy Customers"
    },
    {
      icon: MapPin,
      value: "3+",
      label: "Pan-India Branches"
    },
    {
      icon: Clock,
      value: "50+",
      label: "Shipments Daily"
    }
  ];

  return (
    <section className="my-12 scroll-mt-24">
      {/* Outer Panel Container */}
      <div className="flex flex-col items-center gap-6">

        {/* Section Title Header */}
        <h2 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight text-center font-sans flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <span>Goods Transport Services</span>
          <span className="text-emerald-400">Trusted Across India</span>
        </h2>

        {/* Mass Dark Glassmorphic Stat Bar */}
        <div className="w-full glass-panel bg-slate-950/85 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl p-5 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.75),0_0_25px_rgba(16,185,129,0.15)] relative overflow-hidden">

          {/* Subtle Ambient Emerald Accent Lines */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

          {/* Responsive Grid for 5 Stat Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-4">
            {stats.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-2 sm:px-3 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none group transition-all duration-300 ${
                    idx === 4 ? 'col-span-2 sm:col-span-1 justify-center sm:justify-start' : ''
                  }`}
                >
                  {/* Glowing Emerald Icon Box */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-emerald-400" />
                  </div>

                  {/* Stat Text Details */}
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight font-sans group-hover:text-emerald-400 transition-colors">
                      {item.value}
                    </span>
                    <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-gray-400 mt-0.5 group-hover:text-gray-300 transition-colors">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
