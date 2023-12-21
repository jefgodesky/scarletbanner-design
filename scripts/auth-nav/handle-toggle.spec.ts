import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import { hasClass } from 'unobtrusive-dom'
import handleToggle from './handle-toggle'

describe('Authentication Navigator: handleChange', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('removes the closed class from a closed nav', () => {
    document.body.innerHTML = '<nav class="auth header initialized closed" id="test"></nav>'
    handleToggle()
    expect(hasClass(document.getElementById('test') as HTMLElement, 'closed')).to.equal(false)
  })

  it('adds the closed class to an open nav', () => {
    document.body.innerHTML = '<nav class="auth header initialized open" id="test"></nav>'
    handleToggle()
    expect(hasClass(document.getElementById('test') as HTMLElement, 'closed')).to.equal(true)
  })

  it('adds the open class to a closed nav', () => {
    document.body.innerHTML = '<nav class="auth header initialized closed" id="test"></nav>'
    handleToggle()
    expect(hasClass(document.getElementById('test') as HTMLElement, 'open')).to.equal(true)
  })

  it('removes the open class from an open nav', () => {
    document.body.innerHTML = '<nav class="auth header initialized open" id="test"></nav>'
    handleToggle()
    expect(hasClass(document.getElementById('test') as HTMLElement, 'open')).to.equal(false)
  })
})
