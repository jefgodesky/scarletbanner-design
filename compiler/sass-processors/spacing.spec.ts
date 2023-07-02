import { expect } from 'chai'
import spacingProcessor from './spacing.js'

describe('spacingProcessor', () => {
  it('returns a string defining a Sass variable', () => {
    const actual = spacingProcessor('vertical', '2em')
    expect(actual).to.equal('$vertical: 2em;')
  })
})
