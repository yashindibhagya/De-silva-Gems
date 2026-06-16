'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useGSAPContext(
  fn: (context: gsap.Context) => void,
  deps: React.DependencyList = [],
) {
  const ctxRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    ctxRef.current = gsap.context(fn)
    return () => {
      ctxRef.current?.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
