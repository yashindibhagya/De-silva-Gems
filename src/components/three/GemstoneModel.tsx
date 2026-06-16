'use client'

import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

interface GemstoneModelProps {
  color?: string
  speed?: number
  scale?: number
}

export function GemstoneModel({
  color = '#2255CC',
  speed = 0.3,
  scale = 1,
}: GemstoneModelProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * speed
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.12
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * speed * 0.5
      innerRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
    }
  })

  return (
    <group scale={scale}>
      {/* Outer gemstone */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.4, 2]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.05}
          roughness={0.0}
          transmission={0.92}
          thickness={2.0}
          ior={2.42}
          reflectivity={1.0}
          envMapIntensity={4}
          iridescence={0.5}
          iridescenceIOR={1.5}
          clearcoat={1}
          clearcoatRoughness={0}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Inner glow core */}
      <mesh ref={innerRef} scale={0.6}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>

      {/* Ambient point light inside gem */}
      <pointLight color={color} intensity={3} distance={4} decay={2} />
    </group>
  )
}
