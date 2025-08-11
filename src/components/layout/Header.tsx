"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme";
import { Logo, ScrollProgress } from "@/components/common";
import { navItems } from "@/data";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isRightSwipe = distance < -50; // Swipe right threshold

    if (isRightSwipe && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        const scrollPosition = parseInt(scrollY.replace("px", "")) * -1;
        window.scrollTo(0, scrollPosition);
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isOpen]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none"
        }}
      >
        <div className="container-responsive">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center flex-shrink-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <Logo />
              </div>
              <span className="ml-2 sm:ml-3 text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Harley
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 focus-ring touch-target ${
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10 shadow-sm"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              ))}
              <div className="ml-3 lg:ml-4 pl-3 lg:pl-4 border-l border-border/50">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="focus-ring touch-target p-2 relative z-[80]"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <motion.div
                  className="relative w-6 h-6 flex flex-col justify-center"
                  animate={isOpen ? "open" : "closed"}
                  initial="closed"
                >
                  <motion.span
                    className="absolute w-6 h-0.5 bg-current rounded-full"
                    variants={{
                      closed: { rotate: 0, y: -6, opacity: 1 },
                      open: { rotate: 45, y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-current rounded-full"
                    variants={{
                      closed: { opacity: 1, x: 0 },
                      open: { opacity: 0, x: -10 }
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-current rounded-full"
                    variants={{
                      closed: { rotate: 0, y: 6, opacity: 1 },
                      open: { rotate: -45, y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  />
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop with blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="mobile-menu-overlay md:hidden"
                onClick={() => setIsOpen(false)}
              />

              {/* Full-screen Mobile Menu */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.23, 1, 0.32, 1],
                  opacity: { duration: 0.3 }
                }}
                className="mobile-menu md:hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="flex flex-col h-full pt-4 pb-4 bg-background">
                  {/* Header with close button */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-border/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8">
                        <Logo />
                      </div>
                      <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        Menu
                      </span>
                    </div>
                  </div>

                  {/* Navigation Items */}
                  <div className="flex-1 overflow-y-auto py-6">
                    <div className="space-y-2 px-6">
                      {navItems.map((item, index) => (
                        <motion.button
                          key={item.name}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.1 + index * 0.05,
                            duration: 0.4,
                            ease: [0.23, 1, 0.32, 1]
                          }}
                          onClick={() => scrollToSection(item.href)}
                          className={`group relative w-full text-left px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300 focus-ring touch-target flex items-center justify-between ${
                            activeSection === item.href.substring(1)
                              ? "text-primary bg-primary/10 border border-primary/20 shadow-sm"
                              : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <span>{item.name}</span>

                          {/* Active indicator */}
                          {activeSection === item.href.substring(1) && (
                            <motion.div
                              layoutId="mobileActiveSection"
                              className="w-2 h-2 bg-primary rounded-full"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30
                              }}
                            />
                          )}

                          {/* Hover effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={false}
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
