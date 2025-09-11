import Link from "next/link";
import { Building, Linkedin, Twitter, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { brands } from "@/lib/brands";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
          <div className="flex gap-2">
            <Link href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Company</h4>
          <ul className="space-y-2">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Our Brands</h4>
          <ul className="space-y-2">
            {brands.slice(0, 5).map((brand) => (
              <li key={brand.id}>
                <Link href={brand.domain} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Legal</h4>
          <ul className="space-y-2">
            {siteConfig.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-2 px-4 py-4 text-sm text-muted-foreground sm:flex-row md:px-6">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>Made with ❤️ in India.</p>
        </div>
      </div>
    </footer>
  );
}
