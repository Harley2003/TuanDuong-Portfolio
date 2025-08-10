"use client";

import { motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function ThemeSelector() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themes = [
    { value: "light", icon: Sun, label: "Light", color: "text-amber-500" },
    { value: "dark", icon: Moon, label: "Dark", color: "text-blue-400" },
    { value: "system", icon: Monitor, label: "System", color: "text-purple-500" }
  ];

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowSelector(!showSelector)}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-muted/50 to-muted/30 border border-border/30 hover:border-primary/40 transition-all duration-300"
        aria-label="Theme selector"
      >
        <motion.div
          animate={{ rotate: theme === "system" ? [0, 360] : 0 }}
          transition={{ duration: 2, repeat: theme === "system" ? Infinity : 0 }}
        >
          {(() => {
            if (theme === "system") {
              return <Monitor className="h-4 w-4 text-purple-500" />;
            }
            if (currentTheme === "dark") {
              return <Moon className="h-4 w-4 text-blue-400" />;
            }
            return <Sun className="h-4 w-4 text-amber-500" />;
          })()}
        </motion.div>
      </Button>

      {showSelector && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute top-12 right-0 p-2 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg z-50"
        >
          <div className="space-y-1">
            {themes.map((themeOption) => (
              <Button
                key={themeOption.value}
                variant={theme === themeOption.value ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  setTheme(themeOption.value);
                  setShowSelector(false);
                }}
                className="w-full justify-start gap-2 text-left"
              >
                <themeOption.icon className={`h-4 w-4 ${themeOption.color}`} />
                {themeOption.label}
                {theme === themeOption.value && (
                  <motion.div
                    className="ml-auto w-2 h-2 bg-primary rounded-full"
                    layoutId="activeTheme"
                  />
                )}
              </Button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
