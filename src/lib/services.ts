
export type Service = {
  category: string;
  items: string[];
};

export type Addon = {
  name: string;
  price: number;
};

export type Bundle = {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  features: string[];
  pricing: {
    setup?: number;
    monthly?: number;
    oneTime?: number;
  };
  roleInStrategy: string;
  addons: Addon[];
};

export const coreServices: Service[] = [
  {
    category: "IT Foundation",
    items: [
      "ERPNext (Finance, Inventory, HR Lite, CRM)",
      "Open-source CRM (standalone or integrated)",
      "Basic HTML Website (GitHub / Shared Hosting)",
      "Domain & Business Email Setup",
      "Hosting & Server Setup",
      "Data Backup & Recovery",
      "Endpoint Security (AV, patching, policies)",
      "L1 / L2 IT Support (Remote)",
    ],
  },
  {
    category: "Digital Growth",
    items: [
      "Google Business Profile Setup",
      "Basic SEO (Local + On-page)",
      "Digital Marketing Setup",
      "DigiAds (AI-assisted marketing)",
      "Social Presence Enablement",
      "Product Portfolio (PDF / Microsite)",
      "Promo / Product Videos",
    ],
  },
  {
    category: "Ops & Automation",
    items: [
      "Workflow Automation (ERP/CRM/Google tools)",
      "Dashboards & Reports",
      "Process Digitization",
      "Role-Based Access & Controls",
      "Compliance-oriented IT Structuring",
    ],
  },
];

export const serviceBundles: Bundle[] = [
  {
    id: "digital-launchpad",
    title: "Digital Launchpad",
    targetAudience: "Solo founders, traders, and micro-MSMEs.",
    description: "The essential toolkit to establish a professional digital presence and start generating leads.",
    features: [
      "Basic HTML Website",
      "Google Business Profile Setup & Optimization",
      "Open-source CRM (basic setup)",
      "Local SEO Foundation",
      "Domain & Business Email Setup",
    ],
    pricing: {
      oneTime: 9999,
      monthly: 1999,
    },
    roleInStrategy: "A low-friction entry point to generate leads and case studies.",
    addons: [
      { name: "Product Portfolio PDF", price: 3000 },
      { name: "Intro / Promo Video", price: 5000 },
      { name: "Ads Starter Pack", price: 10000 },
    ],
  },
  {
    id: "msme-growth-engine",
    title: "MSME Growth Engine",
    targetAudience: "For established MSMEs with 11-50 employees.",
    description: "A comprehensive package to streamline operations, secure data, and enable scalable growth with a powerful ERP at its core.",
    features: [
      "ERPNext Implementation (Finance, Inventory, CRM, HR Lite)",
      "Managed Cloud Hosting",
      "Daily Automated Backups",
      "Endpoint Security Baseline",
      "5-7 Key Workflow Automations",
      "Monthly Business Dashboard",
      "L1 + L2 Ticketing Support",
    ],
    pricing: {
      setup: 150000,
      monthly: 25000,
    },
    roleInStrategy: "Our primary revenue engine for the MSME sector.",
    addons: [
        { name: "Advanced HRMS", price: 10000 },
        { name: "Vendor / Customer Portal", price: 15000 },
        { name: "Mobile Access", price: 7500 },
        { name: "BI / Advanced Dashboards", price: 20000 },
    ],
  },
    {
    id: "vertical-growth-marketing",
    title: "Vertical Growth Marketing",
    targetAudience: "Real estate, clinics, retail, D2C brands.",
    description: "A dedicated marketing and lead-generation engine for specific business verticals.",
     features: [
      "DigiAds Performance Marketing",
      "Continuous SEO & Content",
      "Lead Tracking & CRM Automation",
      "ROI & Performance Dashboards",
      "Google Business Reviews & Visibility Management",
    ],
    pricing: {
      monthly: 4999,
    },
    roleInStrategy: "Scalable, SaaS-like revenue from high-growth verticals.",
    addons: [
        { name: "Managed Ads Budget", price: 25000 },
        { name: "Full Lead Gen Projects", price: 100000 },
    ],
  },
  {
    id: "enterprise-ops",
    title: "Enterprise Ops",
    targetAudience: "For larger MSMEs (30-80 employees) with scaling challenges.",
    description: "A high-touch offering for businesses needing advanced automation, compliance, and custom integrations.",
    features: [
      "Growth Ops & Advanced Automation",
      "Policy & Audit-Ready IT Infrastructure",
      "Vendor & External System Integrations",
      "SLA-based Support",
      "Custom Setup & Onboarding",
    ],
    pricing: {
      monthly: 50000,
    },
    roleInStrategy: "High-value accounts with significant expansion and growth potential.",
    addons: [],
  },
];
