"use client";

import { useState } from "react";
import {
  About,
  CareerRoadmap,
  Certificates,
  Contact,
  Introduce,
  ProjectSection as Project,
  Skill
} from "@/components/sections";
import { Header, Footer } from "@/components/layout";
import { SplashScreen } from "@/components/animations";
import { AnimatePresence } from "framer-motion";
import { ScrollProgress } from "@/components";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative no-overflow">
      <AnimatePresence>
        {isLoading ? (
          <SplashScreen onFinish={() => setIsLoading(false)} />
        ) : (
          <>
            <ScrollProgress />
            <Header />
            <Introduce />
            <About />
            <CareerRoadmap />
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
