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

  it('defaults to natural', () => {
    createThemePickerWidget()
    const selected = document.getElementById('theme-picker')?.querySelector('option[selected]') as HTMLOptionElement
    expect(selected.value).to.equal('natural')
  })

  it('selects day if that\'s your preference', () => {
    createThemePickerWidget('day')
    const selected = document.getElementById('theme-picker')?.querySelector('option[selected]') as HTMLOptionElement
    expect(selected.value).to.equal('day')
  })

  it('selects night if that\'s your preference', () => {
    createThemePickerWidget('night')
    const selected = document.getElementById('theme-picker')?.querySelector('option[selected]') as HTMLOptionElement
    expect(selected.value).to.equal('night')
  })

  it('selects natural if that\'s your preference', () => {
    createThemePickerWidget('natural')
    const selected = document.getElementById('theme-picker')?.querySelector('option[selected]') as HTMLOptionElement
    expect(selected.value).to.equal('natural')
  })
})
