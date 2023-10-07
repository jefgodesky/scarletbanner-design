import fs from 'fs'

const getVersionPath = (v?: string): string => {
  if (v === undefined) {
    const pkgdata = fs.readFileSync('./package.json', { encoding: 'utf-8' })
    const pkg = JSON.parse(pkgdata)
    v = pkg.version as string
  }

  return `/v${v.split('.').join('/')}`
}

export default getVersionPath
