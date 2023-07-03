/* global document */

import Prism from 'prismjs'

const document = document !== undefined ? document : null
Prism.plugins.autoloader.languages_path = document !== null
  ? document.currentScript.src.replace(/\/([^\/]+)$/,'/prism/components/')
  : null
Prism.highlightAll()
