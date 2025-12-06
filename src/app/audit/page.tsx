
"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site";
import { AuditReportInputSchema, type AuditReportInput } from "@/ai/schemas/audit-schemas";

export default function AuditPage() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<AuditReportInput>({
    resolver: zodResolver(AuditReportInputSchema),
    defaultValues: {
      businessName: "",
      ownerName: "",
      businessType: "",
      location: "",
      contactMethod: "",
      replyTime: "Few hours",
      trackFollowUps: "No",
      leadsPerWeek: "",
      loseCustomers: "Maybe",
      dailyTasks: "",
      manualReminders: "No",
      manualPayments: "No",
      manualMessages: "No",
      hasWebsite: "No",
      hasGMB: "No",
      getReviews: "No",
      searchVisible: "Not sure",
      paidSoftware: "None",
      unusedSubs: "No",
      cloudServices: "No",
      biggestChallenge: "",
      fixFirst: "",
      wantsPlan: "Yes",
    },
  });

  function onSubmit(values: AuditReportInput) {
    startTransition(() => {
      const subject = encodeURIComponent(`Business Growth Audit for ${values.businessName}`);
      const body = encodeURIComponent(Object.entries(values)
        .map(([key, value]) => `${key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}: ${value}`)
        .join("\n"));
      
      const mailtoLink = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      toast({
        title: "Redirecting to your email client...",
        description: "Please complete sending the email to submit your audit request.",
      });

      setIsSuccess(true);
      form.reset();
    });
  }

  return (
    <div className="mx-auto max-w-4xl py-16 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Business Growth Audit
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Answer a few questions about your business to get a free,
          personalized plan from our experts.
        </p>
      </div>

      {isSuccess ? (
        <div className="flex h-full flex-col items-center justify-center rounded-lg bg-secondary/50 p-8 text-center">
            <div className="mb-4 rounded-full bg-primary p-3">
                <Send className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Thank You!</h3>
            <p className="text-muted-foreground">Your audit request has been prepared to be sent.</p>
            <Button variant="link" onClick={() => setIsSuccess(false)}>Submit another request</Button>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your Business Details</CardTitle>
            <CardDescription>All fields are required to generate an accurate report.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h3 className="font-headline text-xl font-semibold">Basic Details</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField control={form.control} name="businessName" render={({ field }) => ( <FormItem><FormLabel>Business Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="ownerName" render={({ field }) => ( <FormItem><FormLabel>Owner Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="businessType" render={({ field }) => ( <FormItem><FormLabel>Type of Business</FormLabel><FormControl><Input placeholder="e.g., Cafe, Salon, IT Services" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="location" render={({ field }) => ( <FormItem><FormLabel>Location</FormLabel><FormControl><Input placeholder="e.g., Mumbai, Online" {...field} /></FormControl><FormMessage /></FormItem> )} />
                </div>
                <Separator />
                
                <h3 className="font-headline text-xl font-semibold">Lead Handling</h3>
                <div className="space-y-6">
                    <FormField control={form.control} name="contactMethod" render={({ field }) => ( <FormItem><FormLabel>How do customers usually contact you?</FormLabel><FormControl><Input placeholder="e.g., Phone, WhatsApp, Instagram" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField control={form.control} name="replyTime" render={({ field }) => ( <FormItem><FormLabel>How quickly do you reply?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Immediate">Immediate</SelectItem><SelectItem value="Few hours">Within a few hours</SelectItem><SelectItem value="Next day">The next day</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                      <FormField control={form.control} name="trackFollowUps" render={({ field }) => ( <FormItem><FormLabel>Do you track follow-ups?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField control={form.control} name="leadsPerWeek" render={({ field }) => ( <FormItem><FormLabel>How many leads do you handle per week?</FormLabel><FormControl><Input placeholder="e.g., 10-20" {...field} /></FormControl><FormMessage /></FormItem> )} />
                      <FormField control={form.control} name="loseCustomers" render={({ field }) => ( <FormItem><FormLabel>Do you lose customers due to late responses?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem><SelectItem value="Maybe">Maybe</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    </div>
                </div>
                <Separator />

                <h3 className="font-headline text-xl font-semibold">Daily Tasks</h3>
                <div className="space-y-6">
                    <FormField control={form.control} name="dailyTasks" render={({ field }) => ( <FormItem><FormLabel>What tasks take up most of your daily time?</FormLabel><FormControl><Textarea placeholder="e.g., Replying to messages, creating invoices, following up..." {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <FormField control={form.control} name="manualReminders" render={({ field }) => ( <FormItem><FormLabel>Send reminders manually?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="manualPayments" render={({ field }) => ( <FormItem><FormLabel>Track payments manually?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="manualMessages" render={({ field }) => ( <FormItem><FormLabel>Write customer messages manually?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    </div>
                </div>
                <Separator />

                <h3 className="font-headline text-xl font-semibold">Online Presence</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField control={form.control} name="hasWebsite" render={({ field }) => ( <FormItem><FormLabel>Do you have a website?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="hasGMB" render={({ field }) => ( <FormItem><FormLabel>Have a Google Business Profile?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="getReviews" render={({ field }) => ( <FormItem><FormLabel>Regularly get reviews?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="searchVisible" render={({ field }) => ( <FormItem><FormLabel>Visible on Google search?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem><SelectItem value="Not sure">Not sure</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                </div>
                <Separator />

                <h3 className="font-headline text-xl font-semibold">Cost Saving</h3>
                 <div className="space-y-6">
                    <FormField control={form.control} name="paidSoftware" render={({ field }) => ( <FormItem><FormLabel>List software/IT tools you pay for.</FormLabel><FormControl><Textarea placeholder="e.g., Tally, Microsoft Office, etc." {...field} /></FormControl><FormMessage /></FormItem> )} />
                     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <FormField control={form.control} name="unusedSubs" render={({ field }) => ( <FormItem><FormLabel>Are there unused subscriptions?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem><SelectItem value="Maybe">Maybe</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="cloudServices" render={({ field }) => ( <FormItem><FormLabel>Are you paying for cloud services?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem><SelectItem value="Not sure">Not sure</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    </div>
                </div>
                <Separator />

                <h3 className="font-headline text-xl font-semibold">Final Questions</h3>
                 <div className="space-y-6">
                    <FormField control={form.control} name="biggestChallenge" render={({ field }) => ( <FormItem><FormLabel>What is your biggest business challenge today?</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="fixFirst" render={({ field }) => ( <FormItem><FormLabel>What do you want to fix first?</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="wantsPlan" render={({ field }) => ( <FormItem><FormLabel>Would you like a free automation plan?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                </div>

                <Button type="submit" disabled={isPending} className="w-full" size="lg">
                  {isPending ? (<><Loader2 className="mr-2" />Submitting...</>) : "Get My Free Plan"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
