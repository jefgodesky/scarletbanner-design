import fs from 'fs'
import path from 'path'
import getVersionPath from './get-version-path.js'

const [release, version] = getVersionPath()
const releaseDir = `.${release}`

const copy = (src: string, dest: string): void => {
  const srcExists = fs.existsSync(src)
  const destExists = fs.existsSync(dest)
  const srcIsDir = srcExists && fs.statSync(src).isDirectory()

  if (srcIsDir) {
    if (!destExists) fs.mkdirSync(dest, { recursive: true })

    fs.readdirSync(src).forEach(filename => {
      copy(path.join(src, filename), path.join(dest, filename))
    })
  } else if (srcExists) {
    fs.copyFileSync(src, dest)
  }
}

const map: { [key: string]: string } = {
  './scripts/dist': `.${release}`,
  './stylesheets/dist': `.${release}`,
  './images': `.${release}/images`,
  './fonts': `.${release}/fonts`
}

for (const src in map) copy(src, map[src])
console.log(`Release ${version} ready in ${releaseDir}`)
