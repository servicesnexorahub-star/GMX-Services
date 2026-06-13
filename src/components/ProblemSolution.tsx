/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, Sparkles, X, Check, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onCtaClick: () => void;
}

export default function ProblemSolution({ onCtaClick }: ProblemSolutionProps) {
  const problems = [
    { title: "No Website or Outdated Formats", text: "Losing over 70% of potential local smartphone queries to competitors with cleaner search layouts." },
    { title: "Poor Google Search & Map presence", text: "Failing to claim local map positions, leaving your business completely invisible nearby." },
    { title: "Inconsistent Social Media presence", text: "Generic visual posts that fail to represent your premium quality or keep people engaged." },
    { title: "No Systematic Lead Tracking pipeline", text: "Manually saving customer records on paper folders that are prone to being misplaced." },
    { title: "Expensive Recurring Software licenses", text: "Paying ₹8,000+ per month for massive CRMs with complex features you never use." },
    { title: "No Real-Time Insights or Operations clarity", text: "Sifting through bank accounts and text logs just to calculate your weekly net margins." }
  ];

  const solutions = [
    { title: "High-Converting Custom Web builds", text: "Fully bespoke, speed-optimized website layouts designed specifically to gather client bookings." },
    { title: "Dominate Google & Map Pack indexing", text: "Direct listing optimizations to rank in the Top 3 maps whenever local prospects look for you." },
    { title: "Complete Local Social Media engines", text: "Localized strategic visual assets and template content calendars tailored to your specific audience." },
    { title: "Interactive Client sheets CRMs", text: "Automatic database collection that houses every inbound interaction under active, visual tables." },
    { title: "Lightweight Automated spreadsheet systems", text: "Fully customized tools that eliminate expensive third-party platforms with ZERO monthly fees." },
    { title: "Beautiful Real-Time reporting tools", text: "Looker Studio dashboards tracking sales, operations, expenses, and net profit margins instantly." }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-slate-50 px-3 py-1.5 rounded-full">
            REAL PROBLEMS vs. SMART SOLUTIONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight mt-4 mb-5">
            Why Pay For Software You Barely Understand?
          </h2>
          <p className="font-sans text-slate-600">
            Traditional marketing agencies try to lock you into costly subscription tools. We build the exact same core solutions customized specifically to your operational demands on tools you already own.
          </p>
        </div>

        {/* Comparison grid container */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* Left Column: Pain Points */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-rose-50/70 to-orange-50/30 border border-rose-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-rose-100 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                  <ShieldAlert className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-rose-950">Typical Business Struggle</h3>
                  <p className="text-xs text-rose-600/80 font-medium">Why growth stalls and subscription billing piles up</p>
                </div>
              </div>

              <div className="space-y-6">
                {problems.map((prob, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-rose-200/60 flex items-center justify-center text-rose-700 shrink-0 mt-0.5 font-bold text-sm">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-slate-800 text-sm sm:text-base">{prob.title}</h4>
                      <p className="font-sans text-slate-500 text-xs sm:text-sm mt-0.5 leading-relaxed">{prob.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-rose-150 text-center">
              <span className="text-amber-700 text-xs font-semibold">
                An average business wastes over ₹96,000/year on idle SaaS tiers.
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Solutions */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-emerald-50/70 to-teal-50/30 border border-emerald-100 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-emerald-100 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-150 flex items-center justify-center text-emerald-600 shrink-0">
                  <Sparkles className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-emerald-950">Our Unified Solutions</h3>
                  <p className="text-xs text-emerald-600/80 font-medium">Integrated workflows customized for continuous value</p>
                </div>
              </div>

              <div className="space-y-6">
                {solutions.map((sol, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-200/60 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5 font-bold text-sm">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-emerald-950 text-sm sm:text-base">{sol.title}</h4>
                      <p className="font-sans text-emerald-800/80 text-xs sm:text-sm mt-0.5 leading-relaxed">{sol.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-150 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-emerald-800 text-xs font-semibold text-left">
                One-time dynamic setup gets you complete lifelong ownership of your custom code.
              </span>
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary-900 text-white font-semibold text-xs active:scale-98 shadow hover:bg-primary-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Adopt Our Models</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
