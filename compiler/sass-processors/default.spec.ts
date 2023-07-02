import { expect } from 'chai'
import defaultProcessor from './default.js'

describe('defaultProcessor', () => {
  it('returns a string defining a Sass string variable', () => {
    const actual = defaultProcessor('foo', 'bar')
    expect(actual).to.equal('$foo: \'bar\';')
  })

  it('returns a string defining a Sass number variable', () => {
    const actual = defaultProcessor('foo', 42)
    expect(actual).to.equal('$foo: 42;')
  })
})