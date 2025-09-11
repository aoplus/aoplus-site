# **App Name**: AO+ Corporate Hub

## Core Features:

- Corporate Information Display: Displays key company information, including name (AO+ Solutions Pvt Ltd), tagline, short description, address, email, phone, founding year, founders, partners, and social media links, sourced directly from Firestore.
- Brand Network Showcase: A dynamic carousel showcases owned brands, each with a logo, short description, and a call-to-action linking to the brand's microsite or external URL.
- Investor Snapshot: Provides a high-level overview of key investor information, including traction, ARR targets, and roadmap highlights.
- Brand Detail Pages: Dedicated pages for each brand, displaying relevant information. These include logos, summaries, primary contacts for the brand, and redirects as necessary.
- Careers Section: Dynamic listing of available job openings, with an application submission process handled by a Cloud Function that manages resumes and notifications.
- Contact Form with Intelligent Routing: A contact form submission triggers a Cloud Function (`submitContact`) that intelligently routes the message based on content and other available tools, logging and emailing the data to the sales team.
- FinOps Assessment Request: Capture the details of customers wishing to perform FinOps assessment. The results from customers will be processed via `submitAssessment`.

## Style Guidelines:

- Primary color: Strong blue (#0B7DF0), reflecting reliability and innovation, integral to infrastructure solutions.
- Background color: Light desaturated blue (#E0F7FF) to maintain a professional and clean look, while softly highlighting content.
- Accent color: Teal (#06B6D4) is employed for interactive elements to provide clear calls to action that reflect dynamism.
- Font: 'Inter' (sans-serif) for headlines and body text, chosen for its modern, clean appearance and excellent readability. This contributes to an accessible user experience, as is particularly suitable for corporate content.
- Consistent use of flat, line-based icons. Icons are related to cloud services, analytics, and DevOps.
- Clean, card-based layout with rounded corners and subtle shadows for content sections. Prioritizes clarity and scannability.
- Subtle transition animations on hover and content loading to enhance user experience without being distracting.