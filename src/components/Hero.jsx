import { motion as Motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

const spring = { stiffness: 130, damping: 18, mass: 0.5 }

export function Hero() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), spring)
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), spring)

  function handlePointerMove(event) {
    if (reduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section id="top" className="hero" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className="hero-grid" aria-hidden="true" />
      <Motion.div
        className="sticker sticker-strategy"
        animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-7, -4, -7] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        social, but strategic
      </Motion.div>
      <Motion.div
        className="sticker sticker-markets"
        animate={reduceMotion ? undefined : { y: [0, 9, 0], rotate: [6, 9, 6] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        Cairo → Riyadh → Dubai
      </Motion.div>

      <div className="hero-copy">
        <Motion.p
          className="eyebrow hero-eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          Senior social media specialist <span>+ marketing strategist</span>
        </Motion.p>

        <h1 className="hero-title" aria-label="Nourhan Khaled">
          <span className="title-line title-line-top">
            {'NOURHAN'.split('').map((letter, index) => (
              <Motion.span
                key={`${letter}-${index}`}
                initial={reduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.72, delay: 0.12 + index * 0.04, ease: [0.2, 0.9, 0.2, 1] }}
              >
                {letter}
              </Motion.span>
            ))}
          </span>
          <span className="title-line title-line-bottom">
            {'KHALED'.split('').map((letter, index) => (
              <Motion.span
                key={`${letter}-${index}`}
                initial={reduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.72, delay: 0.34 + index * 0.04, ease: [0.2, 0.9, 0.2, 1] }}
              >
                {letter}
              </Motion.span>
            ))}
          </span>
        </h1>

        <Motion.div
          className="hero-bottom"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, delay: 0.7 }}
        >
          <p>{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore the work <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href="/Nourhan_Khaled_CV.pdf" download>
              Download CV <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Motion.div>
      </div>

      <Motion.div
        className="strategy-card"
        style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.86, rotate: 7 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ duration: 0.7, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="card-topline">
          <span>Current focus</span>
          <span>2026</span>
        </div>
        <div className="orbit" aria-hidden="true">
          <div className="orbit-ring" />
          <div className="orbit-dot orbit-dot-one" />
          <div className="orbit-dot orbit-dot-two" />
          <span>CONTENT</span>
          <strong>⇄</strong>
          <span>CONVERSION</span>
        </div>
        <p>Building brand systems that move from scroll to action.</p>
        <div className="card-chips">
          <span>Strategy</span><span>Stories</span><span>Direction</span>
        </div>
      </Motion.div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll to enter</span>
        <ArrowDownRight />
      </div>
    </section>
  )
}
