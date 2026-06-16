'use client'

import dynamic from 'next/dynamic'

const PersistentGemCanvas = dynamic(
  () => import('./PersistentGemCanvas'),
  { ssr: false },
)

export function PersistentGemScene() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      <PersistentGemCanvas />
    </div>
  )
}
