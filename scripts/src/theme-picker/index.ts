import createThemePickerWidget from './create-widget'
import getAngle from './get-angle'
import getPreference from './get-preference'
import getTheme from './get-theme'
import setTheme from './set-theme'

const initThemePicker = async (): Promise<void> => {
  createThemePickerWidget()
  const now = new Date()
  const pref = getPreference()

  const turnWheel = (degrees: number): void => {
    const wheel: HTMLElement | null = document.getElementById('theme-picker-wheel')
    if (wheel !== null) wheel.setAttribute('style', `transform: rotate(${degrees}deg);`)
  }

  const withPosition = (position: GeolocationPosition): void => {
    const { latitude, longitude } = position.coords
    setTheme(getTheme(pref, now, latitude, longitude))
    turnWheel(getAngle(pref, now, latitude, longitude))
  }

  const withoutPosition = (): void => {
    const fallbackPref = pref === 'natural' ? 'day' : pref
    setTheme(getTheme(fallbackPref))
    turnWheel(getAngle(fallbackPref))
  }

  if (pref === 'natural' && 'geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(withPosition, withoutPosition, { timeout: 1000 })
  } else {
    withoutPosition()
  }
}

export default initThemePicker
