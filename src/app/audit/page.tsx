
"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, FileText, Bot, Lightbulb, Wrench, Sparkles, BarChart, AlertCircle, RefreshCcw } from "lucide-react";

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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { generateBusinessAudit } from "@/ai/flows/audit-flow";
import { AuditReportInputSchema, type AuditReportInput, type AuditReportOutput } from "@/ai/schemas/audit-schemas";

function AuditReport({ report, clientName, onReset }: { report: AuditReportOutput, clientName: string, onReset: () => void }) {
  const categories = [
    { title: "Key Observations", icon: Lightbulb, data: report.keyObservations },
    { title: "Automation Opportunities", icon: Sparkles, data: report.automationOpportunities },
    { title: "Digital Improvements", icon: BarChart, data: report.digitalImprovements },
    { title: "Cost Savings", icon: Wrench, data: report.costSavings },
  ];

  return (
    <Card className="border-primary/50">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-3xl font-bold">Business Growth Audit Report</CardTitle>
        <CardDescription className="text-lg">Prepared for: {clientName}</CardDescription>
        <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </CardHeader>
      <CardContent className="space-y-8 p-6 md:p-8">
        
        <div className="rounded-lg bg-primary/5 p-6">
            <h3 className="mb-4 flex items-center text-xl font-bold text-primary">
                <CircleCheck className="mr-3 h-6 w-6" />
                Recommended Next Steps with AO+ Solutions
            </h3>
            <div className="space-y-4">
                {report.recommendedSolutions.map((rec, index) => (
                    <div key={index} className="rounded-md border border-primary/20 bg-background p-4">
                        <p className="font-semibold">{rec.problem}</p>
                        <p className="text-muted-foreground">{rec.solution}: <span className="italic">{rec.reason}</span></p>
                    </div>
                ))}
            </div>
        </div>
        
        <Accordion type="multiple" defaultValue={["Key Observations", "Automation Opportunities"]} className="w-full">
          {categories.map((category) => (
            <AccordionItem value={category.title} key={category.title}>
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center">
                  <category.icon className="mr-3 h-5 w-5 text-primary" />
                  {category.title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  {category.data.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="pt-6 text-center">
          <p className="mb-4 text-muted-foreground">Ready to take the next step? Let's talk.</p>
          <Button onClick={onReset} size="lg">
            <RefreshCcw className="mr-2" /> Start New Audit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AuditPage() {
  const [isPending, startTransition] = useTransition();
  const [report, setReport] = useState<AuditReportOutput | null>(null);
  const [clientName, setClientName] = useState("");
  const [error, setError] = useState<string | null>(null);

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
    setError(null);
    setReport(null);
    setClientName(values.ownerName);
    startTransition(async () => {
      try {
        const result = await generateBusinessAudit(values);
        setReport(result);
      } catch (e) {
        console.error(e);
        setError("An error occurred while generating the report. Please try again.");
      }
    });
  }

  const handleReset = () => {
    setReport(null);
    setError(null);
    setClientName("");
    form.reset();
  }

  return (
    <div className="mx-auto max-w-4xl py-16 md:py-24">
      {!report && !isPending && (
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Business Growth Audit
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Answer a few questions about your business to get a free,
            AI-powered, personalized growth plan from our experts.
          </p>
        </div>
      )}

      {isPending && (
         <div className="flex flex-col items-center justify-center rounded-lg bg-secondary/50 p-12 text-center">
            <Bot className="h-16 w-16 animate-pulse text-primary" />
            <h3 className="mt-6 text-2xl font-bold">Generating Your Report...</h3>
            <p className="text-muted-foreground">Our AI is analyzing your business. Please wait a moment.</p>
        </div>
      )}

      {error && (
         <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error} <Button variant="link" onClick={handleReset}>Try again</Button>
          </AlertDescription>
        </Alert>
      )}

      {report && <AuditReport report={report} clientName={clientName} onReset={handleReset} />}

      {!report && !isPending && (
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
                    <FormField control={form.control} name="businessName" render={({ field }) => ( <FormItem><FormLabel>Business Name</FormLabel><FormControl><Input placeholder="e.g., Anand's Cafe" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="ownerName" render={({ field }) => ( <FormItem><FormLabel>Your Name</FormLabel><FormControl><Input placeholder="e.g., Anand Kumar" {...field} /></FormControl><FormMessage /></FormItem> )} />
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
                  {isPending ? (<>Generating Report...</>) : "Get My Free AI-Powered Plan"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
