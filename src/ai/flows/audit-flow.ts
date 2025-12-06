
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
    You are a friendly and encouraging business consultant for AO+ Solutions, an expert in helping MSMEs in India grow.
    Analyze the following business details provided by a potential client.
    Based on their answers, generate a "BUSINESS GROWTH AUDIT REPORT".

    Your task is to identify key issues, frame them as actionable opportunities, and explicitly recommend AO+ Solutions' services or starter kits as the solution.
    Use the provided output format (keyObservations, automationOpportunities, digitalImprovements, costSavings, recommendedSolutions).
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
    - Final Thoughts: Biggest challenge is "{{{biggestChallenge}}}". Wants to fix "{{{fixFirst}}}" first. Wants to free automation plan: {{{wantsPlan}}}.

    AO+ SOLUTIONS STARTER KITS:
    - Website-in-a-Week (₹9,999): For businesses with no website.
    - Digital Audit Express (₹4,999): For businesses with a website that isn't performing.
    - CRM QuickStart (₹14,999 setup): For businesses managing leads manually in spreadsheets or WhatsApp.

    GENERATE THE REPORT:
    1.  **keyObservations**: Based on all inputs, identify the 3 to 5 most critical problems or missed opportunities. Phrase these concisely. For example, if they have slow response times, an observation is "Potential lead loss due to slow response times."
    2.  **automationOpportunities**: Based on their manual tasks, suggest specific automations. Examples: "Automated follow-up reminders," "Automated payment tracking and reminders."
    3.  **digitalImprovements**: Based on their online presence answers, suggest concrete improvements. Examples: "Develop a professional website to build trust," "Optimize Google Business Profile to attract local customers."
    4.  **costSavings**: Based on their software and cloud usage, suggest potential savings. Examples: "Audit and cancel unused software subscriptions," "Explore cloud cost optimization strategies."
    5.  **recommendedSolutions**: This is the most important section. For each key problem you identified, suggest a concrete solution from AO+ Solutions. Map their problems to our offerings.
        - If they have no website ('hasWebsite: "No"'), recommend the "Website-in-a-Week" kit.
        - If they track leads manually or on WhatsApp, recommend the "CRM QuickStart" kit.
        - If they have a website but it's not performing (e.g., 'searchVisible: "No"'), recommend the "Digital Audit Express" kit.
        - If they have manual process pain points, mention AO+ Solutions' custom automation services.
        - Phrase it as "For your challenge with [Problem], we recommend [Solution/Service] because..."

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
