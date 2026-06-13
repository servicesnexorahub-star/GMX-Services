/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, FormEvent } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Loader2, 
  HelpCircle, 
  ArrowRight, 
  Sparkles,
  FileText,
  AlertCircle
} from 'lucide-react';
import { AuditSubmission } from '../types';

interface AuditFormProps {
  onAuditSubmit: (submission: Omit<AuditSubmission, 'id' | 'status' | 'timestamp' | 'score'>) => void;
}

export default function AuditForm({ onAuditSubmit }: AuditFormProps) {
  // Input states
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  // Form submission status
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [progressState, setProgressState] = useState<string>('');
  const [mockScore, setMockScore] = useState<number>(0);

  // Quick WhatsApp match same as phone
  const copyPhoneToWhatsapp = () => {
    setWhatsapp(phone);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !businessName || !phone || !email) {
      alert('Please fill out all mandatory fields (Name, Business Name, Phone, Email)');
      return;
    }

    setIsLoading(true);
    setProgressState('Connecting to Sheets API Webhook...');
    
    // Simulate interactive analysis phases
    await new Promise((resolve) => setTimeout(resolve, 800));
    setProgressState('Checking Google Maps ranking index...');
    await new Promise((resolve) => setTimeout(resolve, 800));
    setProgressState('Evaluating Mobile SEO layout headers...');
    await new Promise((resolve) => setTimeout(resolve, 800));
    setProgressState('Mapping custom Looker Studio recommendations...');
    
    // Calculate a realistic random SEO index score
    const score = Math.floor(Math.random() * 30) + 45; // 45 to 75 score
    setMockScore(score);

    // Call callback to store in App state (which populates showcase lists CRM!)
    onAuditSubmit({
      name,
      businessName,
      phone,
      whatsapp: whatsapp || phone,
      email,
      website: website || 'N/A'
    });

    setIsLoading(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setName('');
    setBusinessName('');
    setPhone('');
    setWhatsapp('');
    setEmail('');
    setWebsite('');
    setIsSuccess(false);
  };

  const auditOffers = [
    { label: "Website Design & Performance", desc: "Detailed inspection of mobile page speeds, SEO meta elements, and conversion rates." },
    { label: "Google maps Pack Audit", desc: "Audit of search placement ranking on maps, reviews, and categories optimization." },
    { label: "Lead routing & leakage logs", desc: "Inspection of lost client inquiries and immediate response automation options." },
    { label: "Looker Studio templates", desc: "Specific advice on exactly which monthly product fees can be replaced with sheets." }
  ];

  return (
    <section id="audit" className="py-20 lg:py-28 bg-[#fafbfc] relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Summary: Auditing indicators */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-white border border-slate-150 px-3 py-1.2 rounded-full inline-block mb-4">
                FREE DIGITAL SYSTEMS DIAGNOSTICS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950 tracking-tight mb-5 leading-normal">
                Is Your Business Leaking Customers Offline?
              </h2>
              <p className="font-sans text-slate-650 mb-8 leading-relaxed text-sm sm:text-base">
                Request your bespoke 100% free GMX Services audit report. We inspect your local search maps positioning, page layouts, and lead workflows to locate automated scaling slots without enterprise budgets.
              </p>

              {/* Scope includes checklist */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  WHAT IS INCLUDED IN YOUR REPORT SHEET
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {auditOffers.map((off) => (
                    <div key={off.label} className="bg-white p-4.5 rounded-2xl border border-slate-150/40 shadow-sm">
                      <div className="w-5.5 h-5.5 rounded-full bg-primary-50 flex items-center justify-center text-primary-650 mb-2 font-bold text-xs">
                        ✓
                      </div>
                      <h4 className="font-sans font-bold text-slate-800 text-xs sm:text-sm mb-1 leading-tight">{off.label}</h4>
                      <p className="font-sans text-slate-500 text-[11px] leading-relaxed">{off.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro-guarantee */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <span className="text-[11px] text-slate-450 leading-normal block text-left">
                🔒 Data Privacy Guard: We never sell or share your phone/email contacts with marketing networks. We store all database inquiries securely on your local workspace.
              </span>
            </div>
          </div>

          {/* Right Summary: Live Form Container */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-205/60 shadow-xl relative overflow-hidden">
              
              {/* Visual Decorative border bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary-600 via-accent-blue to-accent-teal" />

              {/* STAGE A: Loading State */}
              {isLoading && (
                <div className="py-16 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <Loader2 className="w-12 h-12 text-primary-650 animate-spin mb-4" />
                  <h3 className="font-display font-semibold text-lg text-slate-800 mb-1">
                    Running Digital Audit Diagnostic...
                  </h3>
                  <p className="font-mono text-xs text-indigo-600 font-bold tracking-widest uppercase">
                    {progressState}
                  </p>
                </div>
              )}

              {/* STAGE B: Success State */}
              {isSuccess && (
                <div className="py-6 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-emerald-950 mb-2">
                    Analysis Scheduled Successfully!
                  </h3>
                  <p className="font-sans text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
                    Congratulations! Your audit request is compiled. We've logged under record <strong>AUDIT-{mockScore}</strong> inside the CRM tables. One of our engineers will ring/Whatsapp you shortly.
                  </p>

                  <div className="bg-slate-50 p-4.5 rounded-2xl w-full border border-slate-100 text-left mb-6">
                    <span className="text-[10px] font-mono tracking-wider text-slate-450 uppercase block mb-2 font-bold">Audit Parameters Received</span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div><span className="text-slate-400">Business:</span> <span className="font-semibold text-slate-805 truncate block">{businessName}</span></div>
                      <div><span className="text-slate-400">Email:</span> <span className="font-semibold text-slate-805 truncate block">{email}</span></div>
                      <div><span className="text-slate-400">Phone Code:</span> <span className="font-semibold text-slate-805 block">{phone}</span></div>
                      <div><span className="text-slate-400">SLA Priority:</span> <span className="font-semibold text-emerald-600 block">High Intake Priority</span></div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <a
                      href="#dashboards"
                      className="grow py-3.5 px-4 rounded-xl bg-primary-950 text-white font-sans font-bold text-xs text-center border active:scale-98 transition-all"
                    >
                      Check Live CRM Table Above
                    </a>
                    <button
                      onClick={handleReset}
                      className="py-3.5 px-4 rounded-xl border border-slate-200 text-slate-500 font-semibold text-xs active:scale-98 hover:bg-slate-50 transition-all"
                    >
                      Audit Another Account
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE C: Default Standard Form */}
              {!isLoading && !isSuccess && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Title */}
                  <div className="pb-4 border-b border-slate-100">
                    <h3 className="font-display font-bold text-lg text-primary-950">Book My Free GMX Services Audit</h3>
                    <p className="text-xs text-slate-500 leading-normal mt-0.5">Custom analysis, recommendations sheet, and costings checklist.</p>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-480 block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rohan Sharma"
                        className="w-full p-2.5 rounded-xl border border-slate-205 focus:outline-none focus:ring-1 focus:ring-primary-600 text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-480 block mb-1">Business Name *</label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Sharma Sweets"
                        className="w-full p-2.5 rounded-xl border border-slate-205 focus:outline-none focus:ring-1 focus:ring-primary-600 text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-480 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 98765 43210"
                        className="w-full p-2.5 rounded-xl border border-slate-205 focus:outline-none focus:ring-1 focus:ring-primary-600 text-sm font-medium"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-480 block">WhatsApp Number</label>
                        <button
                          type="button"
                          onClick={copyPhoneToWhatsapp}
                          disabled={!phone}
                          className="text-[9px] font-sans font-semibold text-[#3b82f6] hover:underline disabled:opacity-40 cursor-pointer"
                        >
                          Same as Phone
                        </button>
                      </div>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="e.g. Optional"
                        className="w-full p-2.5 rounded-xl border border-slate-205 focus:outline-none focus:ring-1 focus:ring-primary-600 text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-480 block mb-1">Business Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rohan@sharmasweets.com"
                      className="w-full p-2.5 rounded-xl border border-slate-205 focus:outline-none focus:ring-1 focus:ring-primary-600 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-480 block mb-1">Current Website (If Any)</label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="e.g. https://yoursite.com (Leave blank if none)"
                      className="w-full p-2.5 rounded-xl border border-slate-205 focus:outline-none focus:ring-1 focus:ring-primary-600 text-sm font-medium"
                    />
                  </div>

                  {/* Submission Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary-950 hover:bg-primary-900 active:scale-98 text-white font-sans font-bold text-sm tracking-wide shadow transition-all cursor-pointer flex items-center justify-center gap-2 group pt-3.5 pb-4"
                    id="audit-form-submit"
                  >
                    <span>Get My Free Audit Report</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-[10px] text-slate-400 font-sans mt-2 leading-none">
                    ✓ No obligations. ✓ Delivered via WhatsApp/Email within 24 hours.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
