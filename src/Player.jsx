import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber/dist/react-three-fiber.cjs";
import { useRef } from "react";
import * as THREE from "three";


const speed = 3;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();

export function Player() {
  const ref = useRef();
  const [, get] = useKeyboardControls();

  useFrame((state) => {
    const { forward, backward, left, right, jump } = get();

    const velocity = ref.current.linvel();
    state.camera.position.set(...ref.current.translation());
    // movement
    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(state.camera.rotation);
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
  });
  return (
    <>
      <RigidBody
        ref={ref}
        colliders={false}
        type="dynamic"
        position={[0, 10, 0]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
    </>
  );
}
