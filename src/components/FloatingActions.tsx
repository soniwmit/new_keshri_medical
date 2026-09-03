import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { MessageSquare, PhoneCall, ArrowUp, Navigation } from 'lucide-react';

interface FloatingActionsProps {
  onOpenWhatsAppOrder: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppOrder }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Right-Side Action Controls */}
      <div className="fixed bottom-20 sm:bottom-8 right-4 z-40 flex flex-col items-end gap-3">
        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            id="btn-back-to-top"
            aria-label="Scroll back to top"
            className="w-11 h-11 rounded-full bg-[#141412] text-[#F9F7F2] border border-[#2C2B27] shadow-md backdrop-blur-md flex items-center justify-center hover:bg-[#1C1C19] transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <ArrowUp className="w-5 h-5 text-[#9C7B38]" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          id="btn-floating-call"
          aria-label="Call New Keshri Medical Store"
          className="hidden sm:flex w-12 h-12 rounded-full bg-[#141412] hover:bg-[#1C1C19] text-[#9C7B38] border border-[#2C2B27] shadow-md items-center justify-center transition-all transform hover:-translate-y-0.5 active:scale-95"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp Button with pulse badge */}
        <div className="relative group">
          <button
            type="button"
            onClick={onOpenWhatsAppOrder}
            id="btn-floating-whatsapp"
            aria-label="Chat and order medicines on WhatsApp"
            className="w-14 h-14 rounded-full bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] shadow-lg border border-[#2C2B27] flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-6 h-6 text-[#F9F7F2]" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#A64B2A] ring-2 ring-[#F9F7F2] dark:ring-[#141412] animate-pulse" />
          </button>
          <div className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity bg-[#141412] text-[#F9F7F2] border border-[#2C2B27] editorial-tag py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md">
            Order via WhatsApp
          </div>
        </div>
      </div>

      {/* Sticky Mobile Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F9F7F2]/95 dark:bg-[#141412]/95 backdrop-blur-md border-t border-[#E5E0D8] dark:border-[#2C2B27] p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          className="flex-1 py-2.5 px-3 rounded-lg bg-white dark:bg-[#1C1C19] text-[#1A1A1A] dark:text-[#F4EFE6] border border-[#E5E0D8] dark:border-[#2C2B27] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:bg-[#F2EFE9]"
        >
          <PhoneCall className="w-4 h-4 text-[#9C7B38]" />
          <span>Call Store</span>
        </a>

        <button
          type="button"
          onClick={onOpenWhatsAppOrder}
          className="flex-[1.4] py-2.5 px-3 rounded-lg bg-[#1A4329] active:bg-[#12301D] text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </button>

        <a
          href={BUSINESS_CONFIG.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-white dark:bg-[#1C1C19] text-[#1A1A1A] dark:text-[#F4EFE6] border border-[#E5E0D8] dark:border-[#2C2B27] flex items-center justify-center"
          aria-label="Map directions"
        >
          <Navigation className="w-4 h-4 text-[#9C7B38]" />
        </a>
      </div>
    </>
  );
};
