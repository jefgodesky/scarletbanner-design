interface FontData {
  stack: string
  [key: string]: any
}

const fontProcessor = (key: string, data: FontData): string => {
  return `$${key}: ${data.stack};`
}

const isFontData = (obj: any): obj is FontData => {
  if (typeof obj !== 'object' || obj === null) return false
  return obj.stack !== undefined && typeof obj.stack === 'string'
}

export default fontProcessor
export { FontData, isFontData }
