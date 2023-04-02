import React from "react";
import * as THREE from "three";

export function Plane() {
  var g2 = new THREE.PlaneGeometry(2000, 2000, 8, 8);
  var m2 = new THREE.MeshPhongMaterial();

  const texture = new THREE.TextureLoader().load("/tex.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(300, 300);

  m2.map = texture;

  var plane = new THREE.Mesh(g2, m2);
  plane.rotateX(-Math.PI / 2);
  plane.translateY(1);
  plane.receiveShadow = true;
  plane.castShadow = true;

  return <primitive object={plane} />;
}
