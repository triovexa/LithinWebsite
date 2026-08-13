import { useState } from 'react';
import { Search, ArrowRight, Sparkles, Compass, CheckCircle2, ChevronRight } from 'lucide-react';
import BranchNetworkSection from '../components/BranchNetworkSection';

interface RouteItem {
  from: string;
  to: string;
  region: 'south' | 'north' | 'west' | 'east';
  regionLabel: string;
  transitTime: string;
  serviceType: string;
  badge?: string;
}

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRegion, setActiveRegion] = useState<'all' | 'south' | 'north' | 'west' | 'east'>('all');

  // Clean, Organized All-India Parcel & Freight Routes (Categorized by Region)
  const panIndiaRoutes: RouteItem[] = [
    // SOUTH INDIA CORRIDORS
    { from: "Chennai", to: "Bangalore", region: "south", regionLabel: "Karnataka Interstate Hub", transitTime: "7 Hours", serviceType: "Interstate FTL & Parcel", badge: "Daily Express" },
    { from: "Chennai", to: "Tirupur", region: "south", regionLabel: "Garment & Textile Export Hub", transitTime: "7.5 Hours", serviceType: "Express Textile Parcel", badge: "Primary Hub" },
    { from: "Chennai", to: "Erode", region: "south", regionLabel: "Textile & Agro Freight Zone", transitTime: "6 Hours", serviceType: "Major Freight Hub", badge: "Primary Hub" },
    { from: "Chennai", to: "Coimbatore", region: "south", regionLabel: "Engineering & Industrial Capital", transitTime: "8 Hours", serviceType: "Industrial Branch Hub" },
    { from: "Chennai", to: "Hosur", region: "south", regionLabel: "Automotive SIPCOT Belt", transitTime: "5.5 Hours", serviceType: "Auto Cargo FTL" },
    { from: "Chennai", to: "Salem", region: "south", regionLabel: "Steel & Heavy Metal Hub", transitTime: "5 Hours", serviceType: "Heavy Freight Parcel" },
    { from: "Chennai", to: "Karur", region: "south", regionLabel: "Textile Export Capital", transitTime: "6.5 Hours", serviceType: "Textile Goods Parcel" },
    { from: "Chennai", to: "Hyderabad", region: "south", regionLabel: "Telangana Logistics Gateway", transitTime: "12 Hours", serviceType: "Interstate Parcel FTL" },
    { from: "Chennai", to: "Vijayawada", region: "south", regionLabel: "Andhra Commercial Terminal", transitTime: "9 Hours", serviceType: "Daily Express Parcel" },
    { from: "Chennai", to: "Kochi", region: "south", regionLabel: "Kerala Seaport & Freight Zone", transitTime: "14 Hours", serviceType: "Interstate Freight Desk" },
    { from: "Chennai", to: "Pondicherry", region: "south", regionLabel: "UT Commercial Hub", transitTime: "3.5 Hours", serviceType: "Daily UT Express" },
    { from: "Chennai", to: "Ambur", region: "south", regionLabel: "Leather Industrial Belt", transitTime: "4 Hours", serviceType: "Express Parcel & FTL" },
    { from: "Chennai", to: "Kanchipuram", region: "south", regionLabel: "SIPCOT & Silk Corridor", transitTime: "2 Hours", serviceType: "Industrial Express" },
    { from: "Chennai", to: "Perundurai", region: "south", regionLabel: "SIPCOT Industrial Complex", transitTime: "6 Hours", serviceType: "SIPCOT Express Parcel" },
    { from: "Chennai", to: "Namakkal", region: "south", regionLabel: "Poultry & Fleet Hub", transitTime: "6 Hours", serviceType: "Fleet Transport Parcel" },
    { from: "Chennai", to: "Ranipet", region: "south", regionLabel: "SIPCOT Leather Zone", transitTime: "2.5 Hours", serviceType: "Industrial FTL & Parcel" },
    { from: "Chennai", to: "Vellore", region: "south", regionLabel: "Commercial & Medical Hub", transitTime: "3 Hours", serviceType: "Daily Express Goods" },
    { from: "Chennai", to: "Attur", region: "south", regionLabel: "Salem Corridor", transitTime: "5 Hours", serviceType: "Daily Freight Service" },
    { from: "Chennai", to: "Bargur", region: "south", regionLabel: "Krishnagiri Industrial Belt", transitTime: "4.5 Hours", serviceType: "Express Parcel Desk" },

    // NORTH & CENTRAL INDIA CORRIDORS
    { from: "South Hubs", to: "Delhi NCR", region: "north", regionLabel: "National Capital Region Hub", transitTime: "36 Hours", serviceType: "Pan-India FTL & Parcel", badge: "Metro Hub" },
    { from: "South Hubs", to: "Gurgaon / Noida", region: "north", regionLabel: "NCR Industrial Logistics Zone", transitTime: "38 Hours", serviceType: "Enterprise Express" },
    { from: "South Hubs", to: "Jaipur", region: "north", regionLabel: "Rajasthan Commercial Hub", transitTime: "42 Hours", serviceType: "Interstate Freight FTL" },
    { from: "South Hubs", to: "Kanpur", region: "north", regionLabel: "UP Leather & Industrial Hub", transitTime: "40 Hours", serviceType: "Heavy Cargo Express" },
    { from: "South Hubs", to: "Lucknow", region: "north", regionLabel: "Central UP Distribution Terminal", transitTime: "42 Hours", serviceType: "Interstate Parcel" },
    { from: "South Hubs", to: "Indore", region: "north", regionLabel: "MP Commercial Capital", transitTime: "32 Hours", serviceType: "Express Cargo FTL" },
    { from: "South Hubs", to: "Bhopal", region: "north", regionLabel: "Central India Cargo Junction", transitTime: "34 Hours", serviceType: "Interstate Transit" },
    { from: "South Hubs", to: "Ludhiana", region: "north", regionLabel: "Punjab Textile & Hardware Belt", transitTime: "48 Hours", serviceType: "Textile Freight FTL" },
    { from: "South Hubs", to: "Chandigarh", region: "north", regionLabel: "North Transit Gateway", transitTime: "46 Hours", serviceType: "Express Parcel Desk" },

    // WEST INDIA CORRIDORS
    { from: "South Hubs", to: "Mumbai (Bhiwandi)", region: "west", regionLabel: "Commercial Seaport & Freight Hub", transitTime: "24 Hours", serviceType: "Pan-India FTL & Express", badge: "Seaport Hub" },
    { from: "South Hubs", to: "Pune (Chakan)", region: "west", regionLabel: "Automobile & Engineering SIPCOT", transitTime: "22 Hours", serviceType: "Auto Component FTL" },
    { from: "South Hubs", to: "Ahmedabad", region: "west", regionLabel: "Gujarat Trade & Textile Hub", transitTime: "32 Hours", serviceType: "Textile & Goods Parcel" },
    { from: "South Hubs", to: "Surat", region: "west", regionLabel: "Textile & Industrial Capital", transitTime: "30 Hours", serviceType: "Garment Express FTL" },
    { from: "South Hubs", to: "Vadodara", region: "west", regionLabel: "Chemical & Industrial SIPCOT", transitTime: "34 Hours", serviceType: "Industrial Cargo FTL" },
    { from: "South Hubs", to: "Vapi / Ankleshwar", region: "west", regionLabel: "Gujarat Chemical Belt", transitTime: "32 Hours", serviceType: "Chemical Freight Desk" },
    { from: "South Hubs", to: "Nagpur", region: "west", regionLabel: "Zero-Mile National Cargo Hub", transitTime: "20 Hours", serviceType: "Express Freight Line" },
    { from: "South Hubs", to: "Goa (Verna)", region: "west", regionLabel: "Goa Industrial Estate", transitTime: "18 Hours", serviceType: "Daily Express Parcel" },

    // EAST & NORTH-EAST CORRIDORS
    { from: "South Hubs", to: "Kolkata (Dankuni)", region: "east", regionLabel: "Eastern Seaport & Logistics Hub", transitTime: "36 Hours", serviceType: "Pan-India FTL & Parcel", badge: "Eastern HQ" },
    { from: "South Hubs", to: "Bhubaneswar", region: "east", regionLabel: "Odisha Industrial Belt", transitTime: "28 Hours", serviceType: "Interstate Freight Line" },
    { from: "South Hubs", to: "Cuttack", region: "east", regionLabel: "Commercial Cargo Depot", transitTime: "30 Hours", serviceType: "Daily Parcel Express" },
    { from: "South Hubs", to: "Patna", region: "east", regionLabel: "Bihar Central Trade Zone", transitTime: "42 Hours", serviceType: "Commercial Express" },
    { from: "South Hubs", to: "Ranchi", region: "east", regionLabel: "Jharkhand Heavy Freight Hub", transitTime: "38 Hours", serviceType: "Heavy Cargo & FTL" },
    { from: "South Hubs", to: "Guwahati", region: "east", regionLabel: "North-East Gateway Terminal", transitTime: "60 Hours", serviceType: "North-East Express" },
    { from: "South Hubs", to: "Siliguri", region: "east", regionLabel: "North Bengal & Sikkim Gateway", transitTime: "52 Hours", serviceType: "Interstate Parcel Hub" }
  ];

  const filteredRoutes = panIndiaRoutes.filter(route => {
    const matchesRegion = activeRegion === 'all' || route.region === activeRegion;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = route.to.toLowerCase().includes(searchLower) ||
                          route.from.toLowerCase().includes(searchLower) ||
                          route.regionLabel.toLowerCase().includes(searchLower) ||
                          route.serviceType.toLowerCase().includes(searchLower);
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12">
      
      {/* 1. NATIONWIDE MAP & NETWORK LOCATIONS SECTION (SHOWS UP IMMEDIATELY AT TOP ON SERVICES PAGE) */}
      <div className="scroll-mt-28" id="nationwide-map">
        <BranchNetworkSection />
      </div>

      {/* 2. ALL-INDIA PARCEL & FREIGHT ROUTES DIRECTORY */}
      <section id="parcel-network" className="flex flex-col gap-8 scroll-mt-28">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-emerald-500/20">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 w-fit">
              <Compass className="w-4 h-4 text-emerald-400" />
              All-India Parcel & Freight Dispatch
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight font-sans">
              All-India Parcel Routes Directory
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 font-normal max-w-2xl">
              Daily express parcel services and freight dispatch connecting major industrial capitals, textile centers, and commercial hubs across India with zero clutter.
            </p>
          </div>

          {/* Real-time Search Input */}
          <div className="relative w-full lg:w-96">
            <Search className="w-4 h-4 text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination (e.g. Bangalore, Delhi, Mumbai...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-950/60 backdrop-blur-md border border-emerald-500/30 rounded-2xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all shadow-xl"
            />
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: `All Over India (${panIndiaRoutes.length} Corridors)` },
            { id: 'south', label: 'South India Hubs (TN, KA, KL, AP, TS)' },
            { id: 'north', label: 'North & Central India (Delhi NCR, UP, MP, RJ)' },
            { id: 'west', label: 'West Coast Hubs (MH, GJ, Goa)' },
            { id: 'east', label: 'East & North-East (WB, OD, BH, Assam)' }
          ].map((reg) => (
            <button
              key={reg.id}
              onClick={() => setActiveRegion(reg.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeRegion === reg.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105 border border-emerald-400'
                  : 'bg-slate-950/40 hover:bg-slate-900/60 border border-emerald-500/20 text-gray-300 hover:text-white'
              }`}
            >
              {reg.label}
            </button>
          ))}
        </div>

        {/* ULTRA-CLEAN MULTI-COLUMN ROUTE LISTING */}
        <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-emerald-500/20 bg-slate-950/30 backdrop-blur-xl shadow-2xl">
          
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-xs text-gray-400">
            <span className="font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Showing {filteredRoutes.length} Verified Pan-India Parcel Lines
            </span>
            <span className="text-[11px] text-emerald-400 font-extrabold uppercase hidden sm:inline-block">
              Daily Guaranteed Timings & Doorstep Delivery
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {filteredRoutes.map((route, idx) => (
              <div
                key={idx}
                className="group p-3.5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all flex items-center justify-between gap-3 shadow-md"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-emerald-400 font-black text-sm shrink-0 group-hover:scale-125 transition-transform">
                    ❖
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-400 shrink-0">{route.from}</span>
                      <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="text-sm font-black text-white group-hover:text-emerald-300 transition-colors truncate">
                        {route.to}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 truncate mt-0.5 font-normal">
                      {route.regionLabel}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0 gap-1">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase">
                    {route.transitTime}
                  </span>
                  <a
                    href="https://wa.me/919566738884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-gray-400 hover:text-emerald-300 font-bold uppercase flex items-center gap-0.5 transition-colors"
                  >
                    <span>Book</span>
                    <ChevronRight className="w-3 h-3 text-emerald-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredRoutes.length === 0 && (
            <div className="py-12 text-center text-gray-400 text-sm">
              No parcel lines found matching "<strong className="text-white">{searchTerm}</strong>". We dispatch to all towns across India! Call our 24/7 Hotline at <strong className="text-emerald-400">+91 95667 38884</strong>.
            </div>
          )}

          {/* Footer Callout */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Truck Load (FTL) available for all 500+ industrial districts in India</span>
            </div>
            <a
              href="https://wa.me/919566738884"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black uppercase tracking-wider text-[11px] transition-all shadow-lg shadow-emerald-500/20 shrink-0"
            >
              Get All-India Rate Card
            </a>
          </div>

        </div>

      </section>

    </div>
  );
}

