'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { registerGSAP, gsap } from '@/animations/gsap'

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      tl.from(
        subRef.current,
        { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4',
      )
      tl.from(
        ctaRef.current,
        { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.3',
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-40 lg:py-60 px-6 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Background ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-px" style={{ backgroundColor: 'rgba(201,168,76,0.3)' }} />
          <svg width="16" height="16" viewBox="0 0 80 80" fill="none">
            <polygon points="40,4 72,22 72,58 40,76 8,58 8,22" fill="none" stroke="#C9A84C" strokeWidth="2" />
            <circle cx="40" cy="40" r="5" fill="#C9A84C" />
          </svg>
          <div className="w-16 h-px" style={{ backgroundColor: 'rgba(201,168,76,0.3)' }} />
        </div>

        {/* Main heading */}
        <h2
          ref={headingRef}
          className="text-5xl lg:text-7xl xl:text-8xl mb-8"
          style={{ fontFamily: 'Cinzel, serif', color: '#F5F0E8', lineHeight: 1.1 }}
        >
          Discover Rare
          <span
            className="block italic mt-2"
            style={{
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(135deg, #E8C97A 0%, #C9A84C 45%, #A07830 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Elegance
          </span>
        </h2>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="text-base lg:text-xl leading-8 italic mb-14 max-w-2xl mx-auto"
          style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'Playfair Display, serif' }}
        >
          Begin your journey into the world of extraordinary gemstones.
          Our curators are available to guide you toward the stone
          that speaks to you alone.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="mailto:enquiries@ceylongems.lk"
            className="relative inline-flex items-center justify-center gap-3 px-14 py-5 text-xs uppercase tracking-[0.3em] overflow-hidden"
            style={{
              fontFamily: 'Cinzel, serif',
              backgroundColor: '#C9A84C',
              color: '#0A0A0A',
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Request a Consultation</span>
            <motion.span
              className="absolute inset-0 -skew-x-12"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
              animate={{ x: ['-120%', '220%'] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5 }}
            />
          </motion.a>

          <motion.a
            href="#gems-showcase"
            className="inline-flex items-center justify-center gap-3 px-14 py-5 text-xs uppercase tracking-[0.3em] border transition-all duration-300"
            style={{
              fontFamily: 'Cinzel, serif',
              color: 'rgba(245,240,232,0.7)',
              borderColor: 'rgba(245,240,232,0.2)',
            }}
            whileHover={{
              scale: 1.03,
              borderColor: 'rgba(245,240,232,0.5)',
              color: '#F5F0E8',
            }}
            whileTap={{ scale: 0.97 }}
          >
            Browse Collection
          </motion.a>
        </div>

        {/* Contact details */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {[
            { label: 'Email', value: 'enquiries@ceylongems.lk' },
            { label: 'WhatsApp', value: '+94 77 123 4567' },
            { label: 'Location', value: 'Colombo, Sri Lanka' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p
                className="text-[9px] uppercase tracking-[0.3em] mb-1"
                style={{ color: 'rgba(201,168,76,0.4)', fontFamily: 'Cinzel, serif' }}
              >
                {label}
              </p>
              <p className="text-xs" style={{ color: 'rgba(245,240,232,0.45)' }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
