import { Experience } from "@/types";
import {
  Code,
  University
} from "lucide-react";

export const experiences: Experience[] = [
  {
    id: 1,
    year: "09/2021 – 01/2026",
    title: "Software Engineering Student",
    company: "FPT University, Ha Noi",
    description: [
      "Major: Software Engineering with focus on Full Stack Development",
      "GPA: 3.2/4.0 - Strong academic performance in core CS subjects",
      "Active member of FU Debate Club - Enhanced communication and analytical skills",
      "Completed advanced courses in Data Structures, Algorithms, and Database Design"
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
    "Secure a position as a Full Stack Developer where I can apply my expertise in modern web technologies and software engineering to create innovative, scalable solutions that drive business growth and user engagement.",
    "Evolve into a senior technical role, leading development teams in building next-generation web applications and scalable software solutions, while contributing to open-source projects and staying at the forefront of emerging technologies."
  ]
};
