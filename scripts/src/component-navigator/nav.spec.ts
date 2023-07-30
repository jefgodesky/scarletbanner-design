import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import getComponentNavigator from './nav.js'

describe('getComponentNavigator', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
    document.body.innerHTML = '<section id="a" data-component-category="Category A"><h2>Component A</h2></section><section id="b" data-component-category="Category B"><h2>Component B</h2></section>'
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('return a navigator components', () => {
    const components = [...document.body.querySelectorAll('section[data-component-category]')]
    const nav = getComponentNavigator(components as HTMLElement[])
    expect(nav.innerHTML).to.equal('<option selected="selected">Select a component...</option><optgroup label="Category A"><option value="a">Component A</option></optgroup><optgroup label="Category B"><option value="b">Component B</option></optgroup>')
  })
})
