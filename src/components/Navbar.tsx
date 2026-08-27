import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { navLinks } from '../data/portfolio'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      // Simple scroll-spy: last section whose top is above the probe line wins.
      const probe = window.scrollY + 160
      let current = 'home'
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el && el.offsetTop <= probe) current = link.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm font-bold text-white sm:text-base"
          onClick={closeMenu}
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-night-800 text-xs font-extrabold text-gradient"
          >
            IA
          </span>
          Imoro Abdul Rashid
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link text-sm font-medium transition-colors ${
                  active === link.id ? 'nav-active text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Let&apos;s Connect
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-4 pb-6 pt-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn-gradient mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Let&apos;s Connect
          </a>
        </div>
      )}
    </header>
  )
}
