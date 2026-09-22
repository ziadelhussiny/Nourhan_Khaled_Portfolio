import { motion as Motion, useReducedMotion } from 'framer-motion'
import { capabilities } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Capabilities() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section capabilities-section">
      <div className="section-label light">05 / Capabilities</div>
      <Reveal className="capability-heading light-copy">
        <p className="eyebrow">What I bring to the table</p>
        <h2>Sharp systems.<br /><em>Soft skills.</em></h2>
      </Reveal>

      <div className="capability-list">
        {capabilities.map((item) => (
          <Motion.article
            className="capability-row"
            key={item.index}
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={reduceMotion ? undefined : { x: 8 }}
            transition={{ duration: 0.28 }}
          >
            <span>{item.index}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <small>{item.tools}</small>
          </Motion.article>
        ))}
      </div>
    </section>
  )
}
