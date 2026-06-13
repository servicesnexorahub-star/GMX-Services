/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ProblemSolutionItem {
  problem: string;
  solution: string;
  iconName?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  challenges: string[];
  solution: string;
  savings: string;
}

export interface CaseStudyItem {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  chartData: { name: string; before: number; after: number }[];
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  period: string;
  isPopular: boolean;
  features: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  businessName: string;
  image: string;
  review: string;
  rating: number;
  tags: string[];
}

export interface AuditSubmission {
  id: string;
  name: string;
  businessName: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  status: 'Received' | 'Analyzing' | 'Report Generated' | 'Scheduled';
  timestamp: string;
  score?: number;
}
