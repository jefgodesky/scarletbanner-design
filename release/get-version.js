import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(join(__dirname, '../package.json'), { encoding: 'utf8' }))

const lines = [
  `const version = '${pkg.version}'`,
  `const versionPath = '/v${pkg.version.split('.').join('/')}'`,
  '',
  'export {',
  '  version,',
  '  versionPath',
  '}',
  ''
]

writeFileSync(join(__dirname, 'version.js'), lines.join('\n'), { encoding: 'utf8' })
