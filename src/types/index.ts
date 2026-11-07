export interface Project {
  id: string;
  title: string;
  category: 'Performance Testing' | 'Automation Testing' | 'Manual Testing' | 'Academic Projects' | 'Internal Tools / Productivity Application';
  subtitle: string;
  description: string;
  objectives: string[];
  responsibilities: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  galleryImages?: string[];
  keyLearnings: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    isPrimary?: boolean;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: string;
  summary: string;
  technicalScope: string[];
  tools: string[];
  achievements?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  field: string;
  period: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}
