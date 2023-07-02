import { expect } from 'chai'
import fontProcessor from './fonts.js'

describe('fontProcessor', () => {
  it('returns a string defining a Sass variable', () => {
    const actual = fontProcessor('test', { stack: '\'Helvetica\', sans-serif' })
    expect(actual).to.equal('$test: \'Helvetica\', sans-serif;')
  })
})
