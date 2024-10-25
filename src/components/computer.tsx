"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Computer(): JSX.Element {
  const isMobile = useMediaQuery("(max-width: 880px)");

  const computer = useGLTF("./computer/scene.gltf");
  const scale = isMobile ? 1 : 1.2;
  const position = isMobile ? [0, -3.2, -1] : [0, -3.8, -1.5];

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <mesh position={[0, 0.8, 0]}>
        <hemisphereLight intensity={0.25} groundColor="white" />
        <pointLight intensity={1} />
        <ambientLight intensity={1} />
        <spotLight intensity={0.6} angle={0.2} penumbra={1} castShadow />
        <primitive
          object={computer.scene}
          scale={scale}
          position={position}
          rotation={[0, -0.8, 0]}
        />
      </mesh>
      <Preload all />
    </Canvas>
  );
}
