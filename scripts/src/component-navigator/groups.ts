import { create } from 'unobtrusive-dom'
import getOptions from './options.js'

const getGroups = (components: Element[]): HTMLOptGroupElement[] => {
  const categoryField = 'data-component-category'
  return [...new Set(components.map(component => component.getAttribute(categoryField)))].map(category => {
    const members = components.filter(component => component.getAttribute(categoryField) === category)
    const options = getOptions(members)
    const group = create({ tag: 'optgroup', attrs: { label: category ?? 'Uncategorized' } })
    for (const option of options) group.appendChild(option)
    return group as HTMLOptGroupElement
  })
}

export default getGroups
