import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | AO+ Solutions",
    description: "Privacy Policy for AO+ Solutions and its network of brands.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container max-w-4xl py-16 md:py-24">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg mt-8 max-w-none dark:prose-invert">
                <p>AO+ Solutions Pvt Ltd ("us", "we", or "our") operates the AO+ Solutions website and various associated brands (the "Service").</p>
                
                <h2 className="font-headline">1. Information Collection and Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                <h3>Types of Data Collected</h3>
                <h4>Personal Data</h4>
                <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                <ul>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Cookies and Usage Data</li>
                </ul>

                <h2 className="font-headline">2. Use of Data</h2>
                <p>We use the collected data for various purposes:</p>
                <ul>
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>

                <h2 className="font-headline">3. Security of Data</h2>
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                
                <h2 className="font-headline">4. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                
                <h2 className="font-headline">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                    <li>By email: connect@aoplus.in</li>
                </ul>
            </div>
        </div>
    );
}