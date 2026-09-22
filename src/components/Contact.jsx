import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { profile } from '../data/portfolio'
import { buildMailtoLink } from '../lib/contact'
import { Reveal } from './Reveal'

export function Contact() {
  const mailto = buildMailtoLink(profile.email, "Let's build something people remember")

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-topline">
        <span>06 / Contact</span>
        <span>Have a brief? Let’s make it useful.</span>
      </div>
      <Reveal>
        <p className="eyebrow">Your next move</p>
        <h2>LET’S MAKE<br /><em>THE FEED</em><br />MEAN MORE.</h2>
      </Reveal>
      <Reveal className="contact-actions" delay={0.1}>
        <a className="contact-email" href={mailto}>
          <Mail aria-hidden="true" />
          <span>{profile.email}</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a className="contact-phone" href="tel:+201015522435">
          <Phone aria-hidden="true" /> {profile.phone}
        </a>
      </Reveal>
      <div className="contact-stamp" aria-hidden="true">
        <span>AVAILABLE · REGIONAL · CURIOUS ·</span>
        <strong>NK</strong>
      </div>
    </section>
  )
}
