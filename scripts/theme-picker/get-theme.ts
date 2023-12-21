// import SunCalc from 'suncalc'
import { ThemePreference } from './get-preference'
import SunCalc from 'suncalc'

type Theme = 'day' | 'night'

const getTheme = (pref: ThemePreference, time?: Date, latitude?: number, longitude?: number): Theme => {
  if (pref === 'day' || pref === 'night') return pref
  if (time === undefined || latitude === undefined || longitude === undefined) return 'day'
  const times = SunCalc.getTimes(time, latitude, longitude)
  if (time >= times.sunrise && time <= times.sunset) return 'day'
  return 'night'
}

export default getTheme
export { Theme }
