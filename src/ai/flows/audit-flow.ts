'use server';
/**
 * @fileOverview A business growth audit AI agent.
 * This file defines the AI flow for performing a growth audit on a business
 * based on user-provided information.
 *
 * - performGrowthAudit - A function that runs the audit process.
 * - GrowthAuditInput - The Zod schema for the input.
 * - GrowthAuditOutput - The Zod schema for the output.
 */

import { ai } from '@/ai/genkit';
import {
  GrowthAuditInputSchema,
  GrowthAuditOutputSchema,
} from '@/ai/schemas/audit-schemas';
import type {
  GrowthAuditInput,
  GrowthAuditOutput,
} from '@/ai/schemas/audit-schemas';

const PROMPT = `You are an expert MSME (Micro, Small, and Medium Enterprises) business consultant in India. Your goal is to provide a concise, actionable growth audit for a business based on the information they provide.

Analyze the user's business name, type, pain points, and goals.

Based on this, you will:

1.  **Identify the Core Problem:** In one or two sentences, diagnose the fundamental issue holding the business back. This should be a direct and insightful assessment.

2.  **Recommend a Service Bundle:** Choose ONE of the following service bundles that is the best fit to solve their core problem.
    *   **Digital Launchpad:** For new or very small businesses needing a basic digital presence.
    *   **MSME Growth Engine:** For established businesses that need to streamline operations with an ERP.
    *   **Vertical Growth Marketing:** For businesses focused on acquiring more customers and leads online.
    *   **Enterprise Ops:** For larger businesses needing advanced automation and compliance.
    
    You must recommend exactly one of the bundles above.

3.  **Provide Actionable Steps:** List 3-5 specific, actionable steps the business owner can take immediately. These steps should be directly related to solving their pain points and achieving their goals, and should align with the recommended service bundle. Make them concrete and easy to understand.

4.  **Suggest a Quick Win:** Identify one high-impact, low-effort action they can take in the next 7 days to see immediate results. This should be a tangible and encouraging first step.

User-provided information:
- Business Name: {{{businessName}}}
- Business Type: {{{businessType}}}
- Website/Social: {{{website}}}
- Current Pain Points: {{{painPoints}}}
- Stated Goals: {{{goals}}}`;

// Define the prompt with input and output schemas
const auditPrompt = ai.definePrompt({
  name: 'growthAuditPrompt',
  input: { schema: GrowthAuditInputSchema },
  output: { schema: GrowthAuditOutputSchema },
  prompt: PROMPT,
});

// Define the main flow
export const performGrowthAuditFlow = ai.defineFlow(
  {
    name: 'performGrowthAuditFlow',
    inputSchema: GrowthAuditInputSchema,
    outputSchema: GrowthAuditOutputSchema,
  },
  async (input) => {
    const { output } = await auditPrompt(input);
    if (!output) {
      throw new Error('Failed to generate audit');
    }
    return output;
  }
);

/**
 * Performs a growth audit for a business.
 * @param input - The business details.
 * @returns The growth audit recommendations.
 */
export async function performGrowthAudit(
  input: GrowthAuditInput
): Promise<GrowthAuditOutput> {
  return await performGrowthAuditFlow(input);
}
