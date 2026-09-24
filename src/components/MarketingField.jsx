import { useState } from 'react'
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Film, Plus } from 'lucide-react'
import {
  brandRoster,
  marketingFields,
  skillSet,
  strategyDecks,
  toolSet,
  videoProjects,
} from '../data/portfolio'
import { filterVideoProjects, getInstagramEmbedUrl } from '../lib/video-projects'
import { Reveal } from './Reveal'
import './MarketingField.css'

function VideoPreview({ project }) {
  if (project.videoSrc) {
    return (
      <div className="local-media-shell">
        <video
          className="field-video"
          controls
          playsInline
          preload="metadata"
          aria-label={`${project.title} — ${project.brand}`}
        >
          <source src={project.videoSrc} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
    )
  }

  if (project.posterSrc) {
    return (
      <a className="instagram-poster-shell" href={project.instagramUrl} target="_blank" rel="noreferrer">
        <img src={project.posterSrc} alt={`${project.title} Instagram preview`} loading="lazy" />
        <span className="instagram-open-link">
          Open on Instagram <ArrowUpRight aria-hidden="true" />
        </span>
      </a>
    )
  }

  if (project.instagramUrl) {
    const embedUrl = getInstagramEmbedUrl(project.instagramUrl)
    return (
      <div className="instagram-embed-shell">
        <iframe
          className="instagram-embed"
          src={embedUrl}
          title={`${project.title} — embedded Instagram content`}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    )
  }

  return (
    <div className={`video-placeholder placeholder-${project.accent}`} aria-hidden="true">
      <div className="video-safe-frame">
        <span>{project.field}</span>
        <strong>{project.brand}</strong>
      </div>
      <span className="video-play-mark"><Film /></span>
      <div className="video-progress"><span /></div>
    </div>
  )
}

export function MarketingField() {
  const [selectedField, setSelectedField] = useState('All')
  const reduceMotion = useReducedMotion()
  const visibleProjects = filterVideoProjects(videoProjects, selectedField)

  return (
    <section id="marketing-field" className="section marketing-field-section">
      <div className="section-label">03 / Marketing field</div>

      <Reveal className="field-heading">
        <div>
          <p className="eyebrow">A video-first workbench</p>
          <h2>THE FIELD<br /><em>IN MOTION.</em></h2>
        </div>
        <p>
          A growing archive of reels, stories, and campaign thinking — organized by the marketing field they were built to move.
        </p>
      </Reveal>

      <div className="field-filter" role="group" aria-label="Filter video work by marketing field">
        {marketingFields.map((field) => (
          <button
            key={field}
            type="button"
            aria-pressed={selectedField === field}
            onClick={() => setSelectedField(field)}
          >
            {field}
          </button>
        ))}
      </div>

      <p className="field-results-status" aria-live="polite">
        {visibleProjects.length} {visibleProjects.length === 1 ? 'video' : 'videos'} shown for {selectedField}.
      </p>

      <Motion.div className="video-grid" layout={!reduceMotion}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project, index) => (
            <Motion.article
              className="video-project-card"
              key={project.id}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12, transition: { duration: 0.18 } }}
              transition={{ duration: 0.24, delay: reduceMotion ? 0 : index * 0.035 }}
            >
              <VideoPreview project={project} />
              <div className="video-project-meta">
                <span>{project.field}</span>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{project.title}</h3>
              <div className="video-project-footer">
                <strong>{project.brand}</strong>
                <small>{project.format}</small>
              </div>
            </Motion.article>
          ))}
        </AnimatePresence>
      </Motion.div>

      <div id="portfolio-library" className="portfolio-library">
        <Reveal className="resource-panel strategy-library">
          <div className="library-kicker">
            <span>Strategy archive</span>
            <strong>{String(strategyDecks.length).padStart(2, '0')}</strong>
          </div>
          <h3>Thinking before posting.</h3>
          <div className="strategy-link-list">
            {strategyDecks.map((deck, index) => (
              <a key={deck.url} href={deck.url} target="_blank" rel="noreferrer">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{deck.label}</strong>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>

      </div>

      <p className="video-upload-note">
        <Plus aria-hidden="true" /> A living reel archive — new campaign work drops straight into its field.
      </p>

      <Reveal id="brand-roster" className="brand-roster" delay={0.05}>
        <div className="roster-title">
          <span>Selected roster</span>
          <strong>Names behind the briefs</strong>
        </div>
        <div className="brand-cloud" aria-label="Brands Nourhan has worked with">
          {brandRoster.map((brand, index) => (
            <a key={brand.url} href={brand.url} target="_blank" rel="noreferrer">
              <i>{String(index + 1).padStart(2, '0')}</i>
              <span className="brand-logo" aria-hidden="true">
                <img src={brand.logoSrc} alt="" loading="lazy" />
              </span>
              <span className="brand-name">{brand.name}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </Reveal>

      <div className="skills-tools-grid">
        <Reveal className="skills-board">
          <div className="board-kicker"><span>Skills</span><strong>{skillSet.length}</strong></div>
          <h3>What gets brought into the room.</h3>
          <div className="skill-cloud">
            {skillSet.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </Reveal>

        <Reveal className="tools-board" delay={0.08}>
          <div className="board-kicker"><span>Tools & channels</span><Film aria-hidden="true" /></div>
          <h3>Lightweight stack. Sharp output.</h3>
          <div className="tool-list">
            {toolSet.map((tool, index) => (
              <div key={tool.name}>
                <span>0{index + 1}</span>
                <strong>{tool.name}</strong>
                <small>{tool.use}</small>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
