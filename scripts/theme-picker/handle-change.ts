import update from './update'

const handleChange = async (event: any): Promise<void> => {
  const { value } = event.target
  window.localStorage.setItem('theme', value)
  await update(value)
}

export default handleChange
