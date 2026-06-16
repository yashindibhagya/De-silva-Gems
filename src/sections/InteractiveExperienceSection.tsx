'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { registerGSAP, gsap } from '@/animations/gsap'

export function InteractiveExperienceSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const specsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()

    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: headingRef.current, start: 'top 75%' },
    })

    gsap.from(specsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: specsRef.current, start: 'top 80%' },
    })
  }, [])

  return (
    <section
      id="interactive"
      className="relative py-32 lg:py-48 px-6 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}
    >
      {/* Ambient glow so the floating gem looks lit from this section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 55% at 70% 50%, rgba(27,58,107,0.22) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left: text content */}
        <div ref={headingRef} className="w-full lg:w-5/12 relative z-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ backgroundColor: '#C9A84C' }} />
            <p
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ color: '#C9A84C', fontFamily: 'Cinzel, serif' }}
            >
              3D Experience
            </p>
          </div>

          <h2
            className="text-4xl lg:text-5xl mb-8"
            style={{ fontFamily: 'Cinzel, serif', color: '#F5F0E8', lineHeight: 1.2 }}
          >
            Touch the
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
              Extraordinary
            </span>
          </h2>

          <p
            className="text-base leading-8 mb-10"
            style={{
              color: 'rgba(245,240,232,0.55)',
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
            }}
          >
            Our signature Blue Sapphire journeys through each chapter of this page — a living
            gemstone that catches light differently at every angle as you explore.
          </p>

          {/* Gem specs */}
          <div ref={specsRef} className="space-y-4">
            {[
              { label: 'Origin',        value: 'Ratnapura, Sri Lanka' },
              { label: 'Variety',       value: 'Blue Sapphire (Corundum)' },
              { label: 'Treatment',     value: 'Unheated · Natural' },
              { label: 'Certification', value: 'GIA · IGI Certified' },
              { label: 'Cut',           value: 'Brilliant Octagonal' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between pb-3"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span
                  className="text-xs uppercase tracking-[0.15em]"
                  style={{ color: 'rgba(245,240,232,0.35)', fontFamily: 'Cinzel, serif' }}
                >
                  {label}
                </span>
                <span className="text-xs" style={{ color: 'rgba(245,240,232,0.65)' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll cue */}
          <div className="flex items-center gap-3 mt-10">
            <motion.div
              className="w-8 h-8 rounded-full border flex items-center justify-center"
              style={{ borderColor: 'rgba(201,168,76,0.3)' }}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span style={{ color: '#C9A84C', fontSize: '12px' }}>↓</span>
            </motion.div>
            <p
              className="text-[11px] uppercase tracking-[0.2em]"
              style={{ color: 'rgba(201,168,76,0.5)', fontFamily: 'Cinzel, serif' }}
            >
              Continue scrolling
            </p>
          </div>
        </div>

        {/* Right half — the persistent gem floats here via z-10 overlay */}
        <div className="hidden lg:block lg:w-7/12 h-[500px] relative" aria-hidden="true">
          {/* Decorative ring that frames the floating gem */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              border: '1px solid rgba(201,168,76,0.1)',
              // background:
              //   'radial-gradient(ellipse at center, rgba(27,58,107,0.15) 0%, rgba(10,10,10,0) 70%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
