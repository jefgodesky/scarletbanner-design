import { addClass, create } from 'unobtrusive-dom'
import handleToggle from './handle-toggle'

const initAuthNav = (components: HTMLElement[]): void => {
  if (components.length < 1) return
  const header = components[0]

  // Put the header into its starting position without transition to
  // avoid a "blip" of the menu
  header.setAttribute('style', 'transition: none;')

  addClass(header, 'initialized', 'closed')
  const toggle = create({ tag: 'span', classes: ['toggle'] })
  toggle.addEventListener('click', handleToggle)
  header.appendChild(toggle)

  // After any time at all has passed, we can safely remove the
  // style attribute we added before to prevent the blip.
  window.setTimeout(() => {
    header.removeAttribute('style')
  }, 1)
}

export default initAuthNav
