"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const Model = dynamic(() => import("../ui/model"), { ssr: false });

export default function Avatar() {
  return (
    <div
      className="w-full max-w-md h-[500px] lg:h-[600px] mx-auto"
      style={{ pointerEvents: "none" }}
    >
      <Canvas camera={{ position: [0, 1.2, 3.2], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <Model scale={1.2} position={[0, -0.8, 0]} />
      </Canvas>
    </div>
  );
}
