import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Me from "./canvas/Me.jsx";
import CanvasLoader from "./Loader";

const ContactMe = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 15,
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
          <Me />
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="#4D5E55" />
          </mesh>
        </Suspense>
      </Canvas>
    </>
  );
};
export default ContactMe;
