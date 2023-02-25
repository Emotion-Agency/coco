import gsap from 'gsap'
import { delayPromise } from './utils/ea'

export const glTransition = async (el: HTMLElement) => {
  try {
    window.ss && (window.ss.isFixed = true)
    const $img = document.querySelector('.js-cloned') as HTMLElement
    if (window.scetch) {
      const f = window.scetch.figures.find(f => f._id === $img.dataset.glId)
      f && f.onClick()
    }

    await delayPromise(200)
    const to = el.querySelector('.product-1__img-li') as HTMLElement

    const toImg = to.querySelector('.product-1__img') as HTMLElement

    const { width, height, top, left } = to.getBoundingClientRect()
    const aspectRatio = window.getComputedStyle(toImg).aspectRatio

    gsap.to($img, {
      duration: 1,
      width,
      height,
      top,
      left,
      ease: 'power4.out',
      onComplete: () => {
        $img.style.position = 'relative'
        $img.style.zIndex = '1'
        $img.style.width = '100%'
        $img.style.height = '100%'
        $img.style.top = '0'
        $img.style.left = '0'
        $img.style.aspectRatio = aspectRatio || 'auto'
        document.body.classList.remove('gl-transition')
        $img.classList.remove('js-clicked')
        toImg.parentElement.removeChild(toImg)
        $img.parentElement.removeChild($img)
        to.appendChild($img)
        window.ss && (window.ss.isFixed = false)
      },
    })
  } catch (error) {
    console.log(error)
    window.ss && (window.ss.isFixed = false)
  }
}
