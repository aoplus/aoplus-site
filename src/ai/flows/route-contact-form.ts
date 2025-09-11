'use server';

/**
 * @fileOverview An AI agent that intelligently routes contact form submissions.
 *
 * - routeContactForm - A function that routes the contact form submission to the appropriate department or individual.
 * - RouteContactFormInput - The input type for the routeContactForm function.
 * - RouteContactFormOutput - The return type for the routeContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the contact form.'),
  email: z.string().email().describe('The email address of the person submitting the contact form.'),
  message: z.string().describe('The message content from the contact form.'),
});
export type RouteContactFormInput = z.infer<typeof RouteContactFormInputSchema>;

const RouteContactFormOutputSchema = z.object({
  recipient: z.string().describe('The email address of the recipient to whom the contact form should be routed.'),
  reason: z.string().describe('The reason for routing the contact form to this recipient.'),
});
export type RouteContactFormOutput = z.infer<typeof RouteContactFormOutputSchema>;

export async function routeContactForm(input: RouteContactFormInput): Promise<RouteContactFormOutput> {
  return routeContactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'routeContactFormPrompt',
  input: {schema: RouteContactFormInputSchema},
  output: {schema: RouteContactFormOutputSchema},
  prompt: `You are an expert in routing contact form submissions to the appropriate department or individual.

  Based on the content of the message, determine the best recipient for the contact form submission.

  Here is the contact form submission:

  Name: {{{name}}}
  Email: {{{email}}}
  Message: {{{message}}}
  \n
  Consider these potential recipients:

  * sales@aoplus.in - For sales inquiries.
  * support@aoplus.in - For technical support inquiries.
  * careers@aoplus.in - For career inquiries.
  * investors@aoplus.in - For investor inquiries.
  * partners@aoplus.in - For partnership inquiries.
  * connect@aoplus.in - For general inquiries or when the appropriate recipient is unclear.

  Respond with a JSON object containing the \"recipient\" email address and a brief \"reason\" for the routing decision.
  `,
});

const routeContactFormFlow = ai.defineFlow(
  {
    name: 'routeContactFormFlow',
    inputSchema: RouteContactFormInputSchema,
    outputSchema: RouteContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
