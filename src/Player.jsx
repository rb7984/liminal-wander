import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { usePersonControls } from "./usePersonControls";
import { Quaternion } from "three";

var SPEED = 0.1;

export function Player() {
  const { forward, backward, left, right, jump } = usePersonControls();

  [angle, setAngle] = useState(0);

  useFrame((state) => {
    // Calculating front/side movement ...
    let frontVector = new THREE.Vector3(0, 0, 0);
    let sideVector = new THREE.Vector3(0, 0, 0);
    let direction = new THREE.Vector3(0, 0, 0);

    frontVector.set(0, 0, Number(forward) - Number(backward));
    sideVector.set(Number(right) - Number(left), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED);

    state.camera.rotateY(Number(right) - Number(left));
    state.camera.position.x += frontVector.z;
    state.camera.position.z += frontVector.x;
  });

  return null;
}
