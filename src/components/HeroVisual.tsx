import { BrainCircuit, Database, LineChart, Smartphone } from 'lucide-react'

/**
 * Abstract developer / data-science visual.
 * No personal photograph is used — this is a stylized code + data + AI composition.
 * Personal hero visual with supporting data-science and AI badges.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Glow backdrop */}
      <div
        className="absolute inset-6 rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-500/15 to-violet-500/25 blur-3xl"
      />

      {/* Code editor card */}
        {/* Personal photo */}
        <div className="glass animate-float relative overflow-hidden rounded-2xl p-3 shadow-2xl shadow-black/40">
          <img
            src="/RASHID.PNG"
            alt="Imoro Abdul Rashid"
            className="aspect-[4/5] w-full rounded-xl object-cover object-top"
          />
      </div>

      {/* Analytics mini-card */}
      <div className="glass animate-float-slow absolute -right-4 -top-10 hidden w-44 rounded-2xl p-4 shadow-xl shadow-black/40 sm:block">
        <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          <LineChart className="h-3.5 w-3.5 text-glow-cyan" />
          Insights
        </p>
        <div className="flex h-16 items-end gap-1.5">
          {[42, 68, 50, 84, 62, 92, 74].map((h, i) => (
            <span
              key={i}
              className="animate-bar flex-1 rounded-t bg-gradient-to-t from-cyan-500/70 to-violet-400/70"
              style={{ height: `${h}%`, animationDelay: `${0.4 + i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Neural / AI badge */}
      <div className="glass animate-float-x absolute -left-5 top-1/3 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-black/40">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30">
          <BrainCircuit className="h-5 w-5 text-glow-violet" />
        </span>
        <span className="text-xs font-semibold text-slate-200">
          Artificial
          <br />
          Intelligence
        </span>
      </div>

      {/* Data badge */}
      <div className="glass animate-float-slow absolute -bottom-8 left-8 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-black/40">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30">
          <Database className="h-5 w-5 text-glow-cyan" />
        </span>
        <span className="text-xs font-semibold text-slate-200">
          Data Science
          <br />&amp; Analytics
        </span>
      </div>

      {/* Mobile badge */}
      <div className="glass animate-float absolute -bottom-6 right-4 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-black/40">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30">
          <Smartphone className="h-5 w-5 text-blue-300" />
        </span>
        <span className="text-xs font-semibold text-slate-200">
          Web &amp; Mobile
          <br />
          Development
        </span>
      </div>

      {/* Decorative connector dots */}
      <svg
        className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="36" cy="60" r="3" fill="#22d3ee" />
        <circle cx="368" cy="120" r="2.5" fill="#a78bfa" />
        <circle cx="330" cy="352" r="3" fill="#60a5fa" />
        <circle cx="60" cy="330" r="2.5" fill="#22d3ee" />
        <path
          d="M36 60 L 200 36 M 368 120 L 250 150 M 330 352 L 220 300 M 60 330 L 150 280"
          stroke="rgba(148,163,184,0.25)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </svg>
    </div>
  )
}
