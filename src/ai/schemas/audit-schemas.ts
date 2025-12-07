/**
 * @fileOverview Zod schemas for the Growth Audit AI flow.
 * This file defines the input and output structures for the AI agent
 * that performs a business growth audit.
 *
 * - GrowthAuditInputSchema - The Zod schema for the input data.
 * - GrowthAuditOutputSchema - The Zod schema for the AI's output.
 */

import { z } from 'genkit/zod';

export const GrowthAuditInputSchema = z.object({
  businessName: z.string().min(2).describe('The name of the business.'),
  businessType: z
    .string()
    .min(3)
    .describe('The type or industry of the business.'),
  website: z.string().optional().describe('The business website or social media URL.'),
  painPoints: z
    .string()
    .min(10)
    .describe("The user's current business challenges and problems."),
  goals: z
    .string()
    .min(10)
    .describe('The user’s stated goals for their business.'),
});

export const GrowthAuditOutputSchema = z.object({
  coreProblem: z
    .string()
    .describe(
      'A concise, one or two-sentence diagnosis of the fundamental issue holding the business back.'
    ),
  recommendedBundle: z
    .enum([
      'Digital Launchpad',
      'MSME Growth Engine',
      'Vertical Growth Marketing',
      'Enterprise Ops',
    ])
    .describe(
      'The single best service bundle recommendation to solve the core problem.'
    ),
  actionableSteps: z
    .array(z.string())
    .describe(
      'A list of 3-5 specific, actionable steps the business owner can take immediately.'
    ),
  quickWin: z
    .string()
    .describe(
      'One high-impact, low-effort action they can take in the next 7 days for a quick result.'
    ),
});

export type GrowthAuditInput = z.infer<typeof GrowthAuditInputSchema>;
export type GrowthAuditOutput = z.infer<typeof GrowthAuditOutputSchema>;
