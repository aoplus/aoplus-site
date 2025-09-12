import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building, Users, Rocket } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { brands } from "@/lib/brands";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: `About ${siteConfig.name}`,
  description: `Learn about the mission, vision, and team behind ${siteConfig.name}.`,
};

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "aoplus-hero");

  return (
    <div className="py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            About AO+ Solutions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {siteConfig.shortDesc} We are a privately-held technology firm based
            in {siteConfig.address}, founded in {siteConfig.foundingYear} by{" "}
            {siteConfig.founders.join(" and ")}.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our mission is to build and scale a diverse portfolio of
            digital-first brands that solve real-world problems for Indian
            businesses and consumers. By leveraging cutting-edge AI, robust
            cloud infrastructure, and data-driven marketing strategies, we aim
            to create sustainable value and drive innovation across multiple
            verticals.
          </p>
        </div>
        <div className="flex justify-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              width={500}
              height={350}
              className="rounded-xl object-cover shadow-2xl"
            />
          )}
        </div>
      </div>

      <div className="my-16 border-t md:my-24"></div>

      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">
          Our Core Values
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The principles that guide our decisions, actions, and culture.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-4">Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We relentlessly pursue new ideas and technologies to stay at the
              forefront of the digital revolution.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-4">Integrity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We operate with transparency and honesty, building trust with our
              customers, partners, and team members.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-4">Customer-Centricity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our success is measured by the success of our customers. We are
              committed to delivering exceptional value.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
