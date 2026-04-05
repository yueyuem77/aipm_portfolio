import { useState, useEffect } from 'react'
import { navLinks, hero } from '../data/siteData'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full flex justify-between items-center px-8 md:px-16 lg:px-20 py-4 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface-glass-strong backdrop-blur-xl border-b border-outline-variant shadow-[0_4px_30px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#hero"
        className="text-2xl font-display tracking-tight text-primary font-bold hover:text-accent transition-colors duration-300"
      >
        LUNA
      </a>

      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 rounded-lg font-mono text-sm text-on-surface-variant hover:text-accent hover:bg-accent-light transition-all duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <span className="text-outline font-mono text-xs uppercase tracking-wider">EN/中</span>
        <a
          href={hero.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer font-mono text-sm px-5 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.3)]"
        >
          Resume
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-5 bg-primary rounded-full transition-transform duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-0.5 w-5 bg-primary rounded-full transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-5 bg-primary rounded-full transition-transform duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 glass-strong px-8 py-6 md:hidden border-b border-outline-variant">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm text-on-surface-variant hover:text-accent py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm bg-accent text-white px-5 py-2 rounded-lg w-fit mt-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
