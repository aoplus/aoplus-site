"use server";

import { z } from "zod";
import { routeContactForm, RouteContactFormInput } from "@/ai/flows/route-contact-form";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactSubmission(formData: RouteContactFormInput) {
  try {
    const validatedData = contactSchema.parse(formData);
    
    // Call the Genkit AI flow to route the contact form
    const routingResult = await routeContactForm(validatedData);

    console.log("Contact form routed successfully:", routingResult);

    // In a real application, you would now use the routingResult.recipient 
    // to send an email using a service like SendGrid or Mailgun.
    // e.g., await sendEmail({ to: routingResult.recipient, from: 'noreply@aoplus.in', ... });

    return {
      success: true,
      message: `Message routed to ${routingResult.recipient}`,
    };
  } catch (error) {
    console.error("Error handling contact submission:", error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Invalid form data. Please check your inputs.",
      };
    }
    
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
