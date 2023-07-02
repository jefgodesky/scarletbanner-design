interface ColorData {
  hex: string
  [key: string]: string | number | object
}

const colorProcessor = (key: string, data: ColorData): string => {
  return `$${key}: ${data.hex};`
}

export default colorProcessor
export { ColorData }
