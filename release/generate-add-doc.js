import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { version, versionPath } from './version.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const generateAddDoc = () => {
  const add = {
    version,
    'version path': versionPath
  }
  writeFileSync(join(__dirname, 'add-doc.json'), JSON.stringify(add, null, 2), { encoding: 'utf8' })
}

generateAddDoc()
