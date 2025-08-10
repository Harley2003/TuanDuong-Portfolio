"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeIndicator() {
  const { theme } = useTheme();
  const [showIndicator, setShowIndicator] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    
    setShowIndicator(true);
    const timer = setTimeout(() => {
      setShowIndicator(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [theme, mounted]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25 
          }}
          className="fixed bottom-8 right-8 z-50 pointer-events-none"
        >
          <motion.div
            className={`flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-xl border shadow-lg ${
              isDark
                ? "bg-gray-900/90 border-gray-700/50 text-white"
                : "bg-white/90 border-gray-200/50 text-gray-900"
            }`}
            animate={{
              boxShadow: isDark
                ? [
                    "0 8px 32px rgba(59, 130, 246, 0.3)",
                    "0 8px 32px rgba(59, 130, 246, 0.5)",
                    "0 8px 32px rgba(59, 130, 246, 0.3)"
                  ]
                : [
                    "0 8px 32px rgba(251, 191, 36, 0.3)",
                    "0 8px 32px rgba(251, 191, 36, 0.5)",
                    "0 8px 32px rgba(251, 191, 36, 0.3)"
                  ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ 
                rotate: isDark ? [0, 15, -15, 0] : [0, 360],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                rotate: { duration: isDark ? 2 : 4, repeat: Infinity },
                scale: { duration: 1.5, repeat: Infinity }
              }}
            >
              {isDark ? (
                <Moon className="w-5 h-5 text-blue-400" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500" />
              )}
            </motion.div>
            
            <div className="flex flex-col">
              <motion.span 
                className="text-sm font-medium"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {isDark ? "Dark Mode" : "Light Mode"}
              </motion.span>
              <motion.span 
                className="text-xs opacity-70"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {isDark ? "Night owl friendly" : "Easy on the eyes"}
              </motion.span>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              {Array.from({ length: 4 }, (_, i) => (
                <motion.div
                  key={`indicator-particle-${i}`}
                  className={`absolute w-1 h-1 rounded-full ${
                    isDark ? "bg-blue-300" : "bg-amber-300"
                  }`}
                  animate={{
                    x: [0, 20, -15, 0],
                    y: [0, -15, 20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${30 + (i % 2) * 40}%`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
