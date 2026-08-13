import { useState } from 'react';
import { Truck, MapPin, Shield, Package, Factory, HardHat, ChevronRight, Search, ArrowRight } from 'lucide-react';
import BranchNetworkSection from '../components/BranchNetworkSection';
import QuoteFormSection from '../components/QuoteFormSection';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'interstate' | 'industrial' | 'textile' | 'metro'>('all');

  const services = [
    {
      title: "Full Truck Load (FTL)",
      description: "Large enterprise shipments requiring dedicated vehicle transportation with 100% route lock.",
      icon: Truck,
      highlight: "Dedicated Route Fleet"
    },
    {
      title: "Part Load & Express Parcel",
      description: "Daily express parcel transportation for smaller consignments with guaranteed dispatch timings.",
      icon: Package,
      highlight: "Cost-Effective Freight"
    },
    {
      title: "Industrial Goods Transport",
      description: "Machinery, raw materials, heavy equipment, and industrial SIPCOT supply chain haulage.",
      icon: Factory,
      highlight: "Heavy Duty Haulage"
    },
    {
      title: "Heavy & Project Cargo",
      description: "Oversized and heavy machinery transport solutions across Indian industrial highways.",
      icon: HardHat,
      highlight: "Oversized Load Ready"
    },
    {
      title: "Local & Regional Distribution",
      description: "Rapid regional hub delivery connecting industrial estates, markets, and commercial zones.",
      icon: MapPin,
      highlight: "Rapid Zone Express"
    },
    {
      title: "Customized B2B SLA Solutions",
      description: "Customized logistics contracts, dedicated fleet assignment, and B2B SLA assurance.",
      icon: Shield,
      highlight: "B2B Customized SLA"
    }
  ];

  // Complete List of All 58+ Parcel Service Destinations provided by User
  const allParcelRoutes = [
    { destination: "Ambur", region: "Vellore Leather Belt", time: "4 Hours", type: "Express Parcel & FTL", category: "industrial" },
    { destination: "Attur", region: "Salem Industrial Corridor", time: "5 Hours", type: "Daily Parcel & Freight", category: "industrial" },
    { destination: "Bargur", region: "Krishnagiri District", time: "4.5 Hours", type: "Parcel Express Service", category: "industrial" },
    { destination: "Bangalore", region: "Karnataka Interstate Hub", time: "7 Hours", type: "Interstate FTL & Parcel", category: "interstate" },
    { destination: "Kalasipalyam", region: "Bangalore Express Terminal", time: "7.5 Hours", type: "Interstate Parcel Hub", category: "interstate" },
    { destination: "Bhavani", region: "Erode Textile Zone", time: "6 Hours", type: "Daily Textile Parcel", category: "textile" },
    { destination: "Guindy", region: "Chennai Metro HQ Hub", time: "1 Hour", type: "Intra-City Parcel Counter", category: "metro" },
    { destination: "Wall Tax Road", region: "Chennai Central Commercial Hub", time: "1 Hour", type: "Express City Dispatch", category: "metro" },
    { destination: "Vandalur", region: "Chennai South Gateway", time: "1.5 Hours", type: "South Highway Parcel", category: "metro" },
    { destination: "T-Nagar", region: "Chennai Commercial Belt", time: "1 Hour", type: "Retail Parcel Counter", category: "metro" },
    { destination: "Perungalathur", region: "Chennai Transit Terminal", time: "1.5 Hours", type: "Express Highway Dispatch", category: "metro" },
    { destination: "Koyambedu", region: "Chennai Central Market", time: "1 Hour", type: "Major Central Parcel Hub", category: "metro" },
    { destination: "Periyamedu", region: "Chennai Goods Depot", time: "1 Hour", type: "Commercial Goods Freight", category: "metro" },
    { destination: "Chennimalai", region: "Erode Handloom Belt", time: "6.5 Hours", type: "Textile Parcel Express", category: "textile" },
    { destination: "Chidambaram", region: "Cuddalore District", time: "4.5 Hours", type: "Daily Freight & Parcel", category: "industrial" },
    { destination: "New Sidhapudur", region: "Coimbatore City Branch Hub", time: "8 Hours", type: "Industrial Branch Hub", category: "industrial" },
    { destination: "Omni Bus Stand", region: "Coimbatore Cargo Depot", time: "8 Hours", type: "Express Cargo Terminal", category: "metro" },
    { destination: "JKtours", region: "Express Logistics Counter", time: "5 Hours", type: "Parcel Counter Depot", category: "metro" },
    { destination: "Cuddalore", region: "Coastal Industrial Belt", time: "4 Hours", type: "Daily Parcel & Cargo", category: "industrial" },
    { destination: "Dharapuram", region: "Tirupur District Hub", time: "7 Hours", type: "Commercial Transport", category: "textile" },
    { destination: "Dharmapuri", region: "NH44 Highway Corridor", time: "5 Hours", type: "Daily Parcel Service", category: "industrial" },
    { destination: "Erode", region: "Erode Central Branch Hub", time: "6 Hours", type: "Major Freight & Textile Hub", category: "textile" },
    { destination: "Rajalakshmi", region: "Express Logistics Depot", time: "6 Hours", type: "Parcel Station Depot", category: "metro" },
    { destination: "Gobichettipalayam (Gobi)", region: "Erode Agri-Industrial", time: "6.5 Hours", type: "Parcel Express Service", category: "textile" },
    { destination: "Hosur", region: "Karnataka Border SIPCOT", time: "5.5 Hours", type: "Auto Components FTL", category: "interstate" },
    { destination: "K.Pattanam", region: "Coastal Cargo Belt", time: "6 Hours", type: "Parcel Service Desk", category: "industrial" },
    { destination: "Kanchipuram", region: "Silk & SIPCOT Industrial City", time: "2 Hours", type: "Silk & Industrial Express", category: "industrial" },
    { destination: "Kangayam", region: "Tirupur Agri-Industrial", time: "7 Hours", type: "Commercial Parcel", category: "textile" },
    { destination: "Karur", region: "Textile Export Capital Hub", time: "6.5 Hours", type: "Heavy Textile Freight", category: "textile" },
    { destination: "Komarapalayam", region: "Namakkal Textile Belt", time: "6.5 Hours", type: "Industrial Express Goods", category: "textile" },
    { destination: "Krishnagiri", region: "NH44 Interstate Corridor", time: "4.5 Hours", type: "Express Parcel Service", category: "interstate" },
    { destination: "Mettur Dam", region: "Salem Industrial Zone", time: "5.5 Hours", type: "Heavy Industrial Cargo", category: "industrial" },
    { destination: "Mecheri", region: "Salem Rural Hub", time: "5.5 Hours", type: "Daily Freight Service", category: "industrial" },
    { destination: "Mettur RS", region: "Railway Station Depot", time: "5.5 Hours", type: "Parcel Terminal Depot", category: "industrial" },
    { destination: "Namakkal", region: "Poultry & Fleet Hub", time: "6 Hours", type: "Major Transport Fleet Hub", category: "industrial" },
    { destination: "Neyveli (Komos)", region: "Neyveli Lignite Zone", time: "4 Hours", type: "Industrial Goods Parcel", category: "industrial" },
    { destination: "Neyveli (Univers)", region: "Neyveli Township Hub", time: "4 Hours", type: "Commercial Freight Desk", category: "industrial" },
    { destination: "Pallipalayam", region: "Erode Paper & Textile", time: "6 Hours", type: "Industrial Parcel", category: "textile" },
    { destination: "Perundurai", region: "SIPCOT Industrial Complex", time: "6 Hours", type: "SIPCOT FTL & Express Parcel", category: "industrial" },
    { destination: "Pondicherry", region: "UT Commercial Hub", time: "3.5 Hours", type: "Daily UT Express", category: "interstate" },
    { destination: "Ranipet", region: "SIPCOT Leather Zone", time: "2.5 Hours", type: "Industrial Freight FTL", category: "industrial" },
    { destination: "Rasipuram", region: "Namakkal Commercial Belt", time: "6 Hours", type: "Daily Parcel Service", category: "industrial" },
    { destination: "Salem Steel Plant", region: "Steel & Heavy Metal Hub", time: "5 Hours", type: "Heavy Metal & Industrial Cargo", category: "industrial" },
    { destination: "Old Bus Stand Salem", region: "Salem Central Depot", time: "5 Hours", type: "City Parcel Counter", category: "metro" },
    { destination: "Valappadi", region: "Salem - Attur Highway", time: "4.5 Hours", type: "Parcel Express Service", category: "industrial" },
    { destination: "New Bus Stand Salem", region: "Salem Main Hub", time: "5 Hours", type: "Express Parcel Desk", category: "metro" },
    { destination: "Tharamangalam", region: "Salem Weaving Belt", time: "5.5 Hours", type: "Textile Goods Parcel", category: "textile" },
    { destination: "Nangavalli", region: "Salem Handloom Zone", time: "5.5 Hours", type: "Daily Handloom Parcel", category: "textile" },
    { destination: "Sankagiri", region: "Lorry Transport Hub", time: "5.5 Hours", type: "Heavy Transport Freight", category: "industrial" },
    { destination: "Sathyamangalam (Sathi)", region: "Erode Forest Corridor", time: "7 Hours", type: "Commercial Parcel Desk", category: "textile" },
    { destination: "Tiruchengodu", region: "Borewell & Rig Machinery", time: "6 Hours", type: "Heavy Machinery & Goods", category: "industrial" },
    { destination: "Tiruppattur", region: "Vellore District Hub", time: "4 Hours", type: "Daily Express Parcel", category: "industrial" },
    { destination: "Tirupur", region: "Knitwear Export Capital", time: "7.5 Hours", type: "Garment Express FTL & Parcel", category: "textile" },
    { destination: "Udumalpet", region: "Tirupur Agri & Industrial", time: "8 Hours", type: "Commercial Freight Desk", category: "industrial" },
    { destination: "Vaniyambadi", region: "Leather Industrial Belt", time: "3.5 Hours", type: "Daily Leather Parcel", category: "industrial" },
    { destination: "Vellore", region: "Medical & Commercial Hub", time: "3 Hours", type: "Daily Express Goods", category: "industrial" },
    { destination: "Vridhachalam", region: "Cuddalore District Hub", time: "4 Hours", type: "Daily Freight & Parcel", category: "industrial" }
  ];

  const filteredRoutes = allParcelRoutes.filter(route => {
    const matchesCategory = activeCategory === 'all' || route.category === activeCategory;
    const matchesSearch = route.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          route.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          route.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-16">
      
      {/* Services Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          Our All-India Capabilities
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight uppercase font-sans">
          Commercial Freight & Parcel Services
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
          Tailored commercial transport solutions, 58+ express parcel routes, and Pan-India freight dispatch engineered for enterprise supply chains.
        </p>
      </div>

      {/* Services Capabilities Grid */}
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
                href="#quote"
                className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-emerald-400 group-hover:text-white transition-colors"
              >
                <span>Request Freight Quote</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          );
        })}
      </div>

      {/* ALL-INDIA & REGIONAL PARCEL SERVICE DESTINATIONS (58+ ROUTES INTERACTIVE GRID) */}
      <section id="parcel-network" className="flex flex-col gap-8 scroll-mt-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
              Pan-India Parcel Network
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight font-sans">
              Parcel Services From Chennai (58+ Destinations)
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 font-normal max-w-2xl">
              Daily parcel express transport connecting Chennai Hub with 58+ industrial towns, textile capitals, interstate hubs, and commercial centers across India.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-96">
            <Search className="w-4 h-4 text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination (e.g. Bangalore, Salem, Erode...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-950/40 backdrop-blur-md border border-emerald-500/30 rounded-2xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all shadow-lg"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: `All 58+ Destinations (${allParcelRoutes.length})` },
            { id: 'interstate', label: 'Interstate Corridors' },
            { id: 'industrial', label: 'SIPCOT & Industrial Belts' },
            { id: 'textile', label: 'Textile & Handloom Belts' },
            { id: 'metro', label: 'Chennai Metro Depots' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                  : 'bg-slate-950/40 hover:bg-slate-900/60 border border-emerald-500/20 text-gray-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Parcel Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredRoutes.map((route, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-emerald-500/15 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-extrabold uppercase mb-2">
                  <span className="text-emerald-400 truncate max-w-[170px]">{route.type}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 shrink-0">
                    {route.time}
                  </span>
                </div>

                <div className="flex items-center gap-2 my-2">
                  <span className="text-xs font-bold text-gray-300">Chennai</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-base font-black text-white group-hover:text-emerald-300 transition-colors">
                    {route.destination}
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 mt-1 font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{route.region}</span>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-extrabold uppercase text-emerald-400">
                <a href="#quote" className="hover:underline flex items-center gap-1">
                  <span>Book Parcel Rate</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="p-8 rounded-3xl glass-panel text-center text-gray-400 text-sm">
            No parcel destinations matching "<strong className="text-white">{searchTerm}</strong>". Call our 24/7 hotline at <strong className="text-emerald-400">+91 98765 43210</strong> for custom route dispatch.
          </div>
        )}
      </section>

      {/* PAN-INDIA BRANCH OFFICES & MAP DIRECTORY */}
      <BranchNetworkSection />

      {/* FREIGHT RATE ESTIMATOR FORM */}
      <QuoteFormSection />

    </div>
  );
}
