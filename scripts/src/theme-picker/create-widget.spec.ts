import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import createThemePickerWidget from './create-widget'

describe('createThemePickerWidget', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
    document.body.innerHTML = ''
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('adds a theme picker to the page', () => {
    createThemePickerWidget()
    const check = document.getElementById('theme-picker')
    expect(check).not.to.equal(undefined)
  })
})
