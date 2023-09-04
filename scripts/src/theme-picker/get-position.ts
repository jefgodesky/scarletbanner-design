import { ThemePreference } from './get-preference'

const getPosition = async (pref: ThemePreference): Promise<GeolocationPosition | null> => {
  if (pref !== 'natural' || !('geolocation' in navigator)) return null
  let pos: GeolocationPosition | null = null
  await new Promise(() => {
    navigator.geolocation.getCurrentPosition(
      position => { pos = position },
      () => {},
      { timeout: 1000 }
    )
  })
  return pos
}

export default getPosition
