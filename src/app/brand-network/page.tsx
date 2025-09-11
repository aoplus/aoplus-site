import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { brands } from "@/lib/brands";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "Brand Network | AO+ Solutions",
  description: "Explore the diverse portfolio of digital brands owned and operated by AO+ Solutions.",
};

export default function BrandNetworkPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Our Brand Network
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A growing ecosystem of innovative digital products and services,
          proudly built by AO+ Solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => {
          const brandLogo = PlaceHolderImages.find(
            (img) => img.id === brand.logoImageId
          );
          return (
            <Card key={brand.id} className="flex flex-col">
              <CardHeader className="text-center">
                {brandLogo && (
                  <div className="mb-4 flex h-16 items-center justify-center">
                    <Image
                      src={brandLogo.imageUrl}
                      alt={`${brand.name} logo`}
                      data-ai-hint={brandLogo.imageHint}
                      width={180}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                )}
                <CardTitle className="text-center">{brand.name}</CardTitle>
                <CardDescription>{brand.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground text-center">{brand.shortDesc}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link
                    href={
                      brand.linkType === "redirect"
                        ? brand.domain
                        : `/brand/${brand.id}`
                    }
                    target={brand.linkType === "redirect" ? "_blank" : "_self"}
                    rel={
                      brand.linkType === "redirect"
                        ? "noopener noreferrer"
                        : ""
                    }
                  >
                    Visit Site <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
