/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { 
  Building2, 
  Stethoscope, 
  Utensils, 
  Dumbbell, 
  GraduationCap, 
  Briefcase,
  AlertTriangle,
  Check,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { INDUSTRIES } from '../data';

interface IndustriesWeServeProps {
  onAuditClick: () => void;
}

export default function IndustriesWeServe({ onAuditClick }: IndustriesWeServeProps) {
  const [activeCategory, setActiveCategory] = useState<string>('real-estate');

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-primary-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-500" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-500" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-rose-500" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-violet-500" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-accent-blue" />;
      default: return <Briefcase className="w-6 h-6 text-slate-500" />;
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-primary-100/50 px-3 py-1.5 rounded-full inline-block">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight mt-4 mb-5">
            Engineered For Your Specific Daily Challenges
          </h2>
          <p className="font-sans text-slate-600">
            Every vertical has its own operational friction. We don't deploy broad-stroke solutions; we write tailored models responding specifically to your target niche.
          </p>
        </div>

        {/* Tab & Showcase Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Vertical Tab Selector column */}
          <div className="lg:col-span-5 space-y-2.5">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveCategory(ind.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between gap-4 relative overflow-hidden group cursor-pointer ${
                  activeCategory === ind.id 
                    ? 'bg-primary-50/60 border-primary-300 text-primary-950 shadow-sm' 
                    : 'border-slate-100 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-850'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    activeCategory === ind.id ? 'bg-white shadow-sm' : 'bg-slate-50'
                  }`}>
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="font-sans font-bold text-sm sm:text-base">{ind.name}</span>
                </div>
                
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                  activeCategory === ind.id ? 'bg-primary-600 text-white border-primary-600' : 'bg-transparent text-slate-350 border-slate-100 group-hover:border-slate-200'
                }`}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>

          {/* Right Highlight Detailed Card stage */}
          <div className="lg:col-span-7 bg-[#fafbfc] rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-inner relative flex flex-col justify-between h-full min-h-[460px]">
            
            {/* Top overview info */}
            {INDUSTRIES.map((ind) => {
              if (ind.id !== activeCategory) return null;
              return (
                <div key={ind.id} className="animate-fadeIn space-y-6">
                  
                  {/* Title block */}
                  <div className="flex items-center gap-4 pb-5 border-b border-slate-200/60">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                      {getIndustryIcon(ind.icon)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-primary-950">{ind.name}</h3>
                      <p className="text-xs text-slate-500">Niche-specific operations blueprint and optimizations</p>
                    </div>
                  </div>

                  {/* Pain list */}
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider text-slate-450 uppercase mb-3 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-500" />
                      <span>TYPICAL OPERATION BOTTLENECKS</span>
                    </h4>
                    <div className="space-y-2.5">
                      {ind.challenges.map((chal, i) => (
                        <div key={i} className="bg-white p-3 rounded-xl border border-slate-150/40 text-slate-600 text-xs sm:text-sm font-medium flex items-start gap-2.5">
                          <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                          <span>{chal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ultimate Solution */}
                  <div className="bg-primary-950 text-white p-5 rounded-2xl border border-primary-800 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-full blur-xl" />
                    
                    <span className="text-[10px] bg-primary-800 text-primary-200 px-2 py-0.5 rounded uppercase font-mono font-bold block w-fit mb-2">
                      Our Digital Setup Solution
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {ind.solution}
                    </p>
                  </div>

                  {/* Annual Savings Badge */}
                  <div className="bg-emerald-50 border border-emerald-150 rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans font-semibold text-emerald-800 text-xs sm:text-sm">
                      {ind.savings}
                    </span>
                  </div>

                </div>
              );
            })}

            {/* Bottom booking row */}
            <div className="mt-8 pt-5 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-sans text-left">
                Get a custom blueprint mock-up for your industry during your strategic session call.
              </span>
              <button
                onClick={onAuditClick}
                className="w-full sm:w-auto px-6 py-3 bg-primary-950 hover:bg-primary-900 text-white font-sans font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer group"
                id="industry-book-cta"
              >
                <span>Book Strategic Setup Session</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
