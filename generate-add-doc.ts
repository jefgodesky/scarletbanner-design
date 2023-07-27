import { readFileSync, writeFileSync } from 'fs'
import pkg from './package.json' assert { type: 'json' }

const generateAddDoc = (): void => {
  const cdn = readFileSync('./stylesheets/src/modules/_cdn.scss', { encoding: 'utf8' })
  const match = cdn.match(/\$root: '(.*?)';/i)
  const defaultRoot = 'https://scarletbanner.s3.us-east-2.stackpathstorage.com/design/v1/0/0'
  const root = match === null || match.length < 2 ? defaultRoot : match[1]

  const add = {
    version: pkg.version,
    'cdn.root': root
  }
  writeFileSync('./add-doc.json', JSON.stringify(add, null, 2), { encoding: 'utf8' })
}

generateAddDoc()
