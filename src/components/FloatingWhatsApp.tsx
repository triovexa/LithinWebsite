import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappNumber = "919876543210"; // Default contact
  const defaultMessage = encodeURIComponent("Hi Lithin Transport, I would like to know more about your transportation services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Lithin Transport on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-full shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300 group"
    >
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
        <MessageCircle className="w-5 h-5 text-white" />
      </div>
      <span className="hidden sm:inline pr-1">WhatsApp Us</span>
    </a>
  );
}
