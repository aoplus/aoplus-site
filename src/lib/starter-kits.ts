
export type StarterKit = {
  id: string;
  name: string;
  price: string;
  delivery: string;
  label: string;
  target: string;
  features: string[];
  cta: string;
  growthPath?: string;
};

export const starterKits: StarterKit[] = [
  {
    id: 'basic-website',
    name: 'Basic Website Kit',
    price: '₹9,999',
    delivery: 'In 3 Days',
    label: 'Launch Fast',
    target: 'Perfect for individuals and small businesses needing a simple, professional online presence.',
    features: [
      '5-page static HTML website',
      'Mobile-responsive design',
      'Contact form integration',
      'Hosted on GitHub Pages',
      'Domain setup assistance',
    ],
    cta: 'Order Basic Website',
    growthPath: 'Easily upgrade to our Digital Launchpad bundle as you grow.'
  },
  {
    id: 'gmb-expert',
    name: 'Google Business Pro',
    price: '₹4,999',
    delivery: 'In 2 Days',
    label: 'Local SEO',
    target: 'Ideal for local shops, restaurants, and service providers who want to rank higher on Google Maps.',
    features: [
      'Full Google Business Profile setup',
      'Keyword and category optimization',
      'Photo and service uploads',
      'Initial Q&A setup',
      'Review management guide',
    ],
    cta: 'Get Found Locally',
    growthPath: 'Combine with our Vertical Growth Marketing for maximum impact.'
  },
  {
    id: 'erp-consult',
    name: 'ERP Readiness Check',
    price: 'Free',
    delivery: '1 Hour Call',
    label: 'Consultation',
    target: 'For businesses unsure if they are ready for a full ERP implementation.',
    features: [
      '1-on-1 consultation call',
      'Analysis of current processes',
      'High-level readiness report',
      'Initial recommendation on next steps',
      'No-obligation proposal',
    ],
    cta: 'Book Free Consult',
    growthPath: 'The first step towards our powerful MSME Growth Engine bundle.'
  },
];
