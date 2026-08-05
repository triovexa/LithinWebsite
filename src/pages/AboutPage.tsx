import { Award, Navigation, Users, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          Company Overview
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight uppercase font-sans">
          Who We Are
        </h1>
        <p className="text-gray-200 mt-4 text-base sm:text-xl leading-relaxed font-medium">
          Lithin Transport is committed to providing reliable, safe, and efficient transportation solutions for businesses and customers.
        </p>
      </div>

      {/* 4 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/15 flex flex-col gap-4 hover:border-emerald-400/50 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">Company Experience</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Proven track record in freight handling and industrial cargo management across South India.
          </p>
        </div>

        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/15 flex flex-col gap-4 hover:border-emerald-400/50 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
            <Navigation className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">Service Coverage</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Extensive transport network linking major manufacturing corridors and commercial ports.
          </p>
        </div>

        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/15 flex flex-col gap-4 hover:border-emerald-400/50 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">Customer Satisfaction</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Dedicated logistics managers ensuring customized customer care and prompt updates.
          </p>
        </div>

        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/15 flex flex-col gap-4 hover:border-emerald-400/50 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">Safety Commitment</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Routine vehicle inspections, double-driver long haul rotations, and certified cargo lashing.
          </p>
        </div>
      </div>

      {/* Numbers Section */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/20 bg-gradient-to-r from-[#081329] via-[#050b1e] to-[#081329] shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x divide-white/10">
          <div className="px-4">
            <span className="text-4xl sm:text-6xl font-black text-white font-sans tracking-tight block">10+</span>
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest mt-2 block">Years Experience</span>
          </div>

          <div className="px-4">
            <span className="text-4xl sm:text-6xl font-black text-white font-sans tracking-tight block">500+</span>
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest mt-2 block">Successful Trips</span>
          </div>

          <div className="px-4">
            <span className="text-4xl sm:text-6xl font-black text-white font-sans tracking-tight block">100+</span>
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest mt-2 block">Happy Customers</span>
          </div>

          <div className="px-4">
            <span className="text-4xl sm:text-6xl font-black text-white font-sans tracking-tight block">24/7</span>
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest mt-2 block">Support</span>
          </div>
        </div>
      </div>

    </div>
  );
}
