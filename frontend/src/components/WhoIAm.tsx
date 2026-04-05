import { identity, aboutStory, contact } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function WhoIAm() {
  const ref = useScrollReveal<HTMLElement>()
  const storyRef = useScrollReveal<HTMLElement>()
  const philRef = useScrollReveal<HTMLDivElement>()
  const skillsRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* ── Who I Am (identity strip) ── */}
      <section id="about" ref={ref} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 pt-40 pb-40 bg-surface-container-low/50">
        {/* Section divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-primary-container" />
          <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Section_01</span>
          <div className="flex-grow h-[1px] bg-outline-variant/50" />
        </div>

        <h2 className="font-display text-4xl text-primary mb-20">WHO I AM</h2>
        <div className="grid md:grid-cols-3 gap-16">
          {/* Identity tags */}
          <div className="space-y-4">
            <p className="font-mono text-xs text-outline uppercase tracking-widest mb-6">
              [IDENTITY_CLUSTER]
            </p>
            <div className="flex flex-wrap gap-2">
              {identity.tags.map((tag) => {
                const colorClass =
                  tag.accent === 'acid'
                    ? 'text-acid border-acid font-bold'
                    : tag.accent === 'secondary'
                      ? 'text-secondary border-secondary font-bold'
                      : 'text-on-surface border-outline-variant'
                return (
                  <span
                    key={tag.label}
                    className={`border-b font-mono text-sm py-1 ${colorClass}`}
                  >
                    {tag.label}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Character sheet */}
          <div className="bg-white p-8 border border-outline-variant border-l-4 border-l-primary-container shadow-sm">
            <div className="font-mono text-[10px] text-on-surface/60 mb-4 font-bold">
              {identity.characterSheet.title}
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-mono mb-1 text-on-surface">
                  <span>XP PROGRESS</span>
                  <span>{identity.characterSheet.xpPercent}%</span>
                </div>
                <div className="w-full h-2 bg-surface-container-highest flex">
                  <div
                    className="h-full bg-primary-container"
                    style={{ width: `${identity.characterSheet.xpPercent}%` }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {identity.characterSheet.stats.map((stat) => (
                  <div key={stat.key}>
                    <div className="text-[10px] font-mono text-outline">
                      {stat.key}: {stat.label}
                    </div>
                    <div className="text-on-surface text-xs font-bold tracking-tight">
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
              [TERMINAL_DATA]
            </p>
            <div className="space-y-4 font-mono text-sm">
              {identity.quickFacts.map((fact) => (
                <div key={fact.icon} className="flex gap-4 items-center">
                  <span className="material-symbols-outlined text-acid text-lg font-bold">
                    {fact.icon}
                  </span>
                  <span className="text-on-surface-variant">{fact.text}</span>
                </div>
              ))}
              <div className="flex gap-4 items-center border-t border-outline-variant pt-4">
                <span className="material-symbols-outlined text-acid text-lg font-bold">code</span>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-bold underline underline-offset-4"
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary-container" />
              <span className="font-mono text-xs text-acid tracking-widest uppercase">
                File_Identifier: LUNA_JOURNEY.LOG
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-on-surface mb-10 leading-tight">
              THE STORY
            </h2>
            <div className="max-w-[680px] space-y-6 text-[17px] leading-relaxed text-on-surface-variant font-body">
              {aboutStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="bg-surface-container-low p-6 pixel-corner relative">
              <div className="absolute inset-0 dither-bg opacity-[0.03]" />
              <div className="relative z-10 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span>_ORIGIN</span>
                  <span className="text-secondary">COG_SCI</span>
                </div>
                <div className="flex justify-between">
                  <span>_CLASS</span>
                  <span className="text-acid">AI_ARCHITECT</span>
                </div>
                <div className="flex justify-between">
                  <span>_XP_TIER</span>
                  <span className="text-secondary">GLOBAL_LEAD</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 mt-4">
                  <div className="bg-primary-container h-full w-[88%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Philosophy ── */}
      <div ref={philRef} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 mb-40">
        {/* Section divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-secondary" />
          <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Core_Values</span>
          <div className="flex-grow h-[1px] bg-outline-variant/50" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl md:text-5xl text-on-surface sticky top-32">
              DESIGN PHILOSOPHY
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutStory.designPhilosophy.map((val) => (
              <div
                key={val.title}
                className="bg-white p-10 border-l-4 border-secondary"
              >
                <div className="text-secondary mb-4">
                  <span className="material-symbols-outlined text-4xl">{val.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Expanded Skills ── */}
      <div ref={skillsRef} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 pb-40">
        {/* Section divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-primary-container" />
          <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Skill_Matrix</span>
          <div className="flex-grow h-[1px] bg-outline-variant/50" />
        </div>

        <div className="border-t border-outline-variant pt-20">
          <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-16">EXPANDED SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-20">
            {/* AI/LLM */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-acid">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
                [AI/LLM_MODELS]
              </div>
              <div className="space-y-4">
                {aboutStory.skills.aiLlm.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between font-mono text-xs mb-1 uppercase">
                      <span>{skill.name}</span>
                      <span>{skill.pct}%</span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-highest">
                      <div
                        className="h-full bg-primary-container"
                        style={{ width: `${skill.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-acid">
                <span className="material-symbols-outlined text-sm">terminal</span>
                [TECHNICAL_STACK]
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutStory.skills.technical.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-surface-container-highest text-on-surface font-mono text-[10px] border border-outline-variant/50"
                  >
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* PM Craft */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-acid">
                <span className="material-symbols-outlined text-sm">architecture</span>
                [PM_CRAFT]
              </div>
              <ul className="space-y-2 font-mono text-xs text-on-surface-variant">
                {aboutStory.skills.pmCraft.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-container" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-secondary">
                <span className="material-symbols-outlined text-sm">translate</span>
                [LANGUAGES]
              </div>
              <div className="space-y-3 font-mono text-xs uppercase">
                {aboutStory.skills.languages.map((l) => (
                  <div key={l.name} className="flex items-center gap-4">
                    <span className="w-20">{l.name}</span>
                    <span className="text-secondary tracking-tighter">{l.bars}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Markets */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-secondary">
                <span className="material-symbols-outlined text-sm">public</span>
                [MARKET_EXPOSURE]
              </div>
              <div className="space-y-3 font-mono text-xs uppercase">
                {aboutStory.skills.markets.map((m) => (
                  <div key={m.name} className="flex items-center gap-4">
                    <span className="w-12">{m.name}</span>
                    <span className="text-acid tracking-tighter">{m.bars}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-secondary">
                <span className="material-symbols-outlined text-sm">school</span>
                [ACADEMIC_FOUNDATION]
              </div>
              <div className="bg-surface-container-low p-4 border border-outline-variant/30">
                <div className="font-headline font-bold text-sm mb-1 uppercase">
                  Cog Sci & Quant Methods
                </div>
                <div className="text-xs font-mono text-on-surface-variant opacity-70">
                  Focus: Neural Networks, Statistics, Decision Theory
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
