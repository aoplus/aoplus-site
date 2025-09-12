// This component is rendered on the server and is not interactive.
// We can't use hooks or event handlers here.
// For interactive content, we would need to mark this with "use client".
export default function InvestorDeckPage() {
  const deckHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AO+ Solutions - Investor Deck</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            
            .presentation {
                max-width: 1200px;
                margin: 0 auto;
                background: white;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                border-radius: 16px;
                overflow: hidden;
            }
            
            .slide {
                min-height: 100vh;
                padding: 60px 80px;
                display: none;
                position: relative;
            }
            
            .slide.active {
                display: block;
            }
            
            .slide-header {
                text-align: center;
                margin-bottom: 50px;
            }
            
            h1 {
                font-size: 3rem;
                font-weight: 700;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 20px;
            }
            
            h2 {
                font-size: 2.5rem;
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 30px;
            }
            
            h3 {
                font-size: 1.8rem;
                font-weight: 600;
                color: #34495e;
                margin-bottom: 20px;
            }

            h4 {
                font-size: 1.2rem;
                font-weight: 600;
                color: #34495e;
                margin-bottom: 10px;
            }
            
            .subtitle {
                font-size: 1.3rem;
                color: #666;
                max-width: 800px;
                margin: 0 auto;
            }
            
            .navigation {
                position: fixed;
                bottom: 30px;
                right: 30px;
                z-index: 100;
            }
            
            .nav-button {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 12px 24px;
                margin: 0 5px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
            }
            
            .nav-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
            }
            
            .slide-number {
                position: absolute;
                top: 20px;
                right: 30px;
                color: #999;
                font-weight: 500;
            }
            
            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 30px;
                margin: 40px 0;
            }
            
            .card {
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                padding: 30px;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
            }
            
            .card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }
            
            .brand-card {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            
            .metric {
                text-align: center;
                padding: 20px;
            }
            
            .metric-value {
                font-size: 2.5rem;
                font-weight: 700;
                color: #667eea;
            }
            
            .metric-label {
                font-size: 1rem;
                color: #666;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .chart-container {
                background: white;
                padding: 30px;
                border-radius: 16px;
                margin: 30px 0;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            .progress-bar {
                background: #e9ecef;
                border-radius: 10px;
                height: 10px;
                margin: 10px 0;
            }
            
            .progress-fill {
                height: 100%;
                border-radius: 10px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                transition: width 1s ease;
            }
            
            .timeline {
                position: relative;
                padding: 20px 0;
            }
            
            .timeline-item {
                display: flex;
                margin-bottom: 30px;
                align-items: center;
            }
            
            .timeline-date {
                width: 120px;
                font-weight: 600;
                color: #667eea;
                font-size: 1.1rem;
            }
            
            .timeline-content {
                flex: 1;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 12px;
                margin-left: 20px;
            }
            
            .competitive-analysis {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                margin: 30px 0;
            }
            
            .competitor {
                text-align: center;
                padding: 20px;
                border: 2px solid #e9ecef;
                border-radius: 12px;
            }
            
            .our-advantage {
                border-color: #667eea;
                background: linear-gradient(135deg, #f5f7ff 0%, #e8f0ff 100%);
            }
            
            .cta {
                text-align: center;
                margin-top: 50px;
            }
            
            .cta-button {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 18px 40px;
                border: none;
                border-radius: 30px;
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .cta-button:hover {
                transform: translateY(-3px);
                box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
            }
            
            .logo {
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 700;
                font-size: 1.5rem;
                margin: 0 auto 20px auto;
            }
            
            @media (max-width: 768px) {
                .slide {
                    padding: 30px 20px;
                }
                
                h1 {
                    font-size: 2rem;
                }
                
                h2 {
                    font-size: 1.8rem;
                }
                
                .grid {
                    grid-template-columns: 1fr;
                }
                
                .competitive-analysis {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    </head>
    <body>
        <div class="presentation">
            <!-- Slide 1: Title Slide -->
            <div class="slide active">
                <div class="slide-number">1 / 12</div>
                <div class="slide-header">
                    <div class="logo">AO+</div>
                    <h1>AO+ Solutions</h1>
                    <p class="subtitle">Investing in India's Digital Future - Building a robust ecosystem of digital brands and infrastructure solutions designed for scale and impact</p>
                </div>
                <div class="cta">
                    <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px;">Join us on our journey to transform India's digital landscape</p>
                    <button class="cta-button" onclick="nextSlide()">Explore Our Vision</button>
                </div>
            </div>

            <!-- Slide 2: Executive Summary -->
            <div class="slide">
                <div class="slide-number">2 / 12</div>
                <div class="slide-header">
                    <h2>Executive Summary</h2>
                    <p class="subtitle">A diversified digital conglomerate positioned at the intersection of India's fastest-growing technology sectors</p>
                </div>
                <div class="grid">
                    <div class="card">
                        <h3>🚀 Mission</h3>
                        <p>To build and scale digital-first brands that solve real problems for Indian businesses and consumers, leveraging AI, cloud technologies, and data-driven insights.</p>
                    </div>
                    <div class="card">
                        <h3>🎯 Vision</h3>
                        <p>To become India's leading technology conglomerate, creating value across multiple verticals while maintaining operational excellence and innovation leadership.</p>
                    </div>
                    <div class="card">
                        <h3>💡 Value Proposition</h3>
                        <p>Diversified revenue streams, deep market understanding, technological expertise, and a portfolio of brands addressing different market segments with high growth potential.</p>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Market Opportunity -->
            <div class="slide">
                <div class="slide-number">3 / 12</div>
                <div class="slide-header">
                    <h2>Massive Market Opportunity</h2>
                    <p class="subtitle">India's digital transformation presents unprecedented growth opportunities across our target markets</p>
                </div>
                <div class="grid">
                    <div class="metric">
                        <div class="metric-value">$232.78B</div>
                        <div class="metric-label">India Cloud Market by 2033</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 85%"></div>
                        </div>
                        <p>25.8% CAGR (2025-2033)</p>
                    </div>
                    <div class="metric">
                        <div class="metric-value">$2.57B</div>
                        <div class="metric-label">India DevOps Market by 2033</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 78%"></div>
                        </div>
                        <p>19.48% CAGR (2025-2033)</p>
                    </div>
                    <div class="metric">
                        <div class="metric-value">$72.1B</div>
                        <div class="metric-label">India Digital Marketing by 2034</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 90%"></div>
                        </div>
                        <p>30.2% CAGR (2024-2034)</p>
                    </div>
                </div>
                <div class="chart-container">
                    <h3>Key Market Drivers</h3>
                    <p><strong>806 million</strong> internet users in India (55.3% penetration)</p>
                    <p><strong>Digital-first</strong> approach adopted by 70% of Indian enterprises</p>
                    <p><strong>Government initiatives</strong> like Digital India driving adoption</p>
                    <p><strong>Rising SME digitization</strong> creating demand for affordable solutions</p>
                </div>
            </div>

            <!-- Slide 4: Our Portfolio -->
            <div class="slide">
                <div class="slide-number">4 / 12</div>
                <div class="slide-header">
                    <h2>Our Brand Portfolio</h2>
                    <p class="subtitle">Five strategic brands covering high-growth verticals with synergistic opportunities</p>
                </div>
                <div class="grid">
                    <div class="card brand-card">
                        <h3>🔧 Prodory.com</h3>
                        <p><strong>AI, DevOps & Cloud Solutions</strong></p>
                        <p>Enterprise-grade cloud automation, AI-powered cost optimization, and DevOps tools built specifically for Indian enterprises.</p>
                        <div style="margin-top: 15px;">
                            <small>Target: Enterprise & Mid-market</small>
                        </div>
                    </div>
                    <div class="card brand-card">
                        <h3>📈 Digi-ads.click</h3>
                        <p><strong>Digital Marketing Platform</strong></p>
                        <p>Performance-driven digital marketing solutions helping businesses scale their online presence and customer acquisition.</p>
                        <div style="margin-top: 15px;">
                            <small>Target: SMEs & Local Businesses</small>
                        </div>
                    </div>
                    <div class="card brand-card">
                        <h3>📰 Palavanews.com</h3>
                        <p><strong>Local News Portal</strong></p>
                        <p>Hyperlocal news and content platform serving regional markets with data-driven content and advertising opportunities.</p>
                        <div style="margin-top: 15px;">
                            <small>Target: Regional Audiences</small>
                        </div>
                    </div>
                    <div class="card brand-card">
                        <h3>🏡 indombivili.com</h3>
                        <p><strong>Real Estate Discovery</strong></p>
                        <p>Focused real estate platform for the Dombivli area, providing comprehensive property search and discovery services.</p>
                        <div style="margin-top: 15px;">
                            <small>Target: Local Property Market</small>
                        </div>
                    </div>
                    <div class="card brand-card">
                        <h3>🪔 Satvikcloud.com</h3>
                        <p><strong>AI-Curated Festival Platform</strong></p>
                        <p>AI-powered product bundles and services for Indian festivals, tapping into the cultural commerce market.</p>
                        <div style="margin-top: 15px;">
                            <small>Target: Festival & Cultural Market</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 5: Prodory Deep Dive -->
            <div class="slide">
                <div class="slide-number">5 / 12</div>
                <div class="slide-header">
                    <h2>Prodory.com - Cloud & AI Powerhouse</h2>
                    <p class="subtitle">Positioned to capture significant share of India's rapidly growing cloud automation market</p>
                </div>
                <div class="competitive-analysis">
                    <div class="competitor">
                        <h4>Traditional Players</h4>
                        <p>TCS, Infosys, Wipro</p>
                        <p>• Legacy approach</p>
                        <p>• High costs</p>
                        <p>• Slow innovation</p>
                    </div>
                    <div class="competitor our-advantage">
                        <h4><strong>Prodory Advantage</strong></h4>
                        <p><strong>AI-First Solutions</strong></p>
                        <p>• <strong>India-specific</strong></p>
                        <p>• <strong>Cost-optimized</strong></p>
                        <p>• <strong>Rapid deployment</strong></p>
                    </div>
                    <div class="competitor">
                        <h4>International Tools</h4>
                        <p>AWS, Azure, GCP native</p>
                        <p>• Generic solutions</p>
                        <p>• Complex pricing</p>
                        <p>• Limited local support</p>
                    </div>
                </div>
                <div class="grid" style="grid-template-columns: 1fr 1fr;">
                    <div class="chart-container">
                        <h3>Product Suite</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li>✅ Storage Autoscaler</li>
                            <li>✅ Data & AI FinOps Agent</li>
                            <li>✅ AI-Powered Cost Dashboard</li>
                            <li>✅ Kubernetes-in-a-Box</li>
                            <li>✅ Cloud Sentinel Security</li>
                            <li>✅ VMware Migration Tools</li>
                        </ul>
                    </div>
                    <div class="chart-container">
                        <h3>Growth Strategy</h3>
                        <p><strong>Year 1-2:</strong> Establish enterprise client base, refine product-market fit</p>
                        <p><strong>Year 3-5:</strong> Scale to mid-market, expand product suite, potential acquisitions</p>
                        <p><strong>Target:</strong> ₹100 Cr ARR by Year 5</p>
                    </div>
                </div>
            </div>

            <!-- Slide 6: Digital Marketing & Media Opportunity -->
            <div class="slide">
                <div class="slide-number">6 / 12</div>
                <div class="slide-header">
                    <h2>Digital Marketing & Media Ecosystem</h2>
                    <p class="subtitle">Capturing value across the digital marketing and content value chain</p>
                </div>
                <div class="grid">
                    <div class="card">
                        <h3>📈 Digi-ads.click</h3>
                        <p><strong>Market Size:</strong> ₹55.37B by 2032</p>
                        <p><strong>Growth Rate:</strong> 30.2% CAGR</p>
                        <p><strong>Focus:</strong> Performance marketing for SMEs, local businesses seeking digital transformation</p>
                        <p><strong>Competitive Edge:</strong> Affordable pricing, local market understanding, integrated analytics</p>
                    </div>
                    <div class="card">
                        <h3>📰 Palavanews.com</h3>
                        <p><strong>Opportunity:</strong> Hyperlocal content monetization</p>
                        <p><strong>Revenue Models:</strong> Advertising, sponsored content, local business partnerships</p>
                        <p><strong>Differentiator:</strong> AI-driven content curation, community engagement, data analytics</p>
                    </div>
                </div>
                <div class="timeline">
                    <h3>3-Year Growth Roadmap</h3>
                    <div class="timeline-item">
                        <div class="timeline-date">Year 1</div>
                        <div class="timeline-content">
                            <strong>Foundation Building</strong><br>
                            Platform development, initial customer acquisition, content strategy establishment
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">Year 2</div>
                        <div class="timeline-content">
                            <strong>Scale & Expand</strong><br>
                            Geographic expansion, advanced analytics, partnership development
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">Year 3</div>
                        <div class="timeline-content">
                            <strong>Market Leadership</strong><br>
                            AI-powered personalization, enterprise solutions, potential acquisition targets
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 7: Niche Market Dominance -->
            <div class="slide">
                <div class="slide-number">7 / 12</div>
                <div class="slide-header">
                    <h2>Niche Market Dominance Strategy</h2>
                    <p class="subtitle">Building market-leading positions in specialized, high-value segments</p>
                </div>
                <div class="grid">
                    <div class="card">
                        <h3>🏡 indombivili.com</h3>
                        <p><strong>Strategy:</strong> Hyperlocal real estate focus</p>
                        <p><strong>Market:</strong> Dombivli & surrounding MMR areas</p>
                        <p><strong>Advantages:</strong></p>
                        <ul>
                            <li>Deep local market knowledge</li>
                            <li>Established relationships</li>
                            <li>Lower customer acquisition costs</li>
                            <li>Higher customer lifetime value</li>
                        </ul>
                        <p><strong>Expansion:</strong> Replicate model in similar tier-2 cities</p>
                    </div>
                    <div class="card">
                        <h3>🪔 Satvikcloud.com</h3>
                        <p><strong>Market:</strong> Cultural commerce & festival economy</p>
                        <p><strong>Opportunity:</strong> ₹2.5 Lac Cr+ festival market</p>
                        <p><strong>AI Differentiation:</strong></p>
                        <ul>
                            <li>Predictive festival demand</li>
                            <li>Personalized product bundles</li>
                            <li>Supply chain optimization</li>
                            <li>Cultural authenticity scoring</li>
                        </ul>
                        <p><strong>Scalability:</strong> Pan-India festivals & occasions</p>
                    </div>
                </div>
                <div class="chart-container">
                    <h3>Combined Niche Strategy Benefits</h3>
                    <div class="grid" style="grid-template-columns: repeat(4, 1fr);">
                        <div class="metric">
                            <div class="metric-value">5x</div>
                            <div class="metric-label">Higher margins</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">3x</div>
                            <div class="metric-label">Customer retention</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">60%</div>
                            <div class="metric-label">Lower CAC</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">10x</div>
                            <div class="metric-label">Market share potential</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 8: Financial Projections -->
            <div class="slide">
                <div class="slide-number">8 / 12</div>
                <div class="slide-header">
                    <h2>Financial Projections</h2>
                    <p class="subtitle">Conservative yet ambitious growth targets across our portfolio</p>
                </div>
                <div class="grid">
                    <div class="chart-container">
                        <h3>5-Year Revenue Projections (₹ Crores)</h3>
                        <div class="grid" style="grid-template-columns: repeat(6, 1fr); text-align: center;">
                            <div><strong>Brand</strong></div>
                            <div><strong>Year 1</strong></div>
                            <div><strong>Year 2</strong></div>
                            <div><strong>Year 3</strong></div>
                            <div><strong>Year 4</strong></div>
                            <div><strong>Year 5</strong></div>
                            
                            <div>Prodory</div>
                            <div>2</div>
                            <div>8</div>
                            <div>25</div>
                            <div>60</div>
                            <div>100</div>
                            
                            <div>Digi-ads</div>
                            <div>1</div>
                            <div>4</div>
                            <div>12</div>
                            <div>25</div>
                            <div>40</div>
                            
                            <div>Palavanews</div>
                            <div>0.5</div>
                            <div>2</div>
                            <div>5</div>
                            <div>10</div>
                            <div>15</div>
                            
                            <div>Indombivili</div>
                            <div>0.3</div>
                            <div>1</div>
                            <div>2.5</div>
                            <div>4</div>
                            <div>6</div>
                            
                            <div>Satvikcloud</div>
                            <div>0.2</div>
                            <div>1</div>
                            <div>3</div>
                            <div>7</div>
                            <div>12</div>
                            
                            <div><strong>Total</strong></div>
                            <div><strong>4</strong></div>
                            <div><strong>16</strong></div>
                            <div><strong>47.5</strong></div>
                            <div><strong>106</strong></div>
                            <div><strong>173</strong></div>
                        </div>
                    </div>
                    <div class="chart-container">
                        <h3>Key Financial Metrics</h3>
                        <div class="metric">
                            <div class="metric-value">43%</div>
                            <div class="metric-label">Projected CAGR</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">25%+</div>
                            <div class="metric-label">Target EBITDA Margin</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">₹173 Cr</div>
                            <div class="metric-label">Year 5 Revenue Target</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 9: Competitive Advantages -->
            <div class="slide">
                <div class="slide-number">9 / 12</div>
                <div class="slide-header">
                    <h2>Our Competitive Moats</h2>
                    <p class="subtitle">Sustainable advantages that will drive long-term success and market leadership</p>
                </div>
                <div class="grid">
                    <div class="card">
                        <h3>🇮🇳 India-First Approach</h3>
                        <p>Deep understanding of Indian market nuances, compliance requirements, cultural context, and local business practices that foreign competitors struggle to replicate.</p>
                    </div>
                    <div class="card">
                        <h3>🤖 AI-Powered Innovation</h3>
                        <p>Proprietary AI algorithms across all brands - from cloud cost optimization to festival demand prediction to content curation - creating superior customer experiences.</p>
                    </div>
                    <div class="card">
                        <h3>🔄 Portfolio Synergies</h3>
                        <p>Cross-brand collaboration opportunities: Prodory's infrastructure supports other brands, Digi-ads promotes portfolio companies, shared data insights.</p>
                    </div>
                    <div class="card">
                        <h3>📊 Data Network Effects</h3>
                        <p>Each brand generates valuable data that improves the entire ecosystem - customer insights, market trends, behavioral patterns across verticals.</p>
                    </div>
                    <div class="card">
                        <h3>⚡ Agile Execution</h3>
                        <p>Startup agility combined with portfolio stability. Ability to rapidly iterate, adapt to market changes, and deploy resources where opportunities emerge.</p>
                    </div>
                    <div class="card">
                        <h3>💰 Capital Efficiency</h3>
                        <p>Shared infrastructure, technology stack, and operational expertise across brands leading to lower costs and faster time-to-market for new initiatives.</p>
                    </div>
                </div>
            </div>

            <!-- Slide 10: Technology & Innovation -->
            <div class="slide">
                <div class="slide-number">10 / 12</div>
                <div class="slide-header">
                    <h2>Technology & Innovation Stack</h2>
                    <p class="subtitle">Cutting-edge technology infrastructure powering all our brands</p>
                </div>
                <div class="grid">
                    <div class="card">
                        <h3>🧠 AI & Machine Learning</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li>• Predictive analytics for demand forecasting</li>
                            <li>• Natural language processing for content</li>
                            <li>• Computer vision for quality assessment</li>
                            <li>• Recommendation engines across platforms</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>☁️ Cloud-Native Architecture</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li>• Kubernetes-based microservices</li>
                            <li>• Multi-cloud deployment strategy</li>
                            <li>• Auto-scaling infrastructure</li>
                            <li>• 99.9% uptime guarantee</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>📱 Mobile-First Development</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li>• Progressive Web Apps</li>
                            <li>• React Native mobile apps</li>
                            <li>• Offline-first architecture</li>
                            <li>• Regional language support</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>🔐 Enterprise Security</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li>• Zero-trust security model</li>
                            <li>• End-to-end encryption</li>
                            <li>• SOC 2 compliance ready</li>
                            <li>• GDPR & Indian data laws compliant</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Slide 11: Investment Proposition -->
            <div class="slide">
                <div class="slide-number">11 / 12</div>
                <div class="slide-header">
                    <h2>Investment Proposition</h2>
                    <p class="subtitle">Why AO+ Solutions represents an exceptional investment opportunity</p>
                </div>
                <div class="grid">
                    <div class="metric">
                        <div class="metric-value">₹25 Cr</div>
                        <div class="metric-label">Seeking Series A</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">18 months</div>
                        <div class="metric-label">Runway</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">5-7x</div>
                        <div class="metric-label">Projected ROI</div>
                    </div>
                </div>
                <div class="chart-container">
                    <h3>Use of Funds</h3>
                    <div class="grid" style="grid-template-columns: repeat(2, 1fr);">
                        <div>
                            <h4>Product Development (40% - ₹10 Cr)</h4>
                            <ul>
                                <li>• AI/ML capabilities enhancement - ₹4 Cr</li>
                                <li>• Mobile app development - ₹2.5 Cr</li>
                                <li>• Platform integrations - ₹2 Cr</li>
                                <li>• Security & compliance - ₹1.5 Cr</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Market Expansion (35% - ₹8.75 Cr)</h4>
                            <ul>
                                <li>• Sales & marketing team - ₹4 Cr</li>
                                <li>• Customer acquisition - ₹3 Cr</li>
                                <li>• Geographic expansion - ₹1.75 Cr</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Team Building (15% - ₹3.75 Cr)</h4>
                            <ul>
                                <li>• Engineering talent - ₹2 Cr</li>
                                <li>• Product managers - ₹1 Cr</li>
                                <li>• Data scientists - ₹0.75 Cr</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Working Capital (10% - ₹2.5 Cr)</h4>
                            <ul>
                                <li>• Operations - ₹1.5 Cr</li>
                                <li>• Infrastructure costs - ₹0.7 Cr</li>
                                <li>• Contingency - ₹0.3 Cr</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <h3>Investment Milestones</h3>
                    <div class="timeline-item">
                        <div class="timeline-date">3 Months</div>
                        <div class="timeline-content">
                            <strong>Team Scaling & Product Enhancement</strong><br />
                            Hire 25+ engineers, launch v2.0 products, establish partnerships
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">6 Months</div>
                        <div class="timeline-content">
                            <strong>Market Traction & Revenue Growth</strong><br />
                            ₹10 Cr ARR, 100+ enterprise customers, expand to 3 new cities
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">12 Months</div>
                        <div class="timeline-content">
                            <strong>Profitability & Series B Readiness</strong><br />
                             ₹30 Cr ARR, achieve operational profitability, prepare for Series B
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 12: Call to Action -->
            <div class="slide">
                <div class="slide-number">12 / 12</div>
                <div class="slide-header">
                    <div class="logo">AO+</div>
                    <h1>Join Our Journey</h1>
                    <p class="subtitle">Partner with us to build India's next generation digital infrastructure and capture the massive opportunities ahead</p>
                </div>
                <div class="grid">
                    <div class="card">
                        <h3>📧 Contact Information</h3>
                        <p><strong>Website:</strong> www.aoplus.in</p>
                        <p><strong>Email:</strong> investors@aoplus.in</p>
                        <p><strong>Phone:</strong> +91 XXXX XXXXXX</p>
                    </div>
                    <div class="card">
                        <h3>📊 Next Steps</h3>
                        <ul>
                            <li>Schedule investor meeting</li>
                            <li>Due diligence process</li>
                            <li>Term sheet discussion</li>
                            <li>Legal documentation</li>
                        </ul>
                    </div>
                </div>
                <div class="cta">
                    <h2 style="margin-bottom: 20px;">Ready to Invest in India's Digital Future?</h2>
                    <button class="cta-button" onclick="window.open('mailto:investors@aoplus.in', '_blank')">Contact Us Today</button>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div class="navigation">
            <button class="nav-button" onclick="previousSlide()">← Previous</button>
            <button class="nav-button" onclick="nextSlide()">Next →</button>
        </div>

        <script>
            let currentSlide = 1;
            const totalSlides = 12;

            function showSlide(n) {
                const slides = document.querySelectorAll('.slide');
                
                if (n > totalSlides) {
                    currentSlide = 1;
                }
                if (n < 1) {
                    currentSlide = totalSlides;
                }
                
                slides.forEach(slide => slide.classList.remove('active'));
                slides[currentSlide - 1].classList.add('active');
                
                // Update URL hash for easy sharing
                window.location.hash = \`slide-\${currentSlide}\`;
            }

            function nextSlide() {
                showSlide(currentSlide + 1);
            }

            function previousSlide() {
                showSlide(currentSlide - 1);
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' || e.key === ' ') {
                    e.preventDefault();
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    previousSlide();
                }
            });

            // Check for hash on load
            window.addEventListener('load', () => {
                const hash = window.location.hash;
                if (hash) {
                    const slideNumber = parseInt(hash.replace('#slide-', ''));
                    if (slideNumber >= 1 && slideNumber <= totalSlides) {
                        showSlide(slideNumber);
                    }
                }
            });

            // Auto-advance progress bars
            setTimeout(() => {
                document.querySelectorAll('.progress-fill').forEach(bar => {
                    bar.style.width = bar.style.width || '0%';
                });
            }, 500);
        </script>
    </body>
    </html>
  `;

  // Using dangerouslySetInnerHTML to render the raw HTML.
  // This is generally not recommended in React due to XSS risks,
  // but in this case, the HTML is static and controlled by us.
  return <div dangerouslySetInnerHTML={{ __html: deckHtml }} />;
}
