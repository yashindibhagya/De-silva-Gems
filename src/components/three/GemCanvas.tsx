'use client'

import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import { GemstoneModel } from './GemstoneModel'
import { ParticleField } from './ParticleField'
import { MouseLight } from './MouseLight'

interface GemCanvasProps {
  className?: string
}

export default function GemCanvas({ className }: GemCanvasProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      className={className}
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <ambientLight intensity={0.3} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#C9A84C" />
      <directionalLight position={[-5, -5, -5]} intensity={1} color="#4488DD" />

      <Suspense fallback={null}>
        <GemstoneModel color="#2255CC" speed={0.25} />
        <ParticleField />
        <MouseLight />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}
