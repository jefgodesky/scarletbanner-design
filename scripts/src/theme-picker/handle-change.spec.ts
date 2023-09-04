import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import { create } from 'unobtrusive-dom'
import handleChange from './handle-change'

describe('Theme picker: handleChange', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal('', { url: 'http://localhost:3333' })
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('changes theme in local storage', () => {
    const value = 'day'
    const target = create({ tag: 'option', attrs: { value }, text: 'Day' })
    handleChange({ target })
    expect(window.localStorage.getItem('theme')).to.equal(value)
  })
})
