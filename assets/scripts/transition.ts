import gsap from 'gsap'
import { TransitionProps } from 'nuxt/dist/app/compat/capi'
import { glTransition } from './glTransition'
import { resetScroll } from './utils/resetScroll'

export const pageTransition: TransitionProps = {
  duration: 1000,
  mode: 'out-in',
  css: false,
  appear: true,
  onEnter(el: HTMLElement, done) {
    const footer: HTMLElement = document.querySelector('.footer')
    gsap.fromTo(
      [el, footer],
      { opacity: 0, scale: 1.01, filter: 'blur(20px)' },
      {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        ease: 'power4.out',
        onComplete: () => {
          el.style.transform = ''
          el.style.filter = ''
          done()
        },
      }
    )

    resetScroll()
    if (document.body.classList.contains('gl-transition')) {
      glTransition(el)
    }
  },
  onLeave(el: HTMLElement, done) {
    const footer: HTMLElement = document.querySelector('.footer')
    window.ss && (window.ss.isFixed = true)

    gsap.fromTo(
      [el, footer],
      { opacity: 1, scale: 1, filter: 'blur(0px)' },
      {
        duration: 0.5,
        opacity: 0,
        scale: 0.99,
        filter: 'blur(20px)',
        ease: 'power4.in',
        onComplete: done,
      }
    )
  },
}
