import gsap from 'gsap'
import { delayPromise } from './utils/ea'

export const glTransition = async (el: HTMLElement) => {
  await delayPromise(100)
  const to = el.querySelector('.product-1__img-li') as HTMLElement

  const $img = document.querySelector('.js-cloned') as HTMLElement
  const toImg = to.querySelector('.product-1__img') as HTMLElement

  const { width, height, top, left } = to.getBoundingClientRect()

  gsap.to($img, {
    duration: 1,
    width,
    height,
    top,
    left,
    ease: 'expo.out',
    onComplete: () => {
      toImg.parentElement.removeChild(toImg)

      $img.parentElement.removeChild($img)
      to.appendChild($img)

      $img.style.position = 'relative'
      $img.style.zIndex = '1'
      $img.style.width = '100%'
      $img.style.height = '100%'
      $img.style.top = '0'
      $img.style.left = '0'
      $img.style.aspectRatio = 'auto'
      document.body.classList.remove('gl-transition')
    },
  })
}