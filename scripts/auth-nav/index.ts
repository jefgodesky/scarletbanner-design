import { addClass, create } from 'unobtrusive-dom'
import handleToggle from './handle-toggle'

const initAuthNav = (components: HTMLElement[]): void => {
  if (components.length < 1) return
  const header = components[0]
  addClass(header, 'initialized', 'closed')
  const toggle = create({ tag: 'span', classes: ['toggle'] })
  toggle.addEventListener('click', handleToggle)
  header.appendChild(toggle)
}

export default initAuthNav
