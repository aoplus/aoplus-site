
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { brands } from "@/lib/brands";

export function Header() {
  const pathname = usePathname();

  const navLinks = siteConfig.navLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/assets/aoplus-logo.png" alt="AO+ Solutions Logo" width={24} height={24} />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === link.href && !link.external
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/60 transition-colors hover:text-foreground/80">
              Our Brands <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {brands.map((brand) => (
                <DropdownMenuItem key={brand.id} asChild>
                  <Link href={brand.domain} target="_blank" rel="noopener noreferrer">
                    {brand.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild>
            <Link href="https://forms.gle/F17TvhBy31N1ij956" target="_blank" rel="noopener noreferrer">Book Assessment</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="sr-only">
                <SheetTitle>Mobile Menu</SheetTitle>
                <SheetDescription>
                  A menu of navigation links for the site.
                </SheetDescription>
              </SheetHeader>
              <Link href="/" className="mr-6 flex items-center space-x-2">
                 <Image src="/assets/aoplus-logo.png" alt="AO+ Solutions Logo" width={24} height={24} />
                <span className="font-bold">{siteConfig.name}</span>
              </Link>
              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    className={cn(
                      "transition-colors hover:text-foreground/80",
                       pathname === link.href && !link.external
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
