import { expect } from 'chai'
import * as sinon from 'sinon'
import jsdomGlobal from 'jsdom-global'
import getPreference from './get-preference'

describe('getPreference', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal('', { url: 'http://localhost:3333' })
    document.body.innerHTML = ''
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('returns day if browser does not specify dark theme', () => {
    const matchMediaStub = sinon.stub()
    window.matchMedia = matchMediaStub
    matchMediaStub.returns({ matches: false, addListener: sinon.spy(), removeListener: sinon.spy() })
    const pref = getPreference()
    expect(pref).to.equal('day')
  })

  it('returns night if browser specifies dark theme', () => {
    const matchMediaStub = sinon.stub()
    window.matchMedia = matchMediaStub
    matchMediaStub.returns({ matches: true, addListener: sinon.spy(), removeListener: sinon.spy() })
    const pref = getPreference()
    expect(pref).to.equal('night')
  })

  it('returns day if user has specified day', () => {
    const matchMediaStub = sinon.stub()
    window.matchMedia = matchMediaStub
    matchMediaStub.returns({ matches: true, addListener: sinon.spy(), removeListener: sinon.spy() })
    window.localStorage.setItem('theme', 'day')
    const pref = getPreference()
    expect(pref).to.equal('day')
  })

  it('returns night if user has specified night', () => {
    const matchMediaStub = sinon.stub()
    window.matchMedia = matchMediaStub
    matchMediaStub.returns({ matches: false, addListener: sinon.spy(), removeListener: sinon.spy() })
    window.localStorage.setItem('theme', 'night')
    const pref = getPreference()
    expect(pref).to.equal('night')
  })

  it('returns natural if user has specified natural', () => {
    const matchMediaStub = sinon.stub()
    window.matchMedia = matchMediaStub
    matchMediaStub.returns({ matches: true, addListener: sinon.spy(), removeListener: sinon.spy() })
    window.localStorage.setItem('theme', 'natural')
    const pref = getPreference()
    expect(pref).to.equal('natural')
  })
})
