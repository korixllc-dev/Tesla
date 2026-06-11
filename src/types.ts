export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string; // Will match Lucide icons dynamically
  subBadge?: string;
}

export interface Lead {
  id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  serviceNeeded: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'In Progress' | 'Contacted';
  notes?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Design' | 'Development' | 'Hosting' | 'SEO' | 'All';
  description: string;
  tags: string[];
  imagePlaceholderColor: string; // Class name for rich gradient
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  rating: number;
  content: string;
  avatarLetter: string;
}

export interface ProcessStep {
  stepNumber: string;
  phase: 'Focus' | 'Plan' | 'Execute' | 'Win';
  title: string;
  description: string;
  details: string[];
  icon: string;
}
