
export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  children?: NavLink[];
};

export const siteConfig = {
  name: "AO+ Solutions",
  legalName: "AO+ Solutions Pvt Ltd",
  domain: "aoplus.in",
  tagline: "Intelligent Infrastructure. Made in India.",
  shortDesc: "AO+ Solutions is a corporate hub for multiple owned brands, focusing on AI, Cloud, and Digital Marketing solutions.",
  address: "Mumbai, India",
  email: "connect@aoplus.in",
  phone: "+91 12345 67890",
  foundingYear: 2023,
  founders: ["Anand", "Ovi"],
  social: {
    linkedin: "https://www.linkedin.com/company/aoplusin/",
    twitter: "https://x.com/aoplusin",
  },
  navLinks: [
    { href: '/', label: 'Home' },
    { 
      href: '/services', 
      label: 'Services',
      children: [
        { href: '/services', label: 'All Services' },
        { href: '/buyers-guide/digital-launchpad', label: 'Digital Launchpad' },
        { href: '/services/it-foundation', label: 'IT Foundation' },
        { href: '/services/digital-growth', label: 'Digital Growth' },
        { href: '/services/msme-growth-engine', label: 'MSME Growth Engine' },
        { href: '/services/vertical-growth-marketing', label: 'Vertical Growth Marketing' },
        { href: '/services/enterprise-ops', label: 'Enterprise Ops' },
      ]
    },
    { href: 'https://erp.aoplus.in/book-consultation/new', label: 'Growth Audit', external: true },
    { href: '/brand-network', label: 'Brand Network' },
    { href: '/careers', label: 'Careers' },
    { href: '/investors', label: 'Investors' },
  ] as NavLink[],
  footerLinks: [
     { href: '/about', label: 'About Us' },
     { href: '/services', label: 'Services' },
     { href: '/careers', label: 'Careers' },
     { href: '/investors', label: 'Investors' },
  ] as NavLink[],
  legalLinks: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ] as NavLink[]
};
