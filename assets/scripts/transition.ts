import gsap from 'gsap'
import { TransitionProps } from 'nuxt/dist/app/compat/capi'
import { resetScroll } from './utils/resetScroll'

export const pageTransition: TransitionProps = {
  duration: 250,
  mode: 'out-in',
  css: false,
  appear: true,
  onEnter(el: HTMLElement, done) {
    gsap.fromTo(
      el,
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
  },
  onLeave(el, done) {
    gsap.fromTo(
      el,
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
    setTimeout(() => {
      resetScroll()
    }, 499)
  },
}
