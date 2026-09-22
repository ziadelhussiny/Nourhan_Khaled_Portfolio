import { ArrowUpRight, Sparkles } from 'lucide-react'
import { profile, stats } from '../data/portfolio'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-label">01 / About</div>
      <Reveal className="about-heading">
        <p className="eyebrow">The short version</p>
        <h2>Strategy brain.<br /><em>Creator energy.</em></h2>
      </Reveal>

      <div className="about-layout">
        <Reveal className="note-card" delay={0.08}>
          <div className="note-toolbar">
            <span>NOTES / nk-strategy.txt</span>
            <Sparkles aria-hidden="true" />
          </div>
          <p className="note-lead">“Social should feel human and still answer to the business.”</p>
          <p>{profile.summary}</p>
          <p>
            My work sits between the whiteboard and the feed: shaping the strategy, briefing the creative,
            directing the story, and reading the signals after launch.
          </p>
          <a href="#contact">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
          <span className="tape tape-top" aria-hidden="true" />
          <span className="tape tape-bottom" aria-hidden="true" />
        </Reveal>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal className="stat-card" key={stat.label} delay={index * 0.08}>
              <span className="stat-value">{stat.value}</span>
              <strong>{stat.label}</strong>
              <small>{stat.detail}</small>
            </Reveal>
          ))}
          <Reveal className="location-card" delay={0.24}>
            <span className="location-ping" aria-hidden="true" />
            <div>
              <small>Based in</small>
              <strong>{profile.location}</strong>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
