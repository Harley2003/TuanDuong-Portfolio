"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThemeAwareCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined" | "glass" | "gradient";
  size?: "sm" | "md" | "lg";
  hover?: boolean;
  interactive?: boolean;
  glow?: boolean;
}

const ThemeAwareCard = forwardRef<HTMLDivElement, ThemeAwareCardProps>(
  ({ 
    children, 
    className, 
    variant = "default",
    size = "md",
    hover = true,
    interactive = false,
    glow = false,
    ...motionProps 
  }, ref) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const baseClasses = "relative rounded-xl transition-all duration-300 ease-out";
    
    const variantClasses = {
      default: `
        bg-card/80 backdrop-blur-sm 
        border border-border/50 
        shadow-sm hover:shadow-md
      `,
      elevated: `
        bg-card shadow-lg hover:shadow-xl 
        border border-border/30
      `,
      outlined: `
        bg-transparent border-2 border-border/50 
        hover:border-primary/50 hover:bg-card/30
      `,
      glass: `
        bg-card/70 backdrop-blur-xl 
        border border-border/30
        shadow-sm hover:shadow-md
        before:absolute before:inset-0 before:rounded-xl 
        before:bg-gradient-to-br before:from-primary/5 before:to-transparent 
        before:pointer-events-none before:transition-opacity before:duration-300
        hover:before:opacity-100
      `,
      gradient: `
        bg-gradient-to-br from-card via-card to-muted/20
        border border-border/40
        shadow-md hover:shadow-lg
        relative overflow-hidden
        before:absolute before:inset-0 before:rounded-xl
        before:bg-gradient-to-br before:from-primary/10 before:via-transparent before:to-accent/10
        before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
      `
    };

    const sizeClasses = {
      sm: "p-4",
      md: "p-6", 
      lg: "p-8"
    };

    const themeSpecificClasses = mounted && resolvedTheme === "dark" 
      ? `
        ${glow ? "hover:shadow-primary/20 hover:shadow-2xl" : ""}
        ${variant === "glass" ? "bg-card/80" : ""}
      `
      : `
        ${glow ? "hover:shadow-primary/10 hover:shadow-lg" : ""}
        ${variant === "glass" ? "bg-card/90" : ""}
      `;

    const hoverClasses = hover ? `
      hover:scale-[1.02] hover:-translate-y-1
      transform-gpu
    ` : "";

    const interactiveClasses = interactive ? `
      cursor-pointer focus-visible:outline-none 
      focus-visible:ring-2 focus-visible:ring-ring 
      focus-visible:ring-offset-2 focus-visible:ring-offset-background
      active:scale-[0.98]
    ` : "";

    const combinedClassName = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      themeSpecificClasses,
      hoverClasses,
      interactiveClasses,
      className
    );

    return (
      <motion.div
        ref={ref}
        className={combinedClassName}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.23, 1, 0.32, 1]
        }}
        whileHover={hover ? {
          scale: 1.02,
          y: -4,
          transition: { duration: 0.2 }
        } : undefined}
        whileTap={interactive ? {
          scale: 0.98,
          transition: { duration: 0.1 }
        } : undefined}
        {...motionProps}
      >
        {children}
        
        {/* Gradient border effect for elevated variant */}
        {variant === "elevated" && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        )}
        
        {/* Glow effect */}
        {glow && mounted && (
          <div 
            className="absolute -inset-1 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-sm pointer-events-none"
            style={{
              background: resolvedTheme === "dark" 
                ? "linear-gradient(135deg, hsl(var(--primary)/0.3), hsl(var(--accent)/0.2))"
                : "linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.05))"
            }}
          />
        )}
      </motion.div>
    );
  }
);

ThemeAwareCard.displayName = "ThemeAwareCard";

export default ThemeAwareCard;

// Utility components for common card patterns
export function ProjectCard({ children, ...props }: Omit<ThemeAwareCardProps, "variant">) {
  return (
    <ThemeAwareCard 
      variant="glass" 
      hover={true} 
      glow={true}
      className="group overflow-hidden"
      {...props}
    >
      {children}
    </ThemeAwareCard>
  );
}

export function SkillCard({ children, ...props }: Omit<ThemeAwareCardProps, "variant">) {
  return (
    <ThemeAwareCard 
      variant="elevated" 
      size="sm"
      hover={true}
      interactive={true}
      className="text-center group"
      {...props}
    >
      {children}
    </ThemeAwareCard>
  );
}

export function CertificateCard({ children, ...props }: Omit<ThemeAwareCardProps, "variant">) {
  return (
    <ThemeAwareCard 
      variant="gradient" 
      hover={true}
      className="group"
      {...props}
    >
      {children}
    </ThemeAwareCard>
  );
}
