"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  Code,
  Briefcase,
  PersonStanding,
  University
} from "lucide-react";

const experiences = [
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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated Full Stack Developer with expertise in modern web technologies and blockchain development. 
            I specialize in building scalable, secure applications using React, Node.js, TypeScript, and Web3 technologies. 
            With a strong foundation in software engineering principles and hands-on experience in both frontend and backend development, 
            I&apos;m passionate about creating innovative solutions that bridge traditional web development with emerging blockchain technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <PersonStanding className="h-5 w-5" />
                <span>Male</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5" />
                <span>05/07/2003</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Ha Noi</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="h-5 w-5" />
                <span>Career Objective</span>
              </div>

              <li className="text-lg leading-relaxed">
                Secure a position as a Full Stack Developer where I can apply my expertise 
                in modern web technologies and blockchain development to create innovative, 
                scalable solutions that drive business growth and user engagement.
              </li>

              <li className="text-lg leading-relaxed">
                Evolve into a senior technical role, leading development teams in building 
                next-generation web applications and blockchain solutions, while contributing 
                to open-source projects and staying at the forefront of emerging technologies.
              </li>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex gap-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <exp.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <span className="text-sm text-primary font-medium">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.company}
                  </p>
                  <ul className="list-disc pl-5 text-sm">
                    {exp.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
