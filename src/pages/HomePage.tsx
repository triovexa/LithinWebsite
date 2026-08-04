import { useState } from 'react';
import { Search, MessageCircle, Truck, MapPin, CheckCircle2, ChevronDown, PhoneCall, FileText, Navigation, ShieldCheck, Award, Users } from 'lucide-react';
import toast from 'react-hot-toast';
import QuoteFormSection from '../components/QuoteFormSection';
import TrackingSection from '../components/TrackingSection';

export default function HomePage() {
  const [heroTab, setHeroTab] = useState<'tracking' | 'ship'>('tracking');
  const [heroTrackingInput, setHeroTrackingInput] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent("Hi Lithin Transport, I would like to know more about your transportation services.")}`;

  const handleHeroTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroTrackingInput.trim()) {
      toast.error('Please enter a tracking number (e.g. LR001)');
      return;
    }
    toast.success(`Checking tracking status for: ${heroTrackingInput.toUpperCase()}`);
    const trackingElement = document.getElementById('tracking');
    if (trackingElement) {
      trackingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fleet specifications
  const fleetData = [
    {
      title: "Mini Truck",
      capacity: "1 - 2.5 Tons",
      suitableFor: "Intra-City Goods & Express Distribution",
      specs: ["GPS Tracked", "Agile Urban Maneuvering", "Sealed Cargo Box"]
    },
    {
      title: "Tata Ace",
      capacity: "750 kg - 1 Ton",
      suitableFor: "Quick Local Parcel & Last-Mile Delivery",
      specs: ["Compact Dispatch", "Fast Loading/Unloading", "Ideal for Micro Parcels"]
    },
    {
      title: "Light Commercial Vehicle (LCV)",
      capacity: "3.5 - 7 Tons",
      suitableFor: "Regional Retail & Industrial Supply Chain",
      specs: ["Enclosed Cargo Space", "Hydraulic Lift Assistance", "Intercity Express"]
    },
    {
      title: "Medium Truck",
      capacity: "10 - 14 Tons",
      suitableFor: "Intercity Industrial Goods & Agriculture Freight",
      specs: ["Multi-drop Capability", "Heavy Duty Chassis", "Air Brakes & Safety Locks"]
    },
    {
      title: "Heavy Truck",
      capacity: "15 - 20 Tons",
      suitableFor: "Industrial Raw Materials & Heavy Bulk Cargo",
      specs: ["High Capacity Haulage", "Double Driver Rotation", "Overdimensional Payload"]
    },
    {
      title: "Container Truck",
      capacity: "20 - 32 Tons",
      suitableFor: "High-Value Goods & Long-Distance Express Routes",
      specs: ["Weatherproof Steel Box", "Customs Seal Compatible", "Real-Time Telematics"]
    }
  ];

  // FAQ list
  const faqList = [
    {
      q: "What areas do you serve?",
      a: "We provide comprehensive transport coverage across major hubs in Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala including Chennai, Bangalore, Coimbatore, Madurai, Trichy, Salem, and Hyderabad."
    },
    {
      q: "How can I request a transport quote?",
      a: "You can fill out our 'Get a Free Quote' form directly on this website, or reach us instantly via WhatsApp or phone. Our logistics team will review your requirement and provide a transparent quote."
    },
    {
      q: "What types of goods do you transport?",
      a: "We haul a wide variety of industrial goods, machinery, raw materials, commercial retail stock, FMCG products, agricultural produce, and heavy project equipment."
    },
    {
      q: "Do you provide Full Truckload (FTL) services?",
      a: "Yes, we specialize in dedicated Full Truckload (FTL) services where the vehicle is exclusively reserved for your cargo to ensure direct and fast point-to-point delivery."
    },
    {
      q: "How can I track my shipment status?",
      a: "Simply enter your LR (Lorry Receipt) or Booking Number in our 'Shipment Status Tracking' tool above to view live progress from pickup to final destination delivery."
    }
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-16">

      {/* 1. HERO SECTION - Light Sky Glass Container */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-300 bg-white/70 backdrop-blur-md shadow-xl min-h-[84vh] flex flex-col justify-between p-6 sm:p-12">
        
        {/* Freight Truck Visual Overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            alt="Commercial Freight Container Truck"
            className="w-full h-full object-cover opacity-20 mix-blend-multiply scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0f2fe]/90 via-[#bae6fd]/60 to-[#e0f2fe]/80 pointer-events-none" />
        </div>

        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
          
          {/* Left Column: Deep Navy Bold Headline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight uppercase font-sans">
              WE KEEP YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0ea5e9]">
                SUPPLY CHAIN
              </span> <br />
              MOVING
            </h1>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl font-normal leading-relaxed">
              From local to global shipments, our seamless logistics solutions ensure on-time, secure, and hassle-free delivery for your business cargo.
            </p>

            {/* Two-Tone Sky Blue CTA Button: [ >> | Learn More Now ] */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                className="flex items-center rounded-xl overflow-hidden shadow-md shadow-sky-500/20 border border-sky-400/30 hover:scale-105 transition-all group"
              >
                <div className="px-3.5 py-3 bg-[#0284c7] text-white flex items-center justify-center border-r border-sky-600">
                  <div className="flex -space-x-1 font-black text-sm">
                    <span>›</span>
                    <span>›</span>
                  </div>
                </div>
                <span className="px-5 py-3 bg-[#0369a1] text-white text-xs font-black uppercase tracking-wider group-hover:bg-[#0284c7] transition-colors">
                  Learn More Now
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Quick Track Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white text-slate-900 p-6 sm:p-7 rounded-2xl shadow-xl border border-sky-200">
              
              {/* Card Tabs */}
              <div className="flex items-center gap-6 border-b border-slate-200 pb-3 mb-5">
                <button
                  type="button"
                  onClick={() => setHeroTab('tracking')}
                  className={`text-xs font-black uppercase tracking-wider pb-1 transition-colors ${
                    heroTab === 'tracking'
                      ? 'text-[#0284c7] border-b-2 border-[#0284c7]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Tracking Order
                </button>

                <button
                  type="button"
                  onClick={() => setHeroTab('ship')}
                  className={`text-xs font-black uppercase tracking-wider pb-1 transition-colors ${
                    heroTab === 'ship'
                      ? 'text-[#0284c7] border-b-2 border-[#0284c7]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Ship Order / Quote
                </button>
              </div>

              {heroTab === 'tracking' ? (
                <form onSubmit={handleHeroTrackSubmit} className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Type your tracking number here..."
                      value={heroTrackingInput}
                      onChange={(e) => setHeroTrackingInput(e.target.value)}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-[#0284c7]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0284c7] hover:bg-[#0369a1] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Track Now</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium pt-2 border-t border-slate-100">
                    <a href="#tracking" className="hover:text-[#0284c7] font-bold">Multiple Tracking Numbers</a>
                    <a href="#faq" className="hover:text-[#0284c7] font-bold">Need Help?</a>
                  </div>

                  {/* App Store / Google Play Badges */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <div className="flex-1 bg-slate-900 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-[10px] font-bold cursor-pointer hover:bg-slate-800">
                      <span>▶ GET IT ON Google Play</span>
                    </div>
                    <div className="flex-1 bg-slate-900 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-[10px] font-bold cursor-pointer hover:bg-slate-800">
                      <span> Download on App Store</span>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col gap-3 text-xs">
                  <p className="text-slate-600 font-medium">Request an immediate cargo rate estimation for your shipment route.</p>
                  <a
                    href="#quote"
                    className="w-full py-3.5 bg-[#0284c7] hover:bg-[#0369a1] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md text-center block"
                  >
                    Go to Quote Form
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Hero Bottom Glass Bar */}
        <div className="mt-12 pt-6 border-t border-sky-300 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-sky-200">
          <div className="border-r border-sky-200 pr-4">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight block">2000+</span>
            <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-wider mt-0.5 block">Satisfied Clients</span>
          </div>

          <div className="border-r border-sky-200 pr-4">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight block">99.8%</span>
            <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-wider mt-0.5 block">On-Time Delivery Rate</span>
          </div>

          <div className="border-r border-sky-200 pr-4">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight block">150+</span>
            <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-wider mt-0.5 block">Cities & Corridors Served</span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight block">24/7</span>
            <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-wider mt-0.5 block">Customer Support Desk</span>
          </div>
        </div>

      </section>

      {/* 2. ABOUT LITHIN TRANSPORT */}
      <section className="scroll-mt-24" id="about">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-sky-200 shadow-xl flex flex-col gap-10">
          <div className="max-w-3xl">
            <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
              About Lithin Transport
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Who We Are
            </h2>
            <p className="text-slate-700 mt-3 text-base sm:text-lg leading-relaxed">
              Lithin Transport is committed to providing reliable, safe, and efficient transportation solutions for businesses and customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-sky-50/80 border border-sky-200 flex flex-col gap-2">
              <Award className="w-7 h-7 text-[#0284c7] mb-2" />
              <h3 className="text-base font-bold text-slate-900">Company Experience</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Proven track record in freight handling and industrial cargo management across South India.</p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/80 border border-sky-200 flex flex-col gap-2">
              <Navigation className="w-7 h-7 text-cyan-600 mb-2" />
              <h3 className="text-base font-bold text-slate-900">Service Coverage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Extensive transport network linking major manufacturing corridors and commercial ports.</p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/80 border border-sky-200 flex flex-col gap-2">
              <Users className="w-7 h-7 text-emerald-600 mb-2" />
              <h3 className="text-base font-bold text-slate-900">Customer Satisfaction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Dedicated logistics managers ensuring customized customer care and prompt updates.</p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/80 border border-sky-200 flex flex-col gap-2">
              <ShieldCheck className="w-7 h-7 text-[#0284c7] mb-2" />
              <h3 className="text-base font-bold text-slate-900">Safety Commitment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Routine vehicle inspections, double-driver long haul rotations, and certified cargo lashing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="scroll-mt-24" id="services">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Our Transport Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Full Truck Load (FTL)", desc: "Dedicated vehicle transportation exclusively reserved for large shipments requiring direct route dispatch." },
            { title: "Part Load Transportation", desc: "Cost-effective freight solutions for smaller commercial consignments with consolidated routing." },
            { title: "Industrial Goods Transport", desc: "Specialized haulage for industrial machinery, raw materials, steel coils, and factory equipment." },
            { title: "Heavy & Project Cargo", desc: "Low-bed trailers and hydraulic axles designed for overdimensional and heavy payload transport." },
            { title: "Local Transportation", desc: "Fast and dependable intra-city and intra-regional goods delivery within localized commercial zones." },
            { title: "Customized Transport Solutions", desc: "Flexible transport arrangements tailored specifically to client schedule, cargo weight, and vehicle type." }
          ].map((srv, idx) => (
            <div key={idx} className="p-8 rounded-3xl glass-panel border border-sky-200 hover:border-[#0284c7] transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-[#0284c7] mb-6 group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">{srv.desc}</p>
              </div>
              <a href="#quote" className="text-xs font-bold uppercase tracking-wider text-[#0284c7] hover:text-[#0369a1] flex items-center gap-1">
                <span>Request Rate Estimate</span>
                <span className="font-bold text-sm">›</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE LITHIN TRANSPORT */}
      <section className="p-8 sm:p-12 rounded-3xl glass-panel border border-sky-200 bg-gradient-to-br from-white to-sky-50">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
            Operational Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Choose Lithin Transport?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Safe Handling", desc: "Your goods are handled with utmost care and secured using professional cargo lashing." },
            { title: "On-Time Delivery", desc: "We focus on strict adherence to scheduled departure and arrival timelines." },
            { title: "Experienced Team", desc: "Trained driver crew and logistics managers for smooth highway operations." },
            { title: "Transparent Process", desc: "Clear communication, upfront quotation, and live milestone updates." },
            { title: "Reliable Fleet", desc: "Routinely serviced commercial vehicles ensuring dependable long-haul trips." },
            { title: "Customer Support", desc: "Accessible assistance for booking inquiries, route updates, and documentation." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-sky-200 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-[#0284c7] shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FLEET SECTION */}
      <section className="scroll-mt-24" id="fleet">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
            Our Vehicle Lineup
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Our Fleet Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetData.map((v, idx) => (
            <div key={idx} className="p-7 rounded-3xl glass-panel border border-sky-200 hover:border-[#0284c7] transition-all flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-sky-100 border border-sky-300 text-[#0284c7] text-xs font-bold uppercase rounded-full">
                    Capacity: {v.capacity}
                  </span>
                  <Truck className="w-6 h-6 text-[#0284c7]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs text-slate-700 font-medium mb-4">
                  <strong className="text-slate-900">Suitable For:</strong> {v.suitableFor}
                </p>
                <div className="flex flex-col gap-2 pt-3 border-t border-sky-100">
                  {v.specs.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="#quote" className="mt-6 w-full py-2.5 bg-[#0284c7] hover:bg-[#0369a1] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl text-center shadow-md block">
                Book This Vehicle
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="p-8 sm:p-12 rounded-3xl glass-panel border border-sky-200">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
            Simplified Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Send Your Requirement", desc: "Submit your goods weight, pickup, and delivery destination details." },
            { step: "02", title: "Get a Quote", desc: "Our team calculates competitive rate quotes and vehicle options." },
            { step: "03", title: "Shipment Pickup", desc: "Vehicle is assigned and positioned at your pickup site." },
            { step: "04", title: "Safe Delivery", desc: "Cargo is safely transported and delivered to destination." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-sky-200 flex flex-col gap-3 relative shadow-sm">
              <span className="text-3xl font-black text-[#0284c7]/30 font-mono">{item.step}</span>
              <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SERVICE COVERAGE */}
      <section className="scroll-mt-24" id="coverage">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-sky-200 text-center">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
            Network Operations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Our Service Areas & Key Corridors
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl mx-auto">
            {["Chennai", "Bangalore", "Coimbatore", "Madurai", "Trichy", "Salem", "Hyderabad", "Kerala"].map((city, idx) => (
              <div key={idx} className="px-5 py-3 rounded-full bg-white border border-sky-300 text-slate-900 font-bold text-sm flex items-center gap-2 shadow-md">
                <MapPin className="w-4 h-4 text-[#0284c7]" />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GET A FREE QUOTE (Form) */}
      <QuoteFormSection />

      {/* 9. SHIPMENT STATUS TRACKING */}
      <TrackingSection />

      {/* 10. FAQ SECTION */}
      <section className="scroll-mt-24" id="faq">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-sky-200">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left font-bold text-slate-900 text-base"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#0284c7] transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === idx && (
                <p className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. CONTACT US SECTION */}
      <section className="scroll-mt-24" id="contact">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-sky-200 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Contact Lithin Transport
            </h2>
            <p className="text-slate-700 mt-3 text-sm sm:text-base leading-relaxed">
              Reach out to our logistics hub for booking inquiries, transport quotes, or customer support.
            </p>

            <div className="flex flex-col gap-4 mt-6 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-[#0284c7]" />
                <span>Phone: +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#0284c7]" />
                <span>Email: support@lithintransport.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#0284c7]" />
                <span>Office Address: Industrial Estate Hub, Guindy, Chennai, Tamil Nadu - 600032</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href="tel:+919876543210"
                className="px-6 py-3 bg-[#0284c7] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md"
              >
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-sky-50 border border-sky-200 p-8 flex flex-col justify-center items-center text-center min-h-[250px] shadow-sm">
            <Truck className="w-16 h-16 text-[#0284c7] mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-slate-900">24/7 Logistics Control Room</h3>
            <p className="text-xs text-slate-600 mt-2">Active highway dispatch & driver communication desk.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
