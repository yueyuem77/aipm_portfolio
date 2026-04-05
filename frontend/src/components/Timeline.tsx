import { useState, useMemo } from 'react'
import { timelineEntries, type TimelineEntry } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

type FilterType = 'all' | 'career' | 'project' | 'education'

interface YearGroup {
  year: string
  items: TimelineEntry[]
}

function groupByYear(entries: TimelineEntry[]): YearGroup[] {
  const map = new Map<string, TimelineEntry[]>()
  for (const entry of entries) {
    const group = map.get(entry.year) ?? []
    group.push(entry)
    map.set(entry.year, group)
  }
  return Array.from(map.entries()).map(([year, items]) => ({ year, items }))
}

function dotColor(type: TimelineEntry['type']) {
  switch (type) {
    case 'project':   return 'bg-accent shadow-[0_0_12px_rgba(99,102,241,0.4)]'
    case 'career':    return 'bg-accent-cyan shadow-[0_0_12px_rgba(6,182,212,0.4)]'
    case 'education': return 'bg-accent-emerald shadow-[0_0_12px_rgba(16,185,129,0.4)]'
  }
}

function titleColor(type: TimelineEntry['type']) {
  switch (type) {
    case 'project':   return 'text-accent'
    case 'career':    return 'text-accent-cyan'
    case 'education': return 'text-accent-emerald'
  }
}

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'career', label: 'CAREER' },
  { key: 'project', label: 'PROJECTS' },
  { key: 'education', label: 'EDUCATION' },
]

export default function Timeline() {
  const ref = useScrollReveal<HTMLElement>()
  const [filter, setFilter] = useState<FilterType>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const sorted = useMemo(
    () => [...timelineEntries].sort((a, b) => a.sortOrder - b.sortOrder),
    [],
  )
  const groups = useMemo(() => groupByYear(sorted), [sorted])

  const isDimmed = (item: TimelineEntry) => {
    if (filter === 'all') return false
    return item.type !== filter
  }

  return (
    <section id="timeline" ref={ref} className="reveal max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 pt-40 pb-40">
      <div className="section-divider">
        <div className="line w-12" />
        <span className="label">Full Record</span>
        <div className="line flex-grow opacity-30" />
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-primary font-bold mb-3">
            ALL WORK
          </h2>
          <p className="font-mono text-accent text-sm tracking-wider">The Full Record.</p>
        </div>
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`cursor-pointer px-5 py-2 rounded-lg border transition-all duration-300 ${
                filter === f.key
                  ? 'bg-accent text-white border-accent shadow-[0_4px_20px_rgba(99,102,241,0.2)]'
                  : 'border-outline-variant text-outline hover:border-accent/30 hover:text-accent hover:bg-accent-light'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mb-16 glass rounded-xl px-6 py-4 inline-flex gap-8 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
          <span className="text-on-surface-variant">Projects</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
          <span className="text-on-surface-variant">Career</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-accent-emerald shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
          <span className="text-on-surface-variant">Education</span>
        </div>
      </div>

      {/* Dual-rail timeline */}
      <div className="relative min-h-[400px] py-16">
        {/* Center spine */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent-cyan/20 to-accent-emerald/30 md:-translate-x-1/2" />

        <div className="relative space-y-32 md:space-y-40">
          {groups.map((group) => (
            <div key={group.year} className="relative">
              {/* Year marker */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -top-10 glass-strong rounded-lg px-4 py-1.5 font-mono text-sm text-primary font-medium z-10">
                {group.year}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                {/* Left rail: projects */}
                <div className="md:text-right space-y-16 pl-10 md:pl-0">
                  {group.items
                    .filter((item) => item.type === 'project')
                    .map((item) => (
                      <div
                        key={item.id}
                        className={`relative transition-all duration-500 ${isDimmed(item) ? 'opacity-15 scale-[0.98]' : 'opacity-100 scale-100'}`}
                      >
                        <button
                          className="group cursor-pointer text-left md:text-right w-full"
                          onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        >
                          <h3 className={`font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent transition-colors duration-300 ${titleColor(item.type)}`}>
                            {item.title}
                          </h3>
                          <p className="font-mono text-xs text-outline mb-3 uppercase tracking-wider">
                            {item.org}
                          </p>
                          <p className="text-on-surface-variant text-sm max-w-sm md:ml-auto leading-relaxed">
                            {item.blurb}
                          </p>
                          {item.techStack && (
                            <div className="mt-3 flex flex-wrap md:justify-end gap-2">
                              {item.techStack.map((t) => (
                                <span key={t} className="tag-pill text-[9px]">{t}</span>
                              ))}
                            </div>
                          )}
                        </button>

                        {expandedId === item.id && (
                          <div className="mt-4 glass rounded-xl p-5 text-left">
                            <p className="text-sm text-on-surface-variant leading-relaxed">{item.detail}</p>
                            {item.metric && (
                              <div className="mt-4 font-mono text-xs flex items-center gap-2">
                                <span className="text-outline">{item.metric.label}:</span>
                                <span className="text-accent font-bold text-sm">{item.metric.value}</span>
                              </div>
                            )}
                          </div>
                        )}

                        <div className={`absolute -left-[18px] md:left-auto md:-right-[52px] top-3 w-4 h-4 rounded-full border-4 border-background transition-all duration-300 hover:scale-150 ${dotColor(item.type)}`} />
                      </div>
                    ))}
                </div>

                {/* Right rail: career & education */}
                <div className="text-left space-y-16 pl-10 md:pl-0">
                  {group.items
                    .filter((item) => item.type !== 'project')
                    .map((item) => (
                      <div
                        key={item.id}
                        className={`relative transition-all duration-500 ${isDimmed(item) ? 'opacity-15 scale-[0.98]' : 'opacity-100 scale-100'}`}
                      >
                        <button
                          className="group cursor-pointer text-left w-full"
                          onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        >
                          <h3 className={`font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent transition-colors duration-300 ${titleColor(item.type)}`}>
                            {item.title}
                          </h3>
                          <p className="font-mono text-xs text-outline mb-3 uppercase tracking-wider">
                            {item.org}
                          </p>
                          <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
                            {item.blurb}
                          </p>
                        </button>

                        {expandedId === item.id && (
                          <div className="mt-4 glass rounded-xl p-5">
                            <p className="text-sm text-on-surface-variant leading-relaxed">{item.detail}</p>
                            {item.metric && (
                              <div className="mt-4 font-mono text-xs flex items-center gap-2">
                                <span className="text-outline">{item.metric.label}:</span>
                                <span className="text-accent-cyan font-bold text-sm">{item.metric.value}</span>
                              </div>
                            )}
                            {item.techStack && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {item.techStack.map((t) => (
                                  <span key={t} className="tag-pill text-[9px]">{t}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        <div className={`absolute -left-[18px] md:-left-[52px] top-3 w-4 h-4 rounded-full border-4 border-background transition-all duration-300 hover:scale-150 ${dotColor(item.type)}`} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* End marker */}
      <div className="mt-24 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/30" />
        <span className="font-mono text-[10px] text-outline uppercase tracking-widest">End of Record</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/30" />
      </div>

      <p className="mt-6 text-center font-mono text-[10px] text-outline/60">
        Click any entry to expand details
      </p>
    </section>
  )
}
