import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
}

// Social Links Types
export interface SocialLink {
  icon: LucideIcon | IconType;
  href: string;
  label: string;
}

// Experience Types
export interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string[];
  icon: LucideIcon;
}

// Project Types
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface ProjectCategory {
  name: string;
  value: string;
}

// Career Roadmap Types
export interface RoadmapItem {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'education' | 'work' | 'certification' | 'project';
  status: 'completed' | 'current' | 'planned';
  icon: LucideIcon;
  color: string;
}

// Certificate Types
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
  type: 'certification' | 'course' | 'achievement';
}

// Skill Types (already exists but we'll keep it consistent)
export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Theme Types
export interface ThemeOption {
  name: string;
  value: string;
  icon: LucideIcon;
}

// Contact Types
export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  availability: string;
}

// SEO/Meta Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
}
