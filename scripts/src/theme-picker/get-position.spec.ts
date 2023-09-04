import { expect } from 'chai'
import jsdomGlobal from 'jsdom-global'
import getPosition from './get-position'

describe('getPosition', () => {
  let jsdomCleanUp: () => void

  beforeEach(() => {
    jsdomCleanUp = jsdomGlobal()
    document.body.innerHTML = ''
  })

  afterEach(() => {
    jsdomCleanUp()
  })

  it('returns null if given day', async () => {
    const pos = await getPosition('day')
    expect(pos).to.equal(null)
  })

  it('returns null if given night', async () => {
    const pos = await getPosition('night')
    expect(pos).to.equal(null)
  })
})
