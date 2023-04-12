import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { RigidBody, TrimeshCollider } from "@react-three/rapier";

export function Maze(props) {
  const { nodes } = useGLTF("/maze.glb");
  const ref = useRef();
  var m2 = new THREE.MeshPhongMaterial();

  const texture = new THREE.TextureLoader().load("/tex.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(200, 200);

  m2.map = texture;

  return (
    // <group {...props} dispose={null}>
    <RigidBody {...props} ref={ref} type="fixed" colliders="trimesh">
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Object_1.geometry}
        material={m2}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </RigidBody>
    // </group>
  );
}

useGLTF.preload("/maze.glb");
