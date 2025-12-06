"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, FileText, Sparkles, Zap, DollarSign, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import {
  generateBusinessAudit,
  type AuditReportInput,
  AuditReportInputSchema,
  type AuditReportOutput,
} from "@/ai/flows/audit-flow";

// export const metadata: Metadata = {
//   title: "Business Growth Audit | AO+ Solutions",
//   description: "Get a free, instant AI-powered audit of your business to identify growth opportunities.",
// };

export default function AuditPage() {
  const [isPending, startTransition] = useTransition();
  const [report, setReport] = useState<AuditReportOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<AuditReportInput>({
    resolver: zodResolver(AuditReportInputSchema),
    defaultValues: {
      businessName: "",
      ownerName: "",
      phone: "",
      businessType: "",
      location: "",
      contactMethod: "",
      replyTime: "",
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
    setError(null);
    setReport(null);
    startTransition(async () => {
      try {
        const result = await generateBusinessAudit(values);
        setReport(result);
      } catch (e) {
        console.error(e);
        setError("We're sorry, the AI report could not be generated at this time. Please try again later.");
      }
    });
  }

  return (
    <div className="mx-auto max-w-4xl py-16 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Business Growth Audit
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Answer a few questions about your business and get a free,
          AI-powered audit to identify your biggest growth opportunities.
        </p>
      </div>

      {!report && (
        <Card>
          <CardHeader>
            <CardTitle>Your Business Details</CardTitle>
            <CardDescription>All fields are required to generate an accurate report.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* SECTION 1 */}
                <h3 className="font-headline text-xl font-semibold">Basic Details</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField control={form.control} name="businessName" render={({ field }) => ( <FormItem><FormLabel>Business Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="ownerName" render={({ field }) => ( <FormItem><FormLabel>Owner Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="businessType" render={({ field }) => ( <FormItem><FormLabel>Type of Business</FormLabel><FormControl><Input placeholder="e.g., Cafe, Salon, IT Services" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="location" render={({ field }) => ( <FormItem><FormLabel>Location</FormLabel><FormControl><Input placeholder="e.g., Mumbai, Online" {...field} /></FormControl><FormMessage /></FormItem> )} />
                </div>
                <Separator />
                
                {/* SECTION 2 */}
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

                {/* SECTION 3 */}
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

                {/* SECTION 4 */}
                <h3 className="font-headline text-xl font-semibold">Online Presence</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField control={form.control} name="hasWebsite" render={({ field }) => ( <FormItem><FormLabel>Do you have a website?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="hasGMB" render={({ field }) => ( <FormItem><FormLabel>Have a Google Business Profile?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="getReviews" render={({ field }) => ( <FormItem><FormLabel>Regularly get reviews?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="searchVisible" render={({ field }) => ( <FormItem><FormLabel>Visible on Google search?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem><SelectItem value="Not sure">Not sure</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                </div>
                <Separator />

                {/* SECTION 5 */}
                <h3 className="font-headline text-xl font-semibold">Cost Saving</h3>
                 <div className="space-y-6">
                    <FormField control={form.control} name="paidSoftware" render={({ field }) => ( <FormItem><FormLabel>List software/IT tools you pay for.</FormLabel><FormControl><Textarea placeholder="e.g., Tally, Microsoft Office, etc." {...field} /></FormControl><FormMessage /></FormItem> )} />
                     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <FormField control={form.control} name="unusedSubs" render={({ field }) => ( <FormItem><FormLabel>Are there unused subscriptions?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem><SelectItem value="Maybe">Maybe</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="cloudServices" render={({ field }) => ( <FormItem><FormLabel>Are you paying for cloud services?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem><SelectItem value="Not sure">Not sure</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    </div>
                </div>
                <Separator />

                {/* SECTION 6 */}
                <h3 className="font-headline text-xl font-semibold">Final Questions</h3>
                 <div className="space-y-6">
                    <FormField control={form.control} name="biggestChallenge" render={({ field }) => ( <FormItem><FormLabel>What is your biggest business challenge today?</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="fixFirst" render={({ field }) => ( <FormItem><FormLabel>What do you want to fix first?</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="wantsPlan" render={({ field }) => ( <FormItem><FormLabel>Would you like a free automation plan?</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Yes">Yes</SelectItem><SelectItem value="No">No</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                </div>

                <Button type="submit" disabled={isPending} className="w-full" size="lg">
                  {isPending ? (<><Loader2 className="mr-2" />Generating Your Report...</>) : "Generate My Free Audit Report"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
      
      {isPending && (
          <div className="text-center p-8">
              <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">Our AI is analyzing your business... Please wait.</p>
          </div>
      )}

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive">Report Generation Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
            <Button variant="link" onClick={() => form.handleSubmit(onSubmit)()}>
              Try generating again
            </Button>
          </CardContent>
        </Card>
      )}

      {report && (
        <Card className="bg-secondary/30">
          <CardHeader className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl">Business Growth Audit Report</CardTitle>
            <CardDescription>
              Prepared for: {form.getValues("businessName")} on {new Date().toLocaleDateString('en-IN')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 font-headline text-xl font-semibold mb-4">
                <Sparkles className="h-5 w-5 text-primary" /> Key Observations
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {report.keyObservations.map((item, i) => <li key={`obs-${i}`}>{item}</li>)}
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-headline text-xl font-semibold mb-4">Opportunities to Save Time & Grow</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                   <h4 className="flex items-center gap-2 font-semibold text-lg">
                    <Zap className="h-5 w-5 text-green-500" /> Automation Opportunities
                   </h4>
                   <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                     {report.automationOpportunities.map((item, i) => <li key={`auto-${i}`}>{item}</li>)}
                   </ul>
                </div>
                 <div className="space-y-4">
                   <h4 className="flex items-center gap-2 font-semibold text-lg">
                    <ArrowRight className="h-5 w-5 text-blue-500" /> Digital Improvement
                   </h4>
                   <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                     {report.digitalImprovements.map((item, i) => <li key={`digi-${i}`}>{item}</li>)}
                   </ul>
                </div>
              </div>
            </div>
            
             <div className="space-y-4">
               <h4 className="flex items-center gap-2 font-semibold text-lg">
                <DollarSign className="h-5 w-5 text-yellow-500" /> Cost Saving
               </h4>
               <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                 {report.costSavings.map((item, i) => <li key={`cost-${i}`}>{item}</li>)}
               </ul>
            </div>
            
            <Separator />
            
            <div className="text-center p-6 bg-background rounded-lg">
                <h3 className="font-headline text-2xl font-bold">Ready to take the next step?</h3>
                <p className="text-muted-foreground mt-2 mb-4">Let us create a detailed, no-obligation automation plan for your business.</p>
                <Button asChild size="lg">
                    <a href={`mailto:${siteConfig.email}?subject=Request for Free Automation Plan for ${form.getValues("businessName")}`}>
                        Request My Free Plan <ArrowRight className="ml-2" />
                    </a>
                </Button>
            </div>

            <div className="text-center">
                <Button variant="link" onClick={() => setReport(null)}>
                    Start a New Audit
                </Button>
            </div>

          </CardContent>
        </Card>
      )}
    </div>
  );
}
