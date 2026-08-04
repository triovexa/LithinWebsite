import { Truck, CheckCircle2 } from 'lucide-react';

export default function FleetPage() {
  const fleetVehicles = [
    {
      name: "Mini Truck",
      category: "Intra-City Goods Carrier",
      payload: "1 - 2.5 Tons",
      specs: ["GPS Telematics", "Agile Urban Dispatch", "Sealed Cargo Box"],
      suitableFor: "Intra-City Goods & Express Distribution"
    },
    {
      name: "Tata Ace",
      category: "Last-Mile Commercial Vehicle",
      payload: "750 kg - 1 Ton",
      specs: ["Compact Dispatch", "Fast Loading/Unloading", "Ideal for Micro Parcels"],
      suitableFor: "Quick Local Parcel & Last-Mile Delivery"
    },
    {
      name: "Light Commercial Vehicle (LCV)",
      category: "Regional Express Truck",
      payload: "3.5 - 7 Tons",
      specs: ["Enclosed Cargo Space", "Hydraulic Lift", "Intercity Express"],
      suitableFor: "Regional Retail & Industrial Supply Chain"
    },
    {
      name: "Medium Truck",
      category: "Intercity Heavy Duty Truck",
      payload: "10 - 14 Tons",
      specs: ["Multi-drop Capability", "Heavy Duty Chassis", "Air Brakes & Safety Locks"],
      suitableFor: "Intercity Industrial Goods & Agriculture Freight"
    },
    {
      name: "Heavy Truck",
      category: "Multi-Axle Heavy Carrier",
      payload: "15 - 20 Tons",
      specs: ["High Capacity Haulage", "Double Driver Rotation", "Overdimensional Payload"],
      suitableFor: "Industrial Raw Materials & Heavy Bulk Cargo"
    },
    {
      name: "Container Truck",
      category: "High-Volume Sealed Container",
      payload: "20 - 32 Tons",
      specs: ["Weatherproof Steel Box", "Customs Seal Compatible", "Real-Time Telematics"],
      suitableFor: "High-Value Goods & Long-Distance Express Routes"
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12">
      
      {/* Fleet Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-extrabold uppercase tracking-wider">
          Commercial Vehicles
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight uppercase font-sans">
          Maintained Telematics-Enabled Fleet
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
          Select the optimal vehicle payload capacity for your specific cargo weight and transport route.
        </p>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleetVehicles.map((v, idx) => (
          <div key={idx} className="p-7 rounded-3xl glass-panel border border-sky-500/20 hover:border-sky-400/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase rounded-full">
                  Capacity: {v.payload}
                </span>
                <Truck className="w-6 h-6 text-sky-400 group-hover:text-cyan-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide">{v.name}</h3>
              <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-widest block mb-3">{v.category}</span>
              <p className="text-xs text-gray-300 font-medium mb-4">
                <strong className="text-white">Suitable For:</strong> {v.suitableFor}
              </p>
              <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                {v.specs.map((s, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/#quote"
              className="mt-6 w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg shadow-sky-500/30 transition-all block"
            >
              Book This Vehicle
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
