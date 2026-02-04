
import { Check, Gauge, Zap, Gem, ShoppingCart, FileText, Boxes, Factory, Users, BarChart, Phone, File, Rocket, Wrench, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const iconMap = {
  "📊": <Gauge className="h-10 w-10 text-[#FF6B35]" />,
  "📦": <Boxes className="h-10 w-10 text-[#FF6B35]" />,
  "💸": <FileText className="h-10 w-10 text-[#FF6B35]" />,
  "📈": <BarChart className="h-10 w-10 text-[#FF6B35]" />,
  "💰": <Gem className="h-8 w-8 text-[#FF6B35]" />,
  "⚡": <Zap className="h-8 w-8 text-[#FF6B35]" />,
  "🎯": <CheckCircle className="h-8 w-8 text-[#FF6B35]" />,
  "📞": <Phone className="h-8 w-8 text-white" />,
  "📄": <File className="h-8 w-8 text-white" />,
  "🚀": <Rocket className="h-8 w-8 text-white" />,
  "🛠️": <Wrench className="h-8 w-8 text-white" />,
  "✅": <Check className="h-8 w-8 text-white" />,
};

export default function GrowthPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
              Enterprise ERP Solutions. <br />
              <span className="text-[#FF6B35]">At MSME-Friendly Prices.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Go from Excel chaos to organized ERP in 8 weeks. ERPNext implementation for ₹1-3 Lakhs (not ₹10-50 Lakhs big consultants charge). Built for ₹50L - ₹10Cr Indian businesses.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-[#FF6B35] px-8 py-6 text-base text-white hover:bg-[#FF6B35]/90">
                <Link href="#contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-[#FF6B35] px-8 py-6 text-base text-[#FF6B35] hover:bg-[#FF6B35]/10 hover:text-[#FF6B35]">
                <Link href="#pricing">See Our Packages</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/seed/erp-dashboard/600/450"
              alt="ERPNext Dashboard"
              data-ai-hint="erp dashboard"
              width={600}
              height={450}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Is Your Business Running on Excel and WhatsApp?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">You're not alone. 80% of Indian MSMEs struggle with these exact challenges.</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>{iconMap["📊"]}</CardHeader>
              <CardTitle className="text-xl font-semibold">Excel Chaos</CardTitle>
              <CardContent className="pt-2 text-sm text-gray-500">Ten different versions of the same file. Formulas breaking when someone edits. No idea which is the latest. Sound familiar?</CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>{iconMap["📦"]}</CardHeader>
              <CardTitle className="text-xl font-semibold">Inventory Nightmares</CardTitle>
              <CardContent className="pt-2 text-sm text-gray-500">Stockouts when customers want to buy. Overstocking products that don't sell. Can't track what's in which warehouse.</CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>{iconMap["💸"]}</CardHeader>
              <CardTitle className="text-xl font-semibold">Manual Invoicing Takes Forever</CardTitle>
              <CardContent className="pt-2 text-sm text-gray-500">Spending hours every week creating invoices, copying data from orders, making calculation errors, chasing payments manually.</CardContent>
            </Card>
             <Card className="text-center">
              <CardHeader>{iconMap["📈"]}</CardHeader>
              <CardTitle className="text-xl font-semibold">Can't Scale</CardTitle>
              <CardContent className="pt-2 text-sm text-gray-500">You hired more people, but chaos increased 10x. More WhatsApp groups, more Excel files, more confusion.</CardContent>
            </Card>
          </div>
           <p className="mx-auto mt-12 max-w-2xl text-gray-600">We get it. You started small, Excel worked fine. But now you're growing, and manual processes are holding you back. <span className="font-semibold">There's a better way.</span></p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-20">
         <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">One System. Complete Business Control.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">AO+ Growth implements ERPNext—a powerful, open-source ERP used by 5,000+ companies worldwide. It handles accounting, inventory, sales, purchases, manufacturing, HR—everything in one place. No more juggling between Excel, Tally, WhatsApp, and emails.</p>
           <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                {iconMap["💰"]}
                <h3 className="mt-4 text-xl font-semibold">Affordable</h3>
                <p className="mt-2 text-gray-500">₹1-3 Lakhs for complete implementation (not ₹10-50 Lakhs). No annual license fees. Just low hosting costs.</p>
              </div>
              <div className="text-center">
                {iconMap["⚡"]}
                <h3 className="mt-4 text-xl font-semibold">Fast</h3>
                <p className="mt-2 text-gray-500">Go live in 6-8 weeks (not 6-12 months). We implement, migrate data, train your team, and support you after launch.</p>
              </div>
              <div className="text-center">
                {iconMap["🎯"]}
                <h3 className="mt-4 text-xl font-semibold">Simple</h3>
                <p className="mt-2 text-gray-500">Built for MSMEs, not Fortune 500s. You don't need an IT team. We handle the technical stuff.</p>
              </div>
           </div>
         </div>
      </section>
      
      {/* Packages Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Choose Your Package</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">Fixed pricing. Clear deliverables. Predictable timelines.</p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Starter Package */}
            <Card className="flex flex-col">
              <CardHeader className="text-left">
                <p className="font-semibold text-sm text-[#FF6B35]">Best for Small MSMEs</p>
                <CardTitle className="text-3xl">Starter</CardTitle>
                <p className="text-4xl font-bold text-gray-800">₹1,49,000 <span className="text-lg font-normal text-gray-500">(One-time)</span></p>
                <p className="text-sm text-gray-500">For ₹50L-₹2Cr businesses</p>
                <p className="text-sm font-semibold">6 weeks to go-live</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-3 text-left text-sm text-gray-600">
                <p className="font-semibold text-gray-800">What's Included:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Basic ERP modules (Acct, Inv, Sales)</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Up to 10 users</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Data migration (500 records)</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 2 training sessions (4 hours)</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 1 month post-launch support</li>
                </ul>
              </CardContent>
              <div className="p-6">
                <Button asChild className="w-full rounded-full bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90">
                  <Link href="#contact">Get Started</Link>
                </Button>
              </div>
            </Card>

            {/* Growth Package */}
            <Card className="flex flex-col border-2 border-[#FF6B35] shadow-2xl">
              <CardHeader className="text-left">
                 <p className="font-semibold text-sm text-[#06D6A0]">⭐ Most Popular</p>
                <CardTitle className="text-3xl">Growth</CardTitle>
                <p className="text-4xl font-bold text-gray-800">₹2,49,000 <span className="text-lg font-normal text-gray-500">(One-time)</span></p>
                <p className="text-sm text-gray-500">For ₹2Cr-₹6Cr businesses</p>
                <p className="text-sm font-semibold">8 weeks to go-live</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-3 text-left text-sm text-gray-600">
                <p className="font-semibold text-gray-800">Everything in Starter, PLUS:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Advanced modules (Mfg, CRM, HR)</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Up to 25 users</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Data migration (2,000 records)</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Custom fields & reports</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Payment gateway integration</li>
                   <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 2 months post-launch support</li>
                </ul>
              </CardContent>
              <div className="p-6">
                <Button asChild size="lg" className="w-full rounded-full bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90">
                  <Link href="#contact">Choose Growth</Link>
                </Button>
              </div>
            </Card>

            {/* Scale Package */}
            <Card className="flex flex-col">
              <CardHeader className="text-left">
                <p className="font-semibold text-sm text-[#FF6B35]">Best for Established MSMEs</p>
                <CardTitle className="text-3xl">Scale</CardTitle>
                <p className="text-4xl font-bold text-gray-800">₹3,99,000+ <span className="text-lg font-normal text-gray-500">(Custom)</span></p>
                <p className="text-sm text-gray-500">For ₹6Cr-₹15Cr businesses</p>
                <p className="text-sm font-semibold">10-12 weeks to go-live</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-3 text-left text-sm text-gray-600">
                <p className="font-semibold text-gray-800">Everything in Growth, PLUS:</p>
                <ul className="space-y-2">
                   <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Full suite (all modules)</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Unlimited users</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Custom app development</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> E-commerce integration</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> On-site visit (1-2 days)</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 3 months post-launch support</li>
                </ul>
              </CardContent>
              <div className="p-6">
                 <Button asChild variant="outline" className="w-full rounded-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10 hover:text-[#FF6B35]">
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </Card>
          </div>
           <p className="mt-8">Not sure which package? <Link href="#contact" className="font-semibold text-[#FF6B35] underline">Book a free consultation</Link> and we'll recommend the right fit.</p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">From Excel to ERP in 5 Simple Steps</h2>
          </div>
          <div className="relative mt-12">
            {/* The connecting line */}
            <div className="absolute left-1/2 top-10 hidden h-[calc(100%-5rem)] w-0.5 -translate-x-1/2 bg-gray-200 md:block"></div>
            
            {/* Step 1 */}
            <div className="relative mb-12 flex flex-col items-center md:flex-row">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                {iconMap["📞"]}
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2 md:pr-12 text-center md:text-right">
                <p className="font-bold text-gray-500">Week 0</p>
                <h3 className="text-xl font-bold text-gray-800">Free Consultation</h3>
                <p className="text-gray-600">30-minute call. We understand your business, challenges, and what you need from an ERP.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-12 flex flex-col-reverse items-center md:flex-row">
              <div className="mt-4 md:mt-0 md:w-1/2 md:pl-12 text-center md:text-left">
                <p className="font-bold text-gray-500">Day 2-3</p>
                <h3 className="text-xl font-bold text-gray-800">Fixed-Price Proposal</h3>
                <p className="text-gray-600">We send a detailed proposal with clear scope, timeline, deliverables, and pricing. No hidden costs.</p>
              </div>
               <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                {iconMap["📄"]}
              </div>
            </div>
            
             {/* Step 3 */}
            <div className="relative mb-12 flex flex-col items-center md:flex-row">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                {iconMap["🚀"]}
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2 md:pr-12 text-center md:text-right">
                <p className="font-bold text-gray-500">Week 1</p>
                <h3 className="text-xl font-bold text-gray-800">Kickoff & Setup</h3>
                <p className="text-gray-600">Sign contract, 50% payment, and we start. Requirements gathering, ERP installation, and initial configuration.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative mb-12 flex flex-col-reverse items-center md:flex-row">
              <div className="mt-4 md:mt-0 md:w-1/2 md:pl-12 text-center md:text-left">
                <p className="font-bold text-gray-500">Weeks 2-7</p>
                <h3 className="text-xl font-bold text-gray-800">Implementation</h3>
                <p className="text-gray-600">We configure modules, migrate your data from Excel/Tally, customize fields/reports, and test everything.</p>
              </div>
               <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                {iconMap["🛠️"]}
              </div>
            </div>

            {/* Step 5 */}
             <div className="relative flex flex-col items-center md:flex-row">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                {iconMap["✅"]}
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2 md:pr-12 text-center md:text-right">
                <p className="font-bold text-gray-500">Week 8</p>
                <h3 className="text-xl font-bold text-gray-800">Training & Go-Live</h3>
                <p className="text-gray-600">Train your team, go live with real data, and provide 1-3 months of post-launch support.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Why MSMEs Trust AO+ Growth</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4">
                            <span className="text-5xl font-extrabold text-gray-200">01</span>
                            <span className="text-xl">Proven Expertise</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-500">Led by Om Prakash Singh, who brings 16+ years managing enterprise infrastructure. We've implemented ERPs for companies much larger than yours—we know what works.</CardContent>
                 </Card>
                  <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4">
                            <span className="text-5xl font-extrabold text-gray-200">02</span>
                            <span className="text-xl">MSME-First Approach</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-500">Fixed pricing (no hourly billing surprises), clear timelines, and straightforward communication. We speak your language, not consultant-speak.</CardContent>
                 </Card>
                  <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4">
                            <span className="text-5xl font-extrabold text-gray-200">03</span>
                            <span className="text-xl">We Don't Disappear</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-500">Many consultants vanish after implementation. We provide 1-3 months post-launch support, plus optional monthly retainers for ongoing help.</CardContent>
                 </Card>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-500" style={{background: 'linear-gradient(45deg, #FF6B35, #FFAA88)'}}>
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Move from Excel to ERP?</h2>
          <p className="mx-auto mt-4 max-w-2xl">Book a free 30-minute consultation. No sales pitch—we'll genuinely assess if ERP is right for you and recommend the best package.</p>
          <Card className="mx-auto mt-8 max-w-2xl p-8 text-left">
            <form className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                <Input id="name" placeholder="e.g. Anand Mahindra" />
              </div>
               <div className="space-y-1">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                <Input id="company" placeholder="e.g. Mahindra & Mahindra" />
              </div>
              <div className="space-y-1">
                <label htmlFor="revenue" className="text-sm font-medium text-gray-700">Annual Revenue</label>
                <Select>
                  <SelectTrigger id="revenue">
                    <SelectValue placeholder="Select your revenue range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<50L">&lt; ₹50L</SelectItem>
                    <SelectItem value="50L-1Cr">₹50L - ₹1Cr</SelectItem>
                    <SelectItem value="1-2Cr">₹1Cr - ₹2Cr</SelectItem>
                    <SelectItem value="2-5Cr">₹2Cr - ₹5Cr</SelectItem>
                    <SelectItem value="5-10Cr">₹5Cr - ₹10Cr</SelectItem>
                    <SelectItem value=">10Cr">&gt; ₹10Cr</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div className="space-y-1">
                <label htmlFor="challenge" className="text-sm font-medium text-gray-700">Biggest Challenge</label>
                <Textarea id="challenge" placeholder="e.g., Can't track inventory, manual invoicing takes too long" />
              </div>
               <div className="space-y-1">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input id="phone" type="tel" placeholder="e.g. +91 9820098200" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-white text-[#FF6B35] hover:bg-gray-100">
                Book Free Consultation
              </Button>
            </form>
          </Card>
          <p className="mt-4 text-sm">Prefer email? Write to us at <a href="mailto:growth@aoplus.in" className="font-semibold underline">growth@aoplus.in</a></p>
        </div>
      </section>
    </div>
  );
}

