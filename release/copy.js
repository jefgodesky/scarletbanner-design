import fs from 'fs'
import path from 'path'
import { version, versionPath } from './version.js'

const copy = (src, dest) => {
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

const map = {
  './images': './dist/images',
  './fonts': './dist/fonts',
  './dist/scripts': `./dist${versionPath}/scripts`,
  './dist/stylesheets': `./dist${versionPath}/stylesheets`,
  './dist/images': `./dist${versionPath}/images`,
  './dist/fonts': `./dist${versionPath}/fonts`
}

for (const src in map) copy(src, map[src])
console.log(`Release ${version} ready in dist${versionPath}`)
