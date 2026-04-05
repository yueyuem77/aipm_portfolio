import { identity, aboutStory, contact } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function WhoIAm() {
  const ref = useScrollReveal<HTMLElement>()
  const storyRef = useScrollReveal<HTMLElement>()
  const philRef = useScrollReveal<HTMLDivElement>()
  const skillsRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* ── Who I Am ── */}
      <section id="about" ref={ref} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 pt-40 pb-40">
        <div className="section-divider">
          <div className="line w-12" />
          <span className="label">About</span>
          <div className="line flex-grow opacity-30" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-primary font-bold mb-16">WHO I AM</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Identity tags */}
          <div className="space-y-6">
            <p className="font-mono text-xs text-outline uppercase tracking-widest">Identity</p>
            <div className="flex flex-wrap gap-2">
              {identity.tags.map((tag) => {
                const cls =
                  tag.accent === 'acid'
                    ? 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20'
                    : tag.accent === 'secondary'
                      ? 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20'
                      : 'bg-surface-container text-on-surface-variant border-outline-variant'
                return (
                  <span
                    key={tag.label}
                    className={`tag-pill ${cls}`}
                  >
                    {tag.label}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Character sheet */}
          <div className="glass rounded-2xl p-8">
            <div className="font-mono text-xs text-accent font-medium mb-6 uppercase tracking-wider">
              {identity.characterSheet.title}
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-2 text-on-surface-variant">
                  <span>XP PROGRESS</span>
                  <span className="text-accent font-medium">{identity.characterSheet.xpPercent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                  <div
                    className="h-full rounded-full gradient-bar skill-bar"
                    style={{ '--skill-width': `${identity.characterSheet.xpPercent}%` } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-outline-variant">
                {identity.characterSheet.stats.map((stat) => (
                  <div key={stat.key}>
                    <div className="text-[10px] font-mono text-outline uppercase">
                      {stat.key}: {stat.label}
                    </div>
                    <div className="text-accent text-xs font-bold tracking-tight mt-1">
                      {stat.bars}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="space-y-6">
            <p className="font-mono text-xs text-outline uppercase tracking-widest">
              Quick Facts
            </p>
            <div className="space-y-4 font-mono text-sm">
              {identity.quickFacts.map((fact) => (
                <div key={fact.icon} className="flex gap-4 items-center group cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <span className="material-symbols-outlined text-accent group-hover:text-white text-base transition-colors duration-300">
                      {fact.icon}
                    </span>
                  </div>
                  <span className="text-on-surface-variant">{fact.text}</span>
                </div>
              ))}
              <div className="flex gap-4 items-center border-t border-outline-variant pt-4">
                <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent text-base">code</span>
                </div>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium underline underline-offset-4 hover:text-accent-cyan transition-colors"
                >
                  github.com/luna
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Story ── */}
      <section ref={storyRef} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 pt-40 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="section-divider">
              <div className="line w-12" />
              <span className="label text-accent">Luna_Journey.log</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-primary font-bold mb-10 leading-tight">
              THE STORY
            </h2>
            <div className="max-w-[680px] space-y-6 text-[17px] leading-relaxed text-on-surface-variant">
              {aboutStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="glass rounded-2xl p-6 pixel-corner">
              <div className="font-mono text-xs space-y-3">
                <div className="flex justify-between">
                  <span className="text-outline">_ORIGIN</span>
                  <span className="text-accent-cyan font-medium">COG_SCI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">_CLASS</span>
                  <span className="text-accent-emerald font-medium">AI_ARCHITECT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">_XP_TIER</span>
                  <span className="text-accent font-medium">GLOBAL_LEAD</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 mt-4 rounded-full overflow-hidden">
                  <div className="gradient-bar h-full rounded-full" style={{ width: '88%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Philosophy ── */}
      <div ref={philRef} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 mb-40">
        <div className="section-divider mb-16">
          <div className="line w-12" style={{ background: 'linear-gradient(90deg, var(--color-accent-cyan), transparent)' }} />
          <span className="label">Core Values</span>
          <div className="line flex-grow opacity-30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl md:text-5xl text-primary font-bold sticky top-32">
              DESIGN<br />PHILOSOPHY
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutStory.designPhilosophy.map((val, i) => {
              const accents = ['accent', 'accent-cyan', 'accent-emerald', 'accent-amber']
              const accent = accents[i % accents.length]
              return (
                <div
                  key={val.title}
                  className="glass rounded-2xl p-8 hover-lift cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${accent}/10 flex items-center justify-center mb-5`}>
                    <span className={`material-symbols-outlined text-${accent} text-2xl`}>{val.icon}</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary mb-3">{val.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{val.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Expanded Skills ── */}
      <div ref={skillsRef} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 pb-40">
        <div className="section-divider">
          <div className="line w-12" />
          <span className="label">Skill Matrix</span>
          <div className="line flex-grow opacity-30" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-primary font-bold mb-16">EXPANDED SKILLS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI/LLM */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 font-mono text-xs text-accent font-medium mb-6">
              <span className="material-symbols-outlined text-sm">smart_toy</span>
              AI / LLM
            </div>
            <div className="space-y-5">
              {aboutStory.skills.aiLlm.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between font-mono text-xs mb-2 uppercase text-on-surface-variant">
                    <span>{skill.name}</span>
                    <span className="text-accent font-medium">{skill.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full gradient-bar skill-bar"
                      style={{ '--skill-width': `${skill.pct}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan font-medium mb-6">
              <span className="material-symbols-outlined text-sm">terminal</span>
              TECHNICAL STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {aboutStory.skills.technical.map((t) => (
                <span key={t} className="tag-pill bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20">
                  {t.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* PM Craft */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-emerald font-medium mb-6">
              <span className="material-symbols-outlined text-sm">architecture</span>
              PM CRAFT
            </div>
            <ul className="space-y-3 font-mono text-xs text-on-surface-variant">
              {aboutStory.skills.pmCraft.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-amber font-medium mb-6">
              <span className="material-symbols-outlined text-sm">translate</span>
              LANGUAGES
            </div>
            <div className="space-y-4 font-mono text-xs uppercase">
              {aboutStory.skills.languages.map((l) => (
                <div key={l.name} className="flex items-center gap-4">
                  <span className="w-16 text-on-surface-variant">{l.name}</span>
                  <span className="text-accent-amber tracking-tighter font-bold">{l.bars}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Markets */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 font-mono text-xs text-accent font-medium mb-6">
              <span className="material-symbols-outlined text-sm">public</span>
              MARKET EXPOSURE
            </div>
            <div className="space-y-4 font-mono text-xs uppercase">
              {aboutStory.skills.markets.map((m) => (
                <div key={m.name} className="flex items-center gap-4">
                  <span className="w-12 text-on-surface-variant">{m.name}</span>
                  <span className="text-accent tracking-tighter font-bold">{m.bars}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan font-medium mb-6">
              <span className="material-symbols-outlined text-sm">school</span>
              ACADEMIC FOUNDATION
            </div>
            <div>
              <div className="font-headline font-bold text-sm mb-2 text-primary uppercase">
                Cog Sci & Quant Methods
              </div>
              <div className="text-xs font-mono text-on-surface-variant leading-relaxed">
                Focus: Neural Networks, Statistics, Decision Theory
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
