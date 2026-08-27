import {
  BarChart2,
  BookOpen,
  Lightbulb,
  MessagesSquare,
  RefreshCw,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { strengths, type Strength } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const strengthIcons: Record<Strength['icon'], LucideIcon> = {
  analytical: BarChart2,
  problem: Lightbulb,
  team: Users,
  adaptability: RefreshCw,
  communication: MessagesSquare,
  learning: BookOpen,
}

export function Strengths() {
  return (
    <section id="strengths" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Strengths"
          title="Beyond the Code"
          subtitle="The personal strengths I bring to every team and project."
        />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {strengths.map((strength, i) => {
            const Icon = strengthIcons[strength.icon]
            return (
              <Reveal key={strength.id} delay={i * 80}>
                <div className="glass glow-card group flex h-full flex-col items-center gap-4 rounded-2xl p-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6 text-glow-cyan" aria-hidden="true" />
                  </span>
                  <h3 className="text-[13px] font-semibold leading-snug text-white">
                    {strength.title}
                  </h3>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
