const handleChange = (event: any): void => {
  window.location.href = `#${event.target.value as string}`
}

export default handleChange
