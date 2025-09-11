export type Job = {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Internship";
  description: string;
};

export const jobs: Job[] = [
  {
    id: "frontend-engineer",
    title: "Senior Frontend Engineer (React)",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Build and maintain our corporate and brand websites using Next.js, React, and TypeScript. Drive UI/UX innovation and ensure high performance across all our digital properties.",
  },
  {
    id: "cloud-architect",
    title: "Cloud Solutions Architect",
    location: "Mumbai",
    type: "Full-time",
    description: "Design and implement scalable, secure, and cost-effective cloud infrastructure on GCP and AWS. Lead FinOps assessments and provide expert guidance to our clients.",
  },
  {
    id: "devops-intern",
    title: "DevOps Intern",
    location: "Remote",
    type: "Internship",
    description: "Work with our infrastructure team to automate CI/CD pipelines, manage Kubernetes clusters, and learn the ins and outs of modern DevOps practices in a fast-paced environment.",
  },
  {
    id: "digital-marketing-manager",
    title: "Digital Marketing Manager",
    location: "Mumbai",
    type: "Full-time",
    description: "Lead digital marketing strategies for our brand portfolio. Manage SEO, SEM, and social media campaigns to drive growth and engagement for DigiAds.click and other properties.",
  },
];
