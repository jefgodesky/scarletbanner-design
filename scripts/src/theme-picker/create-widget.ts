import { create } from 'unobtrusive-dom'

const createThemePickerWidget = (): void => {
  const select = create({ tag: 'select' })
  select.appendChild(create({ tag: 'option', text: 'Day' }))
  select.appendChild(create({ tag: 'option', text: 'Night' }))
  select.appendChild(create({ tag: 'option', text: 'Natural' }))

  const wrapper = create({ tag: 'div', attrs: { id: 'theme-picker' } })
  wrapper.appendChild(create({ tag: 'img', attrs: { id: 'theme-picker-frame', src: '/images/wheel-frame.svg', alt: 'Theme Picker Frame' }, classes: ['unboxed'] }))
  wrapper.appendChild(create({ tag: 'img', attrs: { id: 'theme-picker-wheel', src: '/images/wheel.png', alt: 'Theme Picker: Day or Night?' }, classes: ['unboxed'] }))
  wrapper.appendChild(select)

  document.body.appendChild(wrapper)
}

export default createThemePickerWidget
