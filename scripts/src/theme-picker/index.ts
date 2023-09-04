import createThemePickerWidget from './create-widget'
import getPreference from './get-preference'
import update from './update'

const initThemePicker = async (): Promise<void> => {
  createThemePickerWidget()
  const pref = getPreference()
  await update(pref)
}

export default initThemePicker
