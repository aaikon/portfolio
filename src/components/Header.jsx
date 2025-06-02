import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Scene } from "three";

const Header = () => {
  const { nodes, materials } = useGLTF("/ball.glb");
  return (
    <header className="flex h-fit w-full flex-col gap-4">
      <nav className="flex h-fit w-full justify-between">
        <div className="flex w-full flex-row items-center justify-start gap-2">
          <h1>ARTTU IKONEN</h1>
          <h2>SOFTWARE DEVELOPER</h2>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-2">
          <a href="https://github.com/aaikon" target="_blank">
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/arttu-ikonen-657911367/"
            target="_blank"
          >
            LINKED IN
          </a>
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-2">
          <h1>TURKU</h1>
          <div className="size-2 rounded-full bg-white" />
        </div>
      </nav>
      <div className="h-[500px] w-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <mesh geometry={nodes.ball.geometry} scale={0.02}>
            <meshPhysicalMaterial
              map={materials.material.map}
              roughnessMap={materials.material.roughnessMap}
              metalnessMap={materials.material.metalnessMap}
              normalMap={materials.material.normalMap}
            />
          </mesh>
          <OrbitControls autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>
    </header>
  );
};

export default Header;
