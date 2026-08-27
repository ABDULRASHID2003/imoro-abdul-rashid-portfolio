import { Award, BadgeCheck } from 'lucide-react'
import { certification } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Certifications" title="Certifications" />

        <Reveal className="mx-auto max-w-3xl">
          <article className="relative overflow-hidden rounded-2xl border border-amber-300/20 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 shadow-xl shadow-black/30 sm:p-10">
            {/* Decorative corner flourishes */}
            <div
              className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-2 border-t-2 border-amber-300/40"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 border-b-2 border-r-2 border-amber-300/40"
              aria-hidden="true"
            />

            <div className="flex flex-col items-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-br from-amber-400/20 to-cyan-400/15">
                <Award className="h-8 w-8 text-amber-300" aria-hidden="true" />
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Certificate of Achievement
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                {certification.title}
              </h3>

              <div className="mt-8 grid w-full gap-3 sm:grid-cols-2">
                {certification.areas.map((area) => (
                  <div
                    key={area}
                    className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:border-amber-300/25"
                  >
                    <BadgeCheck className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-200">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
