import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
    title: "Terms of Service | AO+ Solutions",
    description: "Terms of Service for AO+ Solutions and its network of brands.",
};

export default function TermsOfServicePage() {
    return (
        <div className="max-w-4xl mx-auto py-16 md:py-24">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="prose prose-lg mt-8 max-w-none dark:prose-invert">
                <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AO+ Solutions website and its associated services (the "Service") operated by AO+ Solutions Pvt Ltd ("us", "we", or "our").</p>
                
                <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

                <h2 className="font-headline">1. Use of Service</h2>
                <p>You agree to use the Service in compliance with all applicable laws and regulations and not for any purpose that is prohibited by these Terms. You are responsible for all of your activity in connection with the Service.</p>
                
                <h2 className="font-headline">2. Intellectual Property</h2>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of AO+ Solutions Pvt Ltd and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of AO+ Solutions Pvt Ltd.</p>
                
                <h2 className="font-headline">3. Third-Party Services</h2>
                <p>Our Service integrates with and relies on third-party services to function. These include, but are not limited to, Google, HubSpot, Calendly, and GitHub. Your use of our Service is also governed by the terms and conditions of these third-party services.</p>
                <ul>
                    <li><strong>Google:</strong> By using our Service, you agree to be bound by the <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Terms of Service</a>.</li>
                    <li><strong>HubSpot:</strong> Our forms and CRM are powered by HubSpot. Your submissions are subject to the <a href="https://legal.hubspot.com/terms-of-service" target="_blank" rel="noopener noreferrer">HubSpot Terms of Service</a>.</li>
                    <li><strong>Calendly:</strong> Scheduling is handled through Calendly. Your use of this feature is subject to the <a href="https://calendly.com/terms" target="_blank" rel="noopener noreferrer">Calendly Terms of Service</a>.</li>
                    <li><strong>GitHub:</strong> Your interactions with our code repositories are subject to the <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" target="_blank" rel="noopener noreferrer">GitHub Terms of Service</a>.</li>
                </ul>
                <p>We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.</p>
                
                <h2 className="font-headline">4. Disclaimer</h2>
                <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>

                <h2 className="font-headline">5. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
                
                <h2 className="font-headline">6. Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                
                <h2 className="font-headline">7. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us by email: {siteConfig.email}</p>
            </div>
        </div>
    );
}