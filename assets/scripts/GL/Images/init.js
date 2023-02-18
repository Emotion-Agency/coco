import Images from './Images'

export const initImages = imgs => {
  if (!imgs) {
    return
  }
  const nodes = imgs.map(img => ({
    $el: img,
    Figure: Images,
  }))
  window.scetch.addFigures(nodes)
}
