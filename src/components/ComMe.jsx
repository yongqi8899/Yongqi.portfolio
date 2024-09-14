import { ContactShadows, OrbitControls, useGLTF, Edges } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Me from "./canvas/Me.jsx";
import CanvasLoader from "./Loader";

const ComMe = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
      <Canvas
        camera={{
          fov: 25,
          position: [3, 10, 3],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ContactShadows
            opacity={0.42}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          />
          <ambientLight intensity={2} />
          <pointLight intensity={1} />
          <primitive object={computer.scene} scale={0.2} position-y={0.25} />
          <group position={[1, -0.52, 0.7]} >
            <Me rotation={[0, 0, -Math.PI / 2]} scale={1.2} />
            <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
              <boxGeometry />
              <meshStandardMaterial color="#915EFF" wireframe />
              <Edges color="#915EFF" lineWidth={2} />
            </mesh>
          </group>
        </Suspense>
      </Canvas>
    </>
  );
};
export default ComMe;
