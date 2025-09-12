import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart,
  DollarSign,
  Target,
  TrendingUp,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { brands } from '@/lib/brands';
import { siteConfig } from '@/lib/site';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'aoplus-hero');
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="w-full bg-background">
        <div className="grid grid-cols-1 items-center gap-8 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              {siteConfig.shortDesc}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/assessment">
                  Book Free FinOps Assessment <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/brand-network">Explore Brands</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={600}
                height={400}
                className="rounded-xl object-cover shadow-2xl"
              />
            )}
          </div>
        </div>
      </section>

      {/* Brand Network Section */}
      <section id="brands" className="w-full bg-secondary/50 py-16 md:py-24">
        <div>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Network of Brands
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A diverse portfolio of digital-first brands, each with a unique
              mission and audience.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {brands.map((brand) => {
                const brandLogo = PlaceHolderImages.find(
                  (img) => img.id === brand.logoImageId
                );
                return (
                  <CarouselItem
                    key={brand.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="flex h-full flex-col">
                        <CardHeader className="items-center pb-4">
                          {brandLogo && (
                            <div className="mb-4 flex h-16 items-center justify-center">
                              <Image
                                src={brandLogo.imageUrl}
                                alt={`${brand.name} logo`}
                                data-ai-hint={brandLogo.imageHint}
                                width={150}
                                height={64}
                                className="object-contain"
                              />
                            </div>
                          )}
                          <CardTitle className="text-center">
                            {brand.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col justify-between">
                          <CardDescription className="mb-4 flex-grow text-center">
                            {brand.shortDesc}
                          </CardDescription>
                          <Button asChild className="mt-auto w-full">
                            <Link
                              href={
                                brand.linkType === 'redirect'
                                  ? brand.domain
                                  : `/brand/${brand.id}`
                              }
                              target={
                                brand.linkType === 'redirect'
                                  ? '_blank'
                                  : '_self'
                              }
                              rel={
                                brand.linkType === 'redirect'
                                  ? 'noopener noreferrer'
                                  : ''
                              }
                            >
                              Visit Site <ArrowRight className="ml-2" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Investor Snapshot Section */}
      <section
        id="investors"
        className="w-full bg-background py-16 md:py-24"
      >
        <div>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Investor Snapshot
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Driving growth and innovation with a clear vision for the future.
            </p>
          </div>
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
          <div className="mt-12 text-center">
            <Button asChild variant="link">
              <Link href="/investors">
                View Investor Details <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
