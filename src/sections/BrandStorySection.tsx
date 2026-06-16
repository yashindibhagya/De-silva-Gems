'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { registerGSAP, gsap, ScrollTrigger } from '@/animations/gsap'

const STORY_BLOCKS = [
  {
    heading: 'Born from Ancient Earth',
    text: 'For over two thousand years, the island of Ceylon — now Sri Lanka — has yielded some of the world\'s most spectacular gemstones. Ancient kings treasured them; Marco Polo marveled at them. Today, we honor that legacy.',
  },
  {
    heading: 'The Gem Capital of the World',
    text: 'Ratnapura, meaning "City of Gems" in Sinhala, sits above ancient riverbeds and alluvial deposits formed over millions of years. The unique geological conditions produce sapphires, rubies, and cat\'s eyes of extraordinary quality found nowhere else.',
  },
  {
    heading: 'Craftsmanship Across Generations',
    text: 'Our master gemologists have spent lifetimes learning to read light, evaluate crystal structure, and recognize the subtle qualities that separate a fine stone from an extraordinary one. Each gem that bears our provenance has passed through hands trained by generations before them.',
  },
  {
    heading: 'A Promise of Authenticity',
    text: 'Every stone we offer comes with complete documentation: geological origin, treatment history, and independent certification. We believe that luxury and transparency are inseparable — true connoisseurship begins with trust.',
  },
]

export function BrandStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textBlocksRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    registerGSAP()

    const ctx = gsap.context(() => {
      // Pin the image while text scrolls
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: imageRef.current,
        pinSpacing: false,
      })

      // Fade-up each text block
      textBlocksRef.current.forEach((el) => {
        if (!el) return
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      // Parallax on image
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="brand-story"
      ref={sectionRef}
      className="relative flex"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Left: Sticky image */}
      <div
        ref={imageRef}
        className="hidden lg:block w-1/2 h-screen sticky top-0 overflow-hidden"
      >
        <Image
          src="/gems/gems-collection.webp"
          alt="Sri Lankan gem mining heritage"
          fill
          className="object-cover"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0) 40%, rgba(10,10,10,0.8) 100%)',
          }}
        />

        {/* Decorative text overlay */}
        <div className="absolute bottom-12 left-10 right-10">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-2"
            style={{ color: 'rgba(201,168,76,0.7)', fontFamily: 'Cinzel, serif' }}
          >
            Ratnapura · Sri Lanka
          </p>
          <p
            className="text-2xl italic"
            style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'Playfair Display, serif' }}
          >
            Where earth meets eternity
          </p>
        </div>
      </div>

      {/* Right: Scrolling text blocks */}
      <div className="w-full lg:w-1/2 px-6 lg:px-16 py-32 flex flex-col gap-32">
        {/* Section label */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ backgroundColor: '#C9A84C' }} />
            <p
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ color: '#C9A84C', fontFamily: 'Cinzel, serif' }}
            >
              Our Heritage
            </p>
          </div>
          <h2
            className="text-4xl lg:text-5xl"
            style={{ fontFamily: 'Cinzel, serif', color: '#F5F0E8', lineHeight: 1.2 }}
          >
            The Story of
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
              Ceylon Gems
            </span>
          </h2>
        </div>

        {/* Story blocks */}
        {STORY_BLOCKS.map((block, i) => (
          <div
            key={i}
            ref={(el) => { if (el) textBlocksRef.current[i] = el }}
            className="max-w-lg"
          >
            <h3
              className="text-xl mb-5"
              style={{ fontFamily: 'Cinzel, serif', color: '#C9A84C' }}
            >
              {block.heading}
            </h3>
            <p
              className="text-base leading-8"
              style={{ color: 'rgba(245,240,232,0.65)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
            >
              {block.text}
            </p>
            <div
              className="mt-8 w-8 h-px"
              style={{ backgroundColor: 'rgba(201,168,76,0.3)' }}
            />
          </div>
        ))}

        {/* Mobile image */}
        <div className="lg:hidden w-full h-72 relative rounded-2xl overflow-hidden">
          <Image
            src="/gems/gems-collection.webp"
            alt="Sri Lankan gem mining heritage"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
