const {
  raf,
  resize,
  clamp,
  lerp,
  createNewElement,
  mutationObserver,
  matrixTransform,
  delayPromise,
  keysGenerator,
} = process.client && (await import('@emotionagency/utils'))

export {
  raf,
  resize,
  clamp,
  lerp,
  createNewElement,
  mutationObserver,
  matrixTransform,
  delayPromise,
  keysGenerator,
}
