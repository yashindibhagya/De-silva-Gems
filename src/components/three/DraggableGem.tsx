'use client'

import { useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { GemstoneModel } from './GemstoneModel'

export function DraggableGem() {
  const groupRef = useRef<THREE.Group>(null)
  const isDragging = useRef(false)
  const velocity = useRef({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const onPointerDown = useCallback((e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    isDragging.current = true
  }, [])

  const onPointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const onPointerMove = useCallback(
    (e: { movementX: number; movementY: number }) => {
      if (!isDragging.current || !groupRef.current) return
      velocity.current.x = e.movementY * 0.008
      velocity.current.y = e.movementX * 0.008
      groupRef.current.rotation.x += velocity.current.x
      groupRef.current.rotation.y += velocity.current.y
    },
    [],
  )

  return (
    <group
      ref={groupRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => {
        setIsHovered(false)
        isDragging.current = false
      }}
      scale={isHovered ? 1.05 : 1}
    >
      <GemstoneModel color="#1B3A6B" speed={0.2} scale={1.4} />
    </group>
  )
}
