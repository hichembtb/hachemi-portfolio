export interface MajorContribution {
  title: string;
  subtitle: string;
  description: string;
  steps?: string[];
  highlights?: string[];
  image?: string;
  icon?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  company?: string;
  status?: string;
  platforms?: string[];
  description: string;
  fullDescription: string[];
  role: string;
  period: string;
  category: 'Mobile App' | 'Enterprise' | 'Open Source' | 'Utility';
  technologies: string[];
  architecture?: string[];
  roleScope?: string[];
  majorContributions?: MajorContribution[];
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  adminFeatures?: string[];
  teacherFeatures?: string[];
  coverImage: string;
  galleryImages: string[];
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  websiteUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
