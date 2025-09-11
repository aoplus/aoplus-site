export type NavLink = {
  href: string;
  label: string;
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
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    youtube: "https://www.youtube.com/"
  },
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/brand-network', label: 'Brand Network' },
    { href: '/careers', label: 'Careers' },
    { href: '/investors', label: 'Investors' },
    { href: '/contact', label: 'Contact' },
  ] as NavLink[],
  footerLinks: [
     { href: '/about', label: 'About Us' },
     { href: '/contact', label: 'Contact' },
     { href: '/careers', label: 'Careers' },
     { href: '/investors', label: 'Investors' },
  ] as NavLink[],
  legalLinks: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ] as NavLink[]
};
