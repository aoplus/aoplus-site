
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const GrowthHeader = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
    <div className="container mx-auto flex h-20 items-center justify-between">
      <Link href="/growth" className="text-2xl font-bold text-[#1E3A8A]">
        AO+ Growth
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
        <Link href="/growth" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
        <Link href="#industries" className="text-gray-600 hover:text-gray-900">Industries</Link>
        <Link href="#erpnext" className="text-gray-600 hover:text-gray-900">ERPNext</Link>
        <Link href="#casestudies" className="text-gray-600 hover:text-gray-900">Case Studies</Link>
        <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
        <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
      </nav>
      <div className="hidden items-center gap-4 md:flex">
        <a href="tel:+917977875818" className="text-sm font-semibold text-gray-700 hover:text-black">+91-7977-875-818</a>
        <Button asChild className="rounded-md bg-[#FF6600] text-white hover:bg-[#FF6600]/90">
          <Link href="#contact">Free Consultation</Link>
        </Button>
      </div>
    </div>
  </header>
);

const GrowthFooter = () => (
  <footer className="w-full border-t bg-[#1E3A8A] text-white">
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-5">
      <div className="col-span-1 flex flex-col gap-4 md:col-span-2">
        <Link href="/growth" className="text-3xl font-bold text-white">
          AO+ Growth
        </Link>
        <p className="max-w-md text-sm text-gray-300">
          AO+ Growth ranks among India's top ERP consultants, proudly certified as a trusted ERPNext partner and delivering comprehensive ERP solutions nationwide.
          <br/><br/>
          Our team's expertise across ERPNext enables us to streamline operations effectively. We help businesses reduce operational costs, and scale effortlessly, paving the way for growth and sustained success.
        </p>
      </div>
      <div>
        <h4 className="mb-4 font-semibold">Quick Links</h4>
        <ul className="space-y-3">
          <li><Link href="#blog" className="text-sm text-gray-300 hover:text-white">Blog</Link></li>
          <li><Link href="#about" className="text-sm text-gray-300 hover:text-white">About Us</Link></li>
          <li><Link href="#services" className="text-sm text-gray-300 hover:text-white">Services</Link></li>
          <li><Link href="#industries" className="text-sm text-gray-300 hover:text-white">Industries</Link></li>
          <li><Link href="#casestudies" className="text-sm text-gray-300 hover:text-white">Case Studies</Link></li>
          <li><Link href="#contact" className="text-sm text-gray-300 hover:text-white">Free Demo</Link></li>
          <li><Link href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 font-semibold">Services</h4>
        <ul className="space-y-3">
          <li><Link href="#services" className="text-sm text-gray-300 hover:text-white">ERP Implementation</Link></li>
          <li><Link href="#services" className="text-sm text-gray-300 hover:text-white">ERP Customization</Link></li>
          <li><Link href="#services" className="text-sm text-gray-300 hover:text-white">ERP Support</Link></li>
          <li><Link href="#services" className="text-sm text-gray-300 hover:text-white">ERP Training</Link></li>
          <li><Link href="#services" className="text-sm text-gray-300 hover:text-white">ERPNext Consulting</Link></li>
        </ul>
      </div>
       <div>
        <h4 className="mb-4 font-semibold">Industries</h4>
        <ul className="space-y-3">
          <li><Link href="#industries" className="text-sm text-gray-300 hover:text-white">Manufacturing</Link></li>
          <li><Link href="#industries" className="text-sm text-gray-300 hover:text-white">Trading</Link></li>
          <li><Link href="#industries" className="text-sm text-gray-300 hover:text-white">Retail</Link></li>
          <li><Link href="#industries" className="text-sm text-gray-300 hover:text-white">Services</Link></li>
          <li><Link href="#industries" className="text-sm text-gray-300 hover:text-white">Healthcare</Link></li>
          <li><Link href="#industries" className="text-sm text-gray-300 hover:text-white">Real Estate</Link></li>
        </ul>
      </div>
    </div>
     <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-4">
        <div>
            <h4 className="mb-4 font-semibold">Bangalore</h4>
            <p className="text-sm text-gray-300">Unit No. 123, Tech Park, Whitefield, Bangalore - 560066</p>
            <p className="text-sm text-gray-300">Phone: +91-7977-875-818</p>
            <p className="text-sm text-gray-300">Email: hello@aoplusgrowth.in</p>
        </div>
        <div>
            <h4 className="mb-4 font-semibold">Mumbai</h4>
            <p className="text-sm text-gray-300">Office Tower, Andheri East, Mumbai - 400069</p>
             <p className="text-sm text-gray-300">Phone: +91-7977-875-818</p>
        </div>
        <div>
            <h4 className="mb-4 font-semibold">Pune</h4>
            <p className="text-sm text-gray-300">IT Park, Hinjewadi, Pune - 411057</p>
             <p className="text-sm text-gray-300">Phone: +91-7977-875-818</p>
        </div>
    </div>
    <div className="border-t border-blue-700 bg-[#1E3A8A]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-gray-300 sm:flex-row">
        <p>© 2026 AO+ Solutions Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function GrowthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Inter',_sans-serif] bg-white text-gray-800">
        <GrowthHeader />
        <main>{children}</main>
        <GrowthFooter />
      </body>
    </html>
  )
}
