import slugify from 'slugify'

const defaultProcessor = (key: string, data: string | number): string => {
  const val = typeof data === 'string' ? `'${data}'` : data
  return `$${slugify(key)}: ${val};`
}

export default defaultProcessor
