import fs from 'fs'
import slugify from 'slugify'
import { parse } from 'yaml'
import pkg from './package.json' assert { type: 'json' }

const tokensDir = './tokens'
const modsDir = './scss/modules'
const htmlInDir = './html'
const htmlOutDir = '.'

const processColor = (key, val) => {
  return `$${key}: ${val.hex};`
}

const processSpacing = (key, val) => {
  return `$${key}: ${val};`
}

const processDefault = (key, val) => {
  const formatting = typeof val === 'string' ? `"${val}"` : val
  return `$${key}: ${formatting};`
}

const replaceValues = (str, data, prefix = '') => {
  let working = (' ' + str).slice(1)
  for (const key in data) {
    const slug = slugify(key)
    const tag = `{{ ${prefix + slug} }}`
    working = working.replace(tag, data[key])
    const isObj = typeof data[key] === 'object' && data[key] !== null
    const keys = isObj ? Object.keys(data[key]).length : 0
    if (keys > 0) working = replaceValues(working, data[key], prefix + slug + '.')
  }
  return working
}

const processors = {
  'color': processColor,
  'spacing': processSpacing
}

const data = { version: pkg.version }
const tokenFiles = fs.readdirSync(tokensDir)

for (const file of tokenFiles) {
  const pieces = file.split('.')
  if (pieces.length !== 2 || pieces[1] !== 'yml') continue
  const raw = fs.readFileSync(`${tokensDir}/${file}`, 'utf8')
  data[pieces[0]] = parse(raw)

  const lines = []
  const processor = processors[pieces[0]] ?? processDefault
  for (const key in data[pieces[0]]) {
    lines.push(processor(slugify(key), data[pieces[0]][key]))
  }

  fs.writeFileSync(`${modsDir}/_${pieces[0]}.scss`, lines.join('\n'), { encoding: 'utf8' })

  const srcHtmlFiles = fs.readdirSync(htmlInDir)

  for (const file of srcHtmlFiles) {
    const raw = fs.readFileSync(`${htmlInDir}/${file}`, 'utf8')
    const updated = replaceValues(raw, data)
    fs.writeFileSync(`${htmlOutDir}/${file}`, updated, { encoding: 'utf8' })
  }
}
