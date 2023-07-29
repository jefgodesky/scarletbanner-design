import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import selector from './selector.js'

describe('selector', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('returns an array of matching elements', () => {
    document.body.innerHTML = '<p>1</p><p>2</p><p>3</p>'
    const actual = selector('p')
    const check = actual === null ? [] : actual.map(el => el.tagName)
    expect(check.join(' ')).to.equal('P P P')
  })

  it('returns null if nothing matches', () => {
    document.body.innerHTML = '<p>1</p><p>2</p><p>3</p>'
    const actual = selector('ol')
    expect(actual).to.equal(null)
  })
})
