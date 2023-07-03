/* global document */

import Prism from 'prismjs'

const script = <HTMLScriptElement>document.currentScript
Prism.plugins.autoloader.languages_path = script.src.replace(/\/([^/]+)$/, '/prism/components/')
Prism.highlightAll()
