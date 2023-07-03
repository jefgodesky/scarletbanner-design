import slugify from 'slugify'

const spacingProcessor = (key: string, data: string): string => {
  return `$${slugify(key)}: ${data};`
}

export default spacingProcessor
