interface ColorData {
  hex: string
  [key: string]: any
}

const colorProcessor = (key: string, data: ColorData): string => {
  return `$${key}: ${data.hex};`
}

export default colorProcessor
export { ColorData }
