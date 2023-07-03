import { polyfill as PromisePolyfill } from 'es6-promise'
import selector from './selector'

PromisePolyfill()

const modules = [
  { selector: 'code.block', src: './code.js', pass: false }
]

const init = async (): Promise<void> => {
  for (const module of modules) {
    const elems = selector(module.selector)
    if (elems === null) continue
    const init = await import(/* webpackIgnore: true */ module.src)
    init.default(elems)
  }
}

init()
  .then(() => {})
  .catch(() => {})
