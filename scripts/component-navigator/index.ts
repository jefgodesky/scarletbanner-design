import getComponentNavigator from './nav'

const initComponentNavigator = (components: HTMLElement[]): void => {
  const root = document.getElementById('component-navigator')
  if (root === null) return
  const select = getComponentNavigator(components)
  root.appendChild(select)
}

export default initComponentNavigator
