import { create } from 'unobtrusive-dom'
import handleChange from './handle-change.js'

const getOptions = (components: Element[]): HTMLOptionElement[] => {
  return components.map(component => {
    const heading = component.querySelector('h2')
    const id = component.getAttribute('id') ?? 'Unknown'
    const text = heading?.innerHTML ?? id
    const option = create({ tag: 'option', attrs: { value: id }, text }) as HTMLOptionElement
    option.addEventListener('change', handleChange)
    return option
  })
}

export default getOptions
