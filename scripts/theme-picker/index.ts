import createThemePickerWidget from './create-widget'
import getPreference from './get-preference'
import update from './update'

const initThemePicker = async (): Promise<void> => {
  const pref = getPreference()
  createThemePickerWidget(pref)
  await update(pref)
}

export default initThemePicker
