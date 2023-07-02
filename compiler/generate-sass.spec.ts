import { expect } from 'chai'
import generateSass from './generate-sass.js'

describe('generateSass', () => {
  it('generates Sass color variables', () => {
    const actual = generateSass('color', { black: { hex: '#000' }, white: { hex: '#fff' } })
    expect(actual).to.eql(['$black: #000;', '$white: #fff;'])
  })

  it('skips bad input', () => {
    const actual = generateSass('color', { black: { hex: '#000' }, white: 'white' })
    expect(actual).to.eql(['$black: #000;'])
  })

  it('generates Sass spacing variables', () => {
    const actual = generateSass('spacing', { vertical: '2em', horizontal: '4em' })
    expect(actual).to.eql(['$vertical: 2em;', '$horizontal: 4em;'])
  })

  it('generates Sass breakpoint variables', () => {
    const actual = generateSass('breakpoints', { big: '100em', lil: '10em' })
    expect(actual).to.eql(['$big: 100em;', '$lil: 10em;'])
  })

  it('generates Sass font variables', () => {
    const base = { stack: ['Helvetica', 'sans-serif'] }
    const mono = { stack: ['Courier New', 'monospace'] }
    const actual = generateSass('fonts', { base, mono })
    expect(actual).to.eql(['$base: \'Helvetica\', sans-serif;', '$mono: \'Courier New\', monospace;'])
  })

  it('skips bad input', () => {
    const base = { stack: ['Helvetica', 'sans-serif'] }
    const actual = generateSass('fonts', { base, mono: '\'Courier New\', monospace' })
    expect(actual).to.eql(['$base: \'Helvetica\', sans-serif;'])
  })
})
