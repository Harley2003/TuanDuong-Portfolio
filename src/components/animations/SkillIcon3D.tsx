"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { IconType } from "react-icons";

interface SkillIcon3DProps {
  icon: IconType;
  position: [number, number, number];
  color: string;
  name: string;
}

export default function SkillIcon3D({ icon: IconComponent, position, color, name }: SkillIcon3DProps) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const memoizedIcon = useMemo(() => {
    return (
      <div className="relative group">
        {/* Main Icon Container */}
        <div
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center transition-all duration-500 ease-out cursor-pointer"
          style={{
            background: hovered 
              ? `linear-gradient(135deg, ${color}15, ${color}25)` 
              : `linear-gradient(135deg, ${color}10, ${color}20)`,
            backdropFilter: "blur(20px)",
            border: `1px solid ${color}30`,
            boxShadow: hovered
              ? `0 20px 40px ${color}20, 0 0 0 1px ${color}40, inset 0 1px 0 rgba(255,255,255,0.1)`
              : `0 8px 32px ${color}15, 0 0 0 1px ${color}20, inset 0 1px 0 rgba(255,255,255,0.05)`,
            transform: hovered ? "scale(1.1) translateY(-4px)" : "scale(1)",
          }}
        >
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, ${color}20, transparent 70%)`,
              filter: "blur(8px)",
            }}
          />
          
          {/* Icon */}
          <IconComponent 
            className="relative z-10 transition-all duration-300"
            style={{
              fontSize: hovered ? "2.5rem" : "2.25rem",
              color: hovered ? color : `${color}E6`,
              filter: hovered ? `drop-shadow(0 0 8px ${color}80)` : "none",
            }}
          />
          
          {/* Shine Effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
            }}
          />
        </div>

        {/* Skill Name Tooltip */}
        <div 
          className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(10px)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {name}
          {/* Arrow */}
          <div 
            className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
            style={{
              background: "rgba(0,0,0,0.8)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderBottom: "none",
              borderRight: "none",
            }}
          />
        </div>
      </div>
    );
  }, [IconComponent, color, name, hovered]);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.2; // Slower rotation
      ref.current.position.y = position[1] + Math.sin(t * 1.2 + position[0]) * 0.15; // Gentle floating
    }
  });

  if (!isClient) {
    return null;
  }

  return (
    <group
      ref={ref}
      position={position}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
    >
      <Html center>
        {memoizedIcon}
      </Html>
    </group>
  );
}