'use client'

export function Footer() {
  return (
    <footer
      className="py-12 px-6 lg:px-24"
      style={{
        borderTop: '1px solid rgba(201,168,76,0.12)',
        backgroundColor: '#0A0A0A',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 80 80" fill="none">
            <polygon
              points="40,4 72,22 72,58 40,76 8,58 8,22"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="2"
            />
            <circle cx="40" cy="40" r="5" fill="#C9A84C" />
          </svg>
          <span
            className="text-sm tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Cinzel, serif', color: '#C9A84C' }}
          >
            Ceylon Gems
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8">
          {['Collection', 'Heritage', 'Certification', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] transition-colors duration-200"
              style={{ color: 'rgba(245,240,232,0.35)', fontFamily: 'Cinzel, serif' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#C9A84C' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.35)' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-[10px] tracking-[0.1em]"
          style={{ color: 'rgba(245,240,232,0.25)', fontFamily: 'Cinzel, serif' }}
        >
          © 2024 Ceylon Gems · Sri Lanka
        </p>
      </div>
    </footer>
  )
}
