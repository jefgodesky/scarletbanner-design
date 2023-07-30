import { create } from 'unobtrusive-dom'
import getGroups from './groups.js'
import handleChange from './handle-change.js'

const getComponentNavigator = (components: HTMLElement[]): HTMLSelectElement => {
  const groups = getGroups(components)
  const select = create({ tag: 'select' }) as HTMLSelectElement
  const text = 'Select a component...'
  select.appendChild(create({ tag: 'option', attrs: { selected: 'selected' }, text }) as Node)
  for (const group of groups) select.appendChild(group)
  select.addEventListener('change', handleChange)
  return select
}

export default getComponentNavigator
