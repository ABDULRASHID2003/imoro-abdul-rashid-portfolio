import { Leaf, Dumbbell, HeartHandshake, Users, type LucideIcon } from 'lucide-react'
import type { Project } from '../data/portfolio'

const visualIcons: Record<Project['visual'], LucideIcon> = {
  tomato: Leaf,
  gym: Dumbbell,
  health: HeartHandshake,
  alumni: Users,
}

const visualLabels: Record<Project['visual'], string> = {
  tomato: 'Agriculture and AI illustration',
  gym: 'Gym dashboard illustration',
  health: 'Community health app illustration',
  alumni: 'Alumni network illustration',
}

/**
 * Abstract, CSS/SVG-based project artwork.
 * No real screenshots are faked — each visual is a stylized illustration.
 */
export function ProjectVisual({ project }: { project: Project }) {
  const Icon = visualIcons[project.visual]

  return (
    <div
      role="img"
      aria-label={visualLabels[project.visual]}
      className={`project-visual relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent} ${
        project.featured ? 'sm:h-64' : ''
      }`}
    >
      {/* Grid texture */}
      <div className="grid-overlay absolute inset-0 opacity-70" aria-hidden="true" />

      {/* Concentric scan rings for the AI project */}
      {project.visual === 'tomato' && (
        <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden="true">
          <circle cx="50%" cy="55%" r="70" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="50%" cy="55%" r="110" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="50%" cy="55%" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 10" />
        </svg>
      )}

      {/* Dashboard bars for web projects */}
      {(project.visual === 'gym' || project.visual === 'alumni') && (
        <div className="absolute bottom-0 left-6 right-6 flex items-end gap-2 opacity-25" aria-hidden="true">
          {[38, 62, 45, 80, 55, 70, 48, 64].map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-white" style={{ height: `${h}px` }} />
          ))}
        </div>
      )}

      {/* Map dots for health project */}
      {project.visual === 'health' && (
        <svg className="absolute inset-0 h-full w-full opacity-35" aria-hidden="true">
          {[
            [60, 50], [120, 90], [200, 60], [280, 110], [340, 55], [160, 140], [240, 150],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill="white" />
              <circle cx={x} cy={y} r="10" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
            </g>
          ))}
          <path
            d="M60 50 L 120 90 L 200 60 L 280 110 L 340 55 M 120 90 L 160 140 L 240 150 L 280 110"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3 6"
          />
        </svg>
      )}

      {/* Center emblem */}
      <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/25 bg-night-900/60 shadow-2xl backdrop-blur-sm">
        <Icon className="h-9 w-9 text-white" aria-hidden="true" />
      </span>
    </div>
  )
}
