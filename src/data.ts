/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ServiceItem,
  ProblemSolutionItem,
  IndustryItem,
  CaseStudyItem,
  PricingPlan,
  TestimonialItem
} from './types';

export const PROBLEM_SOLUTIONS: ProblemSolutionItem[] = [
  {
    problem: "Typical agencies charge ₹50k+ but leave you dependent on their hosting or retainer.",
    solution: "We build custom systems on your accounts—you own all assets, code, & data forever."
  },
  {
    problem: "Expensive SaaS subscriptions (CRM, forms, reporting tools) cost ₹8,000 to ₹15,000+ per month.",
    solution: "We use lightweight automations, Excel, sheets, & Google Forms to replace paid licensing."
  },
  {
    problem: "No Google Business Profile optimization leads to local competitors stealing standard searches.",
    solution: "We optimize your profile & set up auto-response triggers to index you in the target Map Pack."
  },
  {
    problem: "Inconsistent social media posts that look generic and fail to engage local customers.",
    solution: "We create industry-specific localized high-converting templates & content pillars."
  },
  {
    problem: "Leads get lost in manual notebooks, scattered sticky notes, or private WhatsApp logs.",
    solution: "A unified custom Google Sheets CRM captures every incoming request automatically in real time."
  },
  {
    problem: "Zero business insights or sales reporting due to technical setup complexity.",
    solution: "Simple, visual Looker Studio or Excel dashboards display key operating metrics on a single screen."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Modern, rapid-loading responsive websites optimized specifically to capture service inquiries and schedule consultations.",
    icon: "Globe",
    features: [
      "No-code / code hybrids you can easily edit",
      "Optimized for 95+ mobile performance",
      "Built-in Google Forms & WhatsApp API link",
      "Compliant cookie and security layers"
    ]
  },
  {
    id: "local-seo",
    title: "Local SEO Edge",
    description: "Rank among the top local search results of Google when customers nearby look for your specific professional services.",
    icon: "SearchCode",
    features: [
      "Custom localized keyword targeting",
      "Competitor search ranking hijack",
      "High-authority regional directories",
      "Structured schema markup injection"
    ]
  },
  {
    id: "gbp-opt",
    title: "Google Business Profile",
    description: "Complete setup, optimization, and monthly review management systems to rank first in the map-pack carousel.",
    icon: "MapPin",
    features: [
      "Keyword-enriched business framing",
      "Automated WhatsApp feedback collector",
      "Q&A optimization & direct messaging triggers",
      "Geotagged local photo configuration"
    ]
  },
  {
    id: "social-mgmt",
    title: "Social Media Engine",
    description: "High-relevance localized content creation and complete profile handling to keep your brand trustworthy and current.",
    icon: "Megaphone",
    features: [
      "Industry-specific content blueprints",
      "High-visual flyers, reels & templates",
      "Optimized bio setups & local campaign tags",
      "Automated custom review widgets"
    ]
  },
  {
    id: "biz-dashboards",
    title: "Business Dashboards",
    description: "Replacing ₹5,000/mo tools with custom dashboards built in Looker Studio, Google Sheets, or Microsoft Excel.",
    icon: "LayoutDashboard",
    features: [
      "Live sales and revenue metrics",
      "Automatic data refreshing triggers",
      "Fully customized key performance graphs",
      "100% data ownership—no usage limits"
    ]
  },
  {
    id: "lead-mgmt",
    title: "Lead Management Systems",
    description: "A centralized custom CRM flow built using Google Workspace to capture, assign, and convert service prospects fast.",
    icon: "UsersRound",
    features: [
      "Interactive pipeline card views",
      "Auto lead routing to sales reps",
      "Custom automated email/SMS responses",
      "Comprehensive performance analysis"
    ]
  },
  {
    id: "wa-auto",
    title: "WhatsApp Automation",
    description: "Automate appointment reminders, instant lead welcomes, and follow-ups directly through WhatsApp APIs.",
    icon: "MessageSquare",
    features: [
      "Direct webhook response systems",
      "Automated personalized broadcast lists",
      "Chat widget for direct website interaction",
      "Zero high-cost API licensing required"
    ]
  },
  {
    id: "biz-auto",
    title: "Business Automation",
    description: "Say goodbye to repetitive manual copy-pasting, invoice generations, and scheduling chaos.",
    icon: "Cpu",
    features: [
      "Document creator macros (Invoices/Estimates)",
      "Calendar integrations for booking synch",
      "Form submission automatic triggers",
      "Slack/Telegram group instant alerts"
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "real-estate",
    name: "Real Estate & Builders",
    icon: "Building2",
    challenges: [
      "Leads come from multiple portals with poor tracking",
      "Delayed agent follow-ups lose buyers instantly",
      "Marketing spent without accurate ROI spreadsheets"
    ],
    solution: "A custom real-time lead portal linking all advertising networks directly into a WhatsApp follow-up sequence with interactive dashboards.",
    savings: "Replaces high-priced Salesforce/HubSpot pipelines saving ₹12,000/month."
  },
  {
    id: "clinics",
    name: "Clinics & Doctors",
    icon: "Stethoscope",
    challenges: [
      "Missed booking calls mean lost patients",
      "Manual appointment logs cause schedule overlaps",
      "Inadequate patient reviews on Google Maps"
    ],
    solution: "Automated Google Map Pack dominance paired with a click-to-book scheduler that reminds patients automatically using WhatsApp notifications.",
    savings: "Replaces expensive doctor booking software subscriptions saving ₹5,000/month."
  },
  {
    id: "restaurants",
    name: "Restaurants & Cafes",
    icon: "Utensils",
    challenges: [
      "Food delivery portals eat up 25-30% commissions",
      "Zero control over customer contacts and database",
      "Manual order handling causes delivery delays"
    ],
    solution: "Direct-to-WhatsApp digital menus, Google visibility boost, and custom feedback programs that cultivate repeat customers without intermediary portals.",
    savings: "Saves ₹8,000 - ₹30,000+ otherwise lost to commissions every month."
  },
  {
    id: "gyms-salons",
    name: "Gyms, Salons & Studios",
    icon: "Dumbbell",
    challenges: [
      "Unsynchronized class schedules and cancellations",
      "Struggling to follow up with dormant members",
      "Difficulties tracking subscription renewals"
    ],
    solution: "Custom membership dashboards using simple Google Forms and tracking sheets linked to automated renewal alert engines.",
    savings: "Replaces custom booking apps saving ₹4,000/month."
  },
  {
    id: "coaching",
    name: "Schools & Institutes",
    icon: "GraduationCap",
    challenges: [
      "High cost of advanced educational ERP systems",
      "Inquiries on paper forms getting easily misplaced",
      "Ineffective parent communication channels"
    ],
    solution: "Simplified student registration hubs, inquiry tracker portals, and automated WhatsApp alert modules for direct grade/agenda updates.",
    savings: "Replaces enterprise school administration software saving ₹15,000/month."
  },
  {
    id: "consultants",
    name: "Consultants & Agencies",
    icon: "Briefcase",
    challenges: [
      "Inefficient scheduling across international time zones",
      "Manual generation of service contracts & proposals",
      "Underperforming portfolio websites"
    ],
    solution: "Elite personal branding packages integrated with automated schedulers and Google Sheets quotation generators.",
    savings: "Replaces Calendly Pro, HubSpot, and PandaDocs saving ₹8,000/month."
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "cs-clinic",
    clientName: "Nirvana Wellness Clinic",
    industry: "Multi-Specialty Healthcare",
    challenge: "High reliance on paid aggregator listings and substantial appointment drop-offs due to delayed patient verification calls.",
    solution: "Optimized SEO listing structure for regional map-pack and injected a simple custom booking page synced securely with a Google Sheets dashboard database.",
    metrics: [
      { label: "Google Map Traffic", value: "+250%", improvement: "Organic visibility surge" },
      { label: "Inbound Monthly Bookings", value: "+180%", improvement: "From 90 to 252 patients" },
      { label: "Software Licensing Paid", value: "₹0", improvement: "Replaced practice software completely" }
    ],
    chartData: [
      { name: "Month 1", before: 90, after: 110 },
      { name: "Month 2", before: 90, after: 155 },
      { name: "Month 3", before: 90, after: 198 },
      { name: "Month 4", before: 90, after: 252 }
    ]
  },
  {
    id: "cs-realestate",
    clientName: "Apex Realty Consultants",
    industry: "Real Estate Brokerage",
    challenge: "Spent ₹40,000/mo on social media leads but lost track of over 60% of prospects due to scattered WhatsApp contacts and messy notebooks.",
    solution: "Engineered a custom Google Workspace pipeline. Form submissions automatically create a profile card, calculate commission estimates, and trigger booking alerts.",
    metrics: [
      { label: "Online Sales Inquiries", value: "+300%", improvement: "Efficient lead routing" },
      { label: "Response Window", value: "<2 Min", improvement: "Replaced 6-hour delay" },
      { label: "CRM Annual Costs", value: "₹0", improvement: "Saved ₹1,20,000 in subscription tier" }
    ],
    chartData: [
      { name: "Month 1", before: 40, after: 75 },
      { name: "Month 2", before: 40, after: 115 },
      { name: "Month 3", before: 40, after: 140 },
      { name: "Month 4", before: 40, after: 160 }
    ]
  },
  {
    id: "cs-restaurant",
    clientName: "The Basil Leaf Kitchen",
    industry: "Premium Local Diner & Delivery",
    challenge: "Eaten alive by 28% delivery commissions on portals, rendering home-delivery promotions completely unprofitable.",
    solution: "Created highly targeted Local SEO keyword rankings and launched a direct digital menu coupled directly to direct-WhatsApp orders.",
    metrics: [
      { label: "Local SEO Visibility", value: "+400%", improvement: "Top 3 local diner searches" },
      { label: "Direct Kitchen Orders", value: "+210%", improvement: "Circumventing portal fees" },
      { label: "Saved Intermediary Fees", value: "₹45k/mo", improvement: "Pure profit added to margins" }
    ],
    chartData: [
      { name: "Month 1", before: 120, after: 180 },
      { name: "Month 2", before: 120, after: 270 },
      { name: "Month 3", before: 120, after: 335 },
      { name: "Month 4", before: 120, after: 372 }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter System",
    price: "₹14,999",
    description: "Launch your modern online identity and automate simple inquiries with native Google Sheets tracking.",
    period: "One-Time Setup",
    isPopular: false,
    ctaText: "Begin Starter Setup",
    features: [
      "Premium 1-Page Lead Gen Website",
      "Google Business Profile Setup & Indexing",
      "Interactive Lead Capture Form (Google Forms)",
      "Standard Client Sheets CRM Tracker",
      "Instant Direct WhatsApp Click Integration",
      "12 Months Complimentary Hosting Partnering",
      "Basic Video Walkthrough Tutorial"
    ]
  },
  {
    name: "Growth System",
    price: "₹29,999",
    description: "Our most requested comprehensive package. Dominantly rank local queries and nurture leads with smart reporting.",
    period: "One-Time Setup",
    isPopular: true,
    ctaText: "Activate Growth Flow",
    features: [
      "Premium Multi-Page Responsive CMS Website",
      "Advanced Local SEO Campaign Set",
      "Google Business Map-Pack Optimization",
      "Custom Looker Studio Performance Dashboard",
      "Social Media Content Templates (15 Posts)",
      "Preloaded Automated Email Nurture Seq",
      "Real-time Leads routing via WhatsApp/Email",
      "Monthly Growth Analytics Report Cards",
      "Dedicated Whatsapp Support Support"
    ]
  },
  {
    name: "Enterprise Automation",
    price: "₹49,999",
    description: "For established service hubs aiming to maximize margins by replacing multiple ongoing product fees.",
    period: "One-Time Setup",
    isPopular: false,
    ctaText: "Establish Custom Fleet",
    features: [
      "Custom Full-Stack Business Portal Website",
      "Complete Google Sheets CRM with Deal Pipelines",
      "Custom Automated Looker Studio Dashboards",
      "WhatsApp Business API Integration Layouts",
      "Instant PDF Invoice/Estimate Autofills",
      "Staff Allocation & Task Delegation Grids",
      "Competitor Local Rank Tracking Dashboard",
      "25 High-Converting Social Graphic Sets",
      "Weekly Strategic Partner Calls (3 Months)"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Vikram Malhotra",
    role: "Managing Director",
    businessName: "Malhotra Real Estate Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tags: ["Real Estate", "Custom CRM"],
    review: "We were paying ₹18,000/month for HubSpot CRM and barely using 15% of the features. GMX Services built us a custom CRM using Google Sheets and App scripts. We get instant WhatsApp alerts whenever a facebook ad lead triggers, and everything integrates with a stellar Looker Studio map. Best tech investments we've ever made!"
  },
  {
    id: "test-2",
    name: "Dr. Ananya Rao",
    role: "Chief Pediatrician",
    businessName: "Little Stars Clinic",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tags: ["Clinics", "Local SEO"],
    review: "Our Google Business profile was non-existent in searches. They optimized our listings, sorted geographical photo tags, and established a WhatsApp review request collector. Our clinic sits on the Top 3 Map Pack now, our appointment bookings surged by 180%, and we pay zero monthly fees."
  },
  {
    id: "test-3",
    name: "Karan Johar",
    role: "Founder & Head Chef",
    businessName: "Rustic Pepper Woodfired Pizza",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tags: ["Restaurants", "WhatsApp Menu"],
    review: "Aggregators were draining our margins. They built a simple, highly visual menu where customers can add items to cart and checkout directly to our kitchen WhatsApp. Our direct delivery revenue is now larger than our portal delivery, and we saved over ₹40,000 this month in commissions!"
  },
  {
    id: "test-4",
    name: "Meera Sen",
    role: "Operations Director",
    businessName: "Nurture Kids Preschool",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tags: ["Schools", "Automations"],
    review: "Our admission process was a chaotic mess of paper forms and lost emails. GMX Services automated the entire inquiry pipeline. Now parents fill a Google form on our site, which instantly formats a PDF admission offer, emails it to the parent, and pings our admissions coordinator on Whatsapp."
  },
  {
    id: "test-5",
    name: "Rajesh Shrivastava",
    role: "Proprietor",
    businessName: "Shrivastava gym & fitness",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tags: ["Gyms", "Member Dashboard"],
    review: "I was scared of complex software. They built a custom Google Sheet dashboard where we log memberships. It automatically turns row fields red 5 days before expiration and emails a friendly reminder. Extremely simple, elegant, and completely affordable!"
  },
  {
    id: "test-6",
    name: "Sameer Mehta",
    role: "Principal Architect",
    businessName: "Vivid Spaces",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tags: ["Real Estate", "Websites"],
    review: "Our website before was slow and had no focus. The custom portfolio system designed by these guys looks like a ₹3 lakh website, is fully custom-animated, and drives direct WhatsApp inquiries from high-end clients. Inbound design project queries doubled in weeks."
  },
  {
    id: "test-7",
    name: "Pooja Hegde",
    role: "Founder",
    businessName: "Glow & Co. Salon",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tags: ["Salons", "Google Business"],
    review: "We used to manually text clients for reviews. Now we just drop a simple shortlink programmed for them, and our customer reviews grew from 32 to over 240 in less than 40 days. It instantly improved our local beauty search ranking. Extremely happy with the workflow!"
  },
  {
    id: "test-8",
    name: "Nikhil Joshi",
    role: "Senior Partner",
    businessName: "Joshi Consulting Group",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tags: ["Consultants", "Dashboards"],
    review: "I needed clear, real-time analytics to understand our marketing spend ROI across 4 channels. They linked everything into a Looker Studio template that is updated automatically. I no longer waste hours on spreadsheets, and we've completely eliminated tracking blindspots."
  }
];

export const FAQS = [
  {
    question: "How much does a website development and system setup cost?",
    answer: "Our pricing structure is custom-built but typically starts at ₹14,999 on a clean one-time setup fee. Traditional agencies often trap you with high monthly retainers even when no updates are done. We charge flat one-time fees for your custom design build, with optional on-demand support maintenance packages so you stay entirely independent."
  },
  {
    question: "Do I actually need to buy expensive software or recurrent CRM subscriptions?",
    answer: "No. The main reason companies buy expensive CRMs or reporting tools is because they assume there's no reliable alternative. We customize clean workflows using Google Sheets, Excel databases, Google Forms, and free tier Looker Studio reporting tools. Because they run on your free workspace accounts, you have ZERO recurring license fees to track leads, manage clients, or inspect reports."
  },
  {
    question: "Do I own all my customer data and website assets?",
    answer: "Absolutely. 100%. We configure everything directly on your accounts (Google, Hosting, Domains, WhatsApp API gateways). You have full, unrestricted admin credentials at all times. If you ever decide to change direction, you don't lose a single contact or line of code. No vendor lock-in, ever."
  },
  {
    question: "Can you optimize and manage our Google Business Profiles and local SEO page?",
    answer: "Yes. Google Maps ranks businesses based on distance, relevance, prominence, and keyword indexing. We optimize your business categories, update physical geopositions, write keyword-rich biographies, and establish automated systems that encourage happy clients to leave 5-star reviews to keep you on the Map Pack."
  },
  {
    question: "How does Whatsapp customer automation work under your systems?",
    answer: "We connect Google Forms or webhooks on your website directly to custom alert triggers. Whenever a client submits an inquiry or books a consultation, our system instantly triggers a personalized welcome greeting or appointment details to their phone via WhatsApp. This happens 24/7 without you lifting a finger."
  },
  {
    question: "Can I manage or change website details and spreadsheets without code knowledge?",
    answer: "Definitely. We build websites with very clean, human custom UI layouts and integrate them with easy-to-read grids. If you want to update a restaurant menu price, add a real estate property, or log a customer deal, you do it in a simple Google Sheet or intuitive editor. Your website and dashboards update automatically."
  },
  {
    question: "How long does a complete system setup and launch take?",
    answer: "Depending on your setup complexity: a standard Starter package is fully completed, tested, and handed over within 7-10 working days. Large multi-tiered systems under the Custom Enterprise flow take between 14 to 21 working days. We coordinate via WhatsApp daily."
  },
  {
    question: "Do you provide technical support after the system is handed over?",
    answer: "Yes, we don't leave you stranded! Every system handoff is accompanied by clean recorded video tutorials on how to operate your spreadsheets and dashboards, plus we include 30 days of direct WhatsApp technical support for free. You can also sign up for custom backup agreements."
  }
];
