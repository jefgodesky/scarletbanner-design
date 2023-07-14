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
    const actual = renderTags(src, tags, {})
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

  it('renders swatches', () => {
    const black = { name: 'Black', hex: '#000' }
    const white = { name: 'White', hex: '#fff' }
    const color = { black, white }
    const src = '{{ swatches }}'
    const actual = renderTags(src, {}, { color })
    expect(actual).to.equal('<ul class="swatches"><li id="swatch-black" style="background: #000;"><h4>Black</h4><table><tbody><tr><th>Hex</th><td>#000000</td></tr><tr><th>RGB</th><td>0, 0, 0</td></tr><tr><th>CMYK</th><td>0, 0, 0, 100</td></tr><tr><th>HSL</th><td>0&deg;, 0, 0</td></tr><tr><th>HSV</th><td>0&deg;, 0, 0</td></tr></tbody></table></li><li id="swatch-white" style="background: #fff;"><h4>White</h4><table><tbody><tr><th>Hex</th><td>#ffffff</td></tr><tr><th>RGB</th><td>255, 255, 255</td></tr><tr><th>CMYK</th><td>0, 0, 0, 0</td></tr><tr><th>HSL</th><td>0&deg;, 0, 100</td></tr><tr><th>HSV</th><td>0&deg;, 0, 100</td></tr></tbody></table></li></ul>')
  })
})
