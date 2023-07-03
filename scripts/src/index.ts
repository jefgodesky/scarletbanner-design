/* global document */

import { polyfill as Promise } from 'es6-promise'
import Prism from 'prismjs'

Promise()

const script = document.currentScript as HTMLScriptElement
Prism.plugins.autoloader.languages_path = script.src.replace(/\/([^/]+)$/, '/prism/components/')
Prism.highlightAll()
