
import { Metadata } from "next";
import Link from "next/link";
import { Check, Bot, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { coreServices, serviceBundles } from "@/lib/services";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services & Bundles | AO+ Solutions",
  description: "Explore our comprehensive service offerings and bundled packages designed for MSME growth.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      {/* AI Audit CTA */}
      <Card className="mb-16 overflow-hidden bg-primary text-primary-foreground">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="p-8">
                <h2 className="font-headline text-3xl font-bold">Not Sure Where to Start?</h2>
                <p className="mt-2 opacity-90">
                    Let our AI-powered tool analyze your business. Get a free, instant report that recommends the perfect services for you.
                </p>
                <Button asChild variant="secondary" className="mt-6">
                    <Link href="https://[YOUR_FIREBASE_APP_URL]" target="_blank">
                        <Bot className="mr-2" /> Start Your Free Growth Audit
                    </Link>
                </Button>
            </div>
             <div className="hidden md:flex h-full items-center justify-center bg-primary/80 p-8">
                <Bot className="h-24 w-24 text-primary-foreground/50" />
            </div>
        </div>
      </Card>

      {/* Bundles Section */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Our Service Bundles
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tailored packages designed to meet your business needs at every stage of growth.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {serviceBundles.map((bundle) => (
          <Card key={bundle.id} id={bundle.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{bundle.title}</CardTitle>
              <CardDescription className="pt-1">{bundle.targetAudience}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="mb-6 text-sm text-muted-foreground">{bundle.description}</p>
              <h4 className="mb-4 font-semibold">What's included:</h4>
              <ul className="flex-1 space-y-3">
                {bundle.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              {bundle.addons.length > 0 && (
                <>
                  <Separator className="my-6" />
                  <div>
                    <h4 className="mb-4 font-semibold">Popular Add-ons:</h4>
                    <ul className="space-y-3">
                      {bundle.addons.map((addon) => (
                        <li key={addon.name} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{addon.name}</span>
                          <span className="font-medium">{addon.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex-col items-start gap-4 rounded-b-lg bg-secondary/50 p-6">
                <div className="w-full space-y-2">
                    {bundle.pricing.oneTime && <div className="flex justify-between font-bold"><p>One-time Setup:</p> <p>{bundle.pricing.oneTime}</p></div>}
                    {bundle.pricing.setup && <div className="flex justify-between font-bold"><p>One-time Setup:</p> <p>{bundle.pricing.setup}</p></div>}
                    {bundle.pricing.monthly && <div className="flex justify-between font-bold"><p>Subscription:</p> <p>{bundle.pricing.monthly}</p></div>}
                </div>
              <Button asChild className="w-full">
                <Link href="/assessment">
                  Discuss This Bundle <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

       <Separator className="my-16 md:my-24" />

      {/* Core Services Section */}
       <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Individual Service Offerings
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Need something specific? We offer a wide range of a la carte services to fit your unique requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {coreServices.map((service) => (
            <Card key={service.category}>
                <CardHeader>
                    <CardTitle>{service.category}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {service.items.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
