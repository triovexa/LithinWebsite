import { ShieldCheck, Check, X, Sparkles, Truck, Clock, MapPin, DollarSign, Lock, FileText } from 'lucide-react';
import SparkleHeading from './SparkleHeading';

interface ComparisonItem {
  id: number;
  feature: string;
  lithinValue: string;
  lithinPass: boolean;
  othersValue: string;
  othersPass: boolean;
  icon: any;
  badge?: string;
  badgeColor?: 'amber' | 'emerald' | 'cyan';
}

export default function WhyChooseUsSection() {
  const comparisonList: ComparisonItem[] = [
    {
      id: 1,
      feature: 'Truck Placement Speed',
      lithinValue: 'Book & Allot in 30 Mins',
      lithinPass: true,
      othersValue: '3 - 6 Hours Delay',
      othersPass: false,
      icon: Clock,
      badge: '30 Mins Speed',
      badgeColor: 'amber',
    },
    {
      id: 2,
      feature: 'Fleet Variety & Sizes',
      lithinValue: 'All Container Types (7ft - 32ft MXL)',
      lithinPass: true,
      othersValue: 'Limited Open Trucks Only',
      othersPass: false,
      icon: Truck,
      badge: 'Full Fleet',
      badgeColor: 'cyan',
    },
    {
      id: 3,
      feature: 'Pan-India Coverage',
      lithinValue: 'Deliver Across All 500+ Districts',
      lithinPass: true,
      othersValue: 'Restricted Routes Only',
      othersPass: false,
      icon: MapPin,
      badge: 'All India',
      badgeColor: 'emerald',
    },
    {
      id: 4,
      feature: 'Freight Pricing Model',
      lithinValue: 'Direct Carrier Rates (No Commission)',
      lithinPass: true,
      othersValue: 'High Broker Commission Markup',
      othersPass: false,
      icon: DollarSign,
      badge: 'Direct Rates',
      badgeColor: 'amber',
    },
    {
      id: 5,
      feature: 'Vehicle & Payload Tracking',
      lithinValue: '24x7 Live GPS & WhatsApp Updates',
      lithinPass: true,
      othersValue: 'Unreliable Phone Calls',
      othersPass: false,
      icon: Sparkles,
      badge: '24/7 Live GPS',
      badgeColor: 'cyan',
    },
    {
      id: 6,
      feature: 'Payload Protection',
      lithinValue: '100% Weatherproof Sealed Containers',
      lithinPass: true,
      othersValue: 'Open Tarpaulin Risks',
      othersPass: false,
      icon: Lock,
      badge: 'Weatherproof',
      badgeColor: 'emerald',
    },
    {
      id: 7,
      feature: 'Trip Documents & LR Access',
      lithinValue: 'Instant Digital LR & POD Copy',
      lithinPass: true,
      othersValue: 'Delayed Courier Delivery',
      othersPass: false,
      icon: FileText,
      badge: 'Instant POD',
      badgeColor: 'amber',
    },
  ];

  return (
    <section id="why-choose-us" className="my-10 sm:my-14 scroll-mt-28 flex flex-col gap-8 relative z-10">
      
      {/* SECTION HEADER (Underline Divider Line Removed) */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        <SparkleHeading text="Why Choose Lithin Transport?" />
      </div>

      {/* COMPARISON CONTAINER */}
      <div className="rounded-3xl glass-panel bg-gradient-to-b from-[#081328]/95 via-[#050a1d]/95 to-[#030614]/95 border-2 border-emerald-500/35 p-3.5 sm:p-8 shadow-2xl overflow-hidden w-full">
        
        {/* 1. MOBILE RESPONSIVE CARD VIEW (NO HORIZONTAL SCROLLBAR - FITS 100% MOBILE WIDTH) */}
        <div className="flex flex-col gap-3.5 md:hidden w-full">
          {/* Mobile Header Banner */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-emerald-500/30 text-center">
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40">
              <span className="text-xs font-black text-emerald-300 uppercase tracking-wide flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Lithin Transport
              </span>
              <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider">Direct Carrier</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900/60 border border-white/10">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">Others / Brokers</span>
              <span className="text-[9px] font-medium text-gray-400">Unverified</span>
            </div>
          </div>

          {/* Mobile Feature Cards */}
          {comparisonList.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-500/25 flex flex-col gap-2.5 shadow-md">
                
                {/* Feature Header */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <IconComp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                    {item.feature}
                  </span>
                </div>

                {/* Lithin vs Others Comparison Rows */}
                <div className="flex flex-col gap-2 pt-0.5">
                  {/* Lithin Advantage Row */}
                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 font-black mt-0.5 shadow-sm shadow-emerald-500/40">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">Lithin Transport</span>
                      <span className="text-xs font-bold text-white break-words">{item.lithinValue}</span>
                    </div>
                  </div>

                  {/* Others Drawback Row */}
                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <div className="w-5 h-5 rounded-full bg-rose-950 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase text-rose-400 tracking-wider">Others / Brokers</span>
                      <span className="text-xs font-medium text-gray-300 break-words">{item.othersValue}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 2. DESKTOP TABLE VIEW (HIDDEN ON MOBILE, VISIBLE ON TABLET & DESKTOP) */}
        <div className="hidden md:block overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b-2 border-emerald-500/30">
                <th className="py-4 px-5 text-sm font-black text-white uppercase tracking-wider w-5/12 font-sans">
                  Key Transport Features
                </th>
                
                {/* LITHIN TRANSPORT COLUMN */}
                <th className="py-4 px-5 w-4/12 bg-emerald-950/40 rounded-t-2xl border-x border-t border-emerald-500/40 text-center">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-base sm:text-lg font-black text-emerald-300 uppercase tracking-wide font-sans flex items-center gap-1.5">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <span>Lithin Transport</span>
                    </span>
                    <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                      Direct Carrier
                    </span>
                  </div>
                </th>

                {/* OTHERS / BROKERS COLUMN */}
                <th className="py-4 px-5 w-3/12 text-center text-gray-400 font-bold uppercase tracking-wider text-xs">
                  <div className="flex flex-col items-center justify-center gap-0.5">
                    <span className="text-sm font-extrabold text-gray-300">Others / Brokers</span>
                    <span className="text-[10px] text-gray-400 font-medium">Unverified Channels</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body Rows */}
            <tbody className="divide-y divide-white/10">
              {comparisonList.map((item) => {
                const IconComp = item.icon;
                return (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                    
                    {/* Feature Title & Icon */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-110 transition-transform">
                          <IconComp className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {item.feature}
                          </span>
                          <span className="text-[11px] text-gray-300 font-normal">
                            {item.lithinValue}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* LITHIN TRANSPORT CELL */}
                    <td className="py-4 px-4 sm:px-6 bg-emerald-950/20 border-x border-emerald-500/20">
                      <div className="flex items-center justify-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30 font-black">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        
                        {item.badge && (
                          <span
                            className={`text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm shrink-0 ${
                              item.badgeColor === 'amber'
                                ? 'bg-amber-400/15 border-amber-400/40 text-amber-300'
                                : item.badgeColor === 'cyan'
                                ? 'bg-cyan-400/15 border-cyan-400/40 text-cyan-300'
                                : 'bg-emerald-400/15 border-emerald-400/40 text-emerald-300'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* OTHERS / BROKERS CELL */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="flex items-center justify-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0">
                          <X className="w-4 h-4 stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold text-gray-300">
                          {item.othersValue}
                        </span>
                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Direct carrier contracts eliminate middleman markups and guarantee 100% vehicle safety.</span>
          </div>
        </div>

      </div>

    </section>
  );
}
