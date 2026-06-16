'use client'

import { useEffect, useRef } from 'react'
import { useCountUp } from '@/hooks/useCountUp'
import { STATS, type Stat } from '@/data/stats'
import { registerGSAP, gsap } from '@/animations/gsap'

function StatCounter({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.value, 2.5)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center text-center py-10 px-6"
      style={{ borderLeft: '1px solid rgba(201,168,76,0.1)' }}
    >
      {/* Value */}
      <div className="flex items-end gap-1 mb-3">
        <span
          className="text-5xl lg:text-6xl xl:text-7xl leading-none"
          style={{
            fontFamily: 'Cinzel, serif',
            background: 'linear-gradient(135deg, #E8C97A, #C9A84C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {count.toLocaleString()}
        </span>
        {stat.suffix && (
          <span
            className="text-3xl lg:text-4xl pb-1"
            style={{ color: '#C9A84C', fontFamily: 'Cinzel, serif' }}
          >
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p
        className="text-xs uppercase tracking-[0.25em] mb-2"
        style={{ color: '#F5F0E8', fontFamily: 'Cinzel, serif' }}
      >
        {stat.label}
      </p>

      {/* Description */}
      <p
        className="text-[11px]"
        style={{ color: 'rgba(245,240,232,0.35)' }}
      >
        {stat.description}
      </p>
    </div>
  )
}

export function StatisticsSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
      className="py-32 lg:py-40 px-6 lg:px-24"
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(201,168,76,0.08)',
        borderBottom: '1px solid rgba(201,168,76,0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            <p
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ color: '#C9A84C', fontFamily: 'Cinzel, serif' }}
            >
              Our Legacy
            </p>
            <div className="w-12 h-px" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
          </div>
          <h2
            className="text-3xl lg:text-4xl"
            style={{ fontFamily: 'Cinzel, serif', color: '#F5F0E8' }}
          >
            Trust Built Over Generations
          </h2>
        </div>

        {/* Stats grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCounter key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Bottom quote */}
        <div className="text-center mt-20">
          <p
            className="text-lg lg:text-xl italic max-w-2xl mx-auto"
            style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'Playfair Display, serif' }}
          >
            &ldquo;The finest gemstones are not merely purchased — they are inherited, collected, and passed
            through generations as tokens of enduring value.&rdquo;
          </p>
          <p
            className="text-[10px] uppercase tracking-[0.3em] mt-4"
            style={{ color: 'rgba(201,168,76,0.4)', fontFamily: 'Cinzel, serif' }}
          >
            — The Ceylon Gems Founding Charter, 1949
          </p>
        </div>
      </div>
    </section>
  )
}
