import Image from "next/image";
import Link from "next/link";
import { Download, BarChart, DollarSign, Target, TrendingUp } from "lucide-react";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "Investors | AO+ Solutions",
  description: "Information for investors about AO+ Solutions' growth, traction, and vision for the future of intelligent infrastructure in India.",
};

export default function InvestorsPage() {
    const deckImage = PlaceHolderImages.find((img) => img.id === 'investor-deck');
  return (
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Investing in India's Digital Future
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            AO+ Solutions is at the forefront of India's technological
            evolution. We are building a robust ecosystem of digital brands and
            infrastructure solutions designed for scale and impact. We invite
            you to join us on our journey.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/assets/investor-deck.pdf" target="_blank">
                <Download className="mr-2" />
                Download Investor Deck
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
            {deckImage && (
                <Image
                    src={deckImage.imageUrl}
                    alt={deckImage.description}
                    data-ai-hint={deckImage.imageHint}
                    width={500}
                    height={300}
                    className="rounded-xl shadow-lg"
                />
            )}
        </div>
      </div>

      <div className="my-16 border-t md:my-24"></div>

      <div>
        <h2 className="mb-10 text-center font-headline text-3xl font-bold sm:text-4xl">
          Key Metrics & Targets
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  ARR Target
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1.5M</div>
                <p className="text-xs text-muted-foreground">by end of 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Traction
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+250%</div>
                <p className="text-xs text-muted-foreground">
                  YoY user growth
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Market Reach
                </CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4+</div>
                <p className="text-xs text-muted-foreground">
                  Active Verticals
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Roadmap Focus
                </CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">AI & Cloud</div>
                <p className="text-xs text-muted-foreground">
                  Deepening capabilities
                </p>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
