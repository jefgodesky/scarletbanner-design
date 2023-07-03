import { expect } from 'chai'
import colorProcessor, { isColorData } from './colors.js'

describe('colorProcessor', () => {
  it('returns a string defining a Sass variable', () => {
    const actual = colorProcessor('black', { hex: '#000' })
    expect(actual).to.equal('$black: #000;')
  })

  it('handles variables with spaces', () => {
    const actual = colorProcessor('off black', { hex: '#111' })
    expect(actual).to.equal('$off-black: #111;')
  })
})

describe('isColorData', () => {
  it('returns false if given null', () => {
    expect(isColorData(null)).to.equal(false)
  })

  it('returns false if given a function', () => {
    expect(isColorData(() => {})).to.equal(false)
  })

  it('returns false if given true', () => {
    expect(isColorData(true)).to.equal(false)
  })

  it('returns false if given false', () => {
    expect(isColorData(false)).to.equal(false)
  })

  it('returns false if given a number', () => {
    expect(isColorData(1)).to.equal(false)
  })

  it('returns false if given a string', () => {
    expect(isColorData('hello')).to.equal(false)
  })

  it('returns false if given an empty array', () => {
    expect(isColorData([])).to.equal(false)
  })

  it('returns false if given an array of nulls', () => {
    expect(isColorData([null, null])).to.equal(false)
  })

  it('returns false if given an array of functions', () => {
    expect(isColorData([() => {}, () => {}])).to.equal(false)
  })

  it('returns false if given an array of booleans', () => {
    expect(isColorData([true, false])).to.equal(false)
  })

  it('returns false if given an array of numbers', () => {
    expect(isColorData([1, 2, 3])).to.equal(false)
  })

  it('returns false if given an array of strings', () => {
    expect(isColorData(['a', 'b', 'c'])).to.equal(false)
  })

  it('returns false if given an array of arrays', () => {
    expect(isColorData([[], [], []])).to.equal(false)
  })

  it('returns false if given an array of objects', () => {
    expect(isColorData([{}, {}, {}])).to.equal(false)
  })

  it('returns false if given an empty object', () => {
    expect(isColorData({})).to.equal(false)
  })

  it('returns false if given an object with a null hex property', () => {
    expect(isColorData({ hex: null })).to.equal(false)
  })

  it('returns false if given an object with a function hex property', () => {
    expect(isColorData({ hex: () => {} })).to.equal(false)
  })

  it('returns false if given an object with a true hex property', () => {
    expect(isColorData({ hex: true })).to.equal(false)
  })

  it('returns false if given an object with a false hex property', () => {
    expect(isColorData({ hex: false })).to.equal(false)
  })

  it('returns false if given an object with a numerical hex property', () => {
    expect(isColorData({ hex: 1 })).to.equal(false)
  })

  it('returns true if given an object with a string hex property', () => {
    expect(isColorData({ hex: 'hello' })).to.equal(true)
  })

  it('returns false if given an object with an empty array hex property', () => {
    expect(isColorData({ hex: [] })).to.equal(false)
  })

  it('returns false if given an object with a hex property that is an array of nulls', () => {
    expect(isColorData({ hex: [null, null] })).to.equal(false)
  })

  it('returns false if given an object with a hex property that is an array of functions', () => {
    expect(isColorData({ hex: [() => {}, () => {}] })).to.equal(false)
  })

  it('returns false if given an object with a hex property that is an array of booleans', () => {
    expect(isColorData({ hex: [true, false] })).to.equal(false)
  })

  it('returns false if given an object with a hex property that is an array of numbers', () => {
    expect(isColorData({ hex: [1, 2, 3] })).to.equal(false)
  })

  it('returns false if given an object with a hex property that is an array of strings', () => {
    expect(isColorData({ hex: ['a', 'b', 'c'] })).to.equal(false)
  })

  it('returns false if given an object with a hex property that is an array of arrays', () => {
    expect(isColorData({ hex: [[], [], []] })).to.equal(false)
  })

  it('returns false if given an object with a hex property that is an array of objects', () => {
    expect(isColorData({ hex: [{}, {}, {}] })).to.equal(false)
  })

  it('returns true if the object has other properties', () => {
    expect(isColorData({ name: 'Test', src: 'test', hex: 'hello', other: { val: 42 } })).to.equal(true)
  })
})
