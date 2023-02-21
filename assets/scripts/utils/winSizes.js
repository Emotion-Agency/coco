export const winSizes = () => {
  const vh = window.innerHeight
  const vw = window.innerWidth
  const oprientation = vh > vw ? 'portrait' : 'landscape'

  document.documentElement.style.setProperty('--vh', `${vh}px`)
  document.documentElement.style.setProperty('--vw', `${vw}px`)
  document.documentElement.style.setProperty(
    '--oprientation',
    `${oprientation}`
  )
}
