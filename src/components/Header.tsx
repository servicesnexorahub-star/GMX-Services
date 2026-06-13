/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Globe, LayoutDashboard, Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onAuditClick: () => void;
  onPortalToggle: () => void;
  isPortalOpen: boolean;
  auditSubmissionsCount: number;
}

export default function Header({ onAuditClick, onPortalToggle, isPortalOpen, auditSubmissionsCount }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Services', href: '#services' },
    { label: 'Dashboards', href: '#dashboards' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Pricing', href: '#pricing' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100/85 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-display tracking-[0.02em] text-2xl leading-none transition-colors text-slate-900 group-hover:text-slate-800">
              <span className="font-extrabold">GMX</span>
              <span className="font-light">Services</span>
            </span>
            <span className="block text-[10px] font-sans font-medium tracking-[0.2em] text-slate-900 group-hover:text-slate-800 uppercase mt-1 leading-none">
              Future Together
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans font-medium text-sm text-slate-600 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Sheets Portal Indicator Toggle */}
            <button
              onClick={onPortalToggle}
              className={`flex items-center gap-2 px-3 pb-1.5 pt-1 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                isPortalOpen
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm shadow-emerald-50'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
              title="Click to view the real-time Sheets CRM Simulator"
              id="header-portal-toggle"
            >
              <span className={`w-2 h-2 rounded-full ${isPortalOpen ? 'bg-emerald-500 animate-ping' : 'bg-slate-450'}`} />
              <span>CRM PORTAL</span>
              <span className="bg-primary-900/10 px-1.5 py-0.5 rounded-full text-[10px] text-primary-800">
                {auditSubmissionsCount} submissions
              </span>
            </button>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors"
              id="header-call-cta"
            >
              <Phone className="w-4 h-4 text-accent-blue" />
              <span>+91 98765 43210</span>
            </a>

            <button
              onClick={onAuditClick}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-sans font-semibold text-sm text-white bg-primary-900 hover:bg-primary-800 active:scale-98 shadow-md shadow-primary-900/10 transition-all cursor-pointer overflow-hidden group"
              id="header-audit-cta"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Audit My Business
                <ArrowRight className="w-4 h-4 transition-transform duration-305 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onPortalToggle}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-mono font-semibold transition-all ${
                isPortalOpen ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-100 text-slate-600 border border-slate-200'
              }`}
              id="header-mobile-portal-toggle"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isPortalOpen ? 'bg-emerald-500 animate-ping' : 'bg-slate-400'}`} />
              <span>CRM</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-600 hover:text-primary-900 hover:bg-slate-50 transition-colors focus:outline-none"
              id="header-menu-hamburger"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-6 px-4 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans font-medium text-base text-slate-700 hover:text-primary-600 py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="h-[1px] bg-slate-100 my-2" />
            
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-slate-700 font-semibold text-sm py-1"
              >
                <Phone className="w-4 h-4 text-accent-blue" />
                <span>+91 98765 43210</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onAuditClick();
                }}
                className="w-full py-3 rounded-xl bg-primary-900 text-white font-semibold text-center text-sm shadow-md"
              >
                Request Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
