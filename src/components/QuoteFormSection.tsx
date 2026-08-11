import { ShieldCheck, Truck } from 'lucide-react';
import BookingFormContent from './BookingFormContent';

export default function QuoteFormSection() {
  return (
    <section id="quote" className="my-16 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Left Copy & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl glass-panel border border-emerald-500/20 bg-slate-950/20 backdrop-blur-md shadow-2xl">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider">
              Container Transport Booking
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight leading-tight uppercase font-sans">
              Lithin Transport
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mt-1">
              Direct Cargo & Container Booking Desk
            </p>

            <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed font-medium">
              Submit your container transport details below to manually book freight routes directly with Lithin Transport.
            </p>

            <div className="flex flex-col gap-4 mt-8">
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

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-gray-400 font-medium">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Instant booking confirmation with 24/7 dedicated dispatch support.</span>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-emerald-500/20 shadow-2xl bg-slate-950/20 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Full Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Selvamani"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Phone Number <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Pickup Location <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chennai Industrial Estate"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Delivery Destination <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bangalore Warehouse Zone"
                  value={formData.deliveryLocation}
                  onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Vehicle Type</label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                >
                  <option value="Mini Truck / Tata Ace">Mini Truck / Tata Ace</option>
                  <option value="Light Commercial Vehicle (LCV)">LCV (3.5 - 7 Tons)</option>
                  <option value="Medium Truck (10-14 Tons)">Medium Truck (10-14 Tons)</option>
                  <option value="Full Truckload (FTL)">Full Truckload (FTL)</option>
                  <option value="Container Truck">Container Truck</option>
                  <option value="Cold Chain Reefer">Cold Chain Reefer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Material / Goods Type</label>
                <input
                  type="text"
                  placeholder="e.g. Textiles / Machinery"
                  value={formData.materialType}
                  onChange={(e) => setFormData({ ...formData, materialType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Approx. Weight (Tons)</label>
                <input
                  type="text"
                  placeholder="e.g. 15 Tons"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Additional Notes / Instructions</label>
              <textarea
                rows={3}
                placeholder="Mention special handling requirements or timing preferences..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#030614] border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#10b981] hover:bg-emerald-600 text-white font-black rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting Request...' : 'Request a Free Quote'}</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}


