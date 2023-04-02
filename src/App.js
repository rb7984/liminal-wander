import { Canvas } from "@react-three/fiber";
import { Cylinder, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import "./App.css";
import { Plane } from "./Plane";
import { Player } from "./Player";
// import { OrbitControls } from "@react-three/drei";
import { Maze } from "./Maze";

function App() {
  return (
    <>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[3, 1.5, 3]}
          lookAt={(0, 1.5, 0)}
        ></PerspectiveCamera>
        <Player />

        <Plane />
        <Maze />
        {/* <OrbitControls /> */}
        <Cylinder position={[10, 0, 30]} />
        <Cylinder position={[5, 0, 10]} />
        <Cylinder
          material={new THREE.MeshBasicMaterial(0xff0000)}
          position={[0, 0, 0]}
        />
        <Cylinder position={[15, 3, 2]} />
        <Cylinder position={[40, 0, 0]} />
        <Cylinder position={[30, 3, 30]} />
        <hemisphereLight castShadow intensity={0.5} />
        <spotLight castShadow position={[0, 50, 0]} intensity={1} />
      </Canvas>
    </>
  );
}

export default App;
