import { hero } from '../data/siteData'

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 grid md:grid-cols-12 gap-16 items-center min-h-screen pt-32 pb-24"
    >
      {/* Left — text */}
      <div className="md:col-span-7 flex flex-col items-start gap-8 stagger">
        <div className="flex items-center gap-3">
          <span className="tag-pill flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            {hero.badge}
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] text-primary font-bold tracking-tight">
          {hero.headline[0]} <br />
          <span className="shimmer-text">{hero.headline[1]}</span>
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-light leading-relaxed">
          {hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-2">
          {hero.roles.map((role) => (
            <span
              key={role}
              className="tag-pill"
            >
              {role}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-4">
          <a
            href="#work"
            className="cursor-pointer bg-accent text-white px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:shadow-[0_8px_30px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 transition-all duration-300"
          >
            View Work
          </a>
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-mono text-sm text-on-surface-variant hover:text-accent underline decoration-dotted underline-offset-4 transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right — profile card */}
      <div className="md:col-span-5 relative group">
        <div className="glass rounded-2xl p-8 hover-lift gradient-border overflow-hidden">
          {/* Ambient glow inside card */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-cyan/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-outline">profile.yaml</span>
            </div>

            {/* Profile data */}
            <div className="font-mono text-sm space-y-3">
              <div className="flex gap-3">
                <span className="text-accent">name:</span>
                <span className="text-primary font-medium">{hero.profileCard.name}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">role:</span>
                <span className="text-primary font-medium">{hero.profileCard.role}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">level:</span>
                <span className="text-primary font-medium">{hero.profileCard.level}</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs text-outline mb-2">
                  <span>XP Progress</span>
                  <span>87%</span>
                </div>
                <div className="h-2 rounded-full bg-surface-container-highest overflow-hidden">
                  <div className="h-full rounded-full gradient-bar" style={{ width: '87%' }} />
                </div>
              </div>
            </div>

            {/* Stats mini-grid */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-outline-variant">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent font-display">3+</div>
                <div className="text-xs text-outline font-mono mt-1">Years XP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-cyan font-display">6</div>
                <div className="text-xs text-outline font-mono mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-emerald font-display">3</div>
                <div className="text-xs text-outline font-mono mt-1">Markets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-amber font-display">2</div>
                <div className="text-xs text-outline font-mono mt-1">Degrees</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
