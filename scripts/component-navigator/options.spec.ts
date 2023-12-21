import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import { create } from 'unobtrusive-dom'
import getOptions from './options'

describe('getOptions', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
    document.body.innerHTML = '<section id="a" data-component-category="Category A"><h2>Component A</h2></section><section id="b" data-component-category="Category B"><h2>Component B</h2></section>'
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('returns an array of options for the sections given', () => {
    const options = getOptions([...document.querySelectorAll('section')])
    const select = create({ tag: 'select' })
    for (const option of options) select.appendChild(option)
    expect(select.innerHTML).to.equal('<option value="a">Component A</option><option value="b">Component B</option>')
  })
})
