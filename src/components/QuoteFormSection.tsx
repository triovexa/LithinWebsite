import { ShieldCheck, Truck } from 'lucide-react';
import BookingFormContent from './BookingFormContent';

export default function QuoteFormSection() {
  return (
    <section id="quote" className="my-10 sm:my-16 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

        {/* Left Copy & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-10 rounded-2xl sm:rounded-3xl glass-panel border border-emerald-500/20 bg-slate-950/20 backdrop-blur-md shadow-2xl">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider">
              Container Transport Booking
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-4 tracking-tight leading-tight uppercase font-sans">
              Lithin Transport
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mt-1">
              Direct Cargo & Container Booking Desk
            </p>

            <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed font-medium">
              Submit your container transport details below to manually book freight routes directly with Lithin Transport.
            </p>

            <div className="flex flex-col gap-4 mt-6 sm:mt-8">
              {[
                { title: "Direct Carrier Rates", desc: "No middleman markups. Direct fleet booking rates." },
                { title: "Weatherproof Sealed Payload", desc: "Heavy-duty 9ft to 40ft containers for all goods." },
                { title: "Guaranteed Transit Scheduling", desc: "Instant vehicle allotment and highway dispatch." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Truck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-white uppercase">{item.title}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-gray-400 font-medium">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Instant booking confirmation with 24/7 dedicated dispatch support.</span>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7 p-5 sm:p-10 rounded-2xl sm:rounded-3xl glass-panel border border-emerald-500/20 shadow-2xl bg-slate-950/20 backdrop-blur-md">
          <BookingFormContent title="REQUEST A FREIGHT QUOTE" subtitle="Direct Cargo & Container Rate Estimation" />
        </div>
      </div>
    </section>
  );
}
