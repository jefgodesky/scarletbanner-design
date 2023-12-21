import { readFileSync, writeFileSync } from 'fs'

const setBase = (base, filename = 'stylesheets/modules/_paths.scss') => {
  const original = readFileSync(filename, { encoding: 'utf-8' })
  const update = original.replace(/\$base: "(.*?)";/, `$base: "${base}";`)
  writeFileSync(filename, update, { encoding: 'utf-8' })
}

export default setBase
