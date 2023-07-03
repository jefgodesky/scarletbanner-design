import { expect } from 'chai'
import mock from 'mock-fs'
import compileTokens from './compile-tokens.js'

describe('compileTokens', () => {
  beforeEach(() => {
    mock({
      './package.json': '{ version: "1.0.0" }',
      './tokens/breakpoints.yml': 'big: 100em\nlil: 10em',
      './tokens/cdn.yml': 'root: /path/to/root\nimages: /images',
      './tokens/color.yml': 'black:\n  name: Black\n  hex: "#000"\nwhite:\n  name: White\n  hex: "#fff"',
      './tokens/fonts.yml': 'base:\n  name: Helvetica\n  stack:\n    - Helvetica\n    - sans-serif',
      './tokens/spacing.yml': 'horizontal: 4em\nvertical: 2em'
    })
  })

  afterEach(mock.restore)

  it('includes the version', () => {
    const data = compileTokens()
    expect(data.version).to.equal('1.0.0')
  })

  it('compiles breakpoint tokens', () => {
    const data = compileTokens()
    expect(data.breakpoints).to.eql({ big: '100em', lil: '10em' })
  })

  it('compiles the CDN root', () => {
    const data = compileTokens()
    expect(data.cdn.root).to.equal('/path/to/root/v1/0/0')
  })

  it('compiles other CDN paths', () => {
    const data = compileTokens()
    expect(data.cdn.images).to.equal('#{$root}/images')
  })

  it('compiles color tokens', () => {
    const data = compileTokens()
    const { black, white } = data.color
    const actual = `${black.hex as string} ${white.hex as string}`
    expect(actual).to.eql('#000 #fff')
  })

  it('compiles font tokens', () => {
    const data = compileTokens()
    const { base } = data.fonts
    const actual = `${base.name as string}: ${base.stack.join(', ') as string}`
    expect(actual).to.eql('Helvetica: Helvetica, sans-serif')
  })

  it('compiles spacing tokens', () => {
    const data = compileTokens()
    const { horizontal, vertical } = data.spacing
    const actual = `${vertical as string}, ${horizontal as string}`
    expect(actual).to.eql('2em, 4em')
  })
})
