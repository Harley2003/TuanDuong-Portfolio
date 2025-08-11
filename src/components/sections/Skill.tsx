"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SkillCanvas } from "@/components/animations";
import { skillCategories } from "@/data/skill";

export default function Skill() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden no-overflow"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-pink-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-responsive">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized in full-stack development with expertise in modern web technologies 
            and software engineering. Proficient in building scalable applications using React, 
            Node.js, TypeScript, and modern backend frameworks. 
            Passionate about creating secure, efficient, and innovative digital experiences 
            with clean, maintainable code and exceptional user interfaces.
          </p>
        </motion.div>

        {/* Desktop 3D Skills Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          className="hidden lg:block relative mb-20"
        >
          <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-3xl overflow-hidden">
            {/* Glass Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-card/40 via-card/20 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl">
              <SkillCanvas />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
          </div>
        </motion.div>

        {/* Mobile/Tablet Grid Layout */}
        <div className="lg:hidden space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + categoryIndex * 0.1
              }}
              className="w-full"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div
                        className="mb-3 p-3 rounded-lg"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        <IconComponent
                          size={24}
                          style={{ color: skill.color }}
                        />
                      </div>
                      <p className="text-sm font-medium text-center text-foreground/90 leading-tight">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
