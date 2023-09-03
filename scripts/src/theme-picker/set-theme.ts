import { addClass, removeClass } from 'unobtrusive-dom'
import { Theme } from './get-theme'

const setTheme = (theme: Theme): void => {
  const dayFn = theme === 'day' ? addClass : removeClass
  const nightFn = theme === 'night' ? addClass : removeClass
  dayFn(document.body, 'day')
  nightFn(document.body, 'night')
}

export default setTheme
