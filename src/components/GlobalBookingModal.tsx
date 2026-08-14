import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import BookingFormContent from './BookingFormContent';

export default function GlobalBookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [routeFrom, setRouteFrom] = useState('');
  const [routeTo, setRouteTo] = useState('');
  const [containerSize, setContainerSize] = useState('20ft');

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        if (customEvent.detail.from) setRouteFrom(customEvent.detail.from);
        if (customEvent.detail.to) setRouteTo(customEvent.detail.to);
        if (customEvent.detail.container) setContainerSize(customEvent.detail.container);
      }
      setIsOpen(true);
    };

    const handleSelectRoute = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        if (customEvent.detail.from) setRouteFrom(customEvent.detail.from);
        if (customEvent.detail.to) setRouteTo(customEvent.detail.to);
      }
      setIsOpen(true);
    };

    window.addEventListener('openBookingModal', handleOpenModal);
    window.addEventListener('selectRoute', handleSelectRoute);

    return () => {
      window.removeEventListener('openBookingModal', handleOpenModal);
      window.removeEventListener('selectRoute', handleSelectRoute);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-xl w-full bg-[#060b1e] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col max-h-[95vh] overflow-y-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
          title="Close Booking Form"
        >
          <X className="w-5 h-5" />
        </button>

        <BookingFormContent
          initialFrom={routeFrom}
          initialTo={routeTo}
          initialContainer={containerSize}
          onSuccess={() => setIsOpen(false)}
          title="LITHIN TRANSPORT"
          subtitle="CONTAINER FREIGHT BOOKING FORM"
        />
      </div>
    </div>
  );
}
