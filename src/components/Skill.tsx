"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DiMsqlServer, DiRedis } from "react-icons/di";
import { FaJava, FaPhp } from "react-icons/fa";
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

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> }
    ]
  },
  {
    title: "Mobile",
    skills: [{ name: "Android", icon: <SiAndroid color="#3DDC84" /> }]
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "Go", icon: <FaGolang color="#00ADD8" /> },
      { name: "PHP", icon: <FaPhp color="#777BB4" /> },
      { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "NestJS", icon: <SiNestjs color="#E0234E" /> }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MSSQL", icon: <DiMsqlServer color="#CC2927" /> },
      { name: "MySQL", icon: <GrMysql color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Redis", icon: <DiRedis color="#DC382D" /> }
    ]
  },
  {
    title: "DevOps/Tool",
    skills: [
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab color="#FC6D26" /> },
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "Jira", icon: <SiJira color="#0052CC" /> },
      { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> }
    ]
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", icon: <SiJest color="#C21325" /> },
      { name: "Cypress", icon: <SiCypress /> }
    ]
  }
];

export default function Skill() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m constantly learning and improving my skills. Here&apos;s
            what I&apos;m currently working with and what I&apos;m passionate
            about.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
