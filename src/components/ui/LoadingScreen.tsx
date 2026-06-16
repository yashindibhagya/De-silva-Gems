'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame: number
    const start = performance.now()
    const duration = 2200

    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(100, Math.floor((elapsed / duration) * 100))
      setProgress(p)

      if (p < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setIsLoading(false), 400)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0A0A0A' }}
          exit={{
            y: '-100%',
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Animated gem SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
            animate={{ opacity: 1, scale: 1, rotateY: 360 }}
            transition={{ duration: 1.2, ease: 'easeOut', rotateY: { duration: 3, repeat: Infinity, ease: 'linear' } }}
            className="mb-10"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <polygon
                points="40,4 72,22 72,58 40,76 8,58 8,22"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                opacity="0.8"
              />
              <polygon
                points="40,18 60,28 60,52 40,62 20,52 20,28"
                fill="#C9A84C"
                opacity="0.15"
              />
              <line x1="40" y1="4" x2="40" y2="18" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
              <line x1="72" y1="22" x2="60" y2="28" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
              <line x1="72" y1="58" x2="60" y2="52" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
              <line x1="40" y1="76" x2="40" y2="62" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
              <line x1="8" y1="58" x2="20" y2="52" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
              <line x1="8" y1="22" x2="20" y2="28" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
              <circle cx="40" cy="40" r="3" fill="#C9A84C" opacity="0.9" />
            </svg>
          </motion.div>

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xs uppercase tracking-[0.3em] mb-8"
            style={{ color: '#C9A84C', fontFamily: 'Cinzel, serif' }}
          >
            Ceylon Gems
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-px" style={{ backgroundColor: 'rgba(201,168,76,0.15)' }}>
            <motion.div
              className="h-full"
              style={{
                backgroundColor: '#C9A84C',
                width: `${progress}%`,
              }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-[10px] tracking-[0.2em] uppercase"
            style={{ color: '#888880' }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
