/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-primary-50 px-3 py-1.5 rounded-full inline-block">
            FREQUENT INQUIRIES ANSWERED
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight mt-4 mb-5">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-slate-600">
            Everything you need to know about our custom setups, ownership rights, fees, and operational integrations.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary-300 bg-[#fafbfc]/80 shadow-sm' 
                  : 'border-slate-150 bg-white hover:border-slate-300'
              }`}
            >
              
              {/* Question Trigger block */}
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                id={`faq-trigger-${index}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    openIndex === index ? 'bg-primary-900 text-white' : 'bg-slate-50 text-slate-450'
                  }`}>
                    <HelpCircle className="w-4.5 h-4.5 animate-pulse" />
                  </div>
                  <span className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                </div>
                
                <div className="text-slate-400 shrink-0">
                  {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {/* Answers content block */}
              {openIndex === index && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-100 animate-fadeIn">
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Support note */}
        <div className="mt-12 text-center p-5 bg-[#fafbfc] border border-slate-150 rounded-2xl">
          <span className="text-xs text-slate-500 font-sans">
            Still have an unanswered technical or operational question? Chat with our team directly on 
            <a href="https://wa.me/917827225254" target="_blank" rel="noopener noreferrer" className="text-[#25d366] font-bold mx-1 hover:underline">
              WhatsApp Support
            </a>
            or ring +91 78272 25254 at any time of day.
          </span>
        </div>

      </div>
    </section>
  );
}
