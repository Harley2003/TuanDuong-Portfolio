"use client";

import { useEffect, useState } from "react";

export default function ThemeWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Enable transitions after hydration
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition-disabled');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Disable transitions during hydration to prevent flash
  useEffect(() => {
    if (!mounted) {
      document.documentElement.classList.add('theme-transition-disabled');
    }
  }, [mounted]);

  // Show loading state while hydrating
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background text-foreground theme-transition-disabled">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
    </div>
  );
}
