'use server';
/**
 * @fileOverview A flow for sending emails using Mailgun.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import Mailgun from 'mailgun.js';
import formData from 'form-data';
import { siteConfig } from '@/lib/site';

const mailgun = new Mailgun(formData);

// Ensure Mailgun API key and domain are set in environment variables
if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
  console.warn(
    'Mailgun API key or domain is not set in environment variables. Email sending will be disabled.'
  );
}

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || 'dummy-key',
});

const SendEmailInputSchema = z.object({
  subject: z.string().describe('The subject of the email.'),
  text: z.string().describe('The plain text body of the email.'),
  from: z
    .string()
    .email()
    .describe('The email address of the sender.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

const SendEmailOutputSchema = z.object({
  success: z.boolean().describe('Whether the email was sent successfully.'),
  message: z.string().describe('A message indicating the result.'),
});
export type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;

export async function sendEmail(
  input: SendEmailInput
): Promise<SendEmailOutput> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      console.error('Mailgun credentials are not configured.');
      return {
        success: false,
        message: 'Email service is not configured.',
      };
    }

    try {
      await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
        from: `AO+ Solutions <mailgun@${process.env.MAILGUN_DOMAIN}>`,
        to: [siteConfig.email], // Send to the company's email
        subject: input.subject,
        text: `From: ${input.from}\n\n${input.text}`,
        'h:Reply-To': input.from,
      });
      return {
        success: true,
        message: 'Email sent successfully!',
      };
    } catch (error) {
      console.error('Error sending email:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred.';
      return {
        success: false,
        message: `Failed to send email: ${errorMessage}`,
      };
    }
  }
);
