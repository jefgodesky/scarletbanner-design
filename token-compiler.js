import fs from 'fs'
import slugify from 'slugify'
import { parse } from 'yaml'
import pkg from './package.json' assert { type: 'json' }

const tokensDir = './tokens'
const modsDir = './scss/modules'
const htmlInDir = './html'
const htmlOutDir = '.'

/**
 * Transform a key/value pair from data into a line of Sass that defines that
 * color as a Sass variable.
 * @param {string} key - The name of the Sass variable.
 * @param {Object} val - An object with a `hex` string property.
 * @param {string} val.hex - The hexadecimal value of the color to be assigned
 *   to the `key` variable in a string format.
 * @returns {string} - A line of Sass that defines a new Sass variable `key` to
 *   the hexadecimal value provided by `val.hex`.
 */

const processColor = (key, val) => {
  return `$${key}: ${val.hex};`
}

/**
 * Transform a key/value pair from data into a line of Sass that defines that
 * value as a Sass variable.
 * @param {string} key - The name of the Sass variable.
 * @param {string} val - The string expressing a spacing value in CSS
 *   (e.g., 2em or 10px).
 * @returns {string} - A line of Sass that defines a new Sass variable `key` to
 *   the spacing value provided by `val`.
 */

const processSpacing = (key, val) => {
  return `$${key}: ${val};`
}

/**
 * Transform a key/value pair from data into a line of Sass that defines that
 * font as a Sass variable.
 * @param {string} key - The name of the Sass variable.
 * @param {Object} val - An object with a `name` object property.
 * @param {Object} val.name - An object with a `system` string property.
 * @param {string} val.name.system - The name of the font to be set in the
 *   variable. This is the name of the font as it would be used in a CSS
 *   font-family rule.
 * @returns {string} - A line of Sass that defines a new Sass variable `key` to
 *   the font name provided by `val.name.system`.
 */

const processFont = (key, val) => {
  return `$${key}: "${val.name.system}";`
}

/**
 * Transform a key/value pair from data into a line of Sass that defines that
 * value as a Sass variable.
 * @param {string} key - The name of the Sass variable.
 * @param {string|number} val - The value to assign to that variable.
 * @returns {string} - A line of Sass that defines a new Sass variable `key` to
 *   the value of `val`.
 */

const processDefault = (key, val) => {
  const formatting = typeof val === 'string' ? `"${val}"` : val
  return `$${key}: ${formatting};`
}

/**
 * This method creates a copy of `str`, and then loops through all of the keys
 * in the object `data` to create unique tags for each property and replaces
 * each instance of each tag with the corresponding value found in `data`. The
 * method is called recursively, so that complex, nested `data` objects can be
 * used. For example, a data object like `{ a: { b: { c: 'Hello!' } } }` would
 * find `{{ a.b.c }}` and replace it with `Hello!`
 * @param {string} str - The original string.
 * @param {Object} data - The data object used to find and replace tags.
 * @param {string} [prefix=''] - A prefix used to find tags; used in recursion,
 *   and should generally be ignored in other cases.
 * @returns {string} - A copy of the original string with each tag instance
 *   replaced with data from the `data` object.
 */

const replaceValues = (str, data, prefix = '') => {
  let working = (' ' + str).slice(1)
  for (const key in data) {
    const slug = slugify(key)
    const tag = `{{ ${prefix + slug} }}`
    working = working.replaceAll(tag, data[key])
    const isObj = typeof data[key] === 'object' && data[key] !== null
    const keys = isObj ? Object.keys(data[key]).length : 0
    if (keys > 0) working = replaceValues(working, data[key], prefix + slug + '.')
  }
  return working
}

// Special processors for specific token files.
const processors = {
  'color': processColor,
  'spacing': processSpacing,
  'fonts': processFont
}

const data = { version: pkg.version }
const tokenFiles = fs.readdirSync(tokensDir)
const srcHtmlFiles = fs.readdirSync(htmlInDir)

// Loop over token files
for (const file of tokenFiles) {
  const pieces = file.split('.')
  if (pieces.length !== 2 || pieces[1] !== 'yml') continue
  const raw = fs.readFileSync(`${tokensDir}/${file}`, 'utf8')
  data[pieces[0]] = parse(raw)

  // Processing Sass variables.
  const lines = []
  const processor = processors[pieces[0]] ?? processDefault
  for (const key in data[pieces[0]]) {
    lines.push(processor(slugify(key), data[pieces[0]][key]))
  }

  // Print Sass variable file corresponding to this token file.
  fs.writeFileSync(`${modsDir}/_${pieces[0]}.scss`, lines.join('\n'), { encoding: 'utf8' })
}

// Create HTML files.
for (const file of srcHtmlFiles) {
  const raw = fs.readFileSync(`${htmlInDir}/${file}`, 'utf8')
  const updated = replaceValues(raw, data)
  fs.writeFileSync(`${htmlOutDir}/${file}`, updated, { encoding: 'utf8' })
}
