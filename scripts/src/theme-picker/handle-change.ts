const handleChange = (event: any): void => {
  window.localStorage.setItem('theme', event.target.value)
}

export default handleChange
