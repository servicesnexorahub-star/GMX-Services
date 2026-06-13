/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onAuditClick: () => void;
  onWhatsappClick: () => void;
}

export default function FinalCta({ onAuditClick, onWhatsappClick }: FinalCtaProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#090b1e] text-white relative overflow-hidden">
      
      {/* Decorative Orbs & Grid */}
      <div className="absolute inset-0 moving-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-112 h-112 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glow Sparkle Icon */}
        <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-950/80 border border-primary-800 text-accent-blue text-xs font-mono font-bold uppercase mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-accent-teal" />
          <span>ZERO SOFTWARE LICENSE FEES GUARANTEED</span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          Ready to Grow Your Business Online?
        </h2>

        {/* Subheadline */}
        <p className="font-sans text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let's build a customized structure designed purely to attract regional customers, manage lead pipelines, log transactions, and scale operations—without forcing you into expensive, recurring SaaS subscriptions.
        </p>

        {/* CTAs Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md mx-auto">
          
          <button
            onClick={onAuditClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-blue hover:bg-sky-500 text-white font-sans font-bold text-sm tracking-wide active:scale-98 shadow hover:shadow-accent-blue/30 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            id="final-cta-audit"
          >
            <span>Get My Free Audit Sheet</span>
            <ArrowRight className="w-4.5 h-4.5 transition-transform duration-350 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onWhatsappClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25d366]/10 hover:bg-[#25d366]/20 text-[#25d366] border border-[#25d366]/30 font-sans font-bold text-sm tracking-wide active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            id="final-cta-whatsapp"
          >
            <MessageSquare className="w-4.5 h-4.5 fill-[#25d366]/10" />
            <span>Chat On WhatsApp</span>
          </button>

        </div>

        {/* Conversion Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 pt-10 border-t border-slate-805 mt-12 text-xs text-slate-500">
          <span>✓ Setup Completed in 7-10 Days</span>
          <span>✓ Flat One-time Fee Plans</span>
          <span>✓ 100% Owned Reports & Assets</span>
          <span>✓ Full Google System Integration</span>
        </div>

      </div>
    </section>
  );
}
