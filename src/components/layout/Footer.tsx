"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Logo } from "@/components/common"; // Import Logo component

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="w-full bg-card text-card-foreground py-8 border-t border-border shadow-lg"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          {" "}
          {/* Added a div to group logo and copyright */}
          <Logo /> {/* Render Logo component */}
          <p className="text-sm ml-2">
            {" "}
            {/* Added ml-2 for spacing */}
            &copy; {new Date().getFullYear()} Harley - Full Stack Developer. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/Harley2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-card-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tuanduong-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-card-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
