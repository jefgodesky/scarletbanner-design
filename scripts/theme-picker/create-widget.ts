import { create } from 'unobtrusive-dom'
import handleChange from './handle-change'
import { ThemePreference } from './get-preference'

const createThemePickerWidget = (pref: ThemePreference = 'natural'): void => {
  const select = create({ tag: 'select' }) as HTMLSelectElement
  const selected = 'selected'
  select.appendChild(create({ tag: 'option', attrs: pref === 'day' ? { value: 'day', selected } : { value: 'day' }, text: 'Day' }))
  select.appendChild(create({ tag: 'option', attrs: pref === 'night' ? { value: 'night', selected } : { value: 'night' }, text: 'Night' }))
  select.appendChild(create({ tag: 'option', attrs: pref === 'natural' ? { value: 'natural', selected } : { value: 'natural' }, text: 'Natural' }))
  select.addEventListener('change', (event) => { void handleChange(event) })

  const wrapper = create({ tag: 'div', attrs: { id: 'theme-picker' } })
  const base = process.env.BASE_PATH as string
  wrapper.appendChild(create({ tag: 'img', attrs: { id: 'theme-picker-frame', src: `${base}/images/wheel-frame.svg`, alt: 'Theme Picker Frame' }, classes: ['unboxed'] }))
  wrapper.appendChild(create({ tag: 'img', attrs: { id: 'theme-picker-wheel', src: `${base}/images/wheel.png`, alt: 'Theme Picker: Day or Night?' }, classes: ['unboxed'] }))
  wrapper.appendChild(select)

  document.body.appendChild(wrapper)
}

export default createThemePickerWidget
