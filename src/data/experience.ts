import { Experience } from "@/types";
import { Code, University } from "lucide-react";

export const experiences: Experience[] = [
  {
    id: 1,
    year: "09/2021 – 01/2026",
    title: "Software Engineering Student",
    company: "FPT University, Ha Noi",
    description: [
      "Major: Software Engineering with focus on Full Stack Development",
      "Active member of FU Debate Club - Enhanced communication and analytical skills",
      "Completed courses in Data Structures, Algorithms, and Database Design"
    ],
    icon: University
  },
  {
    id: 2,
    year: "7/2024 - 12/2024",
    title: "Frontend Developer Intern",
    company: "JVB VIET NAM JOINT STOCK COMPANY",
    description: [
      "Developed responsive web applications using React, JavaScript (ES6+), and modern CSS frameworks",
      "Built and deployed multiple projects including calendar app, weather dashboard, and e-commerce components",
      "Collaborated with cross-functional teams in agile environment for requirement analysis and project delivery",
      "Integrated RESTful APIs and implemented state management solutions using Redux and Context API",
      "Achieved 95% code review approval rate and delivered all assigned tasks ahead of deadlines"
    ],
    icon: Code
  }
];

export const personalInfo = {
  gender: "Male",
  birthDate: "05/07/2003",
  location: "Ha Noi",
  careerObjectives: [
    "Secure an entry-level Full Stack Developer position where I can apply my skills in software development, continue learning, and contribute to creating useful and engaging applications.",
    "Grow into a more advanced technical role by collaborating with experienced developers, improving my abilities, and contributing to impactful projects that benefit users and the community."
  ]
};
