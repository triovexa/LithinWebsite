import { Tag, ShieldCheck, Truck, PhoneCall, MapPin, FileText } from 'lucide-react';
import SparkleHeading from './SparkleHeading';

interface FeatureCard {
  id: number;
  title: string;
  desc: string;
  icon: any;
  iconBg: string;
  iconColor: string;
}

export default function BookingFeaturesSection() {
  const features: FeatureCard[] = [
    {
      id: 1,
      title: "Transparent Freight Rates",
      desc: "Direct carrier rates with zero hidden charges. The exact freight cost shown at booking is the price you pay.",
      icon: Tag,
      iconBg: "bg-amber-500/10 border-amber-500/30",
      iconColor: "text-amber-400",
    },
    {
      id: 2,
      title: "Verified Goods Transport",
      desc: "100+ verified container trucks (7ft to 32ft MXL). Safe goods transport for FMCG, manufacturing, textiles & industrial cargo.",
      icon: ShieldCheck,
      iconBg: "bg-emerald-500/10 border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
    {
      id: 3,
      title: "100% Delivery Guarantee",
      desc: "Every truck booking comes with 24x7 live GPS tracking and dedicated coordinators resolving delays before impact.",
      icon: Truck,
      iconBg: "bg-cyan-500/10 border-cyan-500/30",
      iconColor: "text-cyan-400",
    },
    {
      id: 4,
      title: "24/7 Customer Support",
      desc: "Reach our dispatch support desk by phone or WhatsApp any time of day for quick truck allotment and status updates.",
      icon: PhoneCall,
      iconBg: "bg-rose-500/10 border-rose-500/30",
      iconColor: "text-rose-400",
    },
    {
      id: 5,
      title: "Pan India Coverage",
      desc: "Direct branch offices in Bangalore, Chennai, and Tirupur with dispatch coverage across 500+ industrial districts in India.",
      icon: MapPin,
      iconBg: "bg-teal-500/10 border-teal-500/30",
      iconColor: "text-teal-400",
    },
    {
      id: 6,
      title: "Instant Documentation",
      desc: "Lorry Receipt (LR), E-Way Bill, Freight Invoice, Quotation & Digital Proof of Delivery (POD) generated instantly.",
      icon: FileText,
      iconBg: "bg-indigo-500/10 border-indigo-500/30",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section id="booking-features" className="my-10 sm:my-14 scroll-mt-28 flex flex-col gap-6 sm:gap-8 relative z-10">
      
      {/* SECTION HEADER WITH SPARKLE ANIMATION (ONLINE Word Removed as Requested) */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        <SparkleHeading text="Everything You Need For Container Truck Booking" />
      </div>

      {/* 6 FEATURE CARDS GRID (Matches Attached Screenshot Layout in Dark Glassmorphism) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {features.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl glass-panel bg-[#060b1e]/40 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400/70 hover:bg-[#060b1e]/65 shadow-2xl transition-all duration-300 flex flex-col gap-3 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor} group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-white font-sans tracking-wide uppercase group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
