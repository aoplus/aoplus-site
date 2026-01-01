
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Launchpad Buyer's Guide | AO+ Solutions",
    description: "A complete guide to the Digital Launchpad package, including features, pricing, add-ons, and implementation timeline.",
};

const guideHtml = `
<style>
    .guide-body { font-family: Inter, sans-serif; background-color: #F9FAFB; color: #374151; }
    .erp-section { padding: 3rem 2rem; max-width: 1000px; margin: 0 auto; }
    @media (max-width: 768px) { .erp-section { padding: 2rem 1rem; } }
    
    .hero { background: linear-gradient(135deg, hsl(var(--primary)), #059669); color: white; padding: 4rem 2rem; text-align: center; border-radius: 15px; margin-bottom: 3rem; }
    .hero h1 { font-size: 2.8rem; margin-bottom: 0.5rem; font-weight: 700; }
    .hero .tagline { font-size: 1.3rem; opacity: 0.95; margin-bottom: 2rem; }
    .hero .price { font-size: 3rem; font-weight: 700; margin: 1rem 0; }
    .hero .price-note { font-size: 1.1rem; opacity: 0.9; }
    
    .section-box { background: white; padding: 2.5rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); margin-bottom: 2rem; }
    .section-box h2 { color: hsl(var(--primary)); font-size: 2rem; margin-bottom: 1.5rem; }
    .section-box h3 { color: #374151; font-size: 1.4rem; margin: 2rem 0 1rem; }
    
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }
    
    .included-box { background: #F0FDF4; border-left: 5px solid hsl(var(--primary)); padding: 1.5rem; border-radius: 8px; }
    .addon-box { background: #FFFBEB; border-left: 5px solid #F59E0B; padding: 1.5rem; border-radius: 8px; }
    
    .guide-list { list-style: none; padding: 0; }
    .guide-list li { padding: 0.6rem 0; padding-left: 1.8rem; position: relative; color: #555; line-height: 1.6; }
    .guide-list li::before { content: "✓"; position: absolute; left: 0; color: hsl(var(--primary)); font-weight: bold; font-size: 1.2rem; }
    
    .price-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
    .price-table th { background: #F0FDF4; padding: 1rem; text-align: left; color: #059669; font-weight: 600; }
    .price-table td { padding: 1rem; border-bottom: 1px solid #E5E7EB; }
    
    .timeline { margin: 2rem 0; }
    .timeline-item { display: flex; gap: 1.5rem; margin-bottom: 1.5rem; }
    .timeline-dot { background: hsl(var(--primary)); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
    .timeline-content h4 { color: hsl(var(--primary)); margin-bottom: 0.3rem; }
    
    .cta-box { background: linear-gradient(135deg, hsl(var(--primary)), #059669); color: white; padding: 3rem 2rem; border-radius: 15px; text-align: center; margin-top: 3rem; }
    .btn-primary { display: inline-block; padding: 1rem 2.5rem; background: white; color: hsl(var(--primary)); border-radius: 50px; text-decoration: none; font-weight: 600; margin: 0.5rem; }
    .back-link { display: inline-block; color: hsl(var(--primary)); text-decoration: none; font-weight: 600; margin-bottom: 2rem; }
</style>
<div class="guide-body">
    <div class="erp-section">
        <a href="/services" class="back-link">← Back to All Packages</a>
    </div>
    
    <div class="hero">
        <h1>Digital Launchpad</h1>
        <div class="tagline">Get your business online professionally in 2 weeks</div>
        <div class="price">₹9,999 + ₹1,999/mo</div>
        <div class="price-note">One-time setup + monthly hosting & maintenance</div>
    </div>
    
    <div class="erp-section">
        <!-- What You Get -->
        <div class="section-box">
            <h2>📦 What's Included in Standard Package</h2>
            <p style="color: #666; margin-bottom: 2rem;">Everything you need to establish a professional digital presence without burning out</p>
            
            <div class="two-col">
                <div class="included-box">
                    <h4 style="color: hsl(var(--primary)); margin-bottom: 1rem;">One-Time Setup (₹9,999)</h4>
                    <ul class="guide-list">
                        <li>Professional 5-page website (Home, About, Services, Contact, Blog)</li>
                        <li>Mobile-responsive design</li>
                        <li>Domain registration (.in or .com)</li>
                        <li>Business email (5 email addresses)</li>
                        <li>WhatsApp Business setup</li>
                        <li>Google Business Profile optimization</li>
                        <li>Social media account creation (2 platforms)</li>
                        <li>Basic SEO setup</li>
                    </ul>
                </div>
                
                <div class="included-box">
                    <h4 style="color: hsl(var(--primary)); margin-bottom: 1rem;">Monthly Maintenance (₹1,999/mo)</h4>
                    <ul class="guide-list">
                        <li>Website hosting & SSL certificate</li>
                        <li>Email hosting (5 accounts)</li>
                        <li>Monthly website updates (content changes)</li>
                        <li>Security updates & backups</li>
                        <li>Uptime monitoring</li>
                        <li>Technical support (email)</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Perfect For -->
        <div class="section-box">
            <h2>🎯 Perfect For</h2>
            <ul class="guide-list" style="margin-top: 1rem;">
                <li><strong>New Businesses:</strong> Just starting, need professional presence</li>
                <li><strong>Service Providers:</strong> Consultants, agencies, freelancers</li>
                <li><strong>Local Businesses:</strong> Retail shops, clinics, salons wanting online visibility</li>
                <li><strong>Solopreneurs:</strong> One-person operations not ready for complex systems</li>
                <li><strong>Budget: ₹10k-15k</strong> for digital setup</li>
            </ul>
        </div>
        
        <!-- Customization Options -->
        <div class="section-box">
            <h2>🔧 Customization & Add-Ons</h2>
            <p style="color: #666; margin-bottom: 1.5rem;">Adjust the package to your needs. Pricing increases based on additions:</p>
            
            <table class="price-table">
                <thead>
                    <tr>
                        <th>Add-On</th>
                        <th>One-Time</th>
                        <th>Monthly</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Additional Pages</strong> (each)</td>
                        <td>₹1,500</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td><strong>E-commerce</strong> (up to 50 products)</td>
                        <td>₹8,000</td>
                        <td>+₹1,000/mo</td>
                    </tr>
                    <tr>
                        <td><strong>Blog/News Section</strong></td>
                        <td>₹3,000</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td><strong>Contact Forms</strong> (additional)</td>
                        <td>₹1,000</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td><strong>Extra Email Accounts</strong> (per 5)</td>
                        <td>—</td>
                        <td>+₹500/mo</td>
                    </tr>
                    <tr>
                        <td><strong>Social Media Posting</strong> (8 posts/month)</td>
                        <td>—</td>
                        <td>+₹2,000/mo</td>
                    </tr>
                    <tr>
                        <td><strong>Google Ads Setup</strong></td>
                        <td>₹5,000</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td><strong>WhatsApp Catalog</strong> (up to 30 products)</td>
                        <td>₹2,000</td>
                        <td>—</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="addon-box" style="margin-top: 2rem;">
                <h4 style="color: #F59E0B; margin-bottom: 0.5rem;">💡 Example Custom Package</h4>
                <p style="color: #666; font-size: 0.95rem; margin-bottom: 1rem;">
                    Standard + E-commerce (50 products) + Social Media Posting (8/month) + WhatsApp Catalog
                </p>
                <div style="font-weight: 700; color: #374151;">
                    Total: ₹24,999 setup + ₹4,999/month
                </div>
            </div>
        </div>
        
        <!-- Implementation Timeline -->
        <div class="section-box">
            <h2>⏱️ Implementation Timeline</h2>
            <p style="color: #666; margin-bottom: 2rem;">From kickoff to going live in 14 days</p>
            
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-dot">1</div>
                    <div class="timeline-content">
                        <h4>Day 1-2: Discovery</h4>
                        <p style="color: #666;">Share brand guidelines, content, logo. We understand your business.</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-dot">2</div>
                    <div class="timeline-content">
                        <h4>Day 3-7: Design & Development</h4>
                        <p style="color: #666;">We build your website, set up email, create social accounts.</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-dot">3</div>
                    <div class="timeline-content">
                        <h4>Day 8-10: Review & Revisions</h4>
                        <p style="color: #666;">You review, request changes. We refine.</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-dot">4</div>
                    <div class="timeline-content">
                        <h4>Day 11-12: Content Population</h4>
                        <p style="color: #666;">Add final content, images, contact info. SEO setup.</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-dot">5</div>
                    <div class="timeline-content">
                        <h4>Day 13-14: Go Live!</h4>
                        <p style="color: #666;">Domain connected, website live, email working. You're online!</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- What Happens After -->
        <div class="section-box">
            <h2>📅 After Go-Live (Monthly ₹1,999)</h2>
            <ul class="guide-list">
                <li><strong>Content Updates:</strong> Need to change text, add images, update contact info? Email us. Done within 24 hours.</li>
                <li><strong>Security:</strong> We handle updates, backups, SSL renewal. Your site stays secure.</li>
                <li><strong>Support:</strong> Technical issues? Email support with 24-hour response time.</li>
                <li><strong>Uptime:</strong> We monitor 24/7. If site goes down, we fix it immediately.</li>
                <li><strong>Email:</strong> Your business email keeps working, spam-free.</li>
            </ul>
            
            <div style="background: #FEF2F2; border-left: 4px solid #EF4444; padding: 1rem; border-radius: 5px; margin-top: 1.5rem;">
                <strong style="color: #EF4444;">Not Included:</strong> Major redesigns, new pages, functionality changes. These are quoted separately based on scope.
            </div>
        </div>
        
        <!-- Success Stories -->
        <div class="section-box">
            <h2>✨ Success Stories</h2>
            
            <div style="background: #F7FAFC; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
                <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">Arjun Sharma - Tax Consultant, Pune</h4>
                <p style="color: #666; font-style: italic; margin-bottom: 1rem;">
                    "I was handling everything myself—no website, no professional email. Digital Launchpad got me online in 2 weeks. Since then, 40% of my new clients find me through Google. Worth every rupee."
                </p>
                <div style="color: #999; font-size: 0.9rem;">Setup: ₹9,999 | Monthly: ₹1,999 | New clients via web: 12 in 6 months</div>
            </div>
            
            <div style="background: #F7FAFC; padding: 1.5rem; border-radius: 10px;">
                <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">Priya's Home Bakery - Mumbai</h4>
                <p style="color: #666; font-style: italic; margin-bottom: 1rem;">
                    "I added e-commerce option. Customers can now order cakes online, pay via UPI. My WhatsApp was chaotic before. Now 60% of orders come through the website."
                </p>
                <div style="color: #999; font-size: 0.9rem;">Setup: ₹17,999 (Standard + E-commerce) | Monthly: ₹2,999 | Online orders: ₹80k/month</div>
            </div>
        </div>
        
        <!-- Not Right For -->
        <div class="section-box">
            <h2>⚠️ Not Right for You If...</h2>
            <ul class="guide-list" style="color: #666;">
                <li>You need custom software/app development → Consider <strong>Operations & Automation</strong></li>
                <li>You're running a large e-commerce store (500+ products) → Need custom solution</li>
                <li>You need ERP/inventory management → Start with <strong>IT Foundation</strong></li>
                <li>You want full digital marketing → Choose <strong>Digital Growth</strong> or <strong>Vertical Growth Marketing</strong></li>
            </ul>
        </div>
        
        <!-- Next Steps -->
        <div class="cta-box">
            <h2 style="margin-bottom: 1rem; font-size: 2rem;">Ready to Get Online?</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.95;">
                Launch your professional digital presence in 14 days. No technical knowledge required.
            </p>
            <a href="https://erp.aoplus.in/book-consultation/new" target="_blank" rel="noopener noreferrer" class="btn-primary">📞 Book Free Consultation</a>
            <a href="#" class="btn-primary" style="background: transparent; border: 2px solid white; color: white;">📥 Download Detailed PDF</a>
        </div>
    </div>
</div>
`;

export default function DigitalLaunchpadGuidePage() {
    return (
        <div dangerouslySetInnerHTML={{ __html: guideHtml }} />
    );
}
