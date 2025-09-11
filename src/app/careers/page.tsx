import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { jobs } from "@/lib/careers";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "Careers | AO+ Solutions",
  description: "Join our team of innovators and help build the future of intelligent infrastructure. Explore open positions at AO+ Solutions.",
};

export default function CareersPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'career-hero');
  return (
    <div>
      <section className="relative w-full bg-secondary/50">
        {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="absolute inset-0 h-full w-full object-cover"
            />
        )}
        <div className="relative bg-black/50">
            <div className="container py-24 text-center md:py-32">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Join Our Mission
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
                We are building a team of passionate individuals dedicated to creating world-class technology solutions.
                </p>
            </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="mb-10 text-center font-headline text-3xl font-bold sm:text-4xl">
          Open Positions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <div className="flex flex-wrap items-center gap-2 pt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  {job.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`mailto:careers@aoplus.in?subject=Application for ${job.title}`}>
                    Apply Now <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
