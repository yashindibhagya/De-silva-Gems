'use client'

import { type Testimonial } from '@/data/testimonials'

interface GlassmorphismCardProps {
  testimonial: Testimonial
}

export function GlassmorphismCard({ testimonial }: GlassmorphismCardProps) {
  return (
    <div
      className="flex-shrink-0 w-80 p-6 rounded-2xl"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} style={{ color: '#C9A84C', fontSize: '12px' }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: 'rgba(245,240,232,0.75)', fontStyle: 'italic' }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #A07830)',
            color: '#0A0A0A',
            fontFamily: 'Cinzel, serif',
            fontWeight: 600,
          }}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p
            className="text-xs font-semibold"
            style={{ color: '#F5F0E8', fontFamily: 'Cinzel, serif' }}
          >
            {testimonial.name}
          </p>
          <p className="text-[10px] mt-0.5" style={{ color: 'rgba(245,240,232,0.4)' }}>
            {testimonial.title} · {testimonial.country}
          </p>
        </div>
      </div>
    </div>
  )
}
