/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, FormEvent } from 'react';
import { Globe, Send, Shield, Heart, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      
      {/* Footer Top Content block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Company Bio */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex flex-col">
            <span className="font-display tracking-[0.02em] text-2xl leading-none text-white">
              <span className="font-extrabold">GMX</span>
              <span className="font-light">Services</span>
            </span>
            <span className="block text-[10px] font-sans font-medium tracking-[0.2em] text-white uppercase mt-1 leading-none">
              Future Together
            </span>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-450 leading-relaxed max-w-sm">
            We are GMX Services, installing high-performing websites and automated dashboards on tools you already own.
          </p>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-accent-blue shrink-0" />
              <a href="tel:+917827225254" className="hover:text-white transition-colors">+91 78272 25254</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent-blue shrink-0" />
              <a href="mailto:gmxservicesdelhi@gmail.com" className="hover:text-white transition-colors">gmxservicesdelhi@gmail.com</a>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-accent-blue shrink-0" />
              <span>Marathahalli Spine, Tech Ring, Bengaluru, KA, IN</span>
            </div>
          </div>
        </div>

        {/* Services column links */}
        <div className="lg:col-span-2.5 space-y-4">
          <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider">CORE SERVICES</h4>
          <ul className="space-y-2.5 text-xs text-slate-450">
            <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Local SEO Campaign</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Google Maps Pack SEO</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Social Platforms Content</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Business CRM Dashboards</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">WhatsApp Automation</a></li>
          </ul>
        </div>

        {/* Industries column links */}
        <div className="lg:col-span-2.5 space-y-4">
          <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider">INDUSTRIES WE SERVE</h4>
          <ul className="space-y-2.5 text-xs text-slate-455">
            <li><a href="#industries" className="hover:text-white transition-colors">Real Estate & Builders</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Clinics & Healthcare</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Cafes & Restaurants</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Gyms & Salons</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Coaching & Schools</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Consultants & Agencies</a></li>
          </ul>
        </div>

        {/* Newsletter Signup form */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider">MONTHLY GROWTH TIPS</h4>
          <p className="text-xs text-slate-450 leading-relaxed">
            Subscribe to our newsletter to receive free Looker Sheets templates, local SEO guidelines, and spreadsheet automation tricks.
          </p>

          {isSubscribed ? (
            <div className="p-3.5 bg-emerald-950/30 border border-emerald-500/20 rounded-xl flex items-center gap-2 text-emerald-400 text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Thank you! Welcome to the spreadsheet inner circle!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business Email"
                className="grow p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:ring-1 focus:ring-primary-600 font-medium"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-500 text-white p-2.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Footer Bottom Credentials and Info row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Trademark info */}
        <div>
          <span>© {new Date().getFullYear()} GMX Services Systems. All absolute ownership rights reserved.</span>
          <span className="block text-[10px] text-slate-550 mt-1">
            Google, Google Sheets, Google Forms, and Looker Studio are trademarks of Google LLC. Microsoft Excel is a registered trademark of Microsoft Corp. Custom solutions are built entirely on independent, compliant free-tier API services.
          </span>
        </div>

        {/* Small credentials */}
        <div className="flex items-center gap-6 text-slate-450 shrink-0 select-none">
          <a href="#audit" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#audit" className="hover:text-white transition-colors">Terms of Work</a>
          <div className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-accent-blue" />
            <span>SLA Certified</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
