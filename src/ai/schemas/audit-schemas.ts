
import { z } from "zod";

export const AuditReportInputSchema = z.object({
  businessName: z.string().min(1, "Business name is required."),
  ownerName: z.string().min(1, "Owner name is required."),
  businessType: z.string().min(1, "Business type is required."),
  location: z.string().min(1, "Location is required."),
  contactMethod: z.string().min(1, "Contact method is required."),
  replyTime: z.string(),
  trackFollowUps: z.string(),
  leadsPerWeek: z.string().min(1, "Leads per week is required."),
  loseCustomers: z.string(),
  dailyTasks: z.string().min(1, "Daily tasks are required."),
  manualReminders: z.string(),
  manualPayments: z.string(),
  manualMessages: z.string(),
  hasWebsite: z.string(),
  hasGMB: z.string(),
  getReviews: z.string(),
  searchVisible: z.string(),
  paidSoftware: z.string(),
  unusedSubs: z.string(),
  cloudServices: z.string(),
  biggestChallenge: z.string().min(1, "Biggest challenge is required."),
  fixFirst: z.string().min(1, "What to fix first is required."),
  wantsPlan: z.string(),
});

export type AuditReportInput = z.infer<typeof AuditReportInputSchema>;

export const AuditReportOutputSchema = z.object({
  keyObservations: z.array(z.string()).describe('A list of 3-5 key observations identified from the user\'s answers. Frame these as problems or missed opportunities. For example: "You are losing leads due to late responses."'),
  automationOpportunities: z.array(z.string()).describe('A list of specific automation opportunities based on the user\'s manual tasks. For example: "Auto WhatsApp replies" or "Auto payment reminders".'),
  digitalImprovements: z.array(z.string()).describe('A list of specific digital presence improvements. For example: "Website to increase trust" or "Google Business optimization".'),
  costSavings: z.array(z.string()).describe('A list of specific cost-saving opportunities. For example: "Cancel unused SaaS tools" or "Cloud cost optimization".'),
});

export type AuditReportOutput = z.infer<typeof AuditReportOutputSchema>;
