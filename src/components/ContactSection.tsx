import React, { useState } from 'react';
import { Building2, MapPin, Phone, Mail, FileCheck, ShieldCheck, Copy, ExternalLink, Send, User, Truck, MessageSquare, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContactSectionProps {
  id?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export default function ContactSection({ id, isModal = false }: ContactSectionProps) {
  const primaryPhone = "+91 95667 38884";
  const secondaryPhone = "+91 93423 17996";
  const email = "admin@lithintransport.in";
  const website = "www.lithintransport.in";
  const address = "4/252, Vedivattam, Agraharam vill and po, Natrampalli TK, Tirupattur DT. 635651";
  const gstin = "33FFSPP0139H1Z8";
  const msme = "UDYAM-TN-30-0112020";

  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    fromLocation: '',
    toLocation: '',
    truckFeet: '32 Feet',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-select truck feet when user clicks Book Truck in Gallery
  React.useEffect(() => {
    const handleSelectFeet = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        const rawFeet = customEvent.detail.toString().toLowerCase().replace('ft', '').replace('feet', '').trim();
        const formatted = `${rawFeet} Feet`;
        setFormData(prev => ({ ...prev, truckFeet: formatted }));
      }
    };

    window.addEventListener('selectTruckFeet', handleSelectFeet);

    const checkUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const feetParam = params.get('feet');
      if (feetParam) {
        const rawFeet = feetParam.toString().toLowerCase().replace('ft', '').replace('feet', '').trim();
        const formatted = `${rawFeet} Feet`;
        setFormData(prev => ({ ...prev, truckFeet: formatted }));
      }
    };

    checkUrl();
    window.addEventListener('popstate', checkUrl);

    return () => {
      window.removeEventListener('selectTruckFeet', handleSelectFeet);
      window.removeEventListener('popstate', checkUrl);
    };
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.clientName.trim()) {
      toast.error('Please enter your name');
      return;
    }

    if (!formData.phone.trim()) {
      toast.error('Please enter your contact phone number');
      return;
    }

    if (!formData.message.trim() && !formData.fromLocation.trim()) {
      toast.error('Please enter your inquiry details or pickup/delivery route');
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage =
      `LITHIN TRANSPORT - CLIENT CONTACT INQUIRY\n\n` +
      `Client Name: ${formData.clientName.trim()}\n` +
      `Contact Phone: ${formData.phone.trim()}\n` +
      (formData.fromLocation.trim() ? `Pickup Location: ${formData.fromLocation.trim()}\n` : '') +
      (formData.toLocation.trim() ? `Delivery Location: ${formData.toLocation.trim()}\n` : '') +
      `Truck Feet Size: ${formData.truckFeet}\n` +
      (formData.message.trim() ? `Inquiry Details: ${formData.message.trim()}\n\n` : '\n') +
      `--- Sent from www.lithintransport.in Contact Form`;

    const targetNumber = "919566738884";
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Opening WhatsApp to send your inquiry...');
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id={id} className={`relative transition-all ${isModal ? '' : 'py-12'}`}>
      <div className={`${isModal ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-8'}`}>
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Official Transport Contact Details</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
            Lithin Transport <span className="text-emerald-400">Headquarters & Network</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl font-normal leading-relaxed">
            Reach our central dispatch desk or visit our head office and regional branch hubs across South India.
          </p>
        </div>

        {/* 3 OFFICE LOCATION BADGES (BENGALURU HQ, TIRUPUR, CHENNAI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Head Office Bengaluru */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#060b1e] to-[#040714] border-2 border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.2)] flex flex-col justify-between group hover:border-emerald-300 transition-all">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black tracking-widest uppercase border border-emerald-400/40">
                HEAD OFFICE
              </span>
              <Building2 className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-black text-white uppercase tracking-wider font-sans">Bengaluru</h3>
              <p className="text-xs text-gray-400 mt-1 font-medium">Central Headquarters & Pan-India Dispatch Hub</p>
            </div>
          </div>

          {/* Branch Office Tirupur */}
          <div className="p-5 rounded-2xl bg-[#060b1e]/90 border border-emerald-500/30 hover:border-emerald-400/50 shadow-xl flex flex-col justify-between group transition-all">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-[10px] font-black tracking-widest uppercase border border-emerald-500/20">
                BRANCH OFFICE
              </span>
              <Building2 className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-black text-white uppercase tracking-wider font-sans">Tirupur</h3>
              <p className="text-xs text-gray-400 mt-1 font-medium">Textile & Industrial Garments Cargo Office</p>
            </div>
          </div>

          {/* Branch Office Chennai */}
          <div className="p-5 rounded-2xl bg-[#060b1e]/90 border border-emerald-500/30 hover:border-emerald-400/50 shadow-xl flex flex-col justify-between group transition-all">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-[10px] font-black tracking-widest uppercase border border-emerald-500/20">
                BRANCH OFFICE
              </span>
              <Building2 className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-black text-white uppercase tracking-wider font-sans">Chennai</h3>
              <p className="text-xs text-gray-400 mt-1 font-medium">Port Container & Express Highway Logistics Hub</p>
            </div>
          </div>
        </div>

        {/* DETAILED INFORMATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Registered Office Address */}
          <div className="p-6 rounded-2xl bg-[#060b1e]/90 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-sans">Registered Office Address</h4>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">Official Mail & Operations</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-semibold bg-[#02040c] p-4 rounded-xl border border-white/10 select-all">
                {address}
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(address, "Address")}
              className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors w-fit cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Registered Address</span>
            </button>
          </div>

          {/* Card 2: Phone Numbers & Direct Helpline */}
          <div className="p-6 rounded-2xl bg-[#060b1e]/90 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-sans">24/7 Mobile Helplines</h4>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">Direct Dispatch & Route Booking</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-[#02040c] p-4 rounded-xl border border-white/10">
                <a
                  href="tel:+919566738884"
                  className="flex items-center justify-between text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  <span>Primary: {primaryPhone}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Call Now</span>
                </a>
                <hr className="border-white/10" />
                <a
                  href="tel:+919342317996"
                  className="flex items-center justify-between text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  <span>Secondary: {secondaryPhone}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Call Now</span>
                </a>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={() => copyToClipboard(`${primaryPhone}, ${secondaryPhone}`, "Mobile numbers")}
                className="flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Phone Numbers</span>
              </button>
            </div>
          </div>

          {/* Card 3: Email & Website */}
          <div className="p-6 rounded-2xl bg-[#060b1e]/90 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-sans">Digital Channels</h4>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">Official Mail & Web Portal</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 bg-[#02040c] p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">E-Mail:</span>
                  <a href={`mailto:${email}`} className="text-xs sm:text-sm font-bold text-emerald-400 hover:underline">
                    {email}
                  </a>
                </div>
                <hr className="border-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Website:</span>
                  <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold text-emerald-400 hover:underline flex items-center gap-1">
                    <span>{website}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(email, "Email")}
              className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors w-fit cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email Address</span>
            </button>
          </div>

          {/* Card 4: Tax & Business Government Certifications */}
          <div className="p-6 rounded-2xl bg-[#060b1e]/90 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-sans">Government Registrations</h4>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">GSTIN & MSME Business Compliance</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 bg-[#02040c] p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">GSTIN / UIN:</span>
                  <span className="text-xs sm:text-sm font-black text-white font-mono bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30 select-all">
                    {gstin}
                  </span>
                </div>
                <hr className="border-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">MSME Reg No:</span>
                  <span className="text-xs sm:text-sm font-black text-white font-mono bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30 select-all">
                    {msme}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Certified Transport & Freight Carrier</span>
            </div>
          </div>

        </div>

        {/* BELOW CONTACT CARDS: CLIENT CONTACT US WHATSAPP FORM */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#060b1e] via-[#040817] to-[#02040c] border-2 border-emerald-500/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="border-b border-emerald-500/20 pb-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-emerald-400/30">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Client Inquiry Form</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide font-sans">
              Contact Us & Send Inquiry Direct To WhatsApp
            </h3>
            <p className="text-xs text-gray-300 mt-1 font-medium">
              Need container rates, route details, or freight assistance? Fill out your details below and click to send directly to Lithin Transport WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Client Name */}
              <div>
                <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Your Name / Business Name</span>
                  <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Selvamani / Lithin Industries"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Phone Number</span>
                  <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 95667 38884"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* From Location */}
              <div>
                <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pickup City / Location</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bangalore / Chennai"
                  value={formData.fromLocation}
                  onChange={(e) => setFormData({ ...formData, fromLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              {/* To Location */}
              <div>
                <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Delivery Destination</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tirupur / All India"
                  value={formData.toLocation}
                  onChange={(e) => setFormData({ ...formData, toLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              {/* Truck Feet Size */}
              <div>
                <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Truck Feet / Size</span>
                </label>
                <select
                  value={formData.truckFeet}
                  onChange={(e) => setFormData({ ...formData, truckFeet: e.target.value })}
                  className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                >
                  <option value="7 Feet">7 Feet</option>
                  <option value="9 Feet">9 Feet</option>
                  <option value="10 Feet">10 Feet</option>
                  <option value="14 Feet">14 Feet</option>
                  <option value="17 Feet">17 Feet</option>
                  <option value="20 Feet">20 Feet</option>
                  <option value="22 Feet">22 Feet</option>
                  <option value="24 Feet">24 Feet</option>
                  <option value="32 Feet">32 Feet</option>
                </select>
              </div>
            </div>

            {/* Message / Details */}
            <div>
              <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your Inquiry / Details Required</span>
                <span className="text-emerald-400">*</span>
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe your transport requirement, weight, date, or questions here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#02040c] border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer disabled:opacity-50 mt-1 group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send Inquiry Direct to WhatsApp'}</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
