import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 text-center sm:px-6">
        <div className="flex gap-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send an email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <p className="text-sm text-slate-500">
          &copy; 2026 {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-600">Built with curiosity, code &amp; continuous learning.</p>
      </div>
    </footer>
  )
}
