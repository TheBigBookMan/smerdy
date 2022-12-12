import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";

//TODO make it spin around slowly, similar to the background
//TODO make it move side to side

const MyMeshSphere = () => {
  const [active, setActive] = useState(false);
  const myMesh = useRef();
  const { scale } = useSpring({
    scale: active ? 1.3 : 1,
    config: { mass: 2, tension: 300, friction: 6 },
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (!active) {
      myMesh.current.rotation.x = a / 4;
      myMesh.current.rotation.y = a / 4;
      myMesh.current.rotation.z = a / 4;
    } else {
      myMesh.current.rotation.x = a / 1.5;
      myMesh.current.rotation.y = a / 1.5;
      myMesh.current.rotation.z = a / 1.5;
    }
  });

  const changeScale = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <animated.mesh
      ref={myMesh}
      visible
      scale={scale}
      onClick={() => changeScale()}
    >
      <sphereGeometry args={[2, 16, 16]} transparent />
      <meshStandardMaterial wireframe color="rgb(20, 255, 100)" />
    </animated.mesh>
  );
};

const ThreeBall = () => {
  return (
    <div className="border-2 border-white border-solid h-full w-full">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[52, 50, 50]} />
        <MyMeshSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBall;
