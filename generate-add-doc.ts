import { writeFileSync } from 'fs'
import pkg from './package.json' assert { type: 'json' }

const generateAddDoc = (): void => {
  const add = {
    version: pkg.version,
    'version path': `v${pkg.version.split('.').join('/')}`
  }
  writeFileSync('./add-doc.json', JSON.stringify(add, null, 2), { encoding: 'utf8' })
}

generateAddDoc()
