/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DollarSign, ShieldCheck, CheckCircle2, Calculator, Info, Lock, ArrowRight } from 'lucide-react';

interface UniqueValueProps {
  onCtaClick: () => void;
}

export default function UniqueValue({ onCtaClick }: UniqueValueProps) {
  // Calculator States
  const [teamSize, setTeamSize] = useState(3);
  const [includeCrm, setIncludeCrm] = useState(true);
  const [includeReporting, setIncludeReporting] = useState(true);
  const [includeAutomation, setIncludeAutomation] = useState(true);

  // Estimates Math (monthly rates in INR)
  const baseCrmRate = 1000; // per user
  const baseReportingRate = 2000; // flat
  const baseAutomationRate = 3000; // flat

  const monthlyTraditionalCost = 
    (includeCrm ? baseCrmRate * teamSize : 0) + 
    (includeReporting ? baseReportingRate : 0) + 
    (includeAutomation ? baseAutomationRate : 0);

  const annualTraditionalCost = monthlyTraditionalCost * 12;

  // Let's assume our custom system reduces ongoing monthly licensing cost to ₹0
  // (saving the entire traditional amount over time).
  const annualSavings = annualTraditionalCost;

  const features = [
    { title: "Custom Google Sheets CRM", desc: "A client-dashboard tailored purely to capture and trace your specific pipeline milestones without learning complex configurations." },
    { title: "Excel Business Dashboards", desc: "Familiar spreadsheet layouts complete with customized macros, formulas, and visual graphs tracking operational metrics." },
    { title: "Smart Lead Tracking Systems", desc: "Centralized hubs that log every single service lead automatically instantly, checking for duplicates or stale prospects." },
    { title: "WhatsApp Sales Pipelines", desc: "Direct integration prompts linking you with prospect numbers, triggering automated status replies in one click." },
    { title: "Automated Report dispatchers", desc: "Pre-configured systems sending automated PDF reports directly to your inbox or Slack channel on standard intervals." },
    { title: "Total Private Data Ownership", desc: "You store all metrics in your personal Google Drive or secure disk backups. No third-party API locks your access or limits data size." }
  ];

  return (
    <section id="unique-value" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-white border border-slate-100 px-3 py-1.5 rounded-full inline-block mb-4">
              WHY PAY RECURRING SOFTWARE SUBSCRIPTIONS?
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight leading-tight">
              Most Businesses Only Use 10% of Expensive SaaS Features.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Why pay massive monthly license bills to CRM and reporting platforms when we can build and automate the exact systems you need on Google Workspace and databases you already have? Keep 100% data control.
            </p>
          </div>
        </div>

        {/* Feature grid & calculator side by side */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Feature cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat) => (
              <div 
                key={feat.title} 
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-sans font-bold text-slate-800 text-sm sm:text-base mb-2">{feat.title}</h4>
                <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Savings Calculator Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-250/60 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Header */}
              <div className="flex items-center gap-3 pb-5 border-b border-slate-100 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-900 flex items-center justify-center text-white shrink-0">
                  <Calculator className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-primary-950">Subscription Savings Estimator</h3>
                  <p className="text-xs text-slate-500">Calculate how much you would save by transitioning our systems</p>
                </div>
              </div>

              {/* Calculator Inputs */}
              <div className="space-y-5 mb-8">
                
                {/* Team size slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-700">Team Size (CRM Users):</label>
                    <span className="bg-primary-50 text-primary-700 font-mono text-xs px-2 py-0.5 rounded-md font-bold">
                      {teamSize} {teamSize === 1 ? 'User' : 'Users'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                  <span className="text-[10px] text-slate-400 font-mono">1 User pricing averages ₹1,000/mo on Standard Salesforce/HubSpot plans</span>
                </div>

                {/* Software toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <button
                    onClick={() => setIncludeCrm(!includeCrm)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      includeCrm 
                        ? 'bg-primary-50/50 border-primary-300 text-primary-950 font-semibold' 
                        : 'border-slate-100 bg-slate-50 text-slate-400'
                    }`}
                  >
                    <span className="block text-xs uppercase font-mono mb-1">CRM Suite</span>
                    <span className="text-sm font-bold">₹{baseCrmRate * teamSize}/mo</span>
                  </button>

                  <button
                    onClick={() => setIncludeReporting(!includeReporting)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      includeReporting 
                        ? 'bg-primary-50/50 border-primary-300 text-primary-950 font-semibold' 
                        : 'border-slate-100 bg-slate-50 text-slate-400'
                    }`}
                  >
                    <span className="block text-xs uppercase font-mono mb-1">Reporting Tool</span>
                    <span className="text-sm font-bold">₹{baseReportingRate}/mo</span>
                  </button>

                  <button
                    onClick={() => setIncludeAutomation(!includeAutomation)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      includeAutomation 
                        ? 'bg-primary-50/50 border-primary-300 text-primary-950 font-semibold' 
                        : 'border-slate-100 bg-slate-50 text-slate-400'
                    }`}
                  >
                    <span className="block text-xs uppercase font-mono mb-1">Automations</span>
                    <span className="text-sm font-bold">₹{baseAutomationRate}/mo</span>
                  </button>
                </div>

              </div>

              {/* Comparison Cost Output */}
              <div className="bg-slate-550/10 p-5 rounded-2xl border border-slate-100 shadow-inner grid grid-cols-2 gap-4 text-center mb-6">
                <div className="border-r border-slate-200">
                  <span className="text-slate-550 text-[10px] uppercase font-mono block mb-1">SaaS Subscriptions Cost</span>
                  <span className="font-display font-medium text-lg sm:text-xl text-rose-600 line-through">
                    ₹{monthlyTraditionalCost.toLocaleString('en-IN')}/mo
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">₹{annualTraditionalCost.toLocaleString('en-IN')}/year</span>
                </div>
                <div>
                  <span className="text-emerald-700 text-[10px] uppercase font-mono block mb-1">Our Custom Solutions</span>
                  <span className="font-display font-bold text-lg sm:text-2xl text-emerald-600">
                    ₹0/mo
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">One-time setup fee</span>
                </div>
              </div>

              {/* Annual Savings visual */}
              <div className="bg-emerald-50 border border-emerald-250/40 rounded-2xl p-4 flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                    <DollarSign className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-emerald-800 text-[10px] font-bold block uppercase tracking-wider">Lifelong Recurring Savings</span>
                    <span className="font-display font-bold text-normal sm:text-lg text-emerald-950">
                      ₹{annualSavings.toLocaleString('en-IN')} Saved Annually!
                    </span>
                  </div>
                </div>
                <div className="bg-emerald-500 px-2 py-1 rounded text-white font-mono text-[10px] font-bold">
                  100% FREE OWNERSHIP
                </div>
              </div>

              {/* CRM Call Action */}
              <button
                onClick={onCtaClick}
                className="w-full py-4.5 rounded-2xl bg-primary-950 hover:bg-primary-900 text-white font-bold text-sm tracking-wide active:scale-98 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
                id="savings-calc-cta"
              >
                <span>Book Strategy & Setup Costing Plan</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-350 group-hover:translate-x-1" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
