import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import initThemePicker from './index'
import * as sinon from 'sinon'

describe('initThemePicker', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal('', { url: 'http://localhost:3333' })
    document.body.innerHTML = ''
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('adds a theme picker to the page', async () => {
    const matchMediaStub = sinon.stub()
    window.matchMedia = matchMediaStub
    matchMediaStub.returns({ matches: false, addListener: sinon.spy(), removeListener: sinon.spy() })
    await initThemePicker()
    const check = document.getElementById('theme-picker')
    expect(check).not.to.equal(undefined)
  })
})
