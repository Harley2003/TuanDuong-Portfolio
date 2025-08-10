"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageWithThemeProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  darkModeSrc?: string;
  lightModeSrc?: string;
  quality?: number;
}

export default function ImageWithTheme({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  darkModeSrc,
  lightModeSrc,
  quality = 85,
  ...props
}: ImageWithThemeProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which image to use based on theme
  const getImageSrc = () => {
    if (!mounted) return src;
    
    const isDark = resolvedTheme === "dark" || theme === "dark";
    
    if (isDark && darkModeSrc) {
      return darkModeSrc;
    }
    
    if (!isDark && lightModeSrc) {
      return lightModeSrc;
    }
    
    return src;
  };

  const imageSrc = getImageSrc();

  // Enhanced className for theme-aware styling
  const enhancedClassName = `
    ${className}
    transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)
    ${mounted ? 'opacity-100' : 'opacity-0'}
    ${imageLoaded ? 'scale-100' : 'scale-105'}
  `.trim();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ 
        opacity: mounted && imageLoaded ? 1 : 0,
        scale: imageLoaded ? 1 : 1.05
      }}
      transition={{ 
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="relative overflow-hidden"
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={enhancedClassName}
        onLoad={() => setImageLoaded(true)}
        style={{
          filter: mounted && resolvedTheme === "dark" 
            ? "brightness(0.9) contrast(1.1) saturate(0.95)" 
            : "brightness(1) contrast(1) saturate(1)",
          transition: "filter 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
        }}
        {...props}
      />
      
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 animate-pulse rounded-lg"
          style={{
            width: width || "100%",
            height: height || "100%"
          }}
        />
      )}
      
      {/* Theme-aware overlay for better readability */}
      {mounted && resolvedTheme === "dark" && (
        <div 
          className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none"
          style={{
            mixBlendMode: "overlay"
          }}
        />
      )}
    </motion.div>
  );
}

// Hook for theme-aware image utilities
export function useThemeAwareImage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getThemeImage = (lightSrc: string, darkSrc?: string) => {
    if (!mounted) return lightSrc;
    
    const isDark = resolvedTheme === "dark" || theme === "dark";
    return isDark && darkSrc ? darkSrc : lightSrc;
  };

  const getImageFilter = () => {
    if (!mounted) return {};
    
    const isDark = resolvedTheme === "dark" || theme === "dark";
    return {
      filter: isDark 
        ? "brightness(0.9) contrast(1.1) saturate(0.95)" 
        : "brightness(1) contrast(1) saturate(1)",
      transition: "filter 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
    };
  };

  return {
    mounted,
    isDark: resolvedTheme === "dark" || theme === "dark",
    getThemeImage,
    getImageFilter
  };
}
