import { motion as Motion, useReducedMotion } from 'framer-motion'
import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="section experience-section">
      <div className="section-label">04 / Experience</div>
      <Reveal className="experience-header">
        <h2>Built in the <em>real world.</em></h2>
        <p>From cafe launches and community stories to B2B positioning and luxury real-estate lead funnels.</p>
      </Reveal>

      <div className="timeline">
        {experience.map((item, index) => (
          <Motion.article
            className="timeline-row"
            key={`${item.company}-${item.period}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.045 }}
          >
            <p className="timeline-period">{item.period}</p>
            <div className="timeline-title">
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <p className="timeline-summary">{item.summary}</p>
            <div className="timeline-location">
              {item.current && <span>Current</span>}
              <small>{item.location}</small>
            </div>
          </Motion.article>
        ))}
      </div>
      <Reveal className="education-strip">
        <span>Education</span>
        <strong>Bachelor of Business Administration</strong>
        <p>Egyptian E-Learning University · 2021—2025</p>
      </Reveal>
    </section>
  )
}
