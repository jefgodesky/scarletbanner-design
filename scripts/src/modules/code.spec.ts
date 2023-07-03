import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import initCode from './code.js'

describe('initCode', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('initializes Prism.js syntax highlighting', () => {
    document.body.innerHTML = '<code class="language-html block">&gt;p&lt;Hello, world!&gt;p&/lt;</code>'
    initCode()
    expect(document.body.querySelector('code.block span.token')).not.to.equal(null)
  })
})
