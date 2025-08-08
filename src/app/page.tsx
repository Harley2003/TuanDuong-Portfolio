"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Header";
import Introduce from "@/components/Introduce";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Introduce />
      <About />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}
