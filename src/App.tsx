import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white bg-[#05060f] selection:bg-emerald-500 selection:text-white animated-dot-bg">
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
          </Routes>
        </main>

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Main Footer */}
        <Footer />
      </div>
    </Router>
  );
}
