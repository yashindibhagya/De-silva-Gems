'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { registerGSAP, gsap, ScrollTrigger } from '@/animations/gsap'

export function CinematicVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const overlayTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()

    const ctx = gsap.context(() => {
      // Pin the section while scrolling
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
      })

      // Fade overlay text on scroll
      gsap.from(overlayTextRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="cinematic"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Cinematic gradient background (video placeholder) */}
      <div className="absolute inset-0">
        {/* Multi-layer gradient simulating gem light */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 30% 40%, rgba(27,58,107,0.7) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 70% 60%, rgba(107,27,27,0.5) 0%, transparent 55%),
              radial-gradient(ellipse 40% 40% at 50% 50%, rgba(201,168,76,0.2) 0%, transparent 50%),
              #050505
            `,
          }}
        />

        {/* Animated light rays */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'conic-gradient(from 0deg at 50% 40%, transparent 0deg, rgba(201,168,76,0.08) 20deg, transparent 40deg, rgba(27,58,107,0.06) 80deg, transparent 100deg)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      </div>

      {/* Overlay content */}
      <div
        ref={overlayTextRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <p
          className="text-[10px] uppercase tracking-[0.5em] mb-8"
          style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'Cinzel, serif' }}
        >
          The Craft
        </p>

        <h2
          className="text-5xl lg:text-7xl xl:text-8xl mb-8"
          style={{
            fontFamily: 'Cinzel, serif',
            color: '#F5F0E8',
            lineHeight: 1.1,
          }}
        >
          From Earth
          <span
            className="block italic"
            style={{
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(135deg, #E8C97A, #C9A84C, #A07830)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            to Elegance
          </span>
        </h2>

        <p
          className="max-w-xl text-base lg:text-lg leading-8 italic"
          style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'Playfair Display, serif' }}
        >
          Millions of years of geological artistry, transformed by generations of human skill
          into objects of transcendent beauty.
        </p>

        {/* Decorative gems */}
        <div className="flex gap-6 mt-12">
          {['#1B3A6B', '#6B1B1B', '#C9A84C'].map((color, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient blend */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0A0A)',
        }}
      />
    </section>
  )
}
