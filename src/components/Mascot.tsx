import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Center,
  Bounds,
} from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/Astronaut.glb");
  // scene.rotation.y = Math.PI;

  return <primitive object={scene} scale={1.5} />;
}

const Mascot = () => {
  return (
    <div className="flex justify-center items-center mx-auto w-1/2 md:max-w-5xl">
      <div className="w-full">
        <div className="w-full aspect-square max-w-[300px] md:max-w-[500px] mx-auto">
          <Canvas>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" environmentIntensity={0.2} />

            <Bounds fit clip margin={1}>
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

export default Mascot;
