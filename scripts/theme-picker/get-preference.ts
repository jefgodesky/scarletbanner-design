type ThemePreference = 'day' | 'night' | 'natural'

const getPreference = (): ThemePreference => {
  const stored = window.localStorage.getItem('theme') as ThemePreference | null
  return stored !== null ? stored : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
}

export default getPreference
export { ThemePreference }
