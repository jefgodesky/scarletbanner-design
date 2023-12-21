import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import { hasClass } from 'unobtrusive-dom'
import setTheme from './set-theme'

describe('createThemePickerWidget', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
    document.body.innerHTML = ''
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('can set the day theme', () => {
    setTheme('day')
    expect(hasClass(document.body, 'day')).to.equal(true)
    expect(hasClass(document.body, 'night')).to.equal(false)
  })

  it('can set the night theme', () => {
    setTheme('night')
    expect(hasClass(document.body, 'day')).to.equal(false)
    expect(hasClass(document.body, 'night')).to.equal(true)
  })
})
