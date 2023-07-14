import renderSwatches from './swatches.js'

const renderTags = (orig: string, tags: { [tag: string]: any }, data?: { [key: string]: any }): string => {
  let working = (' ' + orig).slice(1)
  for (const tag in tags) {
    working = working.replaceAll(tag, tags[tag])
  }

  if (data !== undefined) working = working.replaceAll('{{ swatches }}', renderSwatches(data))
  return working
}

export default renderTags
