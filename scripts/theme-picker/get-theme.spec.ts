import { expect } from 'chai'
import getTheme from './get-theme'

describe('getTheme', () => {
  it('returns day if that\'s the user\'s preference', () => {
    expect(getTheme('day')).to.equal('day')
  })

  it('returns night if that\'s the user\'s preference', () => {
    expect(getTheme('night')).to.equal('night')
  })

  it('returns day if given natural and the sun is up', () => {
    expect(getTheme('natural', new Date(43200000), 0, 0)).to.equal('day')
  })

  it('returns night if given natural and the sun is not up', () => {
    expect(getTheme('natural', new Date(0), 0, 0)).to.equal('night')
  })

  it('returns day if given natural but no date', () => {
    expect(getTheme('natural')).to.equal('day')
  })

  it('returns day if given natural but no latitude', () => {
    expect(getTheme('natural', new Date(0))).to.equal('day')
  })

  it('returns day if given natural but no longitude', () => {
    expect(getTheme('natural', new Date(0), 0)).to.equal('day')
  })
})
