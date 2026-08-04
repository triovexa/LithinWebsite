import { ShieldCheck, Award, Users, Target, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent("Hi Lithin Transport, I would like to know more about your transportation services.")}`;

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-14">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-extrabold uppercase tracking-wider">
          Who We Are
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight uppercase font-sans">
          Pioneering Supply Chain & Transport Excellence
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
          Lithin Transport has grown into one of South India’s most trusted commercial haulage, freight logistics, and enterprise supply chain partners.
        </p>
      </div>

      {/* Core Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl glass-panel border border-sky-500/20 flex flex-col gap-4 hover:border-sky-400/60 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wide">Our Mission</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            To provide fast, reliable, and cost-effective transport solutions leveraging state-of-the-art telematics and dedicated driver safety programs.
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-panel border border-sky-500/20 flex flex-col gap-4 hover:border-sky-400/60 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wide">10+ Years Legacy</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Over a decade of continuous transport service, building strong relationships with enterprise manufacturers and regional distributors alike.
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-panel border border-sky-500/20 flex flex-col gap-4 hover:border-sky-400/60 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wide">Dedicated Team</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Over 500+ trained highway drivers, logistics managers, and fleet maintenance engineers ensuring 24/7 seamless operations.
          </p>
        </div>
      </div>

      {/* Milestones / Certification */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-sky-500/20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#06122d] to-[#020614]">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">Safety Standard</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Built on Safety, Transparency & On-Time Performance
          </h2>
          <p className="text-gray-300 mt-3 text-xs sm:text-sm leading-relaxed">
            We adhere strictly to commercial transport regulations and driver safety protocols. Every vehicle in our heavy fleet undergoes multi-point vehicle health inspection before departure.
          </p>

          <div className="flex flex-col gap-3 mt-6">
            {[
              "100% Insured Cargo Transport Coverage",
              "GPS Satellite Telematics & Automated Alerts",
              "Multi-Axle Trailers & Overdimensional Cargo Movers",
              "Customized Monthly B2B Transport SLA Contracts",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a
              href="/#quote"
              className="flex items-center bg-sky-500 hover:bg-sky-600 text-white rounded-xl overflow-hidden shadow-lg shadow-sky-500/30 transition-all hover:scale-105 group border border-sky-400/30"
            >
              <div className="px-3 py-2.5 bg-black/20 flex items-center justify-center border-r border-white/10">
                <div className="flex -space-x-1">
                  <ChevronRight className="w-4 h-4 text-white" />
                  <ChevronRight className="w-4 h-4 text-white -ml-2" />
                </div>
              </div>
              <span className="px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider">
                Get a Quote
              </span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-[#040b21] border border-sky-500/20 p-8 flex flex-col items-center justify-center text-center min-h-[260px]">
          <ShieldCheck className="w-16 h-16 text-sky-400 mb-3 animate-pulse" />
          <span className="text-3xl font-black text-white font-sans tracking-wide">ISO 9001:2015</span>
          <span className="text-xs uppercase tracking-widest text-sky-400 font-bold mt-1">Certified Freight Transport Enterprise</span>
        </div>
      </div>

    </div>
  );
}
