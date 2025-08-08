"use client";

import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";

interface ModelProps {
  scale?: number;
  position?: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ scale = 1, position = [0, 0, 0] }) => {
  const gltf = useGLTF("/models/model.glb") as unknown as {
    scene: Group;
    animations: any[];
  };
  const { scene, animations } = gltf;

  const { actions, mixer } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action?.play());
    }

    return () => {
      mixer.stopAllAction();
    };
  }, [actions, mixer]);

  return <primitive object={scene} scale={scale} position={position} />;
};

export default Model;

useGLTF.preload("/models/model.glb");
