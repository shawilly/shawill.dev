"use client";

import { PointMaterial, Points, Preload } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.cjs";
import { useRef, useState } from "react";

const Stars = (): JSX.Element => {
  const ref = useRef<THREE.Points>(null!);

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  const [sphere] = useState(
    () =>
      random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array,
  );

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export function StarsCanvas(): JSX.Element {
  return (
    <div className="w-full bg-ponokai-background h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
}
