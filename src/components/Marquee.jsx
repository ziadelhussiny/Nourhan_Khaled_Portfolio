import { motion as Motion, useReducedMotion } from 'framer-motion'

const items = ['Strategy', 'Content', 'Conversion', 'Direction', 'Community']

export function Marquee() {
  const reduceMotion = useReducedMotion()
  const content = [...items, ...items]

  return (
    <div className="marquee" aria-label="Strategy, content, conversion, direction, community">
      <Motion.div
        className="marquee-track"
        animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
      >
        {content.map((item, index) => (
          <span key={`${item}-${index}`}>{item}<i aria-hidden="true">✦</i></span>
        ))}
      </Motion.div>
    </div>
  )
}
