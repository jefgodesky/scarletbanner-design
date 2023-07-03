import { readdirSync, readFileSync, writeFileSync } from 'fs'
import parseTags from './tags/parser.js'
import renderTags from './tags/render.js'

const input = './docs'
const output = '.'

const compileHTML = (data: { [key: string]: { [key: string]: any } }): void => {
  const tags = parseTags(data)
  const templates = readdirSync(input)
  for (const file of templates) {
    const orig = readFileSync(`${input}/${file}`, 'utf8')
    const filled = renderTags(orig, tags)
    writeFileSync(`${output}/${file}`, filled, { encoding: 'utf8' })
  }
}

export default compileHTML
