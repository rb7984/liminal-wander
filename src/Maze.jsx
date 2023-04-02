import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Maze(props) {
  const { nodes, materials } = useGLTF("/maze.glb");

  var m2 = new THREE.MeshPhongMaterial();

  const texture = new THREE.TextureLoader().load("/tex.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(200, 200);

  m2.map = texture;

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Object_1.geometry}
        material={m2}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1}
      />
    </group>
  );
}

useGLTF.preload("/maze.glb");
