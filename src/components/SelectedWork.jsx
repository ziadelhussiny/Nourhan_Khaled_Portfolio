import { ArrowUpRight } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { caseStudies } from '../data/portfolio'
import { Reveal } from './Reveal'

export function SelectedWork() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="work" className="section work-section">
      <div className="section-label light">02 / Selected challenges</div>
      <Reveal className="section-intro light-copy">
        <p className="eyebrow">A few rooms I’ve helped move</p>
        <h2>Brands need more than <em>posts.</em></h2>
        <p>They need a point of view, a repeatable content engine, and a reason for people to care.</p>
      </Reveal>

      <div className="case-list">
        {caseStudies.map((item, index) => (
          <Reveal className={`case-card case-${item.tone}`} key={item.brand} delay={index * 0.06}>
            <div className="case-meta">
              <span>{item.number}</span>
              <span>{item.category}</span>
              <span>{item.market}</span>
            </div>
            <div className="case-main">
              <div>
                <p className="case-brand">{item.brand}</p>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
            <div className="case-footer">
              <div className="case-tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <Motion.span
                className="case-arrow"
                aria-hidden="true"
                whileHover={reduceMotion ? undefined : { rotate: 45, scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight />
              </Motion.span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
