"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousTheme, setPreviousTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
    
    // Enable transitions after hydration
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition-disabled');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mounted && previousTheme && previousTheme !== resolvedTheme) {
      setIsTransitioning(true);
      
      // Reset transition state after animation completes
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 400);

      return () => clearTimeout(timer);
    }
    
    if (mounted) {
      setPreviousTheme(resolvedTheme);
    }
  }, [resolvedTheme, mounted, previousTheme]);

  // Disable transitions during hydration to prevent flash
  useEffect(() => {
    if (!mounted) {
      document.documentElement.classList.add('theme-transition-disabled');
    }
  }, [mounted]);

  // Show loading state while hydrating
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background text-foreground theme-transition-disabled flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Loading...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      className={`min-h-screen bg-background text-foreground ${
        isTransitioning ? 'theme-transition-disabled' : ''
      }`}
      initial={false}
      animate={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))"
      }}
      transition={{
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.8 }}
          transition={{ 
            duration: 0.3,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Theme transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: resolvedTheme === 'dark' 
                ? 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle at center, rgba(251, 191, 36, 0.1) 0%, transparent 70%)'
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
