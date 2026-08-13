import { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink, Building2, Star, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

export interface BranchLocation {
  id: string;
  name: string;
  tag: string;
  city: string;
  isHeadOffice: boolean;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  googleMapsLink: string;
}

export default function BranchNetworkSection() {
  const branches: BranchLocation[] = [
    {
      id: 'bangalore',
      name: 'Bangalore (Head Office)',
      tag: 'Corporate Head Office & Central Dispatch Hub',
      city: 'Bengaluru',
      isHeadOffice: true,
      address: '#329, Pavithra Nilayam, 2nd B Main, OMBR Layout, Bengaluru, Karnataka - 560043',
      phone: '+91 95667 38884',
      email: 'arul.p@lithintransport.in',
      mapEmbedUrl: 'https://maps.google.com/maps?q=329%2C%20Pavithra%20Nilayam%2C%202%20B%20Main%2C%20OMBR%20Layout%2C%20Bengalore%20560043&t=&z=15&ie=UTF8&iwloc=&output=embed',
      googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=329+Pavithra+Nilayam+2+B+Main+OMBR+Layout+Bengalore+560043',
    },
    {
      id: 'tirupur',
      name: 'Tirupur (Branch Office)',
      tag: 'Regional Branch & Textile Freight Terminal',
      city: 'Tirupur',
      isHeadOffice: false,
      address: '13/162, Amman Nagar, 1st Street, Rakkiyapalayam, Avinashi, Tirupur, Tamil Nadu - 641654',
      phone: '',
      email: 'arul.p@lithintransport.in',
      mapEmbedUrl: 'https://maps.google.com/maps?q=13%2F162%2C%20Amman%20Nagar%2C1%20ST%20Street%2C%20Rakkiyapalayam%2C%20Avinashi%2C%20Tirupur%20641654&t=&z=15&ie=UTF8&iwloc=&output=embed',
      googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=13/162+Amman+Nagar+1st+Street+Rakkiyapalayam+Avinashi+Tirupur+641654',
    },
    {
      id: 'chennai',
      name: 'Chennai (Branch Office)',
      tag: 'Regional Branch Office & Seaport Freight Hub',
      city: 'Chennai',
      isHeadOffice: false,
      address: 'Siva Sakthi Enterprises, No.5, Madhavaram Redhills High Road, Vadaperumbakkam, Chennai, Tamil Nadu - 600060 (GST: 33AKEPT5983B1Z2)',
      phone: '',
      email: 'arul.p@lithintransport.in',
      mapEmbedUrl: 'https://maps.google.com/maps?q=No.5%20Madhavaram%20Redhils%20High%20Road%20Vadaperumbakkam%20Chennai%20600060&t=&z=15&ie=UTF8&iwloc=&output=embed',
      googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=No+5+Madhavaram+Redhills+High+Road+Vadaperumbakkam+Chennai+600060',
    },
  ];

  const [selectedBranch, setSelectedBranch] = useState<BranchLocation>(branches[0]);

  const handlePhoneClick = (e: React.MouseEvent, phone: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText(phone);
      toast.success(`Phone number ${phone} copied to clipboard!`);
    }
  };

  return (
    <section id="branch-locations" className="my-12 scroll-mt-24 flex flex-col gap-8">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 w-fit">
            <Building2 className="w-4 h-4 text-emerald-400" />
            Official Office Locations
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight font-sans">
            Our Head Office & Branches
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 font-normal max-w-2xl">
            Select any official office location on the left to view exact Google Maps directions, address details, and direct contact helplines.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-950/40 border border-emerald-500/20 px-4 py-2 rounded-2xl text-xs text-emerald-400 font-bold uppercase w-fit">
          <MapPin className="w-4 h-4 text-emerald-400" />
          <span>Interactive Live Map View</span>
        </div>
      </div>

      {/* INTERACTIVE BRANCH SELECTOR & GOOGLE MAP CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: 3 SELECTABLE BRANCH CARDS */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {branches.map((b) => {
            const isSelected = selectedBranch.id === b.id;
            return (
              <div
                key={b.id}
                onClick={() => setSelectedBranch(b)}
                className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#081328] border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.25)]'
                    : 'bg-[#060a1d]/60 border border-white/10 hover:border-emerald-500/40 hover:bg-[#060a1d]/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border ${
                      b.isHeadOffice
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                        : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    }`}>
                      {b.isHeadOffice ? <Star className="w-3 h-3 fill-amber-400" /> : <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                      <span>{b.isHeadOffice ? 'HEAD OFFICE' : 'BRANCH OFFICE'}</span>
                    </span>

                    {isSelected && (
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Active Map
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-black text-white uppercase font-sans tracking-wide">
                    {b.name}
                  </h3>
                  <p className={`text-xs font-bold mt-0.5 mb-3 ${b.isHeadOffice ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {b.tag}
                  </p>

                  <div className="flex flex-col gap-2 text-xs text-gray-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-relaxed text-gray-200">{b.address}</span>
                    </div>

                    <div className="flex flex-col gap-1 pt-2 border-t border-white/10 text-[11px]">
                      {b.phone && (
                        <a
                          href={`tel:${b.phone.replace(/\s+/g, '')}`}
                          onClick={(e) => handlePhoneClick(e, b.phone)}
                          className="flex items-center gap-1.5 font-bold text-white hover:text-emerald-400 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Phone: {b.phone}</span>
                        </a>
                      )}

                      <div className="flex flex-col text-[10px] text-emerald-300 font-semibold mt-0.5">
                        <div className="flex items-center gap-1">
                          <Mail className="w-3 h-3 text-emerald-400" />
                          <span>Emails:</span>
                        </div>
                        <span className="text-[9.5px] text-emerald-300 font-medium pl-4">
                          arul.p@lithintransport.in | deepu@lithintransport.in | admin@lithintransport.in
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: LIVE GOOGLE MAP IFRAME WITH EMBEDDED DIRECT MAP LINK */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-[#060b1e] flex flex-col">
          
          {/* Map Header Overlay */}
          <div className="p-4 bg-[#060b1e]/95 backdrop-blur-md border-b border-emerald-500/30 flex items-center justify-between gap-3 z-10">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs font-black text-white uppercase tracking-wider block font-sans">
                  {selectedBranch.name} Location Map
                </span>
                <span className="text-[10px] text-emerald-400 font-bold block">
                  {selectedBranch.address}
                </span>
              </div>
            </div>

            {/* Open in Google Maps External Button */}
            <a
              href={selectedBranch.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-emerald-500/30 transition-all shrink-0 cursor-pointer"
              title="Open Location in Google Maps"
            >
              <span>Open Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Google Maps Frame */}
          <div className="relative w-full flex-1 min-h-[320px] bg-[#02040c]">
            <iframe
              key={selectedBranch.id}
              title={`Google Maps Location for ${selectedBranch.name}`}
              src={selectedBranch.mapEmbedUrl}
              className="w-full h-full border-0 min-h-[320px] sm:min-h-[400px] filter brightness-95 contrast-105"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

      </div>

    </section>
  );
}
