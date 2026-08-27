import { useState, type FormEvent } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import {
  buildMailtoLink,
  submitContactForm,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from '../lib/contact'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const emptyForm: ContactFormData = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(emptyForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<'idle' | 'needs-email' | 'sent'>('idle')

  const update = (field: keyof ContactFormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validation = validateContactForm(form)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    const result = await submitContactForm(form)
    setStatus(result.ok ? 'sent' : 'needs-email')
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400/60 focus:outline-none ${
      hasError ? 'border-rose-400/60' : 'border-white/10'
    }`

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24">
      {/* Ambient background */}
      <div
        className="blob animate-blob left-[-120px] bottom-[-100px] h-[340px] w-[340px] bg-violet-600"
        aria-hidden="true"
      />
      <div
        className="blob animate-blob right-[-100px] top-[10%] h-[300px] w-[300px] bg-cyan-600"
        style={{ animationDelay: '5s' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Meaningful"
          subtitle="Have a project, opportunity, or idea you'd like to discuss? I'd be happy to connect."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Direct channels */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass glow-card flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25">
                  <Mail className="h-5 w-5 text-glow-cyan" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </span>
                  <span className="text-sm font-medium text-white">{personalInfo.email}</span>
                </span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="glass glow-card flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/25">
                  <Phone className="h-5 w-5 text-glow-violet" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Phone
                  </span>
                  <span className="text-sm font-medium text-white">{personalInfo.phone}</span>
                </span>
              </a>

              <div className="glass glow-card flex items-center gap-4 rounded-2xl p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-violet-500/25">
                  <MapPin className="h-5 w-5 text-glow-cyan" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Location
                  </span>
                  <span className="text-sm font-medium text-white">{personalInfo.location}</span>
                </span>
              </div>

              <div className="mt-2 flex gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="glass flex h-12 w-12 items-center justify-center rounded-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View GitHub profile"
                  className="glass flex h-12 w-12 items-center justify-center rounded-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send an email"
                  className="glass flex h-12 w-12 items-center justify-center rounded-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-slate-300">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update('name')(e.target.value)}
                    className={inputClass(Boolean(errors.name))}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-slate-300">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update('email')(e.target.value)}
                    className={inputClass(Boolean(errors.email))}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={form.subject}
                  onChange={(e) => update('subject')(e.target.value)}
                  className={inputClass(Boolean(errors.subject))}
                  aria-invalid={Boolean(errors.subject)}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-rose-400">{errors.subject}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  value={form.message}
                  onChange={(e) => update('message')(e.target.value)}
                  className={`${inputClass(Boolean(errors.message))} resize-y`}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="btn-gradient mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>

              {status === 'sent' && (
                <p className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300" role="status">
                  Thanks! Your message has been sent.
                </p>
              )}

              {status === 'needs-email' && (
                <div
                  className="mt-4 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-200"
                  role="status"
                >
                  Thanks, {form.name.trim() || 'friend'}! This form isn&apos;t connected to an email
                  service yet, so your message wasn&apos;t sent automatically. Please reach out
                  directly:
                  <a
                    href={buildMailtoLink(form, personalInfo.email)}
                    className="ml-1 font-semibold text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
                  >
                    Email me with your message
                  </a>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
