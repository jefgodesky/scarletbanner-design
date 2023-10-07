import { expect } from 'chai'
import getVersionPath from './get-version-path'

describe('getVersion', () => {
  it('turns the version into a path', () => {
    expect(getVersionPath('1.0.0')).to.equal('/v1/0/0')
  })

  it('returns the version from package.json by default', () => {
    expect(getVersionPath().startsWith('/v')).to.equal(true)
  })
})
