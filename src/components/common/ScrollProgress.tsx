"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "roadmap", label: "Roadmap" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" }
];

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentSections = sections.map((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            offsetTop: rect.top + window.scrollY,
            height: rect.height
          };
        }
        return { id: section.id, offsetTop: 0, height: 0 };
      });

      const scrollPosition = window.scrollY;

      // highlight khi section xuất hiện 1/3 màn hình
      for (let i = currentSections.length - 1; i >= 0; i--) {
        if (
          scrollPosition >=
          currentSections[i].offsetTop - window.innerHeight / 3
        ) {
          setActiveSection(currentSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chạy 1 lần để set ban đầu

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // set active ngay khi click
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Right side navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Dot indicator */}
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-primary border-primary shadow-lg shadow-primary/25"
                    : "bg-background border-muted-foreground/30 hover:border-primary/50"
                }`}
              />

              {/* Section label */}
              <motion.div
                className="absolute right-full mr-4 px-3 py-1 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <span className="text-xs font-medium text-foreground whitespace-nowrap">
                  {section.label}
                </span>
              </motion.div>

              {/* Active indicator line */}
              {activeSection === section.id && (
                <motion.div
                  className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-primary rounded-full -translate-y-1/2"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Progress line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/30 -translate-x-1/2 -z-10" />
        <motion.div
          className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 -translate-x-1/2 -z-10 origin-top"
          style={{ scaleY: scrollYProgress }}
        />
      </div>

      {/* Mobile scroll indicator */}
      <div className="fixed bottom-4 right-4 lg:hidden z-40">
        <motion.div
          className="w-12 h-12 rounded-full bg-background/95 backdrop-blur-sm border border-border/50 shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-6 h-6">
            <svg className="w-6 h-6 transform -rotate-90" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-muted-foreground/20"
              />
              <motion.circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary"
                strokeLinecap="round"
                style={{
                  pathLength: scrollYProgress
                }}
                initial={{ pathLength: 0 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-primary">
                {Math.round(scrollYProgress.get() * 100)}%
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
