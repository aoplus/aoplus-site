import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | AO+ Solutions",
    description: "Terms of Service for AO+ Solutions and its network of brands.",
};

export default function TermsOfServicePage() {
    return (
        <div className="container max-w-4xl py-16 md:py-24">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg mt-8 max-w-none dark:prose-invert">
                <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AO+ Solutions website and its associated services (the "Service") operated by AO+ Solutions Pvt Ltd ("us", "we", or "our").</p>
                
                <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
                
                <h2 className="font-headline">1. Accounts</h2>
                <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                
                <h2 className="font-headline">2. Intellectual Property</h2>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of AO+ Solutions Pvt Ltd and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.</p>
                
                <h2 className="font-headline">3. Links To Other Web Sites</h2>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by AO+ Solutions Pvt Ltd. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.</p>
                
                <h2 className="font-headline">4. Termination</h2>
                <p>We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                
                <h2 className="font-headline">5. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                
                <h2 className="font-headline">6. Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                
                <h2 className="font-headline">7. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us:</p>
                <ul>
                    <li>By email: connect@aoplus.in</li>
                </ul>
            </div>
        </div>
    );
}