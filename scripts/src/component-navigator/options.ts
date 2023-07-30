import { create } from 'unobtrusive-dom'

const getOptions = (components: Element[]): HTMLOptionElement[] => {
  return components.map(component => {
    const heading = component.querySelector('h2')
    const id = component.getAttribute('id') ?? 'Unknown'
    const text = heading?.innerHTML ?? id
    return create({ tag: 'option', attrs: { value: id }, text }) as HTMLOptionElement
  })
}

export default getOptions
