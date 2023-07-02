const defaultProcessor = (key: string, data: string | number): string => {
  const val = typeof data === 'string' ? `'${data}'` : data
  return `$${key}: ${val};`
}

export default defaultProcessor
