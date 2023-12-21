import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import { create } from 'unobtrusive-dom'
import getGroups from './groups'

describe('getGroups', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
    document.body.innerHTML = '<section id="a" data-component-category="Category A"><h2>Component A</h2></section><section id="b" data-component-category="Category B"><h2>Component B</h2></section>'
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('returns an array of options for the sections given', () => {
    const groups = getGroups([...document.querySelectorAll('section')])
    const select = create({ tag: 'select' })
    for (const group of groups) select.appendChild(group)
    expect(select.innerHTML).to.equal('<optgroup label="Category A"><option value="a">Component A</option></optgroup><optgroup label="Category B"><option value="b">Component B</option></optgroup>')
  })
})
