import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FleetPage from './pages/FleetPage';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-slate-900 bg-[#e0f2fe] selection:bg-sky-500 selection:text-white animated-dot-bg">
        {/* Toast Notification Container */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid rgba(186, 230, 253, 0.8)',
              borderRadius: '12px',
              fontSize: '13px',
              boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.2)',
            },
            success: {
              iconTheme: {
                primary: '#0284c7',
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

        {/* Interactive Dynamic Particle Background */}
        <ParticleBackground />

        {/* Top Navigation Header */}
        <Navbar />

        {/* Route Pages (Selvamani Scope) */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
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
