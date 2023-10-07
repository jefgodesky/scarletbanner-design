import getVersionPath from './get-version-path.js'
import setBase from './set-base.js'

const [base] = getVersionPath()
setBase(`https://design.scarletbanner.com${base}`)
