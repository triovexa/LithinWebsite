import { useState } from 'react';
import { Truck, Building2, X, PackageCheck, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export interface FleetVehicle {
  id: number;
  feet: '7ft' | '10ft' | '14ft' | '17ft' | '20ft' | '22ft' | '24ft' | '32ft';
  feetLabel: string;
  categoryGroup: 'small' | 'medium' | 'heavy' | 'express';
  title: string;
  modelName: string;
  payload: string;
  capacity: string;
  dimensions: string;
  imageSources: string[];
  description: string;
  idealFor: string[];
  badgeColor: string;
}

export interface OfficeFacility {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  description: string;
  badge: string;
}

export default function GalleryPage() {
  const [mainTab, setMainTab] = useState<'fleet' | 'office'>('fleet');
  const [feetFilter, setFeetFilter] = useState<'all' | '7ft' | '10ft' | '14ft' | '17ft' | '20ft' | '22ft' | '24ft' | '32ft'>('all');
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<OfficeFacility | null>(null);

  // 8 Fleet Truck Feet Specifications with exact filename mappings & fallbacks
  const fleetVehicles: FleetVehicle[] = [
    {
      id: 1,
      feet: '7ft',
      feetLabel: '7 FT MINI TRUCK',
      categoryGroup: 'small',
      title: '7 Ft Mini Commercial Truck',
      modelName: 'Tata Ace / Mahindra Supro Series',
      payload: '1.0 - 1.2 Tonnes',
      capacity: '280 Cu.Ft Volume',
      dimensions: '7ft (L) x 4.5ft (W) x 5.0ft (H)',
      imageSources: ['/vecihle_7ft.png', '/vehicle_7ft.png', '/vecihle_7ft.jpg', '/vehicle_7ft.jpg', '/vehicle_9ft.png'],
      description: 'Compact mini commercial truck designed for rapid last-mile city delivery, narrow street access, and express small parcel movement.',
      idealFor: ['Local City Delivery', 'Small Retail Parcels', 'Light Spare Parts', 'Express Parcel Dispatch'],
      badgeColor: 'from-emerald-500 to-teal-500',
    },
    {
      id: 2,
      feet: '10ft',
      feetLabel: '10 FT LIGHT CONTAINER',
      categoryGroup: 'small',
      title: '10 Ft Light Goods Carrier',
      modelName: 'Tata 407 / Eicher Light Series',
      payload: '2.5 - 3.5 Tonnes',
      capacity: '500 Cu.Ft Volume',
      dimensions: '10ft (L) x 6.0ft (W) x 6.5ft (H)',
      imageSources: ['/vecihle_10ft.png', '/vehicle_10ft.png', '/vecihle_10ft.jpg', '/vehicle_10ft.jpg', '/vehicle_10ft.png'],
      description: 'Sturdy light commercial container truck engineered for suburban logistics corridors, FMCG goods, and regional warehouse dispatch.',
      idealFor: ['FMCG & Grocery Dispatch', 'Industrial Sub-Assemblies', 'Electrical Items', 'Suburban Route Freight'],
      badgeColor: 'from-teal-500 to-cyan-500',
    },
    {
      id: 3,
      feet: '14ft',
      feetLabel: '14 FT CLOSED CONTAINER',
      categoryGroup: 'medium',
      title: '14 Ft Eicher Closed Container',
      modelName: 'Eicher Pro 1110 E Series (Lithin Transport Fleet)',
      payload: '4.5 - 5.5 Tonnes',
      capacity: '750 Cu.Ft Volume',
      dimensions: '14ft (L) x 6.5ft (W) x 7.0ft (H)',
      imageSources: ['/vecihle_14ft.png', '/vehicle2.jpeg'],
      description: 'High-performance 14ft sealed container truck from our Lithin Transport fleet, built for secure weather-proof industrial cargo transit between major hubs.',
      idealFor: ['Automotive Assemblies', 'Pharmaceutical Cargo', 'Electronics & Appliances', 'Inter-District Transport'],
      badgeColor: 'from-emerald-600 to-green-500',
    },
    {
      id: 4,
      feet: '17ft',
      feetLabel: '17 FT MEDIUM FREIGHT',
      categoryGroup: 'medium',
      title: '17 Ft Medium Commercial Fleet',
      modelName: 'Ashok Leyland & Eicher Dual Fleet',
      payload: '7.5 - 9.0 Tonnes',
      capacity: '1,050 Cu.Ft Volume',
      dimensions: '17ft (L) x 7.0ft (W) x 7.5ft (H)',
      imageSources: ['/vecihle_17ft.png', '/vehicle4.jpeg'],
      description: 'Versatile 17ft container and open-body truck fleet equipped with GPS telematics, ideal for medium-density manufacturing goods and raw material shipments.',
      idealFor: ['Textile & Garment Bolts', 'Manufacturing Raw Materials', 'High-Density Freight', 'Corridor Express Routes'],
      badgeColor: 'from-cyan-600 to-emerald-500',
    },
    {
      id: 5,
      feet: '20ft',
      feetLabel: '20 FT HEAVY CONTAINER',
      categoryGroup: 'heavy',
      title: '20 Ft BharatBenz Heavy Container',
      modelName: 'BharatBenz Heavy Commercial Series',
      payload: '10.0 - 12.0 Tonnes',
      capacity: '1,300 Cu.Ft Volume',
      dimensions: '20ft (L) x 7.5ft (W) x 8.0ft (H)',
      imageSources: ['/vecihle_20ft.png', '/vehicle3.jpeg'],
      description: 'Rugged 20ft heavy-duty container truck engineered for heavy payloads, port container transfers, and long-distance interstate industrial transportation.',
      idealFor: ['Port Container Handling', 'Heavy Machinery Parts', 'Chemical Drums & Coils', 'Inter-State Heavy Freight'],
      badgeColor: 'from-emerald-500 to-teal-600',
    },
    {
      id: 6,
      feet: '22ft',
      feetLabel: '22 FT HIGH-CUBE CONTAINER',
      categoryGroup: 'heavy',
      title: '22 Ft High-Cube Cargo Express',
      modelName: 'Tata 6-Wheeler Heavy Highway Container',
      payload: '12.0 - 14.0 Tonnes',
      capacity: '1,550 Cu.Ft Volume',
      dimensions: '22ft (L) x 7.8ft (W) x 8.5ft (H)',
      imageSources: ['/vecihle_22ft.png', '/vehicle5.jpeg'],
      description: 'High-volume 22ft 6-wheeler sealed container truck engineered for high-capacity long-haul freight across national highways with double-driver dispatch.',
      idealFor: ['E-commerce Regional Hubs', 'Consumer Durable Goods', 'High-Volume Palletized Cargo', 'National Highway Express'],
      badgeColor: 'from-green-500 to-emerald-600',
    },
    {
      id: 7,
      feet: '24ft',
      feetLabel: '24 FT MULTI-AXLE TRUCK',
      categoryGroup: 'express',
      title: '24 Ft Multi-Axle Heavy Freight Hauler',
      modelName: '10-Wheeler Multi-Axle Heavy Series',
      payload: '15.0 - 18.0 Tonnes',
      capacity: '1,800 Cu.Ft Volume',
      dimensions: '24ft (L) x 8.0ft (W) x 8.5ft (H)',
      imageSources: ['/vecihle_24ft.png', '/vehicle_24ft.png'],
      description: 'Heavy multi-axle 24ft container truck built for maximum load capacity, heavy industrial machinery, paper rolls, and steel coils across South India.',
      idealFor: ['Heavy Industrial Machinery', 'Paper & Packaging Rolls', 'Metal & Steel Shipments', 'Heavy Plant Freight'],
      badgeColor: 'from-teal-600 to-emerald-400',
    },
    {
      id: 8,
      feet: '32ft',
      feetLabel: '32 FT MXL HEAVY CONTAINER',
      categoryGroup: 'express',
      title: '32 Ft Multi-Axle Heavy Express Container',
      modelName: 'Ashok Leyland 32ft MXL Heavy Duty Series',
      payload: '18.0 - 25.0 Tonnes',
      capacity: '2,400 Cu.Ft Volume',
      dimensions: '32ft (L) x 8.2ft (W) x 9.0ft (H)',
      imageSources: ['/vecihle_32ft.png', '/vehicle1.jpeg'],
      description: 'Our largest 32ft double-axle MXL container express truck from the Lithin fleet, designed for enterprise-grade high-volume freight haulage.',
      idealFor: ['Enterprise High-Volume Freight', 'White Goods & Appliances', 'Automotive Chassis & Parts', 'Cross-Country Express Lines'],
      badgeColor: 'from-emerald-400 via-teal-400 to-emerald-600',
    },
  ];

  // 4 Office & Warehouse Facilities
  const officeFacilities: OfficeFacility[] = [
    {
      id: 1,
      title: 'Lithin Transport Corporate Head Office',
      subtitle: 'Corporate Headquarters & Executive Administration',
      location: 'Bangalore Head Office, Karnataka',
      image: '/office1.png',
      description: 'Lithin Transport Corporate Head Office managing South India commercial freight operations, fleet control, and customer accounts.',
      badge: 'CORPORATE RECEPTION',
    },
    {
      id: 2,
      title: 'Fleet Operations & Route Control Center',
      subtitle: '24/7 Fleet Command & Port Telematics Center',
      location: 'Chennai Branch Office, Tamil Nadu',
      image: '/office2.png',
      description: 'Operations control center handling real-time GPS route telemetry, container truck tracking, and driver dispatches.',
      badge: 'OPERATIONS CONTROL ROOM',
    },
    {
      id: 3,
      title: 'Industrial Freight Cargo Loading Bay',
      subtitle: 'Garment & Industrial Freight Terminal',
      location: 'Tirupur Branch Office, Tamil Nadu',
      image: '/office3.png',
      description: 'Warehouse terminal specializing in palletized textile exports, forklift cargo handling, and express freight loading.',
      badge: 'CARGO LOADING DOCK',
    },
    {
      id: 4,
      title: 'Central Logistics & Fulfillment Park',
      subtitle: 'High-Capacity Storage & Fleet Terminal Park',
      location: 'Bangalore Central Hub, Karnataka',
      image: '/office4.png',
      description: 'Logistics hub facility with multi-bay loading docks, 24/7 CCTV surveillance, and commercial fleet container parking.',
      badge: 'WAREHOUSE LOGISTICS HUB',
    },
  ];

  const feetTabs = [
    { id: 'all', label: 'All Fleet Sizes (8 Types)' },
    { id: '7ft', label: '7 Ft' },
    { id: '10ft', label: '10 Ft' },
    { id: '14ft', label: '14 Ft' },
    { id: '17ft', label: '17 Ft' },
    { id: '20ft', label: '20 Ft' },
    { id: '22ft', label: '22 Ft' },
    { id: '24ft', label: '24 Ft' },
    { id: '32ft', label: '32 Ft' },
  ];

  const filteredVehicles = feetFilter === 'all'
    ? fleetVehicles
    : fleetVehicles.filter(v => v.feet === feetFilter);

  // Helper component for fallback images
  const FleetImage = ({ sources, alt, className }: { sources: string[]; alt: string; className: string }) => {
    const [srcIndex, setSrcIndex] = useState(0);

    return (
      <img
        src={sources[srcIndex] || sources[0]}
        alt={alt}
        className={className}
        onError={() => {
          if (srcIndex < sources.length - 1) {
            setSrcIndex(srcIndex + 1);
          }
        }}
      />
    );
  };

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-10">

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          <Truck className="w-4 h-4 text-emerald-400" />
          <span>Lithin Logistics Visual Showcase</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight uppercase font-sans">
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">FLEETS & FACILITIES</span>
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
          Explore our heavy-duty commercial freight container trucks (7ft to 32ft) and our corporate offices and warehouse infrastructure.
        </p>
      </div>

      {/* Main Filter Buttons: ALL FLEETS vs OFFICE & WAREHOUSE */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 p-2 rounded-2xl bg-[#090d24]/90 border border-emerald-500/30 max-w-xl mx-auto shadow-2xl backdrop-blur-md">
        <button
          onClick={() => setMainTab('fleet')}
          className={`flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${mainTab === 'fleet'
            ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30 scale-102 border border-emerald-400/50'
            : 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5'
            }`}
        >
          <Truck className="w-4 h-4" />
          <span>ALL FLEETS (TRUCKS)</span>
        </button>

        <button
          onClick={() => setMainTab('office')}
          className={`flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${mainTab === 'office'
            ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30 scale-102 border border-emerald-400/50'
            : 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5'
            }`}
        >
          <Building2 className="w-4 h-4" />
          <span>OFFICE & WAREHOUSE</span>
        </button>
      </div>

      {/* FLEET TRUCKS VIEW */}
      {mainTab === 'fleet' && (
        <>
          {/* Sub Feet Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {feetTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFeetFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${feetFilter === tab.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/60 shadow-md scale-105'
                  : 'bg-[#0c1328] hover:bg-[#121c3b] border border-emerald-500/20 text-gray-300 hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Fleet Trucks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                className="group cursor-pointer rounded-3xl glass-panel border border-emerald-500/20 hover:border-emerald-400/60 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-2xl bg-gradient-to-b from-[#090e24]/90 via-[#070b1e]/95 to-[#060814]"
              >
                {/* Vehicle Image Container */}
                <div data-no-particles="true" className="relative h-56 overflow-hidden bg-black/40">
                  <FleetImage
                    sources={vehicle.imageSources}
                    alt={vehicle.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />

                  {/* High-Impact Feet Size Badge on Top Left */}
                  <div className={`absolute top-3 left-3 px-3.5 py-1.5 rounded-xl bg-gradient-to-r ${vehicle.badgeColor} text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg border border-white/20 z-10`}>
                    <span>{vehicle.feet.toUpperCase()} CONTAINER</span>
                  </div>

                  {/* Smooth Full Backdrop Blur Overlay on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#060817]/60 backdrop-blur-md flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-emerald-500/90 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl">
                      Click to View Specs
                    </span>
                  </div>
                </div>

                {/* Vehicle Card Body */}
                <div className="p-5 flex flex-col justify-between flex-1 gap-2">
                  <div>
                    {/* Prominent Feet Label Under Image */}
                    <div className="inline-block mb-2 px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-lg text-[11px] font-black text-emerald-400 uppercase tracking-widest">
                      {vehicle.feetLabel}
                    </div>

                    <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-emerald-300 transition-colors leading-snug">
                      {vehicle.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-gray-400 mt-1">
                      {vehicle.modelName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* OFFICE & WAREHOUSE VIEW */}
      {mainTab === 'office' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {officeFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setSelectedOffice(facility)}
              className="group cursor-pointer rounded-3xl glass-panel border border-emerald-500/25 hover:border-emerald-400/60 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-2xl bg-gradient-to-b from-[#090e24]/90 via-[#070b1e]/95 to-[#060814]"
            >
              {/* Image Box */}
              <div data-no-particles="true" className="relative h-72 overflow-hidden bg-black/40">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-emerald-500/90 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg z-10">
                  {facility.badge}
                </div>

                {/* Smooth Full Backdrop Blur Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#060817]/60 backdrop-blur-md flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-emerald-500/90 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl">
                    Click to View Facility
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-3">
                <div>
                  <span className="text-xs font-black text-emerald-400 uppercase tracking-widest block mb-1">
                    {facility.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-emerald-300 transition-colors leading-snug">
                    {facility.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-300 font-semibold mt-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{facility.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fleet Booking Call to Action */}
      <div className="mt-6 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#070b1e] via-[#09162e] to-[#070b1e] border border-emerald-500/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">
            <PackageCheck className="w-4 h-4" />
            <span>Dedicated Cargo Haulage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Need Container Freight Services for Your Cargo Routes?
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed font-normal">
            We provide guaranteed SLA freight dispatch for 7ft, 10ft, 14ft, 17ft, 20ft, 22ft, 24ft, and 32ft commercial trucks across India.
          </p>
        </div>

        <a
          href="/services#quote"
          className="px-8 py-4 bg-[#10b981] hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 shrink-0"
        >
          Book Fleet / Get Instant Quote
        </a>
      </div>

      {/* Vehicle Specification Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-[#080c21] border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">

            {/* Close Button */}
            <button
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-emerald-600 transition-colors cursor-pointer shadow-lg border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Full HD Clear Vehicle Image View */}
            <div data-no-particles="true" className="relative h-[55vh] sm:h-[62vh] overflow-hidden bg-black/60 flex items-center justify-center">
              <FleetImage
                sources={selectedVehicle.imageSources}
                alt={selectedVehicle.title}
                className="w-full h-full object-contain p-2"
              />

              {/* Large Feet Badge */}
              <div className={`absolute bottom-4 left-6 px-4 py-2 rounded-xl bg-gradient-to-r ${selectedVehicle.badgeColor} text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl border border-white/20 z-10`}>
                <span>{selectedVehicle.feetLabel}</span>
              </div>
            </div>

            {/* Minimal Clean Information Footer */}
            <div className="p-5 sm:p-6 bg-[#080c21] flex flex-col gap-4 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-sans">
                    {selectedVehicle.title}
                  </h2>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {selectedVehicle.modelName} • Payload: {selectedVehicle.payload}
                  </p>
                </div>

                <a
                  href="/services#quote"
                  onClick={() => setSelectedVehicle(null)}
                  className="px-6 py-3 bg-[#10b981] hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <span>Book {selectedVehicle.feet.toUpperCase()} Truck</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Transport Applications (Concise Pills) */}
              <div>
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-2">
                  Recommended Cargo & Transport Usage:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedVehicle.idealFor.map((item, index) => (
                    <span key={index} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Office Facility Modal */}
      {selectedOffice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-[#080c21] border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">

            {/* Close Button */}
            <button
              onClick={() => setSelectedOffice(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-emerald-600 transition-colors cursor-pointer shadow-lg border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Full HD Clear Facility Image View */}
            <div data-no-particles="true" className="relative h-[60vh] sm:h-[68vh] overflow-hidden bg-black/60 flex items-center justify-center">
              <img
                src={selectedOffice.image}
                alt={selectedOffice.title}
                className="w-full h-full object-contain p-2"
              />

              <div className="absolute bottom-4 left-6 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl border border-white/20 z-10">
                {selectedOffice.badge}
              </div>
            </div>

            {/* Minimal Information Footer */}
            <div className="p-5 sm:p-6 bg-[#080c21] flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-xs font-black text-emerald-400 uppercase tracking-widest block mb-0.5">
                  {selectedOffice.subtitle}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-sans">
                  {selectedOffice.title}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-semibold mt-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{selectedOffice.location}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedOffice(null)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Close Facility View
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
