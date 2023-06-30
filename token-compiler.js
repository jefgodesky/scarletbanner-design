import fs from 'fs'
import slugify from 'slugify'
import { parse } from 'yaml'

const tokensDir = './tokens'
const modsDir = './scss/modules'

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

const processors = {
  'color': processColor,
  'spacing': processSpacing
}

const files = fs.readdirSync(tokensDir)

for (const file of files) {
  const pieces = file.split('.')
  if (pieces.length !== 2 || pieces[1] !== 'yml') continue
  const raw = fs.readFileSync(`${tokensDir}/${file}`, 'utf8')
  const content = parse(raw)

  const lines = []
  const processor = processors[pieces[0]] ?? processDefault
  for (const key in content) {
    lines.push(processor(slugify(key), content[key]))
  }

  fs.writeFileSync(`${modsDir}/_${pieces[0]}.scss`, lines.join('\n'), { encoding: 'utf8' })
}
