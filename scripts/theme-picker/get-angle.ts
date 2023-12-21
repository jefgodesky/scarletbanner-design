import { ThemePreference } from './get-preference'
import SunCalc from 'suncalc'

const getAngle = (pref: ThemePreference, time?: Date, latitude?: number, longitude?: number): number => {
  if (pref === 'day') return 0
  if (pref === 'night') return -180
  if (time === undefined || latitude === undefined || longitude === undefined) return 0

  const timestamp = time.getTime()
  const dayLen = 24 * 60 * 60 * 1000
  const times = SunCalc.getTimes(time, latitude, longitude)
  const sunrise = times.sunrise.getTime()
  const sunset = times.sunset.getTime()
  const lastSunset = SunCalc.getTimes(new Date(timestamp - dayLen), latitude, longitude).sunset.getTime()
  const nextSunrise = SunCalc.getTimes(new Date(timestamp + dayLen), latitude, longitude).sunrise.getTime()
  const start = Math.round((sunrise + lastSunset) / 2)
  const end = Math.round((nextSunrise + sunset) / 2)
  const len = end - start
  return (((timestamp - start) / len) * -360) + 180
}

export default getAngle
