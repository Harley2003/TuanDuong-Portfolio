"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Code2,
  Database,
  Cloud,
  Users,
  Trophy,
  Rocket,
  Brain,
  Target,
  Zap,
  Shield
} from "lucide-react";

const roadmapData = [
  {
    id: 1,
    phase: "Junior Developer",
    timeframe: "0-2 years",
    position: "left",
    skills: [
      "HTML/CSS/JavaScript mastery",
      "React/Vue.js framework proficiency",
      "Version control with Git",
      "Basic backend understanding",
      "Responsive design principles"
    ],
    goals: [
      "Build solid foundation in web technologies",
      "Complete 5+ personal projects",
      "Contribute to open source projects",
      "Learn debugging and testing"
    ],
    icon: Code2,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    phase: "Mid-Level Developer",
    timeframe: "2-4 years",
    position: "right",
    skills: [
      "Advanced JavaScript/TypeScript",
      "State management (Redux, Zustand)",
      "API design and integration",
      "Database design and optimization",
      "Testing frameworks and methodologies"
    ],
    goals: [
      "Lead small to medium projects",
      "Mentor junior developers",
      "Implement CI/CD pipelines",
      "Optimize application performance"
    ],
    icon: Database,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    phase: "Senior Developer",
    timeframe: "4-6 years",
    position: "left",
    skills: [
      "System architecture design",
      "Cloud platforms (AWS, Azure, GCP)",
      "Microservices architecture",
      "DevOps and containerization",
      "Security best practices"
    ],
    goals: [
      "Design scalable system architectures",
      "Lead cross-functional teams",
      "Make technical decisions for products",
      "Establish coding standards and practices"
    ],
    icon: Cloud,
    color: "from-purple-500 to-violet-500"
  },
  {
    id: 4,
    phase: "Tech Lead",
    timeframe: "6-8 years",
    position: "right",
    skills: [
      "Team leadership and management",
      "Project planning and estimation",
      "Stakeholder communication",
      "Technical strategy development",
      "Performance optimization at scale"
    ],
    goals: [
      "Guide technical vision and roadmap",
      "Build and mentor high-performing teams",
      "Drive innovation and best practices",
      "Collaborate with product and business teams"
    ],
    icon: Users,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    phase: "Principal Engineer",
    timeframe: "8-12 years",
    position: "left",
    skills: [
      "Enterprise architecture design",
      "Cross-team technical leadership",
      "Innovation and research",
      "Industry expertise and thought leadership",
      "Strategic technology planning"
    ],
    goals: [
      "Drive company-wide technical initiatives",
      "Influence industry standards and practices",
      "Mentor and develop future leaders",
      "Shape long-term technology strategy"
    ],
    icon: Brain,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 6,
    phase: "Engineering Director",
    timeframe: "12+ years",
    position: "right",
    skills: [
      "Strategic business alignment",
      "Large-scale team management",
      "Budget and resource planning",
      "Executive communication",
      "Organizational development"
    ],
    goals: [
      "Lead engineering organization",
      "Drive business outcomes through technology",
      "Build sustainable engineering culture",
      "Shape company's technical future"
    ],
    icon: Target,
    color: "from-indigo-500 to-blue-600"
  }
];

const TimelineItem = ({
  item,
  index,
  isActive
}: {
  item: (typeof roadmapData)[0];
  index: number;
  isActive: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = item.position === "left";

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }
      }
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative mb-12 md:mb-16"
    >
      {/* Desktop Layout */}
      <div className={`hidden md:flex items-center ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}>
        {/* Content Card */}
        <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
          <motion.div
            style={{
              y: cardY,
              rotate: cardRotate
            }}
            animate={{
              scale: isActive ? 1.05 : 1,
              boxShadow: isActive
                ? "0 20px 40px rgba(var(--primary), 0.3), 0 0 0 2px rgba(var(--primary), 0.2)"
                : "0 4px 16px rgba(0, 0, 0, 0.1)"
            }}
            whileHover={{
              scale: 1.08,
              y: -10,
              rotateY: isLeft ? 5 : -5,
              transition: { duration: 0.3 }
            }}
            className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 group ${
              isActive
                ? "bg-card border-primary/50 shadow-2xl"
                : "bg-card/80 border-border/50 shadow-lg hover:shadow-2xl"
            }`}
          >
            {/* Active Glow Effect */}
            {isActive && (
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-10`}
                animate={{
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* Floating particles - more active when highlighted */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {Array.from({ length: isActive ? 5 : 3 }, (_, i) => (
                <motion.div
                  key={`particle-${item.id}-${i}-${20 + i * 20}-${30 + i * 15}`}
                  className={`absolute w-1 h-1 rounded-full ${
                    isActive ? "bg-primary/50" : "bg-primary/30"
                  }`}
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0, 1, 0],
                    scale: isActive ? [1, 1.5, 1] : [1, 1.2, 1]
                  }}
                  transition={{
                    duration: isActive ? 2 + i : 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${30 + i * 15}%`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              {/* Desktop Card Content */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}
                  animate={{
                    scale: isActive ? [1, 1.1, 1] : 1,
                    rotate: isActive ? [0, 5, -5, 0] : 0
                  }}
                  transition={{
                    duration: isActive ? 2 : 0.5,
                    repeat: isActive ? Infinity : 0
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.15
                  }}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <motion.h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                    animate={{
                      scale: isActive ? [1, 1.02, 1] : 1
                    }}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                  >
                    {item.phase}
                  </motion.h3>
                  <motion.p
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-primary/80" : "text-muted-foreground"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {item.timeframe}
                  </motion.p>
                </div>
              </div>

              {/* Skills and Goals sections for desktop */}
              <div className="mb-4">
                <motion.h4
                  className={`text-sm font-semibold mb-2 flex items-center gap-2 transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-primary/70"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{
                      rotate: isActive ? [0, 360] : 0,
                      scale: isActive ? [1, 1.2, 1] : 1
                    }}
                    transition={{
                      duration: isActive ? 1.5 : 2,
                      repeat: isActive ? Infinity : 0,
                      ease: "linear"
                    }}
                  >
                    <Zap className="h-4 w-4" />
                  </motion.div>
                  Core Skills
                </motion.h4>
                <div className="space-y-1">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + skillIndex * 0.1
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="text-sm text-muted-foreground flex items-center gap-2 cursor-pointer"
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-primary" : "bg-primary/60"
                        }`}
                        animate={{
                          scale: isActive ? [1, 1.5, 1] : 1
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isActive ? Infinity : 0,
                          delay: skillIndex * 0.1
                        }}
                        whileHover={{ scale: 2 }}
                      />
                      <span className={isActive ? "text-foreground" : ""}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <motion.h4
                  className={`text-sm font-semibold mb-2 flex items-center gap-2 transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-primary/70"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? [1, 1.3, 1] : [1, 1.2, 1],
                      rotate: isActive ? [0, 15, -15, 0] : [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: isActive ? 1.5 : 2,
                      repeat: Infinity
                    }}
                  >
                    <Trophy className="h-4 w-4" />
                  </motion.div>
                  Key Goals
                </motion.h4>
                <div className="space-y-1">
                  {item.goals.map((goal, goalIndex) => (
                    <motion.div
                      key={goal}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + goalIndex * 0.1 + 0.3
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="text-sm text-muted-foreground flex items-center gap-2 cursor-pointer"
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-secondary" : "bg-secondary/60"
                        }`}
                        animate={{
                          scale: isActive ? [1, 1.5, 1] : 1
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isActive ? Infinity : 0,
                          delay: goalIndex * 0.1
                        }}
                        whileHover={{ scale: 2 }}
                      />
                      <span className={isActive ? "text-foreground" : ""}>
                        {goal}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Node */}
        <div className="w-2/12 flex justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            className="relative"
          >
            <motion.div
              className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} shadow-lg flex items-center justify-center relative overflow-hidden`}
              animate={{
                scale: isActive ? [1, 1.15, 1] : 1,
                boxShadow: isActive
                  ? [
                      "0 0 20px rgba(var(--primary), 0.4)",
                      "0 0 40px rgba(var(--primary), 0.6)",
                      "0 0 20px rgba(var(--primary), 0.4)"
                    ]
                  : "0 4px 16px rgba(0, 0, 0, 0.2)"
              }}
              transition={{
                duration: isActive ? 2 : 0.5,
                repeat: isActive ? Infinity : 0
              }}
              whileHover={{
                scale: 1.25,
                rotate: 360,
                boxShadow: "0 0 30px rgba(var(--primary), 0.5)"
              }}
            >
              {/* Enhanced pulsing ring effect for active item */}
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color}`}
                animate={{
                  scale: isActive ? [1, 2, 1] : [1, 1.5, 1],
                  opacity: isActive ? [0.6, 0, 0.6] : [0.3, 0, 0.3]
                }}
                transition={{
                  duration: isActive ? 1.5 : 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* More rotating stars for active item */}
              {Array.from({ length: isActive ? 6 : 4 }, (_, i) => (
                <motion.div
                  key={`star-${item.id}-${i}-${
                    Math.cos((i * Math.PI) / (isActive ? 3 : 2)) * 25
                  }`}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: isActive ? [0, 1.5, 0] : [0, 1, 0]
                  }}
                  transition={{
                    duration: isActive ? 2 : 3,
                    repeat: Infinity,
                    delay: i * (isActive ? 0.3 : 0.5),
                    ease: "linear"
                  }}
                  style={{
                    transformOrigin: `${
                      25 + Math.cos((i * Math.PI) / (isActive ? 3 : 2)) * 25
                    }px ${
                      25 + Math.sin((i * Math.PI) / (isActive ? 3 : 2)) * 25
                    }px`
                  }}
                />
              ))}

              <motion.div
                animate={{
                  rotate: isActive ? [0, 360] : 0,
                  scale: isActive ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: isActive ? 3 : 0.5,
                  repeat: isActive ? Infinity : 0,
                  ease: "linear"
                }}
              >
                <item.icon className="h-8 w-8 text-white relative z-10" />
              </motion.div>
            </motion.div>

            {/* Connecting Line with animated progress */}
            {index < roadmapData.length - 1 && (
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-border to-transparent overflow-hidden">
                <motion.div
                  className="w-full bg-gradient-to-b from-primary to-transparent"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : { height: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                />
              </div>
            )}
          </motion.div>
        </div>

        {/* Empty Space for Opposite Side */}
        <div className="w-5/12" />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex gap-4">
        {/* Timeline Node for Mobile */}
        <div className="flex-shrink-0">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
            }
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            <motion.div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} shadow-lg flex items-center justify-center relative overflow-hidden`}
              animate={{
                scale: isActive ? [1, 1.1, 1] : 1,
                boxShadow: isActive
                  ? [
                      "0 0 15px rgba(var(--primary), 0.4)",
                      "0 0 25px rgba(var(--primary), 0.6)",
                      "0 0 15px rgba(var(--primary), 0.4)"
                    ]
                  : "0 2px 8px rgba(0, 0, 0, 0.2)"
              }}
              transition={{
                duration: isActive ? 2 : 0.5,
                repeat: isActive ? Infinity : 0
              }}
            >
              <item.icon className="h-6 w-6 text-white" />
            </motion.div>

            {/* Connecting Line for Mobile */}
            {index < roadmapData.length - 1 && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-border to-transparent overflow-hidden">
                <motion.div
                  className="w-full bg-gradient-to-b from-primary to-transparent"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : { height: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </div>
            )}
          </motion.div>
        </div>

        {/* Content Card for Mobile */}
        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
              isActive
                ? "bg-card border-primary/50 shadow-lg"
                : "bg-card/80 border-border/50 shadow-md"
            }`}
          >
            {/* Mobile Card Content */}
            <div className="mb-3">
              <h3 className={`text-lg font-bold mb-1 ${
                isActive ? "text-primary" : "text-foreground"
              }`}>
                {item.phase}
              </h3>
              <p className={`text-sm font-medium ${
                isActive ? "text-primary/80" : "text-muted-foreground"
              }`}>
                {item.timeframe}
              </p>
            </div>

            {/* Mobile Skills */}
            <div className="mb-3">
              <h4 className="text-sm font-semibold mb-2 text-primary/80 flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Skills
              </h4>
              <div className="text-xs text-muted-foreground">
                {item.skills.slice(0, 3).map((skill) => (
                  <div key={skill} className="flex items-center gap-1 mb-1">
                    <div className="w-1 h-1 rounded-full bg-primary/60" />
                    <span>{skill}</span>
                  </div>
                ))}
                {item.skills.length > 3 && (
                  <div className="text-xs text-muted-foreground/70 mt-1">
                    +{item.skills.length - 3} more skills
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Goals */}
            <div>
              <h4 className="text-sm font-semibold mb-2 text-primary/80 flex items-center gap-1">
                <Trophy className="h-3 w-3" />
                Goals
              </h4>
              <div className="text-xs text-muted-foreground">
                {item.goals.slice(0, 2).map((goal) => (
                  <div key={goal} className="flex items-center gap-1 mb-1">
                    <div className="w-1 h-1 rounded-full bg-secondary/60" />
                    <span>{goal}</span>
                  </div>
                ))}
                {item.goals.length > 2 && (
                  <div className="text-xs text-muted-foreground/70 mt-1">
                    +{item.goals.length - 2} more goals
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CareerRoadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Parallax effect for the entire section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Track which roadmap item is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const roadmapItems = document.querySelectorAll("[data-roadmap-item]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      roadmapItems.forEach((item, index) => {
        const element = item as HTMLElement;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="roadmap"
      className="relative py-20 overflow-hidden no-overflow"
      ref={ref}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"
        style={{ y: backgroundY }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`floating-shape-${10 + i * 15}-${20 + i * 10}`}
            className="absolute w-20 h-20 border border-primary/10 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
      </div>

      <div className="container-responsive relative z-10 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Rocket className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Career Roadmap
            </h2>
          </div>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            My long-term career development plan in Software Engineering - from
            Junior Developer to Engineering Leadership
          </motion.p>
          <motion.div
            className="mt-6 flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="h-5 w-5 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">
              Continuous Learning & Growth
            </span>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line with animated gradient - Desktop only */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 via-primary/30 to-transparent overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-secondary"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-0">
            {roadmapData.map((item, index) => (
              <div key={item.id} data-roadmap-item>
                <TimelineItem
                  item={item}
                  index={index}
                  isActive={activeIndex === index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
