"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GridBackground from "./GridBackground";
import Image from "next/image";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const title = "Welcome";
  const subtitle = "To My Portfolio";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 5000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [onFinish]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }}
      className="splash-screen w-screen h-screen splash-gradient-web3 flex items-center justify-center relative overflow-hidden"
    >
      <GridBackground />
      <div className="text-center z-10">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="splash-title text-foreground text-6xl font-bold drop-shadow-lg"
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="splash-subtitle text-foreground text-2xl mt-4 drop-shadow-md"
        >
          {subtitle}
        </motion.p>

        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
