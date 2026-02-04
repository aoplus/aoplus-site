
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const GrowthHeader = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
    <div className="container mx-auto flex h-20 items-center justify-between">
      <Link href="/growth" className="text-2xl font-bold text-[#FF6B35]">
        AO+ <span className="text-gray-700">Growth</span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
        <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
        <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
        <Link href="#why-us" className="text-gray-600 hover:text-gray-900">About</Link>
        <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
      </nav>
      <Button asChild className="hidden rounded-full bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 md:flex">
        <Link href="#contact">Book Free Consultation</Link>
      </Button>
    </div>
  </header>
);

const GrowthFooter = () => (
  <footer className="w-full border-t bg-white">
    <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-16 md:grid-cols-4">
      <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
        <Link href="/growth" className="text-2xl font-bold text-[#FF6B35]">
          AO+ <span className="text-gray-700">Growth</span>
        </Link>
        <p className="max-w-xs text-sm text-gray-500">
          Enterprise ERP. MSME Pricing.
        </p>
      </div>
      <div>
        <h4 className="mb-4 font-semibold">Services</h4>
        <ul className="space-y-3">
          <li><Link href="#pricing" className="text-sm text-gray-500 hover:text-gray-800">Starter ERP Package</Link></li>
          <li><Link href="#pricing" className="text-sm text-gray-500 hover:text-gray-800">Growth ERP Package</Link></li>
          <li><Link href="#pricing" className="text-sm text-gray-500 hover:text-gray-800">Scale ERP Package</Link></li>
          <li><Link href="#add-ons" className="text-sm text-gray-500 hover:text-gray-800">Cloud Migration</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 font-semibold">AO+ Family</h4>
        <ul className="space-y-3">
          <li><a href="https://prodory.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-800">Prodory.com</a></li>
          <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">DigiAds.click</a></li>
          <li><Link href="/" className="text-sm text-gray-500 hover:text-gray-800">AO+ Solutions</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 font-semibold">Legal & Support</h4>
        <ul className="space-y-3">
          <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-800">Privacy Policy</Link></li>
          <li><Link href="/terms" className="text-sm text-gray-500 hover:text-gray-800">Terms of Service</Link></li>
          <li><a href="mailto:growth@aoplus.in" className="text-sm text-gray-500 hover:text-gray-800">growth@aoplus.in</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t bg-gray-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-gray-500 sm:flex-row">
        <p>AO+ Growth is a division of AO+ Solutions Pvt Ltd</p>
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Montserrat',_sans-serif] bg-[#FAFAFA]">
        <GrowthHeader />
        <main>{children}</main>
        <GrowthFooter />
      </body>
    </html>
  )
}
