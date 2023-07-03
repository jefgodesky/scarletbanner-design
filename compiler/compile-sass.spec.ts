import { expect } from 'chai'
import { readFileSync } from 'fs'
import mock from 'mock-fs'
import compileSass from './compile-sass.js'

describe('compileSass', () => {
  let files = {}

  beforeEach(() => {
    files = { './scss/modules/_color.scss': '' }
    mock(files)
  })

  afterEach(mock.restore)

  it('compiles Sass color variables', () => {
    const black = { name: 'Black', hex: '#000' }
    const white = { name: 'White', hex: '#fff' }
    const data: { [key: string]: { [key: string]: any } } = { color: { black, white } }
    compileSass(data)
    const check = readFileSync('./scss/modules/_color.scss', { encoding: 'utf8' })
    expect(check).to.equal('$black: #000;\n$white: #fff;')
  })

  it('skips bad input for color', () => {
    const black = { name: 'Black', hex: '#000' }
    const data: { [key: string]: { [key: string]: any } } = { color: { black, white: '#fff' } }
    compileSass(data)
    const check = readFileSync('./scss/modules/_color.scss', { encoding: 'utf8' })
    expect(check).to.equal('$black: #000;')
  })

  it('compiles Sass spacing variables', () => {
    const data: { [key: string]: { [key: string]: any } } = { spacing: { horizontal: '4em', vertical: '2em' } }
    compileSass(data)
    const check = readFileSync('./scss/modules/_spacing.scss', { encoding: 'utf8' })
    expect(check).to.equal('$horizontal: 4em;\n$vertical: 2em;')
  })

  it('compiles Sass breakpoint variables', () => {
    const data: { [key: string]: { [key: string]: any } } = { breakpoints: { big: '100em', lil: '10em' } }
    compileSass(data)
    const check = readFileSync('./scss/modules/_breakpoints.scss', { encoding: 'utf8' })
    expect(check).to.equal('$big: 100em;\n$lil: 10em;')
  })

  it('compiles Sass font variables', () => {
    const base = { stack: ['Helvetica', 'sans-serif'] }
    const mono = { stack: ['Courier New', 'monospace'] }
    const data: { [key: string]: { [key: string]: any } } = { fonts: { base, mono } }
    compileSass(data)
    const check = readFileSync('./scss/modules/_fonts.scss', { encoding: 'utf8' })
    expect(check).to.equal('$base: \'Helvetica\', sans-serif;\n$mono: \'Courier New\', monospace;')
  })

  it('skips bad input for fonts', () => {
    const base = { stack: ['Helvetica', 'sans-serif'] }
    const data: { [key: string]: { [key: string]: any } } = { fonts: { base, mono: ['Courier New', 'monospace'] } }
    compileSass(data)
    const check = readFileSync('./scss/modules/_fonts.scss', { encoding: 'utf8' })
    expect(check).to.equal('$base: \'Helvetica\', sans-serif;')
  })
})
