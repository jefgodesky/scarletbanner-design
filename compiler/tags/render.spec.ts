import { expect } from 'chai'
import renderTags from './render.js'

describe('renderTags', () => {
  it('replaces instances of each tag in the string', () => {
    const src = '{{ greeting.text }}, {{ greeting.recipient }}{{ greeting.punctuation }}'
    const tags = {
      '{{ greeting.text }}': 'Hello',
      '{{ greeting.recipient }}': 'world',
      '{{ greeting.punctuation }}': '!'
    }
    const expected = 'Hello, world!'
    const actual = renderTags(src, tags)
    expect(actual).to.equal(expected)
  })

  it('ignores undefined tags', () => {
    const src = '{{ tag }}'
    const actual = renderTags(src, {})
    expect(actual).to.equal(src)
  })

  it('replaces repeated incidents of a tag', () => {
    const src = '{{ tag }} {{ tag }} {{ tag }}'
    const actual = renderTags(src, { '{{ tag }}': 'test' })
    expect(actual).to.equal('test test test')
  })
})
