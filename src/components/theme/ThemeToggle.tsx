"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 rounded-full bg-muted/20 border border-border/30"
        disabled
      >
        <div className="w-4 h-4 rounded-full bg-muted animate-pulse" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-10 h-10 rounded-full bg-gradient-to-br from-muted/50 to-muted/30 border border-border/30 hover:border-primary/40 transition-all duration-300 group overflow-hidden backdrop-blur-sm"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10"
          animate={{
            scale: isDark ? [1, 1.2, 1] : [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isDark
              ? [
                  "0 0 10px rgba(59, 130, 246, 0.3)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 10px rgba(59, 130, 246, 0.3)"
                ]
              : [
                  "0 0 10px rgba(251, 191, 36, 0.3)",
                  "0 0 20px rgba(251, 191, 36, 0.5)",
                  "0 0 10px rgba(251, 191, 36, 0.3)"
                ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Icons with enhanced animations */}
        <div className="relative z-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: 180, opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  duration: 0.6 
                }}
                className="absolute"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Moon className="h-4 w-4 text-blue-400 drop-shadow-sm" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: 180, opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  duration: 0.6 
                }}
                className="absolute"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Sun className="h-4 w-4 text-amber-500 drop-shadow-sm" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          whileTap={{
            borderColor: isDark ? "rgba(59, 130, 246, 0.6)" : "rgba(251, 191, 36, 0.6)",
            scale: [1, 1.3, 1.1]
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating particles for dark mode */}
        <AnimatePresence>
          {isDark && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 3 }, (_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full"
                  animate={{
                    x: [0, 15, -10, 0],
                    y: [0, -10, 15, 0],
                    opacity: [0, 1, 0, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${30 + i * 15}%`
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sun rays for light mode */}
        <AnimatePresence>
          {!isDark && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 4 }, (_, i) => (
                <motion.div
                  key={`ray-${i}`}
                  className="absolute w-0.5 h-2 bg-gradient-to-t from-amber-400 to-transparent rounded-full"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    transformOrigin: "center bottom",
                    left: "50%",
                    top: `${10 + i * 10}%`,
                    transform: `translateX(-50%) rotate(${i * 90}deg)`
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}
