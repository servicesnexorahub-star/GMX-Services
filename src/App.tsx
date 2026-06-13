/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import UniqueValue from './components/UniqueValue';
import Services from './components/Services';
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

export default function App() {
  // Standard scrolling handler
  const scrollToSelection = (elementId: string) => {
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsappInitiate = () => {
    window.open("https://wa.me/917827225254?text=Hi!+I'm+exploring+your+website+and+would+like+to+discuss+installing+a+custom+sheets+CRM+and+website.", "_blank");
  };

  return (
    <div id="website-root" className="min-h-screen text-slate-855 selection:bg-primary-100 selection:text-primary-900 bg-white antialiased relative">
      
      {/* Header element bar */}
      <Header 
        onAuditClick={() => scrollToSelection('audit')}
      />

      {/* Main Website Sections */}
      <main className="relative">
        
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
          onServiceSelect={(id) => scrollToSelection('audit')}
          onAuditClick={() => scrollToSelection('audit')}
        />

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
        <AuditForm />

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
