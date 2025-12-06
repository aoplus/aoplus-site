
export type StarterKit = {
  id: string;
  label: string;
  name: string;
  price: string;
  delivery: string;
  features: string[];
  target: string;
  growthPath?: string;
  cta: string;
};

export const starterKits: StarterKit[] = [
  {
    id: 'website-in-a-week',
    label: 'Starter Kit #1',
    name: 'Website-in-a-Week',
    price: '₹9,999 one-time',
    delivery: 'Delivered in 7 days',
    features: [
      '5-page responsive website',
      'Contact form & basic SEO',
      'Mobile-optimized layout',
      '1-year shared hosting included',
      '30 days of post-launch support',
    ],
    target:
      'Best for first-time website owners and local MSMEs going online for the first time.',
    cta: 'Book Website Starter Call',
  },
  {
    id: 'digital-audit-express',
    label: 'Starter Kit #2',
    name: 'Digital Audit Express',
    price: '₹4,999 one-time',
    delivery: 'Audit report in 48 hours',
    features: [
      'Full website & UX audit',
      'SEO health check',
      '3-competitor benchmark',
      '10-point improvement action plan',
    ],
    target:
      'Ideal for existing businesses that already have a website but aren’t sure if it’s working for them.',
    growthPath: 'Recommended next steps: Website redesign (from ₹9,999) or Monthly SEO (from ₹7,999/month).',
    cta: 'Get My Audit',
  },
  {
    id: 'crm-quickstart',
    label: 'Starter Kit #3',
    name: 'CRM QuickStart',
    price: '₹14,999 setup + ₹2,999/month',
    delivery: 'Go live in 10 days',
    features: [
      'SuiteCRM / Odoo setup for up to 3 users',
      'Basic contact & lead import',
      'Email templates for outreach',
      '2-hour onboarding & training',
      '60 days of priority support',
    ],
    target:
      'Perfect for small teams currently managing leads in spreadsheets or WhatsApp.',
    growthPath: 'Scale later with additional users (₹999/user/month) and automation workflows (from ₹4,999).',
    cta: 'Start CRM QuickStart',
  },
];
