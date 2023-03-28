import { Canvas } from "@react-three/fiber";
import { Cylinder, PerspectiveCamera } from "@react-three/drei";
import "./App.css";
import { Plane } from "./Plane";
import { Player } from "./Player";
import { Physics } from "use-cannon";

function App() {
  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[3, 3, 3]} />
        <Physics gravity={[0, -30, 0]}>
          <Plane />
          <Player />
        </Physics>
        <Cylinder />
        <hemisphereLight intensity={0.5} />
      </Canvas>
    </>
  );
}

export default App;
