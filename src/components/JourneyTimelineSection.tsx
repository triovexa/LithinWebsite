import { useState, useEffect } from 'react';
import { Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';
import SparkleHeading from './SparkleHeading';

interface Milestone {
  year: string;
  title: string;
  subTag: string;
  sources: string[];
  highlight: string;
}

export default function JourneyTimelineSection() {
  const milestones: Milestone[] = [
    {
      year: '2020',
      title: 'FOUNDED IN BANGALORE',
      subTag: 'HEADQUARTERS ESTABLISHED AT OMBR LAYOUT',
      sources: ['/2020.jpg', '/2020.png', '/office4.png'],
      highlight: 'Bangalore HQ Founded',
    },
    {
      year: '2021',
      title: 'SOUTH INDIA FULL EXPRESS DELIVERY',
      subTag: 'INTERSTATE FREIGHT NETWORK LAUNCHED',
      sources: ['/2021.png', '/2021.jpg', '/transport-contractor.jpg'],
      highlight: 'South India Delivery',
    },
    {
      year: '2022',
      title: 'MRF TYRES TRANSPORT PARTNERSHIP',
      subTag: 'OFFICIAL FLEET CONTRACT PARTNER',
      sources: [ '/2022.png', '/2022.jpg', '/vecihle_32ft.png'],
      highlight: 'MRF Tyres Partner',
    },
    {
      year: '2023',
      title: 'CHENNAI BRANCH OPENING',
      subTag: 'VADAPERUMBAKKAM SEAPORT DISPATCH HUB',
      sources: ['/2023.png', '/2023.jpg', '/office2.png'],
      highlight: 'Chennai Branch Launched',
    },
    {
      year: '2024',
      title: 'ASHOK LEYLAND LOGISTICS PARTNER',
      subTag: 'COMMERCIAL VEHICLE HAULAGE AGREEMENT',
      sources: ['/2024.png', '/2024.jpg', '/booking-agency.jpg'],
      highlight: 'Ashok Leyland Logistics',
    },
    {
      year: '2025',
      title: 'TIRUPUR BRANCH OPENING',
      subTag: 'TEXTILE & GARMENT EXPORT DISPATCH DESK',
      sources: ['/2025.png', '/2025.jpg', '/office3.png'],
      highlight: 'Tirupur Branch Launched',
    },
    {
      year: '2026',
      title: 'PAN-INDIA ALL INDIA DELIVERY OPERATIONS',
      subTag: '500+ INDUSTRIAL DISTRICTS COVERED',
      sources: ['/2026.png', '/office1.png'],
      highlight: 'All India Delivery',
    },
  ];

  const [activeYear, setActiveYear] = useState<string>('2026');
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, number>>({});
  const [typedTitle, setTypedTitle] = useState('');
  const [isTypingTitle, setIsTypingTitle] = useState(false);

  const currentMilestone = milestones.find((m) => m.year === activeYear) || milestones[milestones.length - 1];
  const activeIndex = milestones.findIndex((m) => m.year === activeYear);

  // Typewriter effect on title when activeYear changes
  useEffect(() => {
    setIsTypingTitle(true);
    setTypedTitle('');
    let i = 0;
    const fullText = currentMilestone.title;

    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedTitle(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setIsTypingTitle(false);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [activeYear, currentMilestone.title]);

  // Handle fallback images if custom file is missing
  const getImgSrc = (m: Milestone) => {
    const errIdx = imgErrorMap[m.year] || 0;
    return m.sources[errIdx] || m.sources[m.sources.length - 1];
  };

  const handleImgError = (year: string) => {
    setImgErrorMap((prev) => {
      const current = prev[year] || 0;
      return { ...prev, [year]: current + 1 };
    });
  };

  return (
    <section id="our-journey" className="my-10 sm:my-14 scroll-mt-28 flex flex-col gap-6 sm:gap-8 relative z-10">
      
      {/* SECTION HEADER (Underline Divider Line Removed as Requested) */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        <SparkleHeading text="Our Growth Journey" />
      </div>

      {/* TIMELINE & DISPLAY CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* LEFT COLUMN: VERTICAL TIMELINE SELECTOR */}
        <div className="lg:col-span-4 p-5 sm:p-6 rounded-3xl glass-panel bg-[#060b1e]/90 border border-emerald-500/30 shadow-2xl flex flex-col justify-between">
          <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2 pb-3 border-b border-white/10">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Select Milestone Year</span>
          </div>

          <div className="relative flex flex-col gap-3 py-2">
            {/* Vertical Connecting Line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-slate-800 rounded-full z-0" />

            {milestones.map((item) => {
              const isActive = item.year === activeYear;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`relative z-10 flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 cursor-pointer text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500/20 to-transparent border border-emerald-400/60 shadow-lg translate-x-1.5'
                      : 'hover:bg-white/5 opacity-75 hover:opacity-100'
                  }`}
                >
                  {/* Year Node Circle */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs transition-all shrink-0 ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/30 scale-110 shadow-[0_0_15px_rgba(251,191,36,0.6)]'
                        : 'bg-slate-800 text-gray-400 border border-white/10'
                    }`}
                  >
                    {isActive ? '✓' : ''}
                  </div>

                  {/* Year & Short Label */}
                  <div className="flex flex-col">
                    <span
                      className={`text-sm sm:text-base font-black tracking-wide ${
                        isActive ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span className="text-[11px] font-bold text-gray-300 line-clamp-1">
                      {item.highlight}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-RES LANDMARK / MILESTONE CARD DISPLAY */}
        <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-slate-950 flex flex-col justify-end group">
          
          {/* Background Image with HD Zoom Effect */}
          <div className="absolute inset-0 z-0">
            <img
              key={currentMilestone.year}
              src={getImgSrc(currentMilestone)}
              onError={() => handleImgError(currentMilestone.year)}
              alt={currentMilestone.title}
              className="w-full h-full object-cover transition-all duration-700 brightness-95 contrast-105 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay for 100% Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040614] via-[#040614]/75 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 p-6 sm:p-10 flex flex-col gap-4 animate-in fade-in duration-300">
            
            {/* Year Pill */}
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-widest shadow-xl font-mono">
                {currentMilestone.year}
              </span>
            </div>

            {/* Big Main Title with Character-by-Character Typewriter Animation on Year Change */}
            <div className="flex flex-col gap-2 min-h-[4.5rem] justify-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-wider font-sans leading-tight drop-shadow-lg flex items-center flex-wrap break-words">
                <span>{typedTitle}</span>
                {isTypingTitle && (
                  <span className="inline-block w-1.5 sm:w-2.5 h-6 sm:h-8 ml-2 bg-amber-400 animate-pulse rounded-full align-middle shrink-0" />
                )}
              </h3>
              
              {/* Green Sub-Header Tag */}
              <div className="w-fit px-3.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md mt-1">
                {currentMilestone.subTag}
              </div>
            </div>

            {/* Bottom Prev / Next Navigation Bar */}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/10 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-bold">Lithin Transport Growth</span>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  disabled={activeIndex === 0}
                  onClick={() => setActiveYear(milestones[activeIndex - 1].year)}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-emerald-500 text-white hover:text-slate-950 font-bold text-xs transition-all disabled:opacity-30 cursor-pointer"
                >
                  Prev
                </button>
                <button
                  disabled={activeIndex === milestones.length - 1}
                  onClick={() => setActiveYear(milestones[activeIndex + 1].year)}
                  className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all disabled:opacity-30 cursor-pointer flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
