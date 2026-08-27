import { Check, Github, ExternalLink, Star } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisual'

interface ProjectCardProps {
  project: Project
  /** Re-triggers the entrance animation when the filter changes */
  animationKey: string | number
}

export function ProjectCard({ project, animationKey }: ProjectCardProps) {
  return (
    <article
      key={`${animationKey}-${project.id}`}
      className={`group project-enter glass glow-card flex flex-col overflow-hidden rounded-2xl ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="overflow-hidden">
        <ProjectVisual project={project} />
      </div>

      <div className={`flex flex-1 flex-col p-6 ${project.featured ? 'sm:p-8' : ''}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-300">
            {project.categoryLabel}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-300">
              <Star className="h-3 w-3" aria-hidden="true" />
              Featured Project
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-[13px] text-slate-300">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions — honest buttons only: no invented URLs */}
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="GitHub repository not published yet"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-500"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub — Coming Soon
            </button>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="Live demo not available yet"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-500"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Live Demo — Coming Soon
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
