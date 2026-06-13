/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Globe, 
  SearchCode, 
  MapPin, 
  Megaphone, 
  LayoutDashboard, 
  UsersRound, 
  MessageSquare, 
  Cpu,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onServiceSelect: (serviceId: string) => void;
  onAuditClick: () => void;
}

export default function Services({ onServiceSelect, onAuditClick }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Helper to map icon names from string in data to lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-primary-600" />;
      case 'SearchCode': return <SearchCode className="w-6 h-6 text-accent-blue" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-accent-teal" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6 text-amber-500" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6 text-emerald-500" />;
      case 'UsersRound': return <UsersRound className="w-6 h-6 text-violet-500" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-indigo-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-rose-500" />;
      default: return <Globe className="w-6 h-6 text-primary-600" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-primary-50 px-3 py-1.5 rounded-full">
            OUR COMPREHENSIVE GROWTH SUITE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight mt-4 mb-5">
            Everything You Need To Grow Online, Custom Built.
          </h2>
          <p className="font-sans text-slate-600">
            We don't offer generic templates or recommend expensive software. We design and launch tailored digital elements that are designed purely to improve search positioning, generate leads, and report metrics flawlessly.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch mb-14">
          {SERVICES.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:bg-white hover:border-slate-200/80 premium-shadow-hover transition-all duration-300 relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onServiceSelect(item.id)}
            >
              <div>
                
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5 group-hover:scale-105 transition-all">
                  {getIcon(item.icon)}
                </div>

                {/* Service Title */}
                <h3 className="font-sans font-bold text-slate-800 text-lg mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-slate-500 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Bullets List */}
                <div className="space-y-2 mb-6">
                  {item.features.map((feat) => (
                    <div key={feat} className="flex gap-2 items-start text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-teal shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom arrow */}
              <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wide group-hover:text-primary-800 transition-colors">
                  System Preview
                </span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-primary-900 group-hover:text-white transition-all shadow-sm">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Summary Under Service cards */}
        <div className="rounded-3xl bg-gradient-to-r from-primary-950 to-primary-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />
          
          <div className="text-left relative z-10 max-w-2xl">
            <h4 className="font-display font-medium text-lg text-accent-teal">Need a customized bundle package?</h4>
            <span className="font-display font-bold text-2xl text-white block mt-1">
              Select multiple systems to save up to ₹15,000 in setup.
            </span>
            <p className="text-slate-300 text-sm mt-2">
              Book a free setup strategy and audit call to find out which custom dashboards can replace your specific monthly bills completely.
            </p>
          </div>

          <button
            onClick={onAuditClick}
            className="w-full md:w-auto px-7 py-3.5 bg-accent-blue hover:bg-sky-500 text-white font-sans font-bold rounded-xl active:scale-98 tracking-wide cursor-pointer transition-all shadow-md flex items-center justify-center gap-2 group shrink-0"
            id="services-cta"
          >
            <span>Inspect Custom Bundles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
