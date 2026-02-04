
export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  children?: NavLink[];
};

export type FooterLinkColumn = {
  title: string;
  links: NavLink[];
};

export const siteConfig = {
  name: "AO+ Solutions",
  legalName: "AO+ Solutions Pvt Ltd",
  domain: "aoplus.in",
  tagline: "Building Enterprise Infrastructure Solutions for Modern India",
  shortDesc: "AO+ Solutions is a corporate hub for multiple owned brands, focusing on AI, Cloud, and Digital Marketing solutions.",
  address: "Mumbai, India",
  email: "connect@aoplus.in",
  phone: "+91 12345 67890",
  foundingYear: 2019,
  founders: ["Om Prakash Singh"],
  social: {
    linkedin: "https://www.linkedin.com/company/aoplusin/",
    twitter: "https://x.com/aoplusin",
  },
  navLinks: [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Our Brands' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#investors', label: 'Investors' },
    { href: '/careers', label: 'Careers' },
    { href: '#contact', label: 'Contact' },
  ] as NavLink[],
  footerLinks: [
    {
      title: "Company",
      links: [
        { href: "#about", label: "About AO+" },
        { href: "#portfolio", label: "Our Brands" },
        { href: "#leadership", label: "Leadership" },
        { href: "/careers", label: "Careers" },
        { href: "#contact", label: "Contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { href: "https://prodory.com", label: "Prodory (Cloud FinOps)", external: true },
        { href: "#portfolio", label: "AO+ Growth (MSME ERP)" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "https://prodory.com/blog", label: "Blog", external: true },
        { href: "#", label: "Case Studies" },
        { href: "#", label: "Documentation" },
      ],
    },
    {
      title: "Investors",
      links: [
        { href: "#investors", label: "Why Invest" },
        { href: "#achievements", label: "Company Metrics" },
        { href: "mailto:investors@aoplus.in", label: "Contact Investors Team" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "#", label: "Compliance" },
      ],
    },
  ] as FooterLinkColumn[],
};
