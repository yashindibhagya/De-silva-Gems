'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { type GemData } from '@/data/gems'

interface GemCardProps {
  gem: GemData
  index: number
}

export function GemCard({ gem, index }: GemCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="group"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-2xl overflow-hidden cursor-pointer h-96"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={gem.image}
            alt={gem.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${gem.color}CC 0%, transparent 50%, rgba(0,0,0,0.7) 100%)`,
            }}
          />
        </div>

        {/* Glow border */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `0 0 40px ${gem.accentColor}40, inset 0 0 40px ${gem.accentColor}10`,
            border: `1px solid ${gem.accentColor}50`,
          }}
        />

        {/* Default border */}
        <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end" style={{ transform: 'translateZ(20px)' }}>
          {/* Rarity badge */}
          <div className="mb-auto">
            <span
              className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.2em] rounded-full"
              style={{
                backgroundColor: `${gem.accentColor}20`,
                border: `1px solid ${gem.accentColor}40`,
                color: gem.accentColor,
              }}
            >
              {gem.rarity}
            </span>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-1 opacity-70"
              style={{ color: gem.accentColor }}
            >
              {gem.origin}, Sri Lanka
            </p>
            <h3
              className="text-2xl mb-1"
              style={{ fontFamily: 'Cinzel, serif', color: '#F5F0E8' }}
            >
              {gem.name}
            </h3>
            <p className="text-xs text-pearl/50 italic mb-4">{gem.subtitle}</p>
            <p className="text-sm text-pearl/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
              {gem.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
