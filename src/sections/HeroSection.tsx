'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { registerGSAP, gsap } from '@/animations/gsap'

const HEADLINE_WORDS = ['Rare', 'Gems.', 'Timeless', 'Luxury.']

export function HeroSection() {
  const wordRefs   = useRef<(HTMLSpanElement | null)[]>([])
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()

    const tl = gsap.timeline({ delay: 2.6 })

    wordRefs.current.forEach((el) => {
      if (el) {
        tl.from(
          el,
          { y: 80, opacity: 0, rotateX: -70, duration: 0.9, ease: 'power4.out' },
          '-=0.6',
        )
      }
    })

    tl.from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
    tl.from(ctaRef.current,      { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
    tl.from(scrollRef.current,   { opacity: 0, duration: 0.5 }, '-=0.1')
  }, [])

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Ambient gradients that complement the gem's glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 70% at 72% 50%, rgba(27,58,107,0.28) 0%, rgba(10,10,10,0) 65%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 40% 50% at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Text content — left 55 % of viewport */}
      <div className="relative z-20 w-full lg:w-[55%] px-6 lg:px-24 pt-32 pb-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-[10px] uppercase tracking-[0.4em] mb-8"
          style={{ color: '#C9A84C', fontFamily: 'Cinzel, serif' }}
        >
          Since 1949 · Ratnapura, Sri Lanka
        </motion.p>

        {/* Headline — word-by-word GSAP reveal */}
        <h1
          className="text-5xl lg:text-7xl xl:text-8xl leading-none mb-8"
          style={{ fontFamily: 'Cinzel, serif', color: '#F5F0E8', perspective: '600px' }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-4"
              style={{ overflow: 'hidden', display: 'inline-block' }}
            >
              <span
                ref={(el) => { wordRefs.current[i] = el }}
                className="inline-block"
                style={
                  i >= 2
                    ? {
                        background:
                          'linear-gradient(135deg, #E8C97A 0%, #C9A84C 50%, #A07830 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }
                    : {}
                }
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base lg:text-lg leading-relaxed mb-12 max-w-md"
          style={{
            color: 'rgba(245,240,232,0.55)',
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
          }}
        >
          From the gem-rich soils of Ceylon, we bring the world&rsquo;s most exquisite precious
          stones to discerning collectors and master jewelers across the globe.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <a
            href="#gems-showcase"
            className="inline-flex items-center gap-3 px-10 py-4 text-xs uppercase tracking-[0.25em] transition-all duration-300"
            style={{ fontFamily: 'Cinzel, serif', backgroundColor: '#C9A84C', color: '#0A0A0A' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#E8C97A' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A84C' }}
          >
            Explore Collection
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#brand-story"
            className="inline-flex items-center px-10 py-4 text-xs uppercase tracking-[0.25em] border transition-all duration-300"
            style={{
              fontFamily: 'Cinzel, serif',
              color: 'rgba(245,240,232,0.7)',
              borderColor: 'rgba(245,240,232,0.2)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,240,232,0.5)'
              ;(e.currentTarget as HTMLElement).style.color = '#F5F0E8'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,240,232,0.2)'
              ;(e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.7)'
            }}
          >
            Our Heritage
          </a>
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="w-16 h-px" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
          <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'rgba(201,168,76,0.5)' }}>
            Certified · Authentic · Rare
          </p>
        </div>
      </div>

      {/* Right half — empty but reserves space so the gem (z-10 overlay) appears here */}
      <div className="hidden lg:block lg:w-[45%]" aria-hidden="true" />

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 20 }}
      >
        <p
          className="text-[9px] uppercase tracking-[0.3em]"
          style={{ color: 'rgba(201,168,76,0.5)', fontFamily: 'Cinzel, serif' }}
        >
          Scroll
        </p>
        <motion.div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
