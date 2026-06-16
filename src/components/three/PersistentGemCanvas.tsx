'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, AdaptiveDpr } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { registerGSAP, gsap, ScrollTrigger } from '@/animations/gsap'
import { ParticleField } from './ParticleField'
import { MouseLight } from './MouseLight'

// ─── Shared mutable scroll target ────────────────────────────────────────────
const gem = {
  x: 2.6, y: -0.1, z: 0,
  scale: 1.4,
}

// ─── Real gem image (textured plane) ─────────────────────────────────────────
function GemImage() {
  const texture   = useTexture('/gem.webp')
  const meshRef   = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (meshRef.current) {
      // Subtle Y-axis oscillation (±18°) — gem tilts left/right, never goes edge-on
      meshRef.current.rotation.y = Math.sin(t * 0.38) * 0.32
      // Gentle X tilt for depth
      meshRef.current.rotation.x = Math.sin(t * 0.22) * 0.09
    }
  })

  return (
    <group>
      {/* The actual gem image on a plane */}
      <mesh ref={meshRef}>
        <planeGeometry args={[3.0, 3.0]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.02}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>

      {/* Red point light — gives red cast on surrounding particles/scene */}
      <pointLight color="#CC2200" intensity={6} distance={6} decay={2} />
    </group>
  )
}

// ─── Scroll-driven wrapper ────────────────────────────────────────────────────
function ScrollDrivenGem() {
  const groupRef     = useRef<THREE.Group>(null)
  const currentPos   = useRef(new THREE.Vector3(gem.x, gem.y, gem.z))
  const currentScale = useRef(gem.scale)

  useEffect(() => {
    registerGSAP()

    const id = requestAnimationFrame(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2.5,
          refreshPriority: -10,
        },
      })

      // Hero start: x:2.6 y:-0.1 z:0 scale:1.4

      // → Brand Story (tall section)
      tl.to(gem, { x: 5.5, y: 2.8, z: -5, scale: 0.18, duration: 3 }, 0)

      // → Gems Showcase
      tl.to(gem, { x: -3.2, y: 0.6, z: 0.5, scale: 0.9, duration: 1.5 })

      // → Cinematic Video (dramatic center reveal, very large)
      tl.to(gem, { x: 0, y: 0.3, z: 2.8, scale: 3.2, duration: 2 })

      // → Interactive Experience
      tl.to(gem, { x: 3.6, y: -0.3, z: 0.5, scale: 1.3, duration: 2 })

      // → Statistics (retreats to corner, tiny)
      tl.to(gem, { x: 4.8, y: 2, z: -3, scale: 0.2, duration: 1.5 })

      // → Testimonials (deep background, almost invisible)
      tl.to(gem, { x: -5.5, y: 0.5, z: -8, scale: 0.08, duration: 1.5 })

      // → CTA (returns center)
      tl.to(gem, { x: 0, y: 0.3, z: 1.0, scale: 1.1, duration: 1.5 })
    })

    return () => {
      cancelAnimationFrame(id)
      ScrollTrigger.getAll().forEach((t) => {
        if ((t.vars as { trigger?: string }).trigger === 'body') t.kill()
      })
    }
  }, [])

  useFrame((state) => {
    const g = groupRef.current
    if (!g) return

    // Smooth lerp toward GSAP targets
    currentPos.current.lerp(
      { x: gem.x, y: gem.y, z: gem.z } as THREE.Vector3Like,
      0.048,
    )
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, gem.scale, 0.048)

    g.position.copy(currentPos.current)
    g.scale.setScalar(currentScale.current)

    // Gentle floating bob
    g.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.04
  })

  return (
    <group ref={groupRef}>
      <GemImage />
    </group>
  )
}

// ─── Full scene ───────────────────────────────────────────────────────────────
function GemScene() {
  return (
    <>
      {/* Scene lights (affect particles, not the BasicMaterial gem image) */}
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 6, 4]}  color="#C9A84C" intensity={8} distance={18} decay={2} />
      <pointLight position={[-4, -4, 4]} color="#882222" intensity={5} distance={14} decay={2} />

      <Suspense fallback={null}>
        <ScrollDrivenGem />
        <ParticleField />
        <MouseLight />
      </Suspense>
    </>
  )
}

// ─── Exported canvas ──────────────────────────────────────────────────────────
export default function PersistentGemCanvas() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <AdaptiveDpr pixelated />
      <GemScene />
    </Canvas>
  )
}
