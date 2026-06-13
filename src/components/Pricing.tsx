/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ShieldAlert, Sparkles, Star, Zap, Trash2, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data';

interface PricingProps {
  onPlanSelect: (planName: string) => void;
}

export default function Pricing({ onPlanSelect }: PricingProps) {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-white border border-slate-150 px-3 py-1.5 rounded-full inline-block">
            TRANSPARENT, ONE-TIME COST PLANS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight mt-4 mb-5">
            Fair Pricing. No Ongoing Retainers.
          </h2>
          <p className="font-sans text-slate-600">
            We do not believe in pricing lock-ins. Every package below is charged as a clean <strong>one-time setup fee</strong>—you own 100% of the files, accounts, and custom dashboards.
          </p>
        </div>

        {/* Pricing Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-white border-2 border-primary-600 lg:-translate-y-4 shadow-xl shadow-primary-950/10'
                  : 'bg-white border border-slate-200/80 hover:border-slate-350 hover:shadow-lg shadow-sm'
              }`}
            >
              
              {/* Popularity Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-accent-blue text-white px-4 py-1 rounded-full text-xs font-sans font-bold flex items-center gap-1.5 shadow">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              {/* Card Contents */}
              <div>
                
                {/* Meta Header */}
                <div className="pb-6 border-b border-slate-100 mb-6">
                  <h3 className="font-sans font-bold text-lg text-primary-950 mb-2">{plan.name}</h3>
                  <p className="font-sans text-slate-500 text-xs sm:text-sm leading-normal">{plan.description}</p>
                </div>

                {/* Price block */}
                <div className="mb-6 flex items-baseline gap-1.5">
                  <span className="font-display font-bold text-4xl text-slate-900">{plan.price}</span>
                  <span className="text-slate-450 font-mono text-xs uppercase font-semibold">{plan.period}</span>
                </div>

                {/* Checklist Title */}
                <span className="block text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 mb-4">
                  WHAT IS INCLUDED IN THIS PACKAGE
                </span>

                {/* Checklist Elements */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex gap-2.5 items-start text-xs text-slate-705 font-medium leading-normal">
                      <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* CTA call select */}
              <button
                onClick={() => onPlanSelect(plan.name)}
                className={`w-full py-3.5 rounded-xl font-sans font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  plan.isPopular
                    ? 'bg-primary-900 hover:bg-primary-800 text-white shadow shadow-primary-950/10'
                    : 'bg-slate-55/70 hover:bg-slate-100 text-slate-750 border border-slate-200'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

            </div>
          ))}
        </div>

        {/* Pricing Trust footer */}
        <div className="bg-slate-[#151a30]/5 max-w-4xl mx-auto rounded-3xl p-5 border border-slate-150 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-55/40 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
              <Star className="w-4.5 h-4.5 fill-emerald-500 text-emerald-500" />
            </div>
            <div>
              <span className="font-semibold text-xs text-slate-800 block">30-Day Setup SLA Guarantee</span>
              <span className="text-[10px] text-slate-500 block">Compliant handovers or direct refunds</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-55/40 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
              <Zap className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="font-semibold text-xs text-slate-800 block">Complete Training handover</span>
              <span className="text-[10px] text-slate-500 block">Custom recorded loom files for easy tracking</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-55/40 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
              <Trash2 className="w-4.5 h-4.5 animate-pulse" />
            </div>
            <div>
              <span className="font-semibold text-xs text-slate-800 block">No Software bills lock-in</span>
              <span className="text-[10px] text-slate-500 block">Replace recurring license costs forever</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
