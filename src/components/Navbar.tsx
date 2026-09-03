import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../data/config';
import { PWAInstallButton } from './PWAInstallButton';
import { 
  PhoneCall, 
  MessageSquare, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Clock, 
  MapPin, 
  Sparkles,
  Search
} from 'lucide-react';

interface NavbarProps {
  onOpenWhatsAppOrder: (medName?: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWhatsAppOrder,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Scroll detection for enhanced sticky glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Announcement & Emergency Bar */}
      <div className="bg-[#1A1A1A] text-[#F9F7F2] text-xs py-1.5 px-4 border-b border-[#2C2B27]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-[#C4BEB2]">
              <MapPin className="w-3.5 h-3.5 text-[#9C7B38]" />
              <span>NH-110 Jehanabad Rd, Arwal Sipah Panchayat, Bihar</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#E5E0D8] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#9C7B38]" />
              <span>Open 7:30 AM – 10:00 PM Daily</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-[11px]">
            <span className="text-[#8E8A80] hidden md:inline">24/7 Emergency Dispatch:</span>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="font-bold text-[#F9F7F2] hover:text-[#9C7B38] transition-colors inline-flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-[#9C7B38]" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F9F7F2]/95 dark:bg-[#141412]/95 backdrop-blur-md shadow-xs border-b border-[#E5E0D8] dark:border-[#2C2B27] py-2.5'
            : 'bg-[#F9F7F2] dark:bg-[#141412] border-b border-[#E5E0D8] dark:border-[#2C2B27] py-3.5'
        }`}
        id="main-navigation-bar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-lg bg-[#1A4329] border border-[#12301D] flex items-center justify-center p-1.5 shadow-xs group-hover:scale-105 transition-transform">
                <img
                  src="/icons/icon.svg"
                  alt="New Keshri Medical Store"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#1A1A1A] dark:text-[#F4EFE6] leading-tight flex items-center gap-1.5">
                  <span>NEW KESHRI</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1A4329] dark:bg-[#64AB82]" />
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold text-[#1A4329] dark:text-[#64AB82] -mt-0.5">
                  Medical Store &bull; Arwal
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-xs uppercase tracking-wider font-semibold transition-all ${
                      isActive
                        ? 'text-[#1A4329] dark:text-[#64AB82] border-b-2 border-[#1A4329] dark:border-[#64AB82] font-bold'
                        : 'text-[#5E5B54] dark:text-[#A8A49A] hover:text-[#1A1A1A] dark:hover:text-[#F4EFE6]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right Action Controls */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Mandatory In-App "📲 Add to Home" PWA Install Button */}
              <PWAInstallButton variant="nav" />

              {/* Dark Mode Toggle */}
              <button
                onClick={onToggleDarkMode}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] text-[#5E5B54] dark:text-[#A8A49A] hover:bg-[#F2EFE9] dark:hover:bg-[#1C1C19] transition-colors"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-[#9C7B38]" /> : <Moon className="w-4 h-4 text-[#1A1A1A]" />}
              </button>

              {/* Quick WhatsApp Order Button */}
              <button
                type="button"
                onClick={() => onOpenWhatsAppOrder()}
                id="nav-whatsapp-order-btn"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider border border-[#1A4329] shadow-xs transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
              </button>

              {/* Call Button (Mobile & Desktop) */}
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                id="nav-call-btn"
                className="p-2 sm:px-3 sm:py-2 rounded-lg bg-white dark:bg-[#1C1C19] hover:bg-[#F2EFE9] dark:hover:bg-[#252521] border border-[#E5E0D8] dark:border-[#2C2B27] text-[#1A1A1A] dark:text-[#F4EFE6] font-semibold text-xs transition-colors flex items-center gap-1.5"
                aria-label="Call New Keshri Medical Store"
              >
                <PhoneCall className="w-4 h-4 text-[#1A4329] dark:text-[#64AB82]" />
                <span className="hidden md:inline">Call Now</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] text-[#1A1A1A] dark:text-[#F4EFE6] hover:bg-[#F2EFE9] dark:hover:bg-[#1C1C19] transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-[#F9F7F2] dark:bg-[#141412] border-b border-[#E5E0D8] dark:border-[#2C2B27] space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold text-center transition-all border ${
                      isActive
                        ? 'border-[#1A4329] dark:border-[#64AB82] text-[#1A4329] dark:text-[#64AB82] bg-white dark:bg-[#1C1C19] font-bold'
                        : 'border-[#E5E0D8] dark:border-[#2C2B27] text-[#5E5B54] dark:text-[#A8A49A] hover:bg-white dark:hover:bg-[#1C1C19]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile PWA Install */}
            <PWAInstallButton variant="mobile-menu" />

            {/* Mobile WhatsApp Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenWhatsAppOrder();
              }}
              className="w-full py-3 px-4 rounded-lg bg-[#1A4329] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send WhatsApp Order & Prescription</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
