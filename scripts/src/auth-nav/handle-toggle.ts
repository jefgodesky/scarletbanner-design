import { toggleClass } from 'unobtrusive-dom'

const handleToggle = (): void => {
  const authNav: HTMLElement | null = document.querySelector('nav.auth.header')
  if (authNav !== null) toggleClass(authNav, 'closed', 'open')
}

export default handleToggle
