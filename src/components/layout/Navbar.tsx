'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Heritage', href: '#brand-story' },
  { label: 'Collection', href: '#gems-showcase' },
  { label: 'Atelier', href: '#cinematic' },
  { label: 'Experience', href: '#interactive' },
  { label: 'Contact', href: '#cta' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 80)
  })

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5, ease: 'easeOut' }}
    >
      <div
        className="flex items-center justify-between py-4 lg:py-6 transition-all duration-500"
        style={{
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent',
          backgroundColor: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 80 80" fill="none">
            <polygon
              points="40,4 72,22 72,58 40,76 8,58 8,22"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="2"
            />
            <circle cx="40" cy="40" r="6" fill="#C9A84C" />
          </svg>
          <span
            className="text-sm tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Cinzel, serif', color: '#C9A84C' }}
          >
            Ceylon Gems
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] transition-colors duration-300"
                style={{ color: 'rgba(245,240,232,0.6)', fontFamily: 'Cinzel, serif' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#C9A84C' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.6)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#gems-showcase"
            className="text-[11px] uppercase tracking-[0.2em] px-6 py-2 border transition-all duration-300"
            style={{
              fontFamily: 'Cinzel, serif',
              color: '#C9A84C',
              borderColor: 'rgba(201,168,76,0.35)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(201,168,76,0.08)'
              ;(e.currentTarget as HTMLElement).style.borderColor = '#C9A84C'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.35)'
            }}
          >
            Enquire
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-transform duration-300"
            style={{
              backgroundColor: '#C9A84C',
              transform: menuOpen ? 'rotate(45deg) translate(2px, 3px)' : 'none',
            }}
          />
          <span
            className="block w-4 h-px transition-all duration-300"
            style={{
              backgroundColor: '#C9A84C',
              opacity: menuOpen ? 0 : 1,
              width: menuOpen ? 0 : '1rem',
            }}
          />
          <span
            className="block w-6 h-px transition-transform duration-300"
            style={{
              backgroundColor: '#C9A84C',
              transform: menuOpen ? 'rotate(-45deg) translate(2px, -3px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden py-6 px-4"
          style={{ backgroundColor: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(20px)' }}
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(245,240,232,0.7)', fontFamily: 'Cinzel, serif' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
