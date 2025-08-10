import { DiMsqlServer, DiRedis } from "react-icons/di";
import {
  FaComments,
  FaJava,
  FaLightbulb,
  FaPhp,
  FaUsers
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiJest,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiAndroid,
  SiGithub,
  SiGitlab,
  SiLaravel,
  SiJira,
  SiCypress,
  SiPostman,
  SiNestjs,
  SiPostgresql
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
    ]
  },
  {
    title: "Mobile",
    skills: [{ name: "Android", icon: SiAndroid, color: "#3DDC84" }]
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Go", icon: FaGolang, color: "#00ADD8" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MSSQL", icon: DiMsqlServer, color: "#CC2927" },
      { name: "MySQL", icon: GrMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: DiRedis, color: "#DC382D" }
    ]
  },
  {
    title: "DevOps/Tool",
    skills: [
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" }
    ]
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Cypress", icon: SiCypress, color: "#17202C" }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: FaComments, color: "#F59E0B" },
      { name: "Teamwork", icon: FaUsers, color: "#3B82F6" },
      { name: "Problem Solving", icon: FaLightbulb, color: "#FACC15" }
    ]
  }
];

export const allSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.title
  }))
);
