"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {Array.from({ length: 150 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1.2, 0],
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
          }}
          transition={{
            duration: 7 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 7,
            ease: "easeInOut",
          }}
          style={{
            width: `${2 + Math.random() * 6}px`,
            height: `${2 + Math.random() * 6}px`,
          }}
        />
      ))}
    </div>
  );
}
