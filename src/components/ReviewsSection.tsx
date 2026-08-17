import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Building2, CheckCircle2, User } from 'lucide-react';
import SparkleHeading from './SparkleHeading';

interface ReviewItem {
  id: number;
  company: string;
  rating: number; // 5, 4.5, 4
  review: string;
  author: string;
  role: string;
  avatar: string;
  location: string;
  isCustomer?: boolean;
}

export default function ReviewsSection() {
  const reviews: ReviewItem[] = [
    {
      id: 1,
      company: 'Shayam Logistics',
      rating: 5, // 1st 5-Star Review
      review: "Lithin Transport container truck service is super fast and clean. 20 Ft and 32 Ft trucks arrive on time at loading point. Zero damage delivery every single trip.",
      author: 'S. Saravanan',
      role: 'Regular Freight Shipper',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
      location: 'Chennai, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 2,
      company: 'Madurai Retail Traders',
      rating: 4.5,
      review: "I regularly book 14 Ft containers to send commercial goods from Chennai to Madurai. Drivers are very polite, rates are genuine, and loading is always on time!",
      author: 'K. Manikandan',
      role: 'Regular Goods Shipper',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
      location: 'Madurai, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 3,
      company: 'Aero Plast Limited',
      rating: 4.5,
      review: "Booking container trucks through Lithin Transport has made our South India dispatch completely tension-free. 24/7 helpline desk is always active and responsive.",
      author: 'Mohammed Zaahid',
      role: 'Commercial Goods Customer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      location: 'Bangalore, Karnataka',
      isCustomer: true,
    },
    {
      id: 4,
      company: 'Tirupur Garments Hub',
      rating: 4.5,
      review: "Great service for Tirupur garment export dispatch! Called in the morning for 2 container trucks and got vehicle confirmation quickly. Very happy with their speed.",
      author: 'Praveen Kumar',
      role: 'Textile Goods Customer',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      location: 'Tirupur, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 5,
      company: 'War Ways',
      rating: 4,
      review: "Lithin Transport handles our bulk garment parcel dispatches with extra care. Live tracking and instant LR copies make accounting very simple.",
      author: 'Ranjith K J',
      role: 'Garment Parcel Shipper',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      location: 'Tirupur, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 6,
      company: 'Coimbatore Engg Works',
      rating: 5, // 2nd 5-Star Review
      review: "Been using Lithin Transport for 2 years for factory machine dispatches. Reasonable pricing, leakproof containers, and very dependable drivers.",
      author: 'V. Karthik',
      role: 'Factory Dispatch Customer',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      location: 'Coimbatore, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 7,
      company: 'KSP Groups',
      rating: 4.5,
      review: "Fair freight rates compared to market brokers. Prompt truck placements and clean container condition. Rated 4.5 out of 5!",
      author: 'Gautam Thota',
      role: 'Regular Freight Client',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
      location: 'Bangalore, Karnataka',
      isCustomer: true,
    },
    {
      id: 8,
      company: 'Hosur Electricals',
      rating: 4.5,
      review: "Sent electrical panel boards to Hyderabad. Container was fully sealed and leakproof during heavy rains. Excellent customer service!",
      author: 'Deepak Sharma',
      role: 'Small Business Customer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      location: 'Hosur, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 9,
      company: 'Mega Transports',
      rating: 4.5,
      review: "Consistent container lorry availability across Chennai, Bangalore, and Tirupur. Timely vehicle placement every single time.",
      author: 'P. Rahavendhra',
      role: 'Container Goods Customer',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
      location: 'Coimbatore, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 10,
      company: 'Trichy Hardware Mart',
      rating: 4.5,
      review: "Booked a 24 Ft container for urgent goods dispatch. Driver was very professional and delivered ahead of schedule. Highly recommended!",
      author: 'Suresh Babu',
      role: 'Container Freight Customer',
      avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
      location: 'Trichy, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 11,
      company: 'DHL Supply Chain India',
      rating: 4.5,
      review: "Lithin Transport delivers top freight rate visibility, vehicle tracking, and hassle-free POD management. Highly recommended for commercial transport.",
      author: 'Raghav Aggarwal',
      role: 'Factory Dispatch Customer',
      avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80',
      location: 'Delhi NCR',
      isCustomer: true,
    },
    {
      id: 12,
      company: 'RSR Logistics',
      rating: 4,
      review: "Reliable 32 Ft container booking. Real-time vehicle updates and straightforward billing make them a dependable transport partner.",
      author: 'Bala Rama Krishna',
      role: 'Regular Freight Client',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      location: 'Hyderabad, Telangana',
      isCustomer: true,
    },
    {
      id: 13,
      company: 'Kapoor Diesels Garage',
      rating: 4.5,
      review: "All truck documents are intact, 24/7 availability is guaranteed, and GPS tracking works smoothly every trip.",
      author: 'LK Karunanithi',
      role: 'Commercial Goods Customer',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
      location: 'Hosur, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 14,
      company: 'VS Logistics',
      rating: 4.5,
      review: "Over 100+ container trips completed with Lithin Transport. Best rental rates and extremely reliable team.",
      author: 'Rishi Vyas',
      role: 'Textile Export Shipper',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      location: 'Chennai, Tamil Nadu',
      isCustomer: true,
    },
    {
      id: 15,
      company: 'Varun Logistics',
      rating: 4.5,
      review: "Lithin Transport brought genuine freight rate transparency and accountability to container booking across South India.",
      author: 'A Sridhar',
      role: 'Commercial Freight Shipper',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
      location: 'Bangalore, Karnataka',
      isCustomer: true,
    },
    {
      id: 16,
      company: 'Jai Ambey Cargo',
      rating: 4,
      review: "Even for last-minute emergency goods dispatch, Lithin Transport team is always ready to help. Dedicated service!",
      author: 'Sanjay Agarwal',
      role: 'Regular Goods Shipper',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      location: 'Delhi NCR',
      isCustomer: true,
    },
    {
      id: 17,
      company: 'Bharat Roadways',
      rating: 4.5,
      review: "From container placement to tracking and final POD submission, Lithin Transport team responds quickly and professionally.",
      author: 'Rohit Agarwal',
      role: 'Industrial Freight Shipper',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      location: 'Mumbai, Maharashtra',
      isCustomer: true,
    },
  ];

  // Double the list for infinite looping without blank spots
  const displayList = [...reviews, ...reviews];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const touchStartX = useRef<number | null>(null);

  // Responsive items visible count
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = reviews.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex - 1 : prev - 1));
  };

  // Smooth 1-Second Auto Scroll Glide Effect (1000ms slide duration)
  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2500); // 2.5s slide interval with 1s smooth glide transition
    return () => clearInterval(interval);
  }, [isAutoScrolling, maxIndex]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-amber-400/30" />
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-slate-600" />);
    }

    return stars;
  };

  return (
    <section id="reviews" className="w-screen relative left-1/2 -translate-x-1/2 my-10 sm:my-14 scroll-mt-28 flex flex-col gap-6 sm:gap-8 z-10 overflow-hidden px-4 sm:px-10">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full mb-2">
        <SparkleHeading text="Truck Booking Reviews" />
      </div>

      {/* CAROUSEL WRAPPER WITH FULL EDGE-TO-EDGE INDIVIDUAL ULTRA-TRANSPARENT GLASSY CARDS */}
      <div
        className="relative group/carousel w-full"
        onMouseEnter={() => setIsAutoScrolling(false)}
        onMouseLeave={() => setIsAutoScrolling(true)}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const diffX = touchStartX.current - e.changedTouches[0].clientX;
          if (diffX > 50) nextSlide();
          if (diffX < -50) prevSlide();
          touchStartX.current = null;
        }}
      >
        {/* Floating Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-emerald-400 text-slate-900 hover:text-slate-950 border border-slate-200 shadow-2xl flex items-center justify-center transition-all cursor-pointer hover:scale-110"
          title="Previous Review"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 font-bold" />
        </button>

        {/* Floating Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-emerald-400 text-slate-900 hover:text-slate-950 border border-slate-200 shadow-2xl flex items-center justify-center transition-all cursor-pointer hover:scale-110"
          title="Next Review"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 font-bold" />
        </button>

        {/* CAROUSEL SLIDES (App-like Smooth 1-Second Glide Animation & Zero Mobile Cut-off) */}
        <div className="overflow-hidden py-4 w-full">
          <div
            className="flex gap-5 sm:gap-6 transition-transform duration-1000 ease-in-out"
            style={{
              transform: itemsPerPage === 1 
                ? `translateX(calc(-${currentIndex} * (100% + 1.25rem)))`
                : `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {displayList.map((rev, idx) => (
              <div
                key={`${rev.id}-${idx}`}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 flex flex-col justify-between p-5 sm:p-6 rounded-3xl glass-panel bg-[#060b1e]/35 backdrop-blur-2xl border border-emerald-500/35 hover:border-emerald-400 hover:bg-[#060b1e]/60 shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex flex-col gap-2.5">
                  {/* Top Row: Company Name & Rating (Underline Removed) */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col">
                      <h3 className="text-base font-black text-white font-sans tracking-wide uppercase group-hover:text-emerald-300 transition-colors">
                        {rev.company}
                      </h3>
                      <span className="text-[10px] font-semibold text-gray-400 flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3 h-3 text-emerald-400" />
                        <span>{rev.location}</span>
                      </span>
                    </div>
                    
                    {/* Star Rating Badge */}
                    <div className="flex items-center gap-0.5 bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/30 shrink-0">
                      {renderStars(rev.rating)}
                      <span className="text-[11px] font-black text-amber-400 ml-1 font-mono">
                        {rev.rating}
                      </span>
                    </div>
                  </div>

                  {/* Review Quote Text */}
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal italic">
                    "{rev.review}"
                  </p>
                </div>

                {/* Bottom Compact Row: Default Grey User Circle Icon & Author Name */}
                <div className="flex items-center gap-2.5 mt-3 pt-2">
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-white/10 text-gray-400 flex items-center justify-center shrink-0">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                  </div>

                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-black text-white font-sans tracking-wide flex items-center gap-1">
                      <span>{rev.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </span>
                    <span className={`text-[11px] font-extrabold uppercase mt-0.5 flex items-center gap-1 ${
                      rev.isCustomer ? 'text-amber-400' : 'text-emerald-400'
                    }`}>
                      <span>{rev.role}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: Math.min(10, maxIndex) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex % maxIndex === idx
                  ? 'w-8 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
