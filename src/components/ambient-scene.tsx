"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function StarField() {
  const pointsRef = useRef<THREE.Points>(null!);
  const geometry = useMemo(() => {
    const count = 360;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const a = ((i * 9301 + 49297) % 233280) / 233280;
      const b = ((i * 49297 + 9301) % 233280) / 233280;
      const c = ((i * 1877 + 3217) % 233280) / 233280;
      positions[i * 3] = (a - 0.5) * 15;
      positions[i * 3 + 1] = (b - 0.5) * 8;
      positions[i * 3 + 2] = (c - 0.5) * 7;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((_, delta) => {
    pointsRef.current.rotation.y += delta * 0.009;
    pointsRef.current.rotation.x = Math.sin(performance.now() * 0.00008) * 0.025;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial color="#e8c98d" size={0.026} transparent opacity={0.78} sizeAttenuation />
    </points>
  );
}

function Orbit() {
  const orbitRef = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    orbitRef.current.rotation.z += delta * 0.018;
  });
  return (
    <group position={[2.45, 0.7, -1.2]}>
      <mesh>
        <sphereGeometry args={[0.36, 32, 32]} />
        <meshBasicMaterial color="#f0d7a7" />
      </mesh>
      <mesh position={[0.14, 0.1, 0.08]}>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshBasicMaterial color="#07110f" />
      </mesh>
      <mesh ref={orbitRef} rotation={[0.7, 0.28, 0.18]}>
        <torusGeometry args={[0.68, 0.006, 8, 96]} />
        <meshBasicMaterial color="#c9a66c" transparent opacity={0.34} />
      </mesh>
      <pointLight color="#d6b77d" intensity={1.1} distance={4} />
    </group>
  );
}

export default function AmbientScene() {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 1.25]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        fallback={<div className="scene-fallback" />}
      >
        <ambientLight intensity={0.3} />
        <StarField />
        <Orbit />
      </Canvas>
    </div>
  );
}
