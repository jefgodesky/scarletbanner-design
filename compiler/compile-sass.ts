import { writeFileSync } from 'fs'
import generateSass from './generate-sass.js'

const modsDir = './scss/modules'

const compileSass = (data: { [key: string]: { [key: string]: any } }): void => {
  for (const key in data) {
    const lines = generateSass(key, data[key])
    writeFileSync(`${modsDir}/_${key}.scss`, lines.join('\n'), { encoding: 'utf8' })
  }
}

export default compileSass
