import { describe, expect, it } from 'vitest'
import { filterVideoProjects } from './video-projects'

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
})
