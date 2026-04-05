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
          <span className="font-mono text-on-primary-container bg-primary-container px-2 py-1 text-sm tracking-widest uppercase">
            {hero.badge} · LVL 03
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl leading-[0.9] text-primary">
          {hero.headline[0]} <br />
          <span className="text-acid">{hero.headline[1]}</span>
        </h1>

        <p className="text-xl text-on-surface-variant max-w-xl font-light">
          {hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-2">
          {hero.roles.map((role) => (
            <span
              key={role}
              className="border border-outline-variant px-3 py-1 font-mono text-xs uppercase text-outline"
            >
              {role}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-6">
          <a
            href="#work"
            className="bg-on-surface text-background px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-on-surface/90 transition-colors"
          >
            → View Work
          </a>
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm underline decoration-dotted underline-offset-4 hover:text-acid transition-colors"
          >
            _DOWNLOAD_RESUME
          </a>
        </div>
      </div>

      {/* Right — profile card */}
      <div className="md:col-span-5 relative group">
        {/* Corner brackets */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-on-surface" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-on-surface" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-on-surface" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-on-surface" />

        <div className="bg-white h-[500px] w-full relative overflow-hidden flex flex-col justify-end p-8 border border-outline-variant shadow-sm">
          <div className="absolute inset-0 dither-bg opacity-5" />

          <div className="relative z-10 font-mono text-on-surface space-y-2 text-sm">
            <p className="bg-on-surface text-background inline-block px-2 py-1">PROFILE.YAML</p>
            <p>name: {hero.profileCard.name}</p>
            <p>role: {hero.profileCard.role}</p>
            <p>lvl: {hero.profileCard.level}</p>
            <p>xp: {hero.profileCard.xp}</p>
          </div>

          {/* Geometric accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-10">
            <div className="w-full h-full border-4 border-on-surface rotate-45 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
