"use client";

import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Environment } from "@react-three/drei";
import SkillIcon3D from "./SkillIcon3D";
import { allSkills } from "../../data/skill";

const calculatePositions = (count: number, radius: number) => {
  const positions: [number, number, number][] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;

    const x = Math.cos(theta) * radiusAtY * radius;
    const z = Math.sin(theta) * radiusAtY * radius;

    positions.push([x, y * radius * 0.8, z]);
  }
  return positions;
};

const SkillCanvas = () => {
  const positions = useMemo(
    () => calculatePositions(allSkills.length, 4.5),
    []
  );

  return (
    <div className="relative w-full h-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />

      {/* Canvas */}
      <Canvas
        camera={{ position: [0, 0, 14], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        className="rounded-3xl"
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 0, 10]} intensity={0.5} color="#ffffff" />

        {/* Environment for better reflections */}
        <Environment preset="city" />

        <Suspense fallback={null}>
          {allSkills.map((skill, index) => (
            <SkillIcon3D
              key={skill.name}
              icon={skill.icon}
              position={positions[index]}
              color={skill.color}
              name={skill.name}
            />
          ))}
          <Preload all />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default SkillCanvas;
