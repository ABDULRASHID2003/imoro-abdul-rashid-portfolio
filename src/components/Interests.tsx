import {
  BarChart3,
  BrainCircuit,
  Globe,
  Rocket,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import { interests, type Interest } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const interestIcons: Record<Interest['icon'], LucideIcon> = {
  data: BarChart3,
  ai: BrainCircuit,
  mobile: Smartphone,
  web: Globe,
  emerging: Rocket,
}

export function Interests() {
  return (
    <section id="interests" className="relative scroll-mt-20 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Interests"
          title="What I'm Exploring"
          subtitle="Areas of technology I'm actively learning about and building towards."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, i) => {
            const Icon = interestIcons[interest.icon]
            return (
              <Reveal key={interest.id} delay={i * 80}>
                <div className="glass glow-card flex items-center gap-3 rounded-full px-6 py-3.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/25 to-violet-500/25">
                    <Icon className="h-4 w-4 text-glow-cyan" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-slate-100">{interest.title}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
