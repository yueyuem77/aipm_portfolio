import { selectedWork } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SelectedWork() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="work" ref={ref} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 pt-40 pb-40">
      {/* Section divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-[1px] bg-primary-container" />
        <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Section_02</span>
        <div className="flex-grow h-[1px] bg-outline-variant/50" />
      </div>

      <div className="flex items-baseline justify-between mb-20">
        <h2 className="font-display text-4xl text-primary">SELECTED WORK</h2>
        <div className="h-px flex-grow mx-8 bg-outline-variant" />
        <span className="font-mono text-sm text-outline">[2024-2025_FILES]</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {selectedWork.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white p-8 transition-all border border-outline-variant hover:border-on-surface"
          >
            {/* Corner dots */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-on-surface" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-on-surface" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-on-surface" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-on-surface" />

            {/* Image placeholder */}
            <div className="aspect-video bg-surface-container-highest mb-8 overflow-hidden relative">
              <div className="absolute inset-0 dither-bg opacity-5" />
              <div className="w-full h-full flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-outline/30">{project.icon}</span>
              </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline text-2xl font-bold uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-acid font-bold mt-1">{project.year}</p>
              </div>
              <span className="material-symbols-outlined text-acid font-bold">{project.icon}</span>
            </div>

            <p className="text-on-surface-variant font-body mb-8 leading-relaxed">↑ {project.blurb}</p>

            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="bg-surface-container-highest px-3 py-1 font-mono text-[10px] uppercase text-on-surface"
                >
                  LVL. {tag.level} {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
