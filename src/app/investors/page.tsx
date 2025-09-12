import Link from "next/link";
import {
  Download,
  BarChart,
  DollarSign,
  Target,
  TrendingUp,
} from "lucide-react";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Investors | AO+ Solutions",
  description:
    "Information for investors about AO+ Solutions' growth, traction, and vision for the future of intelligent infrastructure in India.",
};

const InvestorIllustration = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 300"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect
          fill="hsl(var(--card))"
          width="500"
          height="300"
          rx="12"
        />
        <path
          fill="url(#a)"
          d="M110 210h280v-10.45c0-2.35-1.12-4.58-3.02-6.05l-44.1-33.68c-2.38-1.82-5.75-1.42-7.6.98L297 200.75c-1.85 2.4-5.07 3.2-7.9 1.9l-58.2-27.1c-2.83-1.32-6.13-.37-7.85 2.1l-40.4 57.55c-1.72 2.45-4.72 3.65-7.65 2.85z"
        />
        <path
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          d="M112.5 204.5l82-105c1.6-2.05 4.6-2.6 6.95-1.45l58.2 27.1c2.35 1.1 5.15.5 6.95-1.45l35.9-38.8"
        />
        <g transform="translate(340 50)" fill="hsl(var(--primary))">
          <circle cx="15" cy="15" r="15" opacity=".2" />
          <path d="M14.2 8.4a.8.8 0 01.8-.8c2.87 0 5.2 2.33 5.2 5.2a.8.8 0 01-1.6 0c0-1.99-1.61-3.6-3.6-3.6a.8.8 0 01-.8-.8z" />
          <path d="M15.4 17h-1.03l-2.4-3.52-2.38 3.51H8.57l3.58-5.2-3.43-5.08h1.03l2.25 3.3 2.22-3.3h1.03l-3.43 5.08L15.4 17z" />
        </g>
        <g transform="translate(100 80)">
          <path
            d="M20 40.5c11.05 0 20-8.95 20-20s-8.95-20-20-20-20 8.95-20 20 8.95 20 20 20z"
            stroke="hsl(var(--accent))"
            strokeOpacity=".25"
            strokeWidth="3"
          />
          <path
            d="M20 40c11.05 0 20-8.95 20-20S31.05 0 20 0"
            stroke="hsl(var(--accent))"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );

export default function InvestorsPage() {
  return (
    <div className="py-16 md:py-24">
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
         <InvestorIllustration className="w-full max-w-[500px] h-auto rounded-xl shadow-lg" />
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
              <CardTitle className="text-sm font-medium">ARR Target</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1.5M</div>
              <p className="text-xs text-muted-foreground">by end of 2025</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Traction</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+250%</div>
              <p className="text-xs text-muted-foreground">YoY user growth</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Reach</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4+</div>
              <p className="text-xs text-muted-foreground">Active Verticals</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Roadmap Focus</CardTitle>
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
