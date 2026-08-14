import { useEffect } from 'react';
import CoreServicesSection from '../components/CoreServicesSection';
import BranchNetworkSection from '../components/BranchNetworkSection';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="relative min-h-screen pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
      {/* 1. NATIONWIDE MAP & NETWORK LOCATIONS SECTION WITH FULL STATES & DISTRICTS DISPATCH EXPLORER */}
      <div id="nationwide-map">
        <BranchNetworkSection />
      </div>

      {/* 2. LITHIN TRANSPORT CORE SERVICES EXPLANATION (TRANSPORT CONTRACTOR & BOOKING AGENCY - AT THE BOTTOM AS REQUESTED) */}
      <CoreServicesSection />
    </div>
  );
}