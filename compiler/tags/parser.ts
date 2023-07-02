const parseTags = (data: { [key: string]: any }, prefix: string = ''): { [key: string]: any } => {
  const dict: { [key: string]: any } = {}
  for (const key in data) {
    const tag = `{{ ${prefix}${key} }}`
    const isObj = typeof data[key] === 'object' && data[key] !== null
    if (isObj) return parseTags(data[key], `${prefix}${key}.`)
    dict[tag] = data[key]
  }
  return dict
}

export default parseTags
