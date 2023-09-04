import { create } from 'unobtrusive-dom'
import handleChange from './handle-change'

const createThemePickerWidget = (): void => {
  const select = create({ tag: 'select' }) as HTMLSelectElement
  select.appendChild(create({ tag: 'option', attrs: { value: 'day' }, text: 'Day' }))
  select.appendChild(create({ tag: 'option', attrs: { value: 'night' }, text: 'Night' }))
  select.appendChild(create({ tag: 'option', attrs: { value: 'natural' }, text: 'Natural' }))
  select.addEventListener('change', handleChange)

  const wrapper = create({ tag: 'div', attrs: { id: 'theme-picker' } })
  wrapper.appendChild(create({ tag: 'img', attrs: { id: 'theme-picker-frame', src: '/images/wheel-frame.svg', alt: 'Theme Picker Frame' }, classes: ['unboxed'] }))
  wrapper.appendChild(create({ tag: 'img', attrs: { id: 'theme-picker-wheel', src: '/images/wheel.png', alt: 'Theme Picker: Day or Night?' }, classes: ['unboxed'] }))
  wrapper.appendChild(select)

  document.body.appendChild(wrapper)
}

export default createThemePickerWidget
