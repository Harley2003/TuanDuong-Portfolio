import { RoadmapItem } from "@/types";
import {
  Code2,
  Database,
  Cloud,
  Users,
  Trophy
} from "lucide-react";

export const roadmapData: RoadmapItem[] = [
  {
    id: 1,
    year: "0-2 years",
    title: "Junior Developer",
    subtitle: "Building Strong Foundations",
    description: "Focus on mastering fundamental web technologies and development practices",
    achievements: [
      "HTML/CSS/JavaScript mastery",
      "React/Vue.js framework proficiency", 
      "Version control with Git",
      "Basic backend understanding",
      "Responsive design principles"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"],
    type: "work",
    status: "completed",
    icon: Code2,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    year: "2-4 years", 
    title: "Mid-Level Developer",
    subtitle: "Expanding Technical Skills",
    description: "Develop advanced technical skills and start taking on leadership responsibilities",
    achievements: [
      "Advanced JavaScript/TypeScript",
      "State management (Redux, Zustand)",
      "API design and integration", 
      "Database design and optimization",
      "Testing frameworks and methodologies"
    ],
    technologies: ["TypeScript", "Redux", "API Design", "SQL", "Testing", "CI/CD"],
    type: "work",
    status: "current",
    icon: Database,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    year: "4-6 years",
    title: "Senior Developer", 
    subtitle: "System Architecture & Leadership",
    description: "Design scalable systems and lead technical initiatives",
    achievements: [
      "System architecture design",
      "Cloud platforms (AWS, Azure, GCP)",
      "Microservices architecture",
      "DevOps and containerization", 
      "Security best practices"
    ],
    technologies: ["AWS", "Docker", "Microservices", "Security", "Architecture"],
    type: "work",
    status: "planned",
    icon: Cloud,
    color: "from-purple-500 to-violet-500"
  },
  {
    id: 4,
    year: "6-8 years",
    title: "Tech Lead",
    subtitle: "Team Leadership & Strategy",
    description: "Guide technical vision and build high-performing teams",
    achievements: [
      "Team leadership and management",
      "Project planning and estimation",
      "Stakeholder communication",
      "Technical strategy development",
      "Performance optimization at scale"
    ],
    technologies: ["Leadership", "Strategy", "Team Management", "Communication"],
    type: "work", 
    status: "planned",
    icon: Users,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    year: "8+ years",
    title: "Engineering Manager",
    subtitle: "Strategic Leadership",
    description: "Drive engineering excellence and organizational growth",
    achievements: [
      "Engineering strategy and vision",
      "Cross-functional collaboration",
      "Talent acquisition and development", 
      "Process optimization",
      "Innovation leadership"
    ],
    technologies: ["Management", "Strategy", "Innovation", "Process Design"],
    type: "work",
    status: "planned", 
    icon: Trophy,
    color: "from-pink-500 to-rose-500"
  }
];
