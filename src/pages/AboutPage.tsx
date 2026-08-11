import { useState } from 'react';
import { Award, Navigation, Users, ShieldCheck, MapPin, Phone, Mail, Send, HelpCircle, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';
import BranchNetworkSection from '../components/BranchNetworkSection';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      toast.error('Please enter your name and phone number');
      return;
    }
    toast.success('Thank you! Your message has been routed to our corporate logistics desk.');
    setContactForm({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const faqs = [
    {
      q: "What regions and routes does Lithin Transport cover?",
      a: "We operate dedicated interstate and intercity freight routes across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, Maharashtra, and major industrial corridors throughout India."
    },
    {
      q: "What types of vehicles are available in your fleet?",
      a: "Our heavy-duty fleet includes sealed container trucks (20ft, 32ft), multi-axle heavy carriers, medium industrial trucks, and agile light commercial vehicles."
    },
    {
      q: "Are goods insured during transit?",
      a: "Yes. All cargo shipments transported by Lithin Transport are covered under comprehensive marine & transit insurance guidelines with 100% sealed box security."
    },
    {
      q: "How can I request an instant freight quote?",
      a: "You can submit your pickup, destination, and cargo weight details through our online Rate Estimator or call our 24/7 highway dispatch team directly."
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          Company Overview & Heritage
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight uppercase font-sans">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">Lithin Transport</span>
        </h1>
        <p className="text-gray-200 mt-4 text-base sm:text-xl leading-relaxed font-medium">
          Lithin Transport Logistics Ltd is a premier ISO 9001:2015 certified commercial freight and logistics enterprise providing end-to-end haulage, warehousing, and supply chain solutions.
        </p>
      </div>

      {/* 4 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/15 flex flex-col gap-4 hover:border-emerald-400/50 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">10+ Years Experience</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Proven track record in industrial freight handling, heavy haulage, and supply chain logistics across India.
          </p>
        </div>

        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/15 flex flex-col gap-4 hover:border-emerald-400/50 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
            <Navigation className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">Nationwide Network</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Extensive highway transport coverage linking major manufacturing hubs, ports, and commercial industrial zones.
          </p>
        </div>

        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/15 flex flex-col gap-4 hover:border-emerald-400/50 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">Client Satisfaction</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Dedicated key account managers ensuring 99.8% on-time transit and continuous route updates.
          </p>
        </div>

        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/15 flex flex-col gap-4 hover:border-emerald-400/50 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">ISO Certified Safety</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Strict vehicle telematics, double-driver rotations, and certified weatherproof cargo lashing.
          </p>
        </div>
      </div>

      {/* Numbers Section */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/20 bg-slate-950/20 backdrop-blur-md shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x divide-white/10">
          <div className="px-4">
            <span className="text-4xl sm:text-6xl font-black text-white font-sans tracking-tight block">10+</span>
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest mt-2 block">Years Industry Leadership</span>
          </div>

          <div className="px-4">
            <span className="text-4xl sm:text-6xl font-black text-white font-sans tracking-tight block">50,000+</span>
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest mt-2 block">Completed Freight Trips</span>
          </div>

          <div className="px-4">
            <span className="text-4xl sm:text-6xl font-black text-white font-sans tracking-tight block">500+</span>
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest mt-2 block">Enterprise B2B Clients</span>
          </div>

          <div className="px-4">
            <span className="text-4xl sm:text-6xl font-black text-white font-sans tracking-tight block">24/7</span>
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest mt-2 block">Highway Control Desk</span>
          </div>
        </div>
      </div>

      {/* FAQ SECTION (#faq) */}
      <section id="faq" className="scroll-mt-28 flex flex-col gap-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 uppercase tracking-tight font-sans">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto w-full flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel border border-emerald-500/15 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 flex items-center justify-between text-left gap-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold text-white uppercase tracking-wide">{faq.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="p-5 pt-0 text-xs text-gray-300 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CORPORATE CONTACT SECTION (#contact) */}
      <section id="contact" className="scroll-mt-28 p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/20 bg-slate-950/20 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-start shadow-2xl">
        
        {/* Contact Information */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
              Corporate Headquarters
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 uppercase tracking-tight font-sans">
              Contact Logistics Desk
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed font-normal">
              Connect directly with our commercial freight control desk for enterprise SLAs, contract logistics, or immediate trip dispatch.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-extrabold text-white uppercase">Corporate HQ</h4>
                <p className="text-xs text-gray-300 mt-0.5">Lithin Logistics Hub, GST Road, Guindy Industrial Estate, Chennai, Tamil Nadu - 600032</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-extrabold text-white uppercase">24/7 Hotline</h4>
                <p className="text-xs text-gray-300 mt-0.5">+91 98765 43210 / +91 44 2800 9000</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-extrabold text-white uppercase">Official Email</h4>
                <p className="text-xs text-gray-300 mt-0.5">support@lithintransport.com / dispatch@lithintransport.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="lg:col-span-7 bg-slate-950/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-emerald-500/20">
          <h3 className="text-xl font-black text-white uppercase tracking-wide font-sans mb-4">
            Send Corporate Message
          </h3>
          <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold text-gray-300 uppercase block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-300 uppercase block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10-digit number"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold text-gray-300 uppercase block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-300 uppercase block mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Enterprise / Business Name"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-300 uppercase block mb-1">Message / Cargo Details</label>
              <textarea
                rows={3}
                placeholder="Describe your freight volume or transport requirement..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-emerald-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#10b981] hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 mt-1"
            >
              <Send className="w-4 h-4" />
              <span>Submit Corporate Inquiry</span>
            </button>
          </form>
        </div>

      </section>

      {/* PAN-INDIA BRANCH OFFICES NETWORK MAP */}
      <BranchNetworkSection />

    </div>
  );
}
