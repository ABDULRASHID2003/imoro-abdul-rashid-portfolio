import { ArrowRight, Github, Sparkles, MapPin } from 'lucide-react'
import { personalInfo, heroText } from '../data/portfolio'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      {/* Ambient background */}
      <div className="grid-overlay absolute inset-0" aria-hidden="true" />
      <div
        className="blob animate-blob left-[-120px] top-[-80px] h-[380px] w-[380px] bg-cyan-500"
        aria-hidden="true"
      />
      <div
        className="blob animate-blob right-[-100px] top-[220px] h-[340px] w-[340px] bg-violet-600"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      />
      <div
        className="blob animate-blob bottom-[-140px] left-[35%] h-[300px] w-[300px] bg-blue-600"
        style={{ animationDelay: '8s' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <p className="hero-enter hero-enter-1 mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="animate-pulse-ring h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Open to Opportunities
          </p>

          <h1 className="hero-enter hero-enter-2 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Imoro Abdul Rashid</span>
          </h1>

          <p className="hero-enter hero-enter-3 mt-4 text-xl font-bold text-white sm:text-2xl">
            <span className="text-gradient">{personalInfo.role}</span>
          </p>

          <p className="hero-enter hero-enter-3 mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {heroText}
          </p>

          <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <Sparkles className="h-4 w-4 text-glow-cyan" aria-hidden="true" />
              Let&apos;s Connect
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub profile"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>

          <p className="hero-enter hero-enter-5 mt-7 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-glow-cyan" aria-hidden="true" />
            {personalInfo.location} &middot; {personalInfo.identity}
          </p>
        </div>

        {/* Visual */}
        <div className="hero-enter hero-enter-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
