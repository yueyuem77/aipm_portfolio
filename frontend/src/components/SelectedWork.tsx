import { selectedWork } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SelectedWork() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="work" ref={ref} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 pt-40 pb-40">
      {/* Section header */}
      <div className="section-divider">
        <div className="line w-12" />
        <span className="label">Featured Projects</span>
        <div className="line flex-grow opacity-30" />
      </div>

      <div className="flex items-baseline justify-between mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-primary font-bold">SELECTED WORK</h2>
        <span className="hidden md:block font-mono text-sm text-outline">[2024–2025]</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {selectedWork.map((project, i) => (
          <div
            key={project.id}
            className="group glass rounded-2xl p-8 hover-lift gradient-border cursor-pointer"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Image placeholder */}
            <div className="aspect-video rounded-xl bg-gradient-to-br from-surface-container to-surface-container-highest mb-8 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-outline/20 group-hover:text-accent/30 transition-colors duration-500">
                  {project.icon}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-accent-emerald font-medium mt-1.5">{project.year}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-accent group-hover:text-white text-lg transition-colors duration-300">
                  arrow_outward
                </span>
              </div>
            </div>

            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{project.blurb}</p>

            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag.label} className="tag-pill">
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
