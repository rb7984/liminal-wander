import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import "./App.css";
import { Plane } from "./Plane";
import { Player } from "./Player";
import { Maze } from "./Maze";
import { Light } from "./Light";
import { Lights } from "./Lights";
import { Physics, Debug } from "@react-three/rapier";
import { Banner } from "./Banner";

function App() {
  return (
    <>
      <Banner />
      <Canvas className="canvas" shadows>
        <PerspectiveCamera
          makeDefault
          position={[3, 1.5, 3]}
          lookAt={(0, 1.5, 0)}
        ></PerspectiveCamera>
        <Physics gravity={[0, -5, 0]}>
          <Debug />
          <Player />
          <Plane />
          <Maze />
        </Physics>
        <hemisphereLight intensity={0.3} />
        <Light />
        <Lights />
      </Canvas>
    </>
  );
}

export default App;
