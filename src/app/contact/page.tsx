import { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | AO+ Solutions",
  description: "Get in touch with AO+ Solutions. We're here to answer your questions about our products, brands, and investment opportunities.",
};

export default function ContactPage() {
  const contactImage = PlaceHolderImages.find(
    (img) => img.id === "contact-hero"
  );
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're here to help. Whether you're a potential client, partner, or
          future team member, we'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="rounded-lg bg-secondary/50 p-8">
          <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">
                  General Inquiries:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">{siteConfig.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">{siteConfig.address}</p>
              </div>
            </div>
          </div>
          {contactImage && (
            <div className="mt-8 flex justify-center">
                <Image
                    src={contactImage.imageUrl}
                    alt={contactImage.description}
                    data-ai-hint={contactImage.imageHint}
                    width={400}
                    height={240}
                    className="rounded-lg"
                />
            </div>
          )}
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
