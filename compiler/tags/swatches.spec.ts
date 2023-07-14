import { expect } from 'chai'
import renderSwatches from './swatches.js'

describe('renderSwatches', () => {
  const black = { name: 'Black', hex: '#000' }
  const white = { name: 'White', hex: '#fff' }
  const color = { black, white }

  it('renders swatches for the colors given', () => {
    const actual = renderSwatches({ color })
    expect(actual).to.equal('<ul class="swatches"><li id="swatch-black" style="background: #000;"><h4>Black</h4><table><tbody><tr><th>Hex</th><td>#000000</td></tr><tr><th>RGB</th><td>0, 0, 0</td></tr><tr><th>CMYK</th><td>0, 0, 0, 100</td></tr><tr><th>HSL</th><td>0&deg;, 0, 0</td></tr><tr><th>HSV</th><td>0&deg;, 0, 0</td></tr></tbody></table></li><li id="swatch-white" style="background: #fff;"><h4>White</h4><table><tbody><tr><th>Hex</th><td>#ffffff</td></tr><tr><th>RGB</th><td>255, 255, 255</td></tr><tr><th>CMYK</th><td>0, 0, 0, 0</td></tr><tr><th>HSL</th><td>0&deg;, 0, 100</td></tr><tr><th>HSV</th><td>0&deg;, 0, 100</td></tr></tbody></table></li></ul>')
  })
})
