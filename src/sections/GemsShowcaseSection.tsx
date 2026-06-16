'use client'

import { useEffect, useRef } from 'react'
import { GemCard } from '@/components/ui/GemCard'
import { GEM_CATEGORIES } from '@/data/gems'
import { registerGSAP, gsap } from '@/animations/gsap'

export function GemsShowcaseSection() {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()

    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <section
      id="gems-showcase"
      className="py-32 lg:py-40 px-6 lg:px-16 xl:px-24"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Section header */}
      <div ref={headingRef} className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px" style={{ backgroundColor: '#C9A84C' }} />
          <p
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ color: '#C9A84C', fontFamily: 'Cinzel, serif' }}
          >
            The Collection
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2
            className="text-4xl lg:text-6xl"
            style={{ fontFamily: 'Cinzel, serif', color: '#F5F0E8', lineHeight: 1.1 }}
          >
            Treasures of
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
              Sri Lanka
            </span>
          </h2>
          <p
            className="max-w-sm text-sm leading-7"
            style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Each gemstone is individually selected, independently certified, and offered with complete provenance documentation.
          </p>
        </div>
      </div>

      {/* Gem cards grid */}
      <div className="max-w-7xl mx-auto">
        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {GEM_CATEGORIES.slice(0, 3).map((gem, i) => (
            <GemCard key={gem.id} gem={gem} index={i} />
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
          {GEM_CATEGORIES.slice(3).map((gem, i) => (
            <GemCard key={gem.id} gem={gem} index={i + 3} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto mt-16 flex justify-center">
        <a
          href="#"
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] pb-2 transition-all duration-300"
          style={{
            fontFamily: 'Cinzel, serif',
            color: 'rgba(201,168,76,0.7)',
            borderBottom: '1px solid rgba(201,168,76,0.25)',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.color = '#C9A84C'
            ;(e.currentTarget as HTMLElement).style.borderBottomColor = '#C9A84C'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.color = 'rgba(201,168,76,0.7)'
            ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(201,168,76,0.25)'
          }}
        >
          View Complete Catalogue
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
