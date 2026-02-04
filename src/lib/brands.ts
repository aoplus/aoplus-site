export type Brand = {
  id: string;
  name: string;
  domain: string;
  shortDesc: string;
  role: string;
  primaryContact: string;
  linkType: "redirect" | "microsite";
  logoImageId: string;
};

export const brands: Brand[] = [
  {
    id: "prodory",
    name: "Prodory",
    domain: "https://prodory.com",
    shortDesc: "AI-First Cloud FinOps Platform for enterprises.",
    role: "Flagship Product",
    primaryContact: "prodory@aoplus.in",
    linkType: "redirect",
    logoImageId: "prodory-logo",
  },
  {
    id: "aoplus-growth",
    name: "AO+ Growth",
    domain: "/growth", // Placeholder link
    shortDesc: "Enterprise ERP for MSMEs.",
    role: "Upcoming Product",
    primaryContact: "growth@aoplus.in",
    linkType: "microsite",
    logoImageId: "aoplus-logo",
  },
  {
    id: "digiads",
    name: "DigiAds",
    domain: "#",
    shortDesc: "Digital marketing venture.",
    role: "Under Development",
    primaryContact: "digiads@aoplus.in",
    linkType: "microsite",
    logoImageId: "digiads-logo",
  },
];
