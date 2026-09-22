import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#marketing-field', label: 'Video field' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const menuButtonRef = useRef(null)
  const menuRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const focusFrame = requestAnimationFrame(() => firstLinkRef.current?.focus())
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        requestAnimationFrame(() => menuButtonRef.current?.focus())
        return
      }

      if (event.key !== 'Tab') return
      const menuLinks = [...(menuRef.current?.querySelectorAll('a') ?? [])]
      const firstLink = menuLinks[0]
      const lastLink = menuLinks.at(-1)

      if (event.shiftKey && document.activeElement === menuButtonRef.current) {
        event.preventDefault()
        lastLink?.focus()
      } else if (event.shiftKey && document.activeElement === firstLink) {
        event.preventDefault()
        menuButtonRef.current?.focus()
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault()
        menuButtonRef.current?.focus()
      } else if (!event.shiftKey && document.activeElement === menuButtonRef.current) {
        event.preventDefault()
        firstLink?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <header className="site-header">
      <a className="monogram" href="#top" aria-label="Nourhan Khaled, back to top">
        NK<span>®</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="availability" href="#contact">
        <span aria-hidden="true" /> Available for collaborations
      </a>

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {open && (
          <Motion.nav
            ref={menuRef}
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {links.map((link, index) => (
              <Motion.a
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span>0{index + 1}</span> {link.label}
              </Motion.a>
            ))}
          </Motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
