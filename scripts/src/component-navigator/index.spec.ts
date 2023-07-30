import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import initComponentNavigator from './index'

describe('initComponentNavigator', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
    document.body.innerHTML = '<div id="component-navigator"></div><section id="a" data-component-category="Category A"><h2>Component A</h2></section><section id="b" data-component-category="Category B"><h2>Component B</h2></section>'
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('adds a navigator component to the page', () => {
    const components = [...document.body.querySelectorAll('section[data-component-category]')]
    initComponentNavigator(components as HTMLElement[])
    const check = document.body.querySelector('#component-navigator select')
    console.log(check)
    expect(check).not.to.equal(undefined)
  })
})
