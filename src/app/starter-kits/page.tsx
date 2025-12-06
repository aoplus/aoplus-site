
import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

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
import { starterKits } from "@/lib/starter-kits";

export const metadata: Metadata = {
  title: "Quick Starter Kits | AO+ Solutions",
  description: "Affordable, fixed-price packages for MSMEs to build a strong digital foundation.",
};

export default function StarterKitsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Quick Starter Kits for MSMEs
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Fast, affordable packages to get your digital foundation in place — websites, audits and CRM, delivered with predictable timelines.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          These kits are designed to be fast, low-friction entry points. We often waive or discount parts of these for long-term MSME partners — talk to us to see what’s possible for your business.
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        {starterKits.map((kit) => (
          <Card key={kit.id} id={kit.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-secondary/50 p-6 md:col-span-1">
                    <CardHeader className="p-0">
                        <CardTitle className="text-2xl">{kit.name}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground pt-1">{kit.label}</CardDescription>
                    </CardHeader>
                    <div className="my-6 text-3xl font-bold text-primary">{kit.price}</div>
                    <p className="text-sm font-medium text-muted-foreground">{kit.delivery}</p>
                     <Button asChild className="mt-6 w-full">
                        <Link href={`mailto:connect@aoplus.in?subject=Inquiry about ${kit.name} Starter Kit`}>
                            {kit.cta} <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>

                <div className="p-6 md:col-span-2">
                    <CardContent className="p-0">
                        <p className="mb-6 text-sm text-muted-foreground">{kit.target}</p>
                        <h4 className="mb-4 font-semibold">What you get:</h4>
                        <ul className="space-y-3">
                        {kit.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                        </ul>
                        {kit.upsellPath && (
                            <>
                                <Separator className="my-6" />
                                <div>
                                    <h4 className="mb-2 font-semibold">Potential Upsell Path</h4>
                                    <p className="text-sm text-muted-foreground">{kit.upsellPath}</p>
                                </div>
                            </>
                        )}
                    </CardContent>
                </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
