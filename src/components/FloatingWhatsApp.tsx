import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappNumber = "919876543210";
  const defaultMessage = encodeURIComponent("Hi Lithin Transport, I would like to know more about your transportation services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Lithin Transport on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-[#060b1e]/85 hover:bg-emerald-500/25 backdrop-blur-xl border border-emerald-500/40 text-emerald-400 hover:text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-all duration-300 group"
    >
      <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center group-hover:rotate-12 transition-transform text-emerald-400">
        <MessageCircle className="w-4 h-4" />
      </div>
      <span className="pr-1 text-xs font-black tracking-wider text-white">WhatsApp Us</span>
    </a>
  );
}
