import React from 'react'
import * as THREE from 'three'

export function Light() {
  var light = new THREE.DirectionalLight(0xc9e4ff, 0.3)

  light.position.set(0, 50, 0)
  light.lookAt(0, 0, 0)
  light.castShadow = true
  light.shadow.mapSize.width = 4096
  light.shadow.mapSize.height = 4096

  let cameraDimension = 100
  light.shadow.camera.bottom = -cameraDimension
  light.shadow.camera.top = cameraDimension
  light.shadow.camera.left = -cameraDimension
  light.shadow.camera.right = cameraDimension
  light.shadow.camera.far = 100

  return (
    <group>
      <primitive object={light} />;
    </group>
  )
}