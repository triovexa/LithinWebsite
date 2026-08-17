import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ChevronRight, Star, Search, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { ALL_HUB_COVERAGE } from '../data/locationData';
import type { HubCoverage, StateCoverage } from '../data/locationData';

interface BranchInfo {
  id: 'bangalore' | 'chennai' | 'tirupur';
  name: string;
  type: string;
  address: string;
  email: string;
  phone: string;
  cx: number;
  cy: number;
  isPrimary: boolean;
}

interface BranchNetworkSectionProps {
  showMap?: boolean;
  showExplorer?: boolean;
}

export default function BranchNetworkSection({ showMap = true, showExplorer = true }: BranchNetworkSectionProps) {
  const branches: BranchInfo[] = [
    {
      id: 'bangalore',
      name: 'Bangalore (Head Office)',
      type: 'Corporate Head Office & Interstate Transport Hub',
      address: '#329, Pavithra Nilayam, 2nd B Main, OMBR Layout, Bengaluru, Karnataka - 560043',
      email: 'admin@lithintransport.in',
      phone: '+91 95667 38884',
      cx: 33.5,
      cy: 78.5,
      isPrimary: true,
    },
    {
      id: 'chennai',
      name: 'Chennai (Branch Office)',
      type: 'Regional Branch Office & Seaport Freight Hub',
      address: 'Siva Sakthi Enterprises, No.5, Madhavaram Redhills High Road, Vadaperumbakkam, Chennai, Tamil Nadu - 600060 (GST: 33AKEPT5983B1Z2)',
      email: 'arul.p@lithintransport.in',
      phone: '+91 93423 17996',
      cx: 40.5,
      cy: 80.0,
      isPrimary: false,
    },
    {
      id: 'tirupur',
      name: 'Tirupur (Branch Office)',
      type: 'Regional Branch Office & Textile Freight Terminal',
      address: '13/162, Amman Nagar, 1st Street, Rakkiyapalayam, Avinashi, Tirupur, Tamil Nadu - 641654',
      email: 'deepak@lithintransport.in',
      phone: '+91 96552 37104',
      cx: 32.5,
      cy: 85.0,
      isPrimary: false,
    },
  ];

  const [hoveredBranch, setHoveredBranch] = useState<BranchInfo | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<BranchInfo>(branches[0]);
  const [locationSearchTerm, setLocationSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<StateCoverage | null>(null);
  const [citySearchTerm, setCitySearchTerm] = useState('');

  // Active Hub Coverage data based on selected branch
  const activeHubData: HubCoverage = ALL_HUB_COVERAGE.find((h) => h.hubId === selectedBranch.id) || ALL_HUB_COVERAGE[0];

  // Trigger route selection and open booking form modal with pre-filled FROM & TO
  const handleBookingRouteClick = (e: React.MouseEvent, fromCity: string, toCity: string) => {
    e.preventDefault();
    (window as any).lastSelectedRoute = { from: fromCity, to: toCity };

    window.dispatchEvent(
      new CustomEvent('selectRoute', {
        detail: {
          from: fromCity,
          to: toCity
        }
      })
    );

    const quoteElem = document.getElementById('quote');
    if (quoteElem) {
      quoteElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.dispatchEvent(new CustomEvent('openBookingModal'));
    }
  };

  // Change hub & reset state view (shouldScroll = true only for bottom branch card clicks)
  const handleHubSelect = (branch: BranchInfo, shouldScroll: boolean = false) => {
    setSelectedBranch(branch);
    setSelectedState(null);
    setLocationSearchTerm('');
    setCitySearchTerm('');

    // Smooth scroll to the Cities List / Dispatch Explorer section only if triggered from bottom cards
    if (shouldScroll) {
      setTimeout(() => {
        const explorerElem = document.getElementById('hub-destination-explorer');
        if (explorerElem) {
          explorerElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    }
  };

  // Filter states by search
  const filteredStates = activeHubData.states.filter((st) => {
    const term = locationSearchTerm.toLowerCase().trim();
    if (!term) return true;

    const stateMatch = st.name.toLowerCase().includes(term) || st.region.toLowerCase().includes(term) || st.code.toLowerCase().includes(term);
    const cityMatch = st.districts.some(
      (d) => d.name.toLowerCase().includes(term) || d.type.toLowerCase().includes(term)
    );

    return stateMatch || cityMatch;
  });

  return (
    <section id="branch-network" className="my-2 sm:my-8 scroll-mt-24 flex flex-col gap-6 sm:gap-10">
      {/* SECTION HEADER (CENTERED WITH GALLERY PAGE COLOR COMBINATION) */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          <MapPin className="w-4 h-4 text-emerald-400" />
          <span>Lithin Transport Network & Dispatch Hubs</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mt-4 tracking-tight uppercase font-sans">
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">HEAD OFFICE & BRANCHES</span>
        </h1>

        
      </div>

      {/* CENTERED MAP CONTAINER - UNBOXED & FLOATING FREELY ON BACKGROUND */}
      {showMap && (
        <div className="relative flex flex-col items-center justify-center py-4">
          <div className="relative w-full max-w-[650px] aspect-[980/919] flex items-center justify-center py-2">
            <img
              src="/india-map.png"
              alt="Lithin Transport Branch Network Map"
              className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(16,185,129,0.5)]"
            />

            {branches.map((b) => {
              const isHovered = hoveredBranch?.id === b.id;

              return (
                <div
                  key={b.id}
                  style={{ left: `${b.cx}%`, top: `${b.cy}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                  onMouseEnter={() => setHoveredBranch(b)}
                  onMouseLeave={() => setHoveredBranch(null)}
                  onTouchStart={() => setHoveredBranch(isHovered ? null : b)}
                  onClick={() => handleHubSelect(b, false)}
                  title={b.name}
                >
                  <div className="relative flex items-center justify-center p-2">
                    <span
                      className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                        b.isPrimary ? 'bg-amber-400' : 'bg-emerald-400'
                      }`}
                    />
                    <span
                      className={`relative w-4 h-4 rounded-full border-2 border-white shadow-xl transition-all duration-300 group-hover:scale-125 ${
                        b.isPrimary ? 'bg-amber-400 shadow-amber-500/90' : 'bg-emerald-400 shadow-emerald-500/90'
                      } ${isHovered ? 'scale-125 ring-4 ring-white/80' : ''}`}
                    />
                  </div>

                  <div
                    className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 p-3.5 rounded-xl bg-slate-950/95 backdrop-blur-xl border ${
                      b.isPrimary
                        ? 'border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.5)]'
                        : 'border-emerald-400/80 shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                    } text-white pointer-events-auto transition-all duration-300 z-30 ${
                      isHovered
                        ? 'opacity-100 scale-100 visible'
                        : 'opacity-0 scale-95 invisible pointer-events-none'
                    }`}
                  >
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent ${
                        b.isPrimary ? 'border-t-amber-400/80' : 'border-t-emerald-400/80'
                      }`}
                    />

                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="font-extrabold text-xs text-white uppercase tracking-wider flex items-center gap-1">
                        {b.isPrimary && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                        {b.name}
                      </span>
                      <span
                        className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                          b.isPrimary
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        }`}
                      >
                        {b.isPrimary ? 'Head Office' : 'Branch'}
                      </span>
                    </div>

                    <p className="text-[10px] text-gray-300 mb-2 leading-tight">{b.address}</p>

                    <div className="flex flex-col gap-1 text-[11px] pt-1.5 border-t border-white/10">
                      <div className="flex items-center gap-1.5 text-gray-200">
                        <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
                        <a href={`tel:${b.phone}`} className="hover:text-emerald-300 font-bold">
                          {b.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-200">
                        <Mail className="w-3 h-3 text-emerald-400 shrink-0" />
                        <a href={`mailto:${b.email}`} className="hover:text-emerald-300 font-semibold truncate">
                          {b.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3 OFFICIAL OFFICE CARDS WITH GOLDEN BLINKING GLOWING BORDERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {branches.map((b) => {
          const isSelected = selectedBranch.id === b.id;
          return (
            <div
              key={b.id}
              onClick={() => handleHubSelect(b, true)}
              className={`p-6 sm:p-8 rounded-3xl glass-panel border transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                isSelected
                  ? 'border-amber-400 bg-slate-950/95 shadow-[0_0_35px_rgba(245,158,11,0.45)] scale-[1.02]'
                  : 'border-amber-400/35 bg-slate-950/70 hover:border-amber-300 hover:bg-slate-950/90 shadow-[0_0_20px_rgba(245,158,11,0.18)] hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]'
              }`}
            >
              {/* Golden Ambient Top Pulsing Border Line */}
              <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-90 animate-pulse" />
              <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-400/25 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/30">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 border ${
                      b.isPrimary
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    }`}
                  >
                    {b.isPrimary && <Star className="w-3 h-3 fill-amber-400 text-amber-400" />}
                    {b.isPrimary ? 'HEAD OFFICE' : 'BRANCH OFFICE'}
                  </span>

                  {isSelected && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse">
                      Active Selected
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-sans group-hover:text-emerald-300 transition-colors">
                  {b.name.split(' (')[0]}
                </h3>
                <p className="text-xs text-emerald-400 font-bold mt-1 mb-4">{b.type}</p>

                <div className="flex flex-col gap-2.5 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href={`tel:${b.phone}`} className="hover:text-emerald-300 font-bold">
                      {b.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-white/10 text-gray-300">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-relaxed">{b.address}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-extrabold group-hover:translate-x-1 transition-transform">
                <span>{isSelected ? `Viewing ${b.name.split(' (')[0]} Destinations` : `Select ${b.name.split(' (')[0]} Hub`}</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* FULL-WIDTH INLINE PAGE SECTION: HUB DESTINATIONS OR EXPANDED STATE PAGE */}
      {showExplorer ? (
        <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-amber-400/40 bg-slate-950/85 backdrop-blur-2xl shadow-[0_0_40px_rgba(245,158,11,0.18)] flex flex-col gap-8 scroll-mt-28 relative overflow-hidden" id="hub-destination-explorer">
          <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 animate-pulse" />
        
        {/* ========================================================================= */}
        {/* VIEW MODE A: STATE DETAILS PAGE INLINE VIEW (WHEN A STATE IS CLICKED)   */}
        {/* ========================================================================= */}
        {selectedState ? (
          <div className="flex flex-col gap-8 animate-fade-in">
            {/* STATE VIEW TOP NAVIGATION BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <button
                onClick={() => setSelectedState(null)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 border border-emerald-500/40 text-emerald-300 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md w-fit cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to All {selectedBranch.name.split(' (')[0]} States ({activeHubData.states.length})</span>
              </button>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-wider">
                  Hub: {activeHubData.hubName.split(' (')[0]}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-gray-300 text-xs font-extrabold uppercase tracking-wider">
                  {selectedState.districts.length} Cities Covered
                </span>
              </div>
            </div>

            {/* STATE HEADER BANNER */}
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
                  {selectedState.name}
                </h3>
                <span className="text-emerald-400 text-xl font-black bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/30">
                  {selectedState.code}
                </span>
              </div>
            </div>

            {/* SEARCH BAR FOR CITIES IN THIS STATE */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/10">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={`Search cities or industrial zones in ${selectedState.name}...`}
                  value={citySearchTerm}
                  onChange={(e) => setCitySearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-950 border border-emerald-500/30 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all shadow-inner"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-extrabold text-white">
                  Showing {selectedState.districts.filter(d => d.name.toLowerCase().includes(citySearchTerm.toLowerCase()) || d.type.toLowerCase().includes(citySearchTerm.toLowerCase())).length} of {selectedState.districts.length} Verified Hub Locations in {selectedState.name}
                </span>
              </div>
            </div>

            {/* FULL-WIDTH GRID OF DISTRICTS & CITIES CARDS ON THE PAGE (MATCHING SCREENSHOT 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {selectedState.districts
                .filter(d => d.name.toLowerCase().includes(citySearchTerm.toLowerCase()) || d.type.toLowerCase().includes(citySearchTerm.toLowerCase()))
                .map((dist, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl glass-panel bg-slate-950/85 border border-amber-400/35 hover:border-amber-300 transition-all duration-300 flex flex-col justify-between shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] group relative overflow-hidden hover:scale-[1.01]"
                  >
                    {/* Golden Ambient Top Pulsing Border Line */}
                    <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-90 animate-pulse" />

                    <div>
                      {/* CITY NAME HEADER WITH GREEN MAP PIN */}
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wide group-hover:text-emerald-300 transition-colors font-sans truncate">
                          {dist.name}
                        </h4>
                      </div>

                      {/* HUB INDUSTRIAL FOCUS / DESCRIPTION */}
                      <p className="text-[11px] text-emerald-400 font-semibold mb-2 leading-tight truncate">
                        {dist.type}
                      </p>

                      {/* SERVICE BADGES */}
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-gray-300 text-[9px] font-bold">
                          Full Truck Load (FTL)
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-gray-300 text-[9px] font-bold">
                          Part Load (PTL)
                        </span>
                      </div>
                    </div>

                    {/* ACTION FOOTER BAR WITH MASS BLINKING GOLDEN BOOK PARCEL BUTTON */}
                    <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between gap-2 text-[11px]">
                      <span className="text-[10px] text-gray-400 font-medium">Daily Direct Fleet</span>
                      <button
                        type="button"
                        onClick={(e) => handleBookingRouteClick(e, activeHubData.hubName.split(' (')[0], dist.name)}
                        className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:shadow-[0_0_22px_rgba(245,158,11,0.8)] flex items-center gap-0.5 hover:scale-105 cursor-pointer animate-pulse"
                      >
                        <span>BOOK PARCEL</span>
                        <ChevronRight className="w-3 h-3 text-slate-950" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* BOTTOM NAV BAR */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-start">
              <button
                onClick={() => setSelectedState(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-white font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All {selectedBranch.name.split(' (')[0]} States</span>
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* VIEW MODE B: ALL STATES GRID (DEFAULT HOMEPAGE / SERVICES PAGE VIEW)      */
          /* ========================================================================= */
          <div className="flex flex-col gap-8">
            {/* EXPLORER TOP HEADER */}
            <div className="pb-4 border-b border-emerald-500/20">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider mb-2">
                {selectedBranch.name.split(' (')[0]} Hub Network
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
                Serviced Destinations
              </h3>
            </div>

            {/* SEARCH BAR FOR STATES & DISTRICTS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={`Search states or cities served from ${selectedBranch.name.split(' (')[0]}...`}
                  value={locationSearchTerm}
                  onChange={(e) => setLocationSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-emerald-500/30 rounded-2xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all shadow-xl"
                />
              </div>
            </div>

            {/* STATES GRID WITH GOLDEN BLINKING GLOWING BORDERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStates.map((st) => (
                <div
                  key={st.id}
                  onClick={() => {
                    setSelectedState(st);
                    setCitySearchTerm('');
                  }}
                  className="group p-5 rounded-2xl bg-slate-950/85 border border-amber-400/40 hover:border-amber-300 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-[0_0_20px_rgba(245,158,11,0.18)] hover:shadow-[0_0_35px_rgba(245,158,11,0.45)] hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Golden Ambient Top Pulsing Border Line */}
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-90 animate-pulse" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-400/25 transition-all duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
                        {st.region} • {st.code}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-emerald-300 transition-colors font-sans flex items-center gap-2">
                      <span>{st.name}</span>
                    </h4>

                    <p className="text-[11px] text-gray-300 mt-1 mb-4 font-semibold leading-relaxed">
                      {st.serviceType}
                    </p>

                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-extrabold group-hover:translate-x-1 transition-transform">
                    <span>View Cities</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>

            {filteredStates.length === 0 && (
              <div className="py-12 text-center text-gray-400 text-sm">
                No states or districts found matching "<strong className="text-white">{locationSearchTerm}</strong>" under {selectedBranch.name.split(' (')[0]} Hub. Try searching another office or contact our 24/7 hotline at <strong className="text-emerald-400">+91 95667 38884</strong>.
              </div>
            )}
          </div>
        )}
      </div>
      ) : (
        /* COMPACT SLEEK HIGH-TECH GLASS GLOW BUTTON FOR HOMEPAGE PREVIEW */
        <div className="flex justify-center mt-2">
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center p-0.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative px-6 py-2.5 bg-slate-950/90 group-hover:bg-slate-950/80 backdrop-blur-xl rounded-full text-white flex items-center gap-2 border border-emerald-500/30 transition-all">
              <span>More Details</span>
              <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}