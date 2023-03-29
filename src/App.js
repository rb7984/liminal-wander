import { Canvas } from "@react-three/fiber";
import {
  Cylinder,
  PerspectiveCamera,
  KeyboardControls,
} from "@react-three/drei";
import "./App.css";
import { Plane } from "./Plane";

function App() {
  return (
    <>
      <KeyboardControls />
      <Canvas>
        <PerspectiveCamera makeDefault position={[3, 3, 3]} />

        <Plane />

        <Cylinder />
        <hemisphereLight intensity={0.5} />
      </Canvas>
    </>
  );
}

export default App;
