
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MSME Growth Engine - Premium ERPNext ERP Implementation | AO+ Solutions",
    description: "Premium ERPNext transformation with guaranteed ROI. From chaos to clarity in 45-60 days.",
};

const guideHtml = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<style>
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
</style>
`;

export default function MsmeGrowthEnginePage() {
    return (
        <div dangerouslySetInnerHTML={{ __html: guideHtml }} />
    );
}

