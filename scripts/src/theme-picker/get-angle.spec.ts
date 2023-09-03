import { expect } from 'chai'
import getAngle from './get-angle'

describe('getAngle', () => {
  it('returns 0 if given day', () => {
    expect(getAngle('day')).to.equal(0)
  })

  it('returns 180 if given night', () => {
    expect(getAngle('night')).to.equal(180)
  })

  it('returns the angle of the sun if given natural', () => {
    expect(getAngle('natural', new Date(0), 0, 0)).to.equal(-66.94817090034745)
  })

  it('returns 0 if given natural but no time', () => {
    expect(getAngle('natural')).to.equal(0)
  })

  it('returns 0 if given natural but no latitude', () => {
    expect(getAngle('natural', new Date(0))).to.equal(0)
  })

  it('returns 0 if given natural but no longitude', () => {
    expect(getAngle('natural', new Date(0), 0)).to.equal(0)
  })
})
