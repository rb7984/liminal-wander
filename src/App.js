import { Canvas } from "@react-three/fiber";
import { Cylinder, PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Plane } from "./Plane";

function App() {
  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[3,3,3]}/>
        <Cylinder />
        <OrbitControls />
        <hemisphereLight intensity={0.5} />
        <Plane />
      </Canvas>
    </>
  );
}

export default App;
