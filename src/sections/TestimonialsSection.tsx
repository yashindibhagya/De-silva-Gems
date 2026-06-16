'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { GlassmorphismCard } from '@/components/ui/GlassmorphismCard'
import { TESTIMONIALS } from '@/data/testimonials'
import { registerGSAP, gsap } from '@/animations/gsap'

export function TestimonialsSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  useEffect(() => {
    registerGSAP()

    gsap.from(headingRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <section
      className="py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Header */}
      <div ref={headingRef} className="px-6 lg:px-24 mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
          <p
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ color: '#C9A84C', fontFamily: 'Cinzel, serif' }}
          >
            Testimonials
          </p>
          <div className="w-12 h-px" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
        </div>
        <h2
          className="text-3xl lg:text-5xl"
          style={{ fontFamily: 'Cinzel, serif', color: '#F5F0E8', lineHeight: 1.2 }}
        >
          Words from
          <span
            className="block italic"
            style={{
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(135deg, #E8C97A, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Collectors
          </span>
        </h2>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-6">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }}
        />

        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {doubled.map((t, i) => (
            <GlassmorphismCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }}
        />

        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {doubled.map((t, i) => (
            <GlassmorphismCard key={`${t.id}-rev-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
