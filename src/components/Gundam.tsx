import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Center,
  Bounds,
} from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/gundam.glb");
  scene.rotation.y = Math.PI;

  return <primitive object={scene} scale={1.5} />;
}

const Gundam = () => {
  return (
    <div className="flex justify-center items-center mx-auto max-w-5xl">
      <div>
        <div style={{ width: "500px", height: "500px" }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" environmentIntensity={0.2} />

            <Bounds fit clip margin={1.2}>
              <Center>
                <Model />
              </Center>
            </Bounds>

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              rotateSpeed={1}
              autoRotate={false}
              enableDamping
              dampingFactor={0.05}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Gundam;
