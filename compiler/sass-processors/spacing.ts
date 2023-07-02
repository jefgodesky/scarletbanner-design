const spacingProcessor = (key: string, data: string): string => {
  return `$${key}: ${data};`
}

export default spacingProcessor
