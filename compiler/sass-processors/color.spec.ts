import { expect } from 'chai'
import colorProcessor from './colors.js'

describe('colorProcessor', () => {
  it('returns a string defining a Sass variable', () => {
    const actual = colorProcessor('black', { hex: '#000' })
    expect(actual).to.equal('$black: #000;')
  })
})
