'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null)
  const { mouse, viewport } = useThree()
  const target = useRef(new THREE.Vector3(0, 0, 3))

  useFrame(() => {
    if (!lightRef.current) return
    target.current.set(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      2.5,
    )
    lightRef.current.position.lerp(target.current, 0.06)
  })

  return (
    <pointLight
      ref={lightRef}
      intensity={60}
      distance={12}
      color="#C9A84C"
      decay={2}
    />
  )
}
