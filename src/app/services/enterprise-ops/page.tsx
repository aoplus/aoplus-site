
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Ops - Buyer's Guide | AO+ Solutions",
    description: "Dedicated ERP management and advanced operational support for large organizations.",
};

const guideHtml = `
<style>
    .erp-section { padding: 3rem 2rem; max-width: 1000px; margin: 0 auto; }
    @media (max-width: 768px) { .erp-section { padding: 2rem 1rem; } }
    .hero { background: linear-gradient(135deg, #7C3AED, #2563EB); color: white; padding: 4rem 2rem; text-align: center; border-radius: 15px; margin-bottom: 3rem; }
    .hero h1 { font-size: 2.8rem; margin-bottom: 0.5rem; font-weight: 700; }
    .hero .tagline { font-size: 1.3rem; opacity: 0.95; margin-bottom: 2rem; }
    .hero .price { font-size: 3rem; font-weight: 700; margin: 1rem 0; }
    .section-box { background: white; padding: 2.5rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); margin-bottom: 2rem; }
    .section-box h2 { color: #7C3AED; font-size: 2rem; margin-bottom: 1.5rem; }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }
    .included-box { background: #F5F3FF; border-left: 5px solid #7C3AED; padding: 1.5rem; border-radius: 8px; }
    ul { list-style: none; padding: 0; }
    ul li { padding: 0.6rem 0; padding-left: 1.8rem; position: relative; color: #555; line-height: 1.6; }
    ul li:before { content: "✓"; position: absolute; left: 0; color: #7C3AED; font-weight: bold; font-size: 1.2rem; }
    .price-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
    .price-table th { background: #F5F3FF; padding: 1rem; text-align: left; color: #7C3AED; font-weight: 600; }
    .price-table td { padding: 1rem; border-bottom: 1px solid #E5E7EB; }
    .cta-box { background: linear-gradient(135deg, #7C3AED, #2563EB); color: white; padding: 3rem 2rem; border-radius: 15px; text-align: center; margin-top: 3rem; }
    .btn-primary { display: inline-block; padding: 1rem 2.5rem; background: white; color: #7C3AED; border-radius: 50px; text-decoration: none; font-weight: 600; margin: 0.5rem; }
    .back-link { display: inline-block; color: #7C3AED; text-decoration: none; font-weight: 600; margin-bottom: 2rem; }
</style>

<div class="erp-section">
    <a href="/services" class="back-link">← Back to All Packages</a>
</div>

<div class="hero">
    <h1>Enterprise Ops</h1>
    <div class="tagline">Dedicated ERP management for large organizations</div>
    <div class="price">₹50,000/mo onwards</div>
    <div class="price-note" style="font-size: 1.1rem; opacity: 0.9;">Annual contract required</div>
</div>

<div class="erp-section">
    <div class="section-box">
        <h2>📦 Standard Package (₹50k/mo)</h2>
        <p style="color: #666; margin-bottom: 2rem;">White-glove ERP management for complex operations</p>
        
        <div class="two-col">
            <div class="included-box">
                <h4 style="color: #7C3AED; margin-bottom: 1rem;">Dedicated Resources</h4>
                <ul>
                    <li><strong>Part-time dedicated ERP administrator</strong> (80 hours/month)</li>
                    <li>Named point of contact (no ticket queues)</li>
                    <li>Direct phone/WhatsApp access</li>
                    <li>Priority 24/7 support (2-hour SLA)</li>
                    <li>Quarterly business review meetings</li>
                    <li>Monthly optimization recommendations</li>
                </ul>
            </div>
            
            <div class="included-box">
                <h4 style="color: #7C3AED; margin-bottom: 1rem;">System Management</h4>
                <ul>
                    <li>Unlimited users</li>
                    <li>Unlimited warehouses/locations</li>
                    <li>Multi-company setup</li>
                    <li>Multi-currency (unlimited)</li>
                    <li>Complex approval workflows</li>
                    <li>Advanced automation</li>
                    <li>Cloud hosting (100GB storage)</li>
                    <li>Daily backups (90-day retention)</li>
                </ul>
            </div>
        </div>
        
        <div class="two-col" style="margin-top: 1.5rem;">
            <div class="included-box">
                <h4 style="color: #7C3AED; margin-bottom: 1rem;">Customization & Development</h4>
                <ul>
                    <li>Unlimited custom fields</li>
                    <li>Unlimited custom reports</li>
                    <li>Custom modules (up to 2 new/year)</li>
                    <li>API integrations</li>
                    <li>Third-party system connections</li>
                    <li>Script customizations</li>
                </ul>
            </div>
            
            <div class="included-box">
                <h4 style="color: #7C3AED; margin-bottom: 1rem;">Ongoing Optimization</h4>
                <ul>
                    <li>Quarterly system audit</li>
                    <li>Performance tuning</li>
                    <li>Process improvement recommendations</li>
                    <li>Ongoing user training</li>
                    <li>Change management support</li>
                    <li>Documentation updates</li>
                </ul>
            </div>
        </div>
        
        <div style="background: #F0FDF4; border-left: 4px solid #10B981; padding: 1rem; border-radius: 5px; margin-top: 2rem;">
            <strong style="color: #10B981;">Think of it as:</strong> Your own in-house ERP team, but at ₹50k/month instead of ₹3-5L/month for full-time employees.
        </div>
    </div>
    
    <div class="section-box">
        <h2>🎯 Perfect For</h2>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: #F5F3FF; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #7C3AED;">
                <h4 style="color: #7C3AED; margin-bottom: 0.5rem;">Company Size</h4>
                <ul style="font-size: 0.95rem;">
                    <li>Revenue: ₹50 Cr+ annually</li>
                    <li>Employees: 200+</li>
                    <li>Multiple entities/companies</li>
                    <li>10+ locations/warehouses</li>
                    <li>International operations</li>
                </ul>
            </div>
            
            <div style="background: #F5F3FF; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #7C3AED;">
                <h4 style="color: #7C3AED; margin-bottom: 0.5rem;">Complexity Indicators</h4>
                <ul style="font-size: 0.95rem;">
                    <li>50+ concurrent users</li>
                    <li>Complex approval hierarchies</li>
                    <li>Custom workflows needed</li>
                    <li>Heavy integration requirements</li>
                    <li>Mission-critical operations</li>
                </ul>
            </div>
        </div>
        
        <h3 style="color: #374151; font-size: 1.2rem; margin-bottom: 1rem;">You Need Enterprise Ops If:</h3>
        <ul style="font-size: 0.95rem;">
            <li>Your ERP downtime costs ₹1L+ per hour</li>
            <li>You need someone who knows your system intimately</li>
            <li>Standard support response times too slow for your operations</li>
            <li>You're constantly requesting customizations</li>
            <li>Your IT team is overwhelmed managing ERP</li>
            <li>Compliance/audit requirements are stringent</li>
        </ul>
    </div>
    
    <div class="section-box">
        <h2>🔧 Add-Ons & Pricing Increases</h2>
        
        <table class="price-table">
            <thead>
                <tr><th>Component</th><th>Monthly Increase</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Full-Time Dedicated Administrator</strong> (160 hrs/month)</td><td>+₹50,000/mo</td></tr>
                <tr><td><strong>On-Premise Deployment</strong> (vs cloud)</td><td>+₹25,000/mo</td></tr>
                <tr><td><strong>Disaster Recovery Setup</strong> (hot standby)</td><td>+₹15,000/mo</td></tr>
                <tr><td><strong>Advanced Security</strong> (penetration testing, SOC2)</td><td>+₹20,000/mo</td></tr>
                <tr><td><strong>Data Analytics Platform</strong> (BI integration)</td><td>+₹15,000/mo</td></tr>
                <tr><td><strong>Additional Storage</strong> (per 100GB)</td><td>+₹5,000/mo</td></tr>
                <tr><td><strong>Dedicated Infrastructure</strong> (non-shared servers)</td><td>+₹30,000/mo</td></tr>
            </tbody>
        </table>
        
        <div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
            <h4 style="color: #3B82F6; margin-bottom: 0.5rem;">💡 Typical Enterprise Configuration</h4>
            <p style="color: #666; font-size: 0.95rem; margin-bottom: 1rem;">
                Standard + On-Premise + Disaster Recovery + Advanced Security
            </p>
            <div style="font-weight: 700; color: #374151;">
                Total: ₹1,10,000/month
            </div>
        </div>
    </div>
    
    <div class="section-box">
        <h2>📋 Service Level Agreement (SLA)</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
            <thead>
                <tr style="background: #F5F3FF;">
                    <th style="padding: 1rem; text-align: left;">Priority Level</th>
                    <th style="padding: 1rem; text-align: center;">Response Time</th>
                    <th style="padding: 1rem; text-align: center;">Resolution Time</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid #E5E7EB;">
                    <td style="padding: 1rem;"><strong>Critical</strong> (System down, data loss)</td>
                    <td style="padding: 1rem; text-align: center; color: #EF4444; font-weight: 600;">30 minutes</td>
                    <td style="padding: 1rem; text-align: center;">2 hours</td>
                </tr>
                <tr style="border-bottom: 1px solid #E5E7EB;">
                    <td style="padding: 1rem;"><strong>High</strong> (Major function broken)</td>
                    <td style="padding: 1rem; text-align: center; color: #F59E0B; font-weight: 600;">2 hours</td>
                    <td style="padding: 1rem; text-align: center;">8 hours</td>
                </tr>
                <tr style="border-bottom: 1px solid #E5E7EB;">
                    <td style="padding: 1rem;"><strong>Medium</strong> (Minor issue, workaround available)</td>
                    <td style="padding: 1rem; text-align: center; color: #3B82F6; font-weight: 600;">4 hours</td>
                    <td style="padding: 1rem; text-align: center;">24 hours</td>
                </tr>
                <tr>
                    <td style="padding: 1rem;"><strong>Low</strong> (Enhancement requests)</td>
                    <td style="padding: 1rem; text-align: center;">8 hours</td>
                    <td style="padding: 1rem; text-align: center;">As scheduled</td>
                </tr>
            </tbody>
        </table>
        
        <div style="background: #FFF9E6; border-left: 4px solid #F59E0B; padding: 1rem; border-radius: 5px; margin-top: 1rem;">
            <strong>Uptime Guarantee:</strong> 99.9% (less than 45 minutes downtime/month). Penalties apply if SLA breached.
        </div>
    </div>
    
    <div class="section-box">
        <h2>🆚 Enterprise Ops vs. Hiring In-House</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background: #F5F3FF;">
                    <th style="padding: 1rem; text-align: left;">Aspect</th>
                    <th style="padding: 1rem; text-align: center;">In-House ERP Team</th>
                    <th style="padding: 1rem; text-align: center;">Enterprise Ops Package</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid #E5E7EB;">
                    <td style="padding: 1rem;"><strong>Monthly Cost</strong></td>
                    <td style="padding: 1rem; text-align: center; color: #EF4444;">₹3-5L+</td>
                    <td style="padding: 1rem; text-align: center; color: #10B981; font-weight: 600;">₹50k</td>
                </tr>
                <tr style="border-bottom: 1px solid #E5E7EB;">
                    <td style="padding: 1rem;"><strong>Expertise</strong></td>
                    <td style="padding: 1rem; text-align: center;">Limited to hired person</td>
                    <td style="padding: 1rem; text-align: center; color: #10B981; font-weight: 600;">Team of specialists</td>
                </tr>
                <tr style="border-bottom: 1px solid #E5E7EB;">
                    <td style="padding: 1rem;"><strong>Availability</strong></td>
                    <td style="padding: 1rem; text-align: center;">Business hours only</td>
                    <td style="padding: 1rem; text-align: center; color: #10B981; font-weight: 600;">24/7 coverage</td>
                </tr>
                <tr style="border-bottom: 1px solid #E5E7EB;">
                    <td style="padding: 1rem;"><strong>Backup</strong></td>
                    <td style="padding: 1rem; text-align: center;">None (single point of failure)</td>
                    <td style="padding: 1rem; text-align: center; color: #10B981; font-weight: 600;">Full team backup</td>
                </tr>
                <tr style="border-bottom: 1px solid #E5E7EB;">
                    <td style="padding: 1rem;"><strong>Latest Features</strong></td>
                    <td style="padding: 1rem; text-align: center;">Depends on person's learning</td>
                    <td style="padding: 1rem; text-align: center; color: #10B981; font-weight: 600;">Always updated</td>
                </tr>
                <tr>
                    <td style="padding: 1rem;"><strong>Recruitment Risk</strong></td>
                    <td style="padding: 1rem; text-align: center;">If they leave, you start over</td>
                    <td style="padding: 1rem; text-align: center; color: #10B981; font-weight: 600;">Zero (we handle)</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="section-box">
        <h2>✨ What Clients Say</h2>
        
        <div style="background: #F7FAFC; padding: 2rem; border-radius: 10px;">
            <p style="color: #666; font-style: italic; margin-bottom: 1rem; font-size: 1.1rem;">
                "We were spending ₹4.5L/month on two full-time ERP admins plus cloud costs. Switched to Enterprise Ops at ₹75k/month (with on-premise add-on). Better service, 24/7 coverage, saved ₹3.75L monthly. No brainer."
            </p>
            <div style="color: #999; font-size: 0.9rem;">
                <strong>— Suresh Ramachandran</strong>, CTO, TechSystems Pvt Ltd<br>
                1,200 employees | 15 locations | ₹180 Cr revenue
            </div>
        </div>
    </div>
    
    <div class="section-box">
        <h2>⚠️ What's NOT Included</h2>
        <ul style="color: #666;">
            <li><strong>Hardware:</strong> Servers, networking equipment (for on-premise, you provide infrastructure)</li>
            <li><strong>Licenses for Third-Party Tools:</strong> MS Office, BI tools, etc.</li>
            <li><strong>Business Process Consulting:</strong> We manage ERP, not redesign your business</li>
            <li><strong>Training for >50 users/quarter:</strong> Large-scale training programs quoted separately</li>
        </ul>
    </div>
    
    <div class="cta-box">
        <h2 style="margin-bottom: 1rem;">Enterprise-Grade ERP Management</h2>
        <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.95;">
            Book a consultation to discuss your specific requirements and get a custom proposal.
        </p>
        <a href="https://erp.aoplus.in/book-consultation/new" class="btn-primary">📞 Book Enterprise Consultation</a>
        <a href="#" class="btn-primary" style="background: transparent; border: 2px solid white; color: white;">📥 Download Guide</a>
    </div>
</div>
`;

export default function EnterpriseOpsGuidePage() {
    return (
        <div dangerouslySetInnerHTML={{ __html: guideHtml }} />
    );
}
