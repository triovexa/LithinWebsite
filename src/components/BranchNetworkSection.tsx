import { useState } from 'react';
import { MapPin, Mail, Phone, ChevronRight, Star } from 'lucide-react';

interface BranchInfo {
  id: string;
  name: string;
  type: string;
  address: string;
  email: string;
  phone: string;
  cx: number; // SVG/CSS Percentage X (0-100)
  cy: number; // SVG/CSS Percentage Y (0-100)
  isPrimary: boolean;
}

interface BranchNetworkSectionProps {
  showMap?: boolean;
}

export default function BranchNetworkSection({ showMap = true }: BranchNetworkSectionProps) {
  const branches: BranchInfo[] = [
    {
      id: 'bangalore',
      name: 'Bangalore (Head Office)',
      type: 'Corporate Head Office & Interstate Transport Hub',
      address: 'Peenya Industrial Area & Kalasipalyam, Bengaluru - 560058',
      email: 'bangalore@lithintransport.com',
      phone: '+91 95667 38884',
      cx: 29.8,
      cy: 82.5,
      isPrimary: true,
    },
    {
      id: 'chennai',
      name: 'Chennai (Branch Office)',
      type: 'Regional Branch Office & Seaport Freight Hub',
      address: 'GST Road, Guindy Industrial Estate, Chennai - 600032',
      email: 'chennai@lithintransport.com',
      phone: '+91 93423 17996',
      cx: 40.5,
      cy: 80.5,
      isPrimary: false,
    },
    {
      id: 'tirupur',
      name: 'Tirupur (Branch Office)',
      type: 'Regional Branch Office & Textile Freight Terminal',
      address: 'Palladam Road, Garment Industry Corridor, Tirupur - 641604',
      email: 'tirupur@lithintransport.com',
      phone: '+91 95667 38884 / +91 93423 17996',
      cx: 30.2,
      cy: 88.5,
      isPrimary: false,
    },
  ];

  const [hoveredBranch, setHoveredBranch] = useState<BranchInfo | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<BranchInfo | null>(null);

  return (
    <section id="branch-network" className="my-16 scroll-mt-24 flex flex-col gap-12">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans drop-shadow-[0_4px_25px_rgba(16,185,129,0.35)]">
            Our Head Office & Branches
          </h2>
        </div>
      </div>

      {/* CENTERED MAP CONTAINER - UNBOXED & FLOATING FREELY ON BACKGROUND */}
      {showMap && (
        <div className="relative flex flex-col items-center justify-center py-4">
        
        {/* MAP DISPLAY WITH BLINKING LIGHTS & HOVER TOOLTIPS */}
        <div className="relative w-full max-w-[650px] aspect-[980/919] flex items-center justify-center py-2">
          {/* Transparent Glowing Vector Map Image */}
          <img
            src="/india-map.png"
            alt="Lithin Transport Branch Network Map"
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(16,185,129,0.5)]"
          />

          {/* Blinking Location Light Hotspots */}
          {branches.map((b) => {
            const isHovered = hoveredBranch?.id === b.id;
            const isSelected = selectedBranch?.id === b.id;
            const active = isHovered || isSelected;

            return (
              <div
                key={b.id}
                style={{ left: `${b.cx}%`, top: `${b.cy}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                onMouseEnter={() => setHoveredBranch(b)}
                onMouseLeave={() => setHoveredBranch(null)}
                onClick={() => setSelectedBranch(b)}
                title={b.name}
              >
                {/* Glowing Blinking Dot Light */}
                <div className="relative flex items-center justify-center p-2">
                  <span
                    className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                      b.isPrimary ? 'bg-amber-400' : 'bg-emerald-400'
                    }`}
                  />
                  <span
                    className={`relative w-4 h-4 rounded-full border-2 border-white shadow-xl transition-all duration-300 group-hover:scale-125 ${
                      b.isPrimary
                        ? 'bg-amber-400 shadow-amber-500/90'
                        : 'bg-emerald-400 shadow-emerald-500/90'
                    } ${active ? 'scale-125 ring-4 ring-white/80' : ''}`}
                  />
                </div>

                {/* HOVER / TOUCH POPUP TOOLTIP AT LOCATION DOT */}
                <div
                  className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 p-3.5 rounded-xl bg-slate-950/95 backdrop-blur-xl border ${
                    b.isPrimary ? 'border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.5)]' : 'border-emerald-400/80 shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                  } text-white pointer-events-auto transition-all duration-200 z-30 ${
                    active ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible'
                  }`}
                >
                  {/* Arrow pointing down to dot */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent ${
                    b.isPrimary ? 'border-t-amber-400/80' : 'border-t-emerald-400/80'
                  }`} />

                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="font-extrabold text-xs text-white uppercase tracking-wider flex items-center gap-1">
                      {b.isPrimary && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                      {b.name}
                    </span>
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                      b.isPrimary ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    }`}>
                      {b.isPrimary ? 'Head Office' : 'Branch'}
                    </span>
                  </div>

                  <p className="text-[10px] text-gray-300 mb-2 leading-tight">
                    {b.address}
                  </p>

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

      {/* 3 OFFICIAL OFFICE CARDS (HEAD OFFICE BANGALORE, BRANCH CHENNAI, BRANCH TIRUPUR) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Bangalore Head Office */}
        <div
          onClick={() => setSelectedBranch(branches[0])}
          className={`p-6 sm:p-8 rounded-3xl glass-panel border ${
            hoveredBranch?.id === 'bangalore' || selectedBranch?.id === 'bangalore'
              ? 'border-emerald-400/80 bg-slate-950/70 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
              : 'border-emerald-500/20 bg-slate-950/50 hover:border-emerald-400/50'
          } backdrop-blur-xl shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/30">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3 h-3 fill-emerald-400" />
                HEAD OFFICE
              </span>
            </div>

            <h3 className="text-xl font-bold text-white uppercase tracking-tight font-sans group-hover:text-emerald-400 transition-colors">
              Bangalore
            </h3>
            <p className="text-xs text-emerald-400 font-bold mt-1 mb-4">
              Corporate Head Office & Central Hub
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919566738884" className="hover:text-emerald-300 font-bold">
                  +91 95667 38884
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:bangalore@lithintransport.com" className="hover:text-emerald-300 font-semibold">
                  bangalore@lithintransport.com
                </a>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-white/10 text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  Peenya Industrial Area & Kalasipalyam, Bengaluru - 560058
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
            <span>Select Head Office</span>
            <ChevronRight className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

        {/* Card 2: Chennai Branch Office */}
        <div
          onClick={() => setSelectedBranch(branches[1])}
          className={`p-6 sm:p-8 rounded-3xl glass-panel border ${
            hoveredBranch?.id === 'chennai' || selectedBranch?.id === 'chennai'
              ? 'border-emerald-400/80 bg-slate-950/70 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
              : 'border-emerald-500/20 bg-slate-950/50 hover:border-emerald-400/50'
          } backdrop-blur-xl shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/30">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider">
                BRANCH OFFICE
              </span>
            </div>

            <h3 className="text-xl font-bold text-white uppercase tracking-tight font-sans group-hover:text-emerald-400 transition-colors">
              Chennai
            </h3>
            <p className="text-xs text-emerald-400 font-bold mt-1 mb-4">
              Regional Branch Office & Seaport Hub
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919342317996" className="hover:text-emerald-300 font-bold">
                  +91 93423 17996
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
            <ChevronRight className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

        {/* Card 3: Tirupur Branch Office */}
        <div
          onClick={() => setSelectedBranch(branches[2])}
          className={`p-6 sm:p-8 rounded-3xl glass-panel border ${
            hoveredBranch?.id === 'tirupur' || selectedBranch?.id === 'tirupur'
              ? 'border-emerald-400/80 bg-slate-950/70 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
              : 'border-emerald-500/20 bg-slate-950/50 hover:border-emerald-400/50'
          } backdrop-blur-xl shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/30">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider">
                BRANCH OFFICE
              </span>
            </div>

            <h3 className="text-xl font-bold text-white uppercase tracking-tight font-sans group-hover:text-emerald-400 transition-colors">
              Tirupur
            </h3>
            <p className="text-xs text-emerald-400 font-bold mt-1 mb-4">
              Regional Branch Office & Textile Cargo Hub
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919566738884" className="hover:text-emerald-300 font-bold">
                  +91 95667 38884
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
            <ChevronRight className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

      </div>

    </section>
  );
}
