/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Play, Sparkles, CheckCircle, TrendingUp, BarChart, FileSpreadsheet, Lock } from 'lucide-react';

interface HeroProps {
  onAuditClick: () => void;
  onStrategyCallClick: () => void;
}

export default function Hero({ onAuditClick, onStrategyCallClick }: HeroProps) {
  // Statistical Counter Animations
  const [businesses, setBusinesses] = useState(0);
  const [leads, setLeads] = useState(0);
  const [dashboards, setDashboards] = useState(0);

  useEffect(() => {
    const duration = 1500; // ms
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      
      setBusinesses(Math.min(100, Math.floor((100 / steps) * currentStep)));
      setLeads(Math.min(5000, Math.floor((5000 / steps) * currentStep)));
      setDashboards(Math.min(50, Math.floor((50 / steps) * currentStep)));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-50">
      
      {/* Moving Background Grid lines */}
      <div className="absolute inset-0 moving-grid pointer-events-none opacity-60" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-112 h-112 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 font-mono text-xs font-semibold mb-6 animate-fadeIn">
              <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
              <span>GMX SERVICES — FUTURE TOGETHER</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-primary-950 tracking-tight leading-tight sm:leading-none mb-6">
              Grow Your Business Online <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-accent-blue">
                Without Expensive Software
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
              We help local businesses generate more customers through high-converting websites, 
              dominant Google visibility, local SEO, social media management, automated systems, and 
              custom-built business dashboards.
            </p>

            {/* Call to Actions Layer */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onAuditClick}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary-900 text-white font-sans font-bold text-base hover:bg-primary-800 active:scale-98 shadow-lg shadow-primary-950/15 cursor-pointer hover:shadow-primary-900/30 transition-all group text-center"
                id="hero-primary-cta"
              >
                Get Free Business Audit
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onStrategyCallClick}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-primary-900 hover:text-primary-800 border border-slate-200 hover:border-slate-350 active:scale-98 shadow-sm cursor-pointer transition-all font-sans font-bold text-base text-center group"
                id="hero-secondary-cta"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-accent-blue group-hover:scale-105 transition-transform" />
                Book Strategy Call
              </button>
            </div>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3.5 gap-x-6 pt-6 border-t border-slate-200/80 w-full">
              {[
                'No Long-Term Contracts',
                'Affordable Monthly Plans',
                'Custom Dashboards Built',
                'Direct WhatsApp Support'
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-sans font-medium text-xs text-slate-500">{badge}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 h-[410px] sm:h-[480px] lg:h-auto flex items-center justify-center relative">
            <div className="w-full max-w-md lg:max-w-none relative animate-fadeIn">
              
              {/* Outer Decorative Shadows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-tr from-primary-600/10 to-accent-blue/10 rounded-3xl blur-2xl pointer-events-none" />

              {/* Main Premium Card UI Representation */}
              <div className="relative mx-auto bg-white text-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-6 z-10 font-sans">
                
                {/* Browser control header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    Custom Lead Dashboard v2.0
                  </div>
                  <div className="w-5" />
                </div>

                {/* Simulated metrics grid */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div className="text-[9px] text-slate-450 font-bold uppercase mb-1">New Leads</div>
                    <div className="text-xl font-bold text-slate-900">1,284</div>
                    <div className="text-[9px] text-green-600 font-bold uppercase mt-1">+22% Today</div>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div className="text-[9px] text-slate-450 font-bold uppercase mb-1">Conversions</div>
                    <div className="text-xl font-bold text-slate-900">342</div>
                    <div className="text-[9px] text-primary-600 font-bold uppercase mt-1">8.4% Rate</div>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div className="text-[9px] text-slate-450 font-bold uppercase mb-1">Monthly ROI</div>
                    <div className="text-xl font-bold text-slate-900">₹4.2L</div>
                    <div className="text-[9px] text-slate-600 font-bold uppercase mt-1">Goal Met</div>
                  </div>
                </div>

                {/* Dark bar chart representing high-performance traffic mapping */}
                <div className="h-36 bg-slate-900 rounded-2xl p-4 mb-4 flex items-end gap-2 relative">
                  <div className="absolute top-2.5 left-3 text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                    Live Channel Traffic
                  </div>
                  <div className="flex-1 bg-primary-600 h-[40%] rounded-t-sm transition-all" />
                  <div className="flex-1 bg-primary-500 h-[60%] rounded-t-sm transition-all" />
                  <div className="flex-1 bg-primary-400 h-[45%] rounded-t-sm transition-all" />
                  <div className="flex-1 bg-primary-600 h-[80%] rounded-t-sm transition-all" />
                  <div className="flex-1 bg-primary-500 h-[55%] rounded-t-sm transition-all" />
                  <div className="flex-1 bg-primary-400 h-[90%] rounded-t-sm transition-all" />
                  <div className="flex-1 bg-white h-[100%] rounded-t-sm shadow-[0_0_12px_rgba(255,255,255,0.4)] animate-pulse" />
                </div>

                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 px-1 mb-2">
                  <span>01 Mon</span>
                  <span>02 Tue</span>
                  <span>03 Wed</span>
                  <span>04 Thu</span>
                  <span>05 Fri</span>
                  <span>06 Sat</span>
                  <span className="text-slate-900 font-bold uppercase">Today</span>
                </div>

                {/* Overlaid glass automation alert */}
                <div className="absolute bottom-12 right-12 w-44 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/50 shadow-xl z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049c0 2.12.554 4.189 1.605 6.009l-1.706 6.233 6.376-1.671a11.82 11.82 0 005.772 1.493h.005c6.635 0 12.046-5.412 12.049-12.05a11.822 11.822 0 00-3.483-8.358" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-900 leading-none">Lead Alert</div>
                      <div className="text-[9px] text-slate-500">Real-time Automation</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Smaller overlay widget: Savings Counter */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-805 px-4 py-3.5 rounded-2xl shadow-xl border border-slate-100 z-25 font-sans flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <FileSpreadsheet className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="text-slate-450 text-[10px] block font-semibold uppercase tracking-wider">Our Solutions</span>
                  <span className="font-display font-bold text-sm text-slate-800">No software lock-in</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Counter Stats Footer Layer */}
        <div className="mt-16 lg:mt-24 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
            <span className="font-display font-bold text-4xl text-primary-950">
              {businesses === 100 ? '100+' : `${businesses}+`}
            </span>
            <div className="text-slate-500 text-sm">
              <span className="font-semibold block text-slate-800">Local Corporate Entities</span>
              <span>Supported digital transition</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
            <span className="font-display font-bold text-4xl text-primary-950">
              {leads === 5000 ? '5000+' : `${leads}+`}
            </span>
            <div className="text-slate-500 text-sm">
              <span className="font-semibold block text-slate-800">High-Quality Leads</span>
              <span>Automatically generated per month</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
            <span className="font-display font-bold text-4xl text-primary-950">
              {dashboards === 50 ? '50+' : `${dashboards}+`}
            </span>
            <div className="text-slate-500 text-sm">
              <span className="font-semibold block text-slate-800">Sheets & Excel CRM Dashboards</span>
              <span>Replacing costly SaaS bills daily</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
