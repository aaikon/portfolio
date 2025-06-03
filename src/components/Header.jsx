import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { a, useSpring } from "@react-spring/three";

const Header = () => {
  const { nodes } = useGLTF("/models/spikey-ball.glb");

  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 0.012 : 0.01,
    config: { mass: 1, tension: 170, friction: 26 },
  });

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
      <div className="h-[1000px] w-screen -mx-[calc((100vw-100%)/2)] bg-neutral-900 ">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />

          <a.mesh
            geometry={nodes.model.geometry}
            scale={scale}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <meshStandardMaterial />
          </a.mesh>

          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
        </Canvas>
      </div>
    </header>
  );
};

export default Header;
