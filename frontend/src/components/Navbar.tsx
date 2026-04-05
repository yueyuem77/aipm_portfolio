import { useState } from 'react'
import { navLinks, hero } from '../data/siteData'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 md:px-16 lg:px-20 py-4 mx-auto bg-background/80 backdrop-blur-md border-b border-outline-variant z-50">
      <a href="#hero" className="text-2xl font-mono tracking-tighter text-on-surface font-bold">
        LUNA
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-on-surface/60 font-mono hover:text-secondary transition-colors duration-150"
          >
            [{link.label}]
          </a>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-6">
        <span className="text-on-surface/60 font-mono text-xs uppercase">EN/CH</span>
        <a
          href={hero.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface font-mono border border-on-surface/30 px-4 py-1 hover:bg-on-surface hover:text-background transition-all active:scale-95"
        >
          → Resume
        </a>
      </div>

      {/* Mobile */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-5 bg-on-surface transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-0.5 w-5 bg-on-surface transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-5 bg-on-surface transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-outline-variant px-8 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-on-surface/60 font-mono hover:text-secondary"
              >
                [{link.label}]
              </a>
            ))}
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface font-mono border border-on-surface/30 px-4 py-1 w-fit"
            >
              → Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
