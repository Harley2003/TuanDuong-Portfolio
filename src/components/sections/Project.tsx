"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithTheme, ProjectCard } from "@/components/theme";
import { projects, projectCategories } from "@/data";
import type { Project as ProjectType } from "@/types";

const categories = projectCategories.map((cat) => cat.value);

export default function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects: ProjectType[] = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  // Auto-play logic
  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, filteredProjects.length]);

  // Pause auto-play when user hovers over the slider
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion.
          </p>
        </motion.div>

        {/* Nút lọc danh mục - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              className="text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 touch-target"
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <ImageWithTheme
                  src={project.image || "/projects/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="secondary">
                      <GitBranch className="h-4 w-4" />
                    </Button>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ProjectCard>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="relative px-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  const threshold = 50;
                  if (info.offset.x > threshold && currentIndex > 0) {
                    prevProject();
                  } else if (
                    info.offset.x < -threshold &&
                    currentIndex < filteredProjects.length - 1
                  ) {
                    nextProject();
                  }
                }}
              >
                {filteredProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative">
                        <ImageWithTheme
                          src={project.image || "/images/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-48 sm:h-56 md:h-64 object-cover"
                        />
                        {/* Gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>

                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Technologies - Horizontal scroll on mobile */}
                        <div className="flex gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2 scrollbar-hide">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="flex-shrink-0 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2 sm:gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-xs sm:text-sm h-9 sm:h-10"
                            onClick={() =>
                              window.open(project.githubUrl, "_blank")
                            }
                          >
                            <GitBranch className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            Code
                          </Button>
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              className="flex-1 text-xs sm:text-sm h-9 sm:h-10"
                              onClick={() =>
                                window.open(project.liveUrl, "_blank")
                              }
                            >
                              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                              Demo
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows - Hidden on mobile, visible on tablet */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 w-8 h-8 sm:w-10 sm:h-10 hidden sm:flex"
              onClick={prevProject}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 w-8 h-8 sm:w-10 sm:h-10 hidden sm:flex"
              onClick={nextProject}
              disabled={currentIndex === filteredProjects.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
