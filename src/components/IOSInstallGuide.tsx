import React from 'react';
import { Share, PlusSquare, X, CheckCircle2, Smartphone } from 'lucide-react';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
  appName?: string;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({
  isOpen,
  onClose,
  appName = "New Keshri Medical Store"
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-modal-title"
    >
      <div 
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800"
        id="ios-install-guide-dialog"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 id="ios-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
                Add to Home Screen
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Install on iPhone or iPad</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close guide"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-5 space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Install <strong>{appName}</strong> directly to your home screen for quick 1-tap medicine orders, stock checks, and offline support.
          </p>

          <ol className="space-y-3">
            <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                1
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-200">
                Tap the <strong className="text-slate-900 dark:text-white inline-flex items-center gap-1 font-semibold">Share button <Share className="w-3.5 h-3.5 text-blue-600 inline" /></strong> in Safari's bottom toolbar.
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                2
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-200">
                Scroll down and select <strong className="text-slate-900 dark:text-white inline-flex items-center gap-1 font-semibold">Add to Home Screen <PlusSquare className="w-3.5 h-3.5 text-emerald-600 inline" /></strong>.
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                3
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-200">
                Tap <strong className="text-slate-900 dark:text-white font-semibold">Add</strong> in the top right corner. The app icon will appear on your screen!
              </div>
            </li>
          </ol>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-colors dark:bg-emerald-600 dark:hover:bg-emerald-500 flex items-center justify-center gap-1.5"
        >
          <CheckCircle2 className="w-4 h-4" /> Got it, Close
        </button>
      </div>
    </div>
  );
};
