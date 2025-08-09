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
    title: "FPT University, Ha Noi",
    company: "",
    description: [
      "Major: Software Engineering",
      "GPA: 3.2/4.0",
      "Member of FU Debate Club"
    ],
    icon: University
  },
  {
    id: 2,
    year: "7/2024 - 12/2024",
    title: "Intern Frontend Developer",
    company: "JVB VIET NAM JOINT STOCK COMPANY",
    description: [
      "Gained hands-on experience with HTML, CSS, JavaScript (ES6), ReactJS, Git, and RESTful APIs.",
      "Completed mini projects and exercises such as layout slicing, a calendar app, and a weather app.",
      "Participated in analyzing requirements, planning, coding, testing, andreporting for the final project."
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
            I am a fresher Front-end Developer with a strong passion for web
            technologies and a desire to learn and grow. I am looking for an
            opportunity to start my career, apply my skills in real projects,
            and become a professional developer in the future.
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
                My short-term goal is to gain practical experience as a
                Front-end Developer by working on real-world projects, improving
                my coding skills, and learning from experienced professionals in
                the field.
              </li>

              <li className="text-lg leading-relaxed">
                My long-term goal is to become a well-rounded Front-end
                Developer who not only writes clean and efficient code but also
                understands user experience, web performance, and design
                principles to build impactful and user-friendly web
                applications.
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
