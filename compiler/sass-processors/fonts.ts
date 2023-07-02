interface FontData {
  stack: string
  [key: string]: any
}

const fontProcessor = (key: string, data: FontData): string => {
  return `$${key}: ${data.stack};`
}

export default fontProcessor
export { FontData }
