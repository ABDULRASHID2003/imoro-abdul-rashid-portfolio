import { useMemo, useState } from 'react'
import { projectFilters, projects, type ProjectCategory } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

type Filter = 'All' | ProjectCategory

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="relative scroll-mt-20 py-24">
      {/* Subtle backdrop accent */}
      <div
        className="blob animate-blob right-[-140px] top-[10%] h-[360px] w-[360px] bg-blue-700"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Some of the projects I've built while exploring software development, artificial intelligence, and data-driven solutions."
        />

        {/* Filters */}
        <Reveal className="mb-10">
          <div className="flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter projects by category">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  filter === f
                    ? 'btn-gradient text-white shadow-lg shadow-cyan-500/20'
                    : 'glass text-slate-400 hover:border-cyan-400/30 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} animationKey={filter} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-16 text-center text-sm text-slate-500">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  )
}
