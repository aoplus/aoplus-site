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
    name: "Prodory.com",
    domain: "https://prodory.com",
    shortDesc: "AI, Cloud and Devops Solutions",
    role: "Product Microsite",
    primaryContact: "prodory@aoplus.in",
    linkType: "redirect",
    logoImageId: "prodory-logo",
  },
  {
    id: "digiads",
    name: "DigiAds.click",
    domain: "https://digiads.click",
    shortDesc: "Digital Marketing company",
    role: "Digital Marketing",
    primaryContact: "digiads@aoplus.in",
    linkType: "redirect",
    logoImageId: "digiads-logo",
  },
  {
    id: "palavanews",
    name: "PalavaNews.com",
    domain: "https://palavanews.com",
    shortDesc: "Local media channel",
    role: "Local Media",
    primaryContact: "palavanews@aoplus.in",
    linkType: "redirect",
    logoImageId: "palavanews-logo",
  },
  {
    id: "indombivili",
    name: "IndoMbivili.com",
    domain: "https://indombivili.com",
    shortDesc: "Property hunting in Dombivli",
    role: "Local Media",
    primaryContact: "indombivili@aoplus.in",
    linkType: "redirect",
    logoImageId: "indombivili-logo",
  },
  {
    id: "satvikcloud",
    name: "SatvikCloud.com",
    domain: "https://satvikcloud.com",
    shortDesc: "Festival product bundles, Shubh Muhurat & calendar",
    role: "Product Microsite",
    primaryContact: "satvikcloud@aoplus.in",
    linkType: "redirect",
    logoImageId: "satvikcloud-logo",
  },
];
