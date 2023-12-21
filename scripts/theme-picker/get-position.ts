import { ThemePreference } from './get-preference'

const getPosition = async (pref: ThemePreference): Promise<GeolocationPosition | null> => {
  if (pref !== 'natural' || !('geolocation' in navigator)) return null
  // noinspection TypeScriptValidateTypes
  return await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => resolve(position), reject, { timeout: 1000 }))
}

export default getPosition
