import Link from "next/link";
import {
  Download,
  BarChart,
  DollarSign,
  Target,
  TrendingUp,
  Eye,
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
    <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
        <stop offset="50%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#667eea', stopOpacity: 1}} />
      </linearGradient>
      
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#4facfe', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#00f2fe', stopOpacity: 1}} />
      </linearGradient>
      
      <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.3}} />
        <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0}} />
      </radialGradient>
      
      <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="40" height="40">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.1"/>
      </pattern>
    </defs>
    
    <rect width="1200" height="600" fill="url(#heroGradient)"/>
    
    <rect width="1200" height="600" fill="url(#gridPattern)"/>
    
    <g transform="translate(800, 100)" opacity="0.1">
      <path d="M 120 50 Q 150 30 180 60 Q 200 40 220 70 Q 240 50 260 80 L 280 100 Q 290 120 280 140 L 270 160 Q 280 180 270 200 L 260 220 Q 250 240 230 250 L 200 260 Q 180 270 160 260 L 140 250 Q 120 240 110 220 L 100 200 Q 90 180 100 160 L 110 140 Q 100 120 110 100 Z" 
            fill="#ffffff" stroke="none"/>
    </g>
    
    <g opacity="0.3">
      <circle cx="200" cy="150" r="8" fill="#4facfe"/>
      <circle cx="350" cy="120" r="6" fill="#00f2fe"/>
      <circle cx="500" cy="180" r="10" fill="#4facfe"/>
      <circle cx="650" cy="140" r="7" fill="#00f2fe"/>
      <circle cx="800" cy="200" r="9" fill="#4facfe"/>
      
      <line x1="200" y1="150" x2="350" y2="120" stroke="#ffffff" strokeWidth="2" opacity="0.4"/>
      <line x1="350" y1="120" x2="500" y2="180" stroke="#ffffff" strokeWidth="2" opacity="0.4"/>
      <line x1="500" y1="180" x2="650" y2="140" stroke="#ffffff" strokeWidth="2" opacity="0.4"/>
      <line x1="650" y1="140" x2="800" y2="200" stroke="#ffffff" strokeWidth="2" opacity="0.4"/>
      <line x1="200" y1="150" x2="500" y2="180" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
      <line x1="350" y1="120" x2="800" y2="200" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
    </g>
    
    <g transform="translate(850, 350)" opacity="0.2">
      <path d="M 20 30 Q 10 20 20 10 Q 30 5 40 10 Q 50 0 60 10 Q 70 15 60 25 Q 65 35 55 35 L 25 35 Z" fill="#ffffff"/>
      
      <g transform="translate(40, 20)">
        <path d="M 15 25 Q 5 15 15 5 Q 25 0 35 5 Q 45 -5 55 5 Q 65 10 55 20 Q 60 30 50 30 L 20 30 Z" fill="#ffffff"/>
      </g>
      
      <g transform="translate(-10, 40)">
        <path d="M 25 35 Q 15 25 25 15 Q 35 10 45 15 Q 55 5 65 15 Q 75 20 65 30 Q 70 40 60 40 L 30 40 Z" fill="#ffffff"/>
      </g>
    </g>
    
    <g transform="translate(80, 200)">
      <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" opacity="0.9"/>
      <circle cx="50" cy="50" r="45" fill="url(#glowGradient)"/>
      
      <text x="50" y="45" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">AO</text>
      <text x="50" y="68" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">+</text>
    </g>
    
    <text x="200" y="250" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold">
      AO+ Solutions
    </text>
    
    <text x="200" y="290" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="300" opacity="0.9">
      Investing in India's Digital Future
    </text>
    
    <g transform="translate(200, 350)">
      <g>
        <rect x="0" y="0" width="150" height="80" rx="8" fill="#ffffff" fillOpacity="0.15"/>
        <text x="75" y="30" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">$300B+</text>
        <text x="75" y="55" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="12" opacity="0.8">Market Size</text>
      </g>
      
      <g transform="translate(170, 0)">
        <rect x="0" y="0" width="150" height="80" rx="8" fill="#ffffff" fillOpacity="0.15"/>
        <text x="75" y="30" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">43%</text>
        <text x="75" y="55" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="12" opacity="0.8">Projected CAGR</text>
      </g>
      
      <g transform="translate(340, 0)">
        <rect x="0" y="0" width="150" height="80" rx="8" fill="#ffffff" fillOpacity="0.15"/>
        <text x="75" y="30" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">5 Brands</text>
        <text x="75" y="55" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="12" opacity="0.8">Portfolio</text>
      </g>
    </g>
    
    <g transform="translate(850, 300)" opacity="0.6">
      <g>
        <circle cx="25" cy="25" r="20" fill="none" stroke="#ffffff" strokeWidth="2"/>
        <circle cx="25" cy="25" r="12" fill="none" stroke="#ffffff" strokeWidth="1.5"/>
        <circle cx="25" cy="25" r="6" fill="#ffffff"/>
        <line x1="25" y1="5" x2="25" y2="15" stroke="#ffffff" strokeWidth="1"/>
        <line x1="25" y1="35" x2="25" y2="45" stroke="#ffffff" strokeWidth="1"/>
        <line x1="5" y1="25" x2="15" y2="25" stroke="#ffffff" strokeWidth="1"/>
        <line x1="35" y1="25" x2="45" y2="25" stroke="#ffffff" strokeWidth="1"/>
      </g>
      
      <g transform="translate(70, 0)">
        <path d="M 15 30 Q 5 20 15 10 Q 25 5 35 10 Q 45 0 55 10 Q 65 15 55 25 Q 60 35 50 35 L 20 35 Z" 
              fill="none" stroke="#ffffff" strokeWidth="2"/>
      </g>
      
      <g transform="translate(0, 70)">
        <rect x="10" y="30" width="8" height="15" fill="#ffffff"/>
        <rect x="20" y="25" width="8" height="20" fill="#ffffff"/>
        <rect x="30" y="20" width="8" height="25" fill="#ffffff"/>
        <rect x="40" y="15" width="8" height="30" fill="#ffffff"/>
      </g>
      
      <g transform="translate(70, 70)">
        <rect x="15" y="10" width="20" height="35" rx="3" fill="none" stroke="#ffffff" strokeWidth="2"/>
        <circle cx="25" cy="40" r="2" fill="#ffffff"/>
        <line x1="20" y1="15" x2="30" y2="15" stroke="#ffffff" strokeWidth="1"/>
      </g>
    </g>
    
    <g opacity="0.4">
      <circle cx="300" cy="100" r="3" fill="#4facfe">
        <animate attributeName="cy" values="100;80;100" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="450" cy="80" r="2" fill="#00f2fe">
        <animate attributeName="cy" values="80;60;80" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="600" cy="120" r="4" fill="#4facfe">
        <animate attributeName="cy" values="120;100;120" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="750" cy="90" r="2.5" fill="#00f2fe">
        <animate attributeName="cy" values="90;70;90" dur="4.2s" repeatCount="indefinite"/>
      </circle>
    </g>
    
    <rect x="0" y="580" width="1200" height="20" fill="url(#logoGradient)" opacity="0.3"/>
    
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
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/investors/deck">
                <Eye className="mr-2" />
                View Interactive Deck
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
      <div className="my-16 border-t md:my-24"></div>
      <div className="text-center">
        <h2 className="mb-4 font-headline text-3xl font-bold sm:text-4xl">
          Detailed Investor Information
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          For a comprehensive look at our financials, strategy, and market analysis, please view our full interactive investor deck.
        </p>
        <div className="mt-8">
           <Button size="lg" asChild>
              <Link href="/investors/deck">
                <Eye className="mr-2" />
                View Full Investor Deck
              </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
