import rfdc from 'rfdc'
import pkg from '../package.json' assert { type: 'json' }

interface CDNData {
  root: string
  [key: string]: string
}

const getCDN = (data: CDNData, version: string = pkg.version): CDNData => {
  const cloner = rfdc()
  const cpy = cloner(data)
  cpy.root = `${cpy.root}/v${version.split('.').join('/')}`

  for (const key in cpy) {
    if (key === 'root') continue
    cpy[key] = `#{$root}${data[key]}`
  }

  return cpy
}

const isCDNData = (obj: any): obj is CDNData => {
  if (typeof obj !== 'object' || obj === null) return false
  for (const key in obj) { if (typeof obj[key] !== 'string') return false }
  return obj.root !== undefined
}

export default getCDN
export { CDNData, isCDNData }
