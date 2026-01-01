
import type { Metadata } from "next";
import Head from 'next/head';

export const metadata: Metadata = {
    title: "MSME Growth Engine - Premium ERPNext ERP Implementation | AO+ Solutions",
    description: "Premium ERPNext transformation with guaranteed ROI. From chaos to clarity in 45-60 days.",
};

export default function MsmeGrowthEnginePage() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>
            <style jsx global>{`
                .service-hero.msme-engine {
                  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                  padding: 100px 0 80px;
                }

                .badge-premium {
                  display: inline-block;
                  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                  color: white;
                  padding: 0.5rem 1.25rem;
                  border-radius: 20px;
                  font-size: 16px;
                  font-weight: 700;
                  margin-bottom: 1rem;
                  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
                }

                .service-hero h1 {
                  font-size: 56px;
                  font-weight: 800;
                  color: #78350f;
                  margin-bottom: 1rem;
                }

                .pricing-hero {
                  display: flex;
                  align-items: center;
                  gap: 1rem;
                  margin: 2rem 0;
                }

                .price-tag {
                  display: flex;
                  flex-direction: column;
                }

                .setup-price {
                  font-size: 44px;
                  font-weight: 800;
                  color: #78350f;
                  line-height: 1;
                }

                .monthly-price {
                  font-size: 36px;
                  font-weight: 800;
                  color: #f59e0b;
                  line-height: 1;
                }

                .price-tag .label {
                  font-size: 14px;
                  color: #6b7280;
                  margin-top: 0.25rem;
                }

                .plus {
                  font-size: 24px;
                  color: #9ca3af;
                }

                .hero-cta {
                  display: flex;
                  gap: 1rem;
                  margin-bottom: 1.5rem;
                }

                .trust-badges {
                  display: flex;
                  gap: 1.5rem;
                  flex-wrap: wrap;
                }

                .trust-badges span {
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                  color: #374151;
                }

                .trust-badges i {
                  color: #f59e0b;
                }

                .premium-features {
                  padding: 80px 0;
                }

                .premium-card {
                  background: white;
                  border: 2px solid #fde68a;
                  border-radius: 12px;
                  padding: 2rem;
                  height: 100%;
                  transition: all 0.3s;
                }

                .premium-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 12px 32px rgba(245, 158, 11, 0.3);
                  border-color: #f59e0b;
                }

                .premium-icon {
                  color: #f59e0b;
                  margin-bottom: 1rem;
                }

                .premium-card h4 {
                  font-size: 20px;
                  font-weight: 700;
                  color: #78350f;
                  margin-bottom: 1rem;
                }

                .premium-card p {
                  color: #92400e;
                  font-size: 14px;
                  margin: 0;
                }


                .roi-highlight {
                  display: flex;
                  gap: 3rem;
                  margin: 2rem 0;
                  padding: 2rem;
                  background: white;
                  border-radius: 12px;
                  border: 3px solid #f59e0b;
                }

                .roi-stat {
                  display: flex;
                  flex-direction: column;
                }

                .roi-number {
                  font-size: 40px;
                  font-weight: 800;
                  color: #f59e0b;
                  line-height: 1;
                  margin-bottom: 0.5rem;
                }

                .roi-label {
                  font-size: 14px;
                  color: #78350f;
                  font-weight: 600;
                }

                .value-box {
                  background: white;
                  border: 3px solid #f59e0b;
                  border-radius: 16px;
                  padding: 2rem;
                  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3);
                }

                .value-box h3 {
                  font-size: 24px;
                  font-weight: 700;
                  color: #78350f;
                  margin-bottom: 1.5rem;
                }

                .value-item {
                  display: flex;
                  gap: 1rem;
                  padding: 1rem 0;
                  border-bottom: 1px solid #fef3c7;
                }

                .value-icon {
                  font-size: 32px;
                }

                .value-item strong {
                  font-size: 20px;
                  color: #78350f;
                  display: block;
                }

                .value-item p {
                  font-size: 14px;
                  color: #92400e;
                  margin: 0;
                }

                .total-value {
                  margin-top: 1.5rem;
                  padding-top: 1.5rem;
                  border-top: 3px solid #f59e0b;
                  text-align: center;
                }

                .total-value strong {
                  font-size: 24px;
                  color: #f59e0b;
                }

                .implementation-timeline {
                  padding: 80px 0;
                }

                .phase-timeline {
                  max-width: 1100px;
                  margin: 0 auto;
                }

                .phase-block {
                  background: white;
                  border: 2px solid #e5e7eb;
                  border-radius: 16px;
                  margin-bottom: 2rem;
                  overflow: hidden;
                }

                .phase-header {
                  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                  color: white;
                  padding: 1.5rem 2rem;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .phase-number {
                  font-size: 14px;
                  font-weight: 700;
                  background: rgba(255,255,255,0.3);
                  padding: 0.5rem 1rem;
                  border-radius: 20px;
                }

                .phase-header h3 {
                  font-size: 24px;
                  font-weight: 700;
                  margin: 0;
                  flex: 1;
                  padding: 0 2rem;
                }

                .phase-duration {
                  font-size: 14px;
                  font-weight: 600;
                  background: rgba(255,255,255,0.3);
                  padding: 0.5rem 1rem;
                  border-radius: 20px;
                }

                .phase-content {
                  padding: 2rem;
                }

                .phase-content h5 {
                  font-size: 18px;
                  font-weight: 700;
                  color: #78350f;
                  margin-bottom: 1rem;
                }

                .phase-content ul {
                  list-style: none;
                  padding: 0;
                }

                .phase-content li {
                  padding: 0.5rem 0;
                  color: #374151;
                  padding-left: 1.5rem;
                  position: relative;
                  font-size: 14px;
                }

                .phase-content li::before {
                  content: "✓";
                  position: absolute;
                  left: 0;
                  color: #f59e0b;
                  font-weight: 700;
                }

                .time-total {
                  margin-top: 1rem;
                  padding-top: 1rem;
                  border-top: 2px solid #fef3c7;
                  color: #f59e0b;
                  font-size: 16px;
                }

                .timeline-summary {
                  background: white;
                  border: 3px solid #f59e0b;
                  border-radius: 12px;
                  padding: 2rem;
                  text-align: center;
                  margin-top: 3rem;
                }

                .timeline-summary h4 {
                  font-size: 24px;
                  font-weight: 700;
                  color: #78350f;
                  margin-bottom: 1rem;
                }

                .timeline-summary p {
                  font-size: 16px;
                  color: #92400e;
                  margin: 0.5rem 0;
                }

                .roi-section {
                  padding: 80px 0;
                  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                }

                .roi-calculator-box {
                  background: white;
                  border: 3px solid #10b981;
                  border-radius: 16px;
                  padding: 3rem;
                  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.2);
                }

                .roi-calculator-box h3 {
                  font-size: 28px;
                  font-weight: 700;
                  color: #065f46;
                  margin-bottom: 2rem;
                  text-align: center;
                }

                .roi-breakdown {
                  display: grid;
                  grid-template-columns: 1fr auto 1fr;
                  gap: 2rem;
                  margin-bottom: 2rem;
                }

                .roi-item {
                  display: flex;
                  flex-direction: column;
                }

                .roi-label {
                  font-size: 18px;
                  font-weight: 700;
                  color: #374151;
                  margin-bottom: 1rem;
                }

                .roi-value {
                  background: #f9fafb;
                  border-radius: 12px;
                  padding: 1.5rem;
                }

                .calculation {
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                  margin-bottom: 1rem;
                }

                .calculation span {
                  font-size: 14px;
                  color: #6b7280;
                }

                .total {
                  font-size: 24px;
                  font-weight: 800;
                  padding-top: 1rem;
                  border-top: 2px solid #e5e7eb;
                }

                .roi-value.investment .total {
                  color: #dc2626;
                }

                .roi-value.returns .total {
                  color: #10b981;
                }

                .roi-divider {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  font-weight: 700;
                  color: #6b7280;
                }

                .roi-result {
                  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                  color: white;
                  border-radius: 12px;
                  padding: 2rem;
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 2rem;
                  margin-bottom: 2rem;
                }

                .result-item {
                  display: flex;
                  flex-direction: column;
                  text-align: center;
                }

                .result-label {
                  font-size: 14px;
                  opacity: 0.9;
                  margin-bottom: 0.5rem;
                }

                .result-value {
                  font-size: 32px;
                  font-weight: 800;
                  line-height: 1;
                }

                .roi-note {
                  background: #f0fdf4;
                  border: 2px solid #10b981;
                  border-radius: 12px;
                  padding: 1.5rem;
                  text-align: center;
                }

                .roi-note p {
                  margin: 0.5rem 0;
                  color: #065f46;
                  font-size: 16px;
                }

                .case-study-examples {
                  margin-top: 3rem;
                }

                .case-study-examples h4 {
                  font-size: 24px;
                  font-weight: 700;
                  color: #374151;
                  margin-bottom: 1.5rem;
                }

                .case-example {
                  background: white;
                  border: 2px solid #e5e7eb;
                  border-radius: 12px;
                  padding: 1.5rem;
                  margin-bottom: 1.5rem;
                }

                .case-header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 1rem;
                  padding-bottom: 1rem;
                  border-bottom: 2px solid #f3f4f6;
                }

                .case-industry {
                  font-size: 18px;
                  font-weight: 700;
                  color: #374151;
                }

                .case-roi {
                  background: #10b981;
                  color: white;
                  padding: 0.5rem 1rem;
                  border-radius: 20px;
                  font-size: 14px;
                  font-weight: 700;
                }

                .case-example p {
                  font-size: 14px;
                  color: #6b7280;
                  margin: 0.5rem 0;
                }

                .case-example strong {
                  color: #374151;
                }

                .included-section {
                  padding: 80px 0;
                }

                .included-grid {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 2rem;
                  max-width: 1100px;
                  margin: 0 auto;
                }

                .included-category {
                  background: white;
                  border: 2px solid #e5e7eb;
                  border-radius: 12px;
                  padding: 2rem;
                }

                .included-category h4 {
                  font-size: 22px;
                  font-weight: 700;
                  color: #374151;
                  margin-bottom: 1.5rem;
                }

                .included-category ul {
                  list-style: none;
                  padding: 0;
                }

                .included-category li {
                  padding: 0.75rem 0;
                  color: #6b7280;
                  border-bottom: 1px solid #f3f4f6;
                  padding-left: 1.5rem;
                  position: relative;
                }

                .included-category li::before {
                  content: "✓";
                  position: absolute;
                  left: 0;
                  color: #f59e0b;
                  font-weight: 700;
                }

                .target-audience {
                  padding: 80px 0;
                }

                .audience-card {
                  background: white;
                  border: 2px solid #e5e7eb;
                  border-radius: 12px;
                  padding: 2rem;
                  height: 100%;
                }

                .audience-card.ideal {
                  border-color: #f59e0b;
                }

                .audience-card.not-ideal {
                  border-color: #ef4444;
                }

                .audience-card h3 {
                  font-size: 24px;
                  font-weight: 700;
                  margin-bottom: 1.5rem;
                }

                .ideal h3 {
                  color: #f59e0b;
                }

                .not-ideal h3 {
                  color: #ef4444;
                }

                .audience-card ul {
                  list-style: none;
                  padding: 0;
                }

                .audience-card li {
                  padding: 0.75rem 0;
                  color: #374151;
                  border-bottom: 1px solid #f3f4f6;
                }

                .alternative {
                  margin-top: 2rem;
                  padding-top: 2rem;
                  border-top: 2px solid #fee2e2;
                }

                .faq-section {
                  padding: 80px 0;
                }

                .faq-item {
                  background: white;
                  border: 2px solid #e5e7eb;
                  border-radius: 12px;
                  padding: 2rem;
                  margin-bottom: 1.5rem;
                }

                .faq-item h5 {
                  font-size: 18px;
                  font-weight: 700;
                  color: #374151;
                  margin-bottom: 1rem;
                }

                .faq-item p {
                  color: #6b7280;
                  margin: 0.5rem 0;
                }

                .cta-section {
                  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                  color: white;
                  padding: 80px 0;
                }

                .cta-section h2 {
                  font-size: 36px;
                  font-weight: 800;
                  margin-bottom: 1rem;
                }

                .cta-section .btn-primary {
                  background: white;
                  color: #f59e0b;
                  border: none;
                  font-size: 18px;
                  padding: 1rem 2rem;
                }

                .cta-section .btn-primary:hover {
                  background: #fef3c7;
                  transform: translateY(-3px);
                }

                .cta-section a {
                  color: white;
                }

                .guarantee-badge {
                  display: inline-flex;
                  align-items: center;
                  gap: 0.75rem;
                  background: rgba(255,255,255,0.2);
                  padding: 1rem 2rem;
                  border-radius: 30px;
                  margin-top: 2rem;
                  font-weight: 700;
                  font-size: 18px;
                }

                .bg-light { background-color: hsl(var(--muted)); }
                .lead { font-size: 1.25rem; font-weight: 300; color: hsl(var(--muted-foreground)); }
                .container { width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; }
                @media (min-width: 1200px) { .container { max-width: 1140px; } }
                .row { display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px; }
                .col-lg-6, .col-md-6 { position: relative; width: 100%; padding-right: 15px; padding-left: 15px; }
                @media (min-width: 768px) { .col-md-6 { flex: 0 0 50%; max-width: 50%; } }
                @media (min-width: 992px) { .col-lg-6 { flex: 0 0 50%; max-width: 50%; } }
                .col-lg-4 { position: relative; width: 100%; padding-right: 15px; padding-left: 15px; }
                @media (min-width: 992px) { .col-lg-4 { flex: 0 0 33.333333%; max-width: 33.333333%; } }
                .col-lg-8, .col-lg-10 { position: relative; width: 100%; padding-right: 15px; padding-left: 15px; }
                @media (min-width: 992px) { .col-lg-8 { flex: 0 0 66.666667%; max-width: 66.666667%; } .col-lg-10 { flex: 0 0 83.333333%; max-width: 83.333333%; } }
                .align-items-center { align-items: center; }
                .text-center { text-align: center; }
                .mb-5 { margin-bottom: 3rem; }
                .g-4 { gap: 1.5rem; }
                .justify-content-center { justify-content: center; }
                .mt-3 { margin-top: 1rem; }
                .btn { text-decoration: none; display: inline-block; padding: 0.75rem 1.5rem; border-radius: 8px; transition: all 0.2s; }
                .btn-lg { padding: 1rem 2rem; font-size: 1.1rem; }
                .btn-primary { background-color: #f59e0b; color: white; }
                .btn-outline-primary { border: 2px solid #f59e0b; color: #f59e0b; }
                .btn-outline-primary:hover { background-color: #f59e0b; color: white; }
                .img-fluid { max-width: 100%; height: auto; }


                @media (max-width: 768px) {
                  .service-hero h1 { font-size: 36px; }
                  .pricing-hero { flex-direction: column; align-items: flex-start; }
                  .roi-highlight { flex-direction: column; gap: 1rem; }
                  .hero-cta { flex-direction: column; width: 100%; }
                  .hero-cta .btn { width: 100%; }
                  .phase-header { flex-direction: column; gap: 1rem; }
                  .phase-header h3 { padding: 0; }
                  .roi-breakdown { grid-template-columns: 1fr; }
                  .roi-divider { transform: rotate(90deg); }
                  .roi-result { grid-template-columns: 1fr; }
                  .included-grid { grid-template-columns: 1fr; }
                }
            `}</style>
            <section className="service-hero msme-engine">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <span className="badge-premium">⭐ Most Popular</span>
                    <h1>MSME Growth Engine</h1>
                    <p className="lead">
                      Complete ERPNext transformation with guaranteed ROI. From chaos to clarity in 45-60 days.
                    </p>
                    <div className="pricing-hero">
                      <div className="price-tag">
                        <span className="setup-price">₹1,50,000</span>
                        <span className="label">one-time implementation</span>
                      </div>
                      <div className="plus">+</div>
                      <div className="price-tag">
                        <span className="monthly-price">₹20,000</span>
                        <span className="label">per month support</span>
                      </div>
                    </div>
                    <div className="roi-highlight">
                      <div className="roi-stat">
                        <span className="roi-number">483%</span>
                        <span className="roi-label">Average ROI in Year 1</span>
                      </div>
                      <div className="roi-stat">
                        <span className="roi-number">2.5 months</span>
                        <span className="roi-label">Typical Payback Period</span>
                      </div>
                    </div>
                    <div className="hero-cta">
                      <a href="https://erp.aoplus.in/book-consultation/new" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                        <i className="fa fa-calendar-check"></i> Schedule Free Demo
                      </a>
                      <a href="#roi-calculator" className="btn btn-outline-primary btn-lg">
                        Calculate Your ROI
                      </a>
                    </div>
                    <div className="trust-badges">
                      <span><i className="fa fa-check-circle"></i> 45-60 Day Implementation</span>
                      <span><i className="fa fa-check-circle"></i> Dedicated Project Manager</span>
                      <span><i className="fa fa-check-circle"></i> 90-Day Guarantee</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="value-box">
                      <h3>What You'll Save/Gain:</h3>
                      <div className="value-item">
                        <span className="value-icon">💰</span>
                        <div>
                          <strong>₹4.8L/year</strong>
                          <p>Time savings (40hrs/week × ₹1000/hr)</p>
                        </div>
                      </div>
                      <div className="value-item">
                        <span className="value-icon">📦</span>
                        <div>
                          <strong>₹7L/year</strong>
                          <p>Inventory optimization</p>
                        </div>
                      </div>
                      <div className="value-item">
                        <span className="value-icon">💳</span>
                        <div>
                          <strong>₹1.5L/year</strong>
                          <p>Cash flow improvement</p>
                        </div>
                      </div>
                      <div className="value-item">
                        <span className="value-icon">✅</span>
                        <div>
                          <strong>₹1.2L/year</strong>
                          <p>Compliance & error reduction</p>
                        </div>
                      </div>
                      <div className="total-value">
                        <strong>Total Annual Benefit: ₹21L+</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="premium-features">
              <div className="container">
                <h2 className="text-center mb-5">Why Choose MSME Growth Engine?</h2>
                <div className="row g-4">
                  
                  <div className="col-lg-4 col-md-6">
                    <div className="premium-card">
                      <div className="premium-icon">
                        <i className="fa fa-user-tie fa-2x"></i>
                      </div>
                      <h4>Dedicated Project Manager</h4>
                      <p>Single point of contact throughout implementation. Weekly status calls. 24/7 WhatsApp support.</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6">
                    <div className="premium-card">
                      <div className="premium-icon">
                        <i className="fa fa-cogs fa-2x"></i>
                      </div>
                      <h4>Custom Workflows</h4>
                      <p>We adapt ERPNext to YOUR process, not the other way around. Approval hierarchies, automated alerts, custom reports.</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6">
                    <div className="premium-card">
                      <div className="premium-icon">
                        <i className="fa fa-database fa-2x"></i>
                      </div>
                      <h4>Complete Data Migration</h4>
                      <p>We migrate ALL your data from Excel/Tally/existing system. Opening balances, historical transactions, everything.</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6">
                    <div className="premium-card">
                      <div className="premium-icon">
                        <i className="fa fa-graduation-cap fa-2x"></i>
                      </div>
                      <h4>Comprehensive Training</h4>
                      <p>40 hours of hands-on training. User manuals. Video tutorials. Train-the-trainer program.</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6">
                    <div className="premium-card">
                      <div className="premium-icon">
                        <i className="fa fa-headset fa-2x"></i>
                      </div>
                      <h4>Priority Support</h4>
                      <p>4-hour response time. Dedicated support engineer. Monthly optimization calls. Free minor customizations.</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6">
                    <div className="premium-card">
                      <div className="premium-icon">
                        <i className="fa fa-shield-alt fa-2x"></i>
                      </div>
                      <h4>90-Day Guarantee</h4>
                      <p>If no measurable improvement in 90 days, Month 4 is FREE. We're that confident.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>

            <section className="implementation-timeline bg-light">
              <div className="container">
                <h2 className="text-center mb-5">Your 45-60 Day Transformation Journey</h2>
                
                <div className="phase-timeline">
                  
                  <div className="phase-block">
                    <div className="phase-header">
                      <span className="phase-number">Phase 1</span>
                      <h3>Week 1-2: Discovery & Design</h3>
                      <span className="phase-duration">10 days</span>
                    </div>
                    <div className="phase-content">
                      <div className="row">
                        <div className="col-md-6">
                          <h5>What We Do:</h5>
                          <ul>
                            <li>Kickoff meeting at your office</li>
                            <li>Process mapping (sales, purchase, inventory, accounts)</li>
                            <li>Requirements documentation</li>
                            <li>System design & customization plan</li>
                            <li>Data migration strategy</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h5>Your Time Investment:</h5>
                          <ul>
                            <li>Kickoff meeting: 3 hours</li>
                            <li>Process interviews: 8-10 hours</li>
                            <li>Requirements review: 2 hours</li>
                          </ul>
                          <p className="time-total"><strong>Total: 15 hours</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="phase-block">
                    <div className="phase-header">
                      <span className="phase-number">Phase 2</span>
                      <h3>Week 3-4: System Configuration</h3>
                      <span className="phase-duration">10 days</span>
                    </div>
                    <div className="phase-content">
                      <div className="row">
                        <div className="col-md-6">
                          <h5>What We Do:</h5>
                          <ul>
                            <li>ERPNext installation & configuration</li>
                            <li>Chart of accounts setup (GST-compliant)</li>
                            <li>All modules enabled & configured</li>
                            <li>Custom workflows created</li>
                            <li>Print formats designed (invoices, POs, etc.)</li>
                            <li>User roles & permissions</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h5>Your Time Investment:</h5>
                          <ul>
                            <li>Review sessions: 4 hours</li>
                            <li>Testing: 3 hours</li>
                            <li>Feedback: 2 hours</li>
                          </ul>
                          <p className="time-total"><strong>Total: 10 hours</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="phase-block">
                    <div className="phase-header">
                      <span className="phase-number">Phase 3</span>
                      <h3>Week 5-6: Data Migration & Testing</h3>
                      <span className="phase-duration">10 days</span>
                    </div>
                    <div className="phase-content">
                      <div className="row">
                        <div className="col-md-6">
                          <h5>What We Do:</h5>
                          <ul>
                            <li>Customer & supplier master data import</li>
                            <li>Item master with opening stock</li>
                            <li>Opening balances (accounts, inventory)</li>
                            <li>Historical data (optional)</li>
                            <li>User acceptance testing (UAT)</li>
                            <li>Fix issues & refinements</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h5>Your Time Investment:</h5>
                          <ul>
                            <li>Data preparation: 10 hours</li>
                            <li>Data verification: 8 hours</li>
                            <li>UAT testing: 12 hours</li>
                          </ul>
                          <p className="time-total"><strong>Total: 30 hours</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="phase-block">
                    <div className="phase-header">
                      <span className="phase-number">Phase 4</span>
                      <h3>Week 7-8: Training & Go-Live</h3>
                      <span className="phase-duration">10 days</span>
                    </div>
                    <div className="phase-content">
                      <div className="row">
                        <div className="col-md-6">
                          <h5>What We Do:</h5>
                          <ul>
                            <li>Role-based training (40 hours total)</li>
                            <li>Documentation handover</li>
                            <li>Video tutorials created</li>
                            <li>Go-live support (on-site 2 days)</li>
                            <li>Post-go-live monitoring (1 week)</li>
                            <li>Issue resolution</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h5>Your Time Investment:</h5>
                          <ul>
                            <li>Training sessions: 40 hours</li>
                            <li>Go-live support: 16 hours</li>
                            <li>First week operations: 20 hours</li>
                          </ul>
                          <p className="time-total"><strong>Total: 75 hours</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
                <div className="timeline-summary">
                  <h4>Total Project Timeline: 45-60 Days</h4>
                  <p>Your total time investment: <strong>130 hours over 2 months</strong> (avg 16 hours/week)</p>
                  <p>After go-live: <strong>Business as usual</strong> - ERPNext works for you 24/7</p>
                </div>
                
              </div>
            </section>

            <section id="roi-calculator" className="roi-section">
              <div className="container">
                <h2 className="text-center mb-5">Calculate Your ROI</h2>
                
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    
                    <div className="roi-calculator-box">
                      <h3>Conservative ROI Estimate</h3>
                      
                      <div className="roi-breakdown">
                        <div className="roi-item">
                          <div className="roi-label">Year 1 Investment</div>
                          <div className="roi-value investment">
                            <div className="calculation">
                              <span>Setup: ₹1,50,000</span>
                              <span>Monthly (12 months): ₹2,40,000</span>
                            </div>
                            <div className="total">= ₹3,90,000</div>
                          </div>
                        </div>
                        
                        <div className="roi-divider">vs</div>
                        
                        <div className="roi-item">
                          <div className="roi-label">Year 1 Returns (Conservative)</div>
                          <div className="roi-value returns">
                            <div className="calculation">
                              <span>Time Savings: ₹4,80,000</span>
                              <span>Inventory Optimization: ₹7,00,000</span>
                              <span>Cash Flow Improvement: ₹1,50,000</span>
                              <span>Error Reduction: ₹1,50,000</span>
                              <span>Compliance Savings: ₹1,20,000</span>
                              <span>Better Decisions: ₹5,00,000</span>
                            </div>
                            <div className="total">= ₹21,00,000</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="roi-result">
                        <div className="result-item">
                          <span className="result-label">Net Benefit Year 1:</span>
                          <span className="result-value profit">₹17,10,000</span>
                        </div>
                        <div className="result-item">
                          <span className="result-label">ROI:</span>
                          <span className="result-value">438%</span>
                        </div>
                        <div className="result-item">
                          <span className="result-label">Payback Period:</span>
                          <span className="result-value">2.5 months</span>
                        </div>
                      </div>
                      
                      <div className="roi-note">
                        <p><strong>5-Year Projection:</strong></p>
                        <p>Investment: ₹10,80,000 (setup + 5 years support)</p>
                        <p>Returns: ₹1,05,00,000+</p>
                        <p><strong>Net Gain: ₹94,20,000+</strong></p>
                      </div>
                      
                    </div>
                    
                    <div className="case-study-examples">
                      <h4>Real Client Examples:</h4>
                      
                      <div className="case-example">
                        <div className="case-header">
                          <span className="case-industry">Manufacturing (Auto Components)</span>
                          <span className="case-roi">650% ROI</span>
                        </div>
                        <p><strong>Challenge:</strong> ₹11L locked in excess inventory, manual stock tracking, no real-time visibility.</p>
                        <p><strong>Result:</strong> Freed ₹11L in 3 months, reduced stock-outs by 85%, automated reordering.</p>
                      </div>
                      
                      <div className="case-example">
                        <div className="case-header">
                          <span className="case-industry">Trading (Electronics Distribution)</span>
                          <span className="case-roi">420% ROI</span>
                        </div>
                        <p><strong>Challenge:</strong> Month-end closing took 7 days, frequent invoicing errors, no sales analytics.</p>
                        <p><strong>Result:</strong> Month-end in 2 hours, zero errors, sales grew 23% with better insights.</p>
                      </div>
                      
                      <div className="case-example">
                        <div className="case-header">
                          <span className="case-industry">Services (Facilities Management)</span>
                          <span className="case-roi">580% ROI</span>
                        </div>
                        <p><strong>Challenge:</strong> Project costing unclear, resource utilization poor, payroll chaos.</p>
                        <p><strong>Result:</strong> Project margins improved 6%, resource utilization up 40%, automated payroll.</p>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>

            <section className="included-section bg-light">
              <div className="container">
                <h2 className="text-center mb-5">Everything You Get</h2>
                
                <div className="included-grid">
                  
                  <div className="included-category">
                    <h4>🎯 Implementation (₹1,50,000)</h4>
                    <ul>
                      <li>Dedicated project manager (260-290 hours)</li>
                      <li>Discovery & requirements (30-40 hours)</li>
                      <li>System configuration (60-70 hours)</li>
                      <li>Custom workflows & reports</li>
                      <li>Data migration (50-60 hours)</li>
                      <li>User training (40 hours)</li>
                      <li>Go-live support (80 hours)</li>
                      <li>Infrastructure setup</li>
                      <li>GST-compliant print formats</li>
                      <li>Documentation & SOPs</li>
                    </ul>
                  </div>
                  
                  <div className="included-category">
                    <h4>💻 Monthly Support (₹20,000/month)</h4>
                    <ul>
                      <li>Cloud hosting (50GB storage)</li>
                      <li>Unlimited users</li>
                      <li>Technical support (4-hour response)</li>
                      <li>Business support & optimization</li>
                      <li>System maintenance & updates</li>
                      <li>Daily automated backups</li>
                      <li>Security patches</li>
                      <li>Compliance updates (GST, etc.)</li>
                      <li>Monthly review call (1 hour)</li>
                      <li>Minor customizations (up to 2 hours/month)</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </section>

            <section className="target-audience">
              <div className="container">
                <h2 className="text-center mb-5">Is MSME Growth Engine Right for You?</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="audience-card ideal">
                      <h3>✅ Perfect For:</h3>
                      <ul>
                        <li>Established MSMEs (20-100 employees)</li>
                        <li>Annual revenue ₹5Cr-50Cr</li>
                        <li>Multiple departments/locations</li>
                        <li>Complex workflows & approvals</li>
                        <li>Inventory-intensive businesses</li>
                        <li>Ready for serious digital transformation</li>
                        <li>Can invest ₹3.9L in Year 1</li>
                        <li>Have 130+ hours for implementation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="audience-card not-ideal">
                      <h3>❌ Not Right If:</h3>
                      <ul>
                        <li>Very small business (&lt;10 employees)</li>
                        <li>Simple operations (no inventory)</li>
                        <li>Budget &lt;₹30k/month</li>
                        <li>Need implementation in &lt;30 days</li>
                        <li>Not ready for change management</li>
                      </ul>
                      <div className="alternative">
                        <p><strong>Consider instead:</strong></p>
                        <p>→ <a href="/services/it-foundation">IT Foundation</a> (₹24,999/month, faster setup)</p>
                        <p>→ <a href="/services/digital-launchpad">Digital Launchpad</a> (₹1,999/month, very basic)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="faq-section bg-light">
              <div className="container">
                <h2 className="text-center mb-5">Common Questions</h2>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    
                    <div className="faq-item">
                      <h5>What's the difference between this and IT Foundation?</h5>
                      <p><strong>IT Foundation (₹24,999/month):</strong> Standard ERPNext implementation, 30 days, basic customization, email support.</p>
                      <p><strong>MSME Growth Engine (₹1.5L + ₹20k/month):</strong> Premium implementation, 45-60 days, full customization, dedicated PM, priority support, 90-day guarantee, extensive training.</p>
                      <p>Choose this if you need white-glove service and guaranteed results.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h5>Can I pay in installments?</h5>
                      <p>Yes! Payment terms: 50% on signing, 25% at go-live, 25% after 30 days of successful operation.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h5>What happens after 60 days?</h5>
                      <p>Your system is live and your team is trained. We provide ongoing support (₹20k/month) for maintenance, updates, and continuous optimization. We stay with you as your business grows.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h5>What if we need more customization later?</h5>
                      <p>Minor customizations (up to 2 hours/month) are included in monthly fee. Major customizations are charged at ₹5,000-10,000 depending on complexity.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h5>Do you provide on-site support?</h5>
                      <p>Yes! Kickoff meeting and go-live support are on-site (included). Additional on-site visits can be arranged at ₹10,000/day + travel.</p>
                    </div>
                    
                    <div className="faq-item">
                      <h5>What's the 90-day guarantee?</h5>
                      <p>If you don't see measurable improvement in your business operations within 90 days of go-live, we'll give you Month 4 support completely FREE and continue working until you do see results. That's how confident we are.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>

            <section className="cta-section">
              <div className="container text-center">
                <h2>Ready to Transform Your MSME?</h2>
                <p className="lead">Book a free 30-minute demo and see how MSME Growth Engine can deliver 400%+ ROI</p>
                <a href="https://erp.aoplus.in/book-consultation/new" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Schedule Free Demo</a>
                <p className="mt-3"><small>Or call our MSME specialist: <a href="tel:+917977875818">+91 7977875818</a></small></p>
                <div className="guarantee-badge">
                  <i className="fa fa-shield-alt"></i>
                  <span>90-Day Results Guarantee</span>
                </div>
              </div>
            </section>
        </div>
    );
}
