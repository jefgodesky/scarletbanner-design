import { expect } from 'chai'
import { readFileSync } from 'fs'
import mock from 'mock-fs'
import compileHTML from './compile-html.js'

describe('compileHTML', () => {
  let files = {}

  beforeEach(() => {
    files = { './docs/test.html': '<p>{{ a.b.c }}</p>' }
    mock(files)
  })

  afterEach(mock.restore)

  it('compiles HTML', () => {
    compileHTML({ a: { b: { c: 42 } } })
    const check = readFileSync('./test.html', { encoding: 'utf8' })
    expect(check).to.equal('<p>42</p>')
  })
})
