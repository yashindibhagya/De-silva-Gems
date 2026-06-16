'use client'

import { useEffect, useRef, useState } from 'react'

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

export function useCountUp(target: number, duration = 2.5) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true
        observer.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const elapsed = (now - start) / (duration * 1000)
          const progress = Math.min(1, easeOutQuart(elapsed))
          setCount(Math.floor(progress * target))
          if (elapsed < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
