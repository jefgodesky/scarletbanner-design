const parseTags = (data: { [key: string]: any }, prefix: string = ''): { [key: string]: any } => {
  let dict: { [key: string]: any } = {}
  for (const key in data) {
    const tag = `{{ ${prefix}${key} }}`
    const isObj = typeof data[key] === 'object' && data[key] !== null
    if (!isObj) { dict[tag] = data[key]; continue }
    dict = Object.assign({}, dict, parseTags(data[key], `${prefix}${key}.`))
  }
  return dict
}

export default parseTags
