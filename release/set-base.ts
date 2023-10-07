import { readFileSync, writeFileSync } from 'fs'

const setBase = (base: string, filename: string = '../stylesheets/src/modules/_paths.scss'): void => {
  const original = readFileSync(filename, { encoding: 'utf-8' })
  const update = original.replace(/\$base: "(.*?)";/, `$base: "${base}";`)
  writeFileSync(filename, update, { encoding: 'utf-8' })
}

export default setBase
