import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { usePersonControls } from "./usePersonControls";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

var speed = 0.1;

export function Player() {
  const { forward, backward, left, right } = usePersonControls();
  // const ref = useRef();
  var refx = useRef(0);
  var refz = useRef(0);
  const body = useRef();

  useFrame((state) => {
    // Calculating front/side movement ...
    let frontVector = new THREE.Vector3(0, 0, 0);
    let sideVector = new THREE.Vector3(0, 0, 0);
    let direction = new THREE.Vector3(0, 0, 0);

    let direction2 = new THREE.Vector3(0, 0, 0);
    state.camera.getWorldDirection(direction2);
    direction2.multiplyScalar(Number(forward) - Number(backward));

    frontVector.set(0, 0, Number(forward) - Number(backward));
    sideVector.set(Number(right) - Number(left), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed);

    var angle = -(Number(right) - Number(left)) * 0.05;
    state.camera.rotateY(angle);

    state.camera.position.x += direction2.x * 0.2;
    state.camera.position.z += direction2.z * 0.2;

    refx = state.camera.position.x;
    refz = state.camera.position.z;
  });

  return (
    <RigidBody
      ref={body}
      position={[refx, 3, refz]}
      mass={1}
      colliders="cuboid"
      type="dynamic"
    >
      <CapsuleCollider args={[0.75, 0.5]} />
    </RigidBody>
  );
}
