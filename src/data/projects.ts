import { Project, ProjectCategory } from "@/types";

export const projectCategories: ProjectCategory[] = [
  { name: "All", value: "All" },
  { name: "Website", value: "Website" },
  { name: "Mobile", value: "Mobile" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Learning Management System",
    description: "A comprehensive web-based platform for creating, managing, and delivering online courses.",
    longDescription: "A comprehensive web-based platform for creating, managing, and delivering online courses. Features real-time interactions, progress tracking, automated assessments, and advanced analytics dashboard for instructors and administrators.",
    image: "/images/lms.png",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT"
    ],
    githubUrl: "https://github.com/Harley2003/Learning-Management-System",
    liveUrl: "",
    category: "Website",
    featured: true,
    status: "completed"
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "Enterprise-grade web application for streamlining HR operations.",
    longDescription: "Enterprise-grade web application for streamlining HR operations. Features role-based access control, employee profile management, attendance tracking, and comprehensive reporting with data visualization.",
    image: "/images/mes.png",
    technologies: [
      "JavaScript",
      "React",
      "Material UI",
      "Express.js",
      "MongoDB",
      "Chart.js",
      "PDF Export"
    ],
    githubUrl: "https://github.com/Harley2003/Manager-Employee",
    liveUrl: "",
    category: "Website",
    featured: true,
    status: "completed"
  },
  {
    id: 3,
    title: "Quizzy Learning Platform",
    description: "Interactive learning platform with AI-powered quiz generation.",
    longDescription: "Interactive learning platform with AI-powered quiz generation, spaced repetition algorithms, and collaborative study groups. Features real-time multiplayer quizzes and comprehensive learning analytics.",
    image: "/images/qw.png",
    technologies: [
      "JavaScript",
      "React",
      "Ant Design",
      "Express.js",
      "MongoDB",
      "WebRTC",
      "OpenAI API"
    ],
    githubUrl: "https://github.com/Harley2003/Quizzy",
    liveUrl: "",
    category: "Website",
    featured: false,
    status: "completed"
  }
];
