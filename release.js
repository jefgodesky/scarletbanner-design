import fs from 'fs'
import path from 'path'

const pkgdata = fs.readFileSync('./package.json')
const pkg = JSON.parse(pkgdata)

const release = `./v${pkg.version.split('.').join('/')}`
if (!fs.existsSync(release)) {
  fs.mkdirSync(release, { recursive: true })
}

const types = ['scripts', 'stylesheets']
const sourceDirs = types.map(type => `./${type}/dist`)
sourceDirs.forEach(dir => {
  fs.readdirSync(dir).forEach(file => {
    const src = path.join(process.cwd(), dir, file)
    const dest = path.join(release, file)
    fs.copyFileSync(src, dest)
  })
})

console.log(`Release ${pkg.version} ready in ${release}`)
