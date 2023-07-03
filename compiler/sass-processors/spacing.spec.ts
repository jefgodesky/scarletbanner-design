import { expect } from 'chai'
import spacingProcessor from './spacing.js'

describe('spacingProcessor', () => {
  it('returns a string defining a Sass variable', () => {
    const actual = spacingProcessor('vertical', '2em')
    expect(actual).to.equal('$vertical: 2em;')
  })

  it('handles variable names with spaces', () => {
    const actual = spacingProcessor('vertical spacing', '2em')
    expect(actual).to.equal('$vertical-spacing: 2em;')
  })
})
