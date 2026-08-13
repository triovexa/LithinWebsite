import { useState } from 'react';
import { MapPin, Mail, Phone, ChevronRight, Building2, ShieldCheck, Star } from 'lucide-react';

interface BranchInfo {
  id: string;
  name: string;
  type: string;
  address: string;
  email: string;
  phone: string;
  cx: number; // SVG Percentage X (0-100)
  cy: number; // SVG Percentage Y (0-100)
  isPrimary: boolean;
}

export default function BranchNetworkSection() {
  const branches: BranchInfo[] = [
    {
      id: 'bangalore',
      name: 'Bangalore (Head Office)',
      type: 'Corporate Head Office & Interstate Transport Hub',
      address: 'Peenya Industrial Area & Kalasipalyam, Bengaluru - 560058',
      email: 'bangalore@lithintransport.com',
      phone: '+91 98765 43210',
      cx: 30.9,
      cy: 74.6,
      isPrimary: true,
    },
    {
      id: 'chennai',
      name: 'Chennai (Branch Office)',
      type: 'Regional Branch Office & Seaport Freight Hub',
      address: 'GST Road, Guindy Industrial Estate, Chennai - 600032',
      email: 'chennai@lithintransport.com',
      phone: '+91 98765 43211',
      cx: 42.3,
      cy: 77.0,
      isPrimary: false,
    },
    {
      id: 'tirupur',
      name: 'Tirupur (Branch Office)',
      type: 'Regional Branch Office & Textile Freight Terminal',
      address: 'Palladam Road, Garment Industry Corridor, Tirupur - 641604',
      email: 'tirupur@lithintransport.com',
      phone: '+91 98765 43212',
      cx: 30.9,
      cy: 85.1,
      isPrimary: false,
    },
  ];

  const [selectedBranch, setSelectedBranch] = useState<BranchInfo | null>(null);
  const [hoveredBranch, setHoveredBranch] = useState<BranchInfo | null>(null);

  const activeDisplayBranch = hoveredBranch || selectedBranch || branches[0];

  return (
    <section id="branch-network" className="my-16 scroll-mt-24 flex flex-col gap-12">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 w-fit">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Official Lithin Transport Offices
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight font-sans">
            Our Head Office & Branches
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 font-normal max-w-2xl">
            Lithin Transport operates its primary Corporate Head Office in Bangalore alongside strategic Regional Branch Offices in Chennai and Tirupur.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-950/40 border border-emerald-500/20 px-4 py-2 rounded-2xl text-xs text-emerald-400 font-bold uppercase w-fit">
          <Building2 className="w-4 h-4 text-emerald-400" />
          <span>3 Official Transport Hubs</span>
        </div>
      </div>

      {/* INTERACTIVE INDIA MAP & BRANCH HOVER CARD */}
      <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-emerald-500/20 bg-slate-950/20 backdrop-blur-md shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Map Header & Interactive Instructions */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
              Interactive Office Map
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 uppercase font-sans tracking-tight">
              Official Network <span className="text-emerald-400">Locations</span>
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
              Hover over or click any glowing office marker on the map to view direct phone numbers, email desks, and office address details.
            </p>
          </div>

          {/* ACTIVE HOVER CARD - STYLED WITH EMERALD/AMBER BORDER & DARK GLASS */}
          <div className={`p-6 rounded-2xl bg-[#060b1e]/90 backdrop-blur-xl border-2 ${
            activeDisplayBranch.isPrimary ? 'border-amber-500/80 shadow-[0_0_30px_rgba(245,158,11,0.25)]' : 'border-emerald-500/80 shadow-[0_0_30px_rgba(16,185,129,0.25)]'
          } transition-all duration-300 relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-32 h-32 ${activeDisplayBranch.isPrimary ? 'bg-amber-500/10' : 'bg-emerald-500/10'} rounded-full blur-2xl pointer-events-none`} />
            
            <div className="flex items-center justify-between gap-2 mb-2">
              <h4 className="text-lg font-black text-white uppercase tracking-wide font-sans flex items-center gap-2">
                {activeDisplayBranch.isPrimary && <Star className="w-4 h-4 text-amber-400 fill-amber-400" />}
                {activeDisplayBranch.name}
              </h4>
              <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shrink-0 border ${
                activeDisplayBranch.isPrimary
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
              }`}>
                {activeDisplayBranch.isPrimary ? 'Head Office' : 'Branch Office'}
              </span>
            </div>

            <p className={`text-xs font-bold mb-4 ${activeDisplayBranch.isPrimary ? 'text-amber-400' : 'text-emerald-400'}`}>
              {activeDisplayBranch.type}
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-gray-200">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${activeDisplayBranch.email}`} className="hover:text-emerald-300 font-semibold transition-colors">
                  {activeDisplayBranch.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${activeDisplayBranch.phone}`} className="hover:text-emerald-300 font-bold tracking-wider transition-colors">
                  {activeDisplayBranch.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-white/10 text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">{activeDisplayBranch.address}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping inline-block" />
              <span>Bangalore Head Office (HQ)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span>Branch Offices (Chennai, Tirupur)</span>
            </div>
          </div>
        </div>

        {/* AUTHENTIC INDIA MAP IMAGE DISPLAY */}
        <div className="lg:col-span-7 relative flex items-center justify-center p-2 min-h-[460px] sm:min-h-[540px]">
          <div className="w-full h-full relative flex items-center justify-center bg-[#030712]/90 rounded-3xl border-2 border-emerald-500/40 p-3 sm:p-5 shadow-[0_0_40px_rgba(16,185,129,0.2)] overflow-hidden">
            
            <div className="relative w-full max-w-[634px] aspect-[634/597] flex items-center justify-center">
              {/* Exact India Map Image with only Bangalore HQ, Chennai Branch, Tirupur Branch */}
              <img
                src="/india-map.png"
                alt="Official Lithin Transport Office Map"
                className="w-full h-full object-contain rounded-2xl drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]"
              />

              {/* Interactive Office Hotspot Overlays - ONLY 3 GLOWING DOTS (NO TEXT ON MAP) */}
              {branches.map((b) => {
                const isActive = activeDisplayBranch.id === b.id;
                return (
                  <div
                    key={b.id}
                    style={{ left: `${b.cx}%`, top: `${b.cy}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10 p-3"
                    onMouseEnter={() => setHoveredBranch(b)}
                    onMouseLeave={() => setHoveredBranch(null)}
                    onClick={() => setSelectedBranch(b)}
                    title={b.name}
                  >
                    {/* Glowing Pulsing Target Dot Only */}
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute w-9 h-9 rounded-full animate-ping opacity-75 ${
                          b.isPrimary ? 'bg-amber-400' : 'bg-emerald-400'
                        }`}
                      />
                      <span
                        className={`relative w-5 h-5 rounded-full border-2 border-white shadow-2xl transition-all duration-300 group-hover:scale-150 ${
                          b.isPrimary
                            ? 'bg-amber-400 shadow-amber-500/90'
                            : 'bg-emerald-400 shadow-emerald-500/90'
                        } ${isActive ? 'scale-125 ring-4 ring-white/60' : ''}`}
                      />
                    </div>
                  </div>
                );
              })}

              {/* Clickable WhatsApp Button Overlay matching exact position on image */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[3%] right-[3%] w-[28%] h-[8%] rounded-full cursor-pointer z-20 hover:ring-2 hover:ring-emerald-400/80 transition-all"
                title="Chat with Lithin Transport on WhatsApp"
              />
            </div>

          </div>
        </div>

      </div>

      {/* 3 OFFICIAL OFFICE CARDS (HEAD OFFICE BANGALORE, BRANCH CHENNAI, BRANCH TIRUPUR) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Bangalore Head Office */}
        <div
          onClick={() => setSelectedBranch(branches[0])}
          className={`p-6 sm:p-8 rounded-3xl glass-panel border ${
            activeDisplayBranch.id === 'bangalore'
              ? 'border-amber-400/80 bg-slate-950/60 shadow-[0_0_30px_rgba(245,158,11,0.2)]'
              : 'border-emerald-500/20 bg-slate-950/20 hover:border-amber-400/50'
          } backdrop-blur-md shadow-xl transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-500/30">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400" />
                HEAD OFFICE
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
            </div>

            <h3 className="text-xl font-black text-white uppercase tracking-tight font-sans group-hover:text-amber-400 transition-colors">
              Bangalore
            </h3>
            <p className="text-xs text-amber-400 font-bold mt-1 mb-4">
              Corporate Head Office & Central Hub
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-amber-300 font-bold">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:bangalore@lithintransport.com" className="hover:text-amber-300 font-semibold">
                  bangalore@lithintransport.com
                </a>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-white/10 text-gray-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  Peenya Industrial Area & Kalasipalyam, Bengaluru - 560058
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-bold group-hover:translate-x-1 transition-transform">
            <span>Select Head Office</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 2: Chennai Branch Office */}
        <div
          onClick={() => setSelectedBranch(branches[1])}
          className={`p-6 sm:p-8 rounded-3xl glass-panel border ${
            activeDisplayBranch.id === 'chennai'
              ? 'border-emerald-400/80 bg-slate-950/60 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
              : 'border-emerald-500/20 bg-slate-950/20 hover:border-emerald-400/50'
          } backdrop-blur-md shadow-xl transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/30">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black uppercase tracking-wider">
                BRANCH OFFICE
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            <h3 className="text-xl font-black text-white uppercase tracking-tight font-sans group-hover:text-emerald-400 transition-colors">
              Chennai
            </h3>
            <p className="text-xs text-emerald-400 font-bold mt-1 mb-4">
              Regional Branch Office & Seaport Hub
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919876543211" className="hover:text-emerald-300 font-bold">
                  +91 98765 43211
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:chennai@lithintransport.com" className="hover:text-emerald-300 font-semibold">
                  chennai@lithintransport.com
                </a>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-white/10 text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  GST Road, Guindy Industrial Estate, Chennai - 600032
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
            <span>Select Chennai Branch</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 3: Tirupur Branch Office */}
        <div
          onClick={() => setSelectedBranch(branches[2])}
          className={`p-6 sm:p-8 rounded-3xl glass-panel border ${
            activeDisplayBranch.id === 'tirupur'
              ? 'border-emerald-400/80 bg-slate-950/60 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
              : 'border-emerald-500/20 bg-slate-950/20 hover:border-emerald-400/50'
          } backdrop-blur-md shadow-xl transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/30">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black uppercase tracking-wider">
                BRANCH OFFICE
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            <h3 className="text-xl font-black text-white uppercase tracking-tight font-sans group-hover:text-emerald-400 transition-colors">
              Tirupur
            </h3>
            <p className="text-xs text-emerald-400 font-bold mt-1 mb-4">
              Regional Branch Office & Textile Cargo Hub
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919876543212" className="hover:text-emerald-300 font-bold">
                  +91 98765 43212
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:tirupur@lithintransport.com" className="hover:text-emerald-300 font-semibold">
                  tirupur@lithintransport.com
                </a>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-white/10 text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  Palladam Road, Garment Industry Corridor, Tirupur - 641604
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
            <span>Select Tirupur Branch</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

      </div>

    </section>
  );
}
