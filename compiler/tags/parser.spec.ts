import { expect } from 'chai'
import parseTags from './parser.js'

describe('parseTags', () => {
  it('creates a dictionary of tags from the data', () => {
    const actual = parseTags({ foo: 1, bar: 2 })
    expect(actual).to.eql({ '{{ foo }}': 1, '{{ bar }}': 2 })
  })

  it('handles nested data', () => {
    const actual = parseTags({ foo: { bar: 2 } })
    expect(actual).to.eql({ '{{ foo.bar }}': 2 })
  })
})
