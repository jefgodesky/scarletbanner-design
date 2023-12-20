import { readFileSync, writeFileSync } from 'fs'

const generateAddDoc = () => {
  const pkg = JSON.parse(readFileSync('./package.json', { encoding: 'utf8' }))
  const add = {
    version: pkg.version,
    'version path': `v${pkg.version.split('.').join('/')}`
  }
  writeFileSync('./add-doc.json', JSON.stringify(add, null, 2), { encoding: 'utf8' })
}

generateAddDoc()
