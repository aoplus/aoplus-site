
export type Service = {
  category: string;
  items: string[];
};

export type Addon = {
  name: string;
  price: string;
};

export type Bundle = {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  features: string[];
  pricing: {
    setup?: string;
    monthly?: string;
    oneTime?: string;
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
      oneTime: "₹9,999 one-time",
      monthly: "₹1,999/month (optional for support)",
    },
    roleInStrategy: "A low-friction entry point to generate leads and case studies.",
    addons: [
      { name: "Product Portfolio PDF", price: "₹3,000" },
      { name: "Intro / Promo Video", price: "₹5,000" },
      { name: "Ads Starter Pack", price: "₹10,000" },
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
      setup: "₹1.5L - ₹4L setup",
      monthly: "₹25K - ₹40K/month",
    },
    roleInStrategy: "Our primary revenue engine for the MSME sector.",
    addons: [
        { name: "Advanced HRMS", price: "₹10,000–₹15,000" },
        { name: "Vendor / Customer Portal", price: "₹10,000–₹20,000" },
        { name: "Mobile Access", price: "₹5,000–₹10,000" },
        { name: "BI / Advanced Dashboards", price: "₹15,000–₹25,000" },
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
      monthly: "₹4,999 - ₹14,999/month",
    },
    roleInStrategy: "Scalable, SaaS-like revenue from high-growth verticals.",
    addons: [
        { name: "Managed Ads Budget", price: "₹25K–₹40K/month" },
        { name: "Full Lead Gen Projects", price: "₹1L–₹3L one-time" },
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
      monthly: "₹50K - ₹75K/month",
    },
    roleInStrategy: "High-value accounts with significant expansion and growth potential.",
    addons: [],
  },
];
