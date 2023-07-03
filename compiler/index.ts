import compileHTML from './compile-html.js'
import compileSass from './compile-sass.js'
import compileTokens from './compile-tokens.js'

const data = compileTokens()
compileSass(data)
compileHTML(data)
