/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, MessageCircle, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Gather unique tags from reviews for filter bar
  const filterTags = ['All', 'Real Estate', 'Clinics', 'Restaurants', 'Schools', 'Gyms', 'Consultants'];

  const filteredTestimonials = selectedTag === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase()));

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-primary-150 px-3 py-1.5 rounded-full inline-block">
            SUCCESS REVIEWS FROM DELEGATES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight mt-4 mb-5">
            What Our Partners Say About Us
          </h2>
          <p className="font-sans text-slate-600">
            Read real, unfiltered testimonials from local business owners who unlocked their digital setups and reclaimed their monthly software budgets.
          </p>
        </div>

        {/* Filter tags bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4.5 py-2 rounded-full font-sans font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-primary-900 border-primary-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-500 border border-slate-205/30 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Layout - Smooth Grid masonry layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredTestimonials.map((test) => (
            <div
              key={test.id}
              className="bg-slate-50/70 hover:bg-white border border-slate-150/40 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              
              {/* Decorative Quotation Vector background */}
              <div className="absolute top-6 right-6 opacity-[0.04] text-primary-900 pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                <Quote className="w-14 h-14 rotate-180" />
              </div>

              {/* Stars block */}
              <div>
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4.5">
                  {test.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-primary-100/60 text-primary-800 font-mono text-[9px] font-bold">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Review Text Body */}
                <p className="font-sans text-slate-650 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{test.review}"
                </p>
              </div>

              {/* Partner profile summary info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/50">
                <img
                  src={test.image}
                  referrerPolicy="no-referrer"
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-sans font-bold text-xs sm:text-sm text-slate-800 tracking-tight leading-tight block">
                      {test.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 tooltip shrink-0" title="Verified Customer Review" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    {test.role} at <strong className="text-primary-800">{test.businessName}</strong>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="py-12 bg-slate-50 border border-slate-100 rounded-3xl text-center text-slate-450 text-sm">
            No testimonials under this tag portfolio right now. Check back soon!
          </div>
        )}

      </div>
    </section>
  );
}
