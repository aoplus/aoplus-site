
'use server';
/**
 * @fileOverview A business growth audit AI agent.
 *
 * - generateBusinessAudit - A function that handles the business audit report generation.
 * - AuditReportInput - The input type for the generateBusinessAudit function.
 * - AuditReportOutput - The return type for the generateBusinessAudit function.
 */

import { ai } from '@/ai/genkit';
import { AuditReportInputSchema, AuditReportOutputSchema, type AuditReportInput, type AuditReportOutput } from '@/ai/schemas/audit-schemas';

export async function generateBusinessAudit(
  input: AuditReportInput
): Promise<AuditReportOutput> {
  return auditFlow(input);
}

const prompt = ai.definePrompt({
  name: 'businessAuditPrompt',
  input: { schema: AuditReportInputSchema },
  output: { schema: AuditReportOutputSchema },
  prompt: `
    You are a business consultant for AO+ Solutions, specializing in helping MSMEs in India grow.
    Analyze the following business details provided by a potential client.
    Based on their answers, generate a "BUSINESS GROWTH AUDIT REPORT".

    Your task is to identify key issues and frame them as actionable opportunities.
    Use the provided output format (keyObservations, automationOpportunities, digitalImprovements, costSavings).
    The tone should be helpful, insightful, and encouraging.

    Business Details:
    - Business Name: {{{businessName}}}
    - Owner Name: {{{ownerName}}}
    - Type of Business: {{{businessType}}}
    - Location: {{{location}}}
    - Lead Handling: Customers contact via {{{contactMethod}}}. Reply time is {{{replyTime}}}. Follow-ups tracked: {{{trackFollowUps}}}. Handles {{{leadsPerWeek}}} leads per week. Loses customers due to late response: {{{loseCustomers}}}.
    - Daily Tasks: Daily time is spent on: {{{dailyTasks}}}. Manual reminders: {{{manualReminders}}}. Manual payment tracking: {{{manualPayments}}}. Manual customer messages: {{{manualMessages}}}.
    - Online Presence: Has website: {{{hasWebsite}}}. Has Google Business Profile: {{{hasGMB}}}. Gets reviews: {{{getReviews}}}. Visible on search: {{{searchVisible}}}.
    - Cost Saving: Paid software: {{{paidSoftware}}}. Unused subscriptions: {{{unusedSubs}}}. Pays for cloud: {{{cloudServices}}}.
    - Final Thoughts: Biggest challenge is "{{{biggestChallenge}}}". Wants to fix "{{{fixFirst}}}" first. Wants a free automation plan: {{{wantsPlan}}}.

    GENERATE THE REPORT:
    1.  **Key Observations**: Based on all inputs, identify the 3 to 5 most critical problems or missed opportunities. Phrase these concisely. For example, if they have slow response times, an observation is "Potential lead loss due to slow response times." If they have no website, observe "Limited online presence may impact credibility."
    2.  **Automation Opportunities**: Based on their manual tasks (reminders, payments, messages), suggest specific automations. Examples: "Automated follow-up reminders," "Automated payment tracking and reminders."
    3.  **Digital Improvement**: Based on their online presence answers, suggest concrete improvements. Examples: "Develop a professional website to build trust," "Optimize Google Business Profile to attract local customers."
    4.  **Cost Saving**: Based on their software and cloud usage, suggest potential savings. Examples: "Audit and cancel unused software subscriptions," "Explore cloud cost optimization strategies."

    Provide your response in the structured JSON format required.
  `,
});

const auditFlow = ai.defineFlow(
  {
    name: 'auditFlow',
    inputSchema: AuditReportInputSchema,
    outputSchema: AuditReportOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
