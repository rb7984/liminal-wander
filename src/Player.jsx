import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { usePersonControls } from "./usePersonControls";

var SPEED = 0.1;

export function Player() {
  const { forward, backward, left, right } = usePersonControls();
  // var [angle, setAngle] = useState(0);

  useFrame((state) => {
    // Calculating front/side movement ...
    let frontVector = new THREE.Vector3(0, 0, 0);
    let sideVector = new THREE.Vector3(0, 0, 0);
    let direction = new THREE.Vector3(0, 0, 0);

    let direction2 = new THREE.Vector3(0, 0, 0);
    state.camera.getWorldDirection(direction2);
    direction2.multiplyScalar(Number(forward) - Number(backward));
    // console.log(direction2);

    frontVector.set(0, 0, Number(forward) - Number(backward));
    sideVector.set(Number(right) - Number(left), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED);

    var angle = -(Number(right) - Number(left)) * 0.05;
    // setAngle(angle - (Number(right) - Number(left)) * 0.05);
    state.camera.rotateY(angle);

    state.camera.position.x += direction2.x * 0.2;
    state.camera.position.z += direction2.z * 0.2;
    // state.camera.position.x += frontVector.z;
    // state.camera.position.z += frontVector.x;
  });

  return null;
}
