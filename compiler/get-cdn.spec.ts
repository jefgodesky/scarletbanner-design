import { expect } from 'chai'
import getCDN, { isCDNData } from './get-cdn.js'

describe('getCDN', () => {
  it('returns a new object', () => {
    const data = { root: 'cdn/root' }
    const actual = getCDN(data, '1.0.0')
    expect(actual).not.to.equal(data)
  })

  it('adds the version to the root', () => {
    const actual = getCDN({ root: 'cdn/root' }, '1.0.0')
    expect(actual.root).to.equal('cdn/root/v1/0/0')
  })

  it('adds #{$root} to other properties', () => {
    const actual = getCDN({ root: 'cdn/root', other: '/test' }, '1.0.0')
    expect(actual.other).to.equal('#{$root}/test')
  })
})

describe('isCDNData', () => {
  it('returns false if given null', () => {
    expect(isCDNData(null)).to.equal(false)
  })

  it('returns false if given a function', () => {
    expect(isCDNData(() => {})).to.equal(false)
  })

  it('returns false if given true', () => {
    expect(isCDNData(true)).to.equal(false)
  })

  it('returns false if given false', () => {
    expect(isCDNData(false)).to.equal(false)
  })

  it('returns false if given a number', () => {
    expect(isCDNData(1)).to.equal(false)
  })

  it('returns false if given a string', () => {
    expect(isCDNData('hello')).to.equal(false)
  })

  it('returns false if given an empty array', () => {
    expect(isCDNData([])).to.equal(false)
  })

  it('returns false if given an array of nulls', () => {
    expect(isCDNData([null, null])).to.equal(false)
  })

  it('returns false if given an array of functions', () => {
    expect(isCDNData([() => {}, () => {}])).to.equal(false)
  })

  it('returns false if given an array of booleans', () => {
    expect(isCDNData([true, false])).to.equal(false)
  })

  it('returns false if given an array of numbers', () => {
    expect(isCDNData([1, 2, 3])).to.equal(false)
  })

  it('returns false if given an array of strings', () => {
    expect(isCDNData(['a', 'b', 'c'])).to.equal(false)
  })

  it('returns false if given an array of arrays', () => {
    expect(isCDNData([[], [], []])).to.equal(false)
  })

  it('returns false if given an array of objects', () => {
    expect(isCDNData([{}, {}, {}])).to.equal(false)
  })

  it('returns false if given an empty object', () => {
    expect(isCDNData({})).to.equal(false)
  })

  it('returns false if given an object with a null root property', () => {
    expect(isCDNData({ root: null })).to.equal(false)
  })

  it('returns false if given an object with a function root property', () => {
    expect(isCDNData({ root: () => {} })).to.equal(false)
  })

  it('returns false if given an object with a true root property', () => {
    expect(isCDNData({ root: true })).to.equal(false)
  })

  it('returns false if given an object with a false root property', () => {
    expect(isCDNData({ root: false })).to.equal(false)
  })

  it('returns false if given an object with a numerical root property', () => {
    expect(isCDNData({ root: 1 })).to.equal(false)
  })

  it('returns true if given an object with a string root property', () => {
    expect(isCDNData({ root: 'hello' })).to.equal(true)
  })

  it('returns false if given an object with an empty array root property', () => {
    expect(isCDNData({ root: [] })).to.equal(false)
  })

  it('returns false if given an object with a root property that is an array of nulls', () => {
    expect(isCDNData({ root: [null, null] })).to.equal(false)
  })

  it('returns false if given an object with a root property that is an array of functions', () => {
    expect(isCDNData({ root: [() => {}, () => {}] })).to.equal(false)
  })

  it('returns false if given an object with a root property that is an array of booleans', () => {
    expect(isCDNData({ root: [true, false] })).to.equal(false)
  })

  it('returns false if given an object with a root property that is an array of numbers', () => {
    expect(isCDNData({ root: [1, 2, 3] })).to.equal(false)
  })

  it('returns false if given an object with a root property that is an array of strings', () => {
    expect(isCDNData({ root: ['a', 'b', 'c'] })).to.equal(false)
  })

  it('returns false if given an object with a root property that is an array of arrays', () => {
    expect(isCDNData({ root: [[], [], []] })).to.equal(false)
  })

  it('returns false if given an object with a root property that is an array of objects', () => {
    expect(isCDNData({ root: [{}, {}, {}] })).to.equal(false)
  })

  it('returns false if the object has another null property', () => {
    expect(isCDNData({ root: 'hello', other: null })).to.equal(false)
  })

  it('returns false if the object has another function property', () => {
    expect(isCDNData({ root: 'hello', other: () => {} })).to.equal(false)
  })

  it('returns false if the object has another true property', () => {
    expect(isCDNData({ root: 'hello', other: true })).to.equal(false)
  })

  it('returns false if the object has another false property', () => {
    expect(isCDNData({ root: 'hello', other: false })).to.equal(false)
  })

  it('returns false if the object has another numerical property', () => {
    expect(isCDNData({ root: 'hello', other: 42 })).to.equal(false)
  })

  it('returns true if the object has another string property', () => {
    expect(isCDNData({ root: 'hello', other: 'world' })).to.equal(true)
  })

  it('returns false if the object has another empty array property', () => {
    expect(isCDNData({ root: 'hello', other: [] })).to.equal(false)
  })

  it('returns false if the object has another property that is an array of nulls', () => {
    expect(isCDNData({ root: 'hello', other: [null, null] })).to.equal(false)
  })

  it('returns false if the object has another property that is an array of functions', () => {
    expect(isCDNData({ root: 'hello', other: [() => {}, () => {}] })).to.equal(false)
  })

  it('returns false if the object has another property that is an array of booleans', () => {
    expect(isCDNData({ root: 'hello', other: [true, false] })).to.equal(false)
  })

  it('returns false if the object has another property that is an array of numbers', () => {
    expect(isCDNData({ root: 'hello', other: [1, 2, 3] })).to.equal(false)
  })

  it('returns false if the object has another property that is an array of strings', () => {
    expect(isCDNData({ root: 'hello', other: ['w', 'o', 'r', 'l', 'd'] })).to.equal(false)
  })

  it('returns false if the object has another property that is an array of arrays', () => {
    expect(isCDNData({ root: 'hello', other: [[], [], []] })).to.equal(false)
  })

  it('returns false if the object has another property that is an array of objects', () => {
    expect(isCDNData({ root: 'hello', other: [{}, {}] })).to.equal(false)
  })

  it('returns false if the object has another object property', () => {
    expect(isCDNData({ root: 'hello', other: {} })).to.equal(false)
  })
})
