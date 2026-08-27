import { GraduationCap, BarChart3, BrainCircuit, Code2, Globe, Smartphone } from 'lucide-react'
import { aboutText, personalInfo } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const focusAreas = [
  { id: 'data-science', title: 'Data Science', icon: BarChart3 },
  { id: 'ai', title: 'Artificial Intelligence', icon: BrainCircuit },
  { id: 'software', title: 'Software Development', icon: Code2 },
  { id: 'web', title: 'Web Development', icon: Globe },
  { id: 'mobile', title: 'Mobile Development', icon: Smartphone },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Bio + education */}
          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg">{aboutText}</p>
            </Reveal>

            <Reveal delay={120}>
              <div className="glass glow-card mt-8 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-violet-500/25">
                    <GraduationCap className="h-6 w-6 text-glow-cyan" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Education
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-white">
                      {personalInfo.education.degree}
                    </h3>
                    <p className="mt-0.5 text-sm text-slate-400">
                      {personalInfo.education.institution}
                    </p>
                    <p className="mt-2 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {personalInfo.education.graduation}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Focus area cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {focusAreas.map((area, i) => (
              <Reveal key={area.id} delay={i * 90}>
                <div className="glass glow-card group flex h-full items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 transition-transform duration-300 group-hover:scale-110">
                    <area.icon className="h-5 w-5 text-glow-cyan" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{area.title}</h3>
                </div>
              </Reveal>
            ))}

            {/* Decorative terminal tile to complete the grid */}
            <Reveal delay={focusAreas.length * 90}>
              <div className="glass flex h-full flex-col justify-center rounded-2xl p-5 font-mono text-[11px] leading-5 text-slate-500">
                <span>
                  <span className="text-emerald-400">$</span> whoami
                </span>
                <span className="text-slate-300">data-driven problem solver</span>
                <span>
                  <span className="text-emerald-400">$</span> status
                </span>
                <span className="text-cyan-300">always learning_</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
