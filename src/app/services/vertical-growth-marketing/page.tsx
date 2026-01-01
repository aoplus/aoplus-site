
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vertical Growth Marketing | AO+ Solutions",
    description: "Full-funnel digital marketing services including paid advertising, content, email, and WhatsApp automation to scale your revenue.",
};

const guideHtml = `
<style>
    .erp-section { padding: 3rem 2rem; max-width: 1000px; margin: 0 auto; }
    @media (max-width: 768px) { .erp-section { padding: 2rem 1rem; } }
    .hero { background: linear-gradient(135deg, #EC4899, #8B5CF6); color: white; padding: 4rem 2rem; text-align: center; border-radius: 15px; margin-bottom: 3rem; }
    .hero h1 { font-size: 2.8rem; margin-bottom: 0.5rem; font-weight: 700; }
    .hero .tagline { font-size: 1.3rem; opacity: 0.95; margin-bottom: 2rem; }
    .hero .price { font-size: 3rem; font-weight: 700; margin: 1rem 0; }
    .section-box { background: white; padding: 2.5rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); margin-bottom: 2rem; }
    .section-box h2 { color: #EC4899; font-size: 2rem; margin-bottom: 1.5rem; }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }
    .included-box { background: #FDF2F8; border-left: 5px solid #EC4899; padding: 1.5rem; border-radius: 8px; }
    ul { list-style: none; padding: 0; }
    ul li { padding: 0.6rem 0; padding-left: 1.8rem; position: relative; color: #555; line-height: 1.6; }
    ul li:before { content: "✓"; position: absolute; left: 0; color: #EC4899; font-weight: bold; font-size: 1.2rem; }
    .price-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
    .price-table th { background: #FDF2F8; padding: 1rem; text-align: left; color: #EC4899; font-weight: 600; }
    .price-table td { padding: 1rem; border-bottom: 1px solid #E5E7EB; }
    .cta-box { background: linear-gradient(135deg, #EC4899, #8B5CF6); color: white; padding: 3rem 2rem; border-radius: 15px; text-align: center; margin-top: 3rem; }
    .btn-primary { display: inline-block; padding: 1rem 2.5rem; background: white; color: #EC4899; border-radius: 50px; text-decoration: none; font-weight: 600; margin: 0.5rem; }
    .back-link { display: inline-block; color: #EC4899; text-decoration: none; font-weight: 600; margin-bottom: 2rem; }
</style>

<div class="erp-section">
    <a href="/services" class="back-link">← Back to All Packages</a>
</div>

<div class="hero">
    <h1>Vertical Growth Marketing</h1>
    <div class="tagline">Full-funnel digital marketing to scale your revenue</div>
    <div class="price">₹4,999/mo onwards</div>
    <div class="price-note" style="font-size: 1.1rem; opacity: 0.9;">Excludes ad spend | 3-month minimum</div>
</div>

<div class="erp-section">
    <div class="section-box">
        <h2>📦 Standard Package (₹4,999/mo)</h2>
        <p style="color: #666; margin-bottom: 2rem;">Complete marketing execution across channels</p>
        
        <div class="two-col">
            <div class="included-box">
                <h4 style="color: #EC4899; margin-bottom: 1rem;">Paid Advertising</h4>
                <ul>
                    <li>Facebook/Instagram Ads management</li>
                    <li>Ad spend handled: up to ₹25k/month</li>
                    <li>Campaign setup & targeting strategy</li>
                    <li>Creative design (3 variations/month)</li>
                    <li>A/B testing & optimization</li>
                    <li>Weekly performance review</li>
                    <li>ROAS tracking & reporting</li>
                </ul>
                <div style="background: #FEF2F2; padding: 0.8rem; border-radius: 5px; margin-top: 1rem; font-size: 0.85rem;">
                    <strong>Note:</strong> Ad spend paid directly to Facebook. Our ₹4,999 is for management only.
                </div>
            </div>
            
            <div class="included-box">
                <h4 style="color: #EC4899; margin-bottom: 1rem;">Content & Organic</h4>
                <ul>
                    <li>20 social media posts/month (designed)</li>
                    <li>2 platforms (aligned with paid ads)</li>
                    <li>Content calendar</li>
                    <li>Hashtag strategy</li>
                    <li>Engagement monitoring</li>
                </ul>
            </div>
        </div>
        
        <div class="two-col" style="margin-top: 1.5rem;">
            <div class="included-box">
                <h4 style="color: #EC4899; margin-bottom: 1rem;">Email Marketing</h4>
                <ul>
                    <li>1 email campaign/week (4/month)</li>
                    <li>Email template design</li>
                    <li>List management & segmentation</li>
                    <li>Open rate & click tracking</li>
                    <li>Automated sequences (welcome, abandoned cart)</li>
                </ul>
            </div>
            
            <div class="included-box">
                <h4 style="color: #EC4899; margin-bottom: 1rem;">WhatsApp Automation</h4>
                <ul>
                    <li>WhatsApp Business API setup</li>
                    <li>Automated welcome messages</li>
                    <li>Order status notifications</li>
                    <li>Abandoned cart recovery (if e-commerce)</li>
                    <li>Broadcast messaging (promotional)</li>
                </ul>
            </div>
        </div>
        
        <div style="background: #F0FDF4; border-left: 4px solid #10B981; padding: 1rem; border-radius: 5px; margin-top: 2rem;">
            <strong>Comprehensive Reporting:</strong> Monthly analytics covering all channels—ROAS, CAC, conversion rate, email performance, social engagement. One dashboard, complete picture.
        </div>
    </div>
    
    <div class="section-box">
        <h2>🎯 Perfect For</h2>
        <ul>
            <li><strong>B2C Brands:</strong> Fashion, F&B, beauty, lifestyle products</li>
            <li><strong>E-commerce Businesses:</strong> Shopify, WooCommerce, Amazon sellers</li>
            <li><strong>D2C Brands:</strong> Direct-to-consumer product companies</li>
            <li><strong>Service Providers:</strong> Ready to invest in customer acquisition</li>
            <li><strong>Budget: ₹30-80k/month</strong> total marketing spend (₹25-75k ads + ₹5k management)</li>
            <li><strong>Goal:</strong> Revenue growth through paid acquisition + nurturing</li>
        </ul>
        
        <div style="background: #FEF2F2; border-left: 4px solid #EF4444; padding: 1rem; border-radius: 5px; margin-top: 1.5rem;">
            <strong style="color: #EF4444;">Not For:</strong> Businesses not ready to spend ₹25k+ monthly on ads, or those wanting only organic social media (choose Digital Growth instead).
        </div>
    </div>
    
    <div class="section-box">
        <h2>🔧 Add-Ons & Pricing Increases</h2>
        
        <table class="price-table">
            <thead>
                <tr><th>Add-On</th><th>Monthly Cost</th><th>What You Get</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Higher Ad Spend Management</strong> (₹50k-1L)</td><td>+₹3,000/mo</td><td>Manage larger ad budgets</td></tr>
                <tr><td><strong>Google Ads</strong> (Search + Display)</td><td>+₹4,000/mo</td><td>Google Ads campaign management</td></tr>
                <tr><td><strong>Influencer Marketing</strong> (4 partnerships/month)</td><td>+₹5,000/mo</td><td>Identify, negotiate, manage influencers</td></tr>
                <tr><td><strong>Landing Page Optimization</strong></td><td>+₹3,000/mo</td><td>A/B test landing pages, CRO</td></tr>
                <tr><td><strong>Video Ads Production</strong> (2/month)</td><td>+₹8,000/mo</td><td>Professional video ad creation</td></tr>
                <tr><td><strong>SMS Marketing</strong> (5k SMS/month)</td><td>+₹2,000/mo</td><td>Promotional SMS campaigns</td></tr>
                <tr><td><strong>Dedicated Account Manager</strong></td><td>+₹10,000/mo</td><td>Direct access, weekly strategy calls</td></tr>
            </tbody>
        </table>
        
        <div style="background: #FDF2F8; border-left: 4px solid #EC4899; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
            <h4 style="color: #EC4899; margin-bottom: 0.5rem;">💡 Example: E-commerce Brand</h4>
            <p style="color: #666; font-size: 0.95rem; margin-bottom: 1rem;">
                Standard + Google Ads + Influencer Marketing + Video Ads
            </p>
            <div style="font-weight: 700; color: #374151; margin-bottom: 0.5rem;">
                Management Fee: ₹21,999/month
            </div>
            <p style="color: #666; font-size: 0.85rem;">
                Plus ₹75k ad spend = ₹97k total monthly investment for comprehensive growth marketing
            </p>
        </div>
    </div>
    
    <div class="section-box">
        <h2>📊 Expected Results</h2>
        
        <h3 style="color: #374151; font-size: 1.2rem; margin-bottom: 1rem;">Typical Performance Metrics (Month 3+):</h3>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
            <div style="background: #FDF2F8; padding: 1.5rem; border-radius: 10px; text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #EC4899;">400-600%</div>
                <div style="color: #666; font-size: 0.9rem;">ROAS</div>
                <div style="color: #999; font-size: 0.75rem; margin-top: 0.3rem;">Return on Ad Spend</div>
            </div>
            <div style="background: #FDF2F8; padding: 1.5rem; border-radius: 10px; text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #EC4899;">₹400-800</div>
                <div style="color: #666; font-size: 0.9rem;">CAC</div>
                <div style="color: #999; font-size: 0.75rem; margin-top: 0.3rem;">Customer Acquisition Cost</div>
            </div>
            <div style="background: #FDF2F8; padding: 1.5rem; border-radius: 10px; text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #EC4899;">2-5%</div>
                <div style="color: #666; font-size: 0.9rem;">Conversion</div>
                <div style="color: #999; font-size: 0.75rem; margin-top: 0.3rem;">Website Conversion Rate</div>
            </div>
        </div>
        
        <div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 1rem; border-radius: 5px;">
            <strong>Month-over-Month Growth:</strong> 15-30% revenue increase typical in first 3 months with consistent execution and budget.
        </div>
    </div>
    
    <div class="section-box">
        <h2>✨ Case Study: Aanya Fashions</h2>
        
        <div style="background: #F7FAFC; padding: 2rem; border-radius: 10px;">
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: #EC4899; margin-bottom: 0.5rem;">Company: Aanya Fashions (Women's Ethnic Wear)</h4>
                <p style="color: #666; font-size: 0.95rem;">
                    New D2C brand launched January 2024. Zero brand awareness. ₹15L initial capital.
                </p>
            </div>
            
            <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h4 style="color: #EC4899; margin-bottom: 1rem;">Strategy Implemented:</h4>
                <ul style="font-size: 0.95rem;">
                    <li>Phase 1: Instagram influencer seeding (15 micro-influencers)</li>
                    <li>Phase 2: Facebook/Instagram ads using influencer content</li>
                    <li>Phase 3: WhatsApp cart abandonment (38% recovery rate)</li>
                    <li>Email nurture sequences</li>
                </ul>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div style="background: #F0FDF4; padding: 1rem; border-radius: 8px;">
                    <div style="font-size: 0.85rem; color: #666;">Q1 Revenue (3 months)</div>
                    <div style="font-size: 1.8rem; font-weight: 700; color: #10B981;">₹32.2L</div>
                </div>
                <div style="background: #F0FDF4; padding: 1rem; border-radius: 8px;">
                    <div style="font-size: 0.85rem; color: #666;">ROAS</div>
                    <div style="font-size: 1.8rem; font-weight: 700; color: #10B981;">580%</div>
                </div>
                <div style="background: #F0FDF4; padding: 1rem; border-radius: 8px;">
                    <div style="font-size: 0.85rem; color: #666;">Instagram Followers</div>
                    <div style="font-size: 1.8rem; font-weight: 700; color: #10B981;">12,400</div>
                    <div style="font-size: 0.75rem; color: #999;">From 0 in 90 days</div>
                </div>
                <div style="background: #F0FDF4; padding: 1rem; border-radius: 8px;">
                    <div style="font-size: 0.85rem; color: #666;">Ad Spend</div>
                    <div style="font-size: 1.8rem; font-weight: 700; color: #10B981;">₹5.5L</div>
                    <div style="font-size: 0.75rem; color: #999;">Total Q1</div>
                </div>
            </div>
            
            <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                <p style="color: #666; font-style: italic;">
                    "We had zero customers on Day 1. Vertical Growth Marketing got us to ₹32 lakh revenue in Q1. The WhatsApp automation alone recovered 38% of abandoned carts. Best investment we made."
                </p>
                <div style="color: #999; font-size: 0.9rem; margin-top: 0.5rem;">
                    — Neha Sharma, Founder | Package: Vertical Growth + Influencer Marketing (₹9,999/mo)
                </div>
            </div>
        </div>
    </div>
    
    <div class="section-box">
        <h2>⚠️ What's NOT Included</h2>
        <ul style="color: #666;">
            <li><strong>Ad Spend:</strong> You pay Meta/Google directly. We manage campaigns.</li>
            <li><strong>Website Development:</strong> You need functioning website/e-commerce. We optimize, don't build.</li>
            <li><strong>Product Photography:</strong> High-quality product images needed before starting ads.</li>
            <li><strong>Influencer Fees:</strong> If adding influencer marketing, their fees separate from our management.</li>
            <li><strong>Premium Tools:</strong> Standard uses free/basic tools. Want advanced (Klaviyo, Segment)? Quoted separately.</li>
        </ul>
    </div>
    
    <div class="cta-box">
        <h2 style="margin-bottom: 1rem;">Ready to Scale with Paid Marketing?</h2>
        <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.95;">
            Book a free marketing audit. We'll review your current efforts and show you growth opportunities.
        </p>
        <a href="https://erp.aoplus.in/book-consultation/new" class="btn-primary">📞 Book Free Audit</a>
        <a href="#" class="btn-primary" style="background: transparent; border: 2px solid white; color: white;">📥 Download Guide</a>
    </div>
</div>
`;

export default function VerticalGrowthMarketingPage() {
    return (
        <div dangerouslySetInnerHTML={{ __html: guideHtml }} />
    );
}
