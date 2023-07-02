import { expect } from 'chai'
import fontProcessor, { isFontData } from './fonts.js'

describe('fontProcessor', () => {
  it('returns a string defining a Sass variable', () => {
    const actual = fontProcessor('test', { stack: '\'Helvetica\', sans-serif' })
    expect(actual).to.equal('$test: \'Helvetica\', sans-serif;')
  })
})

describe('isFontData', () => {
  it('returns false if given null', () => {
    expect(isFontData(null)).to.equal(false)
  })

  it('returns false if given a function', () => {
    expect(isFontData(() => {})).to.equal(false)
  })

  it('returns false if given true', () => {
    expect(isFontData(true)).to.equal(false)
  })

  it('returns false if given false', () => {
    expect(isFontData(false)).to.equal(false)
  })

  it('returns false if given a number', () => {
    expect(isFontData(1)).to.equal(false)
  })

  it('returns false if given a string', () => {
    expect(isFontData('hello')).to.equal(false)
  })

  it('returns false if given an empty array', () => {
    expect(isFontData([])).to.equal(false)
  })

  it('returns false if given an array of nulls', () => {
    expect(isFontData([null, null])).to.equal(false)
  })

  it('returns false if given an array of functions', () => {
    expect(isFontData([() => {}, () => {}])).to.equal(false)
  })

  it('returns false if given an array of booleans', () => {
    expect(isFontData([true, false])).to.equal(false)
  })

  it('returns false if given an array of numbers', () => {
    expect(isFontData([1, 2, 3])).to.equal(false)
  })

  it('returns false if given an array of strings', () => {
    expect(isFontData(['a', 'b', 'c'])).to.equal(false)
  })

  it('returns false if given an array of arrays', () => {
    expect(isFontData([[], [], []])).to.equal(false)
  })

  it('returns false if given an array of objects', () => {
    expect(isFontData([{}, {}, {}])).to.equal(false)
  })

  it('returns false if given an empty object', () => {
    expect(isFontData({})).to.equal(false)
  })

  it('returns false if given an object with a null stack property', () => {
    expect(isFontData({ stack: null })).to.equal(false)
  })

  it('returns false if given an object with a function stack property', () => {
    expect(isFontData({ stack: () => {} })).to.equal(false)
  })

  it('returns false if given an object with a true stack property', () => {
    expect(isFontData({ stack: true })).to.equal(false)
  })

  it('returns false if given an object with a false stack property', () => {
    expect(isFontData({ stack: false })).to.equal(false)
  })

  it('returns false if given an object with a numerical stack property', () => {
    expect(isFontData({ stack: 1 })).to.equal(false)
  })

  it('returns true if given an object with a string stack property', () => {
    expect(isFontData({ stack: 'hello' })).to.equal(true)
  })

  it('returns false if given an object with an empty array stack property', () => {
    expect(isFontData({ stack: [] })).to.equal(false)
  })

  it('returns false if given an object with a stack property that is an array of nulls', () => {
    expect(isFontData({ stack: [null, null] })).to.equal(false)
  })

  it('returns false if given an object with a stack property that is an array of functions', () => {
    expect(isFontData({ stack: [() => {}, () => {}] })).to.equal(false)
  })

  it('returns false if given an object with a stack property that is an array of booleans', () => {
    expect(isFontData({ stack: [true, false] })).to.equal(false)
  })

  it('returns false if given an object with a stack property that is an array of numbers', () => {
    expect(isFontData({ stack: [1, 2, 3] })).to.equal(false)
  })

  it('returns false if given an object with a stack property that is an array of strings', () => {
    expect(isFontData({ stack: ['a', 'b', 'c'] })).to.equal(false)
  })

  it('returns false if given an object with a stack property that is an array of arrays', () => {
    expect(isFontData({ stack: [[], [], []] })).to.equal(false)
  })

  it('returns false if given an object with a stack property that is an array of objects', () => {
    expect(isFontData({ stack: [{}, {}, {}] })).to.equal(false)
  })

  it('returns true if the object has other properties', () => {
    expect(isFontData({ name: 'Test', src: 'test', stack: 'hello', other: { val: 42 } })).to.equal(true)
  })
})
