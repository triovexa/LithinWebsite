import { useState } from 'react';
import { Truck, Warehouse, Package, ShieldCheck, ZoomIn, X, MapPin } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'fleet' | 'warehouse' | 'freight' | 'heavy';
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fleet' | 'warehouse' | 'freight' | 'heavy'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Lithin Transport Contractor Fleet",
      category: "fleet",
      categoryLabel: "Transport Contractor Fleet",
      location: "Bangalore H.O & Pan-India Corridors",
      image: "/transport-contractor.jpg",
      description: "Dedicated commercial BharatBenz Heavy FTL vehicles and multi-axle trucks handling industrial cargo across India."
    },
    {
      id: 2,
      title: "Lithin Express Goods Booking Agency",
      category: "fleet",
      categoryLabel: "Booking Agency Fleet",
      location: "Chennai & Tirupur Industrial Hubs",
      image: "/booking-agency.jpg",
      description: "Express part-load (PTL) consignment dispatches, commercial parcel haulage, and doorstep pickup vehicles."
    },
    {
      id: 3,
      title: "Intercity Freight Logistics",
      category: "freight",
      categoryLabel: "Freight & Express",
      location: "Coimbatore Dispatch Center",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      description: "Fast-track express regional distribution ensuring same-day cargo dispatch between industrial corridors."
    },
    {
      id: 4,
      title: "Multi-Axle Heavy Cargo Haulage",
      category: "heavy",
      categoryLabel: "Heavy Haulage",
      location: "Hosur Industrial Zone",
      image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80",
      description: "Specialized multi-axle heavy haulage carrier engineered for overdimensional equipment and machinery."
    },
    {
      id: 5,
      title: "Last-Mile Distribution Vehicles",
      category: "fleet",
      categoryLabel: "Fleet Vehicles",
      location: "Madurai Commercial Center",
      image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1200&q=80",
      description: "Compact agile mini trucks for seamless last-mile intra-city delivery to retail and enterprise clients."
    },
    {
      id: 6,
      title: "Sealed Logistics Cargo Terminal",
      category: "warehouse",
      categoryLabel: "Warehousing & Hubs",
      location: "Chennai Port Terminal",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      description: "Customs-cleared port container handling and transfer point for intermodal transport logistics."
    },
    {
      id: 7,
      title: "Night Highway Express Haulage",
      category: "freight",
      categoryLabel: "Freight & Express",
      location: "NH44 Golden Quadrilateral",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      description: "Round-the-clock double-driver operation ensuring unbroken supply chain routes day and night."
    },
    {
      id: 8,
      title: "Heavy Machinery Transport Vehicle",
      category: "heavy",
      categoryLabel: "Heavy Haulage",
      location: "Tiruchirappalli Yard",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
      description: "Heavy-duty hydraulic low-bed trailer for heavy machinery, construction, and power sector transport."
    },
    {
      id: 9,
      title: "Secure Cargo Loading Operations",
      category: "warehouse",
      categoryLabel: "Warehousing & Hubs",
      location: "Salem Logistics Park",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      description: "Precision palletized cargo loading under strict safety protocols and real-time tracking verification."
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12">

      {/* Gallery Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-sans">
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">GALLERY</span>
        </h1>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
          Explore our fleet vehicles, heavy haulage operations, warehousing facilities, and express logistics in action across India.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {[
          { id: 'all', label: 'All Photos' },
          { id: 'fleet', label: 'Fleet Vehicles' },
          { id: 'warehouse', label: 'Warehousing & Hubs' },
          { id: 'freight', label: 'Freight & Express' },
          { id: 'heavy', label: 'Heavy Haulage' },
        ].map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id as any)}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 ${activeFilter === filter.id
              ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30 scale-105'
              : 'bg-slate-950/30 hover:bg-slate-900/40 backdrop-blur-md border border-emerald-500/20 text-gray-300 hover:text-white'
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group cursor-pointer rounded-3xl glass-panel border border-emerald-500/15 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-xl"
          >
            <div data-no-particles="true" className="relative h-60 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-transparent to-transparent opacity-80" />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/90 text-white text-[11px] font-extrabold uppercase rounded-full shadow-md backdrop-blur-sm">
                {item.categoryLabel}
              </span>

              {/* Zoom Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-emerald-950/40 backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-wide group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
                <span>View Enlarged Photo</span>
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Counter Section */}
      <div className="mt-8 p-8 rounded-3xl bg-slate-950/20 backdrop-blur-md border border-emerald-500/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <Truck className="w-7 h-7 text-emerald-400 mx-auto mb-2" />
          <span className="text-3xl sm:text-4xl font-black text-white block font-sans">150+</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1 block">Heavy Fleet Trucks</span>
        </div>
        <div>
          <Warehouse className="w-7 h-7 text-emerald-400 mx-auto mb-2" />
          <span className="text-3xl sm:text-4xl font-black text-white block font-sans">25+</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1 block">Logistics Hubs</span>
        </div>
        <div>
          <Package className="w-7 h-7 text-emerald-400 mx-auto mb-2" />
          <span className="text-3xl sm:text-4xl font-black text-white block font-sans">500k+</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1 block">Tons Delivered</span>
        </div>
        <div>
          <ShieldCheck className="w-7 h-7 text-emerald-400 mx-auto mb-2" />
          <span className="text-3xl sm:text-4xl font-black text-white block font-sans">99.8%</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1 block">Safe Transit Rate</span>
        </div>
      </div>

      {/* Lightbox / Enlarged View Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#0a0d24] border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col">

            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-emerald-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div data-no-particles="true" className="relative max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            {/* Modal Info */}
            <div className="p-6 sm:p-8 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase rounded-full">
                  {selectedImage.categoryLabel}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>

              <h2 className="text-2xl font-black text-white uppercase tracking-tight font-sans">
                {selectedImage.title}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                {selectedImage.description}
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="/services#quote"
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-3 bg-[#10b981] hover:bg-emerald-600 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition-all"
                >
                  Book Freight Service
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
