import { useState } from 'react';
import { Search, Truck, CheckCircle2, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

export default function TrackingSection() {
  const [lrNumber, setLrNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any | null>(null);

  const sampleTrackingData: Record<string, any> = {
    'LR001': {
      lrNumber: 'LR001',
      sender: 'TVS Logistics, Chennai',
      receiver: 'Bosch Warehouse, Bangalore',
      vehicle: 'Tata Signa 5530.S (TN 09 AB 1234)',
      weight: '18.5 Tons',
      estimatedDelivery: 'Tomorrow, 10:00 AM',
      steps: [
        { label: 'Booking Confirmed', completed: true, date: '04 Aug, 08:30 AM' },
        { label: 'Vehicle Assigned', completed: true, date: '04 Aug, 09:15 AM' },
        { label: 'Picked Up', completed: true, date: '04 Aug, 11:00 AM' },
        { label: 'In Transit', current: true, date: 'Passed Vellore Toll' },
        { label: 'Delivered', completed: false, date: 'Pending' }
      ]
    },
    'LR002': {
      lrNumber: 'LR002',
      sender: 'Sri Ram Mills, Coimbatore',
      receiver: 'Apex Textiles, Madurai',
      vehicle: 'Ashok Leyland 14-Wheeler (TN 38 CD 5678)',
      weight: '24 Tons',
      estimatedDelivery: 'Today, 06:00 PM',
      steps: [
        { label: 'Booking Confirmed', completed: true, date: '04 Aug, 06:00 AM' },
        { label: 'Vehicle Assigned', completed: true, date: '04 Aug, 06:45 AM' },
        { label: 'Picked Up', completed: true, date: '04 Aug, 08:00 AM' },
        { label: 'In Transit', completed: true, date: 'Passed Dindigul Highway' },
        { label: 'Delivered', completed: true, date: '04 Aug, 05:30 PM' }
      ]
    }
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = lrNumber.trim().toUpperCase();
    if (!cleaned) {
      toast.error('Please enter a valid LR / Booking Number (e.g. LR001)');
      return;
    }

    if (sampleTrackingData[cleaned]) {
      setTrackingResult(sampleTrackingData[cleaned]);
      toast.success(`Shipment found for ${cleaned}`);
    } else {
      setTrackingResult({
        lrNumber: cleaned,
        sender: 'Lithin Transport Hub, Chennai',
        receiver: 'Regional Distribution Center',
        vehicle: 'Volvo Heavy Container Carrier',
        weight: '12 Tons Cargo',
        estimatedDelivery: 'In Progress (Within 24 Hrs)',
        steps: [
          { label: 'Booking Confirmed', completed: true, date: 'Recorded' },
          { label: 'Vehicle Assigned', completed: true, date: 'Assigned' },
          { label: 'Picked Up', completed: true, date: 'Dispatched' },
          { label: 'In Transit', current: true, date: 'On Highway Route' },
          { label: 'Delivered', completed: false, date: 'En Route' }
        ]
      });
      toast.success(`Shipment status loaded for ${cleaned}`);
    }
  };

  return (
    <section id="tracking" className="my-16 scroll-mt-24">
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Shipment Status Tracking
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Track Your Consignment Status
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Enter your LR (Lorry Receipt) or Booking reference number to view status updates.
          </p>

          <form onSubmit={handleTrack} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter LR Number (e.g. LR001)"
                value={lrNumber}
                onChange={(e) => setLrNumber(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-[#030614] border border-emerald-500/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors text-sm font-medium"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#10b981] hover:bg-emerald-600 text-white font-extrabold rounded-full shadow-lg shadow-emerald-500/30 transition-all text-sm shrink-0 uppercase tracking-wider"
            >
              Track Shipment
            </button>
          </form>
          
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-400">
            <span>Try sample LR numbers:</span>
            <button
              type="button"
              onClick={() => { setLrNumber('LR001'); }}
              className="underline text-emerald-400 hover:text-white font-bold"
            >
              LR001
            </button>
            <button
              type="button"
              onClick={() => { setLrNumber('LR002'); }}
              className="underline text-emerald-400 hover:text-white font-bold"
            >
              LR002
            </button>
          </div>
        </div>

        {trackingResult && (
          <div className="mt-10 pt-8 border-t border-white/10 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-[#050b1e]/80 p-5 rounded-2xl border border-emerald-500/20 text-xs">
              <div>
                <span className="text-gray-400 block mb-1">LR / Consignment No:</span>
                <span className="text-sm font-black text-white tracking-wider">{trackingResult.lrNumber}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Assigned Vehicle:</span>
                <span className="text-sm font-semibold text-gray-200">{trackingResult.vehicle}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Estimated Arrival:</span>
                <span className="text-sm font-bold text-emerald-400">{trackingResult.estimatedDelivery}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
              {trackingResult.steps.map((step: any, idx: number) => {
                const isCompleted = step.completed;
                const isCurrent = step.current;

                return (
                  <div key={idx} className="flex flex-col items-center text-center relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        isCompleted
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-lg shadow-emerald-500/20'
                          : isCurrent
                          ? 'bg-teal-500/20 border-teal-400 text-teal-300 animate-pulse'
                          : 'bg-white/5 border-white/15 text-gray-600'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : isCurrent ? (
                        <Truck className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-white mt-3">{step.label}</span>
                    <span className="text-[10px] text-gray-400 mt-1">{step.date}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
