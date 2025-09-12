"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";

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
import { useToast } from "@/hooks/use-toast";
import { useState, useTransition } from "react";
import { siteConfig } from "@/lib/site";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Company name must be at least 2 characters."),
  productInterest: z.string().min(1, "Please select a product of interest."),
  answers: z.string().min(20, "Please provide more details (at least 20 characters)."),
});


export default function AssessmentPage() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      productInterest: "",
      answers: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
        const subject = encodeURIComponent(`New FinOps Assessment Request from ${values.name}`);
        const body = encodeURIComponent(`
Name: ${values.name}
Company: ${values.company}
Email: ${values.email}
Product of Interest: ${values.productInterest}

Infrastructure Details:
${values.answers}
        `);

        const mailtoLink = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        toast({
            title: "Redirecting to your email client...",
            description: "Please complete sending the email to submit your request.",
        });
        setIsSuccess(true);
        form.reset();
    });
  }

  return (
    <div className="max-w-3xl mx-auto py-16 md:py-24">
      <div className="mb-10 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Free FinOps Assessment
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover how much you can save on your cloud bill. Fill out the form
          below to get started with a complimentary assessment from our experts.
        </p>
      </div>

      {isSuccess ? (
         <div className="flex h-full flex-col items-center justify-center rounded-lg bg-secondary/50 p-8 text-center">
            <div className="mb-4 rounded-full bg-primary p-3">
                <Send className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Thank You!</h3>
            <p className="text-muted-foreground">Your assessment request has been prepared.</p>
            <Button variant="link" onClick={() => setIsSuccess(false)}>Submit another request</Button>
        </div>
      ) : (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Acme Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Work Email</FormLabel>
                    <FormControl>
                        <Input placeholder="john@acme.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="productInterest"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Product of Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="prodory">Prodory Cloud Solutions</SelectItem>
                        <SelectItem value="satvikcloud">SatvikCloud Bundles</SelectItem>
                        <SelectItem value="other">Other/General</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="answers"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Tell us about your infrastructure</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="e.g., What is your current cloud provider? What is your estimated monthly cloud spend? What are your biggest challenges?"
                        className="min-h-[150px]"
                        {...field}
                        />
                    </FormControl>
                    <FormDescription>
                        The more details you provide, the better we can assist you.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit" disabled={isPending} className="w-full" size="lg">
                {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                <Send className="mr-2 h-4 w-4" />
                )}
                Request My Free Assessment
            </Button>
            </form>
        </Form>
      )}
    </div>
  );
}
