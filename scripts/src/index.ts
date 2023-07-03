/* global document */

import Prism from 'prismjs'

const script = document.currentScript as HTMLScriptElement
Prism.plugins.autoloader.languages_path = script.src.replace(/\/([^/]+)$/, '/prism/components/')
Prism.highlightAll()
