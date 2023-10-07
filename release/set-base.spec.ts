import { readFileSync, writeFileSync } from 'fs'
import { expect } from 'chai'
import setBase from './set-base'

describe('setBase', () => {
  const testfile = 'release/_test.scss'

  beforeEach(() => {
    writeFileSync(testfile, '$base: "";\n', { encoding: 'utf-8' })
  })

  it('sets the $base given', () => {
    setBase('/base', testfile)
    const actual = readFileSync(testfile, { encoding: 'utf-8' })
    expect(actual).to.equal('$base: "/base";\n')
  })

  it('can set $base to a null string', () => {
    setBase('', testfile)
    const actual = readFileSync(testfile, { encoding: 'utf-8' })
    expect(actual).to.equal('$base: "";\n')
  })
})
