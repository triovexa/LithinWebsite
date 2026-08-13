import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappNumber = "919566738884";
  const defaultMessage = encodeURIComponent("Hi Lithin Transport, I would like to know more about your transportation services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Lithin Transport on WhatsApp"
      className="fixed bottom-20 sm:bottom-24 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-[#060b1e]/95 hover:bg-slate-900 backdrop-blur-xl border border-emerald-500/50 text-white font-semibold text-xs tracking-wider rounded-full shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-105 transition-all duration-300 group"
    >
      <div className="flex -space-x-1 text-emerald-400 text-xs font-black">
        <span>›</span>
        <span>›</span>
      </div>
      <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
      <span>WHATSAPP US</span>
    </a>
  );
}
