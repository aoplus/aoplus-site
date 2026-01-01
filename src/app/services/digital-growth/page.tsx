
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Growth - Organic Digital Marketing for MSMEs | AO+ Solutions",
    description: "Build your online presence organically with our Digital Growth package, including SEO, social media, and content marketing for MSMEs.",
};

const guideHtml = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<style>
.service-hero.digital-growth {
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

.price-main {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin: 1.5rem 0 0.5rem 0;
}

.price {
  font-size: 56px;
  font-weight: 800;
  color: hsl(var(--primary));
  line-height: 1;
}

.period {
  font-size: 24px;
  color: hsl(var(--muted-foreground));
  font-weight: 600;
}

.price-note {
  color: hsl(var(--muted-foreground));
  font-size: 14px;
  margin-bottom: 2rem;
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
  font-size: 14px;
}

.trust-badges i {
  color: hsl(var(--primary));
}

.stats-showcase {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.stat-card {
  background: hsl(var(--card));
  border: 2px solid hsl(var(--primary));
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 800;
  color: hsl(var(--primary));
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 14px;
  color: hsl(var(--muted-foreground));
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.deliverables-section {
  padding: 80px 0;
}

.deliverable-card {
  background: hsl(var(--card));
  border: 2px solid hsl(var(--border));
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  transition: all 0.3s;
  position: relative;
}

.deliverable-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.1);
  border-color: hsl(var(--primary));
}

.deliverable-icon {
  color: hsl(var(--primary));
  margin-bottom: 1rem;
}

.deliverable-card h4 {
  font-size: 20px;
  font-weight: 700;
  color: hsl(var(--card-foreground));
  margin-bottom: 1rem;
}

.deliverable-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.deliverable-card li {
  padding: 0.5rem 0;
  color: hsl(var(--muted-foreground));
  font-size: 14px;
  padding-left: 1.5rem;
  position: relative;
}

.deliverable-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: hsl(var(--primary));
  font-weight: 700;
}

.deliverable-count {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: hsl(var(--secondary));
  color: hsl(var(--primary));
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}

.process-section {
  padding: 80px 0;
  background-color: hsl(var(--muted));
}

.timeline-horizontal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.timeline-step {
  flex: 1;
  min-width: 200px;
  text-align: center;
  padding: 1rem;
}

.step-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
  color: hsl(var(--primary-foreground));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 1rem auto;
  box-shadow: 0 4px 12px hsla(var(--primary), 0.3);
}

.timeline-step h5 {
  font-size: 18px;
  font-weight: 700;
  color: hsl(var(--card-foreground));
  margin-bottom: 0.5rem;
}

.timeline-step p {
  font-size: 14px;
  color: hsl(var(--muted-foreground));
}

.timeline-arrow {
  font-size: 32px;
  color: hsl(var(--primary));
  font-weight: 700;
}

.results-section {
  padding: 80px 0;
}

.results-timeline {
  display: flex;
  justify-content: space-around;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 2rem;
}

.result-milestone {
  flex: 1;
  min-width: 250px;
}

.milestone-marker {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 1rem;
}

.milestone-content {
  background: hsl(var(--card));
  border: 2px solid hsl(var(--border));
  border-radius: 12px;
  padding: 1.5rem;
}

.milestone-content h4 {
  font-size: 20px;
  font-weight: 700;
  color: hsl(var(--card-foreground));
  margin-bottom: 1rem;
}

.milestone-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.milestone-content li {
  padding: 0.5rem 0;
  color: hsl(var(--muted-foreground));
  font-size: 14px;
  padding-left: 1.5rem;
  position: relative;
}

.milestone-content li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: hsl(var(--primary));
}

.comparison-section {
  padding: 80px 0;
  background-color: hsl(var(--muted));
}

.comparison-table {
  background: hsl(var(--card));
  border: 2px solid hsl(var(--border));
  border-radius: 12px;
  overflow: hidden;
}

.comparison-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: hsl(var(--secondary));
  padding: 2rem;
  border-bottom: 2px solid hsl(var(--border));
}

.col-label {
  font-weight: 700;
}

.col-item {
  text-align: center;
}

.col-item h5 {
  font-size: 20px;
  font-weight: 700;
  color: hsl(var(--card-foreground));
  margin-bottom: 0.5rem;
}

.col-item .price {
  font-size: 18px;
  color: hsl(var(--primary));
  font-weight: 600;
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid hsl(var(--border));
}

.row-label {
  font-weight: 600;
  color: hsl(var(--card-foreground));
}

.row-value {
  text-align: center;
  color: hsl(var(--muted-foreground));
}

.row-value.highlight {
  color: hsl(var(--primary));
  font-weight: 700;
}

.target-section {
  padding: 80px 0;
}

.target-box {
  background: hsl(var(--card));
  border: 2px solid hsl(var(--border));
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
}

.target-box.ideal {
  border-color: hsl(var(--primary));
}

.target-box.not-ideal {
  border-color: hsl(var(--destructive));
}

.target-box h3 {
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

.target-box ul {
  list-style: none;
  padding: 0;
}

.target-box li {
  padding: 0.75rem 0;
  color: hsl(var(--muted-foreground));
  border-bottom: 1px solid hsl(var(--border));
}

.alternative {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid hsl(var(--destructive-foreground) / 0.3);
}

.faq-section {
  padding: 80px 0;
  background-color: hsl(var(--muted));
}

.faq-item {
  background: hsl(var(--card));
  border: 2px solid hsl(var(--border));
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
}

.faq-item h5 {
  font-size: 18px;
  font-weight: 700;
  color: hsl(var(--card-foreground));
  margin-bottom: 1rem;
}

.faq-item p {
  color: hsl(var(--muted-foreground));
  margin: 0;
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
  background: hsl(var(--primary-foreground));
  color: hsl(var(--primary));
  border: none;
}

.cta-section .btn-primary:hover {
  background: hsl(var(--secondary));
}

.cta-section a {
  color: hsl(var(--primary-foreground));
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
.col-lg-10 {
    flex: 0 0 83.3333%;
    max-width: 83.3333%;
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
    .col-lg-4, .col-lg-6, .col-lg-10 {
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
  
  .price {
    font-size: 40px;
  }
  
  .hero-cta {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-cta .btn {
    width: 100%;
  }
  
  .timeline-horizontal {
    flex-direction: column;
  }
  
  .timeline-arrow {
    transform: rotate(90deg);
    margin: 1rem 0;
  }
  
  .comparison-header,
  .comparison-row {
    grid-template-columns: 1fr;
    text-align: left;
  }
  
  .col-item,
  .row-value {
    text-align: left;
    margin-top: 0.5rem;
  }
}
</style>

<!-- Hero Section -->
<section class="service-hero digital-growth">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <span class="badge-category">Organic Marketing</span>
        <h1>Digital Growth</h1>
        <p class="lead">
          Build your online presence organically with SEO, social media, and content marketing.
        </p>
        <div class="pricing-hero">
          <div class="price-main">
            <span class="price">₹2,999</span>
            <span class="period">/month</span>
          </div>
          <p class="price-note">No setup fee • Cancel anytime</p>
        </div>
        <div class="hero-cta">
          <a href="https://erp.aoplus.in/book-consultation/new" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            <i class="fa fa-rocket"></i> Start Growing Today
          </a>
          <a href="#deliverables" class="btn btn-outline-primary btn-lg">
            See Deliverables
          </a>
        </div>
        <div class="trust-badges">
          <span><i class="fa fa-check-circle"></i> 15-20 Posts/Month</span>
          <span><i class="fa fa-check-circle"></i> 2 Blog Posts</span>
          <span><i class="fa fa-check-circle"></i> Weekly Reports</span>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="stats-showcase">
          <div class="stat-card">
            <div class="stat-number">3-5x</div>
            <div class="stat-label">Website Traffic Growth</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">15-30</div>
            <div class="stat-label">Monthly Leads</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Social Media Reach</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Monthly Deliverables -->
<section id="deliverables" class="deliverables-section">
  <div class="container">
    <h2 class="text-center mb-5">What You Get Every Month</h2>
    <div class="row g-4">
      
      <div class="col-lg-4 col-md-6">
        <div class="deliverable-card">
          <div class="deliverable-icon">
            <i class="fa fa-search fa-2x"></i>
          </div>
          <h4>SEO Optimization</h4>
          <ul>
            <li>Google Business Profile optimization</li>
            <li>Website SEO improvements</li>
            <li>Local directory listings (10+)</li>
            <li>Keyword research & targeting</li>
            <li>Monthly SEO report</li>
          </ul>
          <div class="deliverable-count">Ongoing</div>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="deliverable-card">
          <div class="deliverable-icon">
            <i class="fa fa-thumbs-up fa-2x"></i>
          </div>
          <h4>Social Media Marketing</h4>
          <ul>
            <li>15-20 posts per month</li>
            <li>Facebook + Instagram + LinkedIn</li>
            <li>Content creation & graphics</li>
            <li>Daily engagement & responses</li>
            <li>Hashtag strategy</li>
          </ul>
          <div class="deliverable-count">15-20 Posts</div>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="deliverable-card">
          <div class="deliverable-icon">
            <i class="fa fa-pen fa-2x"></i>
          </div>
          <h4>Content Creation</h4>
          <ul>
            <li>2 SEO-optimized blog posts</li>
            <li>800-1000 words each</li>
            <li>Keyword-rich content</li>
            <li>Images & formatting</li>
            <li>Social media sharing</li>
          </ul>
          <div class="deliverable-count">2 Blog Posts</div>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="deliverable-card">
          <div class="deliverable-icon">
            <i class="fa fa-video fa-2x"></i>
          </div>
          <h4>Video Content</h4>
          <ul>
            <li>2 short videos per month</li>
            <li>Reels/Shorts format (30-60 sec)</li>
            <li>Professional editing</li>
            <li>Captions & music</li>
            <li>Multi-platform distribution</li>
          </ul>
          <div class="deliverable-count">2 Videos</div>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="deliverable-card">
          <div class="deliverable-icon">
            <i class="fa fa-star fa-2x"></i>
          </div>
          <h4>Review Management</h4>
          <ul>
            <li>Review generation campaign</li>
            <li>Response to all reviews</li>
            <li>Reputation monitoring</li>
            <li>5-10 new reviews target</li>
            <li>Rating improvement strategy</li>
          </ul>
          <div class="deliverable-count">5-10 Reviews</div>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <div class="deliverable-card">
          <div class="deliverable-icon">
            <i class="fa fa-chart-line fa-2x"></i>
          </div>
          <h4>Analytics & Reporting</h4>
          <ul>
            <li>Weekly performance updates</li>
            <li>Monthly comprehensive report</li>
            <li>Traffic & engagement metrics</li>
            <li>Lead generation tracking</li>
            <li>Strategy recommendations</li>
          </ul>
          <div class="deliverable-count">Weekly Reports</div>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="process-section bg-light">
  <div class="container">
    <h2 class="text-center mb-5">How Digital Growth Works</h2>
    
    <div class="timeline-horizontal">
      <div class="timeline-step">
        <div class="step-icon">
          <i class="fa fa-clipboard-list"></i>
        </div>
        <h5>Week 1: Audit & Setup</h5>
        <p>We analyze your current digital presence and create a growth strategy.</p>
      </div>
      
      <div class="timeline-arrow">→</div>
      
      <div class="timeline-step">
        <div class="step-icon">
          <i class="fa fa-rocket"></i>
        </div>
        <h5>Week 2: Launch</h5>
        <p>Content creation begins. Your social media comes alive with regular posts.</p>
      </div>
      
      <div class="timeline-arrow">→</div>
      
      <div class="timeline-step">
        <div class="step-icon">
          <i class="fa fa-chart-line"></i>
        </div>
        <h5>Week 3-4: Optimize</h5>
        <p>We track performance and refine strategy for better results.</p>
      </div>
      
      <div class="timeline-arrow">→</div>
      
      <div class="timeline-step">
        <div class="step-icon">
          <i class="fa fa-trophy"></i>
        </div>
        <h5>Ongoing: Grow</h5>
        <p>Consistent improvement in traffic, leads, and brand visibility.</p>
      </div>
    </div>
    
  </div>
</section>

<!-- Expected Results -->
<section class="results-section">
  <div class="container">
    <h2 class="text-center mb-5">Expected Results Timeline</h2>
    <div class="results-timeline">
      
      <div class="result-milestone">
        <div class="milestone-marker">Month 1</div>
        <div class="milestone-content">
          <h4>Foundation</h4>
          <ul>
            <li>Google Business Profile optimized</li>
            <li>Social media active & growing</li>
            <li>First blog posts published</li>
            <li>5-10 leads generated</li>
          </ul>
        </div>
      </div>
      
      <div class="result-milestone">
        <div class="milestone-marker">Month 3</div>
        <div class="milestone-content">
          <h4>Momentum</h4>
          <ul>
            <li>Website traffic 2x</li>
            <li>Social followers +100-200</li>
            <li>15-20 leads per month</li>
            <li>Improved search rankings</li>
          </ul>
        </div>
      </div>
      
      <div class="result-milestone">
        <div class="milestone-marker">Month 6</div>
        <div class="milestone-content">
          <h4>Growth</h4>
          <ul>
            <li>Website traffic 3-5x</li>
            <li>Strong social presence (500+ followers)</li>
            <li>30-50 leads per month</li>
            <li>Page 1 Google rankings</li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- Comparison -->
<section class="comparison-section bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Digital Growth vs Paid Ads</h2>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="comparison-table">
          <div class="comparison-header">
            <div class="col-label"></div>
            <div class="col-item">
              <h5>Digital Growth</h5>
              <p class="price">₹2,999/month</p>
            </div>
            <div class="col-item">
              <h5>Paid Ads</h5>
              <p class="price">₹30k-50k/month</p>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="row-label">Cost Per Lead</div>
            <div class="row-value">₹0 (organic)</div>
            <div class="row-value">₹500-1,000</div>
          </div>
          
          <div class="comparison-row">
            <div class="row-label">Results Timeline</div>
            <div class="row-value">2-3 months</div>
            <div class="row-value">Immediate</div>
          </div>
          
          <div class="comparison-row">
            <div class="row-label">Long-Term Value</div>
            <div class="row-value highlight">High (compounds)</div>
            <div class="row-value">Low (stops when ads stop)</div>
          </div>
          
          <div class="comparison-row">
            <div class="row-label">Best For</div>
            <div class="row-value">Patient, sustainable growth</div>
            <div class="row-value">Quick results, high budget</div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Who Is This For -->
<section class="target-section">
  <div class="container">
    <h2 class="text-center mb-5">Is Digital Growth Right for You?</h2>
    <div class="row">
      <div class="col-lg-6">
        <div class="target-box ideal">
          <h3>✅ Perfect For:</h3>
          <ul>
            <li>Businesses building brand awareness</li>
            <li>Service-based businesses (consultants, agencies)</li>
            <li>Local businesses (shops, clinics, salons)</li>
            <li>Budget-conscious companies</li>
            <li>Patient approach (results in 2-3 months)</li>
            <li>Want sustainable, long-term growth</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="target-box not-ideal">
          <h3>❌ Not Right If:</h3>
          <ul>
            <li>Need immediate results (this week)</li>
            <li>Have high ad budget (₹30k+/month)</li>
            <li>Highly competitive market</li>
            <li>Want guaranteed leads (no organic guarantee)</li>
          </ul>
          <div class="alternative">
            <p><strong>Need faster results?</strong> Check <a href="/services/vertical-growth-marketing">Vertical Growth Marketing</a> (paid ads)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq-section bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Common Questions</h2>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        
        <div class="faq-item">
          <h5>How soon will I see results?</h5>
          <p>Month 1: Foundation setup, 5-10 leads. Month 3: 15-20 leads, noticeable traffic increase. Month 6: 30-50 leads, strong online presence.</p>
        </div>
        
        <div class="faq-item">
          <h5>Do you provide the content or do I need to?</h5>
          <p>We create everything – posts, graphics, blog articles, videos. You just review and approve.</p>
        </div>
        
        <div class="faq-item">
          <h5>Can I see content before it's posted?</h5>
          <p>Yes! We share a content calendar weekly. You can request changes or approve as-is.</p>
        </div>
        
        <div class="faq-item">
          <h5>What if I need more posts or content?</h5>
          <p>We can increase frequency for additional ₹1,000-2,000/month depending on volume.</p>
        </div>
        
        <div class="faq-item">
          <h5>Can I combine this with paid ads?</h5>
          <p>Absolutely! Many clients use Digital Growth for organic + <a href="/services/vertical-growth-marketing">Vertical Growth</a> for paid ads.</p>
        </div>
        
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="container text-center">
    <h2>Start Growing Your Online Presence</h2>
    <p class="lead">Just ₹2,999/month. No setup fee. Cancel anytime.</p>
    <a href="https://erp.aoplus.in/book-consultation/new" target="_blank" class="btn btn-primary btn-lg">Start Digital Growth</a>
    <p class="mt-3"><small>Or call: <a href="tel:+917977875818">+91 7977875818</a></small></p>
  </div>
</section>
`;

export default function DigitalGrowthPage() {
    return (
        <div dangerouslySetInnerHTML={{ __html: guideHtml }} />
    );
}
