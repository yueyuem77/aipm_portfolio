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
    case 'project':   return 'bg-primary-container shadow-[0_0_10px_rgba(200,241,53,0.3)]'
    case 'career':    return 'bg-secondary shadow-[0_0_10px_rgba(232,168,56,0.3)]'
    case 'education': return 'bg-[#75d1ff] shadow-[0_0_10px_rgba(117,209,255,0.3)]'
  }
}

function titleColor(type: TimelineEntry['type']) {
  switch (type) {
    case 'project':   return 'text-acid'
    case 'career':    return 'text-secondary'
    case 'education': return 'text-[#75d1ff]'
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
      {/* Section divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-[1px] bg-primary-container" />
        <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Section_03</span>
        <div className="flex-grow h-[1px] bg-outline-variant/50" />
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl text-primary mb-4">
            ALL WORK
          </h2>
          <p className="font-mono text-acid text-sm uppercase tracking-widest">The Full Record.</p>
        </div>
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-2 border transition-colors ${
                filter === f.key
                  ? 'bg-primary-container text-on-primary-container border-primary-container'
                  : 'border-outline-variant text-outline hover:border-secondary hover:text-secondary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Legend (before timeline for context) */}
      <div className="mb-16 p-5 bg-white border border-outline-variant inline-flex gap-10 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_8px_rgba(200,241,53,0.4)]" />
          <span className="text-on-surface-variant uppercase tracking-wider">Projects</span>
          <span className="text-outline ml-1">← Left rail</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_rgba(232,168,56,0.4)]" />
          <span className="text-on-surface-variant uppercase tracking-wider">Career</span>
          <span className="text-outline ml-1">→ Right rail</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#75d1ff] shadow-[0_0_8px_rgba(117,209,255,0.4)]" />
          <span className="text-on-surface-variant uppercase tracking-wider">Education</span>
          <span className="text-outline ml-1">→ Right rail</span>
        </div>
      </div>

      {/* Dual-rail timeline */}
      <div className="relative min-h-[400px] py-16">
        {/* Center spine */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant md:-translate-x-1/2" />

        <div className="relative space-y-32 md:space-y-44">
          {groups.map((group) => (
            <div key={group.year} className="relative">
              {/* Year marker */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -top-10 bg-background px-4 font-mono text-on-surface border border-outline-variant py-1 text-sm z-10">
                [ {group.year} ]
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-start">
                {/* Left rail: projects */}
                <div className="md:text-right space-y-16 pl-10 md:pl-0">
                  {group.items
                    .filter((item) => item.type === 'project')
                    .map((item) => (
                      <div
                        key={item.id}
                        className={`relative transition-opacity duration-300 ${isDimmed(item) ? 'opacity-20' : 'opacity-100'}`}
                      >
                        <button
                          className="group cursor-pointer text-left md:text-right w-full"
                          onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        >
                          <h3 className={`font-display text-2xl md:text-3xl mb-2 group-hover:text-secondary transition-colors ${titleColor(item.type)}`}>
                            {item.title}
                          </h3>
                          <p className="font-mono text-xs text-outline mb-3 uppercase tracking-tighter">
                            {item.org}
                          </p>
                          <p className="text-on-surface-variant text-sm max-w-sm md:ml-auto">
                            {item.blurb}
                          </p>
                          {item.techStack && (
                            <div className="mt-3 flex flex-wrap md:justify-end gap-2">
                              {item.techStack.map((t) => (
                                <span key={t} className="text-[10px] font-mono border border-outline-variant px-2 py-0.5 text-outline">
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </button>

                        {/* Expanded detail */}
                        {expandedId === item.id && (
                          <div className="mt-4 p-4 bg-surface-container-high border border-outline-variant text-left">
                            <p className="text-sm text-on-surface-variant leading-relaxed">{item.detail}</p>
                            {item.metric && (
                              <div className="mt-3 font-mono text-xs">
                                <span className="text-outline">{item.metric.label}: </span>
                                <span className="text-acid font-bold">{item.metric.value}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Connector dot */}
                        <div className={`absolute -left-[18px] md:left-auto md:-right-[56px] top-3 w-4 h-4 rounded-full border-4 border-background transition-transform hover:scale-150 ${dotColor(item.type)}`} />
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
                        className={`relative transition-opacity duration-300 ${isDimmed(item) ? 'opacity-20' : 'opacity-100'}`}
                      >
                        <button
                          className="group cursor-pointer text-left w-full"
                          onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        >
                          <h3 className={`font-display text-2xl md:text-3xl mb-2 group-hover:text-primary-container transition-colors ${titleColor(item.type)}`}>
                            {item.title}
                          </h3>
                          <p className="font-mono text-xs text-outline mb-3 uppercase tracking-tighter">
                            {item.org}
                          </p>
                          <p className="text-on-surface-variant text-sm max-w-sm">
                            {item.blurb}
                          </p>
                        </button>

                        {expandedId === item.id && (
                          <div className="mt-4 p-4 bg-surface-container-high border border-outline-variant">
                            <p className="text-sm text-on-surface-variant leading-relaxed">{item.detail}</p>
                            {item.metric && (
                              <div className="mt-3 font-mono text-xs">
                                <span className="text-outline">{item.metric.label}: </span>
                                <span className="text-secondary font-bold">{item.metric.value}</span>
                              </div>
                            )}
                            {item.techStack && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {item.techStack.map((t) => (
                                  <span key={t} className="text-[10px] font-mono border border-outline-variant px-2 py-0.5 text-outline">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Connector dot */}
                        <div className={`absolute -left-[18px] md:-left-[56px] top-3 w-4 h-4 rounded-full border-4 border-background transition-transform hover:scale-150 ${dotColor(item.type)}`} />
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
        <div className="h-[1px] w-16 bg-outline-variant" />
        <span className="font-mono text-[10px] text-outline uppercase tracking-widest">End of Record</span>
        <div className="h-[1px] w-16 bg-outline-variant" />
      </div>

      {/* Interaction hint */}
      <p className="mt-6 text-center font-mono text-[10px] text-outline/60">
        Click any entry to expand details · Use filters above to focus
      </p>
    </section>
  )
}
