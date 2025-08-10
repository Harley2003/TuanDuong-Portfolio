"use client";

import { useState } from "react";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Navigation from "@/components/Header";
import Introduce from "@/components/Introduce";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative">
      <AnimatePresence>
        {isLoading ? (
          <SplashScreen onFinish={() => setIsLoading(false)} />
        ) : (
          <>
            <Navigation />
            <Introduce />
            <About />
            <Skill />
            <Project />
            <Certificates />
            <Contact />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
