/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import UniqueValue from './components/UniqueValue';
import Services from './components/Services';
import DashboardShowcase from './components/DashboardShowcase';
import IndustriesWeServe from './components/IndustriesWeServe';
import ProcessTimeline from './components/ProcessTimeline';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import AuditForm from './components/AuditForm';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import ConversionWidgets from './components/ConversionWidgets';
import { AuditSubmission } from './types';

export default function App() {
  const [auditSubmissions, setAuditSubmissions] = useState<AuditSubmission[]>([]);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // Load any previously completed local audits on mount to look populated
  useEffect(() => {
    const saved = localStorage.getItem('growth-audit-leads');
    if (saved) {
      try {
        setAuditSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse logs', e);
      }
    }
  }, []);

  // Standard scrolling handler
  const scrollToSelection = (elementId: string) => {
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Callback to capture new leads
  const handleAddNewAudit = (formData: Omit<AuditSubmission, 'id' | 'status' | 'timestamp' | 'score'>) => {
    const randomScore = Math.floor(Math.random() * 25) + 65; // realistic SEO score
    const newSubmission: AuditSubmission = {
      ...formData,
      id: `AUDIT-${Math.floor(Math.random() * 1000) + 2000}`,
      status: 'Received',
      timestamp: new Date().toLocaleTimeString(),
      score: randomScore
    };

    const updated = [newSubmission, ...auditSubmissions];
    setAuditSubmissions(updated);
    localStorage.setItem('growth-audit-leads', JSON.stringify(updated));

    // Scroll automatically to dashboard to witness their new client record synced inside the sheet CRM!
    setTimeout(() => {
      scrollToSelection('dashboards');
    }, 1200);
  };

  const handleWhatsappInitiate = () => {
    window.open("https://wa.me/917827225254?text=Hi!+I'm+exploring+your+website+and+would+like+to+discuss+installing+a+custom+sheets+CRM+and+website.", "_blank");
  };

  return (
    <div id="website-root" className="min-h-screen text-slate-855 selection:bg-primary-100 selection:text-primary-900 bg-white antialiased relative">
      
      {/* Header element bar */}
      <Header 
        onAuditClick={() => scrollToSelection('audit')}
        onPortalToggle={() => setIsPortalOpen(!isPortalOpen)}
        isPortalOpen={isPortalOpen || auditSubmissions.length > 0}
        auditSubmissionsCount={auditSubmissions.length}
      />

      {/* Main Website Sections */}
      <main className="relative">
        
        {/* Banner Alert if Sheets CRM has submissions inside */}
        {auditSubmissions.length > 0 && (
          <div className="bg-emerald-600 text-white text-xs text-center py-2.5 px-4 font-mono font-medium flex items-center justify-center gap-1.5 sticky top-[72px] z-30 shadow border-b border-emerald-500 animate-slideDown">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Success: Your audit data synced live! 🚀 Scroll down to the CRM demo below to inspect your row record.</span>
          </div>
        )}

        {/* Section 1: Hero Section with Live Stats counters */}
        <Hero 
          onAuditClick={() => scrollToSelection('audit')}
          onStrategyCallClick={() => scrollToSelection('audit')}
        />

        {/* Section 2: Split Pain Point Problems vs Solution lists */}
        <ProblemSolution onCtaClick={() => scrollToSelection('audit')} />

        {/* Section 3: Value comparative Calculator comparing cost stacks */}
        <UniqueValue onCtaClick={() => scrollToSelection('audit')} />

        {/* Section 4: Premium grids of core agencies service models */}
        <Services 
          onServiceSelect={(id) => scrollToSelection('dashboards')}
          onAuditClick={() => scrollToSelection('audit')}
        />

        {/* Section 5: Interactive dashboard showcase switch */}
        <DashboardShowcase auditSubmissions={auditSubmissions} />

        {/* Section 6: Tabbed industry-specific challenges block */}
        <IndustriesWeServe onAuditClick={() => scrollToSelection('audit')} />

        {/* Section 7: Modern sequential vertical timeline */}
        <ProcessTimeline />

        {/* Section 8: Visual Case-studies with stats charts */}
        <CaseStudies onAuditClick={() => scrollToSelection('audit')} />

        {/* Section 9: Highly highlighted transparent costing tiers */}
        <Pricing onPlanSelect={(plan) => scrollToSelection('audit')} />

        {/* Section 10: Verified user reviews grid with tag filters */}
        <Testimonials />

        {/* Section 11: Real-time form capturing lead values */}
        <AuditForm onAuditSubmit={handleAddNewAudit} />

        {/* Section 12: Expandable FAQ columns */}
        <FaqSection />

        {/* Section 13: Elegant final closing cta cards */}
        <FinalCta 
          onAuditClick={() => scrollToSelection('audit')}
          onWhatsappClick={handleWhatsappInitiate}
        />

      </main>

      {/* Section 14: Dark slate solid corporate footer details */}
      <Footer />

      {/* Floating Call widgets & popup banners for Conversion */}
      <ConversionWidgets 
        onAuditClick={() => scrollToSelection('audit')}
        onWhatsappClick={handleWhatsappInitiate}
      />

    </div>
  );
}
