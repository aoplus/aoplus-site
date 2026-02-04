
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building,
  Briefcase,
  GitBranch,
  Target,
  TrendingUp,
  Linkedin,
  Twitter,
  Settings,
  ShieldCheck,
  Scaling,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-primary">{value}</p>
    <p className="mt-1 text-sm text-muted-foreground">{label}</p>
  </div>
);

export default function Home() {
  return (
    <div className="flex-1 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative -mx-4 -mt-16 sm:-mx-6 md:-mx-8">
        <div className="relative bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-gray-900 to-black opacity-90"></div>
          <div className="relative min-h-screen container flex flex-col justify-center text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Building the Future of Enterprise Cloud & AI Infrastructure
            </h1>
            <h2 className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
              AO+ Solutions develops advanced technology products for modern enterprises. Our flagship platform, Prodory, helps companies optimize ₹100+ Crore in cloud spend through AI-powered FinOps.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="https://prodory.com" target="_blank">Explore Prodory</Link>
              </Button>
              <Button asChild size="lg" className="border border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="#portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-background py-12">
            <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
                <StatCard value="₹100+ Cr" label="Cloud Infrastructure Managed" />
                <StatCard value="2019" label="Founded" />
                <StatCard value="30-40%" label="Average Cost Optimization" />
                <StatCard value="BFSI, SaaS, Healthcare" label="Industries Served" />
            </div>
        </div>
      </section>

      {/* Prodory Spotlight Section */}
      <section id="prodory" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Introducing Prodory: AI-First Cloud FinOps</h2>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-border p-8">
                  <p className="text-2xl font-bold text-muted-foreground">Dashboard Preview</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Real-time multi-cloud cost visibility and AI-powered optimization</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">Reduce Cloud Costs by 30-40%. Automated.</h3>
              <p className="mt-4 text-muted-foreground">
                Prodory is our flagship AI-powered FinOps platform that helps Indian enterprises manage AWS, Azure, and GCP spend with unprecedented visibility and automation.
              </p>
              <p className="mt-4 text-muted-foreground">
                Built specifically for the Indian market, Prodory combines enterprise-grade capabilities with India-first compliance (RBI data residency), IST support hours, and ₹-based pricing—at 30-50% lower cost than global platforms.
              </p>
              <p className="mt-4 text-muted-foreground">
                Trusted by companies managing ₹100+ Crore in cloud infrastructure across BFSI, SaaS, Healthcare, and Logistics sectors.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                      <p className="text-2xl font-bold">₹100+ Cr</p>
                      <p className="text-xs text-muted-foreground">Cloud Spend Under Management</p>
                  </div>
                  <div>
                      <p className="text-2xl font-bold">30-40%</p>
                      <p className="text-xs text-muted-foreground">Average Cost Reduction</p>
                  </div>
                   <div>
                      <p className="text-2xl font-bold">10+ hrs/wk</p>
                      <p className="text-xs text-muted-foreground">Engineering Time Saved</p>
                  </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                 <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="https://erp.aoplus.in/book-consultation/new" target="_blank">Book Free Assessment</Link>
                </Button>
                <Button asChild variant="link">
                    <Link href="https://prodory.com" target="_blank">Learn More About Prodory <ArrowRight /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision Section */}
      <section id="about" className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Our Mission: Enterprise-Grade Solutions for Indian Businesses</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AO+ Solutions was founded in 2019 with a singular vision: to bring world-class enterprise infrastructure products to Indian companies—at pricing and compliance standards that work for the Indian market. We build software products, not just services. Our focus is on cloud cost optimization, AI infrastructure, and platform engineering solutions that help enterprises operate more efficiently and scale with confidence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-6 w-6"/>
                </div>
                <CardTitle className="mt-4">Product-Led</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                We build scalable software products with high gross margins, not project-based services. Our platforms serve multiple customers simultaneously, creating leverage and lasting value.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <p className="text-2xl font-bold">🇮🇳</p>
                </div>
                <CardTitle className="mt-4">India-First</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                Built with Indian compliance requirements (RBI, data residency), pricing expectations, and support hours in mind. We understand the unique needs of Indian enterprises and foreign companies with India operations.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Building className="h-6 w-6"/>
                </div>
                <CardTitle className="mt-4">Enterprise-Grade</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                Fortune 500 quality standards, Indian pricing. We don't compromise on product excellence, security, or reliability—we simply operate more efficiently to serve the market better.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Led by Infrastructure Experts</h2>
          </div>
          <Card className="overflow-hidden">
            <div className="grid items-center md:grid-cols-3">
              <div className="flex h-full items-center justify-center bg-secondary p-8 md:p-12">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gray-300 text-5xl font-bold text-gray-500">
                  OP
                </div>
              </div>
              <div className="p-8 md:col-span-2">
                <h3 className="text-2xl font-bold">Om Prakash Singh</h3>
                <p className="font-medium text-primary">Founder & CEO</p>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                   <p>Om brings 16+ years of enterprise infrastructure experience to AO+ Solutions. Currently serving as Head of Platform Engineering at a Global BFSI, he manages 20,000+ servers and leads strategic infrastructure initiatives including VMware-to-Kubernetes migration programs.</p>
                   <p>Prior to founding AO+ Solutions in 2019, Om held senior technical roles managing large-scale cloud infrastructure deployments and platform engineering teams. He founded AO+ Solutions to solve the cloud cost optimization challenges he experienced firsthand—challenges that existing tools either couldn't address or were prohibitively expensive for the Indian market.</p>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary" /> 16+ years enterprise infrastructure experience</li>
                    <li className="flex items-center gap-2"><Building className="h-4 w-4 text-primary" /> Head of Platform Engineering, Global BFSI</li>
                    <li className="flex items-center gap-2"><Settings className="h-4 w-4 text-primary" /> Managing 20,000+ servers in production</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> FinOps Certified Practitioner</li>
                </ul>
                <div className="mt-6 flex items-center gap-4">
                  <Button asChild variant="ghost" size="icon">
                    <Link href="#" target="_blank"><Linkedin/></Link>
                  </Button>
                  <Button asChild variant="ghost" size="icon">
                    <Link href="#" target="_blank"><Twitter/></Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Our Portfolio</h2>
            <p className="mt-4 text-lg text-muted-foreground">Technology Brands Under AO+ Solutions</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="flex flex-col border-2 border-primary">
                <CardHeader>
                    <Badge className="w-fit bg-primary/10 text-primary border-primary/20">🚀 Flagship Product</Badge>
                    <CardTitle className="pt-2 text-2xl">Prodory</CardTitle>
                    <CardDescription>AI-First Cloud FinOps Platform</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">Enterprise cloud cost optimization for AWS, Azure, and GCP. Reduce spend by 30-40% through automated FinOps, multi-cloud visibility, and AI-powered recommendations.</p>
                    <div className="mt-4 rounded-lg bg-secondary p-3 text-xs">
                        <p><strong className="text-foreground">Target Market:</strong> Mid to large enterprises (₹10Cr+ revenue, ₹10L+/month cloud spend)</p>
                        <p className="mt-1"><strong className="text-foreground">Status:</strong> <span className="text-green-600 font-semibold">Live • Accepting Customers</span></p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="link" className="p-0">
                        <Link href="https://prodory.com" target="_blank">Visit Prodory.com <ArrowRight /></Link>
                    </Button>
                </CardFooter>
            </Card>
             <Card className="flex flex-col">
                <CardHeader>
                    <Badge variant="outline" className="w-fit">Launching Q1 2026</Badge>
                    <CardTitle className="pt-2 text-2xl">AO+ Growth</CardTitle>
                    <CardDescription>Enterprise ERP for MSMEs</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">ERPNext implementation and digital transformation services for ₹50L-₹10Cr Indian MSMEs. Enterprise-grade ERP at MSME-friendly pricing.</p>
                    <div className="mt-4 rounded-lg bg-secondary p-3 text-xs">
                        <p><strong className="text-foreground">Target Market:</strong> Growing MSMEs in manufacturing, trading, and services</p>
                        <p className="mt-1"><strong className="text-foreground">Status:</strong> <span className="font-semibold">Launching Q1 2026</span></p>
                    </div>
                </CardContent>
                <CardFooter>
                     <Button asChild variant="link" className="p-0">
                        <Link href="/growth">Learn More <ArrowRight /></Link>
                    </Button>
                </CardFooter>
            </Card>
          </div>
           <p className="mt-8 text-center text-sm text-muted-foreground">Other ventures: DigiAds (digital marketing), under development.</p>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Building Momentum</h2>
          </div>
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4">
              <div className="text-center">
                  <p className="text-5xl font-bold text-primary">₹100+ Cr</p>
                  <p className="mt-2 text-muted-foreground">Cloud Infrastructure Under Management</p>
              </div>
              <div className="text-center">
                  <p className="text-5xl font-bold text-primary">16+ Years</p>
                  <p className="mt-2 text-muted-foreground">Collective Enterprise Infrastructure Experience</p>
              </div>
               <div className="text-center">
                  <p className="text-5xl font-bold text-primary">20,000+</p>
                  <p className="mt-2 text-muted-foreground">Servers Managed in Production (Global BFSI)</p>
              </div>
               <div className="text-center">
                  <p className="text-5xl font-bold text-primary">2026</p>
                  <p className="mt-2 text-muted-foreground">SUSECON Speaker (Prague, April 2026)</p>
              </div>
          </div>
        </div>
      </section>
      
      {/* Investors Section */}
      <section id="investors" className="bg-secondary py-16 md:py-24">
          <div className="container text-center">
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">Built to Scale</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  AO+ Solutions is currently bootstrapped and profitable. We are open to strategic partnerships and investment conversations with investors who understand the enterprise infrastructure opportunity in India.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <StatCard value="₹40L+ MRR" label="Target by 2026" />
                  <StatCard value="4 Verticals" label="BFSI, SaaS, Healthcare, Logistics" />
                  <StatCard value="AI & Cloud" label="Core Focus Areas" />
              </div>
              <p className="mt-10 font-semibold">Investor Inquiries: <a href="mailto:investors@aoplus.in" className="text-primary hover:underline">investors@aoplus.in</a></p>
          </div>
      </section>
      
      {/* Why AO+ Section */}
      <section id="why-aoplus" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Why Partner with AO+ Solutions?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold"><span className="text-primary">1.</span> Deep Technical Expertise</h3>
              <p className="mt-2 text-muted-foreground">Led by infrastructure veterans who've managed enterprise-scale systems, not consultants who've only advised on them. We understand the problems from firsthand experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold"><span className="text-primary">2.</span> Product DNA</h3>
              <p className="mt-2 text-muted-foreground">We build scalable software products with high margins and leverage, not one-off consulting projects. This creates sustainable, venture-backable businesses.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold"><span className="text-primary">3.</span> Aligned Incentives</h3>
              <p className="mt-2 text-muted-foreground">Our pricing models (% of savings, usage-based) mean we only succeed when our customers succeed. We're partners in optimization, not vendors selling licenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-primary py-16 md:py-24 text-primary-foreground">
          <div className="container text-center">
              <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">Ready to Optimize Your Cloud Spend?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                  Book a free assessment with Prodory or explore our MSME offerings through AO+ Growth.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="https://prodory.com" target="_blank">Explore Prodory</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/growth">Explore AO+ Growth</Link>
                  </Button>
              </div>
              <p className="mt-8 text-sm text-primary-foreground/70">For general inquiries: <a href="mailto:connect@aoplus.in" className="font-semibold underline">connect@aoplus.in</a></p>
          </div>
      </section>

    </div>
  );
}
