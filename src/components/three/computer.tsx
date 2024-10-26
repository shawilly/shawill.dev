"use client";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Computer(): JSX.Element {
  const computer = useGLTF("./computer/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 90,
        near: 0.1,
        far: 40, // Increased far to ensure the entire object fits within view
        position: [0, 0, 10], // Adjusted position for a better perspective
      }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <hemisphereLight
        intensity={0.35}
        groundColor="white"
        position={[0, 10, 0]}
      />
      <spotLight
        position={[10, 10, 10]}
        intensity={0.8}
        angle={0.3}
        penumbra={1}
        castShadow
      />
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.7} position={[-10, 10, -10]} />

      <mesh position={[-1, -2, 0]}>
        <primitive
          object={computer.scene}
          scale={1.5} // Adjusted scale for better visibility
          position-y={0} // Recentered on Y axis
          rotation={[0, -0.8, 0]} // Adjusted rotation for a better angle
        />
      </mesh>

      <Preload all />
    </Canvas>
  );
}
