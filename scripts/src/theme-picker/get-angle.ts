import { ThemePreference } from './get-preference'
import SunCalc from 'suncalc'

const getAngle = (pref: ThemePreference, time?: Date, latitude?: number, longitude?: number): number => {
  const angles = {
    day: 0,
    night: 180,
    natural: time !== undefined && latitude !== undefined && longitude !== undefined
      ? SunCalc.getPosition(time, latitude, longitude).altitude * (180 / Math.PI)
      : 0
  }
  return angles[pref]
}

export default getAngle
