/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { Check, ArrowRight, TrendingUp, HelpCircle } from 'lucide-react';

interface CaseStudiesProps {
  onAuditClick: () => void;
}

export default function CaseStudies({ onAuditClick }: CaseStudiesProps) {
  const [activeStudy, setActiveStudy] = useState(CASE_STUDIES[0].id);

  const selectedStudy = CASE_STUDIES.find((cs) => cs.id === activeStudy) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-primary-50 px-3 py-1.5 rounded-full inline-block">
            RECENT SUCCESS HISTORIES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight mt-4 mb-5">
            Real Proof. Quantifiable Returns.
          </h2>
          <p className="font-sans text-slate-600 font-medium">
            We judge our performance based on client balance sheets. Examine how local businesses transitioned from confusing paid apps to simplified, owned Google systems.
          </p>
        </div>

        {/* Study Toggles Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CASE_STUDIES.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActiveStudy(cs.id)}
              className={`px-5 py-3 rounded-xl font-sans font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeStudy === cs.id
                  ? 'bg-primary-950 text-white shadow-md'
                  : 'bg-[#fafbfc] text-slate-500 hover:bg-slate-100 border border-slate-150'
              }`}
            >
              {cs.clientName}
            </button>
          ))}
        </div>

        {/* Case Study Grid Container */}
        <div className="bg-[#fafbfc] rounded-3xl border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-lg grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Summary: Challenge, Solution, and Metrics list */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div>
                <span className="font-mono text-[10px] font-bold text-indigo-600 uppercase tracking-widest block mb-1">
                  CASE OVERVIEW – {selectedStudy.industry}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                  {selectedStudy.clientName}
                </h3>
              </div>

              {/* Challenge & Solution details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-100">
                  <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block mb-1.5 font-semibold">
                    The Business Challenge
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {selectedStudy.challenge}
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-2xl border border-slate-100">
                  <span className="text-secondary font-mono text-[9px] uppercase tracking-wider block mb-1.5 font-bold text-primary-600">
                    Our Custom Resolution
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {selectedStudy.solution}
                  </p>
                </div>
              </div>

              {/* Incremental Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {selectedStudy.metrics.map((metric, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-2xl border border-emerald-50 text-center">
                    <span className="font-display font-bold text-base sm:text-xl text-emerald-600 block">
                      {metric.value}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-800 block mt-1 leading-tight">
                      {metric.label}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      {metric.improvement}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-slate-450 leading-tight block text-left">
                Every metric listed here resides directly inside real, live dashboards owned completely by the local operator.
              </span>
              <button
                onClick={onAuditClick}
                className="w-full sm:w-auto px-5 py-2.5 bg-primary-950 hover:bg-primary-900 text-white font-bold text-xs rounded-xl active:scale-98 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Audit My Accounts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Summary: Beautiful Custom Chart Graphic container */}
          <div className="lg:col-span-6 bg-slate-900 text-slate-100 rounded-3xl p-6 border border-slate-800 shadow-inner flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-slate-450 text-[10px] block font-mono">INTELLIGENCE FLOW VISUALIZATION</span>
                  <span className="text-xs font-bold text-white">4-Month Growth Analytics Curve</span>
                </div>
                <span className="bg-emerald-500/15 border border-emerald-550/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-mono">
                  SaaS Replacement Chart
                </span>
              </div>

              {/* Dynamic visual graph using pure robust SVGs */}
              <div className="p-4 bg-[#0d1222] border border-slate-800 rounded-2xl relative mb-6">
                <div className="absolute inset-0 flex flex-col justify-between opacity-15 pointer-events-none">
                  <div className="border-b border-dashed border-slate-700 w-full h-1" />
                  <div className="border-b border-dashed border-slate-700 w-full h-1" />
                  <div className="border-b border-dashed border-slate-700 w-full h-1" />
                </div>

                <div className="h-44 w-full relative pt-2">
                  <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    
                    {/* Before/Flat/Baseline line */}
                    <line 
                      x1="0" 
                      y1="110" 
                      x2="400" 
                      y2="110" 
                      stroke="#ef4444" 
                      strokeWidth="2" 
                      strokeDasharray="4 4" 
                    />
                    
                    {/* Growth curve representing 'After' */}
                    <path
                      d="M 10 110 L 130 90 L 260 50 L 390 20"
                      stroke="#10b981"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Gradient under curve */}
                    <path
                      d="M 10 110 L 130 90 L 260 50 L 390 20 L 390 150 L 10 150 Z"
                      fill="url(#case-gradient)"
                      opacity="0.1"
                    />

                    {/* Checkpoints */}
                    <circle cx="10" cy="110" r="4" fill="#10b981" />
                    <circle cx="130" cy="90" r="4" fill="#10b981" />
                    <circle cx="260" cy="50" r="4" fill="#10b981" />
                    <circle cx="390" cy="20" r="4" fill="#10b981" />

                    <defs>
                      <linearGradient id="case-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* X labels */}
                <div className="flex justify-between font-mono text-[9px] text-slate-500 pt-2 border-t border-slate-805">
                  {selectedStudy.chartData.map((d) => (
                    <span key={d.name}>{d.name}</span>
                  ))}
                </div>
              </div>

            </div>

            {/* Explanatory notes */}
            <div className="p-3.5 bg-slate-850/40 border border-slate-800/80 rounded-xl flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 mt-0.5">
                <HelpCircle className="w-3.5 h-3.5" />
              </div>
              <p className="text-[10px] text-slate-400 leading-normal">
                <strong className="text-white block font-sans">Wait, what does the red dashed line mean?</strong>
                The red line shows standard industry performance under bloated client CRM subscriptions. The emerald curve shows efficiency following our custom optimizations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
