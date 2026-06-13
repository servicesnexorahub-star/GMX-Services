/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Compass, Cpu, Play, BarChart3, CheckCircle2 } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Free Business Audit",
      subtitle: "Baseline Inspection",
      description: "We analyze your website, local map visibility, reviews, social metrics, and current system software bills to isolate saving opportunities.",
      icon: <Search className="w-5 h-5 text-primary-650" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      number: "02",
      title: "Growth Strategy",
      subtitle: "Tailored Architecture",
      description: "We deliver a customized PDF blueprint showing which expensive software packages can be replaced with native, zero-fee dashboards.",
      icon: <Compass className="w-5 h-5 text-accent-blue" />,
      color: "from-sky-500 to-blue-500"
    },
    {
      number: "03",
      title: "System Setup",
      subtitle: "Integration & Testing",
      description: "Our engineers build the custom website, map-pack reviews triggers, and formulate the local Google Workspace CRM pipelines.",
      icon: <Cpu className="w-5 h-5 text-accent-teal" />,
      color: "from-teal-500 to-emerald-500"
    },
    {
      number: "04",
      title: "Launch & Training",
      subtitle: "Zero-flicker Handover",
      description: "We activate the live integrations, index custom layouts on Google search engines, and provide simple 5-minute video tutorials to guide your workflows.",
      icon: <Play className="w-5 h-5 text-violet-500" />,
      color: "from-violet-500 to-purple-500"
    },
    {
      number: "05",
      title: "Monthly Reporting",
      subtitle: "Optimization Cycles",
      description: "Every 30 days we refresh your Looker Studio report cards, analyze click surges, and fine-tune localized map rankings for regional dominance.",
      icon: <BarChart3 className="w-5 h-5 text-rose-500" />,
      color: "from-rose-500 to-red-500"
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
      
      {/* Wave Background Pattern */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-white border border-slate-150 px-3 py-1.5 rounded-full inline-block">
            OUR STEP-BY-STEP FLOW
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight mt-4 mb-5">
            Simple Process. Measurable Results.
          </h2>
          <p className="font-sans text-slate-600">
            Digital transformations shouldn't be stressful or disruptive. We handle everything from audits to pipeline mapping, launching custom structures in just days.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Desktop connecting path line line */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-1.5 bg-gradient-to-r from-blue-300 via-emerald-300 to-rose-350 rounded-full" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch relative">
            {steps.map((step, idx) => (
              <div 
                key={step.number}
                className="bg-white p-6 rounded-3xl border border-slate-150/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  
                  {/* Circle number & Icon Row */}
                  <div className="flex items-center justify-between mb-6 relative">
                    
                    {/* Glowing Number Icon Circle */}
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-150/70 shadow-inner">
                      {step.icon}
                    </div>

                    <span className="font-display font-bold text-3xl text-slate-200">
                      {step.number}
                    </span>

                  </div>

                  {/* Subtitle */}
                  <span className="font-mono text-[10px] font-bold text-indigo-600 uppercase tracking-widest block mb-1">
                    {step.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-slate-800 text-base mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>

                </div>

                {/* Bottom line status */}
                <div className="pt-4 border-t border-slate-100 mt-5 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>SLA Check Verified</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Process Guarantee box */}
        <div className="mt-14 p-5 bg-emerald-50/50 border border-emerald-150 rounded-2xl text-center text-emerald-800 font-sans text-xs sm:text-sm max-w-2xl mx-auto">
          <strong>No-Obligation Guarantee:</strong> We build and present step 1 (your business audit) 100% free of charge before you pay anything. No long-term support contracts required.
        </div>

      </div>
    </section>
  );
}
