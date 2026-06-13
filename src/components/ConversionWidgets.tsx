/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  PhoneCall, 
  X, 
  Sparkles, 
  Check, 
  Gift, 
  ArrowRight,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

interface ConversionWidgetsProps {
  onAuditClick: () => void;
  onWhatsappClick: () => void;
}

export default function ConversionWidgets({ onAuditClick, onWhatsappClick }: ConversionWidgetsProps) {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showPromoPopup, setShowPromoPopup] = useState(false);

  // Load timer/exit-intent handlers on mount
  useEffect(() => {
    // 1. Idle Delay Promo popup (Trigger after 35 seconds of page explore)
    const timer = setTimeout(() => {
      const hasClosed = sessionStorage.getItem('promo-popup-closed');
      if (!hasClosed) {
        setShowPromoPopup(true);
      }
    }, 35000);

    // 2. Exit Intent logic (triggered when mouse exits upper edge of window)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 20) {
        const hasClosed = sessionStorage.getItem('exit-intent-closed');
        if (!hasClosed) {
          setShowExitIntent(true);
        }
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const closePromoPopup = () => {
    setShowPromoPopup(false);
    sessionStorage.setItem('promo-popup-closed', 'true');
  };

  const closeExitIntent = () => {
    setShowExitIntent(false);
    sessionStorage.setItem('exit-intent-closed', 'true');
  };

  return (
    <>
      {/* 1. Sticky WhatsApp Float Button (Bottom Right) */}
      <a
        href="https://wa.me/917827225254?text=Hi!+I'd+like+to+request+a+free+systems+billing+and+local+SEO+audit+for+my+business."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] active:scale-95 shadow-xl flex items-center justify-center text-white transition-all hover:rotate-6 group"
        title="Chat on WhatsApp"
        id="widget-whatsapp-float"
      >
        <MessageSquare className="w-7 h-7 fill-white/10 group-hover:scale-105 transition-transform" />
        <span className="absolute right-16 bg-slate-900 border border-slate-800 text-white text-[10px] sm:text-xs font-sans px-3 py-1.5 rounded-xl whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-bold">
          Free Dashboard Quote
        </span>
      </a>

      {/* 2. Sticky Mobile Call Action Widget (Bottom Left on screens, or bottom float) */}
      <a
        href="tel:+917827225254"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-primary-900 hover:bg-primary-850 active:scale-95 shadow-xl flex items-center justify-center text-white transition-all hover:-rotate-6 group"
        title="Ring consultation call"
        id="widget-phone-float"
      >
        <PhoneCall className="w-6 h-6 group-hover:scale-105 transition-transform" />
        <span className="absolute left-16 bg-slate-900 border border-slate-800 text-white text-[10px] sm:text-xs font-sans px-3 py-1.5 rounded-xl whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-bold">
          Speak With Principal Solutionist
        </span>
      </a>

      {/* 3. Exit Intent Dialog Modal overlay */}
      {showExitIntent && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0f1425] rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-800 shadow-2xl relative text-slate-100 font-sans">
            
            <button
              onClick={closeExitIntent}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-5">
              
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto">
                <Gift className="w-6 h-6 animate-bounce" />
              </div>

              <div>
                <span className="font-mono text-[9px] font-bold text-accent-blue tracking-widest block mb-1 uppercase">EXCELLENT EXIT BONUS OFFER</span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">Wait! Don't leave empty-handed!</h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-sm mx-auto">
                  Get our exclusive <strong>"Looker Studio Dashboard Blueprint"</strong> template for free! No software subscriptions needed.
                </p>
              </div>

              {/* Stack Comparison */}
              <div className="bg-slate-900/50 border border-slate-850 p-4 rounded-xl text-left text-xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Interactive sales tracking template (unlocked)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Google Sheets lead pipeline router macro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Instant WhatsApp notifications connector set</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => {
                    closeExitIntent();
                    onAuditClick();
                  }}
                  className="w-full py-3 rounded-xl bg-accent-blue hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Claim My Free Template Sheet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={closeExitIntent}
                  className="text-xs text-slate-500 hover:text-slate-400 py-1 transition-colors cursor-pointer"
                >
                  No thanks, I prefer paying recurring software fees
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 4. timed Promos / Idle Delay Lead Capture Dialog */}
      {showPromoPopup && (
        <div className="fixed bottom-6 right-6 sm:bottom-24 sm:right-6 z-40 max-w-sm w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 text-slate-100 shadow-2xl animate-slideUp font-sans">
          
          <button
            onClick={closePromoPopup}
            className="absolute top-3.5 right-3.5 text-slate-400 hover:text-white p-1 rounded-full cursor-pointer"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 select-none">
              <TrendingUp className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="font-mono text-[9px] font-bold text-accent-teal uppercase tracking-widest block mb-0.5">Live Traffic Map Warning</span>
              <h4 className="font-display font-semibold text-xs text-white leading-snug">Competitors are hijacking local reviews near you</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                Your company is offline-focused. Generate your free maps package audit right now to reverse competitor rankings. Takes only 9 seconds!
              </p>
              
              <div className="flex gap-2 mt-4.5">
                <button
                  onClick={() => {
                    closePromoPopup();
                    onAuditClick();
                  }}
                  className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-455 text-xs text-slate-950 font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Analyze My Map Space
                </button>
                <button
                  onClick={closePromoPopup}
                  className="px-2.5 py-1.5 text-[10px] text-slate-400 hover:text-white font-semibold transition-colors"
                >
                  Dismiss warning
                </button>
              </div>

            </div>
          </div>

        </div>
      )}
    </>
  );
}
