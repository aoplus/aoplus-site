
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IT Foundation - Complete ERPNext ERP Implementation | AO+ Solutions",
    description: "Explore the IT Foundation package featuring a complete ERPNext ERP system to manage your entire business operations efficiently.",
};

const guideHtml = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<style>
.service-hero {
  background: linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--secondary) / 0.7) 100%);
  padding: 100px 0 80px;
}

.badge-category {
  display: inline-block;
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.service-hero h1 {
  font-size: 56px;
  font-weight: 800;
  color: hsl(var(--foreground));
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

.setup-price,
.monthly-price {
  font-size: 40px;
  font-weight: 800;
  color: hsl(var(--foreground));
  line-height: 1;
}

.monthly-price {
  color: hsl(var(--primary));
}

.price-tag .label {
  font-size: 14px;
  color: hsl(var(--muted-foreground));
  margin-top: 0.25rem;
}

.plus {
  font-size: 24px;
  color: hsl(var(--muted-foreground));
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
  color: hsl(var(--foreground));
}

.trust-badges i {
  color: hsl(var(--primary));
}

.features-section {
  padding: 80px 0;
}

.features-section h2, .process-section h2, .pricing-section h2, .target-audience h2, .cta-section h2 {
    font-size: 36px;
    font-weight: 700;
}

.feature-card {
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.1);
  border-color: hsl(var(--primary));
}

.feature-icon {
  color: hsl(var(--primary));
  margin-bottom: 1rem;
}

.feature-card h4 {
  font-size: 20px;
  font-weight: 700;
  color: hsl(var(--card-foreground));
  margin-bottom: 1rem;
}

.feature-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-card li {
  padding: 0.5rem 0;
  color: hsl(var(--muted-foreground));
  font-size: 14px;
  padding-left: 1.5rem;
  position: relative;
}

.feature-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: hsl(var(--primary));
  font-weight: 700;
}

.process-section {
  padding: 80px 0;
  background-color: hsl(var(--muted));
}

.process-timeline {
  max-width: 900px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.step-number {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
  color: hsl(var(--primary-foreground));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  box-shadow: 0 4px 12px hsla(var(--primary), 0.3);
}

.step-content {
  flex: 1;
  background: hsl(var(--card));
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid hsl(var(--border));
}

.step-content h4 {
  font-size: 20px;
  font-weight: 700;
  color: hsl(var(--card-foreground));
  margin-bottom: 0.75rem;
}

.step-content p {
  color: hsl(var(--muted-foreground));
  margin-bottom: 1rem;
}

.step-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.step-content li {
  font-size: 14px;
  color: hsl(var(--foreground));
  padding-left: 1.5rem;
  position: relative;
}

.step-content li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: hsl(var(--primary));
}

.pricing-section {
  padding: 80px 0;
}

.pricing-card {
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.pricing-card h3 {
  font-size: 28px;
  font-weight: 700;
  color: hsl(var(--card-foreground));
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid hsl(var(--primary));
}

.price-breakdown {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.price-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid hsl(var(--border));
}

.price-item span:first-child {
  color: hsl(var(--muted-foreground));
}

.price-item span:last-child {
  font-weight: 700;
  color: hsl(var(--foreground));
  font-size: 18px;
}

.target-audience {
  padding: 80px 0;
  background-color: hsl(var(--muted));
}

.audience-box {
  background: hsl(var(--card));
  border: 2px solid hsl(var(--border));
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
}

.audience-box.ideal {
  border-color: hsl(var(--primary));
}

.audience-box.not-ideal {
  border-color: hsl(var(--destructive));
}

.audience-box h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.ideal h3 {
  color: hsl(var(--primary));
}

.not-ideal h3 {
  color: hsl(var(--destructive));
}

.audience-box ul {
  list-style: none;
  padding: 0;
}

.audience-box li {
  padding: 0.75rem 0;
  color: hsl(var(--muted-foreground));
  border-bottom: 1px solid hsl(var(--border));
}

.alternative {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid hsl(var(--destructive) / 0.3);
}
.alternative a {
  color: hsl(var(--primary));
  text-decoration: underline;
}

.cta-section {
  background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
  color: hsl(var(--primary-foreground));
  padding: 80px 0;
}

.cta-section h2 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 1rem;
}

.cta-section .btn-primary {
  background: white;
  color: hsl(var(--primary));
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}

.cta-section .btn-primary:hover {
  background: hsl(var(--secondary));
}

.cta-section a {
  color: white;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
}
.btn-primary {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    display: inline-block;
    transition: background-color 0.2s;
}
.btn-primary:hover {
    background-color: hsl(var(--primary) / 0.9);
}
.btn-outline-primary {
    border: 2px solid hsl(var(--primary));
    color: hsl(var(--primary));
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    display: inline-block;
    transition: background-color 0.2s, color 0.2s;
}
.btn-outline-primary:hover {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 15px;
}
.col-lg-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
    padding: 15px;
}
.col-lg-8 {
    flex: 0 0 66.6667%;
    max-width: 66.6667%;
    padding: 15px;
}

.align-items-center {
    align-items: center;
}
.text-center { text-align: center; }
.mb-5 { margin-bottom: 3rem; }
.img-fluid { max-width: 100%; height: auto; }

.g-4 { gap: 1.5rem; }
.justify-content-center { justify-content: center; }
.mt-3 { margin-top: 1rem; }
.bg-light { background-color: hsl(var(--muted)); }
.lead {
    font-size: 1.25rem;
    font-weight: 300;
    color: hsl(var(--muted-foreground));
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 1200px) {
    .container { max-width: 1140px; }
}


@media (max-width: 992px) {
    .col-lg-4, .col-lg-6, .col-lg-8 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .service-hero .row {
        flex-direction: column-reverse;
    }
}


@media (max-width: 768px) {
  .service-hero h1 {
    font-size: 36px;
  }
  
  .pricing-hero {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .hero-cta {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-cta .btn {
    width: 100%;
  }
  
  .process-step {
    flex-direction: column;
  }
  
  .step-content ul {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- Hero Section -->
<section class="service-hero it-foundation">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <span class="badge-category">For Growing MSMEs</span>
        <h1>IT Foundation</h1>
        <p class="lead">
          Complete ERPNext ERP system to manage your entire business operations efficiently.
        </p>
        <div class="pricing-hero">
          <div class="price-tag">
            <span class="setup-price">₹24,999</span>
            <span class="label">one-time setup</span>
          </div>
          <div class="plus">+</div>
          <div class="price-tag">
            <span class="monthly-price">₹24,999</span>
            <span class="label">per month</span>
          </div>
        </div>
        <div class="hero-cta">
          <a href="https://erp.aoplus.in/book-consultation/new" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i> Schedule Demo
          </a>
          <a href="#features" class="btn btn-outline-primary btn-lg">
            Explore Features
          </a>
        </div>
        <div class="trust-badges">
          <span><i class="fas fa-check-circle"></i> 30-Day Setup</span>
          <span><i class="fas fa-check-circle"></i> Full Training</span>
          <span><i class="fas fa-check-circle"></i> Unlimited Users</span>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="hero-image">
          <img src="/assets/erpnext-dashboard.png" alt="ERPNext Dashboard" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- What You Get -->
<section id="features" class="features-section">
  <div class="container">
    <h2 class="text-center mb-5">Complete Business Management System</h2>
    <div class="row g-4">
      
      <div class="col-lg-4 col-md-6">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-shopping-cart fa-2x"></i>
          </div>
          <h4>Sales & CRM</h4>
          <ul>
            <li>Lead management</li>
            <li>Quotations & orders</li>
            <li>Customer database</li>
            <li>Sales analytics</li>
            <li>Pipeline tracking</li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-file-invoice fa-2x"></i>
          </div>
          <h4>Accounting & Finance</h4>
          <ul>
            <li>GST-compliant invoicing</li>
            <li>Accounts payable/receivable</li>
            <li>Bank reconciliation</li>
            <li>Financial reports</li>
            <li>TDS compliance</li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-boxes fa-2x"></i>
          </div>
          <h4>Inventory Management</h4>
          <ul>
            <li>Real-time stock tracking</li>
            <li>Multi-warehouse support</li>
            <li>Batch & serial numbers</li>
            <li>Stock reconciliation</li>
            <li>Reorder alerts</li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-shopping-bag fa-2x"></i>
          </div>
          <h4>Purchase Management</h4>
          <ul>
            <li>Supplier management</li>
            <li>Purchase orders</li>
            <li>Price comparison</li>
            <li>Delivery tracking</li>
            <li>Purchase analytics</li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-users fa-2x"></i>
          </div>
          <h4>HR & Payroll</h4>
          <ul>
            <li>Employee database</li>
            <li>Attendance tracking</li>
            <li>Leave management</li>
            <li>Salary processing</li>
            <li>HR reports</li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-chart-bar fa-2x"></i>
          </div>
          <h4>Reports & Analytics</h4>
          <ul>
            <li>Real-time dashboards</li>
            <li>Custom reports</li>
            <li>Business insights</li>
            <li>Profit & loss</li>
            <li>Export to Excel</li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- Implementation Process -->
<section class="process-section bg-light">
  <div class="container">
    <h2 class="text-center mb-5">30-Day Implementation Process</h2>
    <div class="process-timeline">
      
      <div class="process-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>Week 1: Discovery & Planning</h4>
          <p>We understand your business processes and create a customized implementation plan.</p>
          <ul>
            <li>Business process mapping</li>
            <li>Requirements gathering</li>
            <li>User access planning</li>
            <li>Training schedule</li>
          </ul>
        </div>
      </div>
      
      <div class="process-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>Week 2: System Setup</h4>
          <p>We configure ERPNext according to your business needs.</p>
          <ul>
            <li>Company setup & chart of accounts</li>
            <li>Module configuration</li>
            <li>Workflow design</li>
            <li>Print format customization</li>
          </ul>
        </div>
      </div>
      
      <div class="process-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>Week 3: Data Migration & Testing</h4>
          <p>We migrate your existing data and thoroughly test the system.</p>
          <ul>
            <li>Customer & supplier data import</li>
            <li>Inventory data migration</li>
            <li>Opening balances</li>
            <li>User acceptance testing</li>
          </ul>
        </div>
      </div>
      
      <div class="process-step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4>Week 4: Training & Go-Live</h4>
          <p>Comprehensive training for your team and smooth transition to the new system.</p>
          <ul>
            <li>User training sessions</li>
            <li>Documentation handover</li>
            <li>Go-live support</li>
            <li>Post-implementation review</li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- Pricing Breakdown -->
<section class="pricing-section">
  <div class="container">
    <h2 class="text-center mb-5">Transparent Pricing</h2>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        
        <div class="pricing-card">
          <h3>One-Time Setup: ₹24,999</h3>
          <div class="price-breakdown">
            <div class="price-item">
              <span>ERPNext installation & configuration</span>
              <span>₹10,000</span>
            </div>
            <div class="price-item">
              <span>Data migration</span>
              <span>₹5,000</span>
            </div>
            <div class="price-item">
              <span>Customization & workflows</span>
              <span>₹4,999</span>
            </div>
            <div class="price-item">
              <span>Training (8 hours)</span>
              <span>₹3,000</span>
            </div>
            <div class="price-item">
              <span>Documentation</span>
              <span>₹2,000</span>
            </div>
          </div>
        </div>
        
        <div class="pricing-card">
          <h3>Monthly Fee: ₹24,999</h3>
          <div class="price-breakdown">
            <div class="price-item">
              <span>Cloud hosting (20GB storage)</span>
              <span>₹8,000</span>
            </div>
            <div class="price-item">
              <span>Unlimited users</span>
              <span>₹5,000</span>
            </div>
            <div class="price-item">
              <span>Technical support (email + chat)</span>
              <span>₹6,000</span>
            </div>
            <div class="price-item">
              <span>System updates & maintenance</span>
              <span>₹3,000</span>
            </div>
            <div class="price-item">
              <span>Daily backups</span>
              <span>₹1,499</span>
            </div>
            <div class="price-item">
              <span>Monthly system review call</span>
              <span>₹1,500</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

<!-- Who Should Choose This -->
<section class="target-audience bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Is IT Foundation Right for You?</h2>
    <div class="row">
      <div class="col-lg-6">
        <div class="audience-box ideal">
          <h3>✅ Perfect For:</h3>
          <ul>
            <li>Growing businesses (10-50 employees)</li>
            <li>Multiple departments/locations</li>
            <li>Currently using Excel/Tally</li>
            <li>Need inventory management</li>
            <li>Want to automate accounting</li>
            <li>Ready to invest in technology</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="audience-box not-ideal">
          <h3>❌ Not Right If:</h3>
          <ul>
            <li>Solo entrepreneur or freelancer</li>
            <li>Very simple business operations</li>
            <li>Budget under ₹20k/month</li>
            <li>Not ready for change management</li>
          </ul>
          <div class="alternative">
            <p><strong>Consider instead:</strong> <a href="/buyers-guide/digital-launchpad">Digital Launchpad</a> for simpler needs</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="container text-center">
    <h2>Ready to Transform Your Business?</h2>
    <p class="lead">Book a free demo and see ERPNext in action</p>
    <a href="https://erp.aoplus.in/book-consultation/new" class="btn btn-primary btn-lg">Schedule Free Demo</a>
    <p class="mt-3"><small>Or call: <a href="tel:+917977875818">+91 7977875818</a></small></p>
  </div>
</section>
`;

export default function ItFoundationPage() {
    return (
        <div dangerouslySetInnerHTML={{ __html: guideHtml }} />
    );
}
