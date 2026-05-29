export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  type: 'professional' | 'volunteer' | 'extracurricular';
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  outcome: string[];
  metrics: MetricItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: string;
  logo: string; // lucide icon name
  tags: string[];
  caseStudy: CaseStudy;
  demoType: 'sandbox-compiler' | 'db-query-engine' | 'network-visualizer' | 'canvas-vector';
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}
