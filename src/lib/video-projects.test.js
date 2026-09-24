import { describe, expect, it } from 'vitest'
import { filterVideoProjects, getInstagramEmbedUrl } from './video-projects'

const projects = [
  { id: 'one', field: 'F&B' },
  { id: 'two', field: 'Real Estate' },
  { id: 'three', field: 'F&B' },
]

describe('filterVideoProjects', () => {
  it('keeps the full curated order when All is selected', () => {
    expect(filterVideoProjects(projects, 'All').map((project) => project.id)).toEqual([
      'one',
      'two',
      'three',
    ])
  })

  it('returns only projects from the selected marketing field', () => {
    expect(filterVideoProjects(projects, 'F&B').map((project) => project.id)).toEqual([
      'one',
      'three',
    ])
  })

  it('turns Instagram reel and post links into playable embed URLs', () => {
    expect(getInstagramEmbedUrl('https://www.instagram.com/reel/DXMa1ybjIcN/?stkn=test')).toBe(
      'https://www.instagram.com/reel/DXMa1ybjIcN/embed/',
    )
    expect(getInstagramEmbedUrl('https://www.instagram.com/p/DZm6_7mjGig/?img_index=2')).toBe(
      'https://www.instagram.com/p/DZm6_7mjGig/embed/',
    )
  })
})
