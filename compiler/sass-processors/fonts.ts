import slugify from 'slugify'

interface FontData {
  stack: string[]
  [key: string]: any
}

const fontProcessor = (key: string, data: FontData): string => {
  const special = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui', 'ui-serif', 'ui-sans-serif',
    'ui-monospace', 'ui-rounded', 'math', 'emoji', 'fangsong']
  const stackMap = data.stack.map(orig => special.includes(orig) ? orig : `'${orig}'`)
  return `$${slugify(key)}: ${stackMap.join(', ')};`
}

const isFontData = (obj: any): obj is FontData => {
  if (typeof obj !== 'object' || obj === null) return false
  if (obj.stack === undefined || !Array.isArray(obj.stack)) return false
  for (const str of obj.stack) if (typeof str !== 'string') return false
  return true
}

export default fontProcessor
export { FontData, isFontData }
