import { useEffect, useRef } from 'react';
import TrustStatsBanner from '../components/TrustStatsBanner';
import JourneyTimelineSection from '../components/JourneyTimelineSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import BookingFeaturesSection from '../components/BookingFeaturesSection';
import ReviewsSection from '../components/ReviewsSection';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play policy handling
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 px-3 sm:px-8 max-w-7xl mx-auto flex flex-col gap-4 sm:gap-8 md:gap-10">

      {/* 1. HERO SECTION - CLEAN, FLOATING FULL-WIDTH HD VIDEO (NO SPARKLES & NO BORDER ANIMATIONS) */}
      <section id="hero-video-section" className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden px-3 sm:px-8 mt-1">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-emerald-500/30 bg-slate-950 shadow-[0_12px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(16,185,129,0.15)] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full transition-all">
          
          {/* Instant Vivid Bright Full HD Video Stream (Zero Cropping in Mobile) */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-100 transition-all duration-300 brightness-105 contrast-105 rounded-2xl sm:rounded-3xl"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-truck-driving-on-the-highway-at-sunset-41581-large.mp4" type="video/mp4" />
          </video>

          {/* Clean Subtle Glass Edge Highlight */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none ring-1 ring-inset ring-white/10" />
        </div>
      </section>

      {/* 2. TRUST & STATS BANNER SECTION (RIGHT BELOW VIDEO AS REQUESTED IN IMAGE 1) */}
      <TrustStatsBanner />

      {/* 3. INTERACTIVE 2020 - 2026 JOURNEY TIMELINE (MATCHING IMAGE 2 DESIGN) */}
      <JourneyTimelineSection />

      {/* 4. WHY CHOOSE LITHIN TRANSPORT COMPARISON SECTION */}
      <WhyChooseUsSection />

      {/* 5. EVERYTHING YOU NEED FOR ONLINE TRUCK BOOKING (MATCHING ATTACHED SCREENSHOT) */}
      <BookingFeaturesSection />

      {/* 6. TRUCK BOOKING REVIEWS & CLIENT TESTIMONIALS CAROUSEL */}
      <ReviewsSection />

    </div>
  );
}