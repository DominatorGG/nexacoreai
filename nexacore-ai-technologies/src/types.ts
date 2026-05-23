/**
 * Shared types for Nexacore AI Technologies Pvt Ltd
 */

export type PageId = 'home' | 'about' | 'services' | 'industries' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  specs: { label: string; value: string }[];
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  interest: string;
}

export interface IndustryDetail {
  id: string;
  name: string;
  description: string;
  useCase: string;
  impactMetrics: { label: string; value: string }[];
  techStack: string[];
  icon: string;
}
