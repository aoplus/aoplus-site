import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
    title: "Privacy Policy | AO+ Solutions",
    description: "Privacy Policy for AO+ Solutions and its network of brands.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto py-16 md:py-24">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="prose prose-lg mt-8 max-w-none dark:prose-invert">
                <p>AO+ Solutions Pvt Ltd ("us", "we", or "our") operates the AO+ Solutions website and various associated brands (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                
                <h2 className="font-headline">1. Information Collection and Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                
                <h3>Types of Data Collected</h3>
                
                <h4>Personal Data</h4>
                <p>While using our Service, we may ask you to provide us with certain personally identifiable information ("Personal Data"). This may include, but is not limited to:</p>
                <ul>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Company and Job Title</li>
                    <li>Usage Data, Cookies, and information from third-party services</li>
                </ul>

                <h4>Usage Data</h4>
                <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>
                
                <h2 className="font-headline">2. Use of Third-Party Services</h2>
                <p>We use third-party services to operate our business and provide the Service. These services may collect information about you. Your use of our Service constitutes your agreement to the privacy policies of these third-party services.</p>
                <ul>
                    <li><strong>Google Services:</strong> We use Google Analytics to monitor and analyze the use of our Service. Google's Privacy Policy can be found at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.</li>
                    <li><strong>HubSpot:</strong> We use HubSpot for customer relationship management (CRM) and marketing automation. When you submit a form, your data is processed by HubSpot. HubSpot's Privacy Policy: <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://legal.hubspot.com/privacy-policy</a>.</li>
                    <li><strong>Calendly:</strong> We use Calendly for scheduling meetings and assessments. When you schedule an appointment, your information is processed by Calendly. Calendly's Privacy Policy: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">https://calendly.com/privacy</a>.</li>
                    <li><strong>GitHub:</strong> We may use GitHub for version control and collaboration. If you interact with our repositories, your GitHub profile information may be visible to us. GitHub's Privacy Statement: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a>.</li>
                </ul>
                
                <h2 className="font-headline">3. Use of Data</h2>
                <p>We use the collected data for various purposes:</p>
                <ul>
                    <li>To provide, maintain, and improve our Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To manage your requests, including scheduling meetings and providing assessments</li>
                    <li>To provide customer support</li>
                    <li>To gather analysis or valuable information so that we can improve our Service</li>
                    <li>To monitor the usage of our Service</li>
                    <li>To detect, prevent, and address technical issues</li>
                    <li>To provide you with news, special offers, and general information about other goods, services, and events which we offer</li>
                </ul>

                <h2 className="font-headline">4. Security of Data</h2>
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                
                <h2 className="font-headline">5. Your Data Protection Rights</h2>
                <p>You have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>
                
                <h2 className="font-headline">6. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                
                <h2 className="font-headline">7. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us by email: {siteConfig.email}</p>
            </div>
        </div>
    );
}