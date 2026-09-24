import { describe, expect, it } from 'vitest'
import { brandRoster, contentSamples, strategyDecks, videoProjects } from './portfolio'

describe('portfolio content library', () => {
  it('includes every linked brand from the supplied portfolio document', () => {
    expect(brandRoster).toHaveLength(14)
    expect(brandRoster.every((brand) => brand.name && brand.url.startsWith('https://www.instagram.com/'))).toBe(true)
  })

  it('gives every roster brand its original logo asset', () => {
    expect(brandRoster.every((brand) => brand.logoSrc?.startsWith('/brand-logos/'))).toBe(true)
    expect(new Set(brandRoster.map((brand) => brand.logoSrc)).size).toBe(14)
  })

  it('includes all strategy decks with unique links', () => {
    expect(strategyDecks).toHaveLength(5)
    expect(new Set(strategyDecks.map((deck) => deck.url)).size).toBe(5)
  })

  it('includes all content samples with unique Instagram links', () => {
    expect(contentSamples).toHaveLength(22)
    expect(new Set(contentSamples.map((sample) => sample.url)).size).toBe(22)
    expect(contentSamples.every((sample) => sample.url.startsWith('https://www.instagram.com/'))).toBe(true)
  })

  it('puts every supplied content sample into the video grid', () => {
    expect(videoProjects).toHaveLength(22)
    expect(videoProjects.map((project) => project.instagramUrl)).toEqual(
      contentSamples.map((sample) => sample.url),
    )
  })

  it('gives every video card a local playable video or visual fallback', () => {
    expect(videoProjects.filter((project) => project.videoSrc)).toHaveLength(13)
    expect(videoProjects.every((project) => project.videoSrc || project.posterSrc)).toBe(true)
  })
})
