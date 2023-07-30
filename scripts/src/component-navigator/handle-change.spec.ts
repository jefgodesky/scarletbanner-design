import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import { create } from 'unobtrusive-dom'
import handleChange from './handle-change'

describe('Component Navigator: handleChange', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('changes window.location.href', () => {
    const target = create({ tag: 'option', attrs: { value: 'test' }, text: 'Test' })
    handleChange({ target })
    expect(window.location.href).to.equal('about:blank#test')
  })
})
