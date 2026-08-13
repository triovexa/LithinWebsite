import { Building2, MapPin, Calendar, ShieldCheck } from 'lucide-react';

export default function AboutPage() {

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-10">

      {/* PAGE HEADER & SUBTITLE */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          Commercial Transport & Logistics
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight uppercase font-sans">
          ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">LITHIN TRANSPORT</span>
        </h1>
        <p className="text-gray-300 mt-3 text-base sm:text-lg leading-relaxed font-normal">
          Reliable Transport Contractor & Freight Booking Agency serving commercial industries across India since 2020.
        </p>
      </div>

      {/* TOP HERO BANNER (Full Trucks Display with 0 Black Overlay & Full Mobile View) */}
      <div className="relative w-full aspect-[16/9] sm:aspect-auto sm:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-[#060b1e] group flex items-center justify-center">
        <img
          src="/office2.png"
          alt="Lithin Transport Operations Fleet & Headquarters"
          className="w-full h-full object-contain sm:object-cover object-center group-hover:scale-103 transition-transform duration-700"
        />
        
        {/* Top-Left Glassmorphic Badge */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10">
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-[#060b1e]/85 backdrop-blur-md border border-emerald-500/40 text-white  font-black text-[10px] sm:text-xs  tracking-wider shadow-2xl flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Since 2020</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT SECTION (Split Layout: Text on Left, office1.png Image on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/20 bg-gradient-to-b from-[#090e24]/90 to-[#060814] shadow-2xl">
        
        {/* Left Side: Elaborated Simple English Content */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-1 w-10 bg-emerald-400 rounded-full" />
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">
                Company Profile
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
              About Us
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-2" />
          </div>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
            Established in <strong className="text-emerald-400 font-bold">2020</strong>, <strong className="text-white">Lithin Transport</strong> is a premier commercial <strong className="text-emerald-300">Transport Contractor and Freight Booking Agency</strong>. We specialize in providing heavy-duty, weather-proof container trucks for seamless goods transportation across South India and national highway industrial corridors.
          </p>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            With our <strong className="text-white">Head Office located in Bangalore</strong> and strategically positioned <strong className="text-white">Branch Offices in Tirupur and Chennai</strong>, we offer end-to-end logistics coordination for industrial manufacturers, garment exporters, commercial distributors, and retail businesses.
          </p>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            We manage a complete commercial fleet of sealed container trucks ranging from <strong className="text-emerald-400">9ft, 10ft, 14ft, 17ft, 20ft, 22ft, 24ft, to 32ft MXL</strong>. Our 24/7 dedicated control desk guarantees safe cargo lashing, zero transit damage, and on-time delivery for all your freight consignments.
          </p>
        </div>

        {/* Right Side: office1.png Image (Matches Reference Screenshot Layout) */}
        <div className="lg:col-span-5 relative group rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-[#060b1e]">
          <div data-no-particles="true" className="relative h-80 sm:h-[420px] overflow-hidden">
            <img
              src="/office1.png"
              alt="Lithin Transport Corporate Office Reception"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-transparent to-transparent opacity-80" />
            
            {/* Image Overlay Label */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#060b1e]/90 backdrop-blur-md border border-emerald-500/30">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block">
                HEAD OFFICE FACILITY
              </span>
              <h3 className="text-sm font-black text-white uppercase mt-0.5">
                Lithin Transport Corporate Office — Bangalore
              </h3>
            </div>
          </div>
        </div>

      </div>

      {/* KEY HIGHLIGHTS CARDS (Simple & Direct) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-6 rounded-2xl bg-[#090d24] border border-emerald-500/20 flex flex-col gap-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider">Business Type</span>
          <h4 className="text-sm font-black text-white uppercase">Transport Contractor & Booking Agency</h4>
        </div>

        <div className="p-6 rounded-2xl bg-[#090d24] border border-emerald-500/20 flex flex-col gap-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider">Established Year</span>
          <h4 className="text-sm font-black text-white uppercase">Started in 2020</h4>
        </div>

        <div className="p-6 rounded-2xl bg-[#090d24] border border-emerald-500/20 flex flex-col gap-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider">Office Network</span>
          <h4 className="text-sm font-black text-white uppercase">Head Office: Bangalore</h4>
          <p className="text-xs font-semibold text-gray-300">Branches: Tirupur & Chennai</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#090d24] border border-emerald-500/20 flex flex-col gap-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider">Service Guarantee</span>
          <h4 className="text-sm font-black text-white uppercase">Safe & Timely Sealed Transit</h4>
        </div>
      </div>
    </div>
  );
}
