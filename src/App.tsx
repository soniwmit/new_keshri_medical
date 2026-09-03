import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { WMITPopupModal } from './components/WMITPopupModal';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { WifiOff } from 'lucide-react';

export default function App() {
  const isOnline = useOnlineStatus();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [selectedMedicineName, setSelectedMedicineName] = useState<string>('');
  const [isWMITModalOpen, setIsWMITModalOpen] = useState<boolean>(false);

  // Sync theme changes with HTML document class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenWhatsAppOrder = (medName?: string) => {
    setSelectedMedicineName(medName || '');
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppOrder = () => {
    setIsWhatsAppModalOpen(false);
    setSelectedMedicineName('');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] transition-colors duration-200">
        {/* Offline Status Banner */}
        {!isOnline && (
          <div
            role="alert"
            className="bg-amber-600 text-white text-xs py-2 px-4 text-center font-semibold flex items-center justify-center gap-2 sticky top-0 z-50 shadow-md"
          >
            <WifiOff className="w-4 h-4 shrink-0" />
            <span>
              You are currently browsing offline. Cached pharmacy pages and saved medicine info remain accessible!
            </span>
          </div>
        )}

        {/* Global Navigation Header */}
        <Navbar
          onOpenWhatsAppOrder={handleOpenWhatsAppOrder}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />

        {/* Page Main Content */}
        <main className="flex-1 w-full pb-14 sm:pb-0">
          <Routes>
            <Route
              path="/"
              element={<Home onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route
              path="/about"
              element={<About onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route
              path="/services"
              element={<Services onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route
              path="/contact"
              element={<Contact onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Floating Action Controls */}
        <FloatingActions onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />

        {/* Global Footer with Mandatory WMIT Tracking & Branding */}
        <Footer onOpenWMITPopup={() => setIsWMITModalOpen(true)} />

        {/* WhatsApp Order & Prescription Modal */}
        <WhatsAppOrderModal
          isOpen={isWhatsAppModalOpen}
          onClose={handleCloseWhatsAppOrder}
          initialMedicineName={selectedMedicineName}
        />

        {/* WMIT Branded Popup Modal */}
        <WMITPopupModal
          isOpen={isWMITModalOpen}
          onClose={() => setIsWMITModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
