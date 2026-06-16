'use client'

import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import { DraggableGem } from './DraggableGem'
import { MouseLight } from './MouseLight'

export default function InteractiveGemCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', touchAction: 'none' }}
      frameloop="demand"
    >
      <AdaptiveDpr pixelated />

      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={3} color="#C9A84C" />
      <directionalLight position={[-5, 3, -5]} intensity={1.5} color="#4488DD" />

      <Suspense fallback={null}>
        <DraggableGem />
        <MouseLight />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  )
}
