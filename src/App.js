import { Canvas } from "@react-three/fiber";
import { Cylinder, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import "./App.css";
import { Plane } from "./Plane";
import { Player } from "./Player";
// import { OrbitControls } from "@react-three/drei";
import { Maze } from "./Maze";
import { Light } from "./Light";
import { Lights } from "./Lights";

function App() {
  return (
    <>
      <Canvas shadows>
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
          receiveShadow
          castShadow
          material={new THREE.MeshBasicMaterial(0xff0000)}
          position={[0, 4, 0]}
        />
        <Cylinder position={[15, 3, 2]} />
        <Cylinder position={[40, 0, 0]} />
        <Cylinder position={[30, 3, 30]} />
        <hemisphereLight castShadow intensity={0.3} />
        <Light />
        <Lights />
      </Canvas>
    </>
  );
}

export default App;
