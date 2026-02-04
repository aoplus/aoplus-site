
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { FooterLinkColumn } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container grid grid-cols-2 gap-8 px-4 py-16 md:grid-cols-6 md:px-6">
        <div className="col-span-2 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
          <div className="flex gap-2">
            <Link href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>
        {siteConfig.footerLinks.map((column: FooterLinkColumn) => (
          <div key={column.title}>
            <h4 className="mb-4 font-semibold">{column.title}</h4>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row">
            <div className="flex flex-col gap-2 text-center md:text-left">
                <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs md:justify-start">
                    <span>CIN: U72900MH2019PTC330056</span>
                    <span>GSTIN: 27AASCA6842P2ZQ</span>
                    <span>Email: {siteConfig.email}</span>
                </div>
            </div>
            <p className="shrink-0">Made with ❤️ in India.</p>
        </div>
      </div>
    </footer>
  );
}
