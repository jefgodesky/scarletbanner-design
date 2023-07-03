import { readdirSync, readFileSync } from 'fs'
import { parse } from 'yaml'
import getCDN from './get-cdn.js'
import pkg from '../package.json' assert { type: 'json' }

const dir = './tokens'

const compileTokens = (): { [key: string]: any } => {
  const data: { [key: string]: any } = { version: pkg.version }
  const files = readdirSync(dir)
  for (const file of files) {
    const name = file.substring(0, file.lastIndexOf('.yml'))
    if (name === '') continue
    const raw = readFileSync(`${dir}/${file}`, 'utf8')
    data[name] = parse(raw)
  }

  if (data.cdn !== undefined) data.cdn = getCDN(data.cdn)
  return data
}

export default compileTokens
