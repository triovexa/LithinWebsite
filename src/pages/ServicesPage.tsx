import { useEffect } from 'react';
import BranchNetworkSection from '../components/BranchNetworkSection';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="relative min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
      {/* NATIONWIDE MAP & NETWORK LOCATIONS SECTION WITH FULL STATES & DISTRICTS DISPATCH EXPLORER */}
      <div id="nationwide-map">
        <BranchNetworkSection />
      </div>
    </div>
  );
}
