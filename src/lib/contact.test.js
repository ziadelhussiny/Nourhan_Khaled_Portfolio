import { describe, expect, it } from 'vitest'
import { buildMailtoLink } from './contact'

describe('buildMailtoLink', () => {
  it('encodes the portfolio inquiry subject and recipient safely', () => {
    expect(buildMailtoLink('hello@example.com', 'Let\'s work together')).toBe(
      'mailto:hello%40example.com?subject=Let%27s%20work%20together',
    )
  })
})
