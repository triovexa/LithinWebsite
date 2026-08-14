import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import GlobalBookingModal from './components/GlobalBookingModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen text-slate-200 bg-[#030511] selection:bg-emerald-500 selection:text-white overflow-x-hidden">
        {/* Ambient Glowing Orbs & Tech Mesh for Rich Mass Website Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top Left Glowing Radial Glow */}
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px]" />
          {/* Middle Right Radial Glow */}
          <div className="absolute top-1/3 -right-32 w-[700px] h-[700px] bg-teal-500/12 rounded-full blur-[160px]" />
          {/* Bottom Left Glow */}
          <div className="absolute -bottom-32 -left-32 w-[650px] h-[650px] bg-emerald-600/15 rounded-full blur-[150px]" />
          {/* Subtle Cyber Logistics Grid Mesh */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
        </div>

        {/* Toast Notification Container */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#0a0d24',
              color: '#ffffff',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '12px',
              fontSize: '13px',
              boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.25)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
          }}
        />

        {/* Interactive Dynamic Emerald Green Particle Background */}
        <ParticleBackground />

        {/* Top Navigation Header */}
        <Navbar />

        {/* Route Pages (Selvamani Scope) */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/fleet" element={<GalleryPage />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Global Booking Modal Triggered by Route Cards & Book Buttons */}
        <GlobalBookingModal />

        {/* Main Footer */}
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
