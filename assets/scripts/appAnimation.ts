import gsap from 'gsap'
import textLineAnimation from './textLineAnimation'

export const appAnimation = () => {
  const $aT = document.querySelectorAll('[data-a-t]:not(.page-leave-to)')
  const $aO = document.querySelectorAll('[data-a-o]:not(.page-leave-to)')
  const $ah = document.querySelectorAll('[data-a-h]:not(.page-leave-to)')

  const tl = gsap.timeline()
  const ease = 'expo.out'

  $aT.length &&
    tl.to($aT, { duration: 2, y: '0%', opacity: 1, ease, stagger: 0.05 }, 0.2)
  $aO.length && tl.to($aO, { duration: 2, opacity: 1, ease }, 0.2)

  if (!document.body.classList.contains('gl-transition')) {
    gsap.to(document.querySelector('#gl'), { opacity: 1 })
  }

  setTimeout(() => {
    $ah.length &&
      $ah.forEach(el => {
        textLineAnimation.in(el)
      })
  }, 200)
}
