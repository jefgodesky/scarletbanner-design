import fs from 'fs'
import path from 'path'
import getVersionPath from './get-version-path.js'

const [release, version] = getVersionPath()
const releaseDir = `.${release}`

if (!fs.existsSync(releaseDir)) {
  fs.mkdirSync(releaseDir, { recursive: true })
}

const types = ['scripts', 'stylesheets']
const sourceDirs = types.map(type => `./${type}/dist`)
sourceDirs.forEach(dir => {
  fs.readdirSync(dir).forEach(file => {
    const src = path.join(process.cwd(), dir, file)
    const dest = path.join(process.cwd(), release, file)
    fs.copyFileSync(src, dest)
  })
})

console.log(`Release ${version} ready in ${releaseDir}`)
