import { Truck, CheckCircle2 } from 'lucide-react';

export default function FleetPage() {
  const fleetVehicles = [
    {
      name: "Mini Truck",
      category: "Intra-City Goods Carrier",
      payload: "1 - 2.5 Tons",
      specs: ["GPS Telematics", "Agile Urban Dispatch", "Sealed Cargo Box"],
      suitableFor: "Intra-City Goods & Express Distribution",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Tata Ace",
      category: "Last-Mile Commercial Vehicle",
      payload: "750 kg - 1 Ton",
      specs: ["Compact Dispatch", "Fast Loading/Unloading", "Ideal for Micro Parcels"],
      suitableFor: "Quick Local Parcel & Last-Mile Delivery",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Light Commercial Vehicle",
      category: "Regional Express Truck",
      payload: "3.5 - 7 Tons",
      specs: ["Enclosed Cargo Space", "Hydraulic Lift", "Intercity Express"],
      suitableFor: "Regional Retail & Industrial Supply Chain",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Medium Truck",
      category: "Intercity Heavy Duty Truck",
      payload: "10 - 14 Tons",
      specs: ["Multi-drop Capability", "Heavy Duty Chassis", "Air Brakes & Safety Locks"],
      suitableFor: "Intercity Industrial Goods & Agriculture Freight",
      image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Heavy Truck",
      category: "Multi-Axle Heavy Carrier",
      payload: "15 - 20 Tons",
      specs: ["High Capacity Haulage", "Double Driver Rotation", "Overdimensional Payload"],
      suitableFor: "Industrial & Bulk Cargo",
      image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Container Truck",
      category: "High-Volume Sealed Container",
      payload: "20 - 32 Tons",
      specs: ["Weatherproof Steel Box", "Customs Seal Compatible", "Real-Time Telematics"],
      suitableFor: "High-Value Goods & Long-Distance Express Routes",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12">
      
      {/* Fleet Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          Commercial Vehicles
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight uppercase font-sans">
          Our Fleet
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
          Select the optimal vehicle payload capacity for your specific cargo weight and transport route.
        </p>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleetVehicles.map((v, idx) => (
          <div key={idx} className="p-7 rounded-3xl glass-panel border border-emerald-500/15 hover:border-emerald-400/50 transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="relative h-44 -mx-7 -mt-7 mb-5 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/90 text-white text-xs font-extrabold uppercase rounded-full shadow-md">
                  Capacity: {v.payload}
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">{v.name}</h3>
                <Truck className="w-5 h-5 text-emerald-400" />
              </div>

              <p className="text-xs text-gray-300 font-medium mb-4">
                <strong className="text-white">Suitable For:</strong> {v.suitableFor}
              </p>

              <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                {v.specs.map((s, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/#quote"
              className="mt-6 w-full py-3 bg-[#10b981] hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg shadow-emerald-500/30 transition-all block"
            >
              Book This Vehicle
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
