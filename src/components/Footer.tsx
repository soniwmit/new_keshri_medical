import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../data/config';
import { WMITPopupModal } from './WMITPopupModal';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Heart,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenWhatsAppOrder?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsAppOrder }) => {
  const [isWmitModalOpen, setIsWmitModalOpen] = useState(false);

  // Step 11 — Mandatory Global Tracking Hook logic integrated into Footer
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    if (!cid) return;
    let visitorId =
      localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId =
      sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, '').split('/').pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) =>
      document.addEventListener(evt, resetIdleTimer, { passive: true })
    );
    resetIdleTimer();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach((evt) =>
        document.removeEventListener(evt, resetIdleTimer)
      );
      clearTimeout(idleTimer);
    };
  }, []);

  // Listen to clicks on any .wmit-popup-trigger elements
  useEffect(() => {
    const handleTriggerClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.wmit-popup-trigger');
      if (target) {
        e.preventDefault();
        setIsWmitModalOpen(true);
      }
    };
    document.addEventListener('click', handleTriggerClick);
    return () => document.removeEventListener('click', handleTriggerClick);
  }, []);

  return (
    <footer className="bg-[#141412] text-[#A8A49A] border-t border-[#2C2B27]" id="main-footer">
      {/* Top Banner Accent - Editorial Warm Brass / Apothecary Green Rule */}
      <div className="h-0.5 bg-gradient-to-r from-[#9C7B38] via-[#1A4329] to-[#9C7B38]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-[#2C2B27]">
          {/* Column 1: Business Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1A4329] border border-[#12301D] flex items-center justify-center text-white shadow-xs">
                <img 
                  src="/icons/icon.svg" 
                  alt="New Keshri Medical Store Logo" 
                  className="w-8 h-8 rounded-md"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-base tracking-tight text-[#F4EFE6] block">
                  NEW KESHRI
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#9C7B38] block -mt-1">
                  Medical Store
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#8E8A80]">
              {BUSINESS_CONFIG.tagline}. Serving the healthcare and pharmaceutical requirements of Arwal Sipah Panchayat and surrounding communities with authentic, cold-chain protected medicines.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#C4BEB2]">
                <ShieldCheck className="w-4 h-4 text-[#9C7B38] shrink-0" />
                <span>100% Genuine Branded & Generic Medicines</span>
              </div>
              <div className="flex items-center gap-2 text-[#C4BEB2]">
                <Clock className="w-4 h-4 text-[#9C7B38] shrink-0" />
                <span>Open All 7 Days (7:30 AM – 10:00 PM)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Patient Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#F4EFE6]">
              Navigation & Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#F4EFE6] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#9C7B38]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F4EFE6] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#9C7B38]" /> About Our Store & Pharmacist
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F4EFE6] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#9C7B38]" /> Services & Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F4EFE6] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#9C7B38]" /> Store Gallery & Shelves
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F4EFE6] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#9C7B38]" /> Contact & Location Map
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#F4EFE6] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#9C7B38]" /> Customer / Staff Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Working Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#F4EFE6]">
              Store Contact & Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9C7B38] shrink-0 mt-0.5" />
                <span className="text-[#C4BEB2] leading-snug">
                  {BUSINESS_CONFIG.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9C7B38] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-[#C4BEB2] hover:text-[#F4EFE6] transition-colors">
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9C7B38] shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-[#C4BEB2] hover:text-[#F4EFE6] transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="pt-2 border-t border-[#2C2B27] text-[11px] text-[#8E8A80] space-y-1">
                <p><strong className="text-[#E5E0D8]">Daily Timing:</strong> 7:30 AM – 10:00 PM</p>
                <p><strong className="text-[#E5E0D8]">Emergency:</strong> Available 24/7 on call dispatch</p>
              </div>
            </div>
          </div>

          {/* Column 4: Google Map & Directions */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#F4EFE6]">
              Location in Arwal
            </h4>
            <div className="rounded-lg overflow-hidden border border-[#2C2B27] bg-[#1C1C19]">
              <iframe
                title="New Keshri Medical Store Google Map"
                src="https://maps.google.com/maps?q=Arwal%20NH%20110%20Jehanabad%20Rd%20Bihar%20804401&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="130"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <a
              href={BUSINESS_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#9C7B38] hover:text-[#C4BEB2] transition-colors"
            >
              <span>Get GPS Directions on Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Legal Disclaimers & Policies */}
        <div className="py-6 border-b border-[#2C2B27] flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#8E8A80]">
          <p className="max-w-2xl leading-relaxed">
            <strong className="text-[#C4BEB2]">Disclaimer:</strong> Content and stock information on this portal is intended for informational and pharmacy fulfillment purposes. Prescription medications (Schedule H & H1) are dispensed strictly against a valid doctor prescription in compliance with Indian Drugs and Cosmetics Act.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#C4BEB2] cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-[#C4BEB2] cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="hover:text-[#C4BEB2] cursor-pointer">Refund & Return Policy</span>
          </div>
        </div>

        {/* Copyright & Mandatory WMIT Anchor Trigger */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E8A80]">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.
          </div>

          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVE EXACTLY:
              <a href="#" class="wmit-popup-trigger">Developed by WMIT</a>
              Placed in the center of the copyright line and opens in new tab / popup. */}
          <div className="text-center">
            <a 
              href="#" 
              className="wmit-popup-trigger text-[#9C7B38] hover:text-[#C4BEB2] font-medium underline underline-offset-4 decoration-[#9C7B38]/50 hover:decoration-[#C4BEB2] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsWmitModalOpen(true);
              }}
            >
              Developed by WMIT
            </a>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#8E8A80]">
            <span>NH-110, Arwal Sipah Panchayat, Bihar 804401</span>
          </div>
        </div>
      </div>

      {/* Interactive WMIT Modal */}
      <WMITPopupModal isOpen={isWmitModalOpen} onClose={() => setIsWmitModalOpen(false)} />
    </footer>
  );
};
