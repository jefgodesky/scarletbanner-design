/* global document */

import Prism from 'prismjs'

Prism.plugins.autoloader.languages_path = document.currentScript.src.replace(/\/([^/]+)$/, '/prism/components/')
Prism.highlightAll()
