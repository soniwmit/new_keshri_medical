import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';
import { Smartphone, Download, Check } from 'lucide-react';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'mobile-menu' | 'banner' | 'floating';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'nav',
  className = ''
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  // If already running inside standalone PWA mode, hide install button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setJustInstalled(true);
        setTimeout(() => setJustInstalled(false), 4000);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // Fallback for browsers with no direct prompt or desktop manual guidance
      setShowIOSGuide(true);
    }
  };

  if (justInstalled) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200">
        <Check className="w-3.5 h-3.5" /> App Installed
      </span>
    );
  }

  if (variant === 'mobile-menu') {
    return (
      <>
        <button
          type="button"
          onClick={handleInstallClick}
          id="btn-pwa-mobile-menu"
          aria-label="Add New Keshri Medical Store app to home screen"
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold text-sm shadow-md hover:from-emerald-700 hover:to-teal-800 transition-all ${className}`}
        >
          <span className="flex items-center gap-2">
            <span className="text-base">📲</span>
            <span>Add to Home</span>
          </span>
          <Download className="w-4 h-4 text-emerald-100" />
        </button>
        <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
      </>
    );
  }

  if (variant === 'banner') {
    return (
      <>
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-emerald-950 dark:text-emerald-100 ${className}`}>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm">
            <span className="text-xl">📲</span>
            <div>
              <p className="font-semibold text-emerald-900 dark:text-emerald-200">Install New Keshri App</p>
              <p className="text-xs text-emerald-700 dark:text-emerald-400">Order medicines in 1 tap, track stock & browse offline.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleInstallClick}
            id="btn-pwa-banner-install"
            aria-label="Install New Keshri App"
            className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-1.5 min-h-[44px]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install Now</span>
          </button>
        </div>
        <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
      </>
    );
  }

  // Default navbar button: sleek, prominent, compliant
  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        id="btn-pwa-nav-install"
        aria-label="Add New Keshri Medical Store app to your home screen"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 active:bg-emerald-200 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/80 dark:hover:bg-emerald-900 transition-all cursor-pointer min-h-[38px] ${className}`}
      >
        <span className="text-sm">📲</span>
        <span className="hidden sm:inline">Add to Home</span>
        <span className="sm:hidden">Install</span>
      </button>

      <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
    </>
  );
};
