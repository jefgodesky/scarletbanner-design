import getAngle from './get-angle'
import getPosition from './get-position'
import getTheme from './get-theme'
import setTheme from './set-theme'
import { ThemePreference } from './get-preference'

const update = async (pref: ThemePreference): Promise<void> => {
  const now = new Date()
  const pos = await getPosition(pref)
  const lat = pos?.coords.latitude
  const lon = pos?.coords.longitude
  const angle = pos === null ? getAngle(pref) : getAngle(pref, now, lat, lon)
  const theme = pos === null ? getTheme(pref) : getTheme(pref, now, lat, lon)
  setTheme(theme)

  const wheel: HTMLElement | null = document.getElementById('theme-picker-wheel')
  if (wheel !== null) wheel.setAttribute('style', `transform: rotate(${angle}deg);`)
}

export default update
