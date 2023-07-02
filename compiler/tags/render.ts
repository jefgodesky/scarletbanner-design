const renderTags = (orig: string, tags: { [tag: string]: any }): string => {
  let working = (' ' + orig).slice(1)
  for (const tag in tags) {
    working = working.replaceAll(tag, tags[tag])
  }
  return working
}

export default renderTags
