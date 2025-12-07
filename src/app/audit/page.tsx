"use client";
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Bot, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { performGrowthAudit } from '@/ai/flows/audit-flow';
import type { GrowthAuditInput, GrowthAuditOutput } from '@/ai/schemas/audit-schemas';
import { AuditResponse } from '@/components/audit-response';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GrowthAuditInputSchema } from '@/ai/schemas/audit-schemas';

const formSchema = GrowthAuditInputSchema;

export default function AIPage() {
  const [isPending, startTransition] = useTransition();
  const [auditResult, setAuditResult] = useState<GrowthAuditOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<GrowthAuditInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: '',
      businessType: '',
      painPoints: '',
      goals: '',
      website: '',
    },
  });

  const onSubmit = async (values: GrowthAuditInput) => {
    setAuditResult(null);
    startTransition(async () => {
      try {
        const result = await performGrowthAudit(values);
        setAuditResult(result);
        toast({
          title: 'Audit Complete!',
          description: 'Your AI-powered growth audit is ready below.',
        });
      } catch (error) {
        console.error(error);
        toast({
          title: 'Error',
          description:
            'There was an issue generating your audit. Please try again.',
          variant: 'destructive',
        });
      }
    });
  };
  
  const handleReset = () => {
    setAuditResult(null);
    form.reset();
  }

  return (
    <div className="max-w-4xl mx-auto py-16 md:py-24">
      <Card className="overflow-hidden">
        <CardHeader className="bg-secondary/50 p-6 md:p-8">
            <div className="flex items-center gap-4">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Bot className="h-6 w-6" />
                </div>
                <div>
                    <CardTitle className="text-3xl font-bold">
                        AI-Powered Growth Audit
                    </CardTitle>
                    <CardDescription className="text-lg">
                        Discover your next growth opportunity in under 60 seconds.
                    </CardDescription>
                </div>
            </div>
        </CardHeader>

        <CardContent className="p-6 md:p-8">
            {isPending ? (
                 <div className="flex flex-col items-center justify-center gap-4 text-center py-12">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="font-semibold text-lg">Analyzing your business...</p>
                    <p className="text-muted-foreground">Our AI is crafting your personalized growth plan. This may take a moment.</p>
                 </div>
            ) : auditResult ? (
                <AuditResponse result={auditResult} onReset={handleReset} />
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="businessName"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Name</FormLabel>
                                    <FormControl>
                                    <Input placeholder="e.g., Acme Innovations" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="businessType"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Type</FormLabel>
                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your industry" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Local Service (Plumber, Electrician)">Local Service (Plumber, Electrician)</SelectItem>
                                            <SelectItem value="Professional Service (Clinic, Law Firm)">Professional Service (Clinic, Law Firm)</SelectItem>
                                            <SelectItem value="Retail / E-commerce">Retail / E-commerce</SelectItem>
                                            <SelectItem value="Manufacturing / Trading">Manufacturing / Trading</SelectItem>
                                            <SelectItem value="Hospitality (Restaurant, Hotel)">Hospitality (Restaurant, Hotel)</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                        </div>
                        
                        <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Website or Social Media Page (Optional)</FormLabel>
                                <FormControl>
                                <Input placeholder="https://yourbusiness.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        <FormField
                        control={form.control}
                        name="painPoints"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>What are your biggest business challenges right now?</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="e.g., Not getting enough leads, managing inventory is a mess, difficult to track payments..."
                                className="min-h-[100px]"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name="goals"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>What are your primary goals for the next 6-12 months?</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="e.g., Increase online sales by 30%, open a new branch, streamline our billing process..."
                                className="min-h-[100px]"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <Button type="submit" disabled={isPending} size="lg" className="w-full">
                        {isPending ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Sparkles className="mr-2 h-4 w-4" />
                        )}
                        Generate My Growth Plan
                        </Button>
                    </form>
                </Form>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
