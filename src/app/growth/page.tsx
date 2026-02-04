
import { Check, Gauge, Zap, Gem, ShoppingCart, FileText, Boxes, Factory, Users, BarChart, Phone, File, Rocket, Wrench, CheckCircle, Search, Settings, Cloud, HardHat, Briefcase, HeartPulse, Building } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const iconMap = {
  "implementation": <Settings className="h-10 w-10 text-[#14B8A6]" />,
  "customization": <Wrench className="h-10 w-10 text-[#14B8A6]" />,
  "support": <HardHat className="h-10 w-10 text-[#14B8A6]" />,
  "hosting": <Cloud className="h-10 w-10 text-[#14B8A6]" />,
  "accounting": <FileText className="h-8 w-8 text-[#1E3A8A]" />,
  "inventory": <Boxes className="h-8 w-8 text-[#1E3A8A]" />,
  "sales": <BarChart className="h-8 w-8 text-[#1E3A8A]" />,
  "hrms": <Users className="h-8 w-8 text-[#1E3A8A]" />,
  "website": <Search className="h-8 w-8 text-[#1E3A8A]" />,
  "manufacturing": <Factory className="h-8 w-8 text-[#1E3A8A]" />,
};

export default function GrowthPage() {
  return (
    <div className="font-['Poppins',_sans-serif]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-24">
        <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold leading-tight">
              Leading ERPNext Consultants for Indian MSMEs
            </h1>
            <p className="text-lg text-gray-200">
              We specialize in ERPNext implementation tailored to the unique needs of Indian businesses. Transform your operations with India's most trusted ERP partner.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-md bg-[#FF6600] px-8 py-6 text-base text-white hover:bg-[#FF6600]/90">
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md border-white px-8 py-6 text-base text-white hover:bg-white/10">
                <Link href="#contact">Free ERP Demo</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/seed/erpdashboard/600/400"
              alt="ERPNext Dashboard Mockup"
              data-ai-hint="erp dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-gray-600 md:justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#14B8A6]" />
            <span>Official ERPNext Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#14B8A6]" />
            <span>1,000+ Projects Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <HardHat className="h-5 w-5 text-[#14B8A6]" />
            <span>24/7 Support</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto text-center">
          <span className="text-sm font-bold uppercase text-[#14B8A6]">About Us</span>
          <h2 className="mt-2 text-4xl font-bold text-[#1E3A8A]">AO+ Growth India - Leading ERP Consultants in India</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            ERP Consultants in India: AO+ Growth offers effective ERP solutions with experienced handling of ERPNext, tailored for MSMEs across India. With presence in Bangalore, Mumbai, and Pune, we empower companies to achieve digital transformation.
          </p>
          <p className="mt-4 font-semibold text-lg text-gray-800">'AO+ Growth – Official ERPNext Partner in India'</p>
          <p className="mt-2 text-gray-600">Expert solutions for small, medium, and large enterprises in India.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
             <Card>
              <CardContent className="p-0">
                <Image src="https://picsum.photos/seed/customization/400/250" width={400} height={250} alt="ERP Customization" className="w-full rounded-t-lg" data-ai-hint="erp customization" />
              </CardContent>
              <CardFooter className="p-4 bg-gray-50 rounded-b-lg">
                <p className="font-semibold text-gray-700">ERP Customization for All Business Sizes</p>
              </CardFooter>
             </Card>
              <Card>
              <CardContent className="p-0">
                <Image src="https://picsum.photos/seed/experts/400/250" width={400} height={250} alt="Expert Solutions" className="w-full rounded-t-lg" data-ai-hint="expert team" />
              </CardContent>
              <CardFooter className="p-4 bg-gray-50 rounded-b-lg">
                <p className="font-semibold text-gray-700">Expert solutions for enterprises</p>
              </CardFooter>
             </Card>
              <Card>
              <CardContent className="p-0">
                <Image src="https://picsum.photos/seed/support/400/250" width={400} height={250} alt="Comprehensive Support" className="w-full rounded-t-lg" data-ai-hint="customer support" />
              </CardContent>
              <CardFooter className="p-4 bg-gray-50 rounded-b-lg">
                <p className="font-semibold text-gray-700">Comprehensive Support</p>
              </CardFooter>
             </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#F7F9FC] py-20">
        <div className="container mx-auto text-center">
           <span className="text-sm font-bold uppercase text-[#14B8A6]">What We Do</span>
          <h2 className="mt-2 text-4xl font-bold text-[#1E3A8A]">Discover Our Best ERP Services</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader className="items-center">{iconMap["implementation"]}</CardHeader>
              <CardTitle className="text-xl font-semibold">ERP Implementation</CardTitle>
              <CardContent className="pt-2 text-sm text-gray-500">Multi-phase strategy: redesigning, configuration, migrating data, & training</CardContent>
              <CardFooter><Link href="#" className="font-semibold text-[#1E3A8A]">Learn more →</Link></CardFooter>
            </Card>
            <Card className="text-center">
              <CardHeader className="items-center">{iconMap["customization"]}</CardHeader>
              <CardTitle className="text-xl font-semibold">ERP Customization</CardTitle>
              <CardContent className="pt-2 text-sm text-gray-500">Effortlessly adjust modules, functions, and settings to meet your business goals.</CardContent>
              <CardFooter><Link href="#" className="font-semibold text-[#1E3A8A]">Learn more →</Link></CardFooter>
            </Card>
            <Card className="text-center">
              <CardHeader className="items-center">{iconMap["support"]}</CardHeader>
              <CardTitle className="text-xl font-semibold">ERP Support & Maintenance</CardTitle>
              <CardContent className="pt-2 text-sm text-gray-500">ERP software support for new or existing systems. 24/7 assistance.</CardContent>
              <CardFooter><Link href="#" className="font-semibold text-[#1E3A8A]">Learn more →</Link></CardFooter>
            </Card>
             <Card className="text-center">
              <CardHeader className="items-center">{iconMap["hosting"]}</CardHeader>
              <CardTitle className="text-xl font-semibold">ERP Hosting</CardTitle>
              <CardContent className="pt-2 text-sm text-gray-500">Reliable & high-performance hosting designed specifically for your ERP requirements.</CardContent>
              <CardFooter><Link href="#" className="font-semibold text-[#1E3A8A]">Learn more →</Link></CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* ERPNext Partner Section */}
      <section id="erpnext" className="bg-[#14B8A6] py-20 text-white">
        <div className="container mx-auto text-center">
          <Image src="https://picsum.photos/seed/partnerlogo/150/50" width={150} height={50} alt="ERPNext Official Partner" className="mx-auto mb-6" data-ai-hint="partner logo" />
          <h2 className="text-4xl font-bold">Official ERPNext Partner in India</h2>
          <p className="mx-auto mt-4 max-w-2xl">ERP Consultants in India: Delivering certified ERPNext solutions with expertise and support tailored for Indian businesses.</p>
          <div className="mt-6 space-x-4 font-semibold">
            <Link href="#" className="hover:underline">ERPNext Bangalore</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">ERPNext Mumbai</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">ERPNext Pune</Link>
          </div>
          <Button asChild className="mt-8 bg-white text-[#14B8A6] hover:bg-gray-100">
            <Link href="#">Learn More →</Link>
          </Button>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">ERPNext for Your Industry</h2>
          <h3 className="mt-2 text-lg text-gray-600">AO+ Growth: Industries We Serve</h3>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">AO+ Growth is proud to be an official ERPNext partner in India, committed to delivering robust and adaptable ERP solutions for businesses spread across the country. ERPNext is one of the most agile ERP systems, trusted by businesses in over 150 countries. It supports more than 30 languages and is ideal for SMEs in manufacturing, distribution, and services.</p>
          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <div>
                <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700">Trading Industry</span>
                    <span className="font-semibold text-gray-700">35%</span>
                </div>
                <Progress value={35} className="h-3 [&>div]:bg-[#14B8A6]" />
            </div>
            <div>
                <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700">Manufacturing Industry</span>
                    <span className="font-semibold text-gray-700">40%</span>
                </div>
                <Progress value={40} className="h-3 [&>div]:bg-[#14B8A6]" />
            </div>
            <div>
                <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700">Services Industry</span>
                    <span className="font-semibold text-gray-700">25%</span>
                </div>
                <Progress value={25} className="h-3 [&>div]:bg-[#14B8A6]" />
            </div>
          </div>
          <Button asChild variant="link" className="mt-8 text-[#1E3A8A] font-bold">
            <Link href="#">All industries we serve →</Link>
          </Button>
        </div>
      </section>

       {/* Modules Section */}
      <section className="bg-[#F7F9FC] py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E3A8A]">Comprehensive ERP Solutions: ERPNext Modules</h2>
            <p className="mt-2 text-lg text-gray-600">Explore the essential ERPNext modules</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
                <Card>
                    <CardHeader className="items-center">{iconMap['accounting']}</CardHeader>
                    <CardContent className="text-center"><CardTitle>Accounting</CardTitle></CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center">{iconMap['inventory']}</CardHeader>
                    <CardContent className="text-center"><CardTitle>Inventory</CardTitle></CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center">{iconMap['sales']}</CardHeader>
                    <CardContent className="text-center"><CardTitle>Sales & CRM</CardTitle></CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center">{iconMap['hrms']}</CardHeader>
                    <CardContent className="text-center"><CardTitle>HRMS</CardTitle></CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center">{iconMap['website']}</CardHeader>
                    <CardContent className="text-center"><CardTitle>Website & E-commerce</CardTitle></CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center">{iconMap['manufacturing']}</CardHeader>
                    <CardContent className="text-center"><CardTitle>Manufacturing</CardTitle></CardContent>
                </Card>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">ERPNext Modules</h3>
                <p className="text-gray-600 mb-6">ERPNext modules act as crucial components for a flexible ERP system, allowing businesses to tailor their solutions to meet unique requirements. Each module, whether it's finance or HR, helps organizations optimize operations, enhance productivity, and make informed decisions based on data.</p>
                <Button asChild className="w-full bg-[#FF6600] text-white hover:bg-[#FF6600]/90">
                    <Link href="#">Explore All Modules →</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-[#1E3A8A] py-20 text-white">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold">Questions About ERP?</h2>
            <p className="mt-4 text-lg text-gray-200">Connect with Our Expert Team for Further Information!</p>
            <p className="mt-2 text-gray-300">We're here for you 24/7. Reach out to us for detailed insights and assistance.</p>
            <div className="mt-8 flex justify-center gap-8">
                <div className="text-lg">
                    <p className="font-semibold">Email Address:</p>
                    <a href="mailto:hello@aoplusgrowth.in" className="hover:underline">hello@aoplusgrowth.in</a>
                </div>
                 <div className="text-lg">
                    <p className="font-semibold">Telephone:</p>
                    <a href="tel:+917977875818" className="hover:underline">+91-7977-875-818</a>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="casestudies" className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1E3A8A]">What Our Customers Say</h2>
             <div className="mt-12 grid gap-8 md:grid-cols-3">
                <Card className="text-left">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Image src="https://picsum.photos/seed/ceo1/60/60" width={60} height={60} alt="Rajesh Kumar" className="rounded-full" data-ai-hint="male headshot" />
                        <div>
                            <CardTitle>Rajesh Kumar</CardTitle>
                            <CardDescription>Founder, Manufacturing Co.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="italic text-gray-600">"You were right on schedule, charged reasonable prices, were professional and courteous in dealings."</p>
                    </CardContent>
                </Card>
                 <Card className="text-left">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Image src="https://picsum.photos/seed/ceo2/60/60" width={60} height={60} alt="Priya Shah" className="rounded-full" data-ai-hint="female headshot" />
                        <div>
                            <CardTitle>Priya Shah</CardTitle>
                            <CardDescription>Director, Trading Co.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="italic text-gray-600">"I wanted to take a moment to thank AO+ Growth team for the services your team has provided."</p>
                    </CardContent>
                </Card>
                 <Card className="text-left">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Image src="https://picsum.photos/seed/ceo3/60/60" width={60} height={60} alt="Amit Patel" className="rounded-full" data-ai-hint="male headshot professional" />
                        <div>
                            <CardTitle>Amit Patel</CardTitle>
                            <CardDescription>CEO, Service Co.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="italic text-gray-600">"We thank AO+ Growth for making successful implementation and look forward to a long-term alliance."</p>
                    </CardContent>
                </Card>
             </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1E3A8A]">Latest ERP News & Updates</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                <Card>
                    <CardContent className="p-0">
                        <Image src="https://picsum.photos/seed/blog1/400/250" width={400} height={250} alt="Blog 1" className="w-full rounded-t-lg" data-ai-hint="manufacturing factory" />
                    </CardContent>
                    <div className="p-6 text-left">
                        <p className="text-sm text-gray-500">15 Jan</p>
                        <h3 className="font-bold text-lg mt-2">ERPNext for Manufacturing: Complete Guide</h3>
                        <p className="text-sm text-gray-600 mt-2">Discover how ERPNext transforms manufacturing operations...</p>
                        <Button asChild variant="link" className="p-0 mt-4 text-[#1E3A8A] font-bold"><Link href="#">Learn more →</Link></Button>
                    </div>
                </Card>
                <Card>
                    <CardContent className="p-0">
                        <Image src="https://picsum.photos/seed/blog2/400/250" width={400} height={250} alt="Blog 2" className="w-full rounded-t-lg" data-ai-hint="gold award" />
                    </CardContent>
                    <div className="p-6 text-left">
                        <p className="text-sm text-gray-500">10 Jan</p>
                        <h3 className="font-bold text-lg mt-2">AO+ Growth Achieves ERPNext Gold Partner Status</h3>
                        <p className="text-sm text-gray-600 mt-2">We're thrilled to announce our prestigious upgrade...</p>
                        <Button asChild variant="link" className="p-0 mt-4 text-[#1E3A8A] font-bold"><Link href="#">Learn more →</Link></Button>
                    </div>
                </Card>
                <Card>
                    <CardContent className="p-0">
                        <Image src="https://picsum.photos/seed/blog3/400/250" width={400} height={250} alt="Blog 3" className="w-full rounded-t-lg" data-ai-hint="trading cargo" />
                    </CardContent>
                    <div className="p-6 text-left">
                        <p className="text-sm text-gray-500">05 Jan</p>
                        <h3 className="font-bold text-lg mt-2">Best ERP Software for Trading Companies</h3>
                        <p className="text-sm text-gray-600 mt-2">ERP Solutions for Fast-Growing Trading Businesses...</p>
                        <Button asChild variant="link" className="p-0 mt-4 text-[#1E3A8A] font-bold"><Link href="#">Learn more →</Link></Button>
                    </div>
                </Card>
            </div>
        </div>
      </section>

    </div>
  );
}
