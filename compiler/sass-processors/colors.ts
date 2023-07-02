interface ColorData {
  hex: string
  [key: string]: any
}

const colorProcessor = (key: string, data: ColorData): string => {
  return `$${key}: ${data.hex};`
}

const isColorData = (obj: any): obj is ColorData => {
  if (typeof obj !== 'object' || obj === null) return false
  return obj.hex !== undefined && typeof obj.hex === 'string'
}

export default colorProcessor
export { ColorData, isColorData }
