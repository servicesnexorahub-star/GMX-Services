/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Layers, 
  BarChart3, 
  Eye, 
  Grid, 
  ArrowRight, 
  Check, 
  Loader2,
  Lock,
  PlusSquare
} from 'lucide-react';
import { AuditSubmission } from '../types';

interface DashboardShowcaseProps {
  auditSubmissions: AuditSubmission[];
}

type DashboardTab = 'sales' | 'leads' | 'expenses' | 'inventory' | 'profit' | 'analytics';

export default function DashboardShowcase({ auditSubmissions }: DashboardShowcaseProps) {
  const [activeTab, setActiveTab] = useState<DashboardTab>('leads');
  const [simulatedFilter, setSimulatedFilter] = useState<string>('All');

  const tabs: { id: DashboardTab; label: string; description: string }[] = [
    { id: 'leads', label: 'Lead Tracking CRM', description: 'Centralized intake' },
    { id: 'sales', label: 'Sales Dashboard', description: 'Invoices & conversions' },
    { id: 'expenses', label: 'Expense Ledger', description: 'Real-time outgoings' },
    { id: 'inventory', label: 'Stock & Inventory', description: 'Fulfillment indices' },
    { id: 'profit', label: 'Profit Analysis', description: 'Margins & payout ratios' },
    { id: 'analytics', label: 'Marketing Insights', description: 'SEO & traffic metrics' }
  ];

  // Simulated static records for CRM databases
  const defaultSimulatedLeads = [
    { id: 'LD-101', name: 'Rohan Sharma', businessName: 'Sharma & Sons Sweets', phone: '9845X XXXXX', status: 'Report Generated', score: 85, date: 'Today, 10:24 AM' },
    { id: 'LD-102', name: 'Dr. Priya Patel', businessName: 'Teeth Care Dental', phone: '9123X XXXXX', status: 'Analyzing', score: 72, date: 'Today, 09:15 AM' },
    { id: 'LD-103', name: 'Sanjay Aggarwal', businessName: 'Aggarwal Builders', phone: '9555X XXXXX', status: 'Received', score: 90, date: 'Yesterday' },
    { id: 'LD-104', name: 'Asha Nair', businessName: 'The Curry Pot Eatery', phone: '9344X XXXXX', status: 'Scheduled', score: 95, date: 'Yesterday' },
    { id: 'LD-105', name: 'Pankaj Joshi', businessName: 'Nesta Gym Studio', phone: '9211X XXXXX', status: 'Report Generated', score: 68, date: '3 days ago' }
  ];

  const salesRecords = [
    { orderId: 'TR-4509', client: 'Greenwoods Realty', amount: '₹45,000', status: 'Paid', method: 'UPI Instant', date: 'June 12, 2026' },
    { orderId: 'TR-4510', client: 'Royal Orchid Restaurant', amount: '₹29,999', status: 'Paid', method: 'NEFT Transfer', date: 'June 11, 2026' },
    { orderId: 'TR-4511', client: 'Signature Salon Group', amount: '₹29,999', status: 'Pending', method: 'Card Booking', date: 'June 10, 2026' },
    { orderId: 'TR-4512', client: 'Vedic Care Clinic', amount: '₹45,000', status: 'Paid', method: 'UPI Instant', date: 'June 08, 2026' }
  ];

  const expenseRecords = [
    { item: 'Cloud Domain Registry', category: 'Infrastructure', cost: '₹1,200', date: 'June 01, 2026', notes: 'Renewed for 12 months' },
    { item: 'Social Ad Graphic Packs', category: 'Creative Assets', cost: '₹3,500', date: 'May 28, 2026', notes: 'Custom elements loaded' },
    { item: 'WhatsApp Business API Credits', category: 'Automations', cost: '₹800', date: 'May 25, 2026', notes: 'Trigger utility logs' },
    { item: 'Client Strategy Meeting Dinner', category: 'Operations', cost: '₹4,200', date: 'May 22, 2026', notes: 'Finalized Apex real estate' }
  ];

  const stockRecords = [
    { item: 'Premium Espresso Beans', sku: 'ST-009-CAFF', stock: '40 kg', status: 'Optimal', supplier: 'Coorg Estates' },
    { item: 'Takeaway Recyclable Boxes', sku: 'ST-210-BOXS', stock: '240 pcs', status: 'Low Stock', supplier: 'Global Packs' },
    { item: 'Standard Branded Paper Bags', sku: 'ST-211-PAGS', stock: '500 pcs', status: 'Optimal', supplier: 'Global Packs' },
    { item: 'Specialty Syrup Assortment', sku: 'ST-012-SYRP', stock: '12 bottles', status: 'Critical', supplier: 'Nectar Syrups' }
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Received':
      case 'Pending':
        return 'bg-amber-50 text-amber-600 border border-amber-200';
      case 'Analyzing':
        return 'bg-blue-50 text-blue-600 border border-blue-200 animate-pulse';
      case 'Report Generated':
      case 'Paid':
      case 'Optimal':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      case 'Scheduled':
        return 'bg-indigo-50 text-indigo-600 border border-indigo-200';
      case 'Critical':
      case 'Low Stock':
        return 'bg-rose-50 text-rose-600 border border-rose-200';
      default:
        return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <section id="dashboards" className="py-20 lg:py-28 bg-slate-900 text-slate-100 relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue bg-primary-950/80 border border-primary-900 px-3 py-1.5 rounded-full">
            LIVE CUSTOM BUSINESS GRAPHICS DEMO
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-4 mb-5">
            Business Intelligence Without Expensive Software
          </h2>
          <p className="font-sans text-slate-400">
            Explore our custom-built dashboard solutions. We construct these tailored reports within tools you already trust, updating operational rows automatically and generating zero monthly billing cycles.
          </p>
        </div>

        {/* Outer Dashboard frame layout */}
        <div className="bg-[#0b0f19] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Dashboard Left Sidebar Tabs */}
          <div className="lg:col-span-3 bg-[#0d1222] border-r border-slate-800/80 p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-800 mb-4 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">SYSTEMS LIST</span>
                <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">LIVE COMPONENT</span>
              </div>
              <div className="space-y-1.5">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center gap-3 group relative cursor-pointer ${
                      activeTab === tab.id 
                        ? 'bg-primary-900 border border-primary-850 text-white' 
                        : 'text-slate-400 hover:bg-slate-800/40 hover:text-white border border-transparent'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      activeTab === tab.id ? 'bg-primary-950' : 'bg-[#151b32]'
                    }`}>
                      {tab.id === 'leads' && <Users className="w-4 h-4 text-emerald-400" />}
                      {tab.id === 'sales' && <DollarSign className="w-4 h-4 text-amber-400" />}
                      {tab.id === 'expenses' && <Layers className="w-4 h-4 text-rose-450" />}
                      {tab.id === 'inventory' && <Grid className="w-4 h-4 text-violet-400" />}
                      {tab.id === 'profit' && <TrendingUp className="w-4 h-4 text-teal-400" />}
                      {tab.id === 'analytics' && <BarChart3 className="w-4 h-4 text-accent-blue" />}
                    </div>
                    <div>
                      <span className="font-sans font-bold text-xs sm:text-xs block">{tab.label}</span>
                      <span className="text-[9px] text-slate-400 group-hover:text-slate-300 block">{tab.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Support section at sidebar bottom */}
            <div className="pt-6 border-t border-slate-805 mt-6 hidden lg:block">
              <div className="p-3.5 bg-slate-800/20 border border-slate-800/80 rounded-xl relative overflow-hidden">
                <span className="text-slate-350 font-mono text-[9px] uppercase tracking-wider block mb-1">Your CRM Status</span>
                <span className="font-display font-semibold text-xs text-white block">Connected to Workspace</span>
                <div className="flex items-center gap-1.5 mt-2 text-[9px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Webhook pipelines active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Right Main Content stage */}
          <div className="lg:col-span-9 p-5 sm:p-8 flex flex-col justify-between min-h-[460px] relative">
            
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-5 border-b border-slate-800 mb-6">
              <div>
                <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                  {tabs.find((t) => t.id === activeTab)?.label}
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Simulated preview of custom system metrics for local accounts
                </p>
              </div>

              {/* Status actions */}
              <div className="flex items-center gap-2自 px-3 py-1.5 rounded-lg bg-[#0e1425] border border-slate-850 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-slate-350 font-mono text-[10px] ml-1">Spreadsheet Sync: OK</span>
              </div>
            </div>

            {/* Dashboard Workspace View: Tab SWITCH */}
            <div className="grow">
              
              {/* CASE 1: Lead Tracking CRM */}
              {activeTab === 'leads' && (
                <div>
                  
                  {/* CRM Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block font-mono">Total Submissions</span>
                      <span className="font-display font-bold text-xl text-white">
                        {defaultSimulatedLeads.length + auditSubmissions.length}
                      </span>
                    </div>
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block font-mono">Status: Received</span>
                      <span className="font-display font-bold text-xl text-amber-400">
                        {defaultSimulatedLeads.filter(l => l.status === 'Received').length + auditSubmissions.filter(s => s.status === 'Received').length}
                      </span>
                    </div>
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block font-mono">Analyses complete</span>
                      <span className="font-display font-bold text-xl text-emerald-400">
                        {defaultSimulatedLeads.filter(l => l.status === 'Report Generated').length + auditSubmissions.filter(s => s.status === 'Report Generated').length}
                      </span>
                    </div>
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block font-mono">SLA Conversion</span>
                      <span className="font-display font-bold text-xl text-accent-blue">78.5%</span>
                    </div>
                  </div>

                  {/* CRM Database list */}
                  <h5 className="text-xs font-mono font-bold uppercase text-slate-450 mb-3 block">Live Database Registry</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-800/80 text-slate-400 font-mono">
                          <th className="py-2.5 px-3">RECORD ID</th>
                          <th className="py-2.5 px-3">CONTACT</th>
                          <th className="py-2.5 px-3">BUSINESS ENTITY</th>
                          <th className="py-2.5 px-3">LEAD SCORE</th>
                          <th className="py-2.5 px-3">STAGE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-805">
                        
                        {/* Dynamic actual test submissions from form */}
                        {auditSubmissions.map((sub, index) => (
                          <tr key={`real-${sub.id}`} className="hover:bg-primary-950/20 bg-emerald-950/10 text-emerald-100 transition-colors">
                            <td className="py-3 px-3 font-mono font-bold text-emerald-400">AUDIT-{index + 1}</td>
                            <td className="py-3 px-3">
                              <span className="block font-semibold text-white">{sub.name}</span>
                              <span className="text-[10px] text-slate-400">{sub.phone}</span>
                            </td>
                            <td className="py-3 px-3 font-semibold">{sub.businessName}</td>
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono">{sub.score || 88}</span>
                                <span className="text-[9px] text-emerald-400">✓ New Intake</span>
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${getStatusBadgeClass(sub.status)}`}>
                                {sub.status}
                              </span>
                            </td>
                          </tr>
                        ))}

                        {/* Static starter list */}
                        {defaultSimulatedLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-slate-800/25 transition-colors text-slate-300">
                            <td className="py-3 px-3 font-mono font-bold text-slate-400">{lead.id}</td>
                            <td className="py-3 px-3">
                              <span className="block font-semibold text-white">{lead.name}</span>
                              <span className="text-[10px] text-slate-500 font-mono">{lead.phone}</span>
                            </td>
                            <td className="py-3 px-3">{lead.businessName}</td>
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-1.5 font-mono text-slate-300">
                                <div className="w-8 bg-slate-800 h-1 rounded-full overflow-hidden">
                                  <div className="bg-primary-500 h-full" style={{ width: `${lead.score}%` }} />
                                </div>
                                <span>{lead.score}</span>
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${getStatusBadgeClass(lead.status)}`}>
                                {lead.status}
                              </span>
                            </td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                  </div>

                  {auditSubmissions.length === 0 && (
                    <div className="mt-4 p-3 bg-slate-900 border border-slate-850 rounded-xl text-center text-slate-400 hover:text-white transition-colors">
                      <span className="text-xs font-mono">
                        💡 Go fill out the <strong className="text-emerald-400">Free Business Audit</strong> form below. Your direct entry will appear inside this live dashboard automatically!
                      </span>
                    </div>
                  )}

                </div>
              )}

              {/* CASE 2: Sales Dashboard */}
              {activeTab === 'sales' && (
                <div>
                  
                  {/* Sales Metrics Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#0f152a] p-4 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] font-mono block">Gross Billing Month</span>
                      <span className="font-display font-bold text-2xl text-emerald-400">₹1,49,998</span>
                      <span className="text-[10px] text-slate-400 block mt-1">+15% over target benchmark</span>
                    </div>
                    <div className="bg-[#0f152a] p-4 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] font-mono block">Custom setups delivered</span>
                      <span className="font-display font-bold text-2xl text-white">4 Systems</span>
                      <span className="text-[10px] text-slate-400 block mt-1">100% Client handover ratings</span>
                    </div>
                    <div className="bg-[#0f152a] p-4 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] font-mono block">SaaS Fees Eliminated</span>
                      <span className="font-display font-bold text-2xl text-accent-blue">₹32,450/mo</span>
                      <span className="text-[10px] text-slate-400 block mt-1">Direct savings added to margins</span>
                    </div>
                  </div>

                  <h5 className="text-xs font-mono font-bold uppercase text-slate-450 mb-3 block">Transaction ledger (Google sheets export)</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-mono">
                          <th className="py-2.5 px-3">TX_ID</th>
                          <th className="py-2.5 px-3">BUSINESS PARTNER</th>
                          <th className="py-2.5 px-3">RECORDED AMOUNT</th>
                          <th className="py-2.5 px-3">TIMESTAMP</th>
                          <th className="py-2.5 px-3">LEDGER GATE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-805">
                        {salesRecords.map((sale) => (
                          <tr key={sale.orderId} className="hover:bg-slate-800/25 text-slate-300">
                            <td className="py-3 px-3 font-mono text-slate-400">{sale.orderId}</td>
                            <td className="py-3 px-3 font-semibold text-white">{sale.client}</td>
                            <td className="py-3 px-3 font-bold text-emerald-400">{sale.amount}</td>
                            <td className="py-3 px-3 font-mono">{sale.date}</td>
                            <td className="py-3 px-3">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${getStatusBadgeClass(sale.status)}`}>
                                {sale.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

              {/* CASE 3: Expenses */}
              {activeTab === 'expenses' && (
                <div>
                  
                  {/* Expense Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#0f152a] p-4 rounded-xl border border-slate-800">
                      <span className="text-rose-400 text-xs font-mono block">Monthly Operating Outflows</span>
                      <span className="font-display font-bold text-2xl text-white">₹9,700</span>
                      <span className="text-[10px] text-slate-400 block mt-1">Covering web integrations and baseline APIs</span>
                    </div>
                    <div className="bg-[#0f152a] p-4 rounded-xl border border-slate-800">
                      <span className="text-emerald-400 text-xs font-mono block">Operational Overhead Cost Ratio</span>
                      <span className="font-display font-font-bold text-2xl text-emerald-400">6.47%</span>
                      <span className="text-[10px] text-slate-400 block mt-1">Extremely lightweight compared to traditional software bills</span>
                    </div>
                  </div>

                  <h5 className="text-xs font-mono font-bold uppercase text-slate-450 mb-3 block">Outgoings log (auto-updated sheets grid)</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-mono">
                          <th className="py-2.5 px-3">LOG_ITEM</th>
                          <th className="py-2.5 px-3">CATEGORY</th>
                          <th className="py-2.5 px-3">RECORD COST</th>
                          <th className="py-2.5 px-3">DATE RECORDED</th>
                          <th className="py-2.5 px-3">NOTES DESCRIPTION</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-805 text-slate-300">
                        {expenseRecords.map((exp, idx) => (
                          <tr key={idx} className="hover:bg-slate-800/25">
                            <td className="py-3 px-3 font-semibold text-white">{exp.item}</td>
                            <td className="py-3 px-3 font-mono text-slate-455">{exp.category}</td>
                            <td className="py-3 px-3 text-rose-400 font-bold">{exp.cost}</td>
                            <td className="py-3 px-3 font-mono">{exp.date}</td>
                            <td className="py-3 px-3 font-sans text-slate-400 max-w-[180px] truncate">{exp.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

              {/* CASE 4: Inventory */}
              {activeTab === 'inventory' && (
                <div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#0f152a] p-3 rounded-xl border border-slate-800 text-center">
                      <span className="text-slate-400 text-[10px] block font-mono">Stock SKUs tracked</span>
                      <span className="font-display font-medium text-lg text-white">12 Items</span>
                    </div>
                    <div className="bg-[#0f152a] p-3 rounded-xl border border-slate-800 text-center">
                      <span className="text-amber-400 text-[10px] block font-mono">Restock Warnings</span>
                      <span className="font-display font-semibold text-lg text-amber-400">1 Item</span>
                    </div>
                    <div className="bg-[#0f152a] p-3 rounded-xl border border-slate-800 text-center">
                      <span className="text-rose-400 text-[10px] block font-mono">Critical Scarcity</span>
                      <span className="font-display font-bold text-lg text-rose-500">1 Item</span>
                    </div>
                  </div>

                  <h5 className="text-xs font-mono font-bold uppercase text-slate-450 mb-3 block">Fulfillment tracking panel</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-mono">
                          <th className="py-2.5 px-3">STOCK_ITEM</th>
                          <th className="py-2.5 px-3">SKU</th>
                          <th className="py-2.5 px-3">STOCK ON HAND</th>
                          <th className="py-2.5 px-3">STATUS FLAG</th>
                          <th className="py-2.5 px-3">SUPPLIER STAGE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-805 text-slate-300">
                        {stockRecords.map((stock, idx) => (
                          <tr key={idx} className="hover:bg-slate-800/25">
                            <td className="py-3 px-3 font-semibold text-white">{stock.item}</td>
                            <td className="py-3 px-3 font-mono text-slate-400">{stock.sku}</td>
                            <td className="py-3 px-3 font-bold font-mono">{stock.stock}</td>
                            <td className="py-3 px-3">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${getStatusBadgeClass(stock.status)}`}>
                                {stock.status}
                              </span>
                            </td>
                            <td className="py-3 px-3 font-sans text-slate-400">{stock.supplier}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

              {/* CASE 5: Profit */}
              {activeTab === 'profit' && (
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] font-mono block">Gross Income</span>
                      <span className="font-display font-medium text-lg text-white">₹1,49,998</span>
                    </div>
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] font-mono block">Operating Outflow</span>
                      <span className="font-display font-bold text-lg text-rose-455">₹9,700</span>
                    </div>
                    <div className="bg-[#0f155a] p-3.5 rounded-xl border border-emerald-500/20 shadow">
                      <span className="text-emerald-300 text-[10px] font-mono block">Net Operating Profit</span>
                      <span className="font-display font-bold text-lg text-emerald-400">₹1,40,298</span>
                    </div>
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] font-mono block">Cumulative Margin</span>
                      <span className="font-display font-bold text-lg text-teal-400">93.53%</span>
                    </div>
                  </div>

                  {/* Draw beautiful custom SVG profit performance chart */}
                  <div className="p-4 bg-slate-[#0f152a]/20 border border-slate-800/80 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <h6 className="text-xs font-bold text-slate-200">Net Profit Growth Curves (Quarter 1 & 2)</h6>
                      <span className="text-[10px] text-slate-450 font-mono">Updated today</span>
                    </div>
                    <div className="relative h-32 w-full pt-4">
                      {/* Grid background lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                        <div className="border-b border-dashed border-slate-700 w-full h-1" />
                        <div className="border-b border-dashed border-slate-700 w-full h-1" />
                        <div className="border-b border-dashed border-slate-700 w-full h-1" />
                      </div>
                      
                      {/* Pure React SVG vector curves */}
                      <svg className="w-full h-full text-emerald-400 stroke-current fill-none overflow-visible" preserveAspectRatio="none">
                        <path
                          d="M 0 110 Q 150 70 300 90 T 600 40 T 900 10"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 0 110 Q 150 70 300 90 T 600 40 T 900 10 L 900 120 L 0 120 Z"
                          fill="url(#profit-gradient)"
                          strokeWidth="0"
                          opacity="0.1"
                        />
                        <defs>
                          <linearGradient id="profit-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono pt-2">
                      <span>January</span>
                      <span>February</span>
                      <span>March</span>
                      <span>April</span>
                      <span>May</span>
                      <span>Live June</span>
                    </div>
                  </div>
                </div>
              )}

              {/* CASE 6: Analytics */}
              {activeTab === 'analytics' && (
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] font-mono block">Organic search clicks</span>
                      <span className="font-display font-medium text-lg text-white">4,812 /mo</span>
                      <span className="text-[9px] text-emerald-400 block mt-1">▲ +240% Local Rank</span>
                    </div>
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] font-mono block">Google Business Clicks</span>
                      <span className="font-display font-medium text-lg text-white">1,894 /mo</span>
                      <span className="text-[9px] text-emerald-400 block mt-1">▲ +180% Navigation Calls</span>
                    </div>
                    <div className="bg-[#0f152a] p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] font-mono block">Average CTR ratio</span>
                      <span className="font-display font-bold text-lg text-accent-blue">8.9% CTR</span>
                      <span className="text-[9px] text-slate-400 block mt-1">Standard benchmark is 3.1%</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-[#0f152a]/20 border border-slate-800/80 rounded-2xl">
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-xs font-bold text-slate-200">Traffic Distribution Breakdown Channels</h6>
                      <span className="text-[9px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">Looker Studio Setup</span>
                    </div>
                    <div className="space-y-3 pt-2">
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>Google Local Search & Map pack Pack</span>
                          <span className="font-mono">54.7% (2,632 clicks)</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-accent-blue h-full rounded-full" style={{ width: '54.7%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>Direct Organic Search Queries</span>
                          <span className="font-mono">28.3% (1,361 clicks)</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full rounded-full" style={{ width: '28.3%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>Social Networks CTR referrals</span>
                          <span className="font-mono">17% (819 clicks)</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-violet-400 h-full rounded-full" style={{ width: '17.0%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom action prompt */}
            <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-400 text-xs text-left max-w-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>
                  All metrics reside completely inside standard client Google sheet accounts. No server databases are hosted or billed.
                </span>
              </div>
              <a
                href="#audit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-white text-primary-950 hover:bg-slate-100 font-sans font-bold text-xs transition-colors shrink-0"
              >
                <span>Request My Dashboard Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
