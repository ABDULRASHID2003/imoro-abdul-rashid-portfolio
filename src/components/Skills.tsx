import {
  BarChart3,
  BrainCircuit,
  Code2,
  Globe,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { skillCategories, type SkillLevel, type SkillCategory } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const categoryIcons: Record<SkillCategory['icon'], LucideIcon> = {
  chart: BarChart3,
  code: Code2,
  globe: Globe,
  phone: Smartphone,
  brain: BrainCircuit,
  wrench: Wrench,
}

const levelStyles: Record<SkillLevel, string> = {
  Proficient: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
  'Working Knowledge': 'border-blue-400/30 bg-blue-400/10 text-blue-300',
  Familiar: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="Tools, languages, and capabilities I use across data science, AI, and software development — labeled honestly, no inflated percentages."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.icon]
            return (
              <Reveal key={category.id} delay={(i % 3) * 100}>
                <article className="glass glow-card flex h-full flex-col rounded-2xl p-6">
                  <header className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-violet-500/25">
                      <Icon className="h-5 w-5 text-glow-cyan" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold text-white">{category.title}</h3>
                  </header>

                  <ul className="flex flex-1 flex-col gap-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3.5 py-2.5 transition-colors hover:border-cyan-400/20 hover:bg-white/[0.06]"
                      >
                        <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                        <span
                          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10.5px] font-semibold ${levelStyles[skill.level]}`}
                        >
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
