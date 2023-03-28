import { Canvas } from "@react-three/fiber";
import { Cylinder, PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Plane } from "./Plane";
import { KeyboardControls } from "@react-three/drei";
import { Player } from "./Player";

function App() {
  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      ></KeyboardControls>
      <Canvas>
        <PerspectiveCamera makeDefault position={[3, 3, 3]} />
        <Player />
        <Cylinder />
        <OrbitControls />
        <hemisphereLight intensity={0.5} />
        <Plane />
      </Canvas>
    </>
  );
}

export default App;
