import React from 'react'
import * as THREE from 'three'

export function Lights() {
  var light = new THREE.PointLight(0xff00ff, 0.3)

  light.position.set(0, 2, 0)
  light.castShadow = false
  light.shadow.mapSize.width = 512
  light.shadow.mapSize.height = 512

  let cameraDimension = 100
  light.shadow.camera.bottom = -cameraDimension
  light.shadow.camera.top = cameraDimension
  light.shadow.camera.left = -cameraDimension
  light.shadow.camera.right = cameraDimension
  light.shadow.camera.far = 100

  var light2 = new THREE.PointLight(0x0000ff, 0.3)

  light2.position.set(50, 2, 50)
  light2.castShadow = false
  light2.shadow.mapSize.width = 512
  light2.shadow.mapSize.height = 512

  light2.shadow.camera.bottom = -cameraDimension
  light2.shadow.camera.top = cameraDimension
  light2.shadow.camera.left = -cameraDimension
  light2.shadow.camera.right = cameraDimension
  light2.shadow.camera.far = 100

  return (
    <group>
      <primitive object={light} />;
      <primitive object={light2} />;
    </group>
  )
}