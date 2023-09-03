import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import initThemePicker from './index'

describe('initThemePicker', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
    document.body.innerHTML = ''
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('adds a theme picker to the page', () => {
    initThemePicker()
    const check = document.getElementById('theme-picker')
    expect(check).not.to.equal(undefined)
  })
})
