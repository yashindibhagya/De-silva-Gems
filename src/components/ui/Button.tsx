'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'gold' | 'outline' | 'ghost'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  onClick,
  href,
  variant = 'outline',
  className,
  size = 'md',
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-8 py-3 text-xs tracking-[0.2em]',
    md: 'px-12 py-4 text-xs tracking-[0.25em]',
    lg: 'px-16 py-5 text-sm tracking-[0.3em]',
  }

  const variantClasses = {
    gold: 'bg-gold text-obsidian border-gold hover:bg-gold-light',
    outline: 'bg-transparent text-gold border-gold/40 hover:border-gold',
    ghost: 'bg-transparent text-pearl border-pearl/20 hover:border-pearl/60',
  }

  const baseClasses = cn(
    'relative inline-flex items-center justify-center overflow-hidden',
    'uppercase font-cinzel border',
    'transition-colors duration-300',
    sizeClasses[size],
    variantClasses[variant],
    className,
  )

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={baseClasses}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <span className="relative z-10">{children}</span>

      {/* Shimmer overlay */}
      <motion.span
        className="absolute inset-0 -skew-x-12 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.18), transparent)',
        }}
        animate={{ x: ['-120%', '220%'] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: 'easeInOut',
        }}
      />
    </motion.span>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return content
}
