import React from 'react';
import { X, ExternalLink, Globe, ShieldCheck, Award, Phone, Mail, Sparkles } from 'lucide-react';

interface WMITPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WMITPopupModal: React.FC<WMITPopupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wmit-modal-title"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden text-slate-900 dark:text-white">
        {/* Header with WMIT Branding */}
        <div className="p-6 bg-gradient-to-r from-blue-700 via-indigo-700 to-emerald-600 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close WMIT details"
            className="absolute top-4 right-4 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center font-extrabold text-xl tracking-wider text-white shadow-inner">
              WMIT
            </div>
            <div>
              <h3 id="wmit-modal-title" className="text-lg font-bold">
                WebMaker IT Solutions
              </h3>
              <p className="text-xs text-blue-100 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                Verified Digital Technology Partner
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 text-xs sm:text-sm">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            This high-performance healthcare web platform and Progressive Web Application (PWA) was designed, engineered, and optimized by <strong>WebMaker IT Solutions (WMIT)</strong> for <strong>New Keshri Medical Store</strong>.
          </p>

          <div className="space-y-2.5 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
              <Award className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full-stack React & PWA Mobile Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Local SEO, Schema.org & Google Business Setup</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
              <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Real-Time Inventory & WhatsApp Ordering Systems</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              href="https://crm.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Visit Official Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        <div className="py-2.5 px-6 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 text-center">
          &copy; {new Date().getFullYear()} WebMaker IT Solutions. All rights reserved.
        </div>
      </div>
    </div>
  );
};
