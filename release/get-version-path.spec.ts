import { expect } from 'chai'
import getVersionPath from './get-version-path'

describe('getVersion', () => {
  it('turns the version into a path', () => {
    const actual = getVersionPath('1.0.0')
    expect(actual[0]).to.equal('/v1/0/0')
  })

  it('returns the version', () => {
    const actual = getVersionPath('1.0.0')
    expect(actual[1]).to.equal('1.0.0')
  })

  it('returns the version from package.json by default', () => {
    const actual = getVersionPath()
    expect(actual[0].startsWith('/v')).to.equal(true)
  })
})
