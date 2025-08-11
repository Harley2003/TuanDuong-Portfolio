"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/animations";
import { socialLinks } from "@/data";
import Image from "next/image";

export default function Introduce() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden safe-area-top"
    >
      {/* Enhanced Background */}
      <AnimatedBackground />

      {/* Floating Elements - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-primary/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-responsive section-padding-responsive">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Avatar Section */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow" />
              <div className="relative">
                {/* <Avatar /> */}
                <Image
                  src="/images/Avatar.png"
                  alt="Avatar"
                  width={800}
                  height={800}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-responsive-5xl sm:text-responsive-6xl font-bold leading-tight">
                <span className="block text-foreground/90 mb-2">
                  Hi, I&apos;m
                </span>
                <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      "Hareley", 
                      2000, 
                      "a Full Stack Developer", 
                      2000,
                      "a Software Engineer",
                      2000,
                      "a Problem Solver",
                      2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary)) 0%, #8b5cf6 50%, #ec4899 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 30px hsl(var(--primary) / 0.5)"
                    }}
                  />
                </span>
              </h1>

              <p className="text-responsive-base sm:text-responsive-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Passionate Full Stack Developer specializing in modern web technologies 
                and scalable applications. I craft efficient, secure solutions using 
                React, Node.js, TypeScript, and cutting-edge frameworks. 
                Committed to delivering exceptional user experiences and innovative digital solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-medium hover:shadow-strong transition-all duration-300 focus-ring btn-responsive touch-target"
              >
                <span className="relative z-10 flex items-center justify-center">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto group glass hover:glass-strong border-primary/20 hover:border-primary/40 transition-all duration-300 focus-ring btn-responsive touch-target"
                onClick={() => {
                  // Create a link to download CV (you need to add your CV file to public folder)
                  const link = document.createElement('a');
                  link.href = '/cv/Tuan-Duong-CV.pdf'; // Add your CV file to public/cv/ folder
                  link.download = 'Tuan-Duong-Full-Stack-Developer-CV.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                Connect with me:
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                    className="group relative p-2 sm:p-3 rounded-full glass hover:glass-strong border border-border/30 hover:border-primary/40 transition-all duration-300 focus-ring hover-lift touch-target"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
