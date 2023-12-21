import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import initAuthNav from './index'

describe('Authentication Navigator: initAuthNav', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
    document.body.innerHTML = '<nav class="auth header"></nav>'
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('initializes the auth nav', () => {
    const components = [...document.body.querySelectorAll('nav.auth.header')]
    initAuthNav(components as HTMLElement[])
    const check = document.body.querySelector('nav.auth.header.initialized')
    expect(check).not.to.equal(null)
  })

  it('initializes the auth nav as closed', () => {
    const components = [...document.body.querySelectorAll('nav.auth.header')]
    initAuthNav(components as HTMLElement[])
    const check = document.body.querySelector('nav.auth.header.initialized.closed')
    expect(check).not.to.equal(null)
  })

  it('adds a toggle element', () => {
    const components = [...document.body.querySelectorAll('nav.auth.header')]
    initAuthNav(components as HTMLElement[])
    const check = document.body.querySelector('nav.auth.header.initialized.closed span.toggle')
    expect(check).not.to.equal(null)
  })
})
