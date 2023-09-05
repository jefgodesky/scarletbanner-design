import { expect } from 'chai'
import getAngle from './get-angle'

describe('getAngle', () => {
  it('returns 0 if given day', () => {
    expect(getAngle('day')).to.equal(0)
  })

  it('returns -180 if given night', () => {
    expect(getAngle('night')).to.equal(-180)
  })

  it('returns the angle of the sun if given natural', () => {
    const lat = 51.4769
    const lon = 0

    const lastSunset = 1679249462529
    const sunrise = 1679292306723
    const sunset = 1679335963230

    const lastNightLen = 42844194
    const dayLen = 43656507
    const nextNightLen = 42605699

    const tests = [
      { time: lastSunset + Math.round(lastNightLen * 0.75), min: 130, max: 140 },
      { time: sunrise, min: 85, max: 95 },
      { time: sunrise + Math.round(dayLen * 0.25), min: 40, max: 50 },
      { time: sunrise + Math.round(dayLen * 0.5), min: -5, max: 5 },
      { time: sunrise + Math.round(dayLen * 0.75), min: -50, max: -40 },
      { time: sunset, min: -95, max: -85 },
      { time: sunset + Math.round(nextNightLen * 0.25), min: -140, max: -130 }
    ]

    for (const test of tests) {
      const angle = getAngle('natural', new Date(test.time), lat, lon)
      expect(angle).to.be.greaterThan(test.min)
      expect(angle).to.be.lessThan(test.max)
    }
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
